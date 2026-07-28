/**
 * Structured content for the AI Campaign Intelligence & Creative Production System.
 *
 * Claim guardrails: no invented revenue, conversion rates, time-saved %,
 * autonomous sending, or unverified live API integrations. Human approval
 * remains required before scheduling or sending.
 */

export type MetaItem = { label: string; value: string };
export type WorkflowStage = { number: string; label: string };
export type DecisionCard = { title: string; body: string };
export type Phase = { name: string; purpose: string };
export type CreativePath = {
  title: string;
  body: string;
  items: string[];
  note?: string;
};
export type Guardrail = { title: string; body: string };
export type StatusGroup = {
  label: "Implemented" | "Prototype" | "Designed Workflow" | "Future Expansion";
  items: string[];
  note?: string;
};

export const klaviyoCampaignSystem = {
  hero: {
    eyebrow: "AI Skill · Lifecycle Marketing · Creative Operations",
    title: "AI Campaign Intelligence & Creative Production System",
    supportingHeadline:
      "From performance data to approved creative, campaign drafts, and the next growth decision.",
    intro:
      "I designed an AI-assisted campaign operating system that connects Klaviyo performance, Shopify product data, audience strategy, Airtable planning, Figma production, human review, Klaviyo draft creation, and post-campaign analysis.\n\nThe system can create a designer-ready wireframe or produce the first creative version using an approved Figma design system. After human review, it prepares structured Klaviyo drafts, measures performance after launch, and carries those learnings into the next campaign.",
    meta: [
      {
        label: "Role",
        value: "System Designer / Marketing Operator / Creative Strategist",
      },
      {
        label: "Focus",
        value:
          "Lifecycle Marketing, AI Workflows, Creative Production & Campaign Operations",
      },
      { label: "Tools", value: "Klaviyo, Shopify, Airtable, Figma & AI" },
      { label: "Year", value: "2026" },
    ] satisfies MetaItem[],
    humanNote:
      "Human approval remains required before scheduling or sending any campaign.",
    image: {
      src: "/images/systems/klaviyo-campaign-intelligence/hero.svg",
      alt: "Editorial diagram connecting campaign data, structured planning, creative frames, and review-ready drafts without fake metrics.",
    },
  },

  problem: {
    heading: "Campaign Work Was Scattered Across Too Many Systems",
    body: [
      "Building a strong campaign often requires moving repeatedly between analytics, product information, inventory, customer segments, campaign calendars, copy documents, creative briefs, design files, approval threads, and project-management tools.",
      "No individual step is especially unusual. The difficulty comes from reconstructing all of the necessary context every time a new campaign begins.",
      "Product availability may live in Shopify. Previous results live in Klaviyo. Planning may live in Airtable. Creative production happens in Figma. Approvals happen somewhere else. The final campaign then needs to be rebuilt again inside Klaviyo.",
    ],
    featuredQuestion:
      "How could a lean team move from campaign objective to review-ready execution without losing product accuracy, customer context, creative quality, or human control?",
  },

  fullSystem: {
    heading: "An End-to-End Campaign Operating System",
    intro:
      "The operating model is a loop: strategy informs creative production, drafts reach Klaviyo for human review, results return to the record, and the next campaign starts smarter.",
    stages: [
      { number: "01", label: "Campaign Objective" },
      { number: "02", label: "Klaviyo Performance Analysis" },
      { number: "03", label: "Shopify Product and Inventory Validation" },
      { number: "04", label: "Audience, Offer and Campaign Strategy" },
      { number: "05", label: "Phased Email and SMS Planning" },
      { number: "06", label: "Structured Campaign Record in Airtable" },
      { number: "07", label: "Figma Creative Brief and Wireframe" },
      { number: "08", label: "Human Designer Handoff or AI-Created Creative" },
      { number: "09", label: "Review and Approval" },
      { number: "10", label: "Klaviyo Draft Creation" },
      { number: "11", label: "Campaign Launch" },
      { number: "12", label: "Performance Analysis" },
      { number: "13", label: "Next Campaign Planning" },
    ] satisfies WorkflowStage[],
    loopNote:
      "Stage 13 connects back to strategy—so the system behaves as a learning loop, not a one-way pipeline.",
    image: {
      src: "/images/systems/klaviyo-campaign-intelligence/workflow.svg",
      alt: "Conceptual workflow visual suggesting a closed loop from plan through measure and learn.",
    },
  },

  humanBrief: {
    heading: "The System Begins With an Approved Business Objective",
    body: [
      "The workflow begins with a human-defined campaign objective. It does not independently invent a sale, discount, deadline, extension, or business priority.",
    ],
    exampleLabel: "Example Campaign Brief",
    brief: {
      summary:
        "Build a phased Fourth of July campaign that promotes approved sale products, protects recent purchasers from irrelevant messages, coordinates email and SMS, prepares the creative workflow, and records the complete plan for team review.",
      fields: [
        { label: "Campaign", value: "Fourth of July" },
        {
          label: "Objective",
          value:
            "Drive qualified sale revenue while protecting customer experience.",
        },
        { label: "Channels", value: "Email and SMS" },
      ],
      requirements: [
        "Use verified sale products only",
        "Confirm inventory before featuring products",
        "Exclude inappropriate recent purchasers",
        "Coordinate campaign phases",
        "Create review-ready work",
        "Do not schedule or send automatically",
      ],
    },
  },

  klaviyoLayer: {
    heading: "Klaviyo Supplies the Performance Evidence",
    body: [
      "The system begins by reviewing what has already happened rather than treating every campaign as a blank page.",
    ],
    reviewed: [
      "Recent campaign performance",
      "Flow-attributed revenue",
      "Email engagement",
      "SMS engagement",
      "Conversion activity",
      "Audience response",
      "Unsubscribe and spam signals",
      "Previous campaign sequences",
      "Phase-by-phase results",
      "High-performing subject and offer patterns",
      "Channel contribution",
      "Outlier or anomalous results requiring review",
    ],
    principle:
      "The system uses historical performance to form the next question. It does not treat attribution data as unquestionable truth.",
  },

  shopifyLayer: {
    heading: "Shopify Verifies What the Business Can Actually Sell",
    body: [
      "Before a product appears in campaign copy or creative, the workflow checks current Shopify information.",
    ],
    checks: [
      "Product name",
      "Product status",
      "Sale eligibility",
      "Price",
      "Inventory availability",
      "Product URL",
      "Collection placement",
      "Product imagery",
      "Variant availability",
      "Recent purchasing context where appropriate",
    ],
    rules: [
      "The system should never promote a product simply because it appeared in an older campaign.",
      "Sale campaigns may only use products that are currently approved for the promotion and have suitable inventory.",
    ],
  },

  decisionLayer: {
    heading: "Structured Rules Turn Data Into Strategy",
    body: [
      "The system is more than a copy generator. It applies operating rules that help determine who should receive a message, which products are appropriate, how campaign phases should work together, and where human review is required.",
    ],
    cards: [
      {
        title: "Broad First",
        body: "Start with the broadest appropriate audience before unnecessarily narrowing reach.",
      },
      {
        title: "Engagement Windows",
        body: "Use recent engagement windows, such as seven to fourteen days, when stronger intent is needed.",
      },
      {
        title: "Recent Purchaser Protection",
        body: "Exclude customers when a promotion would be irrelevant or create a poor experience.",
      },
      {
        title: "Verified Products",
        body: "Use current Shopify data to validate sale status, inventory, names, imagery, and links.",
      },
      {
        title: "Email and SMS Coordination",
        body: "Treat email and SMS as connected parts of one campaign rather than unrelated sends.",
      },
      {
        title: "Real Urgency Only",
        body: "Match urgency to the approved promotional timeline. Do not invent scarcity or deadlines.",
      },
      {
        title: "List Health",
        body: "Consider unsubscribe, spam, engagement, and sending frequency before increasing pressure.",
      },
      {
        title: "Human Accountability",
        body: "AI may recommend, structure, and prepare. A person remains responsible for commercial and brand decisions.",
      },
    ] satisfies DecisionCard[],
  },

  campaignArchitecture: {
    heading: "Campaigns Are Built as Connected Phases",
    phases: [
      {
        name: "Phase 1: Tease",
        purpose: "Create anticipation without revealing every detail.",
      },
      {
        name: "Phase 2: Celebration",
        purpose: "Reveal the campaign and establish the central story.",
      },
      {
        name: "Phase 3: Product Focus",
        purpose: "Connect selected products with customer needs and use cases.",
      },
      {
        name: "Phase 4: Engaged Reminder",
        purpose:
          "Reach qualified customers who engaged but have not purchased.",
      },
      {
        name: "Phase 5: Last Chance",
        purpose: "Communicate the real deadline clearly.",
      },
      {
        name: "Phase 6: Conditional Extension",
        purpose:
          "Use only when the business approves an extension and performance justifies it.",
      },
    ] satisfies Phase[],
    extensionNote:
      "The system does not invent an extension. It can prepare the extension path, but the business must approve whether it is used.",
  },

  airtable: {
    heading: "Airtable Turns Strategy Into Structured Work",
    body: [
      "The complete campaign plan is written into Airtable as a reusable operational record. This prevents the strategy from remaining trapped inside a chat, document, or temporary planning session.",
    ],
    namingPattern: "WS_MM_DD_YYYY // Campaign — Phase # – Phase Name",
    namingExample: "WS_06_30_2026 // 4th of July — Phase 2 – Celebration",
    operatingNote:
      "Airtable is the operational source connecting strategy, creative, execution, and reporting.",
    fields: [
      "Campaign Name",
      "Campaign Objective",
      "Campaign Phase",
      "Audience",
      "Audience Exclusions",
      "Offer",
      "Products",
      "Inventory Status",
      "Product Links",
      "Email Subject Line",
      "Preview Text",
      "Email Copy",
      "SMS Copy",
      "Creative Direction",
      "Required Assets",
      "Figma Status",
      "Designer Status",
      "Review Status",
      "Klaviyo Draft Status",
      "Launch Date",
      "Performance Results",
      "Campaign Learnings",
      "Next-Campaign Recommendations",
    ],
  },

  airtableToFigma: {
    heading: "Structured Campaign Data Becomes a Creative Brief",
    body: [
      "The Airtable record feeds a structured creative brief into Figma. Because the strategy, copy, products, links, imagery requirements, and content hierarchy are already organized, creative production begins with context rather than an empty frame.",
      "The system passes structured campaign information into the Figma production workflow.",
    ],
    flow: [
      "Airtable Campaign Record",
      "Figma Brief",
      "Content Hierarchy",
      "Wireframe",
      "Production Design",
      "Review",
    ],
    briefIncludes: [
      "Campaign objective",
      "Audience",
      "Campaign phase",
      "Headline",
      "Supporting copy",
      "Product blocks",
      "Image requirements",
      "CTA labels",
      "CTA destinations",
      "Mobile structure",
      "Desktop structure",
      "Design notes",
      "Required disclaimers",
      "Approved product assets",
    ],
  },

  creativePaths: {
    heading: "One Brief, Two Creative Production Paths",
    paths: [
      {
        title: "Designer-Ready Wireframe",
        body: "The system creates a structured email wireframe that defines content hierarchy, headline placement, product modules, image requirements, CTA placement, mobile order, desktop order, and design notes.\n\nThe designer receives a clear starting point rather than an empty canvas.",
        items: [
          "Email structure",
          "Module order",
          "Copy placement",
          "Product blocks",
          "Image guidance",
          "CTA placement",
          "Mobile layout",
          "Desktop layout",
          "Designer notes",
        ],
      },
      {
        title: "AI-Created First Design",
        body: "When an approved design system and reusable Figma components are available, AI can create the first visual version using existing typography, brand colors, modules, product imagery, and approved campaign copy.\n\nA human designer can then review, refine, or approve the work.",
        items: [
          "Approved Figma design system",
          "Reusable components",
          "Verified product imagery",
          "Approved brand typography",
          "Approved color system",
          "Final campaign copy",
          "Mobile and desktop rules",
          "Human creative review",
        ],
        note: "Requirements before this path is used",
      },
    ] satisfies CreativePath[],
    statement:
      "The system may prepare a designer’s work or complete more of the initial production. It does not automatically remove the designer from the process.",
  },

  wireframeExample: {
    heading: "From Structured Record to Email Layout",
    label: "Illustrative Wireframe",
    note: "Conceptual layout only — not a real sent email.",
    modules: [
      { type: "eyebrow", label: "Campaign eyebrow" },
      { type: "headline", label: "Main headline block" },
      { type: "hero", label: "Hero-image placeholder" },
      { type: "copy", label: "Supporting copy" },
      { type: "products", label: "Two product modules" },
      { type: "cta", label: "CTA block" },
      { type: "urgency", label: "Final urgency or deadline block" },
    ],
    mobileNote: "Mobile stacking: modules collapse into a single-column order.",
    sourceFields: [
      { label: "Headline", value: "Celebrate the Fourth Outside" },
      { label: "Primary CTA", value: "Shop the Sale" },
      { label: "Products", value: "Verified Sale Products" },
      { label: "Audience", value: "Approved Engaged Segment" },
      { label: "Creative status", value: "Wireframe Ready" },
    ],
  },

  review: {
    heading: "Automation With Accountability",
    guardrails: [
      {
        title: "No Autonomous Sending",
        body: "Campaigns remain drafts until a human reviews, approves, schedules, and sends them.",
      },
      {
        title: "Verified Products Only",
        body: "Product details, sale eligibility, inventory, imagery, and links must come from current Shopify data.",
      },
      {
        title: "Protected Audiences",
        body: "Recent purchasers and inappropriate segments are excluded when necessary.",
      },
      {
        title: "Human Creative Review",
        body: "AI-generated creative remains subject to brand, design, product, and commercial review.",
      },
      {
        title: "No Fabricated Results",
        body: "The system uses retrieved performance information and does not invent revenue, engagement, or customer behavior.",
      },
      {
        title: "Approved Promotions Only",
        body: "The system cannot invent discounts, deadlines, extensions, or product eligibility.",
      },
      {
        title: "Private Data Protection",
        body: "Customer information, order data, credentials, private account information, and API details must not appear in portfolio visuals.",
      },
    ] satisfies Guardrail[],
  },

  klaviyoDraft: {
    heading: "Approved Work Becomes a Klaviyo Draft",
    body: [
      "After strategy, copy, products, audiences, and creative have been reviewed, the system prepares the campaign inside Klaviyo as a draft.",
    ],
    components: [
      "Structured campaign name",
      "Email subject line",
      "Preview text",
      "Approved design",
      "Product links",
      "Audience",
      "Exclusions",
      "UTM structure",
      "SMS companion draft",
      "Internal notes",
      "Campaign phase",
      "Review status",
    ],
    namingPattern: "WS_MM_DD_YYYY // Campaign — Phase # – Phase Name",
    statement:
      "The system creates drafts. A human reviews, approves, schedules, and sends.",
  },

  launch: {
    heading: "Launch Remains a Human-Controlled Decision",
    body: [
      "Campaign timing, final audience selection, promotional accuracy, legal requirements, brand approval, and send authorization remain human responsibilities.",
      "The system reduces repetitive work and improves consistency, but it does not own the final decision to communicate with customers.",
    ],
    sequence: [
      "Strategy Approved",
      "Products Verified",
      "Creative Approved",
      "Audience Reviewed",
      "Draft Checked",
      "Human Schedules Campaign",
    ],
  },

  performance: {
    heading: "The Workflow Returns to the Data After Launch",
    body: [
      "After the campaign runs, the same system returns to Klaviyo and Shopify to examine what happened.",
    ],
    reviewAreas: [
      "Revenue attribution",
      "Conversion activity",
      "Click behavior",
      "Product response",
      "Audience response",
      "Email versus SMS contribution",
      "Phase-by-phase performance",
      "Unsubscribe and spam signals",
      "Creative performance",
      "Inventory impact",
      "Unexpected anomalies",
      "Differences between attributed and commercial results",
    ],
    anomaliesHeading: "Anomalies Require Review",
    anomaliesBody:
      "Unusually large orders, extreme attributed revenue, small SMS audiences, or unexpected performance spikes should be flagged for investigation rather than automatically treated as proof of campaign success.",
  },

  resultsToAirtable: {
    heading: "Campaign Results Become Institutional Knowledge",
    body: [
      "Performance findings are written back into the Airtable campaign record rather than being lost inside a temporary report.",
    ],
    fields: [
      "Revenue Notes",
      "Best-Performing Phase",
      "Audience Findings",
      "Product Findings",
      "Creative Findings",
      "Email Findings",
      "SMS Findings",
      "List-Health Notes",
      "Attribution Caveats",
      "Unexpected Results",
      "Recommended Tests",
      "Next-Campaign Direction",
    ],
    principle:
      "The system should remember what the team learned, not only what the team sent.",
  },

  nextCampaign: {
    heading: "Every Campaign Improves the Starting Point for the Next One",
    body: [
      "The final output is not simply a report. The system converts performance into the next set of campaign decisions.",
    ],
    loop: [
      "Plan",
      "Create",
      "Design",
      "Review",
      "Draft",
      "Launch",
      "Measure",
      "Learn",
      "Plan Better",
    ],
    nextActions: [
      "Repeat a successful audience strategy",
      "Retest a strong creative angle",
      "Reduce pressure on a weak segment",
      "Change the product mix",
      "Revise the campaign phase order",
      "Test a different email and SMS relationship",
      "Improve a low-performing content block",
      "Investigate attribution anomalies",
      "Update the reusable campaign brief",
      "Adjust future Figma modules",
    ],
  },

  exampleCampaign: {
    heading: "Example: A Phased Fourth of July Campaign",
    label: "Illustrative Workflow Based on a Real Campaign Process",
    inputs: [
      "Previous Klaviyo performance",
      "Current customer engagement",
      "Approved sale details",
      "Eligible Shopify products",
      "Available inventory",
      "Campaign dates",
      "Brand standards",
      "Audience exclusions",
    ],
    outputs: [
      "Multi-phase campaign structure",
      "Audience recommendations",
      "Exclusion logic",
      "Email drafts",
      "SMS drafts",
      "Product links",
      "Airtable campaign records",
      "Figma wireframe instructions",
      "Designer or AI production path",
      "Review-ready Klaviyo drafts",
      "Post-campaign analysis",
      "Next-campaign recommendations",
    ],
    privacyNote:
      "This portfolio presentation does not expose customer details, order-level information, private revenue figures, API keys, credentials, or private Airtable/Figma links.",
  },

  proves: {
    heading: "This Is More Than Email Automation",
    body: [
      "The value of the system is not that AI can write an email.",
      "The system demonstrates the ability to:",
    ],
    points: [
      "Understand previous performance.",
      "Verify what the business can currently sell.",
      "Develop an audience and campaign strategy.",
      "Structure the work inside Airtable.",
      "Transform the strategy into a Figma brief.",
      "Produce a designer-ready wireframe or first creative version.",
      "Prepare review-ready Klaviyo drafts.",
      "Preserve human approval.",
      "Analyze the outcome.",
      "Improve the next campaign.",
    ],
    closing:
      "This is an AI-enabled marketing production system connecting data, strategy, creative operations, execution, governance, and learning.",
  },

  role: {
    heading: "My Role",
    body: [
      "I designed the workflow, operating rules, campaign structure, data connections, approval process, creative handoff, draft safeguards, and reporting loop.",
      "I designed, configured, connected, directed, standardized, and operationalized the system with AI and platform tools—without claiming to have personally built every connector, API, plugin, or platform feature.",
    ],
    responsibilities: [
      "System architecture",
      "Campaign strategy",
      "Lifecycle marketing",
      "Segmentation logic",
      "Shopify product validation rules",
      "Klaviyo performance analysis",
      "Airtable workflow design",
      "Figma creative-process design",
      "AI prompt and context design",
      "Human approval guardrails",
      "Campaign naming standards",
      "Draft workflow",
      "Performance-report structure",
      "Next-campaign learning loop",
    ],
  },

  /**
   * Status language is intentionally conservative.
   * This portfolio repo does not contain production Klaviyo/Shopify/Airtable/Figma
   * connectors. Capabilities below reflect the operating model used in practice
   * versus handoffs that remain prototype / designed workflow stages.
   */
  implementation: {
    heading: "Designed as a Working, Expandable System",
    intro:
      "The portfolio presents the operating model clearly. Capabilities are separated by maturity so the page does not overstate automation.",
    groups: [
      {
        label: "Implemented",
        note: "Repeatable operator workflows used in live campaign practice with human control.",
        items: [
          "Klaviyo performance retrieval and review as campaign input",
          "Shopify product and inventory validation before featuring products",
          "Structured multi-phase campaign planning",
          "Email and SMS draft creation for human review",
          "Airtable campaign records as the operational source of truth",
          "Human review and approval rules before send",
          "Performance-analysis workflow after launch",
        ],
      },
      {
        label: "Prototype",
        note: "Demonstrated or partially assisted paths that still rely on structured handoff and human transfer.",
        items: [
          "Airtable-to-Figma structured creative handoff",
          "Automated designer-ready wireframe creation from campaign records",
          "AI-created first Figma production using approved components",
          "More fully automated end-to-end draft assembly across tools",
        ],
      },
      {
        label: "Designed Workflow",
        note: "Documented architecture for consistency as the system expands.",
        items: [
          "Closed-loop next-campaign planning from Airtable learnings",
          "Standardized campaign naming and phase architecture",
          "Decision-layer rules for audience, urgency, and list health",
          "Two-path creative production model (wireframe vs AI first design)",
        ],
      },
      {
        label: "Future Expansion",
        note: "Not claimed as complete in this portfolio presentation.",
        items: [
          "Deeper platform automation where APIs and governance allow",
          "Additional AI skills systems (SEO, product launch, content production)",
          "Richer redacted proof assets from live campaign evidence",
        ],
      },
    ] satisfies StatusGroup[],
  },

  result: {
    heading: "The Result",
    body: [
      "The system turns campaign production from a collection of disconnected tasks into a structured operating loop.",
      "Performance data informs the strategy. Shopify verifies the commercial reality. Airtable organizes the work. Figma translates the strategy into creative production. Human reviewers protect quality and accountability. Klaviyo receives review-ready drafts. Post-campaign results then improve the next plan.",
      "The result is faster production, stronger context, more consistent execution, clearer accountability, and a campaign process that becomes more useful after every launch.",
    ],
  },

  related: {
    label: "Related Work",
    projectIds: ["fishewear-growth-system", "totely-ai-storage"],
  },
} as const;
