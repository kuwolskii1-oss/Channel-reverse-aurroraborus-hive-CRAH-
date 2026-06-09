# Session Record — Bernard

> One file per cloning project. Copied from `_TEMPLATE.md` by the Recon Cell at
> STATE 1. Each cell appends to its own section and marks status:
> `pending` → `✓ done`. Never delete prior sections — this file is the hive's
> shared memory for the whole run.

- **Session slug:** bernard
- **Created:** 2026-06-09
- **Current state:** 1 → done (gate passed); ready for STATE 2

---

## STATE 1 — Channel to Clone — `✓ done`
*(Recon Cell — autonomous Scout → Score → Select; see docs/stage1-scout-engine.md)*

> **Adapter upgrade:** This run used the live **api_mcp** adapter
> (YouTube Data API v3) — all metrics below are **verified**, not web-search
> estimates. This supersedes the earlier `a-day-in-ancient-rome.md` commit,
> which was built on inflated estimates and is now **voided** (see note in that
> file).

### Niche decision
- Operator constraints (if any): none stated; niche carried from prior run —
  faceless Ancient-Rome / immersive-history edutainment.
- Niche(s) carried + rationale: history edutainment, faceless/animated formats
  only (templated, reproducible, no personality lock). Legacy authority channels
  (HISTORY, Timeline, Epic History, Fall of Civilizations) excluded as
  identity-locked / unbeatable.

### Candidate pool (verified via YouTube Data API v3, 2026-06-09)
| # | Channel | Handle | Age | Subs | 30d view velocity | Last upload | Format | Composite | Veto |
|---|---------|--------|-----|------|-------------------|-------------|--------|-----------|------|
| 1 | **Bernard** | @bernardanimationofficial | 403d | 259,000 | 2,066,899 | 2d ago | faceless stick-figure history, 20-min, "Why It Sucks to Be…" template | **79.4** | none |
| 2 | Evie's Immersive Time Travels | — | 51d | 9,540 | 586,393 | active | faceless immersive history shorts | 68.8 | none |
| 3 | TheRomanEmpire | — | 446d | 15,100 | 0 | 219d ago | faceless Rome explainer | ~52 | fading (dormant) |
| 4 | FD Ancient History | @FD… | 1015d | 79,700 | 0 | 190d ago | 50-min docs | ~50 | fading + legacy-ish |
| 5 | Immersive History | — | 455d | 149 | 0 | 337d (history) | **pivoted to random viral shorts** | DQ | off-niche |
| 6 | A Day In Ancient Rome | — | 375d | 281 | 0 | dormant | faceless Rome | 55.7 | weak traction |
| 7 | Histairy Films | — | 480d | 177 | 0 | dormant | high-volume shorts | 53.3 | low traction |

### Scorecards (per candidate) — Mon30 / Clone25 / Growth20 / New10 / Repeat10 / Sat5
- **Bernard — 79.4.** Mon 80 (20-min long-form = multi-midroll, 2.07M views/30d).
  Clone 88 (stick-figure animation + hard title template — trivially reproducible,
  no face). Growth 82 (active 2d ago, 259k subs in 403d, 1.86M-view outlier).
  New 75 (403d, fresh working format). Repeat 65 (CV 1.32; 191k median floor).
  Sat 60 (format whitespace remains).
- **Evie's Immersive Time Travels — 68.8.** Mon 55 (short-form, lower RPM).
  Clone 80. Growth 85 (586k/30d, 51d old). New 95 (51d). Repeat 30 (CV 3.09 —
  one 323k spike, 3.8k median). Sat 55.
- TheRomanEmpire / FD Ancient History — fading veto (dormant 190–219d).
- Immersive History — disqualified: abandoned history for unrelated viral shorts.

### Winner — Channel Record
- **Canonical name:** Bernard
- **Handle:** @bernardanimationofficial
- **URL:** https://www.youtube.com/@bernardanimationofficial
- **Channel ID:** UC_FStSURaDad8-xo6jH1j4Q
- **Chosen niche:** faceless stick-figure history edutainment ("Why It Sucks to Be a [role] in [era]")
- **Composite score:** 79.4
- **Confidence verdict:** **GATE PASS** — composite 79.4 ≥ 70; margin over #2 = 10.6 ≥ 5; no unresolved vetoes; core data complete (age, subs, views, cadence all verified).
- **Adapter used:** api_mcp (YouTube Data API v3) — verified, live
- **Captured:** 2026-06-09

## STATE 2 — Branding Brief — `✓ done`
*(Brand Cell)*

- Name variants (5):
  1. **Grimsketch** — "grim" + the hand-drawn sketch register; signals dark history rendered in stick-figure line art.
  2. **The Worst Job in History** — names the recurring angle directly (rotating misery of historical roles) without copying any source title.
  3. **Doodle Doomsday** — playful-deadpan pairing of childlike doodle art with grim historical fate.
  4. **Stickman's Dark History** — plainly tells the viewer: stick-figure animation, grim past, edutainment.
  5. **Born Unlucky** — fronts the "imagine being born into this awful role/era" hook that drives the format.

- Description variants (2):
  - **Short (~1 line):** Stick-figure history about all the brutal, miserable ways people used to live — and why you got lucky being born now.
  - **Longer (~2-3 sentences):** I draw little stick people and walk them through the grimmest jobs, roles, and eras in human history. Each video is a deadpan tour of one terrible life — the rules, the suffering, and the strange details schoolbooks skip. History's a horror show; the stick figures just make it easier to watch.

