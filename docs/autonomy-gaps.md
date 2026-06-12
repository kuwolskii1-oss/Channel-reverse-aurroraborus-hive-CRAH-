# CRAH Autonomy Gaps — general (system-level)

What stands between CRAH and *full* autonomy — stated generally, for any run on
any channel, not tied to one demo. Each item notes the underlying cause and what
it would take to remove. (Run #1 surfaced concrete instances of all of these;
this doc is the generalized version for the rebuild.)

The single biggest theme: **CRAH currently *is* a chat-hosted agent running
inside an ephemeral, firewalled, image-blind sandbox.** Most gaps below are
symptoms of that one architectural choice. Change the foundation and the
majority disappear at once.

## 1. Execution environment
- **Ephemeral host.** The run lives in a disposable session/container; nothing
  survives unless committed to git. A factory that "keeps running" can't live in
  a thing that is reclaimed on idle.
- **Network firewall (allowlist).** Only a few hosts are reachable; most external
  services (video platforms, media CDNs, generation APIs, model-weight hosts,
  artifact stores) return "host not in allowlist." Forces every integration to be
  done by the operator or shoved into a CI runner.
- **Session / usage limits.** Long autonomous jobs get cut off mid-run; there is
  no checkpoint/resume, so an interruption can lose work.

## 2. No persistent memory (the portability + "remember our channels" blocker)
- State lives in chat context plus markdown files in git. There is **no database**
  of channels, videos, their states, schedules, costs, or what is already live.
- Therefore CRAH cannot, on its own, answer "which channels do we operate, what
  did each publish, what's due next" — the exact capability a portfolio "boss"
  agent needs.
- And it cannot be **moved to a new device** as a living system — only the files
  move; the working memory and run state do not.

## 3. Credentials & secrets
- No provisioned secret store. Every external key/account has to be supplied per
  run, often pasted into chat (insecure, and it leaks into history).
- No "set it up once" path: keys are not persisted across runs or devices.

## 4. External platforms are unreachable or human-gated
- **Source intake** (competitor transcripts, sample frames, thumbnails) can't be
  fetched headless — platform APIs are owner-only or the hosts are firewalled —
  so a human supplies them.
- **Generation services** (text-to-speech, image, video) sit behind firewalled
  hosts and/or interactive OAuth, so generation runs operator-side.
- **Publishing** (uploading the finished video, setting metadata/thumbnail) is
  not wired at all.

## 5. Agents can't perceive media
- Worker agents receive text only; image/audio/video can't be "seen" or "heard"
  by the sub-agents, so any visual/audio analysis must be funneled through one
  vision-capable layer and relayed as text. Bottleneck and quality loss.

## 6. No headless authentication
- Anything using interactive OAuth (publishing to a video platform, some
  generation MCPs) requires a human + browser to approve. No service-account /
  stored-token path is set up for unattended use.

## 7. No assembly or publishing stage
- Even with every image, clip, and the narration generated, **nothing stitches
  them into a finished video** (timeline, captions, music) and **nothing uploads
  it**. The pipeline stops at "assets + prompts."

## 8. Cost & rate limits are uncontrolled
- Long-form video generation is the expensive part; an autonomous factory implies
  large recurring spend with no budget guardrails, no per-run cost ceiling, no
  "stop if over $X."
- Hard quotas exist and aren't accounted for (e.g. video-platform upload quotas,
  generation-credit caps).

## 9. Reliability / observability
- No retries-with-backoff as a system property, no run checkpointing, no health
  monitoring, no alerting when a stage fails. A single failure can silently stall
  a run.

## 10. Autonomous-decision quality & safety
- Acting on weak data can produce a **confidently wrong** decision (e.g. choosing
  a target from unverified estimates). Without a verification gate, autonomy
  amplifies bad inputs.
- No automated guard for brand-safety / policy compliance of the content itself.

## 11. Human-in-the-loop is structural (partly by design)
- The orchestrator stops after each step and waits for the operator. Some gates
  are *intended* (topic approval, spend approval, "create the channel"); others
  are accidental (caused by 1–7 above). Full autonomy means removing the
  accidental ones and making the intentional ones explicit, minimal, and
  asynchronous (notify + approve), not blocking.

## 12. No scheduling / triggering
- Nothing makes CRAH wake up and act — "make a video on command" or "on a
  cadence." It only responds inside a chat turn. A factory needs a scheduler and
  a command/notification channel.

## 13. No multi-channel orchestration
- The current shape is "one session = one channel run." There is no portfolio
  manager that holds many channels, knows each one's state, and dispatches work
  across them.

## 14. Platform-policy / ToS limits (cannot be engineered away)
- **Account/channel creation on the major video platform cannot be automated** —
  it must be done by a human in a browser, by policy. (Uploading and metadata
  *can* be automated once access is granted.) So "notify me to create the
  channel" is not a workaround; it is the only compliant design.
- **Mass-produced / low-effort AI content faces monetization and removal risk**
  under current platform policies. Original style-matched content is better
  positioned than copy-paste, but the risk is real and is a business constraint,
  not a technical one.

---

## What removes the most, fastest
1. **Re-platform CRAH as a standalone, always-on application** (runs on real
   infra with open network, not a chat sandbox) → kills 1, most of 4, and 5.
2. **Add a database + object store** (channel/video/state memory) → kills 2 and
   13, enables portability.
3. **Add a secret store with one-time setup** → kills 3 and 6.
4. **Wire real integrations** (data source, TTS, image, video, publish) +
   **build assembly + upload** → kills 4 and 7.
5. **Add scheduler + notification/approval channel** → kills 12, converts 11 from
   blocking to async.
6. **Add budget guards, checkpoints, monitoring, and a verification gate** →
   addresses 8, 9, 10.

Items 11 (intentional gates) and 14 (platform ToS) are not fully removable and
should be designed *into* the system as explicit, minimal human touchpoints.
