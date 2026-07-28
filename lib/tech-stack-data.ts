/**
 * Technology stack for Role Fit and homepage preview.
 * Logos identify tools used in the work — not partnerships or endorsements.
 */

export type TechTool = {
  id: string;
  name: string;
  category: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  usageNote?: string;
  proof?: Array<{ label: string; href: string }>;
  featured?: boolean;
};

export type TechStackGroup = {
  id: string;
  title: string;
  tools: string[];
};

export const techStackSection = {
  id: "technology",
  heading: "Technology I Use to Turn Strategy Into Working Systems",
  introduction:
    "I use technology across research, product development, creative production, e-commerce, lifecycle marketing, implementation, deployment, collaboration, and measurement.",
  ownershipNote:
    "Technology names and logos belong to their respective owners and are shown to identify tools used in the work.",
  homepage: {
    heading: "Tools Behind the Work",
    supporting:
      "From research and strategy through product development, version control, deployment, and continuous improvement.",
    cta: {
      label: "Explore My Role Fit and Stack",
      href: "/role-fit#technology",
    },
  },
} as const;

export const techTools: TechTool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "Research, Strategy & Connected Workflows",
    description:
      "Used to gather and organize context, analyze information, develop strategy, structure workflows, create content, review decisions, and work across connected business systems.",
    logoSrc: "/logos/tech/chatgpt.svg",
    logoAlt: "ChatGPT logo",
    usageNote: "Used regularly",
    featured: true,
    proof: [
      { label: "How I Build With AI", href: "/how-i-build-with-ai" },
      {
        label: "Campaign Intelligence",
        href: "/systems/klaviyo-campaign-intelligence",
      },
    ],
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "AI-Assisted Product Development",
    description:
      "Used to plan, build, review, debug, and improve websites, applications, components, workflows, documentation, and production code.",
    logoSrc: "/logos/tech/cursor.svg",
    logoAlt: "Cursor logo",
    usageNote: "Used in current workflows",
    featured: true,
    proof: [
      { label: "Totely", href: "/work/totely-ai-storage" },
      { label: "This Portfolio", href: "/" },
    ],
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "Deployment & Web Delivery",
    description:
      "Used to deploy, preview, validate, and deliver modern web experiences built with the current development stack.",
    logoSrc: "/logos/tech/vercel.svg",
    logoAlt: "Vercel logo",
    usageNote: "Used for selected projects",
    featured: true,
    proof: [
      { label: "This Portfolio", href: "/" },
      { label: "Totely", href: "/work/totely-ai-storage" },
    ],
  },
  {
    id: "github",
    name: "GitHub",
    category: "Source Control & Collaboration",
    description:
      "Used for repository management, version history, pull requests, review, issue tracking, documentation, and controlled deployment workflows.",
    logoSrc: "/logos/tech/github.svg",
    logoAlt: "GitHub logo",
    usageNote: "Part of the operating stack",
    featured: true,
    proof: [
      { label: "Totely", href: "/work/totely-ai-storage" },
      { label: "This Portfolio", href: "/" },
    ],
  },
  {
    id: "shopify",
    name: "Shopify",
    category: "Commerce & Customer Data",
    description:
      "Commercial source of truth for product, inventory, storefront experience, and conversion work.",
    logoSrc: "/images/stack/shopify.avif",
    logoAlt: "Shopify",
    usageNote: "Used regularly",
  },
  {
    id: "klaviyo",
    name: "Klaviyo",
    category: "Commerce & Customer Data",
    description:
      "Lifecycle marketing, segmentation, flows, campaigns, and retention operations.",
    logoSrc: "/images/stack/klaviyo.avif",
    logoAlt: "Klaviyo",
    usageNote: "Used regularly",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Creative Production",
    description:
      "Wireframes, creative production, and design handoffs across campaign and product work.",
    logoSrc: "/images/stack/figma.avif",
    logoAlt: "Figma",
    usageNote: "Used regularly",
  },
  {
    id: "adobe-suite",
    name: "Adobe Creative Suite",
    category: "Creative Production",
    description:
      "Brand, packaging, photography treatment, and campaign creative production.",
    logoSrc: "/images/stack/adobe-suite.avif",
    logoAlt: "Adobe Creative Suite",
    usageNote: "Used regularly",
  },
  {
    id: "airtable",
    name: "Airtable",
    category: "Operations & Collaboration",
    description:
      "Structured campaign records, workflow status, and cross-tool operating context.",
    logoSrc: "/images/stack/airtable.avif",
    logoAlt: "Airtable",
    usageNote: "Used in current workflows",
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "Creative Production",
    description:
      "Short-form video editing for social, education, and campaign storytelling.",
    logoSrc: "/images/stack/capcut.avif",
    logoAlt: "CapCut",
    usageNote: "Used for selected projects",
  },
  {
    id: "clickup",
    name: "ClickUp",
    category: "Operations & Collaboration",
    description:
      "Project planning, task coordination, and delivery tracking across teams.",
    logoSrc: "/logos/tech/clickup.svg",
    logoAlt: "ClickUp logo",
    usageNote: "Used in current workflows",
  },
  {
    id: "microsoft-office",
    name: "Microsoft Office",
    category: "Operations & Collaboration",
    description:
      "Documents, spreadsheets, and presentations for planning and stakeholder communication.",
    logoSrc: "/images/stack/microsoft-office.avif",
    logoAlt: "Microsoft Office",
    usageNote: "Part of the operating stack",
  },
];

export const techStackGroups: TechStackGroup[] = [
  {
    id: "strategy-ai",
    title: "Strategy, Research & AI",
    tools: ["chatgpt"],
  },
  {
    id: "product-dev",
    title: "Product Development",
    tools: ["cursor", "github", "vercel"],
  },
  {
    id: "commerce",
    title: "Commerce & Customer Data",
    tools: ["shopify", "klaviyo"],
  },
  {
    id: "creative",
    title: "Creative Production",
    tools: ["figma", "adobe-suite", "capcut"],
  },
  {
    id: "operations",
    title: "Operations & Collaboration",
    tools: ["airtable", "clickup", "microsoft-office"],
  },
];

export function getFeaturedTechTools(): TechTool[] {
  return techTools.filter((tool) => tool.featured);
}

export function getTechTool(id: string): TechTool | undefined {
  return techTools.find((tool) => tool.id === id);
}
