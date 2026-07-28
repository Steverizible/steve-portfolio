/**
 * Structured content for How I Build With AI.
 * Claim guardrails: no invented metrics, full autonomy, or unverified integrations.
 */

export type ProofLink = {
  label: string;
  href: string;
};

export type OperatingModelStage = {
  id: string;
  number: number;
  title: string;
  summary: string;
  aiContribution: string;
  humanResponsibility: string;
  proofLinks: ProofLink[];
};

export type ApplicationPanel = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export type PrincipleCard = {
  title: string;
  body: string;
};

export type ToolGroup = {
  title: string;
  items: string[];
  note?: string;
};

export type ImplementationStatusItem = {
  label: string;
  status: "implemented" | "prototype" | "designed" | "future";
  description: string;
};

export const aiOperatingModelPage = {
  hero: {
    eyebrow: "How I Build With AI",
    title: "AI Is Integrated Throughout My Workflow",
    supportingHeadline:
      "From research and strategy through development, production, review, and measurement.",
    intro:
      "AI works across the whole process, while customer understanding, strategy, judgment, and final accountability stay human.\n\nIt makes information more usable, reduces repetitive work, and helps small teams move faster—without replacing the decisions that matter.",
    meta: [
      {
        label: "Focus",
        value: "Digital Strategy, AI Systems, Product Development & Growth",
      },
      {
        label: "Approach",
        value: "Human-Led, Evidence-Based & AI-Assisted",
      },
      {
        label: "Proof",
        value: "FisheWear, Totely & Campaign Intelligence",
      },
    ],
    primaryCta: {
      label: "Explore the Operating Model",
      href: "#operating-model",
    },
    secondaryCta: {
      label: "View Featured Work",
      href: "/#work",
    },
    image: {
      src: "/images/ai/how-i-build-with-ai.svg",
      alt: "Editorial visual suggesting a human-led, AI-assisted loop from discovery through measurement and improvement.",
    },
  },

  operatingModel: {
    id: "operating-model",
    heading: "A Repeatable Method From Problem to Improvement",
    intro:
      "The method is a loop. Each project and campaign should leave clearer context, stronger standards, and a better starting point for the next decision.",
    image: {
      src: "/images/ai/operating-model.svg",
      alt: "Nine-stage operating model arranged as a continuous improvement loop.",
    },
    stages: [
      {
        id: "discover",
        number: 1,
        title: "Discover the Problem",
        summary:
          "Start with a meaningful customer, operational, or commercial problem rather than beginning with a technology.",
        aiContribution:
          "Gather patterns from customer language, organize pain points, compare existing solutions, identify unanswered questions, and surface possible opportunity areas.",
        humanResponsibility:
          "Decide whether the problem matters, understand emotional and commercial context, separate real needs from interesting distractions, and choose what is worth pursuing.",
        proofLinks: [
          { label: "Totely", href: "/work/totely-ai-storage" },
        ],
      },
      {
        id: "gather",
        number: 2,
        title: "Gather Context and Evidence",
        summary:
          "Bring together the information needed to make a responsible decision.",
        aiContribution:
          "Review reports, summarize performance, organize research, compare previous work, identify patterns and anomalies, and retrieve relevant context from connected tools.",
        humanResponsibility:
          "Judge data quality, identify missing information, understand business constraints, protect confidential information, and decide which evidence is meaningful.",
        proofLinks: [
          { label: "FisheWear", href: "/work/fishewear-growth-system" },
          {
            label: "Campaign Intelligence",
            href: "/systems/klaviyo-campaign-intelligence",
          },
        ],
      },
      {
        id: "strategy",
        number: 3,
        title: "Define the Strategy",
        summary:
          "Turn evidence into a clear objective, priority, audience, product direction, or campaign plan.",
        aiContribution:
          "Develop options, organize tradeoffs, draft strategic frameworks, compare audience approaches, build planning documents, and identify risks and dependencies.",
        humanResponsibility:
          "Choose the direction, approve commercial decisions, define the customer promise, protect the brand, and decide what not to do.",
        proofLinks: [
          { label: "FisheWear", href: "/work/fishewear-growth-system" },
          { label: "Totely", href: "/work/totely-ai-storage" },
        ],
      },
      {
        id: "design",
        number: 4,
        title: "Design the Product or Workflow",
        summary:
          "Translate the strategy into a usable product experience, campaign structure, creative system, or operational workflow.",
        aiContribution:
          "Map user journeys, develop feature requirements, build process diagrams, draft wireframes, define structured records, create reusable templates, and explore edge cases.",
        humanResponsibility:
          "Protect simplicity, maintain usability, set brand direction, prioritize features, and ensure the workflow supports real people.",
        proofLinks: [
          { label: "Totely", href: "/work/totely-ai-storage" },
          {
            label: "Campaign Intelligence",
            href: "/systems/klaviyo-campaign-intelligence",
          },
        ],
      },
      {
        id: "build",
        number: 5,
        title: "Build With AI and Human Judgment",
        summary:
          "Use AI to accelerate implementation while maintaining accountability for the final product.",
        aiContribution:
          "Support code planning, implementation, debugging, content creation, visual direction, documentation, quality review, and production variations.",
        humanResponsibility:
          "Direct the work, review the output, test assumptions, reject weak solutions, protect quality, and accept responsibility for what ships.",
        proofLinks: [
          { label: "Totely", href: "/work/totely-ai-storage" },
          { label: "FisheWear", href: "/work/fishewear-growth-system" },
        ],
      },
      {
        id: "connect",
        number: 6,
        title: "Connect Business Tools",
        summary:
          "Move the work beyond isolated documents by connecting it to the systems teams already use.",
        aiContribution:
          "Retrieve connected context, structure tool-ready data, create campaign records, prepare drafts, pass briefs between workflows, and preserve naming and process standards.",
        humanResponsibility:
          "Set access boundaries, approve changes, protect customer data, confirm platform accuracy, and control final execution.",
        proofLinks: [
          {
            label: "Campaign Intelligence",
            href: "/systems/klaviyo-campaign-intelligence",
          },
        ],
      },
      {
        id: "govern",
        number: 7,
        title: "Review and Govern",
        summary:
          "Build approval, privacy, factual review, brand standards, and commercial accountability into the system.",
        aiContribution:
          "Flag missing information, detect inconsistencies, apply known rules, identify risky claims, create review checklists, and surface unusual results.",
        humanResponsibility:
          "Approve sends and launches, review customer impact, confirm product accuracy, protect confidential information, and make final brand and commercial decisions.",
        proofLinks: [
          {
            label: "Campaign Intelligence",
            href: "/systems/klaviyo-campaign-intelligence",
          },
        ],
      },
      {
        id: "measure",
        number: 8,
        title: "Measure Real Outcomes",
        summary:
          "Return to the data after launch and separate meaningful results from attribution noise.",
        aiContribution:
          "Summarize performance, compare periods, identify trends, flag anomalies, organize channel results, and generate the next questions.",
        humanResponsibility:
          "Interpret causality carefully, understand commercial context, validate unusual results, distinguish attribution from audited financial performance, and choose the next experiment.",
        proofLinks: [
          { label: "FisheWear", href: "/work/fishewear-growth-system" },
          {
            label: "Campaign Intelligence",
            href: "/systems/klaviyo-campaign-intelligence",
          },
        ],
      },
      {
        id: "document",
        number: 9,
        title: "Document and Improve the System",
        summary:
          "Turn each project, campaign, and product decision into reusable organizational knowledge.",
        aiContribution:
          "Create documentation, update prompts and instructions, record campaign learnings, produce reusable briefs, maintain decision histories, and improve future starting context.",
        humanResponsibility:
          "Decide what should become a standard, remove outdated rules, preserve nuance, maintain accountability, and continue improving the system.",
        proofLinks: [
          { label: "FisheWear", href: "/work/fishewear-growth-system" },
          { label: "Totely", href: "/work/totely-ai-storage" },
          {
            label: "Campaign Intelligence",
            href: "/systems/klaviyo-campaign-intelligence",
          },
        ],
      },
    ] satisfies OperatingModelStage[],
    governancePrinciple:
      "AI may recommend, structure, draft, and review. Human beings remain accountable for what is approved, published, scheduled, or sent.",
    learningPrinciple:
      "The system should remember what the team learned, not only what the team produced.",
    connectToolsNote:
      "Tools referenced in this portfolio include Shopify, Klaviyo, Airtable, Figma, GitHub, and Cursor. Connections are described as structured workflows and handoffs—not as fully autonomous API automation unless separately verified.",
  },

  applications: {
    heading: "Three Ways I Apply the Same Method",
    panels: [
      {
        id: "fishewear",
        eyebrow: "Grow an Existing Business",
        title: "FisheWear",
        description:
          "Connecting Shopify, Klaviyo, lifecycle marketing, content, creative production, customer segmentation, SEO, reporting, and AI-assisted workflows into a more measurable DTC growth operation.",
        ctaLabel: "View FisheWear",
        href: "/work/fishewear-growth-system",
        imageSrc: "/images/projects/fishewear-growth-system.svg",
        imageAlt: "FisheWear growth system concept visual",
      },
      {
        id: "totely",
        eyebrow: "Build a Product From Zero",
        title: "Totely",
        description:
          "Moving from customer frustration and opportunity research to brand, product strategy, UX, application development, physical labels, marketing, and a working AI-assisted storage system.",
        ctaLabel: "View Totely",
        href: "/work/totely-ai-storage",
        imageSrc: "/images/projects/totely-ai-storage.svg",
        imageAlt: "Totely AI storage concept visual",
      },
      {
        id: "campaign-intelligence",
        eyebrow: "Design an Operational AI System",
        title: "Campaign Intelligence",
        description:
          "Connecting Klaviyo performance, Shopify product validation, campaign strategy, Airtable planning, Figma production, human approval, Klaviyo drafts, and the next planning cycle.",
        ctaLabel: "View the System",
        href: "/systems/klaviyo-campaign-intelligence",
        imageSrc: "/images/systems/klaviyo-campaign-intelligence.svg",
        imageAlt: "Campaign intelligence system concept visual",
      },
    ] satisfies ApplicationPanel[],
  },

  customerFirst: {
    heading: "The Customer Outcome Still Comes First",
    body: [
      "A customer does not care that AI was used inside a workflow. They care that the product is useful, the communication is relevant, the experience is clear, and the business delivers what it promises.",
      "AI is valuable when it helps create a better customer result, a clearer decision, a stronger product, a more consistent process, or a faster path from insight to execution.",
    ],
    principles: [
      {
        title: "Useful Before Impressive",
        body: "Choose technology because it improves the outcome, not because it sounds advanced.",
      },
      {
        title: "Context Before Generation",
        body: "Strong outputs depend on accurate business, customer, brand, and performance context.",
      },
      {
        title: "Systems Before Isolated Prompts",
        body: "The goal is a repeatable workflow with rules, inputs, outputs, and accountability.",
      },
      {
        title: "Judgment Before Automation",
        body: "Do not automate a decision simply because a tool can technically perform it.",
      },
    ] satisfies PrincipleCard[],
  },

  aiLeverage: {
    heading: "Where AI Creates the Most Leverage",
    intro:
      "AI accelerates, supports, organizes, reviews, suggests, structures, prepares, and helps identify—without owning the final decision.",
    items: [
      "Research synthesis",
      "Pattern identification",
      "Context retrieval",
      "Strategic option development",
      "Structured planning",
      "Content adaptation",
      "Creative direction",
      "Code planning and review",
      "Documentation",
      "Workflow standardization",
      "Performance summarization",
      "Anomaly detection",
      "Cross-platform preparation",
      "Repetitive production support",
    ],
  },

  humanCenter: {
    heading: "Human Judgment Stays at the Center",
    body: "The strongest AI workflows do not remove people from the process. They reduce avoidable friction so people can spend more time making meaningful decisions.",
    items: [
      "Customer empathy",
      "Prioritization",
      "Brand judgment",
      "Ethical responsibility",
      "Commercial accountability",
      "Product taste",
      "Creative direction",
      "Final approval",
      "Privacy decisions",
      "Relationship management",
      "Leadership",
      "Choosing what not to build",
    ],
  },

  /**
   * Tool map uses only tools verified in this portfolio’s stack data or this
   * repository’s own development context. Incomplete verification stays broad.
   */
  toolMap: {
    heading: "Tools Organized by Purpose",
    intro:
      "These are the tools that appear across my portfolio work and operating systems. The list is organized by purpose—not as a logo wall or unverified proficiency claim.",
    groups: [
      {
        title: "Research and Thinking",
        items: [
          "AI research and synthesis workflows",
          "Customer and market analysis",
          "Search and reporting tools",
          "Planning documents and decision notes",
        ],
        note: "Specific research assistants vary by project; the constant is structured inquiry before generation.",
      },
      {
        title: "Product and Development",
        items: [
          "Cursor",
          "GitHub",
          "Next.js",
          "React",
          "TypeScript",
        ],
        note: "Verified through this portfolio repository and related product-development work. Additional platform stacks are not assumed.",
      },
      {
        title: "Commerce and Customer Data",
        items: ["Shopify", "Klaviyo"],
        note: "Primary commerce and lifecycle platforms used across DTC growth work.",
      },
      {
        title: "Operations",
        items: [
          "Airtable",
          "ClickUp",
          "Google Workspace",
          "Microsoft Office",
        ],
      },
      {
        title: "Creative Production",
        items: [
          "Figma",
          "Adobe Creative Suite",
          "CapCut",
          "AI-assisted image and content tools",
        ],
      },
    ] satisfies ToolGroup[],
  },

  implementation: {
    heading: "Working Systems, Prototypes, and Next-Stage Architecture",
    intro:
      "Capabilities are separated by maturity so conceptual architecture is not presented as completed automation.",
    items: [
      {
        label: "Evidence-led campaign and growth workflows",
        status: "implemented",
        description:
          "Repeatable operator practice connecting Klaviyo performance review, Shopify validation, phased planning, draft preparation, and human approval.",
      },
      {
        label: "Product discovery through working digital product",
        status: "implemented",
        description:
          "Totely demonstrates problem discovery, brand, UX, and a functioning public product surface with human product judgment throughout.",
      },
      {
        label: "AI-assisted portfolio and case-study systems",
        status: "implemented",
        description:
          "This site documents operating models, status language, and connected proof routes for growth, product, and campaign systems.",
      },
      {
        label: "Structured Airtable-to-Figma creative handoff",
        status: "prototype",
        description:
          "Campaign records feed structured creative briefs; handoff still relies on human transfer and review.",
      },
      {
        label: "Designer-ready wireframe and AI first-design paths",
        status: "prototype",
        description:
          "Two creative production paths are designed and partially demonstrated; designer review remains required.",
      },
      {
        label: "Closed-loop learning standards",
        status: "designed",
        description:
          "Naming conventions, phase architecture, decision rules, and post-campaign learning records are documented for reuse.",
      },
      {
        label: "Deeper platform automation and additional AI skills",
        status: "future",
        description:
          "Expanded API automation and future systems (SEO, product launch, content production) remain next-stage work.",
      },
    ] satisfies ImplementationStatusItem[],
  },

  closing: {
    heading: "The Goal Is Not More AI. It Is Better Work.",
    body: [
      "I use AI to help turn customer insight, business information, creative ideas, technical execution, and performance data into connected systems.",
      "The result should be clearer decisions, stronger products, faster learning, more consistent execution, and teams that can accomplish more without lowering their standards.",
    ],
    ctas: [
      { label: "View Featured Work", href: "/#work" },
      {
        label: "Explore Campaign Intelligence",
        href: "/systems/klaviyo-campaign-intelligence",
      },
      { label: "Contact Steve", href: "/contact" },
    ],
  },

  metadata: {
    title: "How I Build With AI | Steve Watts",
    description:
      "Explore Steve Watts’ practical AI operating model for research, strategy, product development, connected workflows, creative production, measurement, and continuous improvement.",
  },
} as const;

