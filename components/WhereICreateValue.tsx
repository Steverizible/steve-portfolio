import Link from "next/link";
import RevealHeading from "@/components/RevealHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { roleFitPage } from "@/lib/role-fit-data";

type WhereICreateValueProps = {
  variant?: "homepage" | "detailed";
  className?: string;
};

export default function WhereICreateValue({
  variant = "homepage",
  className = "",
}: WhereICreateValueProps) {
  const cards = roleFitPage.valueCards;
  const isDetailed = variant === "detailed";

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
          className={`grid gap-4 sm:grid-cols-2 xl:grid-cols-3 ${
            isDetailed ? "mt-10" : "mt-12 lg:mt-16"
          }`}
        >
          {cards.map((card, index) => {
            const content = (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {card.proofLabel}
                </p>
                <h3 className="mt-3 text-lg font-bold uppercase tracking-tight md:text-xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {card.summary}
                </p>
                {isDetailed && card.outcome && (
                  <p className="mt-4 text-sm font-semibold text-foreground">
                    {card.outcome}
                  </p>
                )}
                <span className="mt-5 inline-flex text-sm font-bold uppercase tracking-wide text-foreground">
                  View proof
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </span>
              </>
            );

            const cardClass =
              "block h-full rounded-2xl border border-border bg-card p-6 transition-[box-shadow,opacity] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground md:p-7";

            return (
              <li key={card.id}>
                {isDetailed ? (
                  <Link href={card.href} className={cardClass}>
                    {content}
                  </Link>
                ) : (
                  <RevealOnScroll delayMs={(index % 3) * 60}>
                    <Link href={card.href} className={cardClass}>
                      {content}
                    </Link>
                  </RevealOnScroll>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
