import ProjectCard from "@/components/ProjectCard";
import PageChrome from "@/components/PageChrome";
import { projects, selectedWork } from "@/lib/site-data";

export default function ProjectsPage() {
  const items = selectedWork.projectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const marqueeText = `${selectedWork.moreWorksMarquee} ${selectedWork.moreWorksMarquee}`;

  return (
    <main className="w-full min-h-screen bg-background animate-page-in">
      <PageChrome />

      <div className="w-full border-b border-border px-6 py-12 text-center md:px-10 md:py-16 lg:px-14">
        <p className="text-sm font-medium text-muted">{selectedWork.periodLabel}</p>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
          <span className="block">Selected</span>
          <span className="block">Works</span>
        </h1>
      </div>

      <div className="w-full overflow-hidden border-b border-border py-4">
        <div className="ticker-track flex w-max gap-8 px-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          <span className="shrink-0 whitespace-nowrap">{marqueeText}</span>
          <span className="shrink-0 whitespace-nowrap" aria-hidden="true">
            {marqueeText}
          </span>
        </div>
      </div>

      <div className="w-full px-6 py-12 md:px-10 md:py-16 lg:px-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} variant="selected" />
          ))}
        </div>
      </div>
    </main>
  );
}
