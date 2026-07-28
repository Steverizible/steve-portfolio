"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import EvidenceStatusBadge from "@/components/EvidenceStatusBadge";
import ImpactAtAGlance from "@/components/ImpactAtAGlance";
import ImplementationStatus from "@/components/ImplementationStatus";
import PageChrome from "@/components/PageChrome";
import ProjectCard from "@/components/ProjectCard";
import ProofGallery from "@/components/ProofGallery";
import RevealOnScroll from "@/components/RevealOnScroll";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import ZoomMedia from "@/components/ZoomMedia";
import { totelyEvidenceGallery } from "@/lib/portfolio-evidence";
import { projects, type Project } from "@/lib/site-data";
import {
  getTotelyCapabilitiesByStatus,
  totelyCaseStudy as data,
  type ProductCapability,
} from "@/lib/totely-case-study";

const SECTION = "mt-16 border-t border-border pt-12 md:mt-20 md:pt-16";
const HEADING =
  "text-2xl font-bold uppercase tracking-tight md:text-3xl lg:text-4xl";
const PROSE = "space-y-5 text-base leading-relaxed text-muted md:text-lg";

const CAPABILITY_STATUS_ORDER: ProductCapability["status"][] = [
  "implemented",
  "prototype",
  "designed",
  "future",
];

const CAPABILITY_STATUS_LABEL: Record<ProductCapability["status"], string> = {
  implemented: "Implemented",
  prototype: "Prototype",
  designed: "Designed",
  future: "Future",
};

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

