"use client";

import { useState, type CSSProperties } from "react";
import { ComboBox } from "@/components/patterns/combo-box";
import { DataTable, type DataTableColumn } from "@/components/patterns/data-table";
import { ToastProvider, toast } from "@/components/patterns/toast-provider";
import type { AsyncState } from "@/components/patterns/suspense-container";
import { accessibleForeground, buildDesignTokens, contrastRatio, RADIUS_STEPS, radiusStepValue, scaleLength } from "@/lib/design-tokens";
import { getPatternKeysForProjectType } from "@/lib/patterns";
import type { ForgeState } from "@/lib/types";

type DemoRow = { id: string; name: string; status: string; owner: string };

const DEMO_ROWS: DemoRow[] = [
  { id: "1", name: "Northstar", status: "Ready", owner: "Alex" },
  { id: "2", name: "Harbor", status: "Review", owner: "Mina" },
  { id: "3", name: "Field notes", status: "Draft", owner: "Sam" },
];

const DEMO_COLUMNS: DataTableColumn<DemoRow>[] = [
  { key: "name", header: "Project", sortable: true },
  { key: "status", header: "Status" },
  { key: "owner", header: "Owner" },
];

const DEMO_OPTIONS = [
  { value: "ready", label: "Ready" },
  { value: "review", label: "In review" },
  { value: "draft", label: "Draft" },
];

/** The two feedback states a product actually reports through the toast provider. */
const TOAST_ACTIONS = [
  {
    label: "Save changes",
    variant: "default" as const,
    fire: () => toast.success("Changes saved", { description: "The success tone, from the Sonner provider your starter ships." }),
  },
  {
    label: "Delete project",
    variant: "destructive" as const,
    fire: () => toast.error("Project deleted", { description: "The error tone, from the same provider." }),
  },
];

const DEMO_STATES: AsyncState[] = ["success", "loading", "empty", "error"];

/**
 * The generated tokens, applied to themselves. Every value here is read from
 * buildDesignTokens — the panel holds no copy of its own, so it cannot drift
 * from what the starter ships.
 */
