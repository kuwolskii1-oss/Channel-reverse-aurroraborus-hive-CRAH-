/* CRAH YT Transcript Grabber — popup controller.
 * Injects an extractor into the active YouTube tab (MAIN world, so it can read
 * the page's ytInitialPlayerResponse), pulls the caption track, and downloads
 * the transcript as TXT or CRAH-ready JSON. No API key / OAuth / server needed —
 * runs entirely in the user's authenticated browser. */

const $ = (id) => document.getElementById(id);
const setStatus = (m) => { $("status").textContent = m; };

/* Runs in the PAGE context. Returns {videoId,title,...,segments[]} or {error}.
 * Tries three methods in order, because YouTube's bot-protection token now
 * makes direct caption fetches return empty bodies on many videos:
 *   (1) timedtext json3 fetch  (fast, clean — when the URL token is valid)
 *   (2) timedtext XML fetch    (same endpoint, default format)
 *   (3) DOM scrape of YouTube's own rendered "Show transcript" panel (robust). */
async function extractInPage() {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const pr = window.ytInitialPlayerResponse || {};
  const vd = pr.videoDetails || {};
  const meta = {
    videoId: vd.videoId || new URLSearchParams(location.search).get("v") || "",
    title: vd.title || document.title.replace(/\s*-\s*YouTube$/, ""),
    author: vd.author || ""
  };

  // --- methods 1 & 2: fetch the caption track URL directly ---
  async function fetchTrack() {
    const tracks = pr.captions
      && pr.captions.playerCaptionsTracklistRenderer
      && pr.captions.playerCaptionsTracklistRenderer.captionTracks;
    if (!tracks || !tracks.length) return null;
    const pick = tracks.find((t) => t.languageCode === "en" && t.kind !== "asr")
      || tracks.find((t) => t.languageCode === "en")
      || tracks[0];
    const base = pick.baseUrl;
    // json3
    try {
      const u = base + (base.includes("?") ? "&" : "?") + "fmt=json3";
      const body = await (await fetch(u, { credentials: "include" })).text();
      if (body && body.trim()) {
        const data = JSON.parse(body);
        const segs = (data.events || []).filter((e) => e.segs).map((e) => ({
          t: Math.round((e.tStartMs || 0) / 1000),
          text: e.segs.map((s) => s.utf8).join("").replace(/\s+/g, " ").trim()
        })).filter((s) => s.text);
        if (segs.length) return { lang: pick.languageCode || "", kind: pick.kind === "asr" ? "asr" : "manual", segments: segs };
      }
    } catch (e) { /* fall through to XML */ }
    // XML
    try {
      const body = await (await fetch(base, { credentials: "include" })).text();
      if (body && body.trim()) {
        const doc = new DOMParser().parseFromString(body, "text/xml");
        const segs = [...doc.querySelectorAll("text")].map((n) => ({
          t: Math.round(parseFloat(n.getAttribute("start") || "0")),
          text: (n.textContent || "").replace(/\s+/g, " ").trim()
        })).filter((s) => s.text);
        if (segs.length) return { lang: pick.languageCode || "", kind: pick.kind === "asr" ? "asr" : "manual", segments: segs };
      }
    } catch (e) { /* fall through to DOM scrape */ }
    return null;
  }

  // --- method 3: open + scrape YouTube's rendered transcript panel ---
  function readPanel() {
    const rows = [...document.querySelectorAll("ytd-transcript-segment-renderer")];
    if (!rows.length) return null;
    const segs = rows.map((r) => {
      const ts = (r.querySelector(".segment-timestamp")?.textContent || "").trim();
      const tx = (r.querySelector(".segment-text, yt-formatted-string.segment-text")?.textContent || "").trim();
      const sec = ts.split(":").map(Number).reduce((a, b) => a * 60 + b, 0) || 0;
      return { t: sec, text: tx.replace(/\s+/g, " ").trim() };
    }).filter((s) => s.text);
    return segs.length ? segs : null;
  }
  async function scrapePanel() {
    let segs = readPanel();
    if (segs) return { lang: "", kind: "panel", segments: segs };
    const expand = document.querySelector("tp-yt-paper-button#expand, #expand");
    if (expand) { expand.click(); await sleep(350); }
    const btn = [...document.querySelectorAll("button, yt-button-shape button, ytd-button-renderer button")]
      .find((b) => /transcript/i.test((b.getAttribute("aria-label") || "") + " " + (b.textContent || "")));
    if (btn) btn.click();
    for (let i = 0; i < 40 && !segs; i++) { await sleep(200); segs = readPanel(); }
    return segs ? { lang: "", kind: "panel", segments: segs } : null;
  }

  try {
    if (!pr || !pr.captions) {
      if (!/\/watch/.test(location.pathname)) {
        return { error: "Open the video's watch page (youtube.com/watch?v=…), not the homepage or channel page." };
      }
    }
    const got = (await fetchTrack()) || (await scrapePanel());
    if (!got) {
      return { error: "No transcript found. Confirm the video has captions, the description is expanded, then retry. If it persists, reload the page once first." };
    }
    return Object.assign(meta, got);
  } catch (e) {
    return { error: "Extractor error: " + (e && e.message ? e.message : String(e)) };
  }
}

