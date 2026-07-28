type MetricCardProps = {
  value: string;
  label: string;
  supportingNote?: string;
  methodologyNote?: string;
  comparisonPeriod?: string;
  className?: string;
};

export default function MetricCard({
  value,
  label,
  supportingNote,
  methodologyNote,
  comparisonPeriod,
  className = "",
}: MetricCardProps) {
  return (
    <article
      className={`rounded-2xl border border-border bg-card p-5 md:p-6 ${className}`}
    >
      <p className="break-words text-3xl font-bold tracking-tight md:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted md:text-sm">
        {label}
      </p>
      {comparisonPeriod && (
        <p className="mt-3 text-xs leading-relaxed text-muted">
          {comparisonPeriod}
        </p>
      )}
      {supportingNote && (
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          {supportingNote}
        </p>
      )}
      {methodologyNote && (
        <p className="mt-3 text-xs leading-relaxed text-muted">
          {methodologyNote}
        </p>
      )}
    </article>
  );
}
