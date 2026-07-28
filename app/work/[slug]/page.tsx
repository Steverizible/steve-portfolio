import { notFound } from "next/navigation";
import FisheWearCaseStudy from "@/components/FisheWearCaseStudy";
import ProjectPageContent from "@/components/ProjectPageContent";
import { getProjectBySlug, projects } from "@/lib/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-background">
      {project.slug === "fishewear-growth-system" ? (
        <FisheWearCaseStudy key={project.id} project={project} />
      ) : (
        <ProjectPageContent key={project.id} project={project} />
      )}
    </main>
  );
}
