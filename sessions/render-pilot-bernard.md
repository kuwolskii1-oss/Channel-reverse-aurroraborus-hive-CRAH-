# Render Pilot Pack — Bernard / Eunuch — beats 1–10

> STATE 14 pilot. Paste the **Render Cell Brief** below into your own Claude
> (Claude Code or Desktop) **with the Higgsfield MCP connected**. It generates
> the first 10 beats' images + motion clips, locks style/consistency, and reports
> back for sign-off before we scale to all 241. Full prompt sets live in
> `sessions/image-prompts-bernard.md` (241) and `sessions/video-prompts-bernard.md` (241).

## 0) Connect Higgsfield MCP (one time)
- **Claude Code:** `claude mcp add --transport http higgsfield https://mcp.higgsfield.ai/mcp` → then run `/mcp` and authenticate to your Higgsfield account when prompted.
- **Claude Desktop/Web:** Settings → Connectors → Add custom connector → name `Higgsfield`, URL `https://mcp.higgsfield.ai/mcp` → Connect → sign in to Higgsfield.

---

## RENDER CELL BRIEF — paste this into your MCP-connected Claude

You are the CRAH Render Cell. The Higgsfield MCP is connected. Generate the first
10 beats of "Why It Sucks to Be Born a Eunuch in the Forbidden City" as a pilot.

**Rules:**
- First, list the available Higgsfield MCP tools and confirm you have image
  generation (Soul) and image-to-video.
- **Lock style before generating beats:** create ONE style-anchor image from the
  [STYLE] token alone (16:9), then reuse it as a Soul reference (reference image /
  seed) for ALL 10 beats so palette, hand-drawn line quality, and the
  detailed-face-on-stick-body look stay consistent. Keep aspect ratio 16:9.
- For each beat: (a) Soul-generate the image = `[STYLE]` + the beat scene;
  (b) image-to-video that still using the beat's `[MOTION]` prompt — MINIMAL
  motion only (slow camera push/pan + one or two isolated moves), ~3–5 s, no
  fluid body animation, no 3D, no style drift.
- Keep the bottom-right corner clear (subscribe-watermark zone).
- After each beat, add a row to the MANIFEST. If a result drifts (photoreal
  bodies, wrong palette, 3D look), regenerate before continuing.
- STOP after beat 10 and present all 10 images + clips + the manifest for review.
  Do NOT proceed to beats 11–241.

**[STYLE]** = Bernard hybrid style: crude minimalist black stick-figure body (loose tapering hand-drawn marker lines, looping limbs, no torso volume, no hands or feet) topped with a HIGHLY DETAILED semi-realistic fully-shaded illustrated human face (age/gender/ethnicity legible), placed INSIDE a richly painted, textured, semi-realistic Ming-dynasty Chinese environment. Muted earthy palette (browns, tans, ochres, greys); motivated chiaroscuro-lite lighting with a warm accent pool against cooler dark, or cool blue-grey ambient for night/grief/death; stylized BLUE tear-streaks as the only spot color for crying. Flat 2D, hand-drawn, no 3D render, no photoreal bodies. Static eye-level still. Bottom-right corner kept clear.

**[MOTION]** = Limited cut-out / paper-puppet animation, NOT fluid. Hold the flat 2D painterly look; characters mostly static with one or two isolated moving parts; allowed: slow camera push/pull/pan/parallax, small head turn/tilt, a swinging limb, breath, slow blink, blue tears welling, ambient fire/lamp/wind/smoke/haze. No walk cycles, no morphing, no 3D fly-through. ~3–5 s.

