import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FisheWearCaseStudy from "@/components/FisheWearCaseStudy";
import ProjectPageContent from "@/components/ProjectPageContent";
import TotelyCaseStudy from "@/components/TotelyCaseStudy";
import { getProjectBySlug, projects, siteMeta } from "@/lib/site-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stevewattsportfolio.framer.website";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function metadataForProject(slug: string): Metadata {
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: siteMeta.title,
      description: siteMeta.description,
    };
  }

  const titles: Record<string, string> = {
    "fishewear-growth-system":
      "FisheWear Growth System | Steve Watts",
    "totely-ai-storage": "Totely AI Storage System | Steve Watts",
  };

  const descriptions: Record<string, string> = {
    "fishewear-growth-system":
      "Case study: building an AI-enabled DTC growth system across Shopify, Klaviyo, lifecycle marketing, content, creative production, and performance reporting for FisheWear.",
    "totely-ai-storage":
      "Case study: Totely by There’s A Spot For That — an AI-assisted physical and digital storage system from problem discovery to working product.",
  };

  const title =
    titles[project.slug] ??
    `${project.name} | ${project.category} | Steve Watts`;
  const description =
    descriptions[project.slug] ??
    project.cardDescription ??
    project.caseStudy?.intro ??
    `${project.name} — ${project.category} project by Steve Watts.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/work/${project.slug}`,
      type: "article",
      images: [
        {
          url: "/images/og/og.png",
          width: 1200,
          height: 630,
          alt: siteMeta.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/og.png"],
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return metadataForProject(slug);
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
