import type { FrameworkKey } from "../types";
import { ANGULAR_SCAFFOLDS } from "./angular";
import { REACT_SCAFFOLDS } from "./react";
import { SVELTE_SCAFFOLDS } from "./svelte";
import { VANILLA_SCAFFOLDS } from "./vanilla";
import { VUE_SCAFFOLDS } from "./vue";
import type { ScaffoldBuilder } from "./shared";

export * from "./shared";
export * from "./versions";

const SCAFFOLDS: Record<FrameworkKey, ScaffoldBuilder> = {
  ...REACT_SCAFFOLDS,
  ...VUE_SCAFFOLDS,
  ...SVELTE_SCAFFOLDS,
  ...ANGULAR_SCAFFOLDS,
  ...VANILLA_SCAFFOLDS,
} as Record<FrameworkKey, ScaffoldBuilder>;

export function getScaffold(framework: FrameworkKey) {
  const scaffold = SCAFFOLDS[framework];
  if (!scaffold) throw new Error(`No scaffold registered for ${framework}`);
  return scaffold;
}
