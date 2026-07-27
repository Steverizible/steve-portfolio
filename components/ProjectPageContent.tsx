"use client";

import Image from "next/image";
import { ViewTransition } from "react";
import Button from "@/components/Button";
import PageChrome from "@/components/PageChrome";
import ProjectCard from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import type { Project } from "@/lib/site-data";
import { projectImages } from "@/lib/images";
import { projects } from "@/lib/site-data";

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
      <PageChrome backHref="/projects" backLabel="Back to works" />

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
          <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-card">
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
            <p className="whitespace-pre-line text-base leading-relaxed text-muted md:text-lg">
              {section.body}
            </p>
          </RevealOnScroll>
        ))}

        {caseStudy?.externalLink && (
          <div className="mt-12">
            <Button href={caseStudy.externalLink.href} variant="outline">
              {caseStudy.externalLink.label}
            </Button>
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

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Button href="/projects" variant="outline">
            View all projects
          </Button>
          <Button href="/#work" variant="solid">
            Back to work
          </Button>
        </div>
      </div>
    </div>
  );
}
