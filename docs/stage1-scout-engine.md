# Stage 1 — Autonomous Scout → Score → Select Engine

Stage 1 is no longer "ask the operator for a channel." It is an autonomous
engine that **discovers a niche, sources candidate channels, scores them against
a fixed rubric, and commits the winner** — hands-off — then fills the Channel
Record that the rest of the pipeline consumes.

Owned by the **Recon Cell** (sourcing) with the **Queen** arbitrating selection.
The four "analyst" lenses below are evaluation passes, **not** new agents — the
hive stays at 8.

Autonomy level (operator-chosen): niche **auto-discovered**, data via
**API/MCP**, winner **auto-committed** (subject to the confidence gate).

---

## Phase 0 — Niche discovery
Rank candidate niches by opportunity, not vibes:

`niche_score = RPM_band × demand × (1 − saturation) × clonability`

- **RPM_band** — estimated ad RPM tier (finance, business, tech/SaaS, real
  estate, insurance, AI tools = high; entertainment, vlogs, gaming = low).
- **demand** — search/watch volume and trend slope in the niche.
- **saturation** — how crowded the niche is (more = worse).
- **clonability** — can our automation pipeline reproduce this format? Faceless
  / voiceover / templated scores high; personality-locked scores low.

Defaults for an automation op (override-able by operator constraints such as
language or format): **faceless, high-RPM, English, long-form.** Carry the top
1–3 niches into sourcing. Record the niche decision + rationale.

## Phase A — Source the candidate pool
For each carried niche, pull a candidate set through the **data adapter** (see
below). Target "relatively new + early monetary success": prefer channels aged
roughly **1–12 months** showing real velocity. Aim for ≥ 15–25 candidates per
niche before scoring so the ranking is meaningful.

## Phase B — Score against the fixed rubric
Each candidate is scored 0–100 per dimension; composite is a deterministic
weighted sum (reproducible across runs).

| Dimension | Weight | Proxy |
|---|---|---|
| Monetization potential | 30 | niche RPM band × view velocity |
| Cloneability / production-fit | 25 | faceless/templated ≫ personality-locked |
| Growth momentum | 20 | sub & view velocity, outlier hits, cadence |
| Newness | 10 | channel age (fresh-working format, not legacy authority) |
| Repeatability | 10 | low variance across recent uploads |
| Saturation / whitespace | 5 | room to enter (inverse of crowding) |

`composite = Σ(weightᵢ × scoreᵢ) / 100`  → normalized 0–100.

### Hard vetoes (auto-disqualify regardless of composite)
- Reused / copyrighted content likely to draw strikes.
- Sub/view-manipulation signals (bought growth).
- Identity-locked channel a clone cannot realistically beat.
- Legally risky brand/IP to mirror.

## Phase C — The panel (role-differentiated lenses)
Naive "agents vote" is theater — identical reasoning yields correlated errors.
Instead each lens owns a **non-overlapping** mandate so the ensemble covers
distinct failure modes:

| Lens | Scores | Also does |
|---|---|---|
| Monetization Analyst | Monetization | flags low-RPM traps |
| Cloneability Analyst | Cloneability | flags production we can't reproduce |
| Growth/Trend Analyst | Growth + Newness | flags fading/peaked channels |
| Risk/Saturation Analyst | Repeatability + Saturation | raises **vetoes** |

The **Queen aggregates**: weighted composite → apply vetoes → rank → tie-break
by Monetization, then Cloneability. Every score is written to the session file
with a one-line justification (auditable).

## Phase D — Confidence gate (autonomy safety valve)
Because there is **no human pick**, the winner is auto-committed **only if all**
hold:
- winner composite **≥ 70**, and
- margin over #2 **≥ 5** points, and
- **no** unresolved veto flags on the winner, and
- data completeness on the winner ≥ core fields (age, subs, views, cadence).

If the gate **fails**, do not commit a weak target. Escalate in order:
widen the search / pull more candidates → try the next carried niche → if still
failing, surface the top 3 with scorecards to the operator and stop. (This is
the only path back to a human, and only on low confidence.)

## Phase E — Commit
On pass, the winner **becomes the Channel Record** (canonical name, handle, URL,
channel ID) — identical schema to the manual Stage 1, so Stage 2+ are unchanged.
Write to the session file: niche decision, candidate pool table, per-candidate
scorecards, winner + composite + confidence verdict. Flip STATE 1 `✓ done`.

---

## Data adapter contract
Scoring/selection is **source-agnostic**. Every adapter's only job is to emit
normalized **CandidateSignal** records; the brain consumes those identically.

```
CandidateSignal:
  channel_id, name, handle, url
  created_date, age_days
  subs, sub_velocity_30d
  total_views, view_velocity_30d
  upload_cadence_per_week
  recent_video_views[]   # for variance/outlier
  variance, outlier_score
  est_rpm_band           # niche-derived
  format_type            # faceless | voiceover | personality | mixed
  niche
  flags[]                # veto signals
```

Adapters (in priority order):
1. **api_mcp** *(chosen target)* — query VidIQ/TubeLab/TubeGen via API or an MCP
   server. **Requires credentials not yet present in this repo.** Put keys in
   env / settings and register the MCP server; until then this adapter is
   inert.
2. **web_search** — WebSearch/WebFetch over public stat pages + YouTube search.
   Coarser numbers, but runs today with no setup — usable to bootstrap a live
   test.
3. **operator_paste** — operator pastes tool exports (CSV/screenshots).

The engine uses the highest-priority adapter that is configured and falls back
as needed; it records which adapter produced each candidate.

> Rubric weights, veto list, and gate thresholds are intentionally versioned
> here so runs stay comparable. Tune them as CRAH iterates.
