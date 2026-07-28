/**
 * Portfolio systems — practical AI skills and connected operating models.
 * Expandable: add new SystemCaseStudy entries without changing AISystems UI.
 */

import type { ImpactAtGlance } from "@/lib/impact";

export type SystemCaseStudy = {
  id: string;
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  href: string;
  year: string;
  tags: string[];
  imageSrc?: string;
  /** Restrained proof indicator when the system page includes an evidence gallery. */
  evidenceLabel?: string;
  /** Shared Impact at a Glance panel for operational / methodology scope. */
  impactAtAGlance?: ImpactAtGlance;
};

export const aiSkillsSection = {
  id: "ai-skills",
  title: "AI Skills That Work",
  titleLines: ["AI Skills", "That Work"] as const,
  introduction:
    "I build practical AI skills that connect data, strategy, creative production, and business operations. These systems do more than generate content—they gather context, follow commercial and brand rules, create structured work, and pass it into the tools teams already use.",
} as const;

export const systems: SystemCaseStudy[] = [
  {
    id: "klaviyo-campaign-intelligence",
    slug: "klaviyo-campaign-intelligence",
    eyebrow: "AI Skill · Lifecycle Marketing · Automation",
    shortTitle: "Campaign Intelligence",
    title: "AI Campaign Intelligence & Creative Production System",
    description:
      "A connected workflow that turns Klaviyo performance and Shopify product data into campaign strategy, Airtable records, Figma production, reviewed drafts, and the next planning cycle.",
    category: "AI Workflow Design",
    year: "2026",
    href: "/systems/klaviyo-campaign-intelligence",
    tags: [
      "Klaviyo",
      "Shopify",
      "Airtable",
      "Figma",
      "Email and SMS",
      "Segmentation",
      "Campaign Strategy",
      "AI Workflow Design",
    ],
    imageSrc: "/images/systems/klaviyo-campaign-intelligence.svg",
    evidenceLabel: "Case Study + Evidence",
    impactAtAGlance: {
      eyebrow: "Impact at a Glance",
      items: [
        {
          value: "4 Core Platforms",
          label: "Klaviyo · Shopify · Airtable · Figma",
          type: "operational",
          prominence: "primary",
        },
        {
          value: "2 Creative Paths",
          label: "Designer Wireframe or AI-Assisted First Design",
          type: "operational",
          prominence: "secondary",
        },
        {
          value: "1 Closed Loop",
          label: "Plan · Create · Measure · Improve",
          type: "operational",
          prominence: "secondary",
        },
      ],
      guardrail:
        "Human approval is required before scheduling or sending any campaign.",
    },
  },
];

export function getSystemBySlug(slug: string): SystemCaseStudy | undefined {
  return systems.find((system) => system.slug === slug);
}