- Logo prompt: Minimalist circular avatar on a flat muted parchment-tan background. A single hand-drawn black stick figure stands centered, drawn in loose imperfect marker-style line art — round blank head, thin limbs, slightly slumped defeated posture. Above its head floats a small black storm cloud with one tiny lightning bolt, signaling grim historical misfortune in a deadpan comic tone. No face details, no color beyond black line and tan ground, thick clean outline so it reads at small size. Childlike doodle aesthetic meets dark history-edutainment register. Flat 2D, no gradients, no shading.

- Banner prompt: Wide YouTube channel banner, flat 2D hand-drawn stick-figure style on an aged parchment / muted desaturated cream background with faint paper texture. A horizontal procession of small black stick figures, each in a different grim historical role, marches left to right across the lower third — a chained laborer hauling a block, a plague doctor with a beak mask, a soldier with a crude spear, a peasant bent under a heavy sack, an executioner with a small axe — all in loose imperfect marker line art, blank round heads, exaggerated weary postures. Sparse minimalist props (a tiny gallows, a small storm cloud, a crooked tombstone) sketched in the same line style. Tone is deadpan dark comedy: history's miseries rendered as simple doodles. Leave clear negative space in the center-safe zone for channel name and avatar overlay. Black line art on parchment only, no rich color, no gradients, no realistic detail, flat and clean.

## STATE 3 — Transcripts — `✓ done`
*(Recon Cell)*

- **Transcript 1 — "Why It Sucks to Be Born a Geisha"** (Edo→Meiji Kyoto)
  - File: `sessions/transcripts/bernard/transcript-01-geisha.md`
  - Runtime: 0:00–23:06 (timestamped, 39 continuous beats). Word count ~3,117.
  - Verdict: **COMPLETE** — full life-arc from birth/childhood to mid-30s–40 "you are just one of its gears." Opens on Audible cold-open, no gaps in timestamps, clean closing reflection. Not a clip.

- **Transcript 2 — "Why It Sucks to Be Born a Pharaoh"** (inbred Egyptian royal)
  - File: `sessions/transcripts/bernard/transcript-02-pharaoh.md`
  - Runtime: 0:00–22:58 (timestamped, continuous). Word count ~3,147.
  - Verdict: **COMPLETE** — full arc from birth ("not dead yet") through coronation, reign, decline, assassination at ~49, and post-mortem "history will only remember the divine persona." Timestamps continuous, channel-membership cold-open present. Not a clip.

- **Transcript 3 — "Why It Sucks to Be Born an Executioner / Torturer"** (15th-c. Seville, Inquisition)
  - File: `sessions/transcripts/bernard/transcript-03-executioner.md`
  - Runtime: full video; operator pasted as continuous prose (no timestamps). Word count ~3,227.
  - Verdict: **COMPLETE** — full hereditary-outcast arc from boyhood (the stick at market) through apprenticeship, inheriting the trade at 15, marriage, and the bleak close at 41 with Death "simply waiting." Self-consistent narrative with no truncation; word count in line with Transcripts 1 & 2. Not a clip. (No cold-open sponsor/membership line in the pasted text — note for Strategy: either this video omitted it or the operator trimmed the pre-roll; the post-"now on to the story" body is intact.)

**Recurring structural signals (light note for Strategy Cell — STATE 5 does the full Style DNA):**
- **Cold-open monetization beat** then the pivot line "Now, on to the story" / "Now, onto our story" before narrative starts (T1 Audible, T2 channel membership; absent/trimmed in T3 paste).
- **2nd-person "You are born…" framing** — viewer is the protagonist throughout, present tense.
- **Chronological age-milestone life arc** — explicit ages mark beats (born → 5/7 → 12/13 → 16/18 → 23 → 30 → 40s) running birth to death/obsolescence.
- **Deadpan, grim, matter-of-fact tone** — atrocity delivered flatly ("noted, logged, filed away as not dead yet"; "like it is simply the next thing").
- **Recurring "the system / the machine" thesis** — each ends on the protagonist as a replaceable gear/cog in an indifferent institution (T1 "just one of its gears… this machine never stops"; T2 "the cycle continues"; T3 "your role in this machine… it just needed you to show up").
- **Bleak closing reflection** — final beat zooms out to the impersonal verdict of history/the institution, denying the protagonist agency or remembrance.
- Word counts cluster tightly (~3,117 / 3,147 / 3,227), implying a consistent ~3,000–3,300-word target for the ~22–23 min long-form format.

## STATE 4 — Topic / Ideas — `pending`
*(Strategy Cell)*

- Mode (operator topic vs. generated ideas):
- Chosen topic:

## STATE 5 — Style DNA — `pending`
*(Strategy Cell)*

- Niche / audience:
- Hook style:
- Script flow / rhythm / tone / transitions:
- Curiosity gaps / emotional triggers / retention / direct address:
- Words per second:
- Target word count (±5%):

## STATE 6 — Script — `pending`
*(Script Cell)*

- Target word count:
- Final word count:
- Script:

## STATE 7 — Visual Style Profile — `pending`
*(Visual Cell)*

- Art style / palette / lighting / camera / composition / detail / mood:

## STATE 8 — Image Prompts — `pending`
*(Visual Cell)*

- Per-beat prompts:

## STATE 9 — Video Prompts — `pending`
*(Visual Cell)*

- Requested? (y/n):
- Prompts:

## STATE 10 — Thumbnail Analysis — `pending`
*(Packaging Cell)*

- Text style / composition / contrast / emotion triggers:

## STATE 11 — Thumbnails — `pending`
*(Packaging Cell)*

- 5 thumbnails:

## STATE 12 — Export — `pending`
*(Export Cell)*

- Requested? (y/n):
- Document path:
