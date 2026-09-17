export type ProjectType = "dashboard" | "landing" | "web-app";
export type TypeVoice = "instrument" | "editorial" | "system";
export type Radius = "sharp" | "soft" | "round";
export type Density = "airy" | "balanced" | "dense";
export type PackageManager = "pnpm" | "npm" | "yarn";

export type ForgeState = {
  projectName: string;
  projectType: ProjectType;
  packageManager: PackageManager;
  primary: string;
  secondary: string;
  accent: string;
  typeVoice: TypeVoice;
  radius: Radius;
  density: Density;
  logoFileName: string | null;
  logoDataUrl: string | null;
};

export const DEFAULT_STATE: ForgeState = {
  projectName: "Northstar",
  projectType: "dashboard",
  packageManager: "pnpm",
  primary: "#D7F75B",
  secondary: "#8CA6FF",
  accent: "#F5A65B",
  typeVoice: "instrument",
  radius: "soft",
  density: "balanced",
  logoFileName: null,
  logoDataUrl: null,
};

export const PROJECT_LABELS: Record<ProjectType, string> = {
  dashboard: "dashboard",
  landing: "landing page",
  "web-app": "web app",
};

export const TYPE_LABELS: Record<TypeVoice, string> = {
  instrument: "Instrument Sans / Utility",
  editorial: "Newsreader / Editorial",
  system: "System Sans / Familiar",
};