function ExternalCta({
  href,
  label,
  variant = "solid",
}: {
  href: string;
  label: string;
  variant?: "solid" | "outline";
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-premium ${variant === "solid" ? "btn-solid" : "btn-outline"} inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground`}
    >
      {label}
      <span aria-hidden="true" className="ml-2">
        ↗
      </span>
    </Link>
  );
}

export default function TotelyCaseStudy({ project }: { project: Project }) {
  const related = data.relatedProjectIds
    .map((id) => projects.find((item) => item.id === id))
    .filter((item): item is Project => Boolean(item));

  const marqueeWords = Array.from({ length: 8 }, () => "More Works");

  const capabilityGroups = CAPABILITY_STATUS_ORDER.map((status) => ({
    status,
    label: CAPABILITY_STATUS_LABEL[status],
    items: getTotelyCapabilitiesByStatus(status),
  })).filter((group) => group.items.length > 0);

  return (
    <div className="animate-page-in w-full bg-white">
      <PageChrome />

      <article className="w-full px-6 py-12 md:px-10 md:py-16 lg:px-14">
        {/* Hero */}
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
            <p className="mt-6 max-w-2xl rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed text-muted md:p-5">
              {data.hero.methodologyNote}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {data.hero.ctas.map((cta) => (
                <ExternalCta
                  key={cta.href}
                  href={cta.href}
                  label={cta.label}
                  variant={cta.label === "Open the App" ? "outline" : "solid"}
                />
              ))}
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

        <div className="relative mt-12 md:mt-14">
          {data.hero.imageStatus === "illustrative" && (
            <div className="mb-3">
              <EvidenceStatusBadge status="illustrative" />
            </div>
          )}
          <ZoomMedia className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative h-full w-full">
              <ViewTransition
                name={`project-image-${project.id}`}
                share="project-morph"
              >
                <Image
                  src={data.hero.image.src}
                  alt={data.hero.image.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </ViewTransition>
            </div>
          </ZoomMedia>
        </div>

        {/* At a Glance */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <ImpactAtAGlance
              impact={data.atAGlance}
              variant="section"
              tone="light"
            />
          </div>
        </RevealOnScroll>

        {/* Brand hierarchy */}
        {data.brand && (
          <RevealOnScroll as="section" className={SECTION}>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
              <h2 className={HEADING}>{data.brand.heading}</h2>
              <div className={PROSE}>
                <Paragraphs items={data.brand.body} />
              </div>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              {data.brand.hierarchy.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-3 text-lg font-bold tracking-tight text-foreground md:text-xl">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </RevealOnScroll>
        )}

        {/* Storage Trap */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.storageTrap.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.storageTrap.body} />
            </div>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.storageTrap.traditionalFailures.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium leading-snug text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 md:mt-12 md:p-12">
            <p className="text-xl font-bold uppercase leading-snug tracking-tight text-foreground md:text-2xl lg:text-3xl">
              {data.storageTrap.featuredQuestion}
            </p>
          </blockquote>
        </RevealOnScroll>

        {/* Research Before Building */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.researchBeforeBuilding.heading}</h2>
            <div className={PROSE}>
              <p className="font-semibold text-foreground">
                {data.researchBeforeBuilding.principle}
              </p>
              <Paragraphs items={data.researchBeforeBuilding.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {data.researchBeforeBuilding.researchGroups.map((group) => (
              <article
                key={group.id}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <h3 className="text-base font-bold uppercase tracking-tight md:text-lg">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-border pt-3 text-sm leading-relaxed text-muted first:border-t-0 first:pt-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        {/* Research Defined Product */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.researchDefinedProduct.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.researchDefinedProduct.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.researchDefinedProduct.insightCards.map((card) => (
              <article
                key={card.id}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 md:p-12">
            <p className="text-xl font-bold uppercase leading-snug tracking-tight text-foreground md:text-2xl">
              {data.researchDefinedProduct.pullQuote}
            </p>
          </blockquote>
        </RevealOnScroll>

        {/* Role */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.role.heading}</h2>
            <div className={PROSE}>
              <p>{data.role.intro}</p>
              <p>{data.role.contribution}</p>
              <p className="rounded-2xl border border-border bg-card p-4 text-sm md:p-5">
                {data.role.teamNote}
              </p>
            </div>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.role.responsibilities.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium leading-snug text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* What We Built */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.whatWeBuilt.heading}</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {data.whatWeBuilt.intro}
            </p>
          </div>
          <div className="mt-10 space-y-10">
            {capabilityGroups.map((group) => (
              <div key={group.status}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {group.label}
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className={`rounded-xl border p-4 ${
                        group.status === "implemented"
                          ? "border-foreground/35 bg-card"
                          : group.status === "prototype"
                            ? "border-border bg-card"
                            : "border-dashed border-border bg-background"
                      }`}
                    >
                      <p className="text-sm font-semibold text-foreground">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Product Loop */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.productLoop.heading}</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {data.productLoop.intro}
            </p>
          </div>
          <WorkflowDiagram
            className="mt-10"
            loop
            loopLabel="Find reconnects to the next tote capture"
            ariaLabel="Totely product loop stages"
            stages={data.productLoop.stages.map((stage) => ({
              id: stage.title.toLowerCase(),
              number: stage.number,
              title: stage.title,
              description: stage.description,
            }))}
          />
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {data.productLoop.expandedLogic.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-4 text-sm leading-relaxed text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* One-Tote Test */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.oneToteTest.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.oneToteTest.body} />
              <p className="font-semibold text-foreground">
                {data.oneToteTest.principle}
              </p>
            </div>
          </div>
          <ol
            aria-label="One-Tote Test sequence"
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.oneToteTest.sequence.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block text-sm font-semibold leading-snug text-foreground">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.oneToteTest.whyItMatters.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-dashed border-border bg-background px-4 py-4 text-sm leading-relaxed text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* AI-Native Development */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.aiNativeDevelopment.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.aiNativeDevelopment.body} />
            </div>
          </div>
          <div className="mt-10 space-y-6">
            {data.aiNativeDevelopment.stages.map((stage) => (
              <article
                key={stage.number + stage.title}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-muted">
                  {stage.number}
                </p>
                <h3 className="mt-3 text-xl font-bold uppercase tracking-tight">
                  {stage.title}
                </h3>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
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
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Output
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {stage.output}
                    </p>
                  </div>
                </div>
                {stage.evidenceNote && (
                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    {stage.evidenceNote}
                  </p>
                )}
              </article>
            ))}
          </div>
        </RevealOnScroll>

        {/* Product Strategy */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.productStrategy.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.productStrategy.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {(
              [
                { title: "MVP", items: data.productStrategy.mvp },
                { title: "Next Stage", items: data.productStrategy.nextStage },
                { title: "Long Term", items: data.productStrategy.longTerm },
              ] as const
            ).map((column) => (
              <article
                key={column.title}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-border pt-3 text-sm leading-relaxed text-muted first:border-t-0 first:pt-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        {/* Implementation Status */}
        <RevealOnScroll as="section" className={SECTION}>
          <ImplementationStatus
            heading={data.implementationStatus.heading}
            intro={data.implementationStatus.intro}
            items={data.implementationStatus.items}
          />
        </RevealOnScroll>

        {/* Marketing Engine */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.marketingEngine.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.marketingEngine.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {data.marketingEngine.blocks.map((block) => (
              <article
                key={block.id}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <h3 className="text-base font-bold uppercase tracking-tight md:text-lg">
                  {block.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="border-t border-border pt-3 text-sm leading-relaxed text-muted first:border-t-0 first:pt-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        {/* Search-First */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.searchFirst.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.searchFirst.body} />
            </div>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {data.searchFirst.influences.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-4 text-sm leading-relaxed text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <WorkflowDiagram
            className="mt-10"
            ariaLabel="Search-first journey map"
            stages={data.searchFirst.journeyMap.map((step) => ({
              id: step.title.toLowerCase().replace(/\s+/g, "-"),
              number: step.number,
              title: step.title,
              description: step.description,
            }))}
          />
          <div className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Use cases
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.searchFirst.useCases.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ZoomMedia className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative h-full w-full">
              <Image
                src="/images/work/totely/use-cases.webp"
                alt="Totely use-case storytelling across garage, moving, seasonal, and closet storage scenarios."
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ZoomMedia>
        </RevealOnScroll>

        {/* Reusable Workflows */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.reusableWorkflows.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.reusableWorkflows.body} />
              <p className="font-semibold text-foreground">
                {data.reusableWorkflows.principle}
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.reusableWorkflows.cards.map((card) => (
              <article
                key={card.id}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {card.name}
                </h3>
                <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Input
                    </dt>
                    <dd className="mt-1 text-foreground">{card.input}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                      AI assisted
                    </dt>
                    <dd className="mt-1 text-foreground">{card.aiAssisted}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Human review
                    </dt>
                    <dd className="mt-1 text-foreground">{card.humanReview}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Output
                    </dt>
                    <dd className="mt-1 text-foreground">{card.output}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Reusability
                    </dt>
                    <dd className="mt-1 text-muted">{card.reusability}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        {/* Development Workflow */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.developmentWorkflow.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.developmentWorkflow.body} />
            </div>
          </div>
          <WorkflowDiagram
            className="mt-10"
            loop
            loopLabel="Document feeds the next define cycle"
            ariaLabel="Totely development workflow stages"
            stages={data.developmentWorkflow.stages.map((stage) => ({
              id: stage.id,
              number: stage.number,
              title: stage.title,
              description: stage.description,
            }))}
          />
          <div className="mt-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Verified tools
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {data.developmentWorkflow.verifiedTools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-xl border border-border bg-card px-4 py-4 text-sm leading-relaxed text-foreground"
                >
                  {tool}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl border border-dashed border-border bg-background p-5 text-sm leading-relaxed text-muted">
              {data.developmentWorkflow.unverifiedNote}
            </p>
          </div>
        </RevealOnScroll>

        {/* Technology */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.technology.heading}</h2>
            <div className={PROSE}>
              <p>{data.technology.intro}</p>
              <p>{data.technology.ownershipNote}</p>
            </div>
          </div>
          <div className="mt-10 space-y-10">
            {data.technology.groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {group.title}
                </h3>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.tools.map((tool) => (
                    <li
                      key={tool.name}
                      className="rounded-2xl border border-border bg-card p-5"
                    >
                      <div className="flex items-center gap-3">
                        {tool.logoSrc ? (
                          // eslint-disable-next-line @next/next/no-img-element -- small SVG logos from data
                          <img
                            src={tool.logoSrc}
                            alt=""
                            width={28}
                            height={28}
                            className="h-7 w-7 object-contain"
                            aria-hidden="true"
                          />
                        ) : null}
                        <h4 className="text-sm font-bold uppercase tracking-tight text-foreground">
                          {tool.name}
                        </h4>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {tool.howUsed}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Human Judgment */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="rounded-2xl bg-card p-8 md:p-12">
            <h2 className="text-xl font-bold uppercase tracking-tight md:text-2xl">
              {data.humanJudgment.heading}
            </h2>
            <p className="mt-4 max-w-3xl whitespace-pre-line text-base leading-relaxed text-muted md:text-lg">
              {data.humanJudgment.body}
            </p>
          </div>
        </RevealOnScroll>

        {/* Outcomes */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.outcomes.heading}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.outcomes.items.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        {/* Evidence */}
        <RevealOnScroll as="section" className={SECTION} id="evidence">
          <ProofGallery section={totelyEvidenceGallery} />
        </RevealOnScroll>

        {/* Result / closing */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>Result</h2>
            <div className={PROSE}>
              <p className="font-semibold text-foreground">
                {data.outcomes.closing}
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {data.hero.ctas.map((cta) => (
              <ExternalCta
                key={`closing-${cta.href}`}
                href={cta.href}
                label={cta.label}
                variant={cta.label === "Open the App" ? "outline" : "solid"}
              />
            ))}
          </div>
        </RevealOnScroll>

        {/* Related work links */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>Related Work</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {data.relatedWork.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                  <span className="text-base font-bold uppercase tracking-tight text-foreground">
                    {item.label}
                  </span>
                  <span className="mt-3 text-sm leading-relaxed text-muted">
                    {item.relationship}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </article>

      {related.length > 0 && (
        <div className="mt-8 w-full bg-white pb-16 md:mt-12 md:pb-20">
          <div className="px-6 md:px-10 lg:px-14">
            <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">
              More Works
            </h2>
          </div>
          <div
            className="relative mt-6 overflow-hidden py-6 md:py-8"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="ticker-track flex w-max gap-8 px-4 text-[clamp(2.5rem,8vw,6.5rem)] font-bold uppercase leading-none tracking-tight md:gap-10">
              {[0, 1].map((copy) => (
                <span
                  key={copy}
                  className="flex shrink-0 items-baseline gap-8 whitespace-nowrap md:gap-10"
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {marqueeWords.map((word, index) => (
                    <span
                      key={`${copy}-${index}`}
                      className={
                        index % 2 === 0 ? "text-[#c8c8c8]" : "text-foreground"
                      }
                    >
                      {word}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 md:px-10 lg:px-14">
            {related.map((item) => (
              <ProjectCard key={item.id} project={item} variant="featured" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
