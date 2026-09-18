import type { FrameworkFamily } from "../types";

/**
 * Pinned ranges for every package Forge can write into a generated
 * package.json. Verified against the npm registry when this release was cut;
 * see docs/COMPATIBILITY.md before changing a major version.
 */
export const VERSIONS: Record<string, string> = {
  // Shared foundations
  "class-variance-authority": "^0.7.1",
  clsx: "^2.1.1",
  "tailwind-merge": "^3.3.0",
  tailwindcss: "^4.3.3",
  "tw-animate-css": "^1.4.0",
  "@tailwindcss/postcss": "^4.3.3",
  "@tailwindcss/vite": "^4.3.3",
  typescript: "^5.9.0",
  vite: "^8.3.0",
  "@types/node": "^22",
  zod: "^3.25.0",
  motion: "^12.0.0",

  // React family
  next: "16.3.2",
  react: "19.2.3",
  "react-dom": "19.2.3",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "@vitejs/plugin-react": "^6.1.1",
  shadcn: "^4.21.0",
  "radix-ui": "^1.6.7",
  cmdk: "^1.1.1",
  "lucide-react": "^1.47.0",
  sonner: "^2.0.0",
  recharts: "^3.0.0",
  "react-hook-form": "^7.60.0",
  "@tanstack/react-query": "^5.90.0",
  "react-router": "^8.4.0",
  "@react-router/dev": "^8.4.0",
  "@react-router/node": "^8.4.0",
  "@react-router/serve": "^8.4.0",
  isbot: "^5.2.2",
  "vite-tsconfig-paths": "^6.1.1",
  "@tanstack/react-start": "^1.168.56",
  "@tanstack/react-router": "^1.170.38",
  astro: "^7.3.3",
  "@astrojs/react": "^6.0.6",

  // Vue family
  vue: "^3.5.43",
  "vue-tsc": "^3.3.11",
  // shadcn-vue primitives such as Sonner read the color mode through VueUse.
  "@vueuse/core": "^15.0.0",
  "@vitejs/plugin-vue": "^6.0.9",
  "@vue/tsconfig": "^0.9.1",
  "shadcn-vue": "^2.8.2",
  "shadcn-nuxt": "^2.8.2",
  "reka-ui": "^2.10.4",
  nuxt: "^4.5.2",
  "@lucide/vue": "^1.47.0",
  "vue-sonner": "^2.0.9",
  "vue-chartjs": "^5.3.4",
  "vee-validate": "^4.15.1",
  "@tanstack/vue-query": "^5.103.1",

  // Svelte family
  svelte: "^5.57.0",
  "svelte-check": "^4.7.6",
  "@sveltejs/kit": "^2.70.3",
  "@sveltejs/adapter-auto": "^7.0.1",
  "@sveltejs/vite-plugin-svelte": "^7.3.0",
  "shadcn-svelte": "^1.7.0",
  "bits-ui": "^2.19.2",
  "tailwind-variants": "^3.3.1",
  "@lucide/svelte": "^1.47.0",
  "svelte-sonner": "^1.2.1",
  layerchart: "^2.5.0",
  "sveltekit-superforms": "^2.30.2",
  "@tanstack/svelte-query": "^6.2.1",

  // Angular family
  "@angular/animations": "^22.1.7",
  "@angular/cdk": "^22.1.7",
  "@angular/common": "^22.1.7",
  "@angular/compiler": "^22.1.7",
  "@angular/core": "^22.1.7",
  "@angular/forms": "^22.1.7",
  "@angular/platform-browser": "^22.1.7",
  "@angular/router": "^22.1.7",
  "@angular/build": "^22.1.8",
  "@angular/cli": "^22.1.8",
  "@angular/compiler-cli": "^22.1.7",
  "@spartan-ng/brain": "^1.4.1",
  "@spartan-ng/cli": "^1.4.1",
  rxjs: "^7.8.2",
  tslib: "^2.8.1",
  "@tanstack/angular-query-experimental": "^5.103.1",
  "ngx-sonner": "^3.1.0",
  "@ng-icons/core": "^36.0.0",
  "@ng-icons/lucide": "^36.0.0",

  // Vanilla
  lucide: "^1.47.0",
  "ng2-charts": "^10.0.0",
  "chart.js": "^4.5.1",

  // Angular ships its own TypeScript range.
  "typescript@angular": "~6.0.3",
};

export function version(name: string) {
  return VERSIONS[name] ?? "latest";
}

/**
 * Recipes name packages from the React ecosystem. Each family resolves those
 * capabilities to its own equivalents, so a Vue starter never installs
 * react-hook-form to get schema-driven forms.
 */
const PACKAGE_EQUIVALENTS: Record<FrameworkFamily, Record<string, string[]>> = {
  react: {
    "lucide-react": ["lucide-react"],
    sonner: ["sonner"],
    recharts: ["recharts"],
    zod: ["zod"],
    "react-hook-form": ["react-hook-form"],
    "@tanstack/react-query": ["@tanstack/react-query"],
    motion: ["motion"],
  },
  vue: {
    "lucide-react": ["@lucide/vue"],
    sonner: ["vue-sonner"],
    recharts: ["chart.js", "vue-chartjs"],
    zod: ["zod"],
    "react-hook-form": ["vee-validate"],
    "@tanstack/react-query": ["@tanstack/vue-query"],
    motion: ["motion"],
  },
  svelte: {
    "lucide-react": ["@lucide/svelte"],
    sonner: ["svelte-sonner"],
    recharts: ["layerchart"],
    zod: ["zod"],
    "react-hook-form": ["sveltekit-superforms"],
    "@tanstack/react-query": ["@tanstack/svelte-query"],
    motion: ["motion"],
  },
  vanilla: {
    "lucide-react": ["lucide"],
    // The vanilla starter ships its own toast manager rather than a dependency.
    sonner: [],
    recharts: ["chart.js"],
    zod: ["zod"],
    "react-hook-form": [],
    "@tanstack/react-query": [],
    motion: ["motion"],
  },
  angular: {
    "lucide-react": ["@ng-icons/core", "@ng-icons/lucide"],
    sonner: ["ngx-sonner"],
    recharts: ["chart.js", "ng2-charts"],
    zod: ["zod"],
    // Angular ships reactive forms in @angular/forms; no extra package is needed.
    "react-hook-form": [],
    "@tanstack/react-query": ["@tanstack/angular-query-experimental"],
    motion: [],
  },
};

export function mapPackages(family: FrameworkFamily, packages: string[]) {
  const mapping = PACKAGE_EQUIVALENTS[family];
  return Array.from(new Set(packages.flatMap((name) => mapping[name] ?? [name])));
}

/** The toast package each family installs when the toast pattern is included; vanilla ships its own. */
export const TOAST_PACKAGES: Record<FrameworkFamily, string | null> = { react: "sonner", vue: "vue-sonner", svelte: "svelte-sonner", angular: "ngx-sonner", vanilla: null };
