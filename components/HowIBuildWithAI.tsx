"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import HumanApprovalGuardrail from "@/components/HumanApprovalGuardrail";
import ImplementationStatus from "@/components/ImplementationStatus";
import PageChrome from "@/components/PageChrome";
import ProofGallery from "@/components/ProofGallery";
import RevealOnScroll from "@/components/RevealOnScroll";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import ZoomMedia from "@/components/ZoomMedia";
import { aiOperatingModelPage as data } from "@/lib/ai-operating-model";
import { aiMethodEvidenceGallery } from "@/lib/portfolio-evidence";

const SECTION = "mt-16 border-t border-border pt-12 md:mt-20 md:pt-16";
const HEADING =
  "text-2xl font-bold uppercase tracking-tight md:text-3xl lg:text-4xl";
const PROSE = "space-y-5 text-base leading-relaxed text-muted md:text-lg";

function Paragraphs({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((text) => (
        <p key={text.slice(0, 48)} className="whitespace-pre-line">
          {text}
        </p>
      ))}
    </>
  );
}

export default function HowIBuildWithAI() {
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
              <Button href={data.hero.secondaryCta.href} variant="outline">
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

        <ZoomMedia className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card md:mt-14">
          <div className="relative h-full w-full">
            <Image
              src={data.hero.image.src}
              alt={data.hero.image.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </ZoomMedia>

        {/* Operating model */}
        <RevealOnScroll
          as="section"
          id={data.operatingModel.id}
          className={SECTION}
        >
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.operatingModel.heading}</h2>
            <div className={PROSE}>
              <p>{data.operatingModel.intro}</p>
              <p>{data.operatingModel.connectToolsNote}</p>
            </div>
          </div>

          <ZoomMedia className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card md:mt-10">
            <div className="relative h-full w-full">
              <Image
                src={data.operatingModel.image.src}
                alt={data.operatingModel.image.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ZoomMedia>

          <WorkflowDiagram
            className="mt-10"
            loop
            ariaLabel="AI operating model stages"
            stages={data.operatingModel.stages.map((stage) => ({
              id: stage.id,
              number: stage.number,
              title: stage.title,
              description: stage.summary,
              proofLinks: [...stage.proofLinks],
            }))}
          />

          <div className="mt-10 space-y-6">
            {data.operatingModel.stages.map((stage) => (
              <article
                key={stage.id}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-muted">
                  {String(stage.number).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-bold uppercase tracking-tight">
                  {stage.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {stage.summary}
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      AI contribution
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {stage.aiContribution}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Human responsibility
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {stage.humanResponsibility}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
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
              </article>
            ))}
          </div>

          <HumanApprovalGuardrail
            className="mt-10"
            headline="Human Accountability"
            body={data.operatingModel.governancePrinciple}
          />
          <blockquote className="mt-6 rounded-2xl border border-border bg-card p-8 md:p-10">
            <p className="text-lg font-bold uppercase leading-snug tracking-tight text-foreground md:text-xl">
              {data.operatingModel.learningPrinciple}
            </p>
          </blockquote>
        </RevealOnScroll>

        {/* Three applications */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.applications.heading}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {data.applications.panels.map((panel) => (
              <article
                key={panel.id}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10] w-full bg-[#ddd]">
                  <Image
                    src={panel.imageSrc}
                    alt={panel.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {panel.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-bold uppercase tracking-tight">
                    {panel.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted md:text-base">
                    {panel.description}
                  </p>
                  <div className="mt-6">
                    <Button href={panel.href} variant="outline">
                      {panel.ctaLabel}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        {/* Customer first */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.customerFirst.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.customerFirst.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {data.customerFirst.principles.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* AI leverage */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.aiLeverage.heading}</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {data.aiLeverage.intro}
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.aiLeverage.items.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* Human center */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.humanCenter.heading}</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {data.humanCenter.body}
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.humanCenter.items.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-background px-4 py-4 text-sm font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* Tool map */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.toolMap.heading}</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {data.toolMap.intro}
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.toolMap.groups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {group.title}
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {group.note && (
                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    {group.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Implementation status */}
        <RevealOnScroll as="section" className={SECTION}>
          <ImplementationStatus
            heading={data.implementation.heading}
            intro={data.implementation.intro}
            items={data.implementation.items}
          />
        </RevealOnScroll>

        {/* Cross-project evidence */}
        <RevealOnScroll as="section" className={SECTION} id="evidence">
          <ProofGallery section={aiMethodEvidenceGallery} />
        </RevealOnScroll>

        {/* Closing */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.closing.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.closing.body} />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {data.closing.ctas.map((cta) => (
              <Button
                key={cta.href}
                href={cta.href}
                variant={cta.href === "/#work" ? "solid" : "outline"}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </RevealOnScroll>
      </article>
    </div>
  );
}
