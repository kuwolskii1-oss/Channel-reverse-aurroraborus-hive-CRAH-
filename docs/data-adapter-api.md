# api_mcp adapter — YouTube Data API v3 (primary)

Concrete implementation of the `api_mcp` adapter from
`docs/stage1-scout-engine.md`. Turns the inert adapter into a live source of
**verified** channel metrics, so the Stage 1 confidence gate can clear on real
data instead of web-search estimates.

Primary source: **YouTube Data API v3** (official, free quota, never 403s a
valid key). Optional add-on: Social Blade API for true 30-day sub velocity.

## Credential
- Env var: **`YOUTUBE_API_KEY`**
- Get one: Google Cloud Console → create project → enable **YouTube Data API
  v3** → Credentials → API key. No billing required for normal quota
  (10,000 units/day).
- Store it as an environment secret (web environment config) or in
  `.claude/settings.local.json` (gitignored). **Never commit the key.**

## How the Recon Cell calls it
Plain HTTPS GET to `https://www.googleapis.com/youtube/v3/...` with
`key=$YOUTUBE_API_KEY` as a query param (key is not an auth header, so a normal
fetch/curl works; no OAuth). Endpoints used:

| Need | Endpoint | Key fields returned |
|------|----------|---------------------|
| Discover channels in niche | `search.list?part=snippet&type=channel&q=<query>&maxResults=25` | channelId, title |
| Resolve a handle | `channels.list?part=...&forHandle=@handle` | channel id + below |
| Channel core stats | `channels.list?part=snippet,statistics,contentDetails&id=<id>` | `publishedAt` (age), `subscriberCount`, `viewCount`, `videoCount`, uploads playlist id |
| Recent uploads (cadence) | `playlistItems.list?part=contentDetails&playlistId=<uploads>&maxResults=20` | videoIds + `videoPublishedAt` |
| Per-video views (velocity/variance) | `videos.list?part=statistics&id=<ids>` | per-video `viewCount` |

## CandidateSignal field mapping
| CandidateSignal | Source |
|---|---|
| channel_id, name, handle, url | channels.list snippet |
| created_date, age_days | `snippet.publishedAt` → now − publishedAt |
| subs | `statistics.subscriberCount` |
| total_views | `statistics.viewCount` |
| upload_cadence_per_week | derived from `playlistItems` publish dates |
| recent_video_views[] | `videos.list` statistics per recent video |
| variance, outlier_score | computed over recent_video_views[] |
| view_velocity_30d | Σ views of videos published in last 30d (proxy) |
| sub_velocity_30d | **not in YT API** — N/A unless Social Blade configured |
| est_rpm_band | niche-derived (unchanged) |
| format_type | inferred from titles/desc + thumbnails (unchanged) |

## Gate coverage
This adapter supplies **age, subs, total views, cadence, recent-video views** —
i.e. the "core data present" gate condition that web_search could not. The only
field it cannot give is true `sub_velocity_30d`; the engine uses the
view-velocity proxy and notes the limitation. Add Social Blade only if 30-day
sub deltas become decision-critical.

## Quota note
search.list costs 100 units/call; channels/videos/playlistItems cost ~1 each. A
full Stage 1 run (one niche, ~25 candidates, recent videos each) is well under
the 10k/day free quota. Batch `id=` lists (up to 50 ids/call) to stay cheap.

## Precedence
Engine order is unchanged: `api_mcp` (this) → `web_search` → `operator_paste`.
With `YOUTUBE_API_KEY` set, the Recon Cell uses this adapter first and records
`adapter used: api_mcp (YouTube Data API v3)` in the session file.
