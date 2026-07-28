import Image from "next/image";
import Link from "next/link";
import RevealHeading from "@/components/RevealHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { roleFitPage, type ValueCard } from "@/lib/role-fit-data";

type WhereICreateValueProps = {
  variant?: "homepage" | "detailed";
  className?: string;
};

function CardContent({
  card,
  isDetailed,
}: {
  card: ValueCard;
  isDetailed: boolean;
}) {
  return (
    <>
      {card.image && (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-card">
          <Image
            src={card.image}
            alt={`${card.proofLabel} — ${card.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      )}
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
        {card.proofLabel}
      </p>
      <h3 className="mt-2 text-lg font-bold uppercase tracking-tight md:text-xl">
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{card.summary}</p>

      {card.capabilities && card.capabilities.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Capabilities">
          {card.capabilities.slice(0, 4).map((cap) => (
            <li
              key={cap}
              className="rounded-full border border-border px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-foreground"
            >
              {cap}
            </li>
          ))}
        </ul>
      )}

      {isDetailed && card.outcome && (
        <p className="mt-4 text-sm font-semibold text-foreground">
          {card.outcome}
        </p>
      )}

      <span className="mt-auto inline-flex pt-5 text-sm font-bold uppercase tracking-wide text-foreground">
        View proof
        <span aria-hidden="true" className="ml-2">
          →
        </span>
      </span>
    </>
  );
}

export default function WhereICreateValue({
  variant = "homepage",
  className = "",
}: WhereICreateValueProps) {
  const cards = roleFitPage.valueCards;
  const isDetailed = variant === "detailed";

  const cardClass =
    "flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-[box-shadow,opacity] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground md:p-6";

  return (
    <section
      className={`w-full border-b border-border bg-background ${className}`}
      aria-label="Where I create value"
    >
      <div
        className={
          isDetailed
            ? "w-full"
            : "w-full px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24"
        }
      >
        {isDetailed ? (
          <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl lg:text-4xl">
            Where I Create Value
          </h2>
        ) : (
          <RevealHeading className="text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            <span className="block">Where I</span>
            <span className="block">Create Value</span>
          </RevealHeading>
        )}

        <ul
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 ${
            isDetailed ? "mt-10" : "mt-12 lg:mt-16"
          }`}
        >
          {cards.map((card, index) => (
            <li key={card.id} className="h-full">
              {isDetailed ? (
                <Link href={card.href} className={cardClass}>
                  <CardContent card={card} isDetailed={isDetailed} />
                </Link>
              ) : (
                <RevealOnScroll delayMs={(index % 3) * 60} className="h-full">
                  <Link href={card.href} className={cardClass}>
                    <CardContent card={card} isDetailed={isDetailed} />
                  </Link>
                </RevealOnScroll>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
