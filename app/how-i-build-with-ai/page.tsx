import type { Metadata } from "next";
import HowIBuildWithAI from "@/components/HowIBuildWithAI";
import { aiOperatingModelPage } from "@/lib/ai-operating-model";
import { siteMeta } from "@/lib/site-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stevewattsportfolio.framer.website";

export const metadata: Metadata = {
  title: aiOperatingModelPage.metadata.title,
  description: aiOperatingModelPage.metadata.description,
  alternates: {
    canonical: "/how-i-build-with-ai",
  },
  openGraph: {
    title: aiOperatingModelPage.metadata.title,
    description: aiOperatingModelPage.metadata.description,
    url: `${siteUrl}/how-i-build-with-ai`,
    type: "website",
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
    title: aiOperatingModelPage.metadata.title,
    description: aiOperatingModelPage.metadata.description,
    images: ["/images/og/og.png"],
  },
};

export default function HowIBuildWithAIPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: aiOperatingModelPage.metadata.title,
    description: aiOperatingModelPage.metadata.description,
    url: `${siteUrl}/how-i-build-with-ai`,
    author: {
      "@type": "Person",
      name: siteMeta.name,
      url: siteUrl,
      sameAs: [siteMeta.linkedInUrl],
    },
    about: [
      "AI-assisted operating models",
      "Digital strategy",
      "Product development",
      "Lifecycle marketing",
    ],
  };

  return (
    <main className="w-full min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HowIBuildWithAI />
    </main>
  );
}
