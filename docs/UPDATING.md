# Updating Forge starters

Forge starters are owned source, not a runtime dependency. To bring improvements into an existing project:

1. Export its `forge.config.json` or `.forge.json` configuration.
2. Import it into the newer Forge release and generate a fresh starter.
3. Diff the token stylesheet, the pattern directory, `AGENTS.md`, and the docs directory. `forge.config.json` records both paths under `layout`.
4. Copy intentional changes rather than replacing project-specific feature code.
5. Run typecheck, build, keyboard checks, responsive checks, and both theme modes.

Schema version changes must ship with a migration in `lib/config.ts` and a changelog entry.

## Schema history

- **3** — added the Google font overrides (`headingFont`, `bodyFont`). Older configurations keep the type-voice preset.
- **2** — added the framework selection. Configurations written by Forge 0.2 have no `framework` field and are read as Next.js projects, which is what they were.
- **1** — initial portable configuration.

Forge reads the versioned wrapper and the legacy unwrapped state shape, and refuses a configuration written by a newer schema than it understands.
