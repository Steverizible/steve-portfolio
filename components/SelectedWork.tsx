import { projects, selectedWork } from "@/lib/site-data";
import ProjectCard from "@/components/ProjectCard";
import RevealHeading from "@/components/RevealHeading";

export default function SelectedWork() {
  const items = selectedWork.projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="border-b border-border bg-white">
      <div className="w-full px-6 py-16 md:px-10 md:py-24 lg:px-14">
        <div className="text-center">
          <p className="text-sm font-medium text-muted">{selectedWork.periodLabel}</p>
          <RevealHeading className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
            {selectedWork.title}
          </RevealHeading>
          <p className="mt-6 text-base leading-relaxed text-muted lg:px-32">
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
