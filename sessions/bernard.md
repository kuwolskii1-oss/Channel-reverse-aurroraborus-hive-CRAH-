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

## STATE 4 — Topic / Ideas — `✓ done`
*(Strategy Cell — generation; Queen-aggregated panel vote for selection)*

- **Mode:** generated ideas (8-topic slate), winner chosen by differentiated 3-lens panel vote.

### Candidate slate (8, style-locked "Why It Sucks to Be Born a [role] (in [era])")
1. Spartan Boy (Classical Sparta, agoge)
2. Aztec Captive's Son (Tenochtitlan ~1500)
3. **Eunuch in the Forbidden City (Ming China ~1500s)**
4. Plague-Pit Gravedigger (London 1665)
5. Janissary Boy (Ottoman devshirme ~1500s)
6. Child Chimney Sweep (Victorian London ~1840)
7. Helot Farmer (Messenia under Sparta)
8. Coal Trapper Girl (Welsh pit ~1842)

### Panel scores (0–100 per lens) + weighted composite (Hook 40 / Demand 30 / Production 30)
| # | Topic | Hook | Demand | Production | Composite |
|---|-------|------|--------|-----------|-----------|
| 3 | **Eunuch, Forbidden City** | 89 | 84 | 86 | **86.6** ← winner |
| 2 | Aztec Captive's Son | 92 | 88 | 68 | 83.6 |
| 5 | Janissary Boy | 78 | 79 | 92 | 82.5 |
| 1 | Spartan Boy | 71 | 62 | 90 | 74.0 |
| 8 | Coal Trapper Girl | 85 | 70 | 58 | 72.4 |
| 4 | Plague-Pit Gravedigger | 74 | 76 | 49 | 67.1 |
| 6 | Child Chimney Sweep | 83 | 58 | 54 | 66.8 |
| 7 | Helot Farmer | 80 | 49 | 44 | 59.9 |

### Selection rationale
- **Winner — Why It Sucks to Be Born a Eunuch in the Forbidden City (Ming China).** Only candidate in the top tier of ALL three lenses (no weak axis = highest floor). Aztec had the best hook/demand but the production lens flagged a thin midsection (groomed→sacrificed) risking a mid-video sag in the 22-min arc — the exact failure this format can't afford. Janissary was the production favorite but mid on hook/demand. Eunuch balances a shocking recurring object (the jar carried "to be buried whole"), a clean rising-then-hollow power arc, exotic visual variety, and a sharp "tool sharpened by mutilation, discarded when dull" machine thesis.
- **Chosen topic:** *Why It Sucks to Be Born a Eunuch in the Forbidden City (Ming Dynasty China)*
- **Close alternates if operator overrides:** #2 Aztec Captive's Son (max click-appeal, needs midsection work), #3 Janissary Boy (cleanest arc).

## STATE 5 — Style DNA — `✓ done`
*(Strategy Cell)*

