"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import PageChrome from "@/components/PageChrome";
import ProjectCard from "@/components/ProjectCard";
import ProofGallery from "@/components/ProofGallery";
import RevealOnScroll from "@/components/RevealOnScroll";
import ZoomMedia from "@/components/ZoomMedia";
import { fishewearCaseStudy as data } from "@/lib/fishewear-case-study";
import { fishewearEvidenceGallery } from "@/lib/portfolio-evidence";
import { projects, type Project } from "@/lib/site-data";

const SECTION = "mt-16 border-t border-border pt-12 md:mt-20 md:pt-16";
const HEADING = "text-2xl font-bold uppercase tracking-tight md:text-3xl lg:text-4xl";
const PROSE = "space-y-5 text-base leading-relaxed text-muted md:text-lg";

function Paragraphs({ items }: { items: readonly string[] }) {
  return (
    <>
      {items.map((text) => (
        <p key={text.slice(0, 32)}>{text}</p>
      ))}
    </>
  );
}

function SequenceFlow({ steps }: { steps: readonly string[] }) {
  return (
    <ol
      aria-label="Connected campaign sequence"
      className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3"
    >
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground">
            {step}
          </span>
          {index < steps.length - 1 && (
            <span aria-hidden="true" className="text-muted">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function FisheWearCaseStudy({ project }: { project: Project }) {
  const related = data.relatedProjectIds
    .map((id) => projects.find((item) => item.id === id))
    .filter((item): item is Project => Boolean(item));

  const marqueeWords = Array.from({ length: 8 }, () => "More Works");
  const lifecycleMax = Math.max(...data.lifecycle.results.map((r) => r.weight));

  return (
    <div className="animate-page-in w-full bg-white">
      <PageChrome />

      <article className="w-full px-6 py-12 md:px-10 md:py-16 lg:px-14">
        {/* Section 1 — Case-study hero */}
        <header className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(220px,0.55fr)] lg:items-start lg:gap-16 xl:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              {data.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
              {data.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:mt-8 md:text-lg">
              {data.hero.intro}
            </p>
          </div>

          <dl className="divide-y divide-border border-y border-border text-sm uppercase tracking-wide">
            {data.hero.meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 py-4">
                <dt className="text-xs text-muted">{item.label}</dt>
                <dd className="font-bold text-foreground">{item.value}</dd>
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

        {/* Section 2 — Key results */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.results.heading}</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {data.results.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-border bg-card p-5 md:p-8"
              >
                <p className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted md:text-base">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted">
            {data.results.methodologyNote}
          </p>
        </RevealOnScroll>

        {/* Section 3 — Introduction */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.intro.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.intro.body} />
            </div>
          </div>
        </RevealOnScroll>

        {/* Section 4 — The challenge */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.challenge.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.challenge.body} />
            </div>
          </div>
          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 md:mt-12 md:p-12">
            <p className="text-xl font-bold uppercase leading-snug tracking-tight text-foreground md:text-2xl lg:text-3xl">
              {data.challenge.featuredQuestion}
            </p>
          </blockquote>
        </RevealOnScroll>

        {/* Section 5 — Connected DTC framework */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.framework.heading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {data.framework.blocks.map((block) => (
              <div
                key={block.id}
                className={`rounded-2xl border border-border bg-card p-6 md:p-8 ${
                  block.sequence ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-lg font-bold uppercase tracking-tight md:text-xl">
                  {block.title}
                </h3>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted md:text-base">
                  <Paragraphs items={block.body} />
                </div>
                {block.sequence && <SequenceFlow steps={block.sequence} />}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Section 6 — Phase 2 */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.phase2.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.phase2.body} />
            </div>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.phase2.items.map((item) => (
              <li
                key={item.slice(0, 32)}
                className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* Section 7 — Lifecycle revenue */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.lifecycle.heading}</h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {data.lifecycle.intro}
          </p>
          <ul className="mt-10 space-y-4">
            {data.lifecycle.results.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-border bg-card p-5 md:p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm font-semibold uppercase tracking-wide text-foreground md:text-base">
                    {item.label}
                  </span>
                  <span className="text-xl font-bold tracking-tight md:text-2xl">
                    {item.value}
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  className="mt-3 h-2 w-full overflow-hidden rounded-full bg-border"
                >
                  <div
                    className="h-full rounded-full bg-foreground"
                    style={{ width: `${(item.weight / lifecycleMax) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* Section 8 — AI operating system */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.ai.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.ai.body} />
            </div>
          </div>
          <ol
            aria-label="AI-assisted operating workflow"
            className="mx-auto mt-10 flex max-w-md flex-col items-stretch"
          >
            {data.ai.workflow.map((stage, index) => (
              <li key={stage} className="flex flex-col items-center">
                <div className="w-full rounded-xl border border-border bg-card px-5 py-4 text-center text-sm font-semibold uppercase tracking-wide text-foreground">
                  {stage}
                </div>
                {index < data.ai.workflow.length - 1 && (
                  <span aria-hidden="true" className="my-2 text-lg leading-none text-muted">
                    ↓
                  </span>
                )}
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        {/* Section 9 — What AI did not replace */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="rounded-2xl bg-card p-8 md:p-12">
            <h2 className="text-xl font-bold uppercase tracking-tight md:text-2xl">
              {data.humanJudgment.heading}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {data.humanJudgment.body}
            </p>
          </div>
        </RevealOnScroll>

        {/* Evidence gallery */}
        <RevealOnScroll as="section" className={SECTION} id="evidence">
          <ProofGallery section={fishewearEvidenceGallery} />
        </RevealOnScroll>

        {/* Section 10 — The result */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.result.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.result.body} />
            </div>
          </div>
          <div className="mt-10">
            <Link
              href={data.result.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium btn-solid inline-flex"
            >
              {data.result.cta.label}
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </Link>
          </div>
        </RevealOnScroll>
      </article>

      {/* More Works — related projects */}
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
