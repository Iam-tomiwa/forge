import type { PatternKey, ProjectType } from "./types";

export type ProjectRecipe = {
  name: string;
  sources: string[];
  composition: string;
  components: string[];
  packages: string[];
  guardrails: string[];
};

/**
 * These recipes are embedded in Forge. They summarize the repeatable patterns
 * used to design its starter kit, so generated output never needs access to the
 * source projects or to the machine that was used to create Forge.
 */
export const PROJECT_RECIPES: Record<ProjectType, ProjectRecipe> = {
  dashboard: {
    name: "Operations dashboard",
    sources: ["Forge Dashboard Kit", "Forge Data View Kit"],
    composition: "App shell → page header → summary cards → filters → data table → detail or CRUD dialog",
    components: [
      "admin shell and responsive sidebar",
      "page header and breadcrumbs",
      "metric/stat cards",
      "data table with pagination",
      "search, select, combo-box, and date-range filters",
      "empty, loading, error, and permission states",
      "charts and progress indicators",
      "bulk upload and confirmation dialogs",
    ],
    packages: ["lucide-react", "sonner", "recharts", "zod", "react-hook-form", "@tanstack/react-query"],
    guardrails: [
      "Keep tables, filters, and actions composable rather than tying them to one domain.",
      "Design loading, empty, error, and permission states alongside the happy path.",
      "Prefer dense, scannable layouts with a clear page hierarchy.",
    ],
  },
  landing: {
    name: "Narrative marketing site",
    sources: ["Forge Marketing Sections", "Forge Motion Primitives"],
    composition: "Site header → hero → proof or services → feature/story sections → gallery or work → FAQ/CTA → footer",
    components: [
      "site header and mobile navigation",
      "hero with a focused primary action",
      "section label and reusable content block",
      "services, feature, or project cards",
      "gallery, carousel, and image lightbox",
      "FAQ and testimonial sections",
      "contact, consultation, or lead form",
      "footer and social links",
      "optional motion primitives with reduced-motion fallbacks",
    ],
    packages: ["lucide-react", "motion", "zod", "react-hook-form"],
    guardrails: [
      "Use real content and real proof; never invent testimonials, logos, or metrics.",
      "Keep animation subordinate to the story and provide a reduced-motion path.",
      "Treat sections as independently reorderable compositions, not one giant page component.",
    ],
  },
  "web-app": {
    name: "Product application",
    sources: ["Forge App Shell Kit", "Forge Product Flow Kit"],
    composition: "Auth/onboarding → app shell → route frame → feature widget → data/query states → modal or secondary flow",
    components: [
      "authentication and onboarding forms",
      "top or bottom navigation with responsive app shell",
      "route-level page frame and loading boundary",
      "feature widgets and cards",
      "search, filters, and content grids",
      "data table and query-state wrappers",
      "share, payment, and confirmation modals",
      "empty, error, and skeleton states",
      "forms validated with schema-first rules",
    ],
    packages: ["lucide-react", "sonner", "zod", "react-hook-form", "@tanstack/react-query", "motion"],
    guardrails: [
      "Keep route composition separate from reusable feature widgets.",
      "Model authentication, query, mutation, and offline/loading states explicitly.",
      "Use modal and sheet patterns only for secondary flows; preserve a clear primary route.",
    ],
  },
};

export function getProjectRecipe(type: ProjectType) {
  return PROJECT_RECIPES[type];
}

/**
 * The UI-kit components a project type needs. Component names are the same
 * across shadcn/ui, shadcn-vue, shadcn-svelte, and spartan/ui.
 */
export function kitComponents(projectType: ProjectType, patternKeys: PatternKey[]) {
  return Array.from(new Set([
    "button", "card", "input", "dialog", "dropdown-menu", "separator", "skeleton",
    ...(projectType === "dashboard" ? ["table", "select", "calendar", "pagination"] : []),
    ...(projectType === "landing" ? ["accordion", "navigation-menu", "sheet", "carousel"] : []),
    ...(projectType === "web-app" ? ["select", "sheet", "tabs"] : []),
    ...(patternKeys.includes("combo-box") ? ["command", "popover"] : []),
    ...(patternKeys.includes("data-table") ? ["table"] : []),
    ...(patternKeys.includes("toast-provider") ? ["sonner"] : []),
  ]));
}
