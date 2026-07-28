import { notFound } from "next/navigation";
import FisheWearCaseStudy from "@/components/FisheWearCaseStudy";
import ProjectPageContent from "@/components/ProjectPageContent";
import TotelyCaseStudy from "@/components/TotelyCaseStudy";
import { getProjectBySlug, projects } from "@/lib/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function CaseStudyForProject({
  project,
}: {
  project: NonNullable<ReturnType<typeof getProjectBySlug>>;
}) {
  if (project.slug === "fishewear-growth-system") {
    return <FisheWearCaseStudy key={project.id} project={project} />;
  }

  if (project.slug === "totely-ai-storage") {
    return <TotelyCaseStudy key={project.id} project={project} />;
  }

  return <ProjectPageContent key={project.id} project={project} />;
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
      <CaseStudyForProject project={project} />
    </main>
  );
}