function mmss(sec) {
  const m = Math.floor(sec / 60), s = sec % 60;
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function buildFile(r, fmt, withTs) {
  const safe = (r.title || r.videoId || "transcript").replace(/[^\w\-]+/g, "_").slice(0, 60);
  if (fmt === "json") {
    // CRAH STATE 3 ingestion shape: one record the Recon Cell reads directly.
    const payload = {
      source: "youtube",
      videoId: r.videoId,
      title: r.title,
      author: r.author,
      lang: r.lang,
      captionKind: r.kind,
      capturedAt: new Date().toISOString(),
      text: r.segments.map(s => s.text).join(" "),
      segments: r.segments
    };
    return { name: `transcript_${safe}.json`,
             body: JSON.stringify(payload, null, 2), mime: "application/json" };
  }
  const lines = r.segments.map(s => withTs ? `[${mmss(s.t)}] ${s.text}` : s.text);
  const header = `# ${r.title}\n# videoId: ${r.videoId} | lang: ${r.lang} (${r.kind})\n\n`;
  return { name: `transcript_${safe}.txt`, body: header + lines.join(withTs ? "\n" : " "),
           mime: "text/plain" };
}

/* Runs in PAGE context. Draws the current <video> frame to a canvas and returns
 * a PNG data URL. Works for standard (non-DRM) YouTube video like Bernard's;
 * DRM/EME content taints the canvas and throws — caller falls back to a manual
 * screenshot. */
function captureFrameInPage() {
  try {
    const v = document.querySelector("video.html5-main-video") || document.querySelector("video");
    if (!v) return { error: "No video element found. Open a watch page and start the video." };
    if (!v.videoWidth || !v.videoHeight) return { error: "Video not ready yet. Let it play for a second, then retry." };
    const c = document.createElement("canvas");
    c.width = v.videoWidth; c.height = v.videoHeight;
    c.getContext("2d").drawImage(v, 0, 0, c.width, c.height);
    let dataUrl;
    try {
      dataUrl = c.toDataURL("image/png");
    } catch (sec) {
      return { error: "Canvas blocked (DRM/tainted): " + sec.message + " — use a manual screenshot (Win+Shift+S) for this video." };
    }
    const vd = (window.ytInitialPlayerResponse || {}).videoDetails || {};
    return {
      dataUrl,
      time: Math.floor(v.currentTime || 0),
      w: c.width, h: c.height,
      videoId: vd.videoId || new URLSearchParams(location.search).get("v") || "",
      title: vd.title || document.title.replace(/\s*-\s*YouTube$/, "")
    };
  } catch (e) {
    return { error: "Capture error: " + (e && e.message ? e.message : String(e)) };
  }
}

$("grab").addEventListener("click", async () => {
  $("grab").disabled = true;
  setStatus("Capturing frame…");
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !/^https:\/\/www\.youtube\.com\/watch/.test(tab.url || "")) {
      setStatus("Open a YouTube video (youtube.com/watch?v=…) first.");
      $("grab").disabled = false; return;
    }
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id }, world: "MAIN", func: captureFrameInPage
    });
    if (!result || result.error) { setStatus(result ? result.error : "No result."); $("grab").disabled = false; return; }
    const safe = (result.title || result.videoId || "frame").replace(/[^\w\-]+/g, "_").slice(0, 50);
    const name = `frame_${safe}_${mmss(result.time)}.png`;
    await chrome.downloads.download({ url: result.dataUrl, filename: name, saveAs: true });
    setStatus(`Saved ${name}\n${result.w}×${result.h} at ${mmss(result.time)}.`);
  } catch (e) {
    setStatus("Error: " + (e && e.message ? e.message : String(e)));
  }
  $("grab").disabled = false;
});

$("go").addEventListener("click", async () => {
  $("go").disabled = true;
  setStatus("Reading transcript…");
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !/^https:\/\/www\.youtube\.com\/watch/.test(tab.url || "")) {
      setStatus("Open a YouTube video (youtube.com/watch?v=…) first.");
      $("go").disabled = false; return;
    }
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id }, world: "MAIN", func: extractInPage
    });
    if (!result || result.error) { setStatus(result ? result.error : "No result."); $("go").disabled = false; return; }
    if (!result.segments.length) { setStatus("Transcript was empty."); $("go").disabled = false; return; }

    const file = buildFile(result, $("fmt").value, $("ts").checked);
    const blobUrl = URL.createObjectURL(new Blob([file.body], { type: file.mime }));
    await chrome.downloads.download({ url: blobUrl, filename: file.name, saveAs: true });
    setStatus(`Saved ${file.name}\n${result.segments.length} segments captured.`);
  } catch (e) {
    setStatus("Error: " + (e && e.message ? e.message : String(e)));
  }
  $("go").disabled = false;
});
