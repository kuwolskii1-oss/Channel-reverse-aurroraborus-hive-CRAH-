# Session Record — A Day In Ancient Rome (provisional lead — gate FAILED)

> One file per cloning project. Copied from `_TEMPLATE.md` by the Recon Cell at
> STATE 1. Each cell appends to its own section and marks status:
> `pending` → `✓ done`. Never delete prior sections — this file is the hive's
> shared memory for the whole run.

- **Session slug:** a-day-in-ancient-rome
- **Created:** 2026-06-09
- **Current state:** 1

---

## STATE 1 — Channel to Clone — `gated / pending-confidence`
*(Recon Cell — autonomous Scout → Score → Select; see docs/stage1-scout-engine.md)*

> **Gate verdict: FAILED on data-completeness, not on opportunity.** A clear
> leader emerged (A Day In Ancient Rome) but the web_search adapter could not
> retrieve verified core metrics (subs / views / age / velocity) for any
> candidate — every hard-number source (YouTube channel pages, Social Blade,
> feedspot, SpeakRJ, Viewstats, vidIQ stat pages) returned HTTP 403 or no
> numeric snippet. Per Phase D, no weak/blind commit is made. Top 3 surfaced
> below for operator review; recommended unblock is configuring the api_mcp
> adapter (VidIQ/TubeLab/TubeGen) for hard numbers, then re-running.

### Niche decision
- **Operator constraints:** Output format LOCKED — faceless, animated, long-form,
  second-person **immersive POV / "what it's like" edutainment** (viewer *is* the
  first-person subject). Perspective-taking, emotionally engaging, mind-shifting.
  Disqualify: personality-locked, live-action-face, shorts-only, reaction/commentary.
- **Phase 0 ranking** (`niche_score = RPM_band × demand × (1−saturation) × clonability`):

  | Rank | Sub-niche | RPM band | Demand | Saturation | Clonability | Verdict |
  |---|---|---|---|---|---|---|
  | **1** | **Immersive POV history / "a day in the life of [era]"** (Rome, Egypt, medieval, war) | High ($9–14 edu/history) | Very high — "POV: you wake up in history" is a proven viral trend (19.5M views Black Plague clip, 21.8M Chernobyl clip, Feb 2025) | Med on Shorts/TikTok, **LOW on long-form YouTube** (whitespace) | **Very high** — faceless, animated, templated, AI-voiceover | **CARRIED #1** |
  | 2 | Immersive POV nature/survival ("what it's like being a [animal]") | Mid ($5–9) | High (animal POV faceless = 38M-view examples) | Medium | Very high | carried as fallback |
  | 3 | Immersive POV mythology / lost civilizations (3D) | High ($9–14) | High | Med-high | High (heavier 3D production) | reserve |
- **Rationale:** History POV wins on the multiplier: it pairs the highest RPM
  band of the three (education/history, $9–14) with a *demonstrated* demand spike
  (the cross-platform "POV: you wake up as…" trend) and the cleanest clonability
  (faceless + animated + second-person narration is exactly our pipeline). The
  strategic edge is **long-form whitespace**: the trend is currently
  Shorts/TikTok-dominated, so long-form immersive POV history on YouTube is
  under-served — which is precisely the operator's format lock.

### Candidate pool
*(Adapter: **web_search**. "Existence + format" verified via search/title snippets.
Subs / age / velocity could NOT be verified — every stat source 403'd. All numeric
cells below are **UNVERIFIED / N-A**, NOT estimates dressed as data.)*

| # | Channel | Handle / ID | Age | Subs | View velocity | Format | Composite | Veto |
|---|---------|-------------|-----|------|---------------|--------|-----------|------|
| 1 | A Day In Ancient Rome | @ADayInAncientRome | N/A (weekly uploads, reads new) | N/A | N/A | Faceless, animated, immersive POV daily-life, **long-form** | **68** | none |
| 2 | Immersive History | /channel/UCwmf3PyFOTNl04YAyQoYXlw | N/A | N/A | N/A | Faceless, animated, immersive era-POV, long-form | **64** | none |
| 3 | Histairy Films | /channel/UCZsFA0eoFknLWJx3nf6WnNg | N/A | N/A | N/A | Faceless, immersive "past comes alive", mixed length | **60** | none |
| 4 | POV Civilizations | @pov.civilizations | N/A (new, daily) | N/A | N/A | Faceless AI first-person history — **Shorts-daily** | veto | **VETO: shorts-only** |
| 5 | New Historia | @NewHistoria | N/A | N/A | N/A | Faceless 3D animation history/mythology, long-form | 58 | none (3D = heavier prod) |
| 6 | TIMETRAVELER POV AND HISTORY | @TIMETRAVELERPOVANDHISTORY | N/A | N/A | N/A | Faceless POV history — format/length unverified | 55 | watch (likely shorts) |
| 7 | Time Traveller POV | /channel/UC07Tsotbzv88xMynVR4C6gg | N/A | N/A | N/A | Faceless POV history, length unverified | 53 | watch (likely shorts) |
| 8 | AI Time Traveller | @AITimeTraveller | N/A | N/A | N/A | AI clips, history facts | 50 | watch |
| 9 | Time Travel POV | /channel/UCoITdWJKq0TRTAKrXEypnGw | N/A | N/A | N/A | POV time-travel stories | 48 | watch |
| 10 | Ancient Rome in Motion | @AncientRomeinMotion | Since 2022 | N/A | N/A | Animated short films, **tied to named Prof. Ray Laurence** | veto | **VETO: personality-linked + shorts** |
| 11 | Simple History | (legacy) | ~10+ yrs | ~5M+ (unverified) | N/A | Faceless animated "what it was like" — **legacy authority** | veto | **VETO: legacy/identity-locked, can't out-compete** |
| 12 | The Infographics Show | (legacy) | ~10 yrs | ~15M | N/A | Faceless animated edutainment — legacy giant | veto | **VETO: legacy/too big to clone-beat** |
| 13 | Maiorianus | @Maiorianus_Sebastian | N/A | N/A | N/A | Immersive ancient-city journeys, long-form | 52 | watch (narrator-branded) |

