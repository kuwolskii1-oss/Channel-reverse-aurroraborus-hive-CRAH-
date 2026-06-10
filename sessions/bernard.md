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

## STATE 6 — Script — `✓ done`
*(Script Cell)*

- Target word count: **3,150** (acceptable band 2,993–3,308, ±5%)
- Final word count: **3,165**
- Script:

Before we start, if you'd like to go deeper on the Ming court and its eunuchs, I've left a reading list linked down in the description. Now, on to the story.

You are born in a dirt-floor village in northern China, late in the Ming dynasty, somewhere in the long quiet stretch of the fifteenth century. The capital is far away. You will not hear its name said with any weight for years. Your world is smaller than that. A few houses leaning into the wind. A field that gives less every season. A river that is either too high or too low, never the thing you need. Your father farms a patch of land that was never really his. He pays rent in grain, then pays it again in labor, then pays it a third time in the bowing he does whenever the landlord's man rides through. Your mother keeps the house, keeps the chickens, keeps the children alive. There are too many of you. That is the first fact you learn about yourself without anyone having to say it. There are simply too many of you to feed.

You are not the eldest. That matters. The eldest son carries the family name forward, tends the graves, burns the paper money for the ancestors. He is the future, and the future eats first. You are something else. You are a mouth. By the time you are five, you understand the order of things at the table. Father, then the eldest, then the working sons, then you. You learn to want less. You learn to be quiet about wanting. You sweep, you haul water, you chase the birds off the seedlings with a stick until your arms go numb. Nobody is cruel to you. That is somehow worse. The neglect is gentle, ordinary, a thing that happens because there is no extra anything in the house. Not extra food. Not extra warmth. Not extra hope to hand to a younger son.

A few years pass and you turn eight. The harvest fails. It fails the way these things always fail here, slowly and then all at once. The river floods, then the river dries, then the locusts come like the gods are working through a list. The grain in the jar drops a hand's width each week. You watch your father stand in the doorway at night, looking at nothing, the way a man looks when he is doing arithmetic that always comes out short. Your mother stops eating in front of you. You think she isn't hungry. Only later do you understand she was making a choice, and the choice was that you would eat and she would not.

Then the tax man comes. Then the landlord's man comes. They do not come together, but they may as well. The numbers they leave behind are larger than anything in the house. Your father sells the second ox. Then the good blanket. Then the small field his father left him, the one thing that made you a family with land instead of a family who works it. After that, there is nothing left to sell. Nothing except the children. And you are not the eldest.

One evening your father takes you outside and crouches down so his eyes are level with yours. He does not order you. He asks. He asks the way a man asks when he has already decided and just needs you to make it bearable. He tells you there is a way to go to the capital. A way to eat every day. A way to serve in the palace of the Son of Heaven himself, to wear clean clothes and sleep under a real roof. He tells you it is an honor that men would pay for. He does not tell you the price. Not yet. You say yes. Of course you say yes. You are eight years old and starving and someone has just offered you a roof and a future in the same breath. You promise to send money home. You promise to make the family proud. You promise everything a child promises when he doesn't know what the word costs.

The price is your body. The whole of it, or nearly. This is the thing your father could not say out loud at the door. To serve inside the palace, to pass through the gates and stand near the emperor and the women he keeps, you must first be cut. Made into something the court calls clean. A man who cannot be a man, who can never father a child, who can never threaten the bloodline he serves. The Ming runs its inner palace on thousands of these men. Some are taken as boys. Some, when the famine is bad enough, walk to the capital and offer themselves, because a half-life inside the walls beats a whole death outside them. You are part of a supply. You just don't have the word for it yet.

The cut happens in a low building near the imperial city, run by men who do this for a living and charge a fee for it. They call it the procedure. They call themselves the knife experts, and they are proud of their record, the way a roofer is proud his roofs don't leak. You are washed. You are tied down, arms and legs, so you cannot move. You are asked one last time, by law, whether you consent, and a boy of eight in a room like that consents to anything. Then it is done quickly, because quick is the only mercy on offer. A single stroke. Everything taken. The wound is sealed not with thread but with a plug, and you are not allowed to drink for three days, so that nothing passes through and tears you open. Three days of thirst on top of the worst pain a body can hold. Many boys die here. The knife men know the rough number and they have built it into the fee. You live. You don't yet know whether that was the lucky outcome.

