import { projects, selectedWork } from "@/lib/site-data";
import ProjectCard from "@/components/ProjectCard";

export default function SelectedWork() {
  const items = selectedWork.projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="text-center">
          <p className="text-sm font-medium text-muted">{selectedWork.periodLabel}</p>
          <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
            {selectedWork.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
            {selectedWork.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} variant="selected" />
          ))}
        </div>
      </div>
    </section>
  );
}
