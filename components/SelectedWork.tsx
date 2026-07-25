import { projects, selectedWork } from "@/lib/site-data";
import ProjectCard from "@/components/ProjectCard";
import RevealHeading from "@/components/RevealHeading";

export default function SelectedWork() {
  const items = selectedWork.projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const marqueeText = `${selectedWork.moreWorksMarquee} ${selectedWork.moreWorksMarquee}`;

  return (
    <section className="border-b border-border bg-white">
      <div className="w-full px-6 py-16 text-center md:px-10 md:py-24 lg:px-14">
        <p className="text-sm font-medium text-muted">{selectedWork.periodLabel}</p>
        <RevealHeading className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
          <span className="block">Selected</span>
          <span className="block">Works</span>
        </RevealHeading>
      </div>

      <div className="w-full overflow-hidden border-y border-border py-4">
        <div className="ticker-track flex w-max gap-8 px-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          <span className="shrink-0 whitespace-nowrap">{marqueeText}</span>
          <span className="shrink-0 whitespace-nowrap" aria-hidden="true">
            {marqueeText}
          </span>
        </div>
      </div>

      <div className="w-full px-6 py-14 md:px-10 md:py-16 lg:px-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} variant="selected" />
          ))}
        </div>
      </div>
    </section>
  );
}
