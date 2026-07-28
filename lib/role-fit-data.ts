/**
 * Role Fit page and recruiter-conversion content.
 * Commercial figures retain case-study methodology; do not invent new metrics.
 */

import type { ImpactAtGlance } from "@/lib/impact";

export type RoleFitProof = {
  label: string;
  href: string;
  outcome?: string;
};

export type RoleFitArea = {
  id: string;
  title: string;
  summary: string;
  problems: string[];
  capabilities: string[];
  proof: RoleFitProof[];
};

export type ValueCard = {
  id: string;
  title: string;
  proofLabel: string;
  summary: string;
  href: string;
  outcome?: string;
};

export type ContactPath = {
  id: string;
  intent: "senior-role" | "advisory" | "collaboration";
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

export const roleFitPage = {
  hero: {
    eyebrow: "Role Fit",
    title: "Where My Experience Creates the Most Value",
    supportingHeadline:
      "Digital growth, e-commerce, product development, creative leadership, and practical AI systems—connected from strategy through execution.",
    intro:
      "I bring together founder experience, commercial growth, product development, customer experience, brand strategy, e-commerce, lifecycle marketing, and AI-assisted operations.\n\nMy strongest work happens where businesses need someone who can understand the customer, define the opportunity, connect teams and platforms, build the system, and remain accountable for the commercial result.",
    meta: [
      {
        label: "Experience",
        value: "Founder, Product, Brand and Digital Leadership",
      },
      {
        label: "Strength",
        value: "Connecting Strategy to Execution",
      },
      {
        label: "Approach",
        value: "Human-Led, Evidence-Based and AI-Assisted",
      },
    ],
    primaryCta: {
      label: "Discuss a Senior Role",
      href: "/contact?intent=senior-role",
    },
    secondaryCta: {
      label: "View My Résumé",
      // Uses verified Drive résumé URL from siteMeta.resumeUrl via RoleFitPage
      hrefKey: "resume" as const,
    },
  },

  careerImpact: {
    heading: "Career Impact at a Glance",
    impact: {
      eyebrow: "Career Impact at a Glance",
      items: [
        {
          value: "15+ Years",
          label: "Founder, Product, Brand and Digital Leadership",
          type: "leadership",
          prominence: "primary",
        },
        {
          value: "$0 → $250K/Month",
          label: "Veldskoen U.S. Growth Story",
          type: "commercial",
          prominence: "secondary",
        },
        {
          value: "$500K",
          label: "Outside Investment Secured for Slyde",
          type: "commercial",
          prominence: "secondary",
        },
        {
          value: "+63%",
          label: "FisheWear Net Sales YoY",
          type: "commercial",
          prominence: "secondary",
        },
        {
          value: "End-to-End AI Systems",
          label:
            "Research, Strategy, Production, Governance and Measurement",
          type: "operational",
          prominence: "secondary",
        },
      ],
      guardrail:
        "Commercial figures retain the methodology and evidence standards documented in their respective case studies. Investment, revenue, attributed marketing results, and business growth must not be treated as interchangeable measurements.",
    } satisfies ImpactAtGlance,
  },

  roleAreasHeading: "Senior Roles Where I Can Create Immediate Value",

  roleAreas: [
    {
      id: "digital-strategy",
      title: "Digital Strategy & Innovation Leadership",
      summary:
        "Connect customer needs, business priorities, technology, product, creative, and measurement into a clear digital operating direction.",
      problems: [
        "Digital initiatives are fragmented across teams",
        "Technology is being adopted without a clear business purpose",
        "Strategy does not translate into executable work",
        "Customer experience and internal operations are disconnected",
        "Leadership needs a practical roadmap rather than isolated experiments",
      ],
      capabilities: [
        "Digital transformation",
        "Strategic planning",
        "Opportunity assessment",
        "Customer experience",
        "Operating-model design",
        "Cross-functional alignment",
        "AI implementation strategy",
        "Measurement and prioritization",
      ],
      proof: [
        {
          label: "How I Build With AI",
          href: "/how-i-build-with-ai",
        },
        {
          label: "Campaign Intelligence",
          href: "/systems/klaviyo-campaign-intelligence",
        },
        {
          label: "FisheWear",
          href: "/work/fishewear-growth-system",
          outcome: "+63% Net Sales YoY",
        },
      ],
    },
    {
      id: "ecommerce-growth",
      title: "Head of E-Commerce & DTC Growth",
      summary:
        "Build and improve the connected commercial system across acquisition, merchandising, conversion, lifecycle, retention, content, and customer experience.",
      problems: [
        "Revenue growth depends too heavily on one channel",
        "Shopify, email, content, creative, and paid media are disconnected",
        "The brand has traffic but weak customer journeys",
        "Lifecycle systems are underdeveloped",
        "Commercial reporting does not guide the next decision",
      ],
      capabilities: [
        "Shopify strategy",
        "DTC growth",
        "Merchandising",
        "Conversion optimization",
        "Customer acquisition",
        "Lifecycle marketing",
        "Segmentation",
        "Retention",
        "Campaign architecture",
        "Content and SEO",
        "Performance analysis",
      ],
      proof: [
        {
          label: "FisheWear",
          href: "/work/fishewear-growth-system",
          outcome: "+63% Net Sales YoY",
        },
        {
          label: "Veldskoen Shoes USA",
          href: "/work/veldskoen-growth-story",
          outcome: "$0 → ~$250K/month within 12 months",
        },
      ],
    },
    {
      id: "ai-transformation",
      title: "AI Transformation & Workflow Design",
      summary:
        "Design practical AI-assisted systems that connect real business context, structured rules, existing platforms, human approval, and continuous improvement.",
      problems: [
        "AI use is scattered across individual prompts",
        "Teams repeatedly rebuild context",
        "Outputs cannot move cleanly between platforms",
        "Automation lacks governance",
        "AI experiments are not connected to customer or commercial outcomes",
      ],
      capabilities: [
        "AI operating-model design",
        "Context architecture",
        "Skill and prompt design",
        "Workflow standardization",
        "Tool-connected processes",
        "Human approval systems",
        "Documentation",
        "Governance",
        "Performance feedback loops",
        "Reusable operating systems",
      ],
      proof: [
        {
          label: "Campaign Intelligence",
          href: "/systems/klaviyo-campaign-intelligence",
        },
        {
          label: "How I Build With AI",
          href: "/how-i-build-with-ai",
        },
        {
          label: "Totely",
          href: "/work/totely-ai-storage",
        },
      ],
    },
    {
      id: "product-cx",
      title: "Product & Customer Experience Leadership",
      summary:
        "Move from customer problem and product opportunity through positioning, UX, development, launch, and learning.",
      problems: [
        "Product teams begin with technology instead of customer need",
        "The product is difficult to explain",
        "Brand, UX, development, and launch are disconnected",
        "Teams need someone who can move between strategy and implementation",
        "Product decisions are not supported by a clear customer journey",
      ],
      capabilities: [
        "Opportunity research",
        "Product strategy",
        "Physical-product development",
        "Digital-product direction",
        "User journeys",
        "UX direction",
        "Brand positioning",
        "Launch planning",
        "Customer education",
        "Product iteration",
      ],
      proof: [
        {
          label: "Totely",
          href: "/work/totely-ai-storage",
        },
        {
          label: "Slyde Handboards",
          href: "/work/slyde-handboards",
        },
        {
          label: "Veldskoen Shoes USA",
          href: "/work/veldskoen-growth-story",
        },
      ],
    },
    {
      id: "brand-leadership",
      title: "Brand, Creative & Cross-Functional Leadership",
      summary:
        "Create a clear market story and align product, creative, commerce, operations, partners, and teams around it.",
      problems: [
        "Creative work is disconnected from commercial strategy",
        "Product stories are inconsistent across channels",
        "Teams lack a shared direction",
        "Customer education is weak",
        "Brand growth creates operational pressure that marketing alone cannot solve",
      ],
      capabilities: [
        "Brand strategy",
        "Creative direction",
        "Product storytelling",
        "Team leadership",
        "Founder communication",
        "Campaign development",
        "Partnerships",
        "Packaging",
        "Community",
        "Cross-functional operations",
      ],
      proof: [
        {
          label: "Slyde Handboards",
          href: "/work/slyde-handboards",
          outcome: "$500K outside investment secured",
        },
        {
          label: "Veldskoen Shoes USA",
          href: "/work/veldskoen-growth-story",
        },
        {
          label: "FisheWear",
          href: "/work/fishewear-growth-system",
        },
      ],
    },
  ] satisfies RoleFitArea[],

  valueCards: [
    {
      id: "grow-businesses",
      title: "Grow Existing Businesses",
      proofLabel: "FisheWear",
      summary:
        "Modernizing and connecting e-commerce, lifecycle, content, creative, customer data, and performance analysis.",
      href: "/work/fishewear-growth-system",
      outcome: "+63% Net Sales YoY",
    },
    {
      id: "build-brands",
      title: "Build and Scale Brands",
      proofLabel: "Veldskoen",
      summary:
        "Building the U.S. business from early-stage launch to approximately $250,000 in monthly revenue.",
      href: "/work/veldskoen-growth-story",
      outcome: "$0 → ~$250K/month within 12 months",
    },
    {
      id: "invent-companies",
      title: "Invent Products and Companies",
      proofLabel: "Slyde",
      summary:
        "Moving from product idea and category education through manufacturing, investment, e-commerce, partnerships, and community.",
      href: "/work/slyde-handboards",
      outcome: "$500K outside investment secured",
    },
    {
      id: "digital-products",
      title: "Create Digital Products",
      proofLabel: "Totely",
      summary:
        "Taking a customer problem through research, positioning, UX, application development, physical labels, and a working product ecosystem.",
      href: "/work/totely-ai-storage",
    },
    {
      id: "ai-systems",
      title: "Design AI Operating Systems",
      proofLabel: "Campaign Intelligence",
      summary:
        "Connecting performance data, commercial validation, planning, creative production, human approval, drafts, analysis, and the next planning cycle.",
      href: "/systems/klaviyo-campaign-intelligence",
    },
  ] satisfies ValueCard[],

  recruiterSummary: {
    heading: "A Builder Across Business, Product and Technology",
    body: "I have spent more than 15 years building products, brands, e-commerce businesses, customer experiences, creative systems, and teams. Today, I also design practical AI-assisted workflows that help organizations research faster, preserve context, connect tools, produce better work, and make clearer decisions.",
    proofLinks: [
      { label: "FisheWear", note: "Commercial Growth", href: "/work/fishewear-growth-system" },
      { label: "Totely", note: "Digital Product", href: "/work/totely-ai-storage" },
      { label: "Veldskoen", note: "DTC Scale", href: "/work/veldskoen-growth-story" },
      { label: "Slyde", note: "Founder and Product", href: "/work/slyde-handboards" },
      {
        label: "Campaign Intelligence",
        note: "AI Operations",
        href: "/systems/klaviyo-campaign-intelligence",
      },
    ],
    cta: { label: "See Where I Fit", href: "/role-fit" },
  },

  contactPaths: [
    {
      id: "senior-role",
      intent: "senior-role",
      title: "Senior Leadership Role",
      description:
        "Director, Head, or VP-level opportunities across digital strategy, e-commerce, growth, product, customer experience, marketing operations, and AI innovation.",
      ctaLabel: "Discuss a Senior Role",
      href: "/contact?intent=senior-role",
    },
    {
      id: "advisory",
      intent: "advisory",
      title: "Strategic Advisory",
      description:
        "Focused advisory work involving digital growth, AI workflow design, e-commerce, product strategy, lifecycle marketing, or connected operating systems.",
      ctaLabel: "Discuss Advisory Work",
      href: "/contact?intent=advisory",
    },
    {
      id: "collaboration",
      intent: "collaboration",
      title: "Founder or Product Collaboration",
      description:
        "Selected opportunities to help shape, validate, build, or grow a meaningful physical or digital product.",
      ctaLabel: "Discuss a Collaboration",
      href: "/contact?intent=collaboration",
    },
  ] satisfies ContactPath[],

  contactTrust: [
    "Founder and operator experience",
    "Commercial DTC growth",
    "Physical and digital product development",
    "Creative and brand leadership",
    "Practical AI workflow design",
    "Cross-functional execution",
    "Evidence-backed case studies",
  ],

  metadata: {
    title: "Role Fit | Steve Watts — Digital Growth & AI Innovation",
    description:
      "Explore where Steve Watts creates the most value across digital strategy, DTC growth, AI systems, product development, customer experience, and brand leadership.",
  },
} as const;
