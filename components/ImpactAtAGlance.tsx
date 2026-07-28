import {
  DEFAULT_IMPACT_EYEBROW,
  partitionImpactItems,
  type ImpactAtGlance,
  type ImpactItem,
} from "@/lib/impact";

type ImpactAtAGlanceProps = {
  impact: ImpactAtGlance;
  /** Card footer (featured/system), homepage section panel, or archive compact line. */
  variant?: "card" | "section" | "compact";
  /** Dark footers use inverted text; light panels use foreground tokens. */
  tone?: "dark" | "light";
  className?: string;
};

function ItemBlock({
  item,
  size,
  tone,
}: {
  item: ImpactItem;
  size: "primary" | "secondary" | "compact";
  tone: "dark" | "light";
}) {
  const valueClass =
    size === "primary"
      ? "break-words text-3xl font-bold tracking-tight md:text-4xl"
      : size === "secondary"
        ? "break-words text-xl font-bold tracking-tight md:text-2xl"
        : "break-words text-base font-bold tracking-tight md:text-lg";

  const labelClass =
    size === "primary"
      ? "mt-1.5 text-xs leading-snug tracking-wide md:text-sm"
      : "mt-1 text-[11px] leading-snug tracking-wide md:text-xs";

  const valueTone = tone === "dark" ? "text-background" : "text-foreground";
  const labelTone = tone === "dark" ? "text-white/60" : "text-muted";

  return (
    <div className="flex min-w-0 flex-col-reverse">
      <dt className={`${labelClass} ${labelTone}`}>{item.label}</dt>
      <dd className={`${valueClass} ${valueTone}`}>{item.value}</dd>
    </div>
  );
}

export default function ImpactAtAGlance({
  impact,
  variant = "card",
  tone = "dark",
  className = "",
}: ImpactAtAGlanceProps) {
  if (!impact.items.length) return null;

  if (variant === "compact") {
    const primary =
      impact.items.find((item) => item.prominence === "primary") ??
      impact.items[0];
    const separatorTone = tone === "dark" ? "text-white/35" : "text-border";

    return (
      <p
        className={`mt-3 text-sm leading-snug ${
          tone === "dark" ? "text-white/75" : "text-muted"
        } ${className}`}
      >
        <span
          className={`font-bold ${
            tone === "dark" ? "text-background" : "text-foreground"
          }`}
        >
          {primary.value}
        </span>
        <span className={`mx-1.5 ${separatorTone}`} aria-hidden="true">
          ·
        </span>
        <span>{primary.label}</span>
      </p>
    );
  }

  const { primary, secondary, additional } = partitionImpactItems(impact);
  const eyebrow = impact.eyebrow ?? DEFAULT_IMPACT_EYEBROW;
  const eyebrowTone = tone === "dark" ? "text-white/55" : "text-muted";
  const guardrailTone = tone === "dark" ? "text-white/50" : "text-muted";
  const ruleTone = tone === "dark" ? "border-white/10" : "border-border";

  return (
    <div className={`min-w-0 ${className}`}>
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${eyebrowTone} md:text-xs`}
      >
        {eyebrow}
      </p>

      <dl className="mt-4 space-y-5 md:mt-5 md:space-y-6">
        <div>
          <ItemBlock item={primary} size="primary" tone={tone} />
        </div>

        {secondary.length > 0 && (
          <div
            className={`grid gap-5 ${
              secondary.length > 1 ? "sm:grid-cols-2 sm:gap-6" : ""
            }`}
          >
            {secondary.map((item) => (
              <ItemBlock
                key={`${item.value}-${item.label}`}
                item={item}
                size="secondary"
                tone={tone}
              />
            ))}
          </div>
        )}

        {additional && (
          <div className={`border-t pt-4 ${ruleTone}`}>
            <ItemBlock item={additional} size="compact" tone={tone} />
          </div>
        )}
      </dl>

      {impact.guardrail && (
        <p className={`mt-5 text-xs leading-relaxed ${guardrailTone}`}>
          {impact.guardrail}
        </p>
      )}
    </div>
  );
}
