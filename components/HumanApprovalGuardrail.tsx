type HumanApprovalGuardrailProps = {
  headline?: string;
  body?: string;
  className?: string;
};

export default function HumanApprovalGuardrail({
  headline = "Human Approval Required",
  body = "AI may prepare, recommend, structure, and review. A person remains responsible for final approval and execution.",
  className = "",
}: HumanApprovalGuardrailProps) {
  return (
    <aside
      className={`rounded-2xl border border-foreground/30 bg-card p-6 md:p-8 ${className}`}
      aria-label={headline}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Governance
      </p>
      <p className="mt-3 text-lg font-bold uppercase tracking-tight text-foreground md:text-xl">
        {headline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{body}</p>
    </aside>
  );
}
