# Contributing

Keep changes aligned with Forge's four layers: foundations, UI-kit primitives, reusable patterns, and project compositions.

1. Update the shared schema, the framework registry (`lib/frameworks.ts`), or the pattern catalog first. React patterns are edited in `components/patterns/*.tsx` — the wizard renders those modules and `npm run sync:patterns` mirrors them into `lib/patterns/react.ts`.
2. Update the builder, generated starter, and documentation from that source.
3. Add or extend generated-project assertions in `scripts/verify-generated.mjs`.
4. Run `npm run typecheck`, `npm run verify`, and `npm run build`.
5. Record user-visible changes in `CHANGELOG.md`.

## Adding a framework

1. Add the key to `FrameworkKey` and a definition to `FRAMEWORKS`, including the layout paths its files actually use.
2. Add a scaffold in `lib/scaffolds/` that returns a bootable project, and pin every package in `lib/scaffolds/versions.ts`.
3. If the framework introduces a new component family, add a pattern module in `lib/patterns/` covering all six patterns.
4. Verify the real flow, not just the generator: install the generated project, run its UI-kit CLI, then build and typecheck it.

Reusable components must expose typed props, support a class override in the framework's own idiom, document relevant states, preserve keyboard/focus behavior, and avoid hardcoded brand colors.
