import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { featuredWork, projects } from "@/lib/site-data";

export default function FeaturedWork() {
  const items = featuredWork.projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="border-b border-border" id="work">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
              {featuredWork.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {featuredWork.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} variant="featured" />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={featuredWork.moreProjectsCta.href}
            className="rounded-full bg-foreground px-8 py-3 text-xs font-semibold uppercase tracking-wide text-background transition-opacity hover:opacity-90"
          >
            {featuredWork.moreProjectsCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
