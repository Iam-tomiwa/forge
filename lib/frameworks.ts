import type { FrameworkFamily, FrameworkKey, PackageManager } from "./types";

/**
 * Every framework Forge supports ships shadcn components through one of four
 * distributions. The distribution — not the framework — decides how components
 * are added and which primitive library sits underneath them.
 */
export type UiKit = {
  name: string;
  /** null when the family has no component CLI and Forge writes the primitives itself. */
  cliPackage: string | null;
  primitives: string;
  docs: string;
  /** Registry item Forge publishes for this family, or null when the kit has no registry protocol. */
  registryFile: string | null;
};

export const FAMILY_UI_KITS: Record<FrameworkFamily, UiKit> = {
  react: { name: "shadcn/ui", cliPackage: "shadcn", primitives: "Radix primitives", docs: "https://ui.shadcn.com", registryFile: "forge-system.json" },
  vue: { name: "shadcn-vue", cliPackage: "shadcn-vue", primitives: "Reka UI primitives", docs: "https://www.shadcn-vue.com", registryFile: "forge-system-vue.json" },
  svelte: { name: "shadcn-svelte", cliPackage: "shadcn-svelte", primitives: "Bits UI primitives", docs: "https://shadcn-svelte.com", registryFile: "forge-system-svelte.json" },
  angular: { name: "spartan/ui", cliPackage: "@spartan-ng/cli", primitives: "spartan brain primitives", docs: "https://www.spartan.ng", registryFile: null },
  vanilla: { name: "Forge primitives", cliPackage: null, primitives: "hand-written elements on the token contract", docs: "https://tailwindcss.com/docs", registryFile: null },
};

export const FAMILY_LABELS: Record<FrameworkFamily, string> = { react: "React", vue: "Vue", svelte: "Svelte", angular: "Angular", vanilla: "No framework" };

export type FrameworkLayout = {
  /** Stylesheet that receives the generated token contract. */
  styles: string;
  /** Directory the Forge pattern layer is written to. */
  patternsDir: string;
  /** Module specifier the example composition imports patterns from. */
  patternsImport: string;
  /** Where the UI kit writes its primitives. */
  uiDir: string;
  /** Module specifier the pattern layer imports kit primitives from. */
  uiImport: string;
  utils: string;
  /** Module specifier for the generated cn() helper. */
  utilsImport: string;
  publicDir: string;
  /** The route or composition file a reader should open first. */
  entry: string;
};

export type FrameworkDefinition = {
  key: FrameworkKey;
  label: string;
  family: FrameworkFamily;
  /** Short help text under the framework select. */
  tagline: string;
  /** How the stack is described in generated config, docs, and prompts. */
  stackLabel: string;
  language: string;
  routing: string;
  layout: FrameworkLayout;
  /** package.json script that starts the dev server. */
  devScript: string;
  devUrl: string;
  /** Framework-specific rules appended to the generated AI instructions. */
  guardrails: string[];
};

