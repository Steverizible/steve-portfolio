import Link from "next/link";
import Button from "@/components/Button";
import ImpactAtAGlance from "@/components/ImpactAtAGlance";
import RevealHeading from "@/components/RevealHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import { aiBuildMethodPreview as data } from "@/lib/ai-operating-model";

export default function AIBuildMethodPreview() {
  return (
    <section
      className="w-full border-b border-border bg-background"
      id={data.id}
      aria-label={data.title}
    >
      <div className="w-full px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-32">
          <RevealHeading className="text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">{data.titleLines[0]}</span>
            <span className="block">{data.titleLines[1]}</span>
          </RevealHeading>
          <RevealOnScroll className="text-base leading-relaxed text-muted md:text-lg lg:pt-2">
            {data.introduction}
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <ImpactAtAGlance
            impact={data.impactAtAGlance}
            variant="section"
            tone="light"
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-12">
          <ol
            aria-label="Simplified AI operating stages"
            className="grid gap-3 sm:grid-cols-5"
          >
            {data.stages.map((stage, index) => (
              <li
                key={stage}
                className="rounded-2xl border border-border bg-card p-5 text-center"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block text-sm font-bold uppercase tracking-tight text-foreground md:text-base">
                  {stage}
                </span>
                {index < data.stages.length - 1 && (
                  <span
                    className="mt-3 hidden text-xs text-muted sm:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Portfolio proof
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {data.proofs.map((proof) => (
              <li key={proof.href}>
                <Link
                  href={proof.href}
                  className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  {proof.label}
                </Link>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <Button href={data.cta.href} variant="solid">
            {data.cta.label}
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