And here is the part nobody warned you about. What was cut from you is not thrown away. It is washed, preserved, and sealed in a small jar. The jar is yours now. You will keep it for the rest of your life. You will guard it the way other men guard gold, because it is the only way you will ever be made whole again. When you die, it must be buried with you, returned to your body, so that you can stand before your ancestors complete and not be turned away at the gate of the afterlife as a thing that was unmade. They have a phrase for the jar. The precious. A man without his precious dies twice. So you carry it, this small ceramic proof of what was taken, and you understand that the most valuable thing you own is the part of yourself you no longer have.

You heal. You are sent through the gates. You are eight, maybe nine now, and the Forbidden City swallows you the way the sea swallows a stone. Nothing prepares you for the size of it. Halls that go on past the limit of the eye. Roofs the color of a sky you've never seen. More gates than you can count, each one watched, each one a door you may not pass without permission. And inside the walls, an entire second world made of men like you. Thousands of them. Tens of thousands, in the worst years. A whole shadow population whose only purpose is to keep the household of the emperor running so smoothly that he never has to think about how.

The hierarchy reveals itself fast, the way hunger does. At the bottom is you. A small eunuch with no master, no rank, no name worth saying. You are given the lowest work. You empty the chamber pots. You carry coal, you carry water, you carry away whatever the higher men do not want to see. You sleep crammed among other boys in a cold room. When you make a mistake, and you will, the punishment is the bamboo. A flogging counted out in strokes, administered flatly, the way you'd count out coins. Nobody hates you when they beat you. That is the lesson again. The cruelty is procedure. It is just the system keeping its tools in order.

But there is a ladder, and you learn its shape. Above you are the eunuchs with positions, attached to a workshop, a storeroom, a garden, a gate. Above them, the ones attached to a particular prince or consort, close enough to power that their own small word carries weight. And far above all of it, almost out of sight, sit the great offices. The one whose name the whole palace lowers its voice for is the Directorate of Ceremonial. The eunuchs there handle the emperor's documents. They read what reaches him and they shape what leaves him. A man in that office, born in a hut like yours, cut for a fee like you, can become one of the most powerful people in the empire. You hear his name spoken with fear by men who would never fear you. And something turns over in your chest. For the first time you understand that the cut was not only a loss. It was a door. The only door a peasant's spare son will ever be handed.

So you decide to climb.

Time moves quietly inside the walls, measured in seasons and tasks. You make yourself useful. You make yourself invisible when invisible is wanted and present when present is rewarded. You learn who matters and who only seems to. And one day, because you've caught the eye of someone above you, you are chosen for the thing every low eunuch dreams of. The eunuch school. The Ming, in its strange wisdom, teaches some of its own castrated servants to read and write, because a household that runs on paper needs literate hands it can trust. Most boys outside these walls will never see a brush. You learn the characters. You learn the classics, in pieces. You learn to keep accounts, to draft a clean document, to recognize the difference between what an order says and what it means. Literacy is the second knife. The first one cut you down. This one carves you a way up.

You are perhaps fifteen now, and for the first time in your life you are not at the very bottom of anything. You are assigned to a real office. You handle records. You stand close enough to power to smell it. You learn the true currency of the palace, and it is not silver, though silver helps. It is information. Who is rising. Who is falling. Which consort the emperor favored this month. Which official sent a gift, and how large. You learn that a well-placed word, dropped at the right ear at the right moment, moves more than an army. You learn to drop those words. You also learn to take the gifts that come to a man who can drop them, because everyone takes, and a eunuch who refuses is not honest, only suspicious.

You see the women now, too. The consorts, the concubines, the empress in the distance. You move among them in a way no whole man in the empire is permitted to, because you are the one kind of male the court has decided is safe. You carry their messages. You hear their grief and their scheming through thin walls. Some of them are kinder to you than anyone has ever been, because you are the only one they can speak freely in front of, the only one who cannot use them and cannot be used against them. You become a keeper of secrets. And secrets, you are learning, are the heaviest currency of all.