export function TokenPanel({ state, open, onOpenChange }: { state: ForgeState; open: boolean; onOpenChange: (open: boolean) => void }) {
  const tokens = buildDesignTokens(state);
  const preferredScheme = state.themeMode === "dark" ? "dark" : "light";
  const [scheme, setScheme] = useState<"light" | "dark">(preferredScheme);
  const [lastPreferred, setLastPreferred] = useState(preferredScheme);

  // Changing the project's theme moves the preview with it; the toggle above
  // still lets you inspect the other scheme afterwards.
  if (preferredScheme !== lastPreferred) {
    setLastPreferred(preferredScheme);
    setScheme(preferredScheme);
  }
  const colors = scheme === "dark" ? tokens.dark : tokens.light;

  const tokenVars: Record<string, string> = {
    // Native controls (the DataTable checkbox) follow color-scheme, not our
    // variables, so the canvas has to declare which scheme it is previewing.
    colorScheme: scheme,
    // The whole semantic contract, or components silently fall back to the
    // builder's own palette — which is what made the command input grey.
    "--background": colors.background,
    "--foreground": colors.foreground,
    "--card": colors.card,
    "--card-foreground": colors.cardForeground,
    "--popover": colors.popover,
    "--popover-foreground": colors.popoverForeground,
    "--primary": colors.primary,
    "--primary-foreground": colors.primaryForeground,
    "--secondary": colors.secondary,
    "--secondary-foreground": colors.secondaryForeground,
    "--accent": colors.accent,
    "--accent-foreground": colors.accentForeground,
    "--muted": colors.muted,
    "--muted-foreground": colors.mutedForeground,
    "--destructive": colors.destructive,
    "--destructive-foreground": colors.destructiveForeground,
    "--border": colors.border,
    "--input": colors.input,
    "--ring": colors.ring,
    "--status-success": colors.success,
    "--status-warning": colors.warning,
    "--status-info": colors.info,
    "--radius": tokens.shape.radius,
    // The builder's own skin pins --radius-sm/md/lg/xl to fixed values at :root,
    // in a later layer than the theme, so the derived steps have to be restated
    // here or every preview corner would stay at the builder's radius.
    ...Object.fromEntries(RADIUS_STEPS.map((step) => [`--radius-${step.name}`, radiusStepValue(tokens.shape.radius, step)])),
    "--shadow-sm": tokens.shape.sm,
    "--shadow-md": tokens.shape.md,
    "--shadow-lg": tokens.shape.lg,
    "--control-height": tokens.spacing.control,
    "--space-unit": tokens.spacing.space,
    "--motion-fast": tokens.motion.fast,
    "--motion-normal": tokens.motion.normal,
    "--motion-easing": tokens.motion.easing,
    ...Object.fromEntries(
      tokens.typeScale.flatMap((step) => [
        [`--scale-${step.key}`, step.size],
        [`--scale-${step.key}-leading`, step.lineHeight],
        [`--scale-${step.key}-weight`, String(step.weight)],
      ]),
    ),
    "--font-heading": tokens.typography.heading,
    "--font-sans": tokens.typography.sans,
    "--font-mono": tokens.typography.mono,
  };

  const canvasStyle = tokenVars as CSSProperties;

  /**
   * Radix renders popovers into a portal on document.body, outside this subtree,
   * so inline variables never reach them and they fall back to the builder's own
   * palette. The same tokens are scoped to the popper wrapper instead.
   */
  const portalCss = `[data-radix-popper-content-wrapper],[data-slot="popover-content"]{${Object.entries(tokenVars)
    // React takes camelCase inline; a stylesheet needs the CSS spelling.
    .map(([name, value]) => `${name.startsWith("--") ? name : name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}:${value}`)
    .join(";")}}`;

  const [demoState, setDemoState] = useState<AsyncState>("success");
  const [comboValue, setComboValue] = useState("");
  const patterns = getPatternKeysForProjectType(state.projectType);
  const hasToast = patterns.includes("toast-provider");
  const brand: Array<[string, string]> = [["Primary", colors.primary], ["Secondary", colors.secondary], ["Accent", colors.accent]];
  const status: Array<[string, string]> = [["Muted", colors.muted], ["Border", colors.border], ["Destructive", colors.destructive], ["Success", colors.success], ["Warning", colors.warning], ["Info", colors.info]];

  return (
    <section className="token-panel" aria-label="Generated design tokens">
      <header className="token-panel-head">
        <button aria-controls="token-panel-body" aria-expanded={open} className="token-panel-toggle" onClick={() => onOpenChange(!open)} type="button">
          <span className="section-label"><span className="section-number">TOKENS</span> Read from your choices, not mocked up</span>
          <span className="token-panel-state">
            {open ? "Collapse" : "Expand"}
            <svg aria-hidden="true" className="token-panel-chevron" viewBox="0 0 16 16"><path d="M3.5 6 L8 10.5 L12.5 6" /></svg>
          </span>
        </button>
        {open ? (
        <div className="token-scheme" role="radiogroup" aria-label="Preview color scheme">
          {(["light", "dark"] as const).map((option) => (
            <label className={scheme === option ? "is-selected" : ""} key={option}>
              <input type="radio" name="token-scheme" value={option} checked={scheme === option} onChange={() => setScheme(option)} />
              <span>{option === "light" ? "Light" : "Dark"}</span>
            </label>
          ))}
        </div>
        ) : null}
      </header>

      {open ? <style dangerouslySetInnerHTML={{ __html: portalCss }} /> : null}
      {open ? (
      <div className="token-canvas" id="token-panel-body" style={canvasStyle}>
        <div className="token-block">
          <h3>Color</h3>
          <div className="token-swatch-row">
            {brand.map(([label, value]) => (
              <div className="token-swatch" key={label}>
                <span className="token-chip" style={{ background: value, color: accessibleForeground(value) }}>Aa</span>
                <span className="token-swatch-text">
                  <strong>{label}</strong>
                  <span>
                    <small>{value}</small>
                    <small className="token-ratio">{contrastRatio(accessibleForeground(value), value).toFixed(1)}:1</small>
                  </span>
                </span>
              </div>
            ))}
          </div>
          <div className="token-dot-row">
            {status.map(([label, value]) => (
              <span className="token-dot" key={label}><i style={{ background: value }} />{label}</span>
            ))}
          </div>
          <p className="token-note">Body text on this surface: {contrastRatio(colors.foreground, colors.background).toFixed(2)}:1</p>
        </div>

        <div className="token-block">
          <h3>Type</h3>
          <ul className="token-scale">
            {tokens.typeScale.map((step) => (
              <li key={step.key}>
                <span
                  className="token-specimen"
                  style={{ fontFamily: tokens.typography[step.role], fontSize: step.size, fontWeight: step.weight, lineHeight: step.lineHeight }}
                >
                  {step.role === "mono" ? "01" : "Aa"}
                </span>
                <span className="token-scale-meta">
                  <strong>{step.label}</strong>
                  <small>{scaleLength(step.size)} · {step.weight} · {step.lineHeight}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="token-block">
          <h3>Shape, elevation, motion</h3>
          <div className="token-radius-row">
            {RADIUS_STEPS.map((step) => (
              <span className="token-radius" key={step.name}>
                <i style={{ borderRadius: radiusStepValue(tokens.shape.radius, step) }} />
                <small>{step.name}<br />{radiusStepValue(tokens.shape.radius, step)}</small>
              </span>
            ))}
          </div>
          <div className="token-elevation-row">
            {([["sm", tokens.shape.sm], ["md", tokens.shape.md], ["lg", tokens.shape.lg]] as const).map(([label, shadow]) => (
              <span className="token-elevation" key={label} style={{ boxShadow: shadow === "none" ? undefined : shadow, borderRadius: scaleLength(tokens.shape.radius, 0.8) }}>
                {shadow === "none" ? "flat" : label}
              </span>
            ))}
          </div>
          <div className="token-control-row">
            <button className="token-control" type="button">Hover me</button>
            <small>
              control {scaleLength(tokens.spacing.control)} · unit {scaleLength(tokens.spacing.space)} · {tokens.motion.normal} {tokens.motion.easing.startsWith("cubic") ? "eased" : tokens.motion.easing}
            </small>
          </div>
        </div>

        <div className="token-block token-block-wide">
          <div className="token-block-head">
            <h3>Components</h3>
            <small>the same source your starter ships</small>
          </div>

          <div className="token-buttons">
            {TOAST_ACTIONS.map((action) => (
              <button
                className={action.variant === "destructive" ? "token-control token-control-destructive" : "token-control"}
                key={action.label}
                onClick={hasToast ? action.fire : undefined}
                type="button"
              >
                {action.label}
              </button>
            ))}
          </div>

          <div className="token-demo-row">
            <div className="token-demo-combo">
              <span className="token-demo-label">ComboBox</span>
              <ComboBox options={DEMO_OPTIONS} value={comboValue} onValueChange={setComboValue} clearable placeholder="Filter projects" />
            </div>
            <div className="token-demo-states" role="group" aria-label="Async state">
              <span className="token-demo-label">DataTable state</span>
              <div className="token-demo-buttons">
                {DEMO_STATES.map((option) => (
                  <button
                    aria-pressed={demoState === option}
                    className="token-control token-control-sm"
                    key={option}
                    onClick={() => setDemoState(option)}
                    type="button"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <DataTable
            columns={DEMO_COLUMNS}
            rows={demoState === "empty" ? [] : DEMO_ROWS}
            state={demoState}
            selectable
            pageSize={3}
            onRetry={() => setDemoState("success")}
          />

          {/*
            Mounted inside the canvas so the toast inherits the generated
            variables, and told which scheme to use — sonner otherwise reads
            next-themes, which follows the OS rather than this preview.
          */}
          {hasToast ? <ToastProvider theme={scheme} /> : null}
        </div>
      </div>
      ) : null}
    </section>
  );
}
