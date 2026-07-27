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

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
  const imageSrc = project.imageSrc ?? projectImages[project.id];
  const caseStudy = project.caseStudy;
  const relatedProjects =
    caseStudy?.relatedProjectIds
      ?.map((id) => projects.find((item) => item.id === id))
      .filter((item): item is Project => Boolean(item)) ?? [];

  return (
    <div className="animate-page-in w-full">
      <PageChrome />

      <div className="w-full px-6 py-12 md:px-10 md:py-16 lg:px-14">
        <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
          {caseStudy?.title ?? project.label}
        </h1>

        {caseStudy?.intro && (
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {caseStudy.intro}
          </p>
        )}

        {caseStudy && (
          <dl className="mt-10 grid gap-4 border-y border-border py-6 text-sm uppercase tracking-wide sm:grid-cols-3">
            <div>
              <dt className="text-muted">Client</dt>
              <dd className="mt-1 font-semibold">{caseStudy.client}</dd>
            </div>
            <div>
              <dt className="text-muted">Year</dt>
              <dd className="mt-1 font-semibold">{caseStudy.year}</dd>
            </div>
            <div>
              <dt className="text-muted">Category</dt>
              <dd className="mt-1 font-semibold">{caseStudy.category}</dd>
            </div>
          </dl>
        )}

        {imageSrc && (
          <ZoomMedia
            className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card"
            enterScale={1.14}
            exitScale={1}
          >
            <div className="relative h-full w-full">
              <ViewTransition name={`project-image-${project.id}`} share="project-morph">
                <Image
                  src={imageSrc}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </ViewTransition>
            </div>
          </ZoomMedia>
        )}

        {caseStudy?.sections.map((section, index) => (
          <RevealOnScroll
            key={section.id}
            delayMs={index * 60}
            className="mt-16 grid gap-6 border-t border-border pt-12 lg:grid-cols-[200px_1fr] lg:gap-16"
          >
            <h2 className="text-xl font-bold uppercase tracking-tight md:text-2xl">
              {section.heading}
            </h2>
            <div>
              <p className="whitespace-pre-line text-base leading-relaxed text-muted md:text-lg">
                {section.body}
              </p>
              {section.imageSrc && (
                <ZoomMedia
                  className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-card"
                  enterScale={1.12}
                  exitScale={1}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={section.imageSrc}
                      alt={section.heading}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </div>
                </ZoomMedia>
              )}
            </div>
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

        {relatedProjects.length > 0 && (
          <div className="mt-20 border-t border-border pt-16">
            <div className="overflow-hidden">
              <div className="ticker-track flex w-max gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                <span className="shrink-0 whitespace-nowrap">
                  More Works More Works More Works
                </span>
                <span className="shrink-0 whitespace-nowrap" aria-hidden="true">
                  More Works More Works More Works
                </span>
              </div>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {relatedProjects.map((related) => (
                <ProjectCard key={related.id} project={related} variant="featured" />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex w-full items-center justify-between border-t border-border px-6 py-6 text-xs font-medium uppercase tracking-wide text-muted md:px-10 lg:px-14">
        <p>{siteMeta.copyright}</p>
        <Link href="#top" className="transition-opacity hover:opacity-60">
          {contact.backToTopLabel}
        </Link>
      </div>
    </div>
  );
}
