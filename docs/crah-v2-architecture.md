# CRAH v2 — architecture review & build plan (Fable 5 restart)

Review of the goal: a portable, installable, eventually-fully-autonomous
faceless-YouTube-channel factory, with **Jarvis** at the top (reports only to the
operator) and a **CRAH-boss** portfolio manager beneath it that remembers
channels, dispatches video/channel work on command, and proposes new channels for
approval — with **no copy-paste/drag-drop except entering API keys once.**

## 0. The one reframe that makes all of this possible
**CRAH must stop being a Claude Code chat session and become a standalone
application that *calls* an LLM, instead of *living inside* one.**

Almost every blocker in `autonomy-gaps.md` exists because run #1 was hosted in an
ephemeral, firewalled, image-blind chat sandbox. An installable app that runs on
the operator's own machine or a small always-on server has:
- open network (no allowlist) → can reach every API directly;
- a real database → persistent channel memory + portability;
- a secret store → set keys up once;
- a process that stays alive → scheduling, "make a video on command";
- direct API access to vision models → agents can "see" media.

The LLM (Fable 5, via the Claude Agent SDK / API) becomes the **brain** the app
calls for reasoning, writing, and tool use — not the host it runs in. This is the
difference between "a chat that does tasks" and "a product."

## 1. Point-by-point on the attempt-#2 prompt

| Your ask | Verdict | Notes |
|---|---|---|
| "build CRAH once" | ⚠️ reframe | Build the *operator setup* once (keys/permissions). The system itself you'll maintain — APIs and platform rules change. Design for swappable modules, not a frozen build. |
| "eventually run fully autonomously" | ✅ right framing | "Eventually" is correct. Build the persistent, integrated skeleton first; remove human gates one stage at a time as each proves reliable. Autonomy is the last 10%, not the foundation. |
| "find a new niche without my help" | ✅ doable | Data-API discovery + scoring + a confidence gate. Keep a verification step — autonomy on bad data produces confident-wrong picks. |
| "create channel name + SEO + descriptions" | ✅ easy | Pure LLM. Fable 5 handles names, SEO, titles, descriptions, tags. |
| "profile pic + banner" | ✅ doable | Image-gen API (Higgsfield Soul / others). |
| "Jarvis notifies me to create the channel" | ✅ correct design (forced) | **Account/channel creation cannot be automated** — platform ToS requires a human in a browser. Notify-then-human-creates is the only compliant path. After creation, the human grants OAuth and CRAH does everything else. |
| "create 2D faceless long videos repeatedly & consistently on command" | ✅ technically, ⚠️ hard parts | The pipeline works; the two hard parts are **visual consistency across shots** (needs locked reference/seed, not independent prompts) and **cost** (long videos = real money per render). Both are solvable but must be designed for, not assumed. |
| "video descriptions" | ✅ easy | LLM. |
| "CRAH-boss remembers our channels / knows which are live / dispatches per-channel work / proposes new channels for approval" | ✅ the core of v2 | This is a **database + orchestrator**, the single most important new piece. Cannot live in chat or markdown reliably. |
| "no copy-paste/drag-drop except API keys" | ✅ achievable | Every manual handoff in run #1 was a *firewall/sandbox* artifact. On open infra with real integrations + assembly + upload, the handoffs vanish. |
| "set up all APIs/permissions/info once" | ✅ achievable | Secret store + OAuth token storage + a setup wizard. One-time, persisted, re-enterable on a new device. |
| "Jarvis at top, no peer, reports to me" | ✅ clean | A single top orchestrator with a portfolio manager beneath it is a sound hierarchy. |
| "downloadable like an app/game; continue on a new computer" | ✅ with the reframe | Ship as a container/installer; "new device" = install app + restore the database + re-auth secrets. The *running system* is portable, not just the files. |

### Things the prompt is missing (add these)
- **A datastore** (channels, videos, states, schedules, costs, assets) — named explicitly.
- **An assembly + upload stage** — stitch clips+narration+captions into the final
  cut and publish via the platform API. The prompt stops at "make videos."
- **A scheduler + notification/approval channel** (how Jarvis reaches you, how you
  approve) — Telegram/Discord/web dashboard.
