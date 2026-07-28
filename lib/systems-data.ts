/**
 * Portfolio systems — practical AI skills and connected operating models.
 * Expandable: add new SystemCaseStudy entries without changing AISystems UI.
 */

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
      "A connected AI-assisted workflow that analyzes Klaviyo results, validates Shopify products and inventory, develops phased email and SMS campaigns, records structured plans in Airtable, creates Figma wireframes or production-ready creative, and prepares Klaviyo drafts for human review.",
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
  },
];

export function getSystemBySlug(slug: string): SystemCaseStudy | undefined {
  return systems.find((system) => system.slug === slug);
}