Years pass and you turn thirty. You are not a great man. Most eunuchs never become great men, the same way most soldiers never become generals. But you have a place. You have a name that opens a few doors. You have men below you who empty the pots you once emptied, and you treat them roughly, because that is what was done to you and you have never been shown another way. You send money home, the way you promised the boy at the door he would. Your family takes it. Your family does not invite you back. To them you have become something useful and shameful at once, a son who pays the rent and can never carry the name forward, a branch that bears coins instead of grandchildren. The village would spit at you if you returned. The capital lets you stay. So you stay.

This is the part where you understand the shape of the whole thing. You have been told your whole life that the cut was a sacrifice, that proximity to the emperor was an honor, that the palace took you in out of mercy. And it is true that you eat every day. It is true that you have risen further than the farm boy you were could have dreamed. But you understand now what you actually are. You are a tool. A specific tool the system manufactures on purpose, by taking a poor boy and removing the one thing that would make him loyal to anything but the palace. No wife to scheme for. No son to enrich. No future outside these walls. The cut didn't just make you safe to keep near the women. It cut away every loyalty you might have had to the world, and left you with loyalty only to the institution that holds your jar. They sharpened you by mutilation. Then they pointed you where they wanted, and you went.

And like any tool, you are only valued while you cut clean. You see this happen to others before it happens to you. A faction shifts. An emperor dies and a new one comes, with new favorites and old grudges. The great men of the last reign, the ones whose names the palace whispered, are suddenly arrested. No trials worth the word. The charges are written after the decision. A eunuch who handled the empire's documents one month is dragged from his office the next and flogged in a courtyard, or strangled quietly, or sent to guard a tomb in some province where the wind never stops. The fortune he gathered is seized. The men who feared him line up to denounce him. You watch the highest fall and you understand the floor was always this thin, under all of you, the whole time.

So you grow careful instead of ambitious. You take your gifts but you keep your name off the dangerous papers. You watch which way the wind moves before you move. You survive, which in the palace is its own quiet achievement, because the ground is always shifting and most men eventually step wrong. You are not flogged to death. You are not purged. You simply get older, in a place that has no use for old.

And the palace has no use for old. The work of the inner court runs on younger legs. You wake earlier than you used to and your back does not forgive you for it. A new generation of small eunuchs floods in, freshly cut, freshly hungry, and they climb the same ladder past you while you stand on the rung you reached and go no higher. The consorts you served grow old or die or are replaced, and the new ones have their own keepers of secrets, their own bright young men who carry the messages now. The office finds gentler ways to set you aside. You are not dismissed. The palace does not dismiss. You are redirected. Given lighter, smaller, emptier work. Made to feel the door closing without anyone having to say it is closed.

You are old now, by the standards of a body that was wounded young and never fully mended. The cut you took at eight has charged you interest your whole life, in ways the knife men never mentioned. Your health was never quite whole. Many eunuchs who reach this age cannot leave the walls anyway, because the walls are all they have. No family will take you. No village wants the son who can't continue the line. So you do what the worn-out ones do. You drift toward one of the temples the eunuchs keep for their own, outside the palace, where the old and the discarded go to die among men who understand exactly what was taken from them, because the same thing was taken from each of them.

And there is one last task. You make sure of the jar. You have carried it for fifty years, through famine and frost and every reign you outlived, the small sealed proof of the boy you stopped being at a table in the north. You arrange for it to be buried with you. Because the one thing you have wanted, under all the climbing and all the silver, is to stand before your ancestors whole, to not be turned away at the last gate as a thing that was unmade. But the eunuchs' fate even here is uncertain. Many are buried by no one. Many lose the jar over a long life, to theft or fire or simple time, and go into the ground incomplete, the way the court always half-intended. You hope you are not one of them. Hope is the last thing the palace lets you keep, mostly because it costs the palace nothing.

You die in a small room that is not your home, because you never had a home, only postings. And the machine you served does not pause to notice. The pots are emptied the next morning by a boy fresh from a starving village, who carries his own jar and dreams of the Directorate and does not yet know what you knew. The emperor never learned your name. The histories will record the great eunuchs, the two or three who shook the empire, and forget the tens of thousands of you who simply made the household run. You were never meant to be remembered. You were a part. The system took a frightened boy, cut away everything that would have tied him to the world, sharpened what was left into something useful, used it until it dulled, and set it aside without a word. That was the whole of the design. It was working exactly as built. And it is happening to a new boy at the gate already, who said yes the way you said yes, who does not yet understand the cost. The machine does not stop. It was never built to stop. It only needs the next one to walk in.