export const FRAMEWORKS: Record<FrameworkKey, FrameworkDefinition> = {
  next: {
    key: "next",
    label: "Next.js",
    family: "react",
    tagline: "App Router, React Server Components, and the shadcn CLI default.",
    stackLabel: "Next.js 16 App Router",
    language: "TypeScript",
    routing: "File routes in app/ with server components by default",
    layout: { styles: "app/globals.css", patternsDir: "components/patterns", patternsImport: "@/components/patterns", uiImport: "@/components/ui", uiDir: "components/ui", utils: "lib/utils.ts", utilsImport: "@/lib/utils", publicDir: "public", entry: "app/page.tsx" },
    devScript: "dev",
    devUrl: "http://localhost:3000",
    guardrails: [
      "Keep server components as the default and add \"use client\" only where interaction or browser APIs require it.",
      "Colocate route-only UI in app/; anything reused belongs in components/.",
    ],
  },
  "react-vite": {
    key: "react-vite",
    label: "React + Vite",
    family: "react",
    tagline: "A single-page React app with no server runtime.",
    stackLabel: "React 19 with Vite",
    language: "TypeScript",
    routing: "Single entry composition; add a router when routes appear",
    layout: { styles: "src/index.css", patternsDir: "src/components/patterns", patternsImport: "@/components/patterns", uiImport: "@/components/ui", uiDir: "src/components/ui", utils: "src/lib/utils.ts", utilsImport: "@/lib/utils", publicDir: "public", entry: "src/App.tsx" },
    devScript: "dev",
    devUrl: "http://localhost:5173",
    guardrails: [
      "There is no server runtime; fetch data from the client and model loading and error states explicitly.",
      "Introduce a router before the first composition grows a second screen.",
    ],
  },
  "react-router": {
    key: "react-router",
    label: "React Router",
    family: "react",
    tagline: "React Router v8 framework mode with server rendering and loaders.",
    stackLabel: "React Router 8 framework mode",
    language: "TypeScript",
    routing: "Route modules declared in app/routes.ts with loaders and actions",
    layout: { styles: "app/app.css", patternsDir: "app/components/patterns", patternsImport: "~/components/patterns", uiImport: "~/components/ui", uiDir: "app/components/ui", utils: "app/lib/utils.ts", utilsImport: "~/lib/utils", publicDir: "public", entry: "app/routes/home.tsx" },
    devScript: "dev",
    devUrl: "http://localhost:5173",
    guardrails: [
      "Load data in route loaders and mutate through actions rather than fetching inside components.",
      "Register every new route in app/routes.ts; do not rely on implicit file discovery.",
    ],
  },
  "tanstack-start": {
    key: "tanstack-start",
    label: "TanStack Start",
    family: "react",
    tagline: "Type-safe file routes with server functions on Vite.",
    stackLabel: "TanStack Start with TanStack Router",
    language: "TypeScript",
    routing: "File routes in src/routes with a generated, type-safe route tree",
    layout: { styles: "src/styles/app.css", patternsDir: "src/components/patterns", patternsImport: "@/components/patterns", uiImport: "@/components/ui", uiDir: "src/components/ui", utils: "src/lib/utils.ts", utilsImport: "@/lib/utils", publicDir: "public", entry: "src/routes/index.tsx" },
    devScript: "dev",
    devUrl: "http://localhost:3000",
    guardrails: [
      "Let the router generate src/routeTree.gen.ts; never edit it by hand.",
      "Use route loaders and server functions for data instead of ad hoc effects.",
    ],
  },
  astro: {
    key: "astro",
    label: "Astro",
    family: "react",
    tagline: "Static pages with React islands for the interactive parts.",
    stackLabel: "Astro with React islands",
    language: "TypeScript",
    routing: "File routes in src/pages, shipped as HTML by default",
    layout: { styles: "src/styles/global.css", patternsDir: "src/components/patterns", patternsImport: "@/components/patterns", uiImport: "@/components/ui", uiDir: "src/components/ui", utils: "src/lib/utils.ts", utilsImport: "@/lib/utils", publicDir: "public", entry: "src/pages/index.astro" },
    devScript: "dev",
    devUrl: "http://localhost:4321",
    guardrails: [
      "Keep pages static and hydrate islands with client:load, client:idle, or client:visible only where interaction is required.",
      "Interactive patterns must live in .tsx islands; .astro files stay as composition and content.",
    ],
  },
  "vue-vite": {
    key: "vue-vite",
    label: "Vue + Vite",
    family: "vue",
    tagline: "Vue 3 single-file components with shadcn-vue and Reka UI.",
    stackLabel: "Vue 3 with Vite",
    language: "TypeScript",
    routing: "Single entry composition; add Vue Router when routes appear",
    layout: { styles: "src/assets/index.css", patternsDir: "src/components/patterns", patternsImport: "@/components/patterns", uiImport: "@/components/ui", uiDir: "src/components/ui", utils: "src/lib/utils.ts", utilsImport: "@/lib/utils", publicDir: "public", entry: "src/App.vue" },
    devScript: "dev",
    devUrl: "http://localhost:5173",
    guardrails: [
      "Use <script setup lang=\"ts\"> with typed props and defineModel for two-way bindings.",
      "Keep styling in Tailwind utility classes over the token contract; avoid scoped style blocks that re-declare colors.",
    ],
  },
  nuxt: {
    key: "nuxt",
    label: "Nuxt",
    family: "vue",
    tagline: "Server-rendered Vue with the shadcn-nuxt module.",
    stackLabel: "Nuxt 4 with the shadcn-nuxt module",
    language: "TypeScript",
    routing: "File routes in app/pages with server rendering by default",
    layout: { styles: "app/assets/css/main.css", patternsDir: "app/components/patterns", patternsImport: "@/components/patterns", uiImport: "@/components/ui", uiDir: "app/components/ui", utils: "app/lib/utils.ts", utilsImport: "@/lib/utils", publicDir: "public", entry: "app/pages/index.vue" },
    devScript: "dev",
    devUrl: "http://localhost:3000",
    guardrails: [
      "Fetch data with useAsyncData or useFetch so it is rendered on the server, not in onMounted.",
      "Import patterns explicitly even though Nuxt can auto-import them; the import is the documentation.",
    ],
  },
  sveltekit: {
    key: "sveltekit",
    label: "SvelteKit",
    family: "svelte",
    tagline: "Svelte 5 runes with shadcn-svelte and Bits UI.",
    stackLabel: "SvelteKit with Svelte 5 runes",
    language: "TypeScript",
    routing: "File routes in src/routes with +page and +layout modules",
    layout: { styles: "src/app.css", patternsDir: "src/lib/components/patterns", patternsImport: "$lib/components/patterns", uiImport: "$lib/components/ui", uiDir: "src/lib/components/ui", utils: "src/lib/utils.ts", utilsImport: "$lib/utils.js", publicDir: "static", entry: "src/routes/+page.svelte" },
    devScript: "dev",
    devUrl: "http://localhost:5173",
    guardrails: [
      "Use runes ($state, $derived, $props) rather than legacy stores or reactive labels.",
      "Load route data in +page.ts or +page.server.ts instead of fetching inside components.",
    ],
  },
  angular: {
    key: "angular",
    label: "Angular",
    family: "angular",
    tagline: "Standalone components and signals with spartan/ui.",
    stackLabel: "Angular 22 standalone components with signals",
    language: "TypeScript",
    routing: "Standalone components wired through the router in src/app/app.routes.ts",
    layout: { styles: "src/styles.css", patternsDir: "src/app/patterns", patternsImport: "@/patterns", uiImport: "@/components/ui", uiDir: "src/app/components/ui", utils: "src/app/lib/utils.ts", utilsImport: "@/lib/utils", publicDir: "public", entry: "src/app/app.ts" },
    devScript: "start",
    devUrl: "http://localhost:4200",
    guardrails: [
      "Use standalone components, signal inputs, and OnPush change detection; the app runs zoneless.",
      "Keep templates declarative with the built-in @if and @for blocks rather than *ngIf and *ngFor.",
    ],
  },
  vanilla: {
    key: "vanilla",
    label: "HTML + JS",
    family: "vanilla",
    tagline: "No framework: ES modules, plain DOM, and the same token contract.",
    stackLabel: "Vanilla HTML and JavaScript on Vite",
    language: "JavaScript with JSDoc types",
    routing: "Static .html entries at the project root",
    layout: { styles: "src/styles.css", patternsDir: "src/patterns", patternsImport: "./patterns/index.js", uiImport: "../ui/primitives.js", uiDir: "src/ui", utils: "src/lib/utils.js", utilsImport: "../lib/utils.js", publicDir: "public", entry: "index.html" },
    devScript: "dev",
    devUrl: "http://localhost:5173",
    guardrails: [
      "Keep markup in index.html and behavior in ES modules; do not build a rendering framework by hand.",
      "Patterns are factory functions that return DOM nodes — mount them into the elements the HTML already declares.",
    ],
  },
};

