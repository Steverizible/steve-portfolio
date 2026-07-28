import { notFound } from "next/navigation";
import KlaviyoCampaignSystemCaseStudy from "@/components/KlaviyoCampaignSystemCaseStudy";
import { getSystemBySlug, systems } from "@/lib/systems-data";

export function generateStaticParams() {
  return systems.map((system) => ({ slug: system.slug }));
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
