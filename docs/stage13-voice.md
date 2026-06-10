# STATE 13 — Voice Generation (Voice Cell)

Turns the final STATE 6 script into **narration audio** that matches the source
channel's voiceover. Runs after STATE 12. Owned by the **Voice Cell**.

## Inputs
- **STATE 6 script** — the locked, final narration text (the contract).
- **STATE 5 Style DNA** — pacing target (words/sec) and tone.
- **Voice profile** — derived from the source channel's narrator (see below).

## Voice profile (match, don't impersonate)
Reproduce the *delivery style*, not a specific person's identity. For Bernard:
calm, measured, deadpan **male** narrator; flat affect that underplays grim
content; minimal emotional swing; clear diction; steady cadence at the Style-DNA
pace (**≈2.25–2.3 words/sec ≈ 135–138 wpm**) with short pauses at paragraph
breaks. No theatrical narration, no hype. Do NOT clone a real individual's voice;
use a neutral synthetic voice in the same register.

## Output
- Primary: one continuous narration file (`voice/<slug>-narration.mp3` or `.wav`).
- Optional: **per-beat clips** aligned to the 241 STATE 8/9 beats
  (`voice/<slug>/beat-001.mp3 …`) so narration can be synced to the image/video
  timeline downstream. Generate these only if requested.
- Record duration + the backend used in the session file; target runtime should
  land near the script's expected ~22–23 min at the Style-DNA pace.

## Backends (in precedence order)
| Backend | Type | Notes / sandbox status |
|---|---|---|
| Operator-supplied audio | external | Operator generates in their own TTS tool (e.g. ElevenLabs, in-browser) and drops the file in — most reliable here; mirrors the STATE 3 transcript handoff. |
| Google Cloud Text-to-Speech | cloud API | `texttospeech.googleapis.com` is in the allowlisted `googleapis.com` family, but needs the API enabled + OAuth/service-account (API key alone is rejected, like Speech-to-Text). |
| ElevenLabs / OpenAI / Azure TTS | cloud API | High quality, but `api.elevenlabs.io` / `api.openai.com` are firewalled in this sandbox; usable only where network policy allows + a key is set. |
| Piper / Coqui (local) | local, pip | `pip` works here and `ffmpeg` is available, but voice model weights download from `huggingface.co`, which is firewalled. Works only if weights are pre-cached or HF is allowlisted. |

**This sandbox:** same wall as STATE 3/audio — cloud TTS hosts and HF model
weights are blocked. So in-environment auto-generation is not currently possible;
the reliable path is **operator-supplied audio** (generate in an external TTS,
drop the file), or widen the network policy / enable Cloud TTS for unattended
runs. A `tools/synthesize.py` helper can be added (script → 16-bit WAV via a
TTS backend → ffmpeg to mp3) once a reachable backend exists.

## Procedure
1. Confirm/define the voice profile from the source narrator.
2. Pick the highest-precedence available backend.
3. Synthesize the full script at the Style-DNA pace; keep punctuation-driven
   pauses; do not alter the script wording.
4. (Optional) Render per-beat clips for timeline sync.
5. Write audio to `voice/`, record path + duration + backend in the session
   file, flip STATE 13 `pending` → `✓ done`.

## Global rules
Original output only — synthesize the original script; never reuse the source
channel's actual audio. Match the narrator's *style/pacing*, not their identity.
