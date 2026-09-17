type SidebarProps = {
  activeStep: string;
};

const steps = [
  ["project-step", "01", "Project", "Shape the brief"],
  ["system-step", "02", "System", "Lock the language"],
  ["output-step", "03", "Handoff", "Package the context"],
] as const;

export function Sidebar({ activeStep }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Forge navigation">
      <div className="brand-lockup">
        <div className="brand-mark" aria-hidden="true"><span /><span /><span /></div>
        <div><p className="brand-name">forge</p><p className="brand-caption">frontend systems</p></div>
      </div>
      <div className="sidebar-rule" />
      <div className="sidebar-intro"><p className="eyebrow">BUILD MODE</p><p>Start with the decisions your AI should not have to guess.</p></div>
      <nav className="step-nav" aria-label="Builder steps">
        {steps.map(([id, index, title, description]) => (
          <a className={`step-link ${activeStep === id ? "is-active" : ""}`} href={`#${id}`} data-step-link={id} key={id}>
            <span className="step-index">{index}</span>
            <span><strong>{title}</strong><small>{description}</small></span>
          </a>
        ))}
      </nav>
      <div className="sidebar-foot">
        <div className="local-badge"><span className="status-dot" /> Local-first</div>
        <p>No account. No project data leaves this browser in the MVP.</p>
      </div>
    </aside>
  );
}
