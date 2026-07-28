"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import ImpactAtAGlance from "@/components/ImpactAtAGlance";
import ZoomMedia from "@/components/ZoomMedia";
import type { Project } from "@/lib/site-data";
import { projectImages } from "@/lib/images";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "selected";
};

export default function ProjectCard({
  project,
  variant = "selected",
}: ProjectCardProps) {
  const imageSrc = project.imageSrc ?? projectImages[project.id];
  const isWide = variant === "featured" && Boolean(project.featuredWide);
  const imageHeight = isWide
    ? "h-[300px] sm:h-[380px] lg:h-[460px]"
    : variant === "featured"
      ? "h-[280px] md:h-[360px]"
      : "h-[240px] md:h-[300px]";

  const label =
    variant === "selected" && project.selectedLabel
      ? project.selectedLabel
      : project.label;
  const name =
    variant === "selected" && project.selectedName
      ? project.selectedName
      : project.name;
  const year =
    variant === "selected" && project.selectedYear
      ? project.selectedYear
      : project.year;

  const impact = project.impactAtAGlance;
  const showFullImpact = variant === "featured" && Boolean(impact?.items.length);
  const showCompactImpact =
    variant === "selected" && Boolean(impact?.items.length);
  const showDescription = Boolean(project.cardDescription);
  const quickGlance =
    variant === "featured" ? project.quickGlance?.slice(0, 4) : undefined;
  const showQuickGlance = Boolean(quickGlance?.length);
  const showBody =
    showDescription || showQuickGlance || showFullImpact || showCompactImpact;

  return (
    <Link
      href={project.href}
      data-cursor-view
      transitionTypes={["nav-forward"]}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-[box-shadow,opacity] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-md"
    >
      <ZoomMedia
        className={`relative ${imageHeight} w-full overflow-hidden bg-[#ddd]`}
      >
        <div className="relative h-full w-full">
          {imageSrc ? (
            <ViewTransition
              name={`project-image-${project.id}`}
              share="project-morph"
            >
              <Image
                src={imageSrc}
                alt={`${label} — ${name}`}
                fill
                className="object-cover"
                sizes={isWide ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
              />
            </ViewTransition>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted">
              {label}
            </div>
          )}
        </div>
      </ZoomMedia>
      <div className="bg-foreground text-background">
        <div className="flex items-end justify-between gap-4 px-4 py-4 md:px-5 md:py-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide md:text-base">
              {label}
            </p>
            <p className="mt-1 text-xs text-white/70 md:text-sm">{name}</p>
            {project.evidenceLabel && (
              <p className="mt-2 text-[11px] font-medium uppercase tracking-wide text-white/55 md:text-xs">
                {project.evidenceLabel}
              </p>
            )}
          </div>
          <span className="shrink-0 rounded-full border border-white/30 px-3 py-1 text-xs font-medium">
            {year}
          </span>
        </div>

        {showBody && (
          <div className="border-t border-white/10 px-4 pb-5 pt-4 md:px-5 md:pb-6 md:pt-5">
            {showDescription && (
              <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                {project.cardDescription}
              </p>
            )}

            {showQuickGlance && quickGlance && (
              <ul
                className={`flex flex-wrap gap-2 ${showDescription ? "mt-4" : ""}`}
                aria-label="Capabilities"
              >
                {quickGlance.map((cap) => (
                  <li
                    key={cap}
                    className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white/80 md:text-xs"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            )}

            {showFullImpact && impact && (
              <ImpactAtAGlance
                impact={impact}
                variant="card"
                tone="dark"
                className={showDescription || showQuickGlance ? "mt-6" : undefined}
              />
            )}

            {showCompactImpact && impact && (
              <ImpactAtAGlance
                impact={impact}
                variant="compact"
                tone="dark"
                className={showDescription ? "mt-2" : undefined}
              />
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
