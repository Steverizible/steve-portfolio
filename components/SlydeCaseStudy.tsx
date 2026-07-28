"use client";

import Image from "next/image";
import { ViewTransition } from "react";
import EvidenceStatusBadge from "@/components/EvidenceStatusBadge";
import ImpactAtAGlance from "@/components/ImpactAtAGlance";
import ImplementationStatus from "@/components/ImplementationStatus";
import MetricCard from "@/components/MetricCard";
import PageChrome from "@/components/PageChrome";
import ProjectCard from "@/components/ProjectCard";
import ProofGallery from "@/components/ProofGallery";
import RevealOnScroll from "@/components/RevealOnScroll";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import ZoomMedia from "@/components/ZoomMedia";
import { slydeEvidenceGallery } from "@/lib/portfolio-evidence";
import { projects, type Project } from "@/lib/site-data";
import { slydeCaseStudy as data } from "@/lib/slyde-case-study";

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

export default function SlydeCaseStudy({ project }: { project: Project }) {
  const related = data.relatedProjectIds
    .map((id) => projects.find((item) => item.id === id))
    .filter((item): item is Project => Boolean(item));

  const marqueeWords = Array.from({ length: 8 }, () => "More Works");

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
            <p className="mt-6 max-w-2xl rounded-2xl border border-border bg-card p-4 text-sm leading-relaxed text-muted md:p-5">
              {data.hero.methodologyNote}
            </p>
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

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.opportunity.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.opportunity.body} />
            </div>
          </div>
          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 md:mt-12 md:p-12">
            <p className="text-xl font-bold uppercase leading-snug tracking-tight text-foreground md:text-2xl lg:text-3xl">
              {data.opportunity.featuredQuestion}
            </p>
          </blockquote>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.role.heading}</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {data.role.intro}
            </p>
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

        <RevealOnScroll as="section" className={SECTION}>
          <ImpactAtAGlance
            impact={data.atAGlance}
            variant="section"
            tone="light"
          />
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.founderJourney.heading}</h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {data.founderJourney.loopNote}
            </p>
          </div>
          <ZoomMedia className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card md:mt-10">
            <div className="relative h-full w-full">
              <Image
                src={data.founderJourney.image.src}
                alt={data.founderJourney.image.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ZoomMedia>
          <WorkflowDiagram
            className="mt-10"
            loop
            loopLabel="Reconnects to product and customer learning"
            ariaLabel="Slyde founder journey stages"
            stages={data.founderJourney.stages.map((stage, index) => ({
              id: stage.id,
              number: index + 1,
              title: stage.title,
              description: stage.description,
            }))}
          />
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.productDevelopment.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.productDevelopment.body} />
            </div>
          </div>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {data.productDevelopment.stages.map((stage, index) => (
              <li
                key={stage}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block text-sm font-semibold uppercase tracking-tight text-foreground">
                  {stage}
                </span>
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.manufacturing.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.manufacturing.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {data.manufacturing.blocks.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <h3 className="text-lg font-bold uppercase tracking-tight">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.categoryEducation.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.categoryEducation.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {data.categoryEducation.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 md:p-10">
            <p className="text-lg font-bold uppercase leading-snug tracking-tight text-foreground md:text-xl">
              {data.categoryEducation.principle}
            </p>
          </blockquote>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.brandBuilding.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.brandBuilding.body} />
            </div>
          </div>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {data.brandBuilding.messaging.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 py-5 md:grid-cols-[minmax(0,200px)_1fr] md:gap-8"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {row.label}
                </dt>
                <dd className="text-base font-medium text-foreground md:text-lg">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.creativeDirection.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.creativeDirection.body} />
            </div>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.creativeDirection.areas.map((area) => (
              <li
                key={area}
                className="rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium text-foreground"
              >
                {area}
              </li>
            ))}
          </ul>
          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 md:p-10">
            <p className="text-lg font-bold uppercase leading-snug tracking-tight text-foreground md:text-xl">
              {data.creativeDirection.principle}
            </p>
          </blockquote>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.ecommerce.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.ecommerce.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.ecommerce.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.demand.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.demand.body} />
            </div>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {data.demand.channels.map((channel) => (
              <li
                key={channel}
                className="rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium text-foreground"
              >
                {channel}
              </li>
            ))}
          </ul>
          <ol
            aria-label="Demand-generation learning loop"
            className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-3"
          >
            {data.demand.learningLoop.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground">
                  {step}
                </span>
                {index < data.demand.learningLoop.length - 1 && (
                  <span aria-hidden="true" className="text-muted">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.investment.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.investment.body} />
            </div>
          </div>
          <div className="mt-10 max-w-xl">
            <MetricCard
              value={data.investment.metric.value}
              label={data.investment.metric.label}
              supportingNote={data.investment.metric.supportingNote}
              methodologyNote={data.investment.methodologyNote}
            />
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {data.investment.context}
          </p>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.leadership.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.leadership.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.leadership.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.partnerships.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.partnerships.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {data.partnerships.areas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <h3 className="text-lg font-bold uppercase tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {area.body}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.collaborationGrowth.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.collaborationGrowth.body} />
            </div>
          </div>
          <div className="mt-8">
            <EvidenceStatusBadge status="temporary" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {data.collaborationGrowth.statusLabel}
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {data.collaborationGrowth.metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                supportingNote={metric.supportingNote}
              />
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted md:p-6 md:text-base">
            {data.collaborationGrowth.methodologyNote}
          </p>
          <ImplementationStatus
            className="mt-10"
            items={data.collaborationGrowth.implementationItems}
          />
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.operations.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.operations.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.operations.blocks.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-base font-bold uppercase tracking-tight">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.productEvolution.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.productEvolution.body} />
            </div>
          </div>
          <ol
            aria-label="Product evolution loop"
            className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-3"
          >
            {data.productEvolution.loop.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground">
                  {step}
                </span>
                {index < data.productEvolution.loop.length - 1 && (
                  <span aria-hidden="true" className="text-muted">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {data.productEvolution.forms.map((form) => (
              <li
                key={form}
                className="rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium text-foreground"
              >
                {form}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.lessons.heading}</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.lessons.items.map((lesson, index) => (
              <li
                key={lesson.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-bold uppercase tracking-tight">
                  {lesson.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {lesson.body}
                </p>
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION} id="evidence">
          <ProofGallery section={slydeEvidenceGallery} />
        </RevealOnScroll>

        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.result.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.result.body} />
              <p className="font-semibold text-foreground">
                {data.result.closing}
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </article>

      {related.length > 0 && (
        <div className="mt-8 w-full bg-white pb-16 md:mt-12 md:pb-20">
          <div className="px-6 md:px-10 lg:px-14">
            <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">
              Related Work
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
              <div key={item.id}>
                <ProjectCard project={item} variant="featured" />
                {data.relatedNotes[item.id] && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {data.relatedNotes[item.id]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
