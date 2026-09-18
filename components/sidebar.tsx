type SidebarProps = {
  activeStep: string;
  onStepSelect?: (id: string) => void;
};

const steps = [
  ["project-step", "01", "Project", "Shape the brief"],
  ["system-step", "02", "System", "Lock the language"],
  ["output-step", "03", "Handoff", "Package the context"],
] as const;

export function Sidebar({ activeStep, onStepSelect }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Forge navigation">
      <div className="brand-lockup">
        <div className="brand-mark" aria-hidden="true">
          {/* Forge hammer. The head tapers on the peen side; public/favicon.svg uses the same geometry. */}
          <svg viewBox="0 0 32 32" role="presentation">
            <path d="M5.7 8.5 L11.2 6 H24.7 A1.6 1.6 0 0 1 26.3 7.6 V12.9 A1.6 1.6 0 0 1 24.7 14.5 H11.2 L5.7 12 Z" />
            <rect x="14.3" y="14.5" width="3.4" height="11.5" rx="1.7" />
          </svg>
        </div>
        <div>
          <p className="brand-name">forge</p>
          <p className="brand-caption">frontend systems</p>
        </div>
      </div>
      <div className="sidebar-rule" />
      <div className="sidebar-intro">
        <p className="eyebrow">BUILD MODE</p>
        <p>Start with the decisions your AI should not have to guess.</p>
      </div>
      <nav className="step-nav" aria-label="Builder steps">
        {steps.map(([id, index, title, description]) => (
          <a
            className={`step-link ${activeStep === id ? "is-active" : ""}`}
            href={`#${id}`}
            data-step-link={id}
            onClick={(event) => {
              if (onStepSelect) {
                event.preventDefault();
                onStepSelect(id);
              }
            }}
            key={id}
          >
            <span className="step-index">{index}</span>
            <span>
              <strong>{title}</strong>
              <small>{description}</small>
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
