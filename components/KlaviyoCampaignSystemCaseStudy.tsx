"use client";

import Image from "next/image";
import { ViewTransition } from "react";
import PageChrome from "@/components/PageChrome";
import ProjectCard from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import ZoomMedia from "@/components/ZoomMedia";
import { klaviyoCampaignSystem as data } from "@/lib/klaviyo-campaign-system";
import { projects, type Project } from "@/lib/site-data";
import type { SystemCaseStudy } from "@/lib/systems-data";

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

function ChipList({
  items,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  items: readonly string[];
  columns?: string;
}) {
  return (
    <ul className={`mt-8 grid gap-3 ${columns}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-xl border border-border bg-card px-4 py-4 text-sm font-medium leading-snug text-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function KlaviyoCampaignSystemCaseStudy({
  system,
}: {
  system: SystemCaseStudy;
}) {
  const related = data.related.projectIds
    .map((id) => projects.find((item) => item.id === id))
    .filter((item): item is Project => Boolean(item));

  const marqueeWords = Array.from({ length: 8 }, () => "Related Work");

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
            <p className="mt-6 inline-flex max-w-2xl rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground md:text-sm">
              {data.hero.humanNote}
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
              name={`system-image-${system.id}`}
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

        {/* 1 — Problem */}
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

        {/* 2 — Full system */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.fullSystem.heading}</h2>
            <div className={PROSE}>
              <p>{data.fullSystem.intro}</p>
              <p>{data.fullSystem.loopNote}</p>
            </div>
          </div>
          <ZoomMedia className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card md:mt-10">
            <div className="relative h-full w-full">
              <Image
                src={data.fullSystem.image.src}
                alt={data.fullSystem.image.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ZoomMedia>
          <ol
            aria-label="Campaign operating system stages"
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {data.fullSystem.stages.map((stage, index) => (
              <li
                key={stage.label}
                className={`relative flex flex-col rounded-2xl border bg-card p-5 ${
                  index === data.fullSystem.stages.length - 1
                    ? "border-foreground/40"
                    : "border-border"
                }`}
              >
                <span className="text-xs font-bold tracking-[0.2em] text-muted">
                  {stage.number}
                </span>
                <span className="mt-3 text-sm font-semibold leading-snug text-foreground md:text-base">
                  {stage.label}
                </span>
                {index === data.fullSystem.stages.length - 1 && (
                  <span className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">
                    Loops back to strategy
                  </span>
                )}
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        {/* 3 — Human brief */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.humanBrief.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.humanBrief.body} />
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              {data.humanBrief.exampleLabel}
            </p>
            <p className="mt-5 text-base leading-relaxed text-foreground md:text-lg">
              {data.humanBrief.brief.summary}
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {data.humanBrief.brief.fields.map((field) => (
                <div
                  key={field.label}
                  className="rounded-xl border border-border bg-background p-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {field.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-snug text-foreground">
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Key requirements
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground md:text-base">
                {data.humanBrief.brief.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>

        {/* 4 — Klaviyo */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.klaviyoLayer.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.klaviyoLayer.body} />
            </div>
          </div>
          <ChipList items={data.klaviyoLayer.reviewed} />
          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 md:p-10">
            <p className="text-lg font-bold uppercase leading-snug tracking-tight text-foreground md:text-xl">
              {data.klaviyoLayer.principle}
            </p>
          </blockquote>
        </RevealOnScroll>

        {/* 5 — Shopify */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.shopifyLayer.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.shopifyLayer.body} />
            </div>
          </div>
          <ChipList items={data.shopifyLayer.checks} />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {data.shopifyLayer.rules.map((rule) => (
              <li
                key={rule}
                className="rounded-2xl border border-foreground/30 bg-card p-6 text-sm font-semibold leading-snug text-foreground md:text-base"
              >
                {rule}
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {/* 6 — Decision layer */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.decisionLayer.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.decisionLayer.body} />
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {data.decisionLayer.cards.map((card) => (
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

        {/* 7 — Campaign architecture */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.campaignArchitecture.heading}</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {data.campaignArchitecture.phases.map((phase, index) => (
              <li
                key={phase.name}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-bold uppercase tracking-tight">
                  {phase.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Purpose: {phase.purpose}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 rounded-2xl border border-dashed border-border bg-card p-6 text-sm font-semibold leading-relaxed text-foreground md:text-base">
            {data.campaignArchitecture.extensionNote}
          </p>
        </RevealOnScroll>

        {/* 8 — Airtable */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.airtable.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.airtable.body} />
              <p>{data.airtable.operatingNote}</p>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="border-b border-border bg-background px-5 py-4 md:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Illustrative Airtable campaign record
              </p>
              <p className="mt-3 break-words text-sm font-bold text-foreground md:text-base">
                Naming pattern: {data.airtable.namingPattern}
              </p>
              <p className="mt-2 break-words text-sm text-muted md:text-base">
                Example: {data.airtable.namingExample}
              </p>
            </div>
            <ul className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
              {data.airtable.fields.map((field) => (
                <li
                  key={field}
                  className="bg-card px-5 py-4 text-sm font-medium text-foreground"
                >
                  <span className="block text-[11px] uppercase tracking-wide text-muted">
                    Field
                  </span>
                  <span className="mt-1 block">{field}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        {/* 9 — Airtable to Figma */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.airtableToFigma.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.airtableToFigma.body} />
            </div>
          </div>
          <ol
            aria-label="Airtable to Figma production flow"
            className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3"
          >
            {data.airtableToFigma.flow.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block text-sm font-semibold text-foreground md:text-base">
                  {step}
                </span>
                {index < data.airtableToFigma.flow.length - 1 && (
                  <span className="mt-3 block text-xs uppercase tracking-wide text-muted">
                    Then ↓
                  </span>
                )}
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Figma brief can include
            </p>
            <ChipList items={data.airtableToFigma.briefIncludes} />
          </div>
        </RevealOnScroll>

        {/* 10 — Two creative paths */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.creativePaths.heading}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {data.creativePaths.paths.map((path) => (
              <div
                key={path.title}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <h3 className="text-xl font-bold uppercase tracking-tight">
                  {path.title}
                </h3>
                <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted md:text-base">
                  {path.body}
                </p>
                {path.note && (
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted">
                    {path.note}
                  </p>
                )}
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {path.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-2xl border border-foreground/30 bg-card p-6 text-sm font-semibold leading-relaxed text-foreground md:text-base">
            {data.creativePaths.statement}
          </p>
        </RevealOnScroll>

        {/* 11 — Wireframe example */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.wireframeExample.heading}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(240px,0.7fr)]">
            <div className="rounded-2xl border border-border bg-card p-5 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
                {data.wireframeExample.label}
              </p>
              <p className="mt-2 text-xs text-muted">{data.wireframeExample.note}</p>
              <div className="mt-6 space-y-3">
                {data.wireframeExample.modules.map((module) => (
                  <div
                    key={module.label}
                    className={`rounded-xl border border-dashed border-border px-4 py-5 text-sm font-medium text-foreground ${
                      module.type === "hero"
                        ? "min-h-[120px] bg-[#ececec]"
                        : module.type === "cta"
                          ? "bg-foreground text-background"
                          : "bg-background"
                    }`}
                  >
                    {module.label}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted">
                {data.wireframeExample.mobileNote}
              </p>
            </div>
            <aside className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Structured source fields
              </p>
              <p className="mt-2 text-xs text-muted">Illustrative only.</p>
              <dl className="mt-6 space-y-4">
                {data.wireframeExample.sourceFields.map((field) => (
                  <div key={field.label}>
                    <dt className="text-xs uppercase tracking-wide text-muted">
                      {field.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-foreground">
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </RevealOnScroll>

        {/* 12 — Review */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.review.heading}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {data.review.guardrails.map((item) => (
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

        {/* 13 — Klaviyo draft */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.klaviyoDraft.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.klaviyoDraft.body} />
              <p>
                Naming convention:{" "}
                <span className="break-words font-semibold text-foreground">
                  {data.klaviyoDraft.namingPattern}
                </span>
              </p>
            </div>
          </div>
          <ChipList items={data.klaviyoDraft.components} />
          <p className="mt-8 rounded-2xl border border-foreground/30 bg-card p-6 text-sm font-semibold leading-relaxed text-foreground md:text-base">
            {data.klaviyoDraft.statement}
          </p>
        </RevealOnScroll>

        {/* 14 — Launch */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.launch.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.launch.body} />
            </div>
          </div>
          <ol
            aria-label="Human approval sequence"
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {data.launch.sequence.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block text-sm font-semibold text-foreground">
                  {step}
                </span>
                {index < data.launch.sequence.length - 1 && (
                  <span className="mt-3 block text-xs uppercase tracking-wide text-muted">
                    Then →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        {/* 15 — Performance */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.performance.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.performance.body} />
            </div>
          </div>
          <ChipList items={data.performance.reviewAreas} />
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="text-lg font-bold uppercase tracking-tight">
              {data.performance.anomaliesHeading}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              {data.performance.anomaliesBody}
            </p>
          </div>
        </RevealOnScroll>

        {/* 16 — Results to Airtable */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.resultsToAirtable.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.resultsToAirtable.body} />
            </div>
          </div>
          <ChipList items={data.resultsToAirtable.fields} />
          <blockquote className="mt-10 rounded-2xl border border-border bg-card p-8 md:p-10">
            <p className="text-lg font-bold uppercase leading-snug tracking-tight text-foreground md:text-xl">
              {data.resultsToAirtable.principle}
            </p>
          </blockquote>
        </RevealOnScroll>

        {/* 17 — Next campaign */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.nextCampaign.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.nextCampaign.body} />
            </div>
          </div>
          <ol
            aria-label="Closed learning loop"
            className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-3"
          >
            {data.nextCampaign.loop.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-border bg-card p-5 text-center"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-3 block text-sm font-bold uppercase tracking-tight text-foreground">
                  {step}
                </span>
                {index < data.nextCampaign.loop.length - 1 && (
                  <span className="mt-3 block text-xs text-muted" aria-hidden="true">
                    ↓
                  </span>
                )}
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Potential next actions
            </p>
            <ChipList items={data.nextCampaign.nextActions} />
          </div>
        </RevealOnScroll>

        {/* 18 — Example campaign */}
        <RevealOnScroll as="section" className={SECTION}>
          <h2 className={HEADING}>{data.exampleCampaign.heading}</h2>
          <p className="mt-4 inline-flex rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wide text-foreground">
            {data.exampleCampaign.label}
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Inputs
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted md:text-base">
                {data.exampleCampaign.inputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h3 className="text-sm font-bold uppercase tracking-wide">
                Outputs
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted md:text-base">
                {data.exampleCampaign.outputs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted md:text-base">
            {data.exampleCampaign.privacyNote}
          </p>
        </RevealOnScroll>

        {/* 19 — What it proves */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.proves.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.proves.body} />
              <ol className="list-decimal space-y-2 pl-5">
                {data.proves.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ol>
              <p className="font-semibold text-foreground">{data.proves.closing}</p>
            </div>
          </div>
        </RevealOnScroll>

        {/* 20 — Role */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.role.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.role.body} />
            </div>
          </div>
          <ChipList items={data.role.responsibilities} />
        </RevealOnScroll>

        {/* 21 — Implementation status */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.implementation.heading}</h2>
            <div className={PROSE}>
              <p>{data.implementation.intro}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {data.implementation.groups.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  {group.label}
                </p>
                {group.note && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {group.note}
                  </p>
                )}
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* 22 — Result */}
        <RevealOnScroll as="section" className={SECTION}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
            <h2 className={HEADING}>{data.result.heading}</h2>
            <div className={PROSE}>
              <Paragraphs items={data.result.body} />
            </div>
          </div>
        </RevealOnScroll>
      </article>

      {related.length > 0 && (
        <div className="mt-8 w-full bg-white pb-16 md:mt-12 md:pb-20">
          <div className="px-6 md:px-10 lg:px-14">
            <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">
              {data.related.label}
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