### Beats 1–10
| # | Snippet | IMAGE prompt ([STYLE] +) | MOTION prompt ([MOTION] +) |
|---|---------|--------------------------|-----------------------------|
| 1 | "…go deeper on the Ming court and its eunuchs," | WIDE establishing. Vast painted Ming palace courtyard, warm daylight — tiered gold roofs, red columns in deep perspective. One small stick figure with a curious young Chinese boy's face, tiny and centered, dwarfed by the architecture. | Very slow push-in toward the tiny centered boy; one small head-tilt looking up; faint drifting haze + dust over gold roofs. ~5s. |
| 2 | "…reading list linked… Now, on to the story." | CLOSE-UP. Single stick figure with a detailed neutral young northern-Chinese face, forward, against a soft tan palace-wall backdrop, warm low daylight, faint scroll + brush beside him. Calm deadpan, quiet anticipation. | Hold framing; shoulders rise/fall once with a breath, then a slow single blink; faint warm light flickers on the wall. ~4s. |
| 3 | "You are born in a dirt-floor village in northern China," | WIDE establishing. Poor northern-Chinese dirt village at dusk — leaning mud-brick thatched houses, bare earth, dry fields into haze. Cool dim ambient, one faint warm window glow. No figures, desolate. | Slow push-in on the leaning houses; the warm window glow gently pulses; thin smoke drifts, faint dust. No characters move. ~5s. |
| 4 | "late in the Ming dynasty… fifteenth century." | WIDE establishing. Same village under a wide pale grey sky, distant hills, a thin smoke trail from one hut. Muted browns/greys, flat overcast daylight, vast empty land, deep perspective, melancholic. | Gentle slow pan across the grey sky; the lone smoke trail rises and bends; faint wind stirs ground haze; static houses. ~5s. |
| 5 | "The capital is far away…" | WIDE establishing. Long dirt road winding from the foreground village toward a faint tiny walled city on the far horizon. Cool hazy distance, warm dry foreground earth, immense empty space. | Very slow push-in down the road toward the faint distant city; hazy distance shimmers; light dust drifts across warm foreground. ~5s. |
| 6 | "Your world is smaller than that…" | WIDE establishing. Tight cluster of three crooked thatched mud houses leaning in the wind, bending dry grass, dust in air. Muted ochre-and-grey, flat windy daylight, weathered textures, no figures. | Hold frame; dry grass bends and dust streaks sideways in wind, houses dead still; slight parallax drift across the cluster. ~4s. |
| 7 | "A field that gives less every season." | WIDE establishing. Patchy failing farm field, thin sparse crops in cracked dry brown soil, a low stone boundary, grey overcast light. Earthy desaturated tones, barren furrows in perspective. | Slow pan along barren furrows in perspective; sparse crops sway weakly in faint wind; grey light steady, no figures. ~4s. |
| 8 | "A river that is either too high or too low…" | WIDE establishing. Muddy low river in a wide eroded bank, dried cracked edges, painterly brown water under flat grey sky, distant bare hills. Cool muted palette, deep perspective along the riverbed. | Slow push-in along the riverbed; brown water ripples faintly, edges shimmer; distant hills hold still under flat grey light. ~4s. |
| 9 | "Your father farms a patch of land that was never really his." | CLOSE-UP. Stick figure with a detailed weathered middle-aged Chinese farmer's face — sun-lined, tired, stubbled — bent over a hoe in a dry field, slumped. Warm dim daylight, muted browns, painterly soil. | Hold close; the farmer's shoulders rise and fall heavily with a tired breath and the hoe-arm swings once, low. Faint warm dim light wavers behind. ~4s. |
| 10 | "He pays rent in grain, then pays it again in labor," | CLOSE-UP. The same farmer hauling a heavy grain sack on his bowed back, detailed weary face strained, looping arms gripping the load. Muted ochre field, flat daylight, painterly burlap, heavy stooped posture. | Hold framing; the bowed body sways slightly under the load, head dips lower. Faint dust drifts across the ochre field. ~4s. |

### MANIFEST (fill as you go)
| Beat | Image asset (url/file) | Clip asset (url/file) | Model(s) | Status | QA note |
|------|------------------------|-----------------------|----------|--------|---------|
| anchor | | — | Soul | | style lock |
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |
| 7 | | | | | |
| 8 | | | | | |
| 9 | | | | | |
| 10 | | | | | |

---

## After the pilot
Bring the 10 images + clips + manifest back here. On sign-off, the Render Cell
scales to beats 11–241 from the two full prompt files (batched, same anchor
reference). Record the final manifest in `sessions/bernard.md` STATE 14.
