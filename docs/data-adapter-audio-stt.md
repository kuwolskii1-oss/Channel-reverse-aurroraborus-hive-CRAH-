# audio_stt adapter — audio → speech-to-text → transcript (STATE 3)

Optional STATE 3 transcript source for the **Recon Cell**. Turns a video's
**audio** into a transcript when a pasted/caption transcript isn't available.
Pattern: **acquire audio → decode to 16 kHz mono WAV (ffmpeg) → ASR → text.**

> **Why this is usually a fallback, not the default.** YouTube already runs ASR
> on every upload — the auto-caption track (`captions.list`) *is* a Whisper-grade
> transcript. Re-transcribing the audio reproduces it at lower quality. Reach for
> this adapter only when captions are disabled/unavailable, or when working from
> a non-YouTube source.

## Pipeline stages & where each can break
| Stage | Tool | Needs network to… |
|---|---|---|
| 1. Acquire audio | `yt-dlp` (URL) **or** operator-supplied file | reach `youtube.com` / `googlevideo.com` |
| 2. Decode → 16k mono WAV | `ffmpeg` (bundled via `imageio-ffmpeg`, pip) | nothing (offline once installed) |
| 3. ASR | `faster-whisper` (primary) | fetch model weights from `huggingface.co` (first run; cached after) |
| 3b. ASR offline fallback | `vosk` / `pocketsphinx` (model in pip wheel) | nothing — fully offline, lower accuracy |
| 3c. ASR cloud option | Google Cloud Speech-to-Text | `speech.googleapis.com` + API enabled + OAuth/SA |

## This environment (CRAH sandbox) — what works
- ✅ `pip` installs (`pypi.org`, `files.pythonhosted.org` reachable) — ffmpeg binary obtained.
- ✅ ffmpeg decode (stage 2) runs locally.
- ❌ Stage 1 audio fetch blocked: `youtube.com` 403, `googlevideo.com` unreachable.
- ❌ Stage 3 weights blocked: `huggingface.co` / `openaipublic.azureedge.net` 403.
- ❌ Cloud STT: `speech.googleapis.com` reachable but API-key rejected (403; needs API enabled + OAuth/SA); `api.openai.com` blocked.

**Net:** in this sandbox the adapter runs only if (a) the operator **supplies the
audio file** (bypasses stage 1) **and** (b) an ASR model is reachable or
pre-cached, or the offline fallback is used. For full unattended operation,
allowlist `youtube.com`, `googlevideo.com`, `huggingface.co` (or enable the
Cloud Speech-to-Text API).

## Usage
```
# Operator-supplied audio (works here, given an ASR model):
python tools/transcribe.py path/to/video.mp3 > transcript.txt

# Direct from URL (needs youtube.com/googlevideo.com allowlisted + yt-dlp):
python tools/transcribe.py "https://www.youtube.com/watch?v=VIDEO_ID" > transcript.txt
```
Output is plain text suitable for the STATE 3 transcript slots. The Recon Cell
then validates completeness (full video, not a clip) before STATE 5 Style DNA.

## Precedence for STATE 3
1. Operator-pasted transcript (fastest, highest fidelity — YouTube's own ASR).
2. Caption download (`captions.download`) — **requires channel-owner OAuth**; N/A for third-party channels.
3. **audio_stt** (this) — only when 1–2 unavailable.
