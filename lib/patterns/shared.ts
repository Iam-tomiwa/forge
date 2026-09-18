import type { PatternKey, ProjectType } from "../types";

/** Import specifiers a pattern source needs, resolved from the target framework's layout. */
export type PatternContext = { utils: string; ui: string };
export type PatternSource = {
  fileName: string;
  content: string;
  /** Extra files written next to the component, keyed by file name (Angular keeps templates in .html). */
  siblings?: Record<string, string>;
};

export const STARTER_PATTERN_OPTIONS: Array<{ key: PatternKey; label: string; description: string; states: string[] }> = [
  { key: "combo-box", label: "ComboBox", description: "Searchable selection with loading, disabled, clearable, and empty states", states: ["default", "open", "selected", "empty", "loading", "disabled"] },
  { key: "data-table", label: "DataTable", description: "Typed sorting, selection, pagination, and async states", states: ["populated", "sorted", "selected", "paginated", "loading", "empty", "error"] },
  { key: "empty-state", label: "EmptyState", description: "No-data surface with size, icon, and action slots", states: ["compact", "default", "with action"] },
  { key: "error-state", label: "ErrorState", description: "Recoverable error surface with compact and reset options", states: ["compact", "default", "recoverable"] },
  { key: "suspense-container", label: "SuspenseContainer", description: "Explicit loading, empty, error, and success boundary", states: ["idle", "loading", "success", "empty", "error"] },
  { key: "toast-provider", label: "Sonner toasts", description: "Accessible feedback surface with configurable provider props", states: ["success", "info", "warning", "error", "loading"] },
];

export const DEFAULT_PATTERN_KEYS: PatternKey[] = STARTER_PATTERN_OPTIONS.map(({ key }) => key);
export const STARTER_PATTERN_LABELS = STARTER_PATTERN_OPTIONS.map(({ label }) => label);
export const PATTERN_DEPENDENCIES: Record<PatternKey, PatternKey[]> = {
  "combo-box": [], "data-table": ["suspense-container"], "empty-state": [], "error-state": [], "suspense-container": ["empty-state", "error-state"], "toast-provider": [],
};
export const PROJECT_PATTERN_KEYS: Record<ProjectType, PatternKey[]> = { dashboard: ["combo-box", "data-table", "toast-provider"], landing: ["combo-box"], "web-app": ["combo-box", "data-table", "toast-provider"] };

export function getPatternKeysForProjectType(projectType: ProjectType) { return resolvePatternDependencies(PROJECT_PATTERN_KEYS[projectType]); }
export function normalizePatternKeys(selectedKeys?: PatternKey[]) { const allowed = new Set(DEFAULT_PATTERN_KEYS); return (selectedKeys ?? DEFAULT_PATTERN_KEYS).filter((key) => allowed.has(key)); }
export function resolvePatternDependencies(selectedKeys?: PatternKey[]) {
  const resolved: PatternKey[] = []; const visiting = new Set<PatternKey>();
  const add = (key: PatternKey) => { if (resolved.includes(key)) return; if (visiting.has(key)) throw new Error(`Pattern dependency cycle at ${key}`); visiting.add(key); PATTERN_DEPENDENCIES[key].forEach(add); visiting.delete(key); resolved.push(key); };
  normalizePatternKeys(selectedKeys).forEach(add); return resolved;
}

export function patternLabels(keys: PatternKey[]) {
  return keys.map((key) => STARTER_PATTERN_OPTIONS.find((option) => option.key === key)?.label ?? key);
}
