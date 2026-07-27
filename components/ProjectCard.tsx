"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import type { Project } from "@/lib/site-data";
import { projectImages } from "@/lib/images";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "selected";
};

export default function ProjectCard({ project, variant = "selected" }: ProjectCardProps) {
  const imageSrc = project.imageSrc ?? projectImages[project.id];
  const imageHeight =
    variant === "featured" ? "h-[280px] md:h-[360px]" : "h-[240px] md:h-[300px]";

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

  return (
    <Link
      href={project.href}
      data-cursor-view
      transitionTypes={["nav-forward"]}
      className="group block overflow-hidden rounded-xl border border-border bg-card transition-[transform,box-shadow,opacity] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-md"
    >
      <div className={`relative ${imageHeight} w-full overflow-hidden bg-[#ddd]`}>
        {imageSrc ? (
          <ViewTransition name={`project-image-${project.id}`} share="project-morph">
            <Image
              src={imageSrc}
              alt={`${label} — ${name}`}
              fill
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </ViewTransition>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">
            {label}
          </div>
        )}
      </div>
      <div className="flex items-end justify-between gap-4 bg-foreground px-4 py-4 text-background md:px-5 md:py-5">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide md:text-base">
            {label}
          </p>
          <p className="mt-1 text-xs text-white/70 md:text-sm">{name}</p>
        </div>
        <span className="shrink-0 rounded-full border border-white/30 px-3 py-1 text-xs font-medium">
          {year}
        </span>
      </div>
    </Link>
  );
}