export const FRAMEWORK_GROUPS: Array<{ family: FrameworkFamily; frameworks: FrameworkKey[] }> = [
  { family: "react", frameworks: ["next", "react-vite", "react-router", "tanstack-start", "astro"] },
  { family: "vue", frameworks: ["vue-vite", "nuxt"] },
  { family: "svelte", frameworks: ["sveltekit"] },
  { family: "angular", frameworks: ["angular"] },
  { family: "vanilla", frameworks: ["vanilla"] },
];

export const FRAMEWORK_KEYS = Object.keys(FRAMEWORKS) as FrameworkKey[];

export function getFramework(key: FrameworkKey) {
  return FRAMEWORKS[key];
}

export function getUiKit(key: FrameworkKey) {
  return FAMILY_UI_KITS[FRAMEWORKS[key].family];
}

/** `pnpm install`, `npm install`, `yarn`. */
export function installCommand(packageManager: PackageManager) {
  return packageManager === "yarn" ? "yarn" : `${packageManager} install`;
}

/** Runs a binary that the generated project already has as a dependency. */
export function runCommand(packageManager: PackageManager, script: string) {
  return packageManager === "npm" ? `npm run ${script}` : `${packageManager} ${script}`;
}

/**
 * Every generated project pins its UI-kit CLI as a devDependency, so setup runs
 * the local binary. Fetching the CLI with `@latest` would both drift from that
 * pin and, for shadcn-svelte, fail to resolve svelte from outside the project.
 */
function execPrefix(packageManager: PackageManager, cliPackage: string) {
  if (packageManager === "npm") return `npx ${cliPackage}`;
  if (packageManager === "yarn") return `yarn run ${cliPackage}`;
  return `pnpm exec ${cliPackage}`;
}

/**
 * The command that copies UI-kit components into the generated project. Each
 * distribution has its own CLI; spartan generates one Angular component at a
 * time through an Angular schematic, so it gets a loop instead of a list.
 */
export function addComponentsCommand(framework: FrameworkKey, packageManager: PackageManager, components: string[], projectSlug = "app") {
  const kit = getUiKit(framework);
  if (!kit.cliPackage) return null;
  if (FRAMEWORKS[framework].family === "angular") {
    const ng = packageManager === "npm" ? "npx ng" : packageManager === "yarn" ? "yarn run ng" : "pnpm exec ng";
    // --project, --theme, and --prefix keep the schematic non-interactive, and the
    // prefix scopes spartan's own theme so the Forge token contract stays global.
    return [
      `${ng} g @spartan-ng/cli:init --project ${projectSlug} --theme neutral --prefix theme-spartan`,
      `for component in ${components.join(" ")}; do ${ng} g @spartan-ng/cli:ui "$component"; done`,
    ].join("\n");
  }
  return `${execPrefix(packageManager, kit.cliPackage)} add ${components.join(" ")} -y`;
}

export function buildSetupCommands(framework: FrameworkKey, packageManager: PackageManager, components: string[], projectSlug?: string) {
  const definition = FRAMEWORKS[framework];
  const addComponents = addComponentsCommand(framework, packageManager, components, projectSlug);
  return [installCommand(packageManager), addComponents, runCommand(packageManager, definition.devScript)].filter(Boolean).join("\n");
}