export const aiBuildMethodPreview = {
  id: "how-i-build",
  title: "How I Build With AI",
  titleLines: ["How I Build", "With AI"] as const,
  introduction:
    "AI is integrated across research, strategy, build, review, and measurement—while customer understanding, judgment, and final accountability stay human.",
  stages: ["Research", "Strategy", "Build", "Review", "Measure"] as const,
  impactAtAGlance: {
    eyebrow: "Impact at a Glance",
    items: [
      {
        value: "9-Stage Model",
        label: "From Problem Discovery to Continuous Improvement",
        type: "methodology",
        prominence: "primary",
      },
      {
        value: "3 Types of Proof",
        label: "Growth · Product · Operations",
        type: "methodology",
        prominence: "secondary",
      },
      {
        value: "Human-Led",
        label: "AI-Assisted Throughout",
        type: "methodology",
        prominence: "secondary",
      },
    ],
  },
  proofs: [
    { label: "FisheWear", href: "/work/fishewear-growth-system" },
    { label: "Totely", href: "/work/totely-ai-storage" },
    {
      label: "Campaign Intelligence",
      href: "/systems/klaviyo-campaign-intelligence",
    },
  ] satisfies ProofLink[],
  cta: {
    label: "Explore My AI Operating Model",
    href: "/how-i-build-with-ai",
  },
} as const;
