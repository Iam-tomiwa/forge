"use client";

import type { ComponentProps, CSSProperties } from "react";
import { Toaster } from "@/components/ui/sonner";

export { toast } from "sonner";
/**
 * The toast is a surface, so it takes the capped surface radius. Sonner reads
 * --border-radius, which the kit pins to the uncapped --radius; at a pill-sized
 * radius that turns the card into a blob. The other three variables are the
 * kit's own defaults, restated because a style prop replaces the whole object.
 */
const TOAST_SURFACE = {
  "--normal-bg": "var(--popover)",
  "--normal-text": "var(--popover-foreground)",
  "--normal-border": "var(--border)",
  "--border-radius": "var(--radius-lg)",
} as CSSProperties;

export function ToastProvider({ style, ...props }: ComponentProps<typeof Toaster>) {
  return <Toaster closeButton position="top-right" richColors style={{ ...TOAST_SURFACE, ...style }} {...props} />;
}