- **Niche / audience:** Faceless, stick-figure "dark history edutainment." The lane is grim historical biography delivered as a single second-person life simulation — one terrible role/era per video, birth to death. Audience: 16–34 history/morbid-curiosity viewers (the "horrible-histories-for-adults," r/history, Sam O'Nella / Oversimplified / dark-trivia crowd) who watch long-form (~22 min) for an immersive, emotionally heavy story rather than a fact list. They come for the empathy hit of *being* the person plus the schoolbook-skipped grim detail, and stay for the slow-build dread. Replay/retention demographic skews late-night solo viewing.

- **Hook style:** A three-move open run consistently across the cluster.
  1. **Monetization pre-roll, deadpan and brief** (T1 Audible link "pinned in the comments"; T2 channel membership "see the link in the description"; trimmed/absent in T3's paste) — delivered flatly, no hype, as a throat-clear.
  2. **Hard pivot line** — "Now, on to the story." / "Now, onto our story." — a clean tonal door that separates ad from narrative and signals the immersion is starting.
  3. **2nd-person birth-drop** — "You are born in…" / "You're born a prince to the pharaoh…" / "You were born in 15th century Seville." Place + era are fixed in the first sentence; the viewer is instantly the protagonist in present/past-continuous tense.
  The first ~30s promises a specific *premise of doom*: it either states the cosmic irony up front (T2: "sounds like winning the cosmic lottery… in reality, you arrive weak, barely breathing, wrapped in linen that already feels like a test run for your funeral") or plants a quiet wrongness to be decoded later (T3: the house "stands alone," "nobody came to congratulate your parents," "but that doesn't concern you yet"). Either way the hook seeds the central question — *why does this life suck, and how bad does it get?* — and a promise that normal-looking detail is hiding horror.

- **Script flow / rhythm / tone / transitions:**
  - **Spine = chronological age-milestone life arc.** Explicit ages are the skeleton and the transition device: born → 5/6 → 7/8 → 12 → 13/15/16 → 18 → 23/25 → 30/31 → mid-30s/40 → death/obsolescence. Each new age is a hard cut to the next life stage ("By the time you turn seven…", "You've just turned 15…", "Years pass and you turn 31…", "You are 41 now."). Time-jumps are signaled with a stock connective — "Years pass," "A few years pass," "Time moves quietly, measured in lessons and seasons" — then re-anchored on a number.
  - **Sentence rhythm:** predominantly short declaratives and deliberate fragments for impact, clustered in threes ("Men work, women tend." / "noted, logged, filed away as not dead yet." / "No trials, no explanations." / "Lift. Drop. Shoulder pop. Lift. Drop. Repeat."). Longer descriptive sentences set a scene, then a curt fragment lands the gut-punch. Frequent asyndeton and triads (rule-of-three lists of duties, props, or cruelties).
  - **Tone:** deadpan, grim, matter-of-fact; atrocity is reported in the flat register of routine ("the way he fixes the fence. The way he passes the salt at dinner, like it is simply the next thing"). Occasional dry, bitter irony ("associated with lepers in the public imagination which is impressive honestly given where you started"). Never melodramatic, never winking at the camera — horror earns its weight by being underplayed.
  - **Transitions:** age numbers + "years pass"; also thematic pivots that reframe ("From then on, weakness stops being frightening. It becomes meaningful."). Scenes hand off via a realization sentence that closes one stage and opens the next.
  - Tense: 2nd-person throughout; present-leaning ("You are taught…," "You learn…") even when the frame is past, keeping the sim live.

- **Curiosity gaps / emotional triggers / retention / direct address:**
  - **Delayed-decode gaps:** plant an unexplained detail early, pay it off later ("Only later, much later, do you understand. This is the day you were sold." / the market stick + house at the end of the street "all make sense" only when the father explains the trade). This is the core retention engine — small mysteries opened then resolved a beat later, chained continuously.
  - **False-hope → reversal beats:** the script repeatedly dangles rescue/escape then revokes it (T1: emancipation edict "sounds like a miracle" → "new contracts, new words, same hands… Freedom has been postponed forever by better accounting"; T2: "you feel a flicker of something beyond duty. Hope." → "But hope is cruel. Your son emerges small, twisted, and fragile"). The cruelty of the reversal is the emotional payload.
  - **Horror-reframed-as-normal/cultural:** suffering is laundered through euphemism the institution uses on itself — "they say continuity… stability… the gods demand it" (incest), "this is refinement… discipline creates beauty… tears are proof you are being shaped correctly," "necessary work… someone has to do it." The viewer sees the horror the narrator/protagonist is trained not to.
  - **"Only later do you understand" / earned realization:** recurring epiphany device that doubles as a thesis statement ("you realize visibility is not ownership of the self. Prestige is simply a higher shelf in the same cage").
  - **The system / "machine" thesis:** every video lands the same structural argument — the protagonist is a replaceable component in an indifferent institution that sharpens, uses, and discards them. T1: "You are no longer the face of the system. Now you are just one of its gears. And this machine never stops." T2: "the cycle continues without anyone being the wiser." T3: "you understand exactly what your role in this machine is. It never needed you to believe in it. It just needed you to show up." Set this thesis as the spine and seed it from the midpoint.
  - **Bleak zoom-out close:** final beat pulls back from the body to the impersonal verdict — history/the institution denies the protagonist remembrance or agency ("History will only remember the divine persona of a pharaoh, not the body underneath it"; T3's Death "simply waiting… in your father's house, in your house, and it'll do the same in your son's house"). The ending is hollow, not cathartic; no rescue, no moral uplift.
  - **Direct address sustains identification:** unbroken 2nd-person "you" makes every milestone happen *to the viewer*; the script forces the viewer to make the doomed choices ("You say yes immediately, proudly"), feel the body fail, and absorb the institution's logic — empathy is the retention mechanism, not just curiosity.

- **Words per second:** Cluster: ~3,117 words / 23:06 (1,386 s) ≈ 2.25 wps (T1); ~3,147 / 22:58 (1,378 s) ≈ 2.28 wps (T2); T3 ~3,227 words, untimed but same ~22–23 min band. **Working delivery rate ≈ 2.25–2.3 words/second** (≈ 135–138 words/minute) — a slow, measured narration pace consistent with the deadpan register.

- **Target word count (±5%):** **3,150 words** — center of the tight 3,117 / 3,147 / 3,227 cluster (mean ≈ 3,164) and right for a ~22–23 min runtime at ~2.25–2.3 wps. **Acceptable band: 2,993 – 3,308 words (±5%).** This is the contract the Script Cell must hit for the Eunuch in the Forbidden City script.

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
