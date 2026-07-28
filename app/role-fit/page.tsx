import type { Metadata } from "next";
import RoleFitPage from "@/components/RoleFitPage";
import { roleFitPage } from "@/lib/role-fit-data";
import { siteMeta } from "@/lib/site-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stevewattsportfolio.framer.website";

export const metadata: Metadata = {
  title: roleFitPage.metadata.title,
  description: roleFitPage.metadata.description,
  alternates: {
    canonical: "/role-fit",
  },
  openGraph: {
    title: roleFitPage.metadata.title,
    description: roleFitPage.metadata.description,
    url: `${siteUrl}/role-fit`,
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
    title: roleFitPage.metadata.title,
    description: roleFitPage.metadata.description,
    images: ["/images/og/og.png"],
  },
};

export default function RoleFitRoutePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: roleFitPage.metadata.title,
    description: roleFitPage.metadata.description,
    url: `${siteUrl}/role-fit`,
    mainEntity: {
      "@type": "Person",
      name: siteMeta.name,
      url: siteUrl,
      jobTitle: "Digital Growth & AI Innovation Leader",
      sameAs: [siteMeta.linkedInUrl],
      knowsAbout: [
        "Digital strategy",
        "DTC growth",
        "E-commerce",
        "AI workflow design",
        "Product development",
        "Lifecycle marketing",
        "Brand leadership",
      ],
    },
  };

  return (
    <main className="w-full min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RoleFitPage />
    </main>
  );
}