## STATE 7 — Visual Style Profile — `✓ done`
*(Visual Cell)*

> **Source:** Derived from 5 operator-provided sample FRAMES (animation stills,
> NOT thumbnails) from Bernard's actual videos, cross-checked against the STATE 5
> Style DNA. The Queen viewed the pixels first-hand; this profile synthesizes
> those observations into a reusable lock. Every STATE 8 image prompt for the
> Eunuch-in-the-Forbidden-City video MUST follow this profile exactly.

- **Art style — THE signature hybrid.** A deliberate jarring split inside every
  character: **crude minimalist black stick-figure BODIES** (thin tapering
  brush/marker lines, simple looping curved limbs, no torso volume, no hand or
  foot detail, doodle-level) carrying **highly detailed, semi-realistic,
  fully-shaded illustrated HUMAN FACES/HEADS** (individualized and expressive —
  age, gender, ethnicity legible; wrinkles on elders, freckles on youths,
  defined brows, real hair). Photoreal faces on doodle bodies — this mismatch is
  the brand and must appear on every figure. **Backgrounds are the opposite of
  the bodies:** richly painted, textured, semi-realistic historical environments
  rendered at far higher effort than the characters (painterly architecture,
  perspective, materials). Figures sit *inside* these deep painted environments
  as crude line-drawn intrusions — a lone stick figure dwarfed by an
  elaborately illustrated hall. Line quality on bodies = loose, imperfect,
  hand-drawn marker; never clean vector, never volumetric.

- **Palette — muted/earthy with a warm-vs-cool logic.** Dominant: desaturated
  browns, tans, ochres, greys, dirt and stone tones. Two-mode accent logic:
  (1) **warm accent pools** — campfire orange, lamp/lantern glow, a warm-lit
  window — used sparingly as the bright note against an otherwise dark frame;
  (2) **cool blue-grey ambient** for night, interiors of sorrow, and death
  scenes. Daytime exteriors read as warm natural daylight over the same earthy
  base. Saturation stays low everywhere except the deliberate warm light source.
  Signature spot-color: **stylized blue tear-streaks** (the only "pure" color,
  reserved for crying/grief, including small blue tear/water puddles).

- **Lighting — motivated, chiaroscuro-lite.** Light has a logical in-scene
  source (fire, lamp, window, open doorway, daylight) and pools warmly around
  it, falling off into surrounding dark. Night/sorrow scenes: cold blue-grey,
  low key, quiet. Intimate scenes: soft warm directional light, gentle
  falloff. Grand-interior scenes: bright, airy, cool daylight flooding from
  arched openings with floor reflections. Not hard noir contrast — a softened,
  painterly chiaroscuro where one warm pool reads against a darker, cooler
  ambient. Mood is set primarily through light temperature and key level.

- **Camera — static cinematic stills, eye-level.** No motion, no dutch tilt;
  steady straight-on framing. Two repeating modes: **wide establishing shots**
  (deep one-point perspective into streets, halls, villages with the figure(s)
  placed within the environment) and **intimate close-ups** (one or two figures
  filling the frame, soft-focus painterly background behind). Choose wide to
  show the world/institution; choose close-up to land an emotional beat.

- **Composition — figures placed in deep painted environments.** Backgrounds
  carry strong perspective and depth; characters are positioned within them
  (seated rings around a fire, crowds along a receding lane, a single slumped
  figure in a vast hall). Comfortable use of negative space and scale to make a
  lone crude figure feel small against an elaborate setting. Framing tends
  centered/balanced and still. **Subscribe watermark (a stick-figure-face icon
  in a rounded square) sits BOTTOM-RIGHT** in essentially every frame — keep
  that corner reserved/clear and place it there.

- **Detail — deliberate bifurcation.** High detail is spent on exactly two
  things: **faces** (semi-realistic, shaded, emotionally specific) and
  **environments** (painterly, textured, historically furnished — columns,
  frescoes, thatch, pottery, beds, stools, props). Everything else — the bodies,
  limbs, posture lines — is intentionally crude and low-effort. Emotion is
  carried by the detailed face plus body *posture* (weary slumps, splayed
  limbs, bowed shoulders) and the signature **blue tear-streaks** as the
  explicit crying cue.

