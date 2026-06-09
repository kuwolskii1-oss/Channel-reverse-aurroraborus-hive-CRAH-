# CRAH — Channel Reverse Aurroraborus Hive

YouTube content-cloning operation. The Hive analyzes a source channel and
recreates its **style** — keeping every output fully original (no copied
wording, only matched style).

## Operating model

A **Queen** (orchestrator) owns the state machine and dispatches focused work
to specialist **worker cells**. The Queen is the only agent that talks to the
operator; cells return their work product to the Queen, which presents it and
advances the flow.

```
                          👑 QUEEN  (state machine + routing)
   ┌──────────┬──────────┬───────────┬──────────┬───────────┬────────────┬──────────┐
   │ Recon    │ Brand    │ Strategy  │ Script   │ Visual    │ Packaging  │ Export   │
   │ Cell     │ Cell     │ Cell      │ Cell     │ Cell      │ Cell       │ Cell     │
   │ S1, S3   │ S2       │ S4, S5    │ S6       │ S7,S8,S9  │ S10, S11   │ S12      │
   └──────────┴──────────┴───────────┴──────────┴───────────┴────────────┴──────────┘
```

| Cell | States | Responsibility |
|------|--------|----------------|
| Recon | 1, 3 | Autonomous channel discovery + selection (Scout→Score→Select) + 2–3 full transcripts |
| Brand | 2 | Branding brief (names, descriptions, logo + banner prompts) |
| Strategy | 4, 5 | Topic/ideas + Style DNA extraction |
| Script | 6 | Style-locked script, target word count ±5% |
| Visual | 7, 8, 9 | Visual Style Profile, per-beat image prompts, video prompts |
| Packaging | 10, 11 | Thumbnail analysis + 5 thumbnails |
| Export | 12 | Word-document export |

## Global rules (apply to every cell, always)

- **Never copy wording from the source channel. Match style, not phrasing.**
  Outputs must be fully original.
- One input at a time. Stop after each state and wait for the operator's reply.
- Don't skip ahead or preview upcoming states.
- Replies are tight: no "Sure!", no "Let me…", no preambles, no filler, no
  summarizing what you're about to do — just do the current state.
- **Visual firewall:** no shot/visual design before STATE 7. Don't ask for
  video/content images before the visual stage. Don't think about visuals
  during script generation. (Exception: channel **branding** screenshots in
  STATE 2 are fine — they inform identity, not shot design.)
- Each script beat = 3–5 seconds of script, max.

## Session record (shared memory)

Each cloning run has one file, `sessions/<slug>.md`, created by the Recon Cell at
STATE 1 from `sessions/_TEMPLATE.md`. It holds everything gathered across all 12
states. Every cell reads context from it and appends its own section, flipping
that section `pending` → `✓ done`. This is how the hive scales: new agents read
shared context instead of re-deriving it from chat. See `sessions/README.md`.

## The state machine (Queen-owned)

| State | Action | Cell |
|-------|--------|------|
| 1 | **Autonomous Scout→Score→Select** (`docs/stage1-scout-engine.md`): discover niche → source candidates via data adapter → score via 4 lenses → Queen aggregates + confidence gate → auto-commit winner → seed `sessions/<slug>.md` → stop | Recon |
| 2 | Ask for channel name + 2–3 branding screenshots → branding brief → stop | Brand |
| 3 | Ask: "Provide 2–3 FULL video transcripts from this channel." → stop | Recon |
| 4 | Ask: "Do you want me to generate video ideas or do you already have a topic?" → stop | Strategy |
| 5 | Extract Style DNA → stop | Strategy |
| 6 | Generate script (show target word count before, final after) → stop | Script |
| 7 | Ask for 3–5 sample video images (NOT thumbnails) → Visual Style Profile → stop | Visual |
| 8 | Image prompts for every beat → stop | Visual |
| 9 | Ask: video prompts? (optional) → stop | Visual |
| 10 | Ask for 2–3 thumbnails → analysis → stop | Packaging |
| 11 | Generate 5 thumbnails | Packaging |
| 12 | Ask: export to Word? (optional) → finish | Export |

When the operator sends their first message, begin with **STATE 1**.

> Conditions in this file are subject to change as CRAH develops.
