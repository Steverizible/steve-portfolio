"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import ImpactAtAGlance from "@/components/ImpactAtAGlance";
import ZoomMedia from "@/components/ZoomMedia";
import type { SystemCaseStudy } from "@/lib/systems-data";

type SystemCardProps = {
  system: SystemCaseStudy;
};

const VISIBLE_TAG_COUNT = 5;

export default function SystemCard({ system }: SystemCardProps) {
  const visibleTags = system.tags.slice(0, VISIBLE_TAG_COUNT);
  const remaining = system.tags.length - visibleTags.length;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-[box-shadow,opacity] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-md">
      <Link
        href={system.href}
        data-cursor-view
        transitionTypes={["nav-forward"]}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        <ZoomMedia className="relative h-[280px] w-full overflow-hidden bg-[#ddd] md:h-[360px]">
          <div className="relative h-full w-full">
            {system.imageSrc ? (
              <ViewTransition
                name={`system-image-${system.id}`}
                share="project-morph"
              >
                <Image
                  src={system.imageSrc}
                  alt={`${system.shortTitle}: connected campaign workflow from data to creative drafts`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </ViewTransition>
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-muted">
                {system.shortTitle}
              </div>
            )}
          </div>
        </ZoomMedia>

        <div className="bg-foreground px-5 py-6 text-background md:px-6 md:py-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
              {system.eyebrow}
            </p>
            <span className="shrink-0 rounded-full border border-white/30 px-3 py-1 text-xs font-medium">
              {system.year}
            </span>
          </div>

          <h3 className="mt-4 text-xl font-bold uppercase leading-tight tracking-tight md:text-2xl lg:text-3xl">
            {system.title}
          </h3>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
            {system.description}
          </p>

          {system.impactAtAGlance && (
            <ImpactAtAGlance
              impact={system.impactAtAGlance}
              variant="card"
              tone="dark"
              className="mt-6"
            />
          )}

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="System tags">
            {visibleTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white/80 md:text-xs"
              >
                {tag}
              </li>
            ))}
            {remaining > 0 && (
              <li className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white/55 md:text-xs">
                +{remaining} more
              </li>
            )}
          </ul>

          {system.evidenceLabel && (
            <p className="mt-5 text-[11px] font-medium uppercase tracking-wide text-white/55 md:text-xs">
              {system.evidenceLabel}
            </p>
          )}

          <p className="mt-6 inline-flex items-center text-sm font-bold uppercase tracking-wide text-background underline-offset-4 group-hover:underline">
            View the System
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </p>
        </div>
      </Link>
    </article>
  );
}
