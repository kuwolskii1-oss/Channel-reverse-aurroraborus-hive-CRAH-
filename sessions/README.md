# sessions/

The hive's shared memory. **One file per cloning project**, holding everything
gathered across the 12 states so any cell — and any agent added later — can read
the full context instead of re-deriving it from chat.

## Convention
- File name: `sessions/<slug>.md`, where `<slug>` is the source channel's handle
  or name, lowercased and hyphenated (e.g. `@MrBeast` → `sessions/mrbeast.md`).
- Created by the **Recon Cell** at STATE 1 by copying `_TEMPLATE.md`.
- Each cell appends to its own section and flips that section's status from
  `pending` to `✓ done`. The `Current state:` field at the top tracks progress.
- Never overwrite or delete a prior section — the file is append-only history.

`_TEMPLATE.md` is the blank scaffold; it is not a real session and is never
edited during a run.
