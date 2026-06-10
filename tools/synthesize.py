#!/usr/bin/env python3
"""STATE 13 Voice adapter — script -> ElevenLabs TTS -> narration mp3 (CRAH).

Reads the final script, chunks it on sentence/paragraph boundaries (under the
per-request char limit), synthesizes each chunk via ElevenLabs, and stitches the
parts into one mp3 with ffmpeg. See docs/stage13-voice.md.

Runs anywhere the ElevenLabs API is reachable: locally (no firewall), or in the
CRAH sandbox once `api.elevenlabs.io` is allowlisted. In the default sandbox the
host is blocked ("Host not in allowlist") and this exits with a clear message.

Env:
  ELEVENLABS_API_KEY   (required)
  ELEVENLABS_VOICE_ID  (required — pick a calm, deadpan male voice to match the
                        source narrator; e.g. from your ElevenLabs Voices page)
  ELEVENLABS_MODEL     (optional, default 'eleven_multilingual_v2')

Usage:
  python tools/synthesize.py path/to/script.txt -o voice/bernard-narration.mp3
"""
import argparse
import os
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.error
import urllib.request

API = "https://api.elevenlabs.io/v1/text-to-speech/"
CHUNK_CHARS = 2200  # safely under ElevenLabs per-request limits


def log(m): print(f"[synthesize] {m}", file=sys.stderr)


def ffmpeg_exe():
    exe = shutil.which("ffmpeg")
    if exe:
        return exe
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        sys.exit("[synthesize] ffmpeg not found. `pip install imageio-ffmpeg`.")


def chunk(text):
    """Split into <=CHUNK_CHARS pieces on sentence/paragraph boundaries."""
    sentences = re.split(r"(?<=[.!?])\s+", " ".join(text.split()))
    out, cur = [], ""
    for s in sentences:
        if len(cur) + len(s) + 1 > CHUNK_CHARS and cur:
            out.append(cur.strip()); cur = ""
        cur += " " + s
    if cur.strip():
        out.append(cur.strip())
    return out


def tts(piece, key, voice, model, out_path):
    body = f'{{"text":{_json(piece)},"model_id":"{model}",' \
           f'"voice_settings":{{"stability":0.5,"similarity_boost":0.75}}}}'
    req = urllib.request.Request(
        API + voice, data=body.encode("utf-8"), method="POST",
        headers={"xi-api-key": key, "Content-Type": "application/json",
                 "Accept": "audio/mpeg"})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            data = r.read()
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", "ignore")[:300]
        if "Host not in allowlist" in detail or e.code == 403 and "allowlist" in detail:
            sys.exit("[synthesize] api.elevenlabs.io is BLOCKED by this "
                     "environment's network policy ('Host not in allowlist'). "
                     "Allowlist the host or run this on your own machine.")
        sys.exit(f"[synthesize] ElevenLabs HTTP {e.code}: {detail}")
    except urllib.error.URLError as e:
        sys.exit(f"[synthesize] network error reaching ElevenLabs: {e.reason} "
                 "(host likely firewalled here — run locally or allowlist it).")
    with open(out_path, "wb") as f:
        f.write(data)


def _json(s):
    import json
    return json.dumps(s, ensure_ascii=False)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("script", help="path to the script .txt/.md")
    ap.add_argument("-o", "--out", default="voice/narration.mp3")
    args = ap.parse_args()

    key = os.environ.get("ELEVENLABS_API_KEY")
    voice = os.environ.get("ELEVENLABS_VOICE_ID")
    model = os.environ.get("ELEVENLABS_MODEL", "eleven_multilingual_v2")
    if not key or not voice:
        sys.exit("[synthesize] set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID.")

    text = open(args.script, encoding="utf-8").read().strip()
    if not text:
        sys.exit("[synthesize] script file is empty.")
    pieces = chunk(text)
    log(f"{len(text)} chars -> {len(pieces)} chunk(s); voice={voice} model={model}")

    os.makedirs(os.path.dirname(os.path.abspath(args.out)), exist_ok=True)
    with tempfile.TemporaryDirectory() as wd:
        parts = []
        for i, p in enumerate(pieces, 1):
            part = os.path.join(wd, f"part-{i:03d}.mp3")
            log(f"synth chunk {i}/{len(pieces)} ({len(p)} chars)…")
            tts(p, key, voice, model, part)
            parts.append(part)
        # stitch with ffmpeg concat demuxer
        listing = os.path.join(wd, "list.txt")
        with open(listing, "w") as f:
            for p in parts:
                f.write(f"file '{p}'\n")
        subprocess.run([ffmpeg_exe(), "-y", "-f", "concat", "-safe", "0",
                        "-i", listing, "-c", "copy", args.out],
                       check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    log(f"done -> {args.out}")
    print(args.out)


if __name__ == "__main__":
    main()
