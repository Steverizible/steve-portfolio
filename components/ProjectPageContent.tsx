"use client";

import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import PageChrome from "@/components/PageChrome";
import ProjectCard from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import ZoomMedia from "@/components/ZoomMedia";
import type { Project } from "@/lib/site-data";
import { projectImages } from "@/lib/images";
import { contact, projects, siteMeta } from "@/lib/site-data";

type ProjectPageContentProps = {
  project: Project;
};

function CaseImage({
  src,
  alt,
  priority = false,
  viewTransitionName,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  viewTransitionName?: string;
  className?: string;
}) {
  const isGif = src.toLowerCase().endsWith(".gif");
  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="100vw"
      priority={priority}
      unoptimized={isGif}
    />
  );

  return (
    <ZoomMedia
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card ${className}`}
    >
      <div className="relative h-full w-full">
        {viewTransitionName ? (
          <ViewTransition name={viewTransitionName} share="project-morph">
            {image}
          </ViewTransition>
        ) : (
          image
        )}
      </div>
    </ZoomMedia>
  );
}

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
  const imageSrc = project.imageSrc ?? projectImages[project.id];
  const caseStudy = project.caseStudy;
  const relatedProjects =
    caseStudy?.relatedProjectIds
      ?.map((id) => projects.find((item) => item.id === id))
      .filter((item): item is Project => Boolean(item)) ?? [];

  const marquee = "More Works More Works More Works More Works";

  return (
    <div className="animate-page-in w-full bg-white">
      <PageChrome />

      <div className="w-full px-6 py-12 md:px-10 md:py-16 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(220px,0.55fr)] lg:items-start lg:gap-16 xl:gap-24">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
              {caseStudy?.title ?? project.label}
            </h1>

            {caseStudy?.intro && (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:mt-8 md:text-lg">
                {caseStudy.intro}
              </p>
            )}
          </div>

          {caseStudy && (
            <dl className="divide-y divide-border border-y border-border text-sm uppercase tracking-wide">
              <div className="flex flex-col gap-1 py-4">
                <dt className="text-xs text-muted">Client</dt>
                <dd className="font-bold text-foreground">{caseStudy.client}</dd>
              </div>
              <div className="flex flex-col gap-1 py-4">
                <dt className="text-xs text-muted">Year</dt>
                <dd className="font-bold text-foreground">{caseStudy.year}</dd>
              </div>
              <div className="flex flex-col gap-1 py-4">
                <dt className="text-xs text-muted">Category</dt>
                <dd className="font-bold text-foreground">{caseStudy.category}</dd>
              </div>
            </dl>
          )}
        </div>

        {imageSrc && (
          <CaseImage
            src={imageSrc}
            alt={project.name}
            priority
            viewTransitionName={`project-image-${project.id}`}
            className="mt-12 md:mt-14"
          />
        )}

        {caseStudy?.sections.map((section, index) => (
          <RevealOnScroll
            key={section.id}
            delayMs={index * 60}
            className="mt-16 border-t border-border pt-12"
          >
            <div className="grid gap-6 lg:grid-cols-[200px_1fr] lg:gap-16">
              <h2 className="text-xl font-bold uppercase tracking-tight md:text-2xl">
                {section.heading}
              </h2>
              <p className="whitespace-pre-line text-base leading-relaxed text-muted md:text-lg">
                {section.body}
              </p>
            </div>
            {section.imageSrc && (
              <CaseImage
                src={section.imageSrc}
                alt={section.heading}
                className="mt-8 md:mt-10"
              />
            )}
          </RevealOnScroll>
        ))}

        {caseStudy?.externalLink && (
          <div className="mt-12">
            <Link
              href={caseStudy.externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium btn-outline inline-flex"
            >
              {caseStudy.externalLink.label}
            </Link>
          </div>
        )}

        {!caseStudy && (
          <p className="mt-8 text-base leading-relaxed text-muted">
            Full case study coming soon. This project is part of the Steve Watts portfolio archive.
          </p>
        )}
      </div>

      {relatedProjects.length > 0 && (
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
            <div className="ticker-track flex w-max gap-10 px-4 text-[clamp(2.5rem,8vw,6.5rem)] font-bold uppercase leading-none tracking-tight text-foreground">
              <span className="shrink-0 whitespace-nowrap">{marquee}</span>
              <span className="shrink-0 whitespace-nowrap" aria-hidden="true">
                {marquee}
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-6 px-6 sm:grid-cols-2 md:px-10 lg:px-14">
            {relatedProjects.map((related) => (
              <ProjectCard key={related.id} project={related} variant="featured" />
            ))}
          </div>
        </div>
      )}

      <div className="flex w-full items-center justify-between border-t border-border px-6 py-6 text-xs font-medium uppercase tracking-wide text-muted md:px-10 lg:px-14">
        <p>{siteMeta.copyright}</p>
        <Link href="#top" className="transition-opacity hover:opacity-60">
          {contact.backToTopLabel}
        </Link>
      </div>
    </div>
  );
}
