# Forge — frontend bootstrapper

Forge turns a short product and brand brief into a bootable, AI-ready design-system starter for the framework of your choice. It is local-first: no account, backend, or uploaded project data is required.

## Frameworks

Pick any framework served by a shadcn-compatible component distribution — or no framework at all:

| Family | Frameworks | Components from |
| --- | --- | --- |
| React | Next.js, React + Vite, React Router, TanStack Start, Astro | [shadcn/ui](https://ui.shadcn.com) on Radix |
| Vue | Vue + Vite, Nuxt | [shadcn-vue](https://www.shadcn-vue.com) on Reka UI |
| Svelte | SvelteKit | [shadcn-svelte](https://shadcn-svelte.com) on Bits UI |
| Angular | Angular | [spartan/ui](https://www.spartan.ng) on spartan brain |
| None | HTML + JS | Forge primitives, written into the project |

The same token contract, the same pattern names, and the same state contract are generated for every one of them. The vanilla target has no component CLI, so Forge writes the primitive layer itself.

## What Forge generates

- A complete, bootable repository with Tailwind CSS v4 and TypeScript (JSDoc-checked JavaScript for the vanilla target)
- Local UI-kit configuration for the chosen framework, with its CLI pinned as a devDependency
- Semantic light/dark tokens for surfaces, text, borders, focus, status, typography, radius, density, shadows, and motion
- Contrast-aware foreground colors for the selected primary, secondary, and accent colors
- Any of 1,800+ Google fonts for headings and body, imported into the generated stylesheet
- A project-type composition for a dashboard, landing page, or web app, written in the framework's own idiom
- Automatic reusable patterns and their dependencies: ComboBox, DataTable, SuspenseContainer, EmptyState, ErrorState, and Sonner toasts — authored once per component family
- `setup.sh` — every setup step in one command, marked executable in the ZIP, so a person or an agent runs `bash setup.sh` instead of copying commands
- `.claude/skills/website-build/SKILL.md` — the website-build design skill, bound to the generated brand guide so an agent enforces the tokens instead of inventing new ones
- `docs/DESIGN_SYSTEM.md` — a standalone design-system document covering colors, measured contrast, the type scale, spacing, radius, elevation, motion, components, and rules. It downloads on its own as markdown and ships inside the ZIP
- `forge.config.json`, `AGENTS.md`, a continuation prompt, and a component catalog for AI builders
- A portable `.forge.json` configuration that can be imported, exported, versioned, and reused
- An optional uploaded logo with a consistent sanitized output path

The downloaded ZIP is the project. Extract it, run the three commands shown by Forge, and continue building.

## Run Forge locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploying

Set `NEXT_PUBLIC_SITE_URL` to the origin Forge is served from (see `.env.example`). Canonical tags, absolute Open Graph URLs, and `sitemap.xml` are only emitted once the origin is known, because a canonical pointing at the wrong host is worse than none. Vercel, Netlify, and Cloudflare Pages are detected automatically when it is unset.

`npm run build` writes the static export to `dist/`, including `robots.txt`, `sitemap.xml`, and `opengraph-image.png`. Everything there is a plain file, so any static host will serve it.

## Quality checks

```bash
npm run typecheck
npm run verify
npm run build
```

`verify` generates every framework against every project type and checks required files, syntax of each generated source file (including Vue and Svelte script blocks), configuration schema, architecture layers, pinned dependency ranges, cross-family package leaks, Angular template resolution, density output, contrast mapping, AI guidance, and asset paths. `build` produces the static Next.js export and synchronizes it to `dist/`, so there is no separate handwritten prototype.

## Architecture

```text
app/                        Forge application, registry routes, robots, sitemap, social card
app/forge.css               Neutral black-and-white Forge product skin
components/                 Builder, font picker, token panel, output
components/patterns/        The React patterns, rendered live and shipped to starters
components/ui/              shadcn primitives the patterns compose
lib/config.ts               Versioned config parsing, migration boundary, and presets
lib/design-tokens.ts        Semantic token, type scale, and contrast engine
lib/design-doc.ts           Standalone design-system markdown and the bound design skill
lib/design-skill.ts         docs/design-skill.md mirrored for the browser bundle
lib/google-fonts.ts         Search, stacks, and stylesheet URLs for the bundled index
lib/site.ts                 One source for metadata, sitemap, robots, and structured data
lib/frameworks.ts           Framework registry: layouts, UI kits, and setup commands
lib/generator.ts            Orchestration: config, prompt, docs, and file assembly
lib/patterns/               Pattern source per component family (react, vue, svelte, angular)
lib/scaffolds/              Bootable project files and pinned versions per framework
lib/recipes.ts              Project-type composition recipes
lib/registry.ts             shadcn registry items built from pattern source
scripts/sync-design-skill.mjs Mirrors docs/design-skill.md into lib/
scripts/sync-patterns.mjs    Mirrors components/patterns into lib/patterns/react.ts
scripts/sync-google-fonts.mjs Bundles the Google font family index
scripts/verify-generated.mjs Generated-project contract checks
scripts/sync-static-export.mjs Static export synchronization
docs/                       Design guidance, compatibility, registry, and update policy
```

Forge uses four layers in both documentation and generated code:

1. Foundations — semantic colors, type, spacing, density, radius, elevation, and motion.
2. UI primitives — local source from the framework's shadcn distribution.
3. Patterns — reusable product behavior and state handling.
4. Compositions — dashboard, marketing, and product-app route structures.

## Configuration and presets

Forge ships with Neutral Product, Editorial Studio, and Bold Commerce presets. Any manual design change marks the configuration custom. Config imports are validated and migrated through `lib/config.ts`; the uploaded logo data itself is deliberately excluded from localStorage and portable JSON.

## Component and AI contracts

The wizard shows a token panel from the colour step onward: swatches with measured contrast, the type scale at its real sizes, radius and elevation samples, and the real ComboBox, DataTable, buttons, and async states rendered from `components/patterns` — the same modules every React starter ships, with the generated tokens applied to them. Every value is read from `buildDesignTokens`, and the panel applies those values to itself, so it cannot drift from the starter. Forge does not mock up the components it generates. The design-system document, the ZIP, and the shadcn registry items are all built from one source, so what you read is what the project ships. Generated `AGENTS.md`, `docs/DESIGN_SYSTEM.md`, and `docs/COMPONENTS.md` tell an AI builder which tokens, layers, APIs, states, and accessibility rules it must preserve.

The full design guidance lives in [docs/design-skill.md](docs/design-skill.md) and ships inside every generated starter as a skill at `.claude/skills/website-build/SKILL.md`, with a preamble pointing it at that project's own tokens. Edit the markdown and run `npm run sync:skill`; `npm run verify` fails if the two drift. Registry usage is documented in [docs/REGISTRY.md](docs/REGISTRY.md).

## Distribution and maintenance

- License: MIT
- Compatibility: [docs/COMPATIBILITY.md](docs/COMPATIBILITY.md)
- Updating generated starters: [docs/UPDATING.md](docs/UPDATING.md)
- Changes: [CHANGELOG.md](CHANGELOG.md)
- Contributions: [CONTRIBUTING.md](CONTRIBUTING.md)

After deployment, the shared registry items are available at `/r/forge-system.json` (React), `/r/forge-system-vue.json`, and `/r/forge-system-svelte.json`. Generated starters remain owned source rather than a runtime dependency, so teams can customize them without access to the machine or folders used to build Forge.