- **Mood — grim, melancholic, deadpan-tragic.** A somber historical register:
  sorrow, weariness, quiet dread, death. But the crude doodle bodies inside
  serious painted scenes create a constant **dark-comic undercut** — tragedy
  delivered with a straight face through childlike figures, exactly mirroring
  the script's flat-voiced, underplayed horror. The frame should feel heavy and
  sad while the stick figures keep it from tipping into melodrama.

## STATE 8 — Image Prompts — `✓ done`
*(Visual Cell)*

- **Total beats:** 241 (full script, start to finish, ~3–5 s / ~8–12 words each).
- **Full ordered prompt set:** `sessions/image-prompts-bernard.md` (STYLE TOKEN at top, all 241 beats with snippet + prompt). Kept out of this file to keep the Queen's context clean.

- **STYLE TOKEN — [STYLE]:** Bernard hybrid style: crude minimalist black stick-figure body (loose tapering hand-drawn marker lines, looping limbs, no torso volume, no hands or feet) topped with a HIGHLY DETAILED semi-realistic fully-shaded illustrated human face (age/gender/ethnicity legible), placed INSIDE a richly painted, textured, semi-realistic Ming-dynasty Chinese environment. Muted earthy palette (browns, tans, ochres, greys); motivated chiaroscuro-lite lighting with a warm accent pool against cooler dark, or cool blue-grey ambient for night/grief/death; stylized BLUE tear-streaks as the only spot color for crying. Flat 2D, hand-drawn, no 3D render, no photoreal bodies. Static eye-level still. Bottom-right corner kept clear for the subscribe watermark.

- Each prompt = **[STYLE]** + beat-specific scene (setting · character(s) with face description + expression · action/posture · framing WIDE/CLOSE-UP · lighting/time-of-day).

- **First 8 beats (inline sample; full set in the prompts file):**

**Beat 1** — "Before we start, if you'd like to go deeper on the Ming court and its eunuchs,"
[STYLE] WIDE establishing. A vast painted Ming imperial palace courtyard at warm daylight — tiered gold-tiled roofs, red columns receding in deep perspective. One small crude stick figure with a curious young Chinese boy's face stands tiny and centered, dwarfed by the architecture.

**Beat 2** — "I've left a reading list linked down in the description. Now, on to the story."
[STYLE] CLOSE-UP. A single crude stick figure with a detailed neutral young northern-Chinese face faces forward against a softly painted tan palace-wall backdrop, warm low daylight, a faint scroll and brush painted beside him. Calm deadpan expression, quiet anticipation.

**Beat 3** — "You are born in a dirt-floor village in northern China,"
[STYLE] WIDE establishing. A poor northern-Chinese dirt village at dusk — a few leaning mud-brick thatched houses, bare earth, dry fields receding into haze. Cool dim ambient with one faint warm window glow. No figures, desolate, painterly textured ground.

**Beat 4** — "late in the Ming dynasty, somewhere in the long quiet stretch of the fifteenth century."
[STYLE] WIDE establishing. The same dirt village under a wide pale grey fifteenth-century sky, distant hills, a thin smoke trail from one hut. Muted browns and greys, flat overcast daylight, vast empty land, deep perspective, melancholic stillness.

**Beat 5** — "The capital is far away. You will not hear its name said with any weight for years."
[STYLE] WIDE establishing. A long dirt road winding from the foreground village toward a faint, tiny painted hint of a walled city on the far horizon. Cool hazy distance, warm dry foreground earth, immense empty space between near and far.

**Beat 6** — "Your world is smaller than that. A few houses leaning into the wind."
[STYLE] WIDE establishing. A tight cluster of three crooked thatched mud houses leaning in the wind, bending dry grass, dust in the air. Muted ochre-and-grey palette, flat windy daylight, painterly weathered textures, no figures, intimate and small.

**Beat 7** — "A field that gives less every season."
[STYLE] WIDE establishing. A patchy failing farm field of thin sparse crops in cracked dry brown soil, a low stone boundary, grey overcast light. Earthy desaturated tones, painterly barren furrows receding in perspective, quiet desolation.

**Beat 8** — "A river that is either too high or too low, never the thing you need."
[STYLE] WIDE establishing. A muddy low river in a wide eroded bank, dried cracked edges, painterly brown water under flat grey sky, distant bare hills. Cool muted palette, deep perspective along the riverbed, empty and indifferent.

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
