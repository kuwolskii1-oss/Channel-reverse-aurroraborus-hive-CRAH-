# STATE 14 — Media Render (Render Cell)

Generates the actual images and motion clips from the STATE 8 image prompts and
STATE 9 motion prompts, using **Higgsfield** (Soul for images; Kling/Hailuo/Veo
etc. for image-to-video). Runs after STATE 9 (prompts) — and after STATE 13 in
the full sequence.

## Execution model (important)
Higgsfield is reached via its **MCP server** (`https://mcp.higgsfield.ai/mcp`,
OAuth, no API keys) or its **Cloud API** (Bearer token). The CRAH sandbox
firewalls all Higgsfield hosts, so the Render Cell does **not** run inside the
hive. It runs **wherever the Higgsfield MCP/API is reachable**:
- **Operator's Claude** (Claude Code/Desktop) with the Higgsfield MCP connected
  — the agent calls Higgsfield tools directly. *(chosen for the Bernard demo)*
- **GitHub Actions** + Higgsfield Cloud API (Bearer token) for unattended batch.

The hive's job is to produce the **render brief + pilot pack** (prompts,
consistency rules, manifest schema, QA checklist); the operator's MCP-connected
agent executes it and returns the manifest for the session record.

## Procedure (per pilot, then scale)
1. **Connect** Higgsfield MCP; confirm image + image-to-video tools are available.
2. **Lock style/consistency FIRST.** Generate one style-anchor image from the
   STATE 7 [STYLE] token; reuse it as a Soul reference for every subsequent beat
   (reference mode / seed-lock) so all shots share palette, line quality, and the
   detailed-face look. Fix aspect ratio 16:9 for all.
3. **Images:** for each beat, Soul-generate `[STYLE] + beat scene`.
4. **Motion:** image-to-video each still using the matching `[MOTION]` prompt;
   keep motion minimal (limited cut-out feel) — camera push/pan + one or two
   isolated moves, ~3–5 s, no fluid/3D drift.
5. **Manifest:** append a row per beat → `beat | snippet | image_out | clip_out |
   model | status | QA note`.
6. **QA:** flag drift (photoreal bodies, wrong palette, 3D look, watermark-zone
   clutter) and regenerate before moving on.
7. **Gate:** finish the ~10-beat PILOT, get operator sign-off on look +
   consistency, THEN scale to all 241 (cost reason: 241 clips is a large spend).

## Cost / risk
Soul images are cheap; image-to-video clips are not — 241 clips is a serious
credit spend. Always pilot first. Character/style consistency across 241 shots is
the main risk; the style-anchor-reference step is mandatory, not optional.

## Output
Images + clips live in the operator's Higgsfield account / downloads; the Render
Cell records the manifest (beat→asset mapping, models, status) back into the
session file. Keep generated media originality intact (our prompts, our assets).
