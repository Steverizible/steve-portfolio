import type { Metadata } from "next";
import { notFound } from "next/navigation";
import KlaviyoCampaignSystemCaseStudy from "@/components/KlaviyoCampaignSystemCaseStudy";
import { siteMeta } from "@/lib/site-data";
import { getSystemBySlug, systems } from "@/lib/systems-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stevewattsportfolio.framer.website";

export function generateStaticParams() {
  return systems.map((system) => ({ slug: system.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const system = getSystemBySlug(slug);

  if (!system) {
    return {
      title: siteMeta.title,
      description: siteMeta.description,
    };
  }

  const title = `${system.title} | Steve Watts`;
  const description = system.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/systems/${system.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/systems/${system.slug}`,
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

export default async function SystemCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const system = getSystemBySlug(slug);

  if (!system) {
    notFound();
  }

  if (system.slug === "klaviyo-campaign-intelligence") {
    return (
      <main className="w-full min-h-screen bg-background">
        <KlaviyoCampaignSystemCaseStudy system={system} />
      </main>
    );
  }

  notFound();
}
