import {
  evidenceStatusLabel,
  type EvidenceStatus,
} from "@/lib/portfolio-evidence";

const STATUS_CLASS: Record<EvidenceStatus, string> = {
  real: "border-foreground/40 bg-foreground text-background",
  redacted: "border-border bg-card text-foreground",
  illustrative: "border-dashed border-border bg-background text-muted",
  prototype: "border-border bg-card text-foreground",
  temporary: "border-dashed border-border/80 bg-background text-muted",
};

type EvidenceStatusBadgeProps = {
  status: EvidenceStatus;
  className?: string;
};

export default function EvidenceStatusBadge({
  status,
  className = "",
}: EvidenceStatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${STATUS_CLASS[status]} ${className}`}
    >
      {evidenceStatusLabel[status]}
    </span>
  );
}
