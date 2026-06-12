# CRAH Autonomy Gaps — full retrospective (STATE 1 → 14)

Every point in the Bernard demo run where a human had to intervene, or where
automation was blocked/unreliable. Grouped by root cause, then walked per state.
This is the backlog for making run #2 hands-off.

## A. Root causes (cross-cutting — these generate most per-state gaps)

1. **Network firewall (allowlist).** The sandbox only reaches `googleapis.com`,
   `pypi.org`/`files.pythonhosted.org`, and the git proxy. Everything else returns
   `403 "Host not in allowlist"`: `youtube.com`, `googlevideo.com`,
   `ggpht.com`/`googleusercontent.com` (images/thumbnails), `api.elevenlabs.io`,
   `api.openai.com`, `huggingface.co`, `openaipublic.azureedge.net`,
   `mcp.higgsfield.ai`/`cloud.higgsfield.ai`/`higgsfield.ai`, and the Azure blob
   host that serves Actions artifacts. This single constraint forces every
   external integration to run operator-side or in GitHub Actions.
2. **No provisioned credentials.** Every external service needed an operator key/
   account: YouTube Data API key, ElevenLabs key, Higgsfield account. None exist
   in the environment.
3. **OAuth / ownership walls.** YouTube caption download (channel-owner OAuth),
   Higgsfield MCP (interactive account OAuth), Google Cloud STT/TTS (OAuth/service
   account) — none can be completed headless by an agent.
4. **Subagents can't perceive images.** Only the Queen (top-level) can view
   operator-uploaded images; worker cells receive text relays. Limits every
   visual state.
5. **Can't set GitHub Actions secrets programmatically.** No MCP tool exists;
   forced a masked-dispatch-input workaround (weaker than a real secret).
6. **Can't download binary artifacts.** Actions artifacts live on a firewalled
   Azure blob host, so the hive can't pull the voice mp3 / render outputs;
   operator downloads them.
7. **Session / usage limits.** Long background subagents hit "session limit"
   (interrupted STATE 9; required cleanup); mid-run model switch also occurred.
8. **Human-in-the-loop by design.** CRAH's own rules stop after every state and
   wait for the operator, plus explicit decision/sign-off gates (topic pick,
   pilot sign-off). Deliberate, but it is by definition not "full autonomy."
9. **Source media is operator-supplied.** Transcripts, sample frames, and
   thumbnails all had to come from the operator because YouTube media is
   firewalled and the caption API is owner-only.
10. **Autonomy quality risk (not just access).** STATE 1's first pass committed a
    *wrong* winner confidently from web-search estimates — bad data produced a
    confident bad decision until verified metrics corrected it.

## B. Per-state walk

| State | Human intervention / blocker | Root cause | Status |
|-------|------------------------------|-----------|--------|
| 1 Recon (select) | `api_mcp` adapter was inert → first commit used web-search **estimates** and picked the wrong channel; needed operator's **YouTube API key** to get verified metrics. Sub-velocity-30d still not available (proxy used). Key pasted in chat. | 2, 1, 10 | Adapter built; needs key (operator) |
| 2 Brand | Needed branding screenshots; couldn't fetch Bernard's avatar/banner (image CDN firewalled) → brief built from text metadata, not pixels. Operator's desired name not given. | 1, 9 | Workaround (text-only) |
| 3 Recon (transcripts) | **Hard block.** Caption API is owner-OAuth-only; `youtube.com`/timedtext firewalled. Built a browser extension, but operator must install it, capture per video, and upload. GitHub-Actions alternative unreliable (YouTube blocks datacenter IPs). | 1, 3, 9 | Operator-side workaround |
| 4 Strategy (topic) | Ran autonomously (idea gen + panel vote); operator chose mode + held override/decision gate. | 8 | By-design gate |
| 5 Strategy (Style DNA) | Fully autonomous. | — | OK |
| 6 Script | Autonomous; one background subagent hit a session limit (recovered). | 7 | OK (interrupt risk) |
| 7 Visual (profile) | Needed 3–5 video **frames**; sandbox can't fetch frames (firewall); **Queen had to view the images and relay text** to the blind Visual Cell. Extended the extension for frame capture, still operator-captured. | 1, 4, 9 | Operator-side workaround |
| 8 Visual (image prompts) | Autonomous (241 prompts); long run. | 7 | OK |
| 9 Visual (video prompts) | Autonomous, but the subagent **hit a session limit** mid-run; Queen finished the bookkeeping. | 7 | OK (interrupted) |
| 10 Packaging (thumb analysis) | Needed operator thumbnails; same image-fetch firewall + cells-can't-see-images relay. | 1, 4, 9 | Operator-side |
| 11 Packaging (thumbnails) | Produces concepts + image-gen **prompts**, not rendered images (no image gen in-sandbox). | 1 | Prompts only |
| 12 Export | Autonomous (`python-docx`); delivered via SendUserFile. | — | OK |
| 13 Voice | **Hard block.** All TTS hosts firewalled; local model weights firewalled. Needed operator **ElevenLabs key**. Ran via GitHub Actions, but **couldn't set the secret via MCP** → key passed as masked dispatch input (chat + dispatch exposure). Sandbox **couldn't download** the resulting mp3 (Azure blob firewalled) → operator downloads. | 1, 2, 5, 6 | Solved via Actions + operator |
| 14 Render (Higgsfield) | **Hardest block.** All Higgsfield hosts firewalled; MCP needs interactive OAuth. Generation runs **entirely on the operator's Claude**; the hive can't trigger it, can't see outputs, can't QA them. Plus cost gate (241 clips) + character-consistency problem force a human pilot/sign-off. | 1, 3, 4, 8 | Operator-side only |
| (post-14) Final assembly | No automated step stitches the 241 clips + narration + per-beat timing into the final video. Unbuilt; would face the same media constraints. | 1 | Not built |

## C. Minimum changes for full (or near-full) autonomy

- **Open the network policy** for the needed hosts (or run media steps in a
  CI/runner that can): YouTube + transcript path, image CDN, ElevenLabs, Higgsfield,
  HuggingFace, Azure artifact host. This removes the majority of gaps at once.
- **Provision credentials in a secret store** (env secrets / Actions secrets):
  YouTube, ElevenLabs, Higgsfield — so no chat-pasted keys, no manual secret entry.
- **Solve transcript acquisition** robustly: residential proxy or cookies for
  yt-dlp/transcript API in CI, or an official data source.
- **Give cells image perception** (or route all visual analysis through the
  vision-capable layer) so STATE 7/10 don't depend on the Queen relaying.
- **Headless generation auth:** Higgsfield/ElevenLabs/TTS via API tokens (not
  interactive OAuth) so STATE 13–14 run unattended; add artifact retrieval that
  isn't firewalled.
- **Build STATE 15 assembly** (stitch clips + narration + captions → final cut)
  and a render-QA agent that can actually see and grade outputs.
- **Robustness:** chunk long subagent jobs under session limits; checkpoint so an
  interrupted run resumes.
- Accept that some **human gates are intentional** (topic pick, pilot sign-off,
  spend approval) — those stay unless explicitly removed.
