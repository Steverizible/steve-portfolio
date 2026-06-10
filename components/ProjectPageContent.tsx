"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/site-data";
import { projectImages } from "@/lib/images";
import { projects } from "@/lib/site-data";

type ProjectPageContentProps = {
  project: Project;
};

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
  const imageSrc = project.imageSrc ?? projectImages[project.id];
  const relatedProjects =
    project.caseStudy?.relatedProjectIds
      ?.map((id) => projects.find((p) => p.id === id))
      .filter((p): p is Project => Boolean(p)) ?? [];

  useEffect(() => {
    document.body.classList.remove("page-transition-out");
  }, []);

  return (
    <div className="animate-page-in w-full">
      <header className="w-full border-b border-border px-6 py-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#work"
            className="text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-60"
          >
            Back to work
          </Link>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            {project.category} · {project.year}
          </p>
        </div>
      </header>

      <div className="w-full px-6 py-12 md:px-10 md:py-16 lg:px-14">
        <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
          {project.caseStudy?.title ?? project.label}
        </h1>

        {project.caseStudy?.intro && (
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
            {project.caseStudy.intro}
          </p>
        )}

        {imageSrc && (
          <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-card">
            <Image
              src={imageSrc}
              alt={project.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        )}

        {project.caseStudy?.sections.map((section) => (
          <div
            key={section.id}
            className="mt-16 grid gap-6 border-t border-border pt-12 lg:grid-cols-[200px_1fr] lg:gap-16"
          >
            <h2 className="text-xl font-bold uppercase tracking-tight md:text-2xl">
              {section.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {section.body}
            </p>
          </div>
        ))}

        {!project.caseStudy && (
          <p className="mt-8 text-base leading-relaxed text-muted">
            Full case study coming soon. This project is part of the Steve Watts portfolio archive.
          </p>
        )}

        {relatedProjects.length > 0 && (
          <div className="mt-20 border-t border-border pt-16">
            <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">
              More Works
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {relatedProjects.map((related) => (
                <ProjectCard key={related.id} project={related} variant="featured" />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 flex justify-center">
          <Button href="/projects" variant="outline">
            View all projects
          </Button>
        </div>
      </div>
    </div>
  );
}
