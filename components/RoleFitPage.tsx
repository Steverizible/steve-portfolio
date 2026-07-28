import Link from "next/link";
import Button from "@/components/Button";
import ImpactAtAGlance from "@/components/ImpactAtAGlance";
import PageChrome from "@/components/PageChrome";
import RevealOnScroll from "@/components/RevealOnScroll";
import TechStack from "@/components/TechStack";
import WhereICreateValue from "@/components/WhereICreateValue";
import { roleFitPage as data } from "@/lib/role-fit-data";
import { siteMeta } from "@/lib/site-data";

const SECTION = "mt-16 border-t border-border pt-12 md:mt-20 md:pt-16";
const HEADING =
  "text-2xl font-bold uppercase tracking-tight md:text-3xl lg:text-4xl";

export default function RoleFitPage() {
  return (
    <div className="animate-page-in w-full bg-white">
      <PageChrome />

      <article className="w-full px-6 py-12 md:px-10 md:py-16 lg:px-14">
        <header className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(220px,0.55fr)] lg:items-start lg:gap-16 xl:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {data.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
              {data.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-snug tracking-tight text-foreground md:text-xl">
              {data.hero.supportingHeadline}
            </p>
            <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-relaxed text-muted md:mt-8 md:text-lg">
              {data.hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={data.hero.primaryCta.href} variant="solid">
                {data.hero.primaryCta.label}
              </Button>
              <Button href={siteMeta.resumeUrl} variant="outline">
                {data.hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <dl className="divide-y divide-border border-y border-border text-sm uppercase tracking-wide">
            {data.hero.meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 py-4">
                <dt className="text-xs text-muted">{item.label}</dt>
                <dd className="font-bold normal-case tracking-normal text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.careerImpact.heading}</h2>
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
            <ImpactAtAGlance
              impact={data.careerImpact.impact}
              variant="section"
              tone="light"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.roleAreasHeading}</h2>
          <div className="mt-10 space-y-8">
            {data.roleAreas.map((area) => (
              <article
                key={area.id}
                id={area.id}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <h3 className="text-xl font-bold uppercase tracking-tight md:text-2xl">
                  {area.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                  {area.summary}
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      Problems I Help Solve
                    </p>
                    <ul className="mt-4 space-y-2">
                      {area.problems.map((problem) => (
                        <li
                          key={problem}
                          className="text-sm leading-relaxed text-foreground md:text-base"
                        >
                          {problem}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                      Capabilities
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {area.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Supporting Proof
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {area.proof.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block rounded-xl border border-border bg-background p-4 transition-colors hover:bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                        >
                          <span className="text-sm font-bold uppercase tracking-tight text-foreground">
                            {item.label}
                          </span>
                          {item.outcome && (
                            <span className="mt-2 block text-sm text-muted">
                              {item.outcome}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <WhereICreateValue variant="detailed" />
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION} id="technology">
          <TechStack />
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>Start a Conversation</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Open to senior digital strategy, e-commerce, product, growth, and AI
            innovation roles—plus select advisory and founder-led collaborations.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {data.contactPaths.map((path) => (
              <Link
                key={path.id}
                href={path.href}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {path.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {path.description}
                </p>
                <span className="mt-5 inline-flex text-sm font-bold uppercase tracking-wide">
                  {path.ctaLabel}
                  <span aria-hidden="true" className="ml-2">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </RevealOnScroll>
      </article>
    </div>
  );
}
