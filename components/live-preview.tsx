import type { ForgeState } from "@/lib/types";
import { PROJECT_LABELS } from "@/lib/types";

type LivePreviewProps = { state: ForgeState };

const previewCopy = {
  dashboard: { greeting: "Good morning, Alex.", subtitle: "Here is the signal from your workspace.", primaryMetric: "84.6%" },
  landing: { greeting: "Give the work a clearer shape.", subtitle: "A brand system that can travel with the build.", primaryMetric: "01 / 03" },
  "web-app": { greeting: "Your workspace is ready.", subtitle: "One place for the work that moves the product forward.", primaryMetric: "12 live" },
} as const;

export function LivePreview({ state }: LivePreviewProps) {
  const copy = previewCopy[state.projectType];
  const brandName = state.projectName.trim() || "Untitled";
  const style = { "--primary": state.primary, "--secondary": state.secondary, "--accent": state.accent } as React.CSSProperties;

  return (
    <aside className="preview-column" aria-label="Live project preview">
      <div className="preview-sticky">
        <div className="preview-header">
          <div><p className="section-label"><span className="section-number">LIVE</span> System preview</p><h2>{brandName} / {PROJECT_LABELS[state.projectType]}</h2></div>
          <button className="preview-menu" type="button" aria-label="Preview options">•••</button>
        </div>
        <div className="preview-frame" style={style}>
          <div className="preview-chrome"><span /><span /><span /><small>localhost / preview</small></div>
          <div className="product-preview">
            <div className="product-nav">
              <div className="product-brand">
                <span className="product-mark">{state.logoDataUrl ? <img src={state.logoDataUrl} alt="" /> : brandName.slice(0, 2).toUpperCase()}</span>
                <strong>{brandName}</strong>
              </div>
              <div className="product-nav-actions"><span /><span /><span className="product-avatar">A</span></div>
            </div>
            <div className="product-body">
              <div className="product-greeting">
                <div><span className="preview-overline">Monday, 14 October</span><h3>{copy.greeting}</h3><p>{copy.subtitle}</p></div>
                <button className="preview-cta" type="button">+ Add view</button>
              </div>
              <div className="product-tabs"><span className="is-active">Overview</span><span>Activity</span><span>Reports</span></div>
              <div className="metric-grid">
                <article className="metric-card metric-card-primary"><div><span className="metric-label">Active signal</span><strong>{copy.primaryMetric}</strong></div><span className="metric-trend">↑ 12.4%</span><div className="sparkline primary-spark"><i /><i /><i /><i /><i /><i /><i /></div></article>
                <article className="metric-card"><div><span className="metric-label">Weekly reach</span><strong>18,240</strong></div><span className="metric-trend">↑ 8.2%</span><div className="sparkline secondary-spark"><i /><i /><i /><i /><i /><i /><i /></div></article>
              </div>
              <article className="activity-panel">
                <div className="activity-heading"><div><span className="metric-label">Workspace pulse</span><strong>Signal over time</strong></div><span className="mini-select">Last 30 days⌄</span></div>
                <div className="chart"><span className="chart-grid grid-one" /><span className="chart-grid grid-two" /><span className="chart-grid grid-three" /><svg viewBox="0 0 460 130" preserveAspectRatio="none" aria-label="Illustrative workspace pulse chart" role="img"><path className="chart-fill" d="M0 100 C32 92,45 108,72 88 S112 52,138 70 S171 98,200 66 S244 48,270 64 S306 92,334 46 S377 54,402 28 S440 46,460 12 V130 H0Z" /><path className="chart-line" d="M0 100 C32 92,45 108,72 88 S112 52,138 70 S171 98,200 66 S244 48,270 64 S306 92,334 46 S377 54,402 28 S440 46,460 12" /></svg></div>
                <div className="chart-labels"><span>01 Oct</span><span>08 Oct</span><span>14 Oct</span></div>
              </article>
              <div className="preview-foot-row"><span><i className="tiny-dot" /> 6 workflows live</span><span>View workspace ↗</span></div>
            </div>
          </div>
        </div>
        <div className="preview-legend"><span><i className="legend-swatch primary-swatch" /> Primary</span><span><i className="legend-swatch secondary-swatch" /> Secondary</span><span><i className="legend-swatch accent-swatch" /> Accent</span></div>
      </div>
    </aside>
  );
}