### Scorecards (per candidate)
*Dimensions (weights): Monetization 30 · Cloneability 25 · Growth 20 · Newness 10
· Repeatability 10 · Saturation 5. Composite = Σ(wᵢ·scoreᵢ)/100. Monetization &
Cloneability scores are well-grounded (RPM band sourced; format directly
observed). **Growth / Newness / Repeatability are low-confidence estimates** —
flagged because velocity/age data was unobtainable via web_search.*

- **#1 A Day In Ancient Rome — composite 68.** Mon 80 (history/edu RPM $9–14 ×
  weekly cadence) · Clone 90 (textbook target: faceless, animated, second-person
  daily-life POV, long-form — exact format lock) · Growth 45 *(est, unverified —
  reads active/growing but no metrics)* · New 60 *(est — weekly uploads, modern
  format, not legacy)* · Repeat 70 (consistent "a day in the life" template) ·
  Sat 60 (long-form POV history is whitespace). No veto. **Leads on the two
  high-confidence axes (Mon + Clone).**
- **#2 Immersive History — composite 64.** Mon 78 · Clone 82 (faceless animated
  era-POV, long-form) · Growth 45 *(est)* · New 50 *(est)* · Repeat 60 · Sat 55.
  Strong format fit; slightly broader (not purely 2nd-person) than #1.
- **#3 Histairy Films — composite 60.** Mon 72 · Clone 75 (immersive, faceless,
  but mixed length / some shorts) · Growth 45 *(est)* · New 55 *(est)* · Repeat
  55 · Sat 55. "Past comes alive" framing fits; length consistency unverified.
- **#5 New Historia — composite 58.** Mon 75 · Clone 65 (3D animation raises
  production cost vs. our pipeline) · Growth 45 · New 45 · Repeat 60 · Sat 50.
  Good RPM, but 3D is harder to clone faithfully.
- **#13 Maiorianus — composite 52.** Mon 75 · Clone 58 (immersive but
  narrator-branded voice/identity) · Growth 45 · New 35 (established) · Repeat
  60 · Sat 50.
- **#6–#9 Time-Traveller cluster — composite 48–55.** Format-on-trend but most
  appear Shorts-first; flagged "watch" pending length verification. Would likely
  veto on shorts-only if confirmed.
- **VETOED:** #4 POV Civilizations (shorts-only, violates long-form lock); #10
  Ancient Rome in Motion (personality-linked to named professor + shorts); #11
  Simple History & #12 Infographics Show (legacy, identity-locked giants a fresh
  clone cannot realistically out-compete — disqualified per veto rule).

### Winner — Channel Record  *(PROVISIONAL — not committed; gate failed)*
- **Canonical name:** A Day In Ancient Rome
- **Handle:** @ADayInAncientRome
- **URL:** https://www.youtube.com/@ADayInAncientRome
- **Channel ID:** UNVERIFIED (web_search adapter could not resolve UC… ID; YouTube + Social Blade 403'd)
- **Chosen niche:** Immersive POV history / "a day in the life of [era]" — faceless, animated, long-form, second-person edutainment
- **Composite score:** 68 (provisional; built on high-confidence Monetization + Cloneability and **low-confidence** Growth/Newness)
- **Confidence verdict:** **GATE FAILED.** Composite 68 < 70 threshold; margin over #2 = 4 (< 5 required); **core data (age, subs, views, cadence) absent** — the binding failure. No unresolved *veto* on the leader, but two independent gate conditions miss. **No auto-commit.** Surfacing top 3 (A Day In Ancient Rome · Immersive History · Histairy Films) to the operator/Queen.
- **Adapter used:** web_search (WebSearch + WebFetch). WebFetch blocked (HTTP 403) on youtube.com, socialblade.com, feedspot.com, speakrj.com — so only existence/format confirmable, not metrics.
- **Captured:** 2026-06-09
- **Recommended unblock:** Configure the **api_mcp** adapter (VidIQ / TubeLab / TubeGen credentials or MCP server) to pull verified subs / views / age / 30-day velocity, then re-run Phases A–D. With hard numbers, the leader plausibly clears the gate (its weak axes are the *estimated* growth/newness ones, not the strong monetization/cloneability ones).

## STATE 2 — Branding Brief — `pending`
*(Brand Cell)*

- Name variants (5):
- Description variants (2):
- Logo prompt:
- Banner prompt:

## STATE 3 — Transcripts — `pending`
*(Recon Cell)*

- Transcript 1:
- Transcript 2:
- Transcript 3:

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
