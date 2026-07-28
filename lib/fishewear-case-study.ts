/**
 * Structured content for the FisheWear digital-growth case study.
 *
 * All approved copy, metrics, and labels live here so the presentation
 * component (components/FisheWearCaseStudy.tsx) stays free of hardcoded strings.
 *
 * Metric guardrails: figures are rounded, directional marketing attribution —
 * not audited financial reporting. See `methodologyNote` below.
 */

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type FrameworkBlock = {
  id: string;
  title: string;
  body: string[];
  /** Optional ordered sequence rendered as a connected flow line. */
  sequence?: string[];
};

export type LifecycleResult = {
  label: string;
  value: string;
  /** Approximate thousands, used only for a labeled proportional bar. */
  weight: number;
};

export const fishewearCaseStudy = {
  hero: {
    eyebrow: "FisheWear",
    title: "Building an AI-Enabled DTC Growth System",
    intro:
      "Transforming a collection of marketing activities into a connected operating system spanning Shopify, Klaviyo, lifecycle automation, customer segmentation, content, creative production, SEO, product launches, and performance reporting.",
    meta: [
      { label: "Role", value: "Head of Marketing & Growth" },
      { label: "Period", value: "May 2025–Present" },
      {
        label: "Focus",
        value: "E-Commerce, Lifecycle Marketing, Digital Strategy & AI Operations",
      },
    ] satisfies CaseStudyMeta[],
    image: {
      src: "/images/work/ai-enabled-dtc-growth.webp",
      alt: "Illustrative editorial scene of a DTC growth team connecting product, packaging, e-commerce, content, and photography in a naturally lit studio.",
    },
  },

  results: {
    heading: "Key Results",
    metrics: [
      { value: "+63%", label: "Net Sales Year Over Year" },
      { value: "+76%", label: "Online Store Sessions Year Over Year" },
      { value: "+49%", label: "Average Order Value" },
      { value: "$104K+", label: "Revenue Attributed to Automated Klaviyo Flows" },
    ] satisfies CaseStudyMetric[],
    methodologyNote:
      "Shopify results compare the 2026 period year over year; Klaviyo revenue is attributed automated-flow revenue.",
  },

  intro: {
    heading: "From Individual Activities to a Connected System",
    body: [
      "FisheWear already had the ingredients of a powerful brand: distinctive products, an authentic founder story, a loyal community, and a clear point of view within the outdoor industry.",
      "The opportunity was to connect those ingredients into a more intentional, measurable, and repeatable growth system.",
      "I led the development of an operating model that connected Shopify, Klaviyo, product launches, customer behavior, content, creative production, SEO, reporting, and AI-assisted workflows. The objective was not simply to produce more marketing. It was to create a smarter way of operating.",
    ],
  },

  challenge: {
    heading: "The Challenge",
    body: [
      "Marketing activity existed across multiple channels, but each area could too easily become its own separate workflow: Shopify merchandising, email and SMS, product launches, paid media, blog and SEO content, creative production, customer segmentation, and performance reporting.",
      "The strategic challenge was to connect these activities so customer behavior could inform the next message, campaign, offer, and digital experience.",
    ],
    featuredQuestion:
      "How could a lean team operate with the speed, coordination, and analytical discipline of a much larger growth organization?",
  },

  framework: {
    heading: "A Connected DTC Growth Framework",
    blocks: [
      {
        id: "shopify",
        title: "Shopify Commerce Strategy",
        body: [
          "I used Shopify as the commercial source of truth for understanding revenue and order trends, average order value, customer behavior, returning-customer activity, product and collection performance, traffic patterns, conversion behavior, and promotional outcomes.",
          "These insights informed campaign planning, product storytelling, audience targeting, merchandising priorities, and the next set of growth experiments.",
        ],
      },
      {
        id: "klaviyo",
        title: "Klaviyo Lifecycle Infrastructure",
        body: [
          "Klaviyo developed into more than a campaign-broadcasting platform. The lifecycle system included welcome journeys, abandoned-cart recovery, browse abandonment, post-purchase follow-up, price-drop notifications, win-back communication, high-value customer segmentation, behavior-based campaign audiences, email and SMS coordination, and engagement controls designed to protect list health.",
        ],
      },
      {
        id: "campaign",
        title: "Campaign Architecture",
        body: [
          "Campaigns were developed as connected sequences rather than isolated announcements. Research, audience strategy, teasing, launch communication, behavior-based follow-up, and retention became coordinated parts of the same customer journey.",
        ],
        sequence: [
          "Research",
          "Audience Strategy",
          "Tease",
          "Early Access",
          "Launch",
          "Behavioral Follow-Up",
          "Retention",
        ],
      },
      {
        id: "content",
        title: "Content, Creative and SEO",
        body: [
          "Product storytelling, campaign creative, educational content, blog production, video, email, landing pages, and SEO were treated as connected assets rather than separate requests. A strong idea could be researched once, adapted for multiple channels, measured, improved, and documented for reuse.",
        ],
      },
    ] satisfies FrameworkBlock[],
  },

  phase2: {
    heading: "Phase 2: Operationalizing the System",
    body: [
      "The second phase moved the work from foundational improvements into a more deliberate operating model.",
      "We developed stronger audience definitions, coordinated campaign phases, clearer workflows, reusable creative and content structures, and better connections between Shopify behavior and Klaviyo communication.",
      "Instead of treating each campaign as a blank page, repeatable frameworks made it possible to research, build, launch, measure, and improve much faster.",
    ],
    items: [
      "Recent website activity became a targeting signal.",
      "Recent email engagement influenced campaign audiences.",
      "Recent purchasers could be excluded from irrelevant promotions.",
      "VIP and high-value customers received differentiated communication.",
      "Email and SMS became coordinated parts of the same campaign.",
      "Campaigns were built in phases instead of isolated sends.",
      "AI accelerated research, production, reporting, and iteration.",
      "Performance findings fed directly into the next campaign.",
    ],
  },

  lifecycle: {
    heading: "Automation That Continued Working Between Campaigns",
    intro:
      "The strongest result was not a single email. It was the creation of persistent lifecycle infrastructure that continued supporting acquisition, conversion, and retention between major campaigns.",
    results: [
      { label: "Popup Welcome Series", value: "$42K+", weight: 42.8 },
      { label: "Segmented Abandoned Cart", value: "$21K+", weight: 21.8 },
      { label: "Evergreen Welcome System", value: "$12K+", weight: 12.9 },
      { label: "Browse Abandonment", value: "$11K+", weight: 11.6 },
      { label: "Post-Purchase Follow-Up", value: "$5K+", weight: 5.9 },
      { label: "Price-Drop Automation", value: "$5K+", weight: 5.4 },
    ] satisfies LifecycleResult[],
  },

  ai: {
    heading: "How I Used AI",
    body: [
      "AI was embedded into the operating model as a practical force multiplier across research, planning, production, analysis, and documentation.",
      "I used AI to accelerate work that normally slows lean teams down: transforming customer and performance data into campaign opportunities, developing reusable briefs, producing channel variations, generating visual directions, improving SEO workflows, building reporting narratives, documenting processes, and identifying the next questions that needed human judgment.",
      "Every output remained subject to brand standards, factual review, performance data, and creative direction.",
    ],
    workflow: [
      "Customer and Performance Data",
      "Research and Opportunity Identification",
      "Strategy and Audience Planning",
      "Content, Copy and Creative Production",
      "Shopify and Klaviyo Execution",
      "Reporting and Analysis",
      "Optimization and Reusable Systems",
    ],
  },

  humanJudgment: {
    heading: "Human Judgment Stayed at the Center",
    body: "AI did not replace customer understanding, brand judgment, campaign accountability, or creative direction. Its role was to increase speed, make information more usable, and help a lean team move from idea to informed execution with greater consistency.",
  },

  result: {
    heading: "The Result",
    body: [
      "The work at FisheWear represents the way I now approach digital growth: connect strategy, creative, technology, customer behavior, and AI into one operating system.",
      "The result is not simply faster production. It is a business that can learn faster, communicate more intelligently, and turn more of its activity into measurable value.",
    ],
    cta: {
      label: "Visit FisheWear",
      href: "https://fishewear.com",
    },
  },

  /** Reuses existing archive projects for the "More Works" related section. */
  relatedProjectIds: ["multi-business", "slyde-handboards"],
} as const;
