"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import PageChrome from "@/components/PageChrome";
import ProjectCard from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import ZoomMedia from "@/components/ZoomMedia";
import { totelyCaseStudy as data } from "@/lib/totely-case-study";
import { projects, type Project } from "@/lib/site-data";

const SECTION = "mt-16 border-t border-border pt-12 md:mt-20 md:pt-16";
const HEADING = "text-2xl font-bold uppercase tracking-tight md:text-3xl lg:text-4xl";
const PROSE = "space-y-5 text-base leading-relaxed text-muted md:text-lg";

function Paragraphs({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((text) => (
        <p key={text.slice(0, 40)} className="whitespace-pre-line">
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
      className={`btn-premium ${variant === "solid" ? "btn-solid" : "btn-outline"} inline-flex`}
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
            <p className="mt-6 max-w-2xl whitespace-pre-line text-base leading-relaxed text-muted md:mt-8 md:text-lg">
              {data.hero.intro}
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

        <ZoomMedia className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card md:mt-14">
          <div className="relative h-full w-full">
            <ViewTransition name={`project-image-${project.id}`} share="project-morph">
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

        {/* Section 1 — The problem */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.problem.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.problem.body} />
            </div>
          </div>
          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 md:mt-12 md:p-12">
            <p className="text-xl font-bold uppercase leading-snug tracking-tight text-foreground md:text-2xl lg:text-3xl">
              {data.problem.featuredQuestion}
            </p>
          </blockquote>
        </RevealOnScroll>

        {/* Section 2 — Product insight / process */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.insight.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.insight.body} />
            </div>
          </div>
          <ol
            aria-label="Totely product loop"
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {data.insight.process.map((step, index) => (
              <li
                key={step.label}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-5"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-muted">
                  {step.number}
                </span>
                <span className="mt-3 text-sm font-semibold leading-snug text-foreground md:text-base">
                  {step.label}
                </span>
                {index < data.insight.process.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-muted xl:block"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        {/* Section 3 — Illustrative search example */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                {data.searchExample.label}
              </p>
              <p className="text-xs text-muted">{data.searchExample.note}</p>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-background p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                User question
              </p>
              <p className="mt-2 text-lg font-bold tracking-tight text-foreground md:text-xl">
                “{data.searchExample.question}”
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-background p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Example result
              </p>
              <p className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {data.searchExample.resultTitle}
              </p>
              <p className="mt-2 text-sm font-medium text-muted md:text-base">
                {data.searchExample.resultLocation}
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {data.searchExample.alsoContainsLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground md:text-base">
                  {data.searchExample.alsoContains}
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Section 4 — Product ecosystem */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.ecosystem.heading}</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {data.ecosystem.intro}
          </p>
          <ZoomMedia className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card md:mt-10">
            <div className="relative h-full w-full">
              <Image
                src={data.ecosystem.image.src}
                alt={data.ecosystem.image.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ZoomMedia>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {data.ecosystem.blocks.map((block) => (
              <div
                key={block.id}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <h3 className="text-lg font-bold uppercase tracking-tight md:text-xl">
                  {block.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Section 5 — My role */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.role.heading}</h2>
            <div className={PROSE}>
              <p>{data.role.intro}</p>
              <p>{data.role.contribution}</p>
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

        {/* Section 6 — Research */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.research.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.research.body} />
              <ul className="list-disc space-y-2 pl-5">
                {data.research.questions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
          </div>
          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 md:p-12">
            <p className="text-xl font-bold uppercase leading-snug tracking-tight text-foreground md:text-2xl">
              {data.research.pullQuote}
            </p>
          </blockquote>
        </RevealOnScroll>

        {/* Section 7 — Brand */}
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

        {/* Section 8 — AI workflow */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.ai.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.ai.body} />
            </div>
          </div>
          <ol
            aria-label="AI-assisted product-development workflow"
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            {data.ai.stages.map((stage) => (
              <li
                key={stage.title}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-xs font-bold tracking-[0.2em] text-muted">
                  {stage.number}
                </p>
                <h3 className="mt-3 text-base font-bold uppercase tracking-tight md:text-lg">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {stage.body}
                </p>
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        {/* Section 9 — Human judgment */}
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

        {/* Section 10 — Development */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.development.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.development.body} />
            </div>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.development.capabilities.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-card px-4 py-5 text-center text-sm font-bold uppercase tracking-wide text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* Section 11 — What was built */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.built.heading}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {data.built.items.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium text-foreground transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true" className="shrink-0 text-muted">
                      ↗
                    </span>
                  </Link>
                ) : (
                  <div className="flex h-full items-center rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium text-foreground">
                    {item.label}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* Section 12 — Current stage */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.currentStage.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.currentStage.body} />
            </div>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.currentStage.priorities.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-dashed border-border bg-card p-6 text-sm font-semibold uppercase tracking-wide text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* Section 13 — Result */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.result.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.result.body} />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {data.result.ctas.map((cta) => (
              <ExternalCta
                key={cta.href}
                href={cta.href}
                label={cta.label}
                variant={cta.label === "Open the App" ? "outline" : "solid"}
              />
            ))}
          </div>
        </RevealOnScroll>
      </article>

      {related.length > 0 && (
        <div className="mt-8 w-full bg-white pb-16 md:mt-12 md:pb-20">
          <div
            className="relative overflow-hidden py-6 md:py-8"
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
                      className={index % 2 === 0 ? "text-[#c8c8c8]" : "text-foreground"}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 px-6 sm:grid-cols-2 md:px-10 lg:px-14">
            {related.map((item) => (
              <ProjectCard key={item.id} project={item} variant="featured" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
