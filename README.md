# Forge — frontend bootstrapper

Forge is a local-first project brief builder for people who want an AI model to inherit a brand system and frontend architecture before it starts writing product UI.

## What is included

- Next.js App Router with TypeScript
- shadcn/ui initialized with the Radix base and local component ownership
- Tailwind CSS v4 with CSS variable theming
- Project type selection for dashboard, landing page, and web app
- Live brand preview for project name, colors, type voice, corner language, density, and logo
- Local draft persistence with no account or backend
- Generated prompt, config, setup commands, and deterministic starter-pack download

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Structure

```text
app/                    App Router entry and global styles
components/builder-shell.tsx
                        Client-side form state and local-first interactions
components/live-preview.tsx
                        Product preview driven by the Forge state
components/output-dialog.tsx
                        Generated prompt/config/commands surface
components/sidebar.tsx  Builder navigation
components/ui/button.tsx
                        shadcn/ui-owned Button primitive
lib/types.ts            Shared configuration types and defaults
lib/generator.ts        Prompt, config, command, and theme generation
```

## Design thesis

- Product truth: Forge turns a short project brief into a frontend foundation and AI handoff.
- Audience tension: AI can build quickly while still guessing the brand and architecture.
- Core promise: Start from a system instead of a blank prompt.
- Trust mechanism: Every input is reflected in a live product preview and the generated output.
- Creative concept: calibration — the interface moves from broad project intent to precise tokens, then packages the signal for the next builder.

## Token reference

The visual system uses an ink-blue working surface, paper-like text, chartreuse primary action, periwinkle secondary signal, and orange accent signal. Spacing follows a 4px base. Motion is short and state-led, with reduced-motion fallbacks. The full authored token layer lives in `dist/styles.css` and is imported by `app/globals.css` on top of the shadcn token layer.

## Known MVP gaps

- The downloadable pack is a Markdown document containing configuration, setup commands, theme tokens, and the continuation prompt; it is not yet a binary ZIP with generated source files.
- Uploaded logos are previewed and represented in the generated configuration, but the binary asset is not yet embedded into the download.
- GitHub repository creation, authentication, database, and AI API calls are intentionally out of scope for the local-first MVP.

## Browser targets

Current targets are modern Chrome, Safari, and Firefox on desktop and mobile. The experience is designed around wide desktop, short laptop, tablet, and mobile breakpoints with no scroll-locked product stages.

## Deployment

The app is configured for a static Next.js export. `npm run build` writes the deployable site to `out/`.
