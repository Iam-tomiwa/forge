export type ProjectType = "dashboard" | "landing" | "web-app";
export type TypeVoice = "instrument" | "editorial" | "system";
export type Radius = "sharp" | "soft" | "round";
export type Density = "airy" | "balanced" | "dense";
export type PackageManager = "pnpm" | "npm" | "yarn";
export type ThemeMode = "light" | "dark" | "system";
export type ShadowStyle = "flat" | "soft" | "layered";
export type MotionStyle = "reduced" | "subtle" | "expressive";
export type PresetKey = "neutral-product" | "editorial-studio" | "bold-commerce" | "custom";
export type PatternKey = "combo-box" | "data-table" | "empty-state" | "error-state" | "suspense-container" | "toast-provider";

/** Every framework Forge can generate. Each one is served by a shadcn-compatible component distribution. */
export type FrameworkKey =
  | "next"
  | "react-vite"
  | "react-router"
  | "tanstack-start"
  | "astro"
  | "vue-vite"
  | "nuxt"
  | "sveltekit"
  | "angular"
  | "vanilla";

/** The component model a framework belongs to. Patterns are authored once per family, not once per framework. */
export type FrameworkFamily = "react" | "vue" | "svelte" | "angular" | "vanilla";

export type ForgeState = {
  projectName: string;
  projectType: ProjectType;
  framework: FrameworkKey;
  packageManager: PackageManager;
  primary: string;
  secondary: string;
  accent: string;
  typeVoice: TypeVoice;
  /** Google font families, when the type voice preset is overridden. */
  headingFont: string | null;
  bodyFont: string | null;
  radius: Radius;
  density: Density;
  themeMode: ThemeMode;
  shadowStyle: ShadowStyle;
  motionStyle: MotionStyle;
  presetKey: PresetKey;
  logoFileName: string | null;
  logoDataUrl: string | null;
};

export const DEFAULT_STATE: ForgeState = {
  projectName: "Northstar",
  projectType: "dashboard",
  framework: "next",
  packageManager: "pnpm",
  primary: "#D7F75B",
  secondary: "#8CA6FF",
  accent: "#F5A65B",
  typeVoice: "instrument",
  headingFont: null,
  bodyFont: null,
  radius: "soft",
  density: "balanced",
  themeMode: "system",
  shadowStyle: "soft",
  motionStyle: "subtle",
  presetKey: "neutral-product",
  logoFileName: null,
  logoDataUrl: null,
};

export const PROJECT_LABELS: Record<ProjectType, string> = {
  dashboard: "dashboard",
  landing: "landing page",
  "web-app": "web app",
};

export const TYPE_LABELS: Record<TypeVoice, string> = {
  instrument: "Geist / Utility",
  editorial: "Newsreader / Editorial",
  system: "System Sans / Familiar",
};