- **Budget guardrails** (per-video and monthly ceilings; stop-if-over).
- **Quota awareness** (e.g. video-upload API daily quota caps uploads/day).
- **A verification gate** on autonomous decisions (don't act on unverified data).
- **Platform-policy risk** acknowledged as a *business* constraint (mass AI
  content monetization risk), not a thing code can remove.
- **Where it runs when your computer is off** — "repeatedly/on a cadence" implies
  an always-on host (small VPS/server), not a laptop. Decide local vs. hosted.

## 2. Recommended architecture (v2)

```
              YOU  (owner)
               │  approvals / commands / notifications
        ┌──────▼───────┐
        │   JARVIS     │  top orchestrator (always-on service)
        │  no peer     │  - chat/notify interface (Telegram/Discord/web)
        └──────┬───────┘  - schedule + approval queue + budget guard
               │
        ┌──────▼───────┐
        │  CRAH-BOSS   │  portfolio manager
        │              │  - owns the DATABASE of channels/videos/states
        │              │  - dispatches per-channel & per-video pipelines
        └──────┬───────┘
   ┌─────┬─────┼─────┬───────┬────────┬────────┐
 Recon Brand Strategy Script Visual Voice  Render+Publish   ← worker cells
 (the 14 CRAH stages, now as callable agents/functions using
  the Claude Agent SDK + real tool integrations)
               │
        ┌──────▼──────────────────────────────┐
        │ Datastore (Postgres/SQLite) + object │  channel memory, run state,
        │ store (media) + secret store (keys)  │  assets, costs, schedules
        └──────────────────────────────────────┘
```

Components:
- **Jarvis** — single always-on process. Talks to you over a messaging channel,
  holds the master schedule, the approval queue, and the global budget guard.
  Turns "make a video for channel X" / "propose a new channel" into dispatched work.
- **CRAH-boss** — portfolio manager. Reads/writes the database; knows every
  channel, its niche, style DNA, what's published, what's due; routes jobs to the
  worker cells; assembles results; reports back up to Jarvis.
- **Worker cells** — the existing 14 stages, re-implemented as Agent-SDK agents /
  functions with real integrations (data API, TTS API, image/video API, the
  publish API). Plus a new **Assembly** + **Publish** stage.
- **Datastore** — Postgres (or SQLite to start) for structured memory; an object
  store/folder for media; a secret store (OS keychain / encrypted env / vault)
  for keys + OAuth tokens.
- **Packaging** — Docker container or installer + a first-run setup wizard. New
  device = install + restore DB + re-auth secrets.

## 3. Build order (skeleton first, autonomy last)
1. **Persistence + portability skeleton.** App shell, database schema
   (channels/videos/states), secret store, setup wizard, Docker. *No autonomy yet
   — just "it remembers and it installs anywhere."*
2. **One channel, end-to-end, with human gates.** Wire real integrations for the
   full pipeline including **assembly + upload**. Prove a finished video can be
   produced and published with you approving each gate. This kills the copy-paste.
3. **CRAH-boss multi-channel.** Portfolio memory, per-channel dispatch,
   "make a video for channel X on command," propose-new-channel-for-approval.
4. **Jarvis layer.** Always-on orchestrator, messaging/notify interface,
   scheduler, approval queue, budget guard.
5. **Remove gates incrementally.** As each stage proves reliable, convert its
   human gate from blocking to async-notify, then to fully auto — niche pick
   first, then script, then render, keeping spend + "create channel" as
   permanent human approvals.
6. **Hardening.** Checkpoint/resume, retries, monitoring/alerting, cost reports,
   policy/brand-safety checks.

> Keep all run-#1 artifacts — the 14-stage prompts, Style DNA method, the YouTube
> Data API adapter, the transcript/frame browser extension, the voice workflow,
> the image/motion prompt corpora. They are reusable building blocks; the rebuild
> is about the *foundation* (app + memory + integrations), not redoing the craft.

## 4. Honest risk register
- **Cost.** Autonomous long-form video = significant recurring API spend. Hard
  budget ceilings are mandatory, not optional.
- **Platform policy.** Account creation stays human; mass AI content carries
  monetization/removal risk. Fewer, higher-quality, original channels beat a
  spam farm — both for survival and for results.
- **Visual consistency.** The genuine technical hard problem; needs reference/seed
  locking and a render-QA agent that can actually see outputs.
- **Maintenance.** APIs and platform rules change; budget ongoing upkeep. "Build
  once" applies to *your setup*, not to the codebase.
- **Always-on host.** Decide local vs. cheap VPS early; "on command, repeatedly"
  needs something that's awake when you aren't.

## 5. A tighter prompt for attempt #2
> Build CRAH as a **standalone, installable application** (containerized, runs on
> my machine or a small always-on server) that uses Fable 5 via the Claude Agent
> SDK as its reasoning brain — **not** as a chat session. It must:
> 1. **Persist everything** in a local database + media store: every channel
>    (niche, name, branding, Style DNA, SEO), every video and its state, schedules,
>    and costs — so it remembers our portfolio and works across devices (install +
>    restore DB + re-enter secrets).
> 2. **Store all credentials once** in a secret store via a first-run setup wizard
>    (API keys + OAuth tokens); never ask again.
> 3. Run the full pipeline with **real API integrations and zero manual handoffs**
>    (besides entering keys): autonomous niche discovery (with a verification gate),
>    name/branding/banner/profile + SEO, style-locked long-form 2D faceless script,
>    voiceover, image + motion generation with locked visual consistency,
>    **assembly into a finished video**, description/metadata, and **upload via the
>    platform API**.
> 4. Have a **CRAH-boss** portfolio manager that knows which channels are live,
>    dispatches "make a new video for channel X" or "propose a new channel" on
>    command, and routes work to the stage agents.
> 5. Have **Jarvis** as the single top orchestrator (no peer; reports only to me)
>    with a notify/approve channel (e.g. Telegram), a scheduler, an approval queue,
>    and a hard budget guard.
> 6. Keep two permanent human gates by design — **I create the actual YouTube
>    channel when notified** (platform ToS), and **I approve spend / new channels**
>    — and make every other gate async or automatic as it proves reliable.
> Build it in this order: persistence+install skeleton → one channel end-to-end
> with gates → CRAH-boss multi-channel → Jarvis + scheduler → progressively remove
> gates → hardening. Reuse the v1 stage prompts, Style-DNA method, data adapter,
> browser extension, and prompt corpora as building blocks.
