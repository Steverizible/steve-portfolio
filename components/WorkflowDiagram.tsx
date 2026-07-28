import Link from "next/link";

export type WorkflowStage = {
  id?: string;
  number?: string | number;
  title: string;
  description?: string;
  proofLinks?: Array<{ label: string; href: string }>;
};

type WorkflowDiagramProps = {
  stages: readonly WorkflowStage[];
  loop?: boolean;
  loopLabel?: string;
  ariaLabel?: string;
  className?: string;
};

export default function WorkflowDiagram({
  stages,
  loop = false,
  loopLabel = "Loops back to improve the next cycle",
  ariaLabel = "Workflow stages",
  className = "",
}: WorkflowDiagramProps) {
  return (
    <div className={className}>
      <ol
        aria-label={ariaLabel}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {stages.map((stage, index) => {
          const number =
            stage.number ?? String(index + 1).padStart(2, "0");
          const isLast = index === stages.length - 1;

          return (
            <li
              key={stage.id ?? stage.title}
              className={`flex flex-col rounded-2xl border bg-card p-5 ${
                loop && isLast ? "border-foreground/35" : "border-border"
              }`}
            >
              <span className="text-xs font-bold tracking-[0.2em] text-muted">
                {typeof number === "number"
                  ? String(number).padStart(2, "0")
                  : number}
              </span>
              <span className="mt-3 text-sm font-semibold uppercase leading-snug tracking-tight text-foreground md:text-base">
                {stage.title}
              </span>
              {stage.description && (
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {stage.description}
                </p>
              )}
              {stage.proofLinks && stage.proofLinks.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {stage.proofLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {loop && isLast && (
                <span className="mt-4 text-xs font-medium uppercase tracking-wide text-muted">
                  {loopLabel}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
