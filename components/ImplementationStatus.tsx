import RevealOnScroll from "@/components/RevealOnScroll";
import type { ImplementationStatusItem } from "@/lib/ai-operating-model";

const STATUS_LABEL: Record<ImplementationStatusItem["status"], string> = {
  implemented: "Implemented",
  prototype: "Prototype",
  designed: "Designed Workflow",
  future: "Future Expansion",
};

const STATUS_STYLE: Record<ImplementationStatusItem["status"], string> = {
  implemented: "border-foreground/35 bg-card",
  prototype: "border-border bg-card",
  designed: "border-dashed border-border bg-card",
  future: "border-dashed border-border/80 bg-background",
};

type ImplementationStatusProps = {
  heading?: string;
  intro?: string;
  items: readonly ImplementationStatusItem[];
  className?: string;
};

export default function ImplementationStatus({
  heading,
  intro,
  items,
  className = "",
}: ImplementationStatusProps) {
  return (
    <div className={className}>
      {(heading || intro) && (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          {heading && (
            <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl lg:text-4xl">
              {heading}
            </h2>
          )}
          {intro && (
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {intro}
            </p>
          )}
        </div>
      )}

      <ul className={`grid gap-4 lg:grid-cols-2 ${heading || intro ? "mt-10" : ""}`}>
        {items.map((item, index) => (
          <RevealOnScroll key={item.label} delayMs={(index % 2) * 60} as="li">
            <article
              className={`h-full rounded-2xl border p-6 md:p-8 ${STATUS_STYLE[item.status]}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {STATUS_LABEL[item.status]}
              </p>
              <h3 className="mt-3 text-base font-bold uppercase tracking-tight md:text-lg">
                {item.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {item.description}
              </p>
            </article>
          </RevealOnScroll>
        ))}
      </ul>
    </div>
  );
}
