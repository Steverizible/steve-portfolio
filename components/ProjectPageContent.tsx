"use client";

import Image from "next/image";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import MoreWorksTicker from "@/components/MoreWorksTicker";
import ProjectCard from "@/components/ProjectCard";
import ProjectPageNav from "@/components/ProjectPageNav";
import type { Project } from "@/lib/site-data";
import { projectImages } from "@/lib/images";
import { projects } from "@/lib/site-data";

type ProjectPageContentProps = {
  project: Project;
};

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border py-4 first:pt-0 md:py-5">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted md:text-sm">
        {label}
      </span>
      <span className="text-right text-sm font-bold uppercase tracking-tight md:text-base">
        {value}
      </span>
    </div>
  );
}

function CaseStudyImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mt-8 w-full overflow-hidden rounded-lg border border-border bg-card md:mt-10">
      <div className="relative aspect-[16/10] w-full min-h-[240px] md:min-h-[320px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </div>
  );
}

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
  const caseStudy = project.caseStudy;
  const cardImageSrc = project.imageSrc ?? projectImages[project.id];
  const relatedProjects =
    caseStudy?.relatedProjectIds
      ?.map((id) => projects.find((p) => p.id === id))
      .filter((p): p is Project => Boolean(p)) ?? [];

  useEffect(() => {
    document.body.classList.remove("page-transition-out");
  }, []);

  if (!caseStudy) {
    return (
      <div className="animate-page-in w-full">
        <div id="top" />
        <ProjectPageNav />
        <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
          <h1 className="text-4xl font-bold uppercase tracking-tight md:text-6xl">
            {project.label}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
            Full case study coming soon.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  const heroLeft = caseStudy.heroImages?.left ?? cardImageSrc;
  const heroRight = caseStudy.heroImages?.right;

  return (
    <div className="animate-page-in w-full">
      <div id="top" />
      <ProjectPageNav />

      <div className="w-full px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-20">
        {/* Project intro */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-32">
          <div>
            <h1 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {caseStudy.intro}
            </p>
          </div>

          <div className="border-t border-border lg:pt-0">
            <MetaRow label="Client" value={caseStudy.client} />
            <MetaRow label="Year" value={caseStudy.year} />
            <MetaRow label="Category" value={caseStudy.category} />
          </div>
        </div>

        {/* Hero imagery */}
        {(heroLeft || heroRight) && (
          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
            {heroLeft && (
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card">
                <Image
                  src={heroLeft}
                  alt={`${caseStudy.title} — product photography`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            )}
            {heroRight && (
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card">
                <Image
                  src={heroRight}
                  alt={`${caseStudy.title} — packaging design`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            )}
          </div>
        )}

        {/* Content sections */}
        {caseStudy.sections.map((section) => (
          <div key={section.id} className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 xl:gap-32">
              <h2 className="text-xl font-bold uppercase tracking-tight md:text-2xl lg:text-3xl">
                {section.heading}
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {section.body}
              </p>
            </div>

            {section.imageSrc && (
              <CaseStudyImage
                src={section.imageSrc}
                alt={`${caseStudy.title} — ${section.heading}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* More Works */}
      {relatedProjects.length > 0 && (
        <section className="w-full">
          <MoreWorksTicker />
          <div className="w-full px-6 pb-16 md:px-10 md:pb-20 lg:px-14">
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedProjects.map((related) => (
                <ProjectCard key={related.id} project={related} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
