import type { FrameworkDefinition } from "../frameworks";
import type { ForgeState, PatternKey } from "../types";
import { buildFontImport } from "../design-tokens";
import { version } from "./versions";

export type ScaffoldContext = {
  state: ForgeState;
  framework: FrameworkDefinition;
  /** Display name, already trimmed and defaulted. */
  name: string;
  slug: string;
  /** Token contract for this configuration, including both color schemes. */
  themeCss: string;
  patternKeys: PatternKey[];
  hasToast: boolean;
  /** Runtime packages the recipe asks for, already mapped onto this family. */
  packages: string[];
  /** Root element class when the theme is pinned to light, dark, or system. */
  themeClass: string;
  logoPath: string | null;
};

export type ScaffoldBuilder = (context: ScaffoldContext) => Record<string, string>;

/** `components/patterns` → `components`. */
export function componentsDir(patternsDir: string) {
  return patternsDir.replace(/\/patterns$/, "");
}

/** Resolves a dependency list into a sorted, pinned package.json block. */
export function dependencies(names: string[], overrides: Record<string, string> = {}) {
  const block: Record<string, string> = {};
  for (const name of Array.from(new Set(names)).sort()) block[name] = overrides[name] ?? version(name);
  return block;
}

export function json(value: unknown) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

export function packageJson(options: { slug: string; scripts: Record<string, string>; dependencies: Record<string, string>; devDependencies: Record<string, string>; extra?: Record<string, unknown> }) {
  return json({
    name: options.slug,
    version: "0.1.0",
    private: true,
    ...options.extra,
    scripts: options.scripts,
    dependencies: options.dependencies,
    devDependencies: options.devDependencies,
  });
}

/**
 * The stylesheet every framework receives. Only the shadcn/ui React
 * distribution ships a Tailwind layer of its own; the other kits style their
 * primitives from the same semantic variables.
 */
export function globalCss(context: ScaffoldContext, options: { shadcnLayer?: boolean } = {}) {
  const shadcnLayer = options.shadcnLayer ? `@import "shadcn/tailwind.css";\n` : "";
  return `${buildFontImport(context.state)}@import "tailwindcss";\n@import "tw-animate-css";\n${shadcnLayer}\n@custom-variant dark (&:is(.dark *));\n\n${context.themeCss}\n@layer base { * { @apply border-border outline-ring/50; } body { @apply bg-background text-foreground; } }\n`;
}

export const CN_UTILS = `import { clsx, type ClassValue } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }\n`;

export function gitignore(extra: string[] = []) {
  return `${["node_modules", "dist", ".env", ".env.*", "!.env.example", ".DS_Store", "*.log", ...extra].join("\n")}\n`;
}

export function eyebrow(context: ScaffoldContext) {
  return context.state.projectType === "dashboard" ? "Operations / Overview" : "Product / Workspace";
}

export function escapeText(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function escapeQuoted(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}
