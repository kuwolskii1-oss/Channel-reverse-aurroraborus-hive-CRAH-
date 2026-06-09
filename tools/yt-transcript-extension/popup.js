/* CRAH YT Transcript Grabber — popup controller.
 * Injects an extractor into the active YouTube tab (MAIN world, so it can read
 * the page's ytInitialPlayerResponse), pulls the caption track, and downloads
 * the transcript as TXT or CRAH-ready JSON. No API key / OAuth / server needed —
 * runs entirely in the user's authenticated browser. */

const $ = (id) => document.getElementById(id);
const setStatus = (m) => { $("status").textContent = m; };

/* Runs in the PAGE context. Returns {videoId,title,lang,segments[]} or {error}. */
async function extractInPage() {
  try {
    const pr = window.ytInitialPlayerResponse;
    if (!pr) return { error: "Player data not found. Reload the watch page and retry." };
    const tracks = pr.captions
      && pr.captions.playerCaptionsTracklistRenderer
      && pr.captions.playerCaptionsTracklistRenderer.captionTracks;
    if (!tracks || !tracks.length) return { error: "This video has no caption/transcript track." };

    // Prefer a manual English track, then any English, then the first track.
    const pick = tracks.find(t => t.languageCode === "en" && t.kind !== "asr")
      || tracks.find(t => t.languageCode === "en")
      || tracks[0];

    const url = pick.baseUrl + (pick.baseUrl.includes("?") ? "&" : "?") + "fmt=json3";
    const res = await fetch(url, { credentials: "include" });
    if (!res.ok) return { error: "Failed to fetch caption track (" + res.status + ")." };
    const data = await res.json();

    const segments = (data.events || [])
      .filter(e => e.segs)
      .map(e => ({
        t: Math.round((e.tStartMs || 0) / 1000),
        text: e.segs.map(s => s.utf8).join("").replace(/\s+/g, " ").trim()
      }))
      .filter(s => s.text);

    const vd = (pr.videoDetails || {});
    return {
      videoId: vd.videoId || "",
      title: vd.title || document.title.replace(/ - YouTube$/, ""),
      author: vd.author || "",
      lang: pick.languageCode || "",
      kind: pick.kind === "asr" ? "asr" : "manual",
      segments
    };
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
