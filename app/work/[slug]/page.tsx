import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FisheWearCaseStudy from "@/components/FisheWearCaseStudy";
import ProjectPageContent from "@/components/ProjectPageContent";
import SlydeCaseStudy from "@/components/SlydeCaseStudy";
import TotelyCaseStudy from "@/components/TotelyCaseStudy";
import VeldskoenCaseStudy from "@/components/VeldskoenCaseStudy";
import { getProjectBySlug, projects, siteMeta } from "@/lib/site-data";
import { slydeCaseStudy } from "@/lib/slyde-case-study";
import { totelyCaseStudy } from "@/lib/totely-case-study";
import { veldskoenCaseStudy } from "@/lib/veldskoen-case-study";

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
    "totely-ai-storage": totelyCaseStudy.metadata.title,
    "veldskoen-growth-story": veldskoenCaseStudy.metadata.title,
    "slyde-handboards": slydeCaseStudy.metadata.title,
  };

  const descriptions: Record<string, string> = {
    "fishewear-growth-system":
      "Case study: building an AI-enabled DTC growth system across Shopify, Klaviyo, lifecycle marketing, content, creative production, and performance reporting for FisheWear.",
    "totely-ai-storage": totelyCaseStudy.metadata.description,
    "veldskoen-growth-story": veldskoenCaseStudy.metadata.description,
    "slyde-handboards": slydeCaseStudy.metadata.description,
  };

  const title =
    titles[project.slug] ??
    `${project.name} | ${project.category} | Steve Watts`;
  const description =
    descriptions[project.slug] ??
    project.cardDescription ??
    project.caseStudy?.intro ??
    `${project.name} — ${project.category} project by Steve Watts.`;

  const socialImage =
    project.slug === "slyde-handboards"
      ? {
          url: "/images/projects/slyde-handboards.jpg",
          width: 1200,
          height: 630,
          alt: "Slyde Handboards",
        }
      : project.slug === "totely-ai-storage"
        ? {
            url: "/images/work/totely/hero.webp",
            width: 1536,
            height: 1024,
            alt: "Totely AI product strategy case study",
          }
        : {
            url: "/images/og/og.png",
            width: 1200,
            height: 630,
            alt: siteMeta.name,
          };

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
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
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

  if (project.slug === "veldskoen-growth-story") {
    return <VeldskoenCaseStudy key={project.id} project={project} />;
  }

  if (project.slug === "slyde-handboards") {
    return <SlydeCaseStudy key={project.id} project={project} />;
  }

  return <ProjectPageContent key={project.id} project={project} />;
}

function structuredDataForProject(
  project: NonNullable<ReturnType<typeof getProjectBySlug>>
) {
  if (project.slug === "totely-ai-storage") {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: totelyCaseStudy.metadata.title,
      description: totelyCaseStudy.metadata.description,
      url: `${siteUrl}/work/${project.slug}`,
      author: {
        "@type": "Person",
        name: siteMeta.name,
        url: siteUrl,
        sameAs: [siteMeta.linkedInUrl],
      },
      about: [
        "Totely",
        "AI product strategy",
        "Product development",
        "Market validation",
        "SEO and content systems",
        "AI-assisted workflows",
      ],
    };
  }

  if (project.slug === "veldskoen-growth-story") {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: veldskoenCaseStudy.metadata.title,
      description: veldskoenCaseStudy.metadata.description,
      url: `${siteUrl}/work/${project.slug}`,
      author: {
        "@type": "Person",
        name: siteMeta.name,
        url: siteUrl,
        sameAs: [siteMeta.linkedInUrl],
      },
      about: [
        "Veldskoen Shoes USA",
        "Direct-to-consumer brand building",
        "E-commerce growth",
        "Product development",
        "Performance marketing",
      ],
    };
  }

  if (project.slug === "slyde-handboards") {
    return {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: slydeCaseStudy.metadata.title,
      description: slydeCaseStudy.metadata.description,
      url: `${siteUrl}/work/${project.slug}`,
      author: {
        "@type": "Person",
        name: siteMeta.name,
        url: siteUrl,
        sameAs: [siteMeta.linkedInUrl],
      },
      about: [
        "Slyde Handboards",
        "Product development",
        "Brand building",
        "E-commerce",
        "Founder-led company building",
      ],
    };
  }

  return null;
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

  const structuredData = structuredDataForProject(project);

  return (
    <main className="w-full min-h-screen bg-background">
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      <CaseStudyForProject project={project} />
    </main>
  );
}
