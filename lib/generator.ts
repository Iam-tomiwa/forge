import type { ForgeState } from "./types";
import { PROJECT_LABELS, TYPE_LABELS } from "./types";

export function slugify(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "forge-project";
}

export function buildConfig(state: ForgeState) {
  return {
    forgeVersion: "0.1",
    project: {
      name: state.projectName.trim() || "Untitled project",
      slug: slugify(state.projectName),
      type: state.projectType,
    },
    stack: {
      framework: "Next.js App Router",
      language: "TypeScript",
      ui: "shadcn/ui",
      styling: "Tailwind CSS with CSS variables",
      packageManager: state.packageManager,
    },
    designSystem: {
      colors: {
        primary: state.primary,
        secondary: state.secondary,
        accent: state.accent,
      },
      typography: TYPE_LABELS[state.typeVoice],
      radius: state.radius,
      density: state.density,
      logo: state.logoFileName ? { fileName: state.logoFileName, outputPath: `public/brand/${state.logoFileName}` } : null,
    },
  };
}

export function buildPrompt(state: ForgeState) {
  const config = buildConfig(state);
  return `You are continuing a frontend project called ${config.project.name}.

Start from these decisions and treat them as constraints, not suggestions:

PROJECT
- Type: ${PROJECT_LABELS[state.projectType]}
- Slug: ${config.project.slug}
- Density: ${state.density}

STACK
- Next.js App Router with TypeScript
- shadcn/ui components composed from local source
- Tailwind CSS with CSS variables for theme tokens
- Package manager: ${state.packageManager}

DESIGN SYSTEM
- Primary: ${state.primary}
- Secondary: ${state.secondary}
- Accent: ${state.accent}
- Type voice: ${TYPE_LABELS[state.typeVoice]}
- Corner language: ${state.radius}
- Logo: ${state.logoFileName ? `use the supplied ${state.logoFileName} from public/brand/` : "no logo asset supplied yet"}

IMPLEMENTATION RULES
1. Preserve the named colors as the source of truth. Map them into semantic CSS variables before building components.
2. Use shadcn/ui primitives where a direct semantic match exists, then compose product-specific components on top.
3. Keep the code organized around reusable primitives, feature components, and route-level compositions.
4. Do not introduce gradients, placeholder testimonials, invented metrics, or unrelated dependencies.
5. Keep all important states accessible by keyboard and visible without animation.
6. Before adding new UI, check whether it can be expressed through the existing tokens and component patterns.

FIRST TASK
Inspect the starter structure, confirm the token map, and build the first meaningful ${PROJECT_LABELS[state.projectType]} surface. Explain any decision that must change before writing code.`;
}

export function buildCommands(state: ForgeState) {
  const runner = state.packageManager;
  const create = runner === "npm" ? "npx" : runner === "yarn" ? "yarn dlx" : "pnpm dlx";
  const install = runner === "npm" ? "npm install" : runner === "yarn" ? "yarn" : "pnpm install";
  return `${create} create-next-app@latest ${slugify(state.projectName)} --typescript --tailwind --eslint --app --import-alias "@/*"\ncd ${slugify(state.projectName)}\n${create} shadcn@latest init -d --base radix -f\n${install}`;
}

export function buildThemeCss(state: ForgeState) {
  return `:root {\n  --brand-primary: ${state.primary};\n  --brand-secondary: ${state.secondary};\n  --brand-accent: ${state.accent};\n  --radius: ${state.radius === "sharp" ? "0.35rem" : state.radius === "round" ? "1rem" : "0.625rem"};\n  --font-brand: ${state.typeVoice === "editorial" ? "Newsreader, Georgia, serif" : state.typeVoice === "system" ? "ui-sans-serif, system-ui, sans-serif" : "Inter, ui-sans-serif, system-ui, sans-serif"};\n}`;
}

export function buildPack(state: ForgeState) {
  return `# Forge starter pack — ${state.projectName.trim() || "Untitled project"}\n\n## Configuration\n\n\`\`\`json\n${JSON.stringify(buildConfig(state), null, 2)}\n\`\`\`\n\n## Setup commands\n\n\`\`\`sh\n${buildCommands(state)}\n\`\`\`\n\n## Theme tokens\n\n\`\`\`css\n${buildThemeCss(state)}\n\`\`\`\n\n## Continue prompt\n\n${buildPrompt(state)}\n`;
}
