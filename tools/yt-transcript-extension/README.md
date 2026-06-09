# CRAH YT Transcript Grabber (browser extension)

One-click download of a YouTube video's full transcript — as **plain text** or
**CRAH-ready JSON** — for STATE 3 ingestion by the Recon Cell.

## Why this exists
The CRAH sandbox can't fetch transcripts: `youtube.com`/`googlevideo.com` are
firewalled and the caption API is OAuth-/owner-only. But your **browser** has
none of those limits — it's already authenticated to YouTube and loads the
caption (`timedtext`) tracks normally. This extension grabs the transcript
client-side, no API key or server required.

## Install (unpacked, ~30 s)
1. Chrome/Edge → `chrome://extensions` → enable **Developer mode**.
2. **Load unpacked** → select this `yt-transcript-extension/` folder.
   (Firefox: `about:debugging` → **This Firefox** → **Load Temporary Add-on** →
   pick `manifest.json`.)

## Use
1. Open any YouTube video (`youtube.com/watch?v=…`). If captions exist, this works.
2. Click the extension icon → choose **CRAH JSON** (recommended) → **Download transcript**.
3. Repeat for 2–3 videos.

## How agents use the output
The extension runs in your browser; the agents run in the CRAH sandbox — they
can't reach each other directly. The bridge is simple: **drop the downloaded
file(s) into the session.** The JSON is shaped for direct STATE 3 ingestion:

```json
{
  "source": "youtube",
  "videoId": "...",
  "title": "...",
  "author": "...",
  "lang": "en",
  "captionKind": "asr|manual",
  "capturedAt": "ISO-8601",
  "text": "full transcript as one string",
  "segments": [{ "t": 12, "text": "..." }]
}
```
The Recon Cell reads `text` (and `segments` for timestamps), validates it's a
full video (not a clip), and proceeds to Style DNA.

## Notes / limits
- Needs a caption track on the video (manual or auto). Bernard's videos have one.
- YouTube is a single-page app: if you navigated between videos without a reload
  and extraction fails, reload the watch page once and retry.
- Picks a manual English track if present, else any English, else the first track.

## Stretch: true zero-touch (optional, not built)
The extension could upload the JSON to a shared location the sandbox *can* read
(e.g. Google Drive via the allowlisted `googleapis.com`), letting an agent pull
it without a manual drop. That needs an OAuth client + Drive scope — ask and it
can be added.
