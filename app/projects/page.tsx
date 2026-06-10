import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen bg-background animate-page-in">
      <div className="w-full border-b border-border px-6 py-12 md:px-10 md:py-16 lg:px-14">
        <p className="text-sm font-medium text-muted">(2007 – 2024)</p>
        <h1 className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
          More Projects
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          The full archive — brand, product, packaging, and digital work across founder-led
          ventures and client collaborations.
        </p>
      </div>

      <div className="w-full px-6 py-12 md:px-10 md:py-16 lg:px-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} variant="selected" />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/#work" variant="outline">
            Back to featured work
          </Button>
        </div>
      </div>
    </main>
  );
}
