#!/usr/bin/env python3
"""audio_stt adapter — audio/URL -> transcript (CRAH STATE 3 fallback).

Pipeline: acquire audio -> decode to 16 kHz mono WAV (ffmpeg) -> ASR -> text.
See docs/data-adapter-audio-stt.md. Stages degrade gracefully and report
exactly which stage is blocked rather than failing opaquely.

Usage:
    python tools/transcribe.py path/to/audio.mp3
    python tools/transcribe.py "https://www.youtube.com/watch?v=VIDEO_ID"
"""
import os
import sys
import shutil
import subprocess
import tempfile


def log(msg):
    print(f"[transcribe] {msg}", file=sys.stderr)


def ffmpeg_exe():
    """Return a usable ffmpeg path: system binary, else the pip-bundled one."""
    exe = shutil.which("ffmpeg")
    if exe:
        return exe
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        sys.exit("[transcribe] ffmpeg not found. `pip install imageio-ffmpeg`.")


def acquire(src, workdir):
    """Return a local audio path. If src is a URL, fetch via yt-dlp (stage 1)."""
    if os.path.isfile(src):
        return src
    if src.startswith(("http://", "https://")):
        if not shutil.which("yt-dlp"):
            sys.exit("[transcribe] URL given but yt-dlp absent, and youtube.com/"
                     "googlevideo.com are firewalled in this environment. Supply "
                     "a local audio file instead, or allowlist those hosts.")
        out = os.path.join(workdir, "audio.%(ext)s")
        log("fetching audio via yt-dlp ...")
        subprocess.run(["yt-dlp", "-f", "bestaudio", "-o", out, src], check=True)
        for f in os.listdir(workdir):
            if f.startswith("audio."):
                return os.path.join(workdir, f)
        sys.exit("[transcribe] yt-dlp produced no audio file.")
    sys.exit(f"[transcribe] not a file or URL: {src}")


def to_wav(src_audio, workdir):
    """Decode to 16 kHz mono WAV (stage 2 — works offline once ffmpeg present)."""
    wav = os.path.join(workdir, "audio16k.wav")
    log("decoding to 16 kHz mono WAV ...")
    subprocess.run([ffmpeg_exe(), "-y", "-i", src_audio, "-ac", "1",
                    "-ar", "16000", "-vn", wav],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    return wav


def transcribe(wav):
    """ASR (stage 3). faster-whisper primary; vosk offline fallback."""
    try:
        from faster_whisper import WhisperModel
        size = os.environ.get("STT_MODEL", "base.en")
        log(f"ASR via faster-whisper ({size}) ...")
        model = WhisperModel(size, device="cpu", compute_type="int8")
        segments, _ = model.transcribe(wav, vad_filter=True)
        return " ".join(s.text.strip() for s in segments).strip()
    except Exception as e:
        log(f"faster-whisper unavailable ({e}); trying offline vosk ...")
    try:
        import json
        import wave
        from vosk import Model, KaldiRecognizer
        model = Model(lang="en-us")
        wf = wave.open(wav, "rb")
        rec = KaldiRecognizer(model, wf.getframerate())
        out = []
        while True:
            data = wf.readframes(4000)
            if not data:
                break
            if rec.AcceptWaveform(data):
                out.append(json.loads(rec.Result()).get("text", ""))
        out.append(json.loads(rec.FinalResult()).get("text", ""))
        return " ".join(t for t in out if t).strip()
    except Exception as e:
        sys.exit("[transcribe] No ASR backend available. faster-whisper needs "
                 "model weights from huggingface.co (firewalled here); vosk "
                 f"fallback also failed ({e}). Pre-cache a model, allowlist "
                 "huggingface.co, or paste the transcript instead.")


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    with tempfile.TemporaryDirectory() as wd:
        text = transcribe(to_wav(acquire(sys.argv[1], wd), wd))
    if not text:
        sys.exit("[transcribe] empty transcript.")
    print(text)


if __name__ == "__main__":
    main()
