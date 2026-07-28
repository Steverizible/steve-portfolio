/**
 * Structured content for the Totely AI product strategy case study.
 *
 * Company: Totely by There's A Spot For That
 * Marketing: https://www.theresaspotforthat.com/
 * App: https://app.totely.app/
 *
 * Claim guardrails:
 * - Do not invent revenue, customers, downloads, search accuracy,
 *   App Store approval, interview counts, market size, or search volumes.
 * - Voice search is marketed publicly but app verification is incomplete —
 *   label as future / designed, not implemented.
 * - Family sharing, AR, smart-home, seasonal reminders, and declutter
 *   assistance are future / designed — not claimed as shipped.
 * - Named PDFs (market research report, roadmap, SEO playbook) were NOT
 *   found in this repository. Research narrative below reflects approved
 *   portfolio-summary directions with TEMPORARY evidence language — do not
 *   claim those documents were reviewed here.
 * - Team-aware authorship: Steve led vision, brand, creative, product
 *   strategy, growth, and AI workflows; Nick leads AI & product thinking;
 *   Ben contributes product/systems. Do not claim sole engineering authorship.
 * - Free plan verified on the live public site: up to 10 totes free forever
 *   (current public pricing message only).
 */

import type { ImpactAtGlance } from "@/lib/impact";
import type { ImplementationStatusItem } from "@/lib/ai-operating-model";

export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type ExternalCta = {
  label: string;
  href: string;
};

export type InsightCard = {
  id: string;
  title: string;
  body: string;
};

export type ResearchGroup = {
  id: string;
  title: string;
  items: string[];
};

export type ProductCapability = {
  label: string;
  status: "implemented" | "prototype" | "designed" | "future";
  description: string;
};

export type AiDevStage = {
  number: string;
  title: string;
  aiContribution: string;
  humanResponsibility: string;
  output: string;
  evidenceNote?: string;
};

export type WorkflowCard = {
  id: string;
  name: string;
  input: string;
  aiAssisted: string;
  humanReview: string;
  output: string;
  reusability: string;
};

export type MarketingBlock = {
  id: string;
  title: string;
  items: string[];
};

export type OutcomeItem = {
  id: string;
  title: string;
  body: string;
};

export type RelatedWork = {
  id: string;
  label: string;
  href: string;
  relationship: string;
};

export type ProductLoopStage = {
  number: string;
  title: string;
  description: string;
};

export type JourneyStep = {
  number: string;
  title: string;
  description: string;
};

export type TechTool = {
  name: string;
  howUsed: string;
  logoSrc?: string;
};

export type TechGroup = {
  title: string;
  tools: TechTool[];
};

export type BrandHierarchyItem = {
  label: string;
  value: string;
};

export const TOTELY_MARKETING_URL = "https://www.theresaspotforthat.com/";
export const TOTELY_APP_URL = "https://app.totely.app/";

export const totelyCaseStudy = {
  metadata: {
    title: "Totely AI Product Strategy Case Study | Steve Watts",
    description:
      "How Steve Watts used AI-assisted research, product strategy, development, SEO, content systems, automation, and modern tools to build Totely and a reusable startup-development framework.",
  },

  hero: {
    eyebrow: "Totely · AI Product Strategy, Growth & Development",
    title: "Building an AI-Native Product Development System",
    supportingHeadline:
      "From storage frustration to a searchable product — and a reusable way to research, decide, build, and launch with AI.",
    intro:
      "Totely by There's A Spot For That began with a familiar household problem: people carefully put belongings into totes, closets, garages, attics, moving boxes, and storage units — then cannot remember which container holds what when they need it later.\n\nThe product answer is simple to explain and hard to execute well. Number a container. Capture what is inside. Save where it lives. Search later in natural language and get back to the right tote and location.\n\nThis case study is not only about the consumer product. It documents how I used AI-assisted research, product strategy, brand, UX direction, development coordination, SEO, content systems, and operating workflows to move from problem discovery toward a working public product — while building patterns that can be reused on the next startup.",
    methodologyNote:
      "Research-first narrative with claim guardrails: live marketing and app surfaces are the primary public proof. Unverified features, future roadmap ideas, and missing internal documents are labeled clearly. No invented revenue, users, downloads, or accuracy metrics.",
    meta: [
      {
        label: "Role",
        value: "Co-Founder / Product Strategy, Growth & AI Workflow Lead",
      },
      { label: "Period", value: "2025–Present" },
      {
        label: "Focus",
        value:
          "AI Product Strategy, Growth Systems, Brand, UX & Development Coordination",
      },
      {
        label: "Product",
        value: "Totely by There's A Spot For That",
      },
    ] satisfies CaseStudyMeta[],
    ctas: [
      { label: "Visit Totely", href: TOTELY_MARKETING_URL },
      { label: "Open the App", href: TOTELY_APP_URL },
    ] satisfies ExternalCta[],
    image: {
      src: "/images/work/totely/hero.webp",
      alt: "Illustrative Totely product concept connecting numbered storage containers with a simplified mobile search experience.",
    },
    imageStatus: "illustrative" as const,
  },

  atAGlance: {
    eyebrow: "At a Glance",
    items: [
      {
        value: "Research First",
        label: "Problem, Behavior and Competitive Framing Before Build",
        type: "methodology",
        prominence: "primary",
      },
      {
        value: "AI-Native Build",
        label: "Product Strategy, Content and Development Acceleration",
        type: "product",
        prominence: "secondary",
      },
      {
        value: "End-to-End System",
        label: "Brand, Marketing Site, App Workflow and Pricing Message",
        type: "product",
        prominence: "secondary",
      },
      {
        value: "Reusable Workflows",
        label: "Repeatable Startup Research-to-Launch Patterns",
        type: "operational",
        prominence: "secondary",
      },
    ],
    guardrail:
      "At-a-glance items describe methodology and product scope — not revenue, users, downloads, conversion, or search-accuracy claims.",
  } satisfies ImpactAtGlance,

  storageTrap: {
    heading: "The Storage Trap",
    body: [
      "Most households are good at putting things away and bad at finding them later. Labels fade. Memories fade. Boxes move. Seasons change. The system that felt organized in the moment becomes a wall of identical containers.",
      "Traditional approaches often optimize for filing rather than retrieval. Spreadsheets, rigid category trees, and perfect inventory discipline ask users to do the hardest work up front — before the product has repaid the effort.",
    ],
    traditionalFailures: [
      "Handwritten labels that become incomplete or illegible over time",
      "Inventory spreadsheets that require too much typing to maintain",
      "Folder-style organization that assumes perfect category memory",
      "Photo dumps with no durable container identity or location context",
      "Tools that create value only after exhaustive setup",
    ],
    featuredQuestion:
      "What if finding something in storage felt more like asking a question than maintaining a spreadsheet?",
  },

  researchBeforeBuilding: {
    heading: "Research Before Building",
    principle:
      "Start with how people describe the frustration, what existing tools demand, and where setup friction causes abandonment — then decide what the first useful product must do.",
    body: [
      // TEMPORARY evidence note: named market-research / roadmap / SEO PDFs
      // were not found in this repository. The groups below reflect research
      // directions from the approved portfolio summary narrative, not claims
      // that specific internal reports were reviewed here.
      "Before treating Totely as a technology project, the work focused on the customer situation: how people store belongings, how they talk about lost items, what they will tolerate during setup, and which adjacent products already compete for attention.",
      "Research directions were used to frame product requirements, messaging, and MVP boundaries. Quantified market-size, search-volume, or interview-count claims are intentionally omitted until durable evidence can be published.",
    ],
    researchGroups: [
      {
        id: "customer-signal",
        title: "Customer and Cultural Signal",
        items: [
          "Customer conversations about garage, closet, attic, moving, and seasonal storage frustration",
          "Reddit and forum discussions describing lost items inside labeled and unlabeled containers",
          "YouTube and creator content around home organization, moving, and storage-unit workflows",
          "App-store and product reviews for home-inventory and organization tools",
        ],
      },
      {
        id: "demand-language",
        title: "Demand Language and Search Intent",
        items: [
          "Google Trends exploration around organization, moving, and storage themes",
          "SEO keyword research into how people describe finding stored belongings",
          "Seasonal and moving-pattern language that shows up around holidays, decluttering, and relocations",
        ],
      },
      {
        id: "competitive-landscape",
        title: "Competitive and Adjacent Landscape",
        items: [
          "Competitor websites for home-inventory and storage-organization products",
          "Home-inventory app patterns for capture, catalogs, and retrieval",
          "Labeling products and physical container systems",
          "Public pricing models and free-entry approaches",
          "Manufacturing and physical-product options for numbered labels and kits",
        ],
      },
    ] satisfies ResearchGroup[],
  },

  researchDefinedProduct: {
    heading: "Research Defined the Product",
    body: [
      "The research did not produce a longer feature list. It narrowed the product to a retrieval loop people could understand immediately: identity, capture, location, and later search.",
      "The strategic implication was clear. Totely had to create value before asking the user to become perfectly organized.",
    ],
    insightCards: [
      {
        id: "retrieval-over-filing",
        title: "Retrieval Beats Filing",
        body: "People already store things. The unpaid work is remembering which tote holds what and where that tote lives months later.",
      },
      {
        id: "setup-friction",
        title: "Setup Friction Kills Inventory Tools",
        body: "Systems that require exhaustive typing or perfect taxonomy lose users before the first successful find.",
      },
      {
        id: "photo-first",
        title: "Photos Lower the Cost of Capture",
        body: "Visual capture can document contents faster than manual item entry, especially during a move or seasonal pack-down.",
      },
      {
        id: "natural-language",
        title: "People Search the Way They Remember",
        body: "Natural-language questions match memory better than exact category names — as long as the product returns a tote and a place.",
      },
      {
        id: "free-first-value",
        title: "The Free Path Must Work",
        body: "A credible entry experience needs real utility before monetization pressure. The live public pricing message currently offers up to 10 totes free forever.",
      },
    ] satisfies InsightCard[],
    pullQuote:
      "The product had to create value before asking the user to become perfectly organized.",
  },

  role: {
    heading: "Role and Contribution",
    intro:
      "As Co-Founder / Product Strategy, Growth & AI Workflow Lead, I connected customer research, product definition, brand, creative direction, growth systems, SEO and content planning, and AI-assisted development workflows.",
    contribution:
      "My contribution spanned vision, brand, creative, product strategy, growth, and AI workflow leadership — coordinating toward a public marketing site and working application experience without claiming sole engineering authorship of every implementation detail.",
    teamNote:
      "Totely is a team product. Steve led vision, brand, creative, product strategy, growth, and AI workflows. Nick leads AI and product thinking. Ben contributes product and systems work. Engineering, product, and creative decisions were shared responsibilities.",
    responsibilities: [
      "Problem discovery and opportunity framing",
      "Customer and competitive research synthesis",
      "Product positioning and naming direction",
      "Brand system and customer promise",
      "MVP definition and feature prioritization",
      "User-journey and UX direction",
      "Physical numbered-label concept direction",
      "Marketing-site strategy and messaging",
      "SEO and content system planning",
      "Growth and pricing-message framing",
      "AI-assisted research, writing, and development workflows",
      "QA, documentation, and launch preparation coordination",
      "Reusable startup workflow design for future products",
    ],
  },

  whatWeBuilt: {
    heading: "What We Built",
    intro:
      "Capabilities below are separated by maturity. Implemented items reflect verified public marketing and app onboarding surfaces. Future and designed items are roadmap or marketed concepts that are not treated as fully verified in-app behavior.",
    capabilities: [
      {
        label: "Searchable home-inventory platform",
        status: "implemented",
        description:
          "Public marketing and application surfaces present Totely as a searchable system for stored belongings.",
      },
      {
        label: "Numbered-container tracking",
        status: "implemented",
        description:
          "Containers receive durable numeric identities that connect physical totes to digital records.",
      },
      {
        label: "Photo-based item capture",
        status: "implemented",
        description:
          "Marketing presents photography as the primary way to document what is inside a tote.",
      },
      {
        label: "AI-assisted first item list",
        status: "implemented",
        description:
          "Marketing describes AI assistance that helps turn a capture into an initial item list for review.",
      },
      {
        label: "Editable catalog / review",
        status: "implemented",
        description:
          "The Review step lets users correct and refine the catalog before relying on it for retrieval.",
      },
      {
        label: "Saved container locations",
        status: "implemented",
        description:
          "Users can record where a container lives so a match includes place context, not only a tote number.",
      },
      {
        label: "Natural-language text search",
        status: "implemented",
        description:
          "Marketing presents natural-language text search for finding items later. Voice search is not claimed as verified here.",
      },
      {
        label: "Photo proof",
        status: "implemented",
        description:
          "Stored photos support confidence in what a tote contains when a search returns a match.",
      },
      {
        label: "Marketing website",
        status: "implemented",
        description:
          "Live marketing experience at There's A Spot For That explains the product promise and workflow.",
      },
      {
        label: "Resource library / use cases / FAQ infrastructure",
        status: "implemented",
        description:
          "Public site infrastructure covers educational resources, use cases, and FAQ-style support content.",
      },
      {
        label: "Cross-platform web app",
        status: "implemented",
        description:
          "A public web application supports the core add, review, locate, and find workflow.",
      },
      {
        label: "One-Tote Test messaging",
        status: "implemented",
        description:
          "Marketing encourages users to validate the system with a single tote before expanding inventory effort.",
      },
      {
        label: "Free entry: up to 10 totes",
        status: "implemented",
        description:
          "Current public pricing message: up to 10 totes free forever. No revenue or conversion claims attached.",
      },
      {
        label: "Voice search",
        status: "future",
        description:
          "Marketed as part of the finding experience, but app verification is incomplete. Treated as future / designed until confirmed in-product.",
      },
      {
        label: "Household / family sharing",
        status: "designed",
        description:
          "Multi-user household access is a logical next-stage product need; not claimed as implemented.",
      },
      {
        label: "AR location assistance",
        status: "future",
        description:
          "Explored as a longer-term retrieval aid. Not part of the verified current product surface.",
      },
      {
        label: "Smart-home integrations",
        status: "future",
        description:
          "Possible future connectivity. Not implemented in the verified public product.",
      },
      {
        label: "Seasonal reminders",
        status: "designed",
        description:
          "Designed as a lifecycle opportunity around holidays and seasonal pack cycles. Not claimed as shipped.",
      },
      {
        label: "Declutter assistant",
        status: "designed",
        description:
          "Concept for helping users decide what to keep, donate, or discard after inventory exists. Future / designed only.",
      },
    ] satisfies ProductCapability[],
  },

  productLoop: {
    heading: "The Product Loop",
    intro:
      "Totely is designed around a short loop that is easy to explain and hard to dilute: create identity, capture contents, confirm the record, then retrieve with place context.",
    stages: [
      {
        number: "01",
        title: "Number",
        description:
          "Give every container a durable number so the physical tote and digital record share one identity.",
      },
      {
        number: "02",
        title: "Snap",
        description:
          "Photograph what is inside to lower the cost of capture compared with typing a full inventory.",
      },
      {
        number: "03",
        title: "Review",
        description:
          "Edit the AI-assisted first list, add details when useful, and save where the container lives.",
      },
      {
        number: "04",
        title: "Find",
        description:
          "Search later in natural language and return to the matching tote number, location, and photo proof.",
      },
    ] satisfies ProductLoopStage[],
    expandedLogic: [
      "Identity comes before search quality. Without a reliable tote number, retrieval collapses into guesswork.",
      "Capture must be fast enough for real packing sessions, not only for idealized organization days.",
      "Human review protects trust. AI can propose an item list; the user remains responsible for what the system remembers.",
      "Location is part of the answer. Knowing the tote number without knowing the shelf, room, or unit still leaves work unfinished.",
    ],
  },

  oneToteTest: {
    heading: "The One-Tote Test",
    body: [
      "Totely's public messaging encourages a deliberately small first win: try the system on one tote before turning the garage into a project.",
      "The One-Tote Test is both a product onboarding idea and a strategy constraint. If one container cannot be numbered, captured, reviewed, located, and found later, expanding inventory only multiplies failure.",
    ],
    sequence: [
      "Choose one messy but important tote",
      "Number it",
      "Photograph the contents",
      "Review the item list",
      "Save the location",
      "Search for something inside it later",
    ],
    principle:
      "Prove retrieval on one tote before asking the household for a complete inventory.",
    whyItMatters: [
      "Reduces onboarding anxiety and setup abandonment",
      "Creates an understandable demo for friends and family",
      "Forces the product team to protect simplicity in the core loop",
      "Aligns free-entry pricing with a credible first experience",
    ],
  },

  aiNativeDevelopment: {
    heading: "AI-Native Development",
    body: [
      "AI was used as a partner across research synthesis, strategy drafting, UX exploration, implementation support, content systems, QA prompts, and documentation — always with human ownership of product judgment.",
      "The goal was not autonomous product creation. The goal was a faster loop between evidence, decisions, build work, and reusable operating assets.",
      // TEMPORARY: stage outputs describe operating practice. Named internal
      // research/roadmap/SEO PDFs were not found in-repo and are not cited as reviewed.
    ],
    stages: [
      {
        number: "01",
        title: "Problem Framing",
        aiContribution:
          "Cluster storage-frustration language, adjacent-tool complaints, and retrieval scenarios into structured opportunity notes.",
        humanResponsibility:
          "Decide which customer situation Totely would own first and which pain points were out of scope.",
        output:
          "A clear problem statement centered on later retrieval, not prettier storage aesthetics.",
      },
      {
        number: "02",
        title: "Market and Competitive Synthesis",
        aiContribution:
          "Summarize competitor site patterns, inventory-app workflows, labeling products, and public pricing approaches.",
        humanResponsibility:
          "Judge differentiation, free-entry strategy, and which competitive patterns to avoid copying.",
        output:
          "Positioning boundaries and a shortlist of must-study competitors and adjacent products.",
        evidenceNote:
          "TEMPORARY evidence language: synthesis reflects approved research directions; named market-research PDFs were not found in this repository.",
      },
      {
        number: "03",
        title: "Customer Journey Mapping",
        aiContribution:
          "Draft journey variants for moving, seasonal storage, garage organization, and everyday missing-item searches.",
        humanResponsibility:
          "Select the primary journey and cut secondary journeys that would bloat the MVP.",
        output:
          "A primary Number → Snap → Review → Find journey with explicit abandonment risks.",
      },
      {
        number: "04",
        title: "Product Strategy and MVP Cuts",
        aiContribution:
          "Generate feature options, dependency notes, and MVP versus later-stage groupings.",
        humanResponsibility:
          "Prioritize the searchable container loop; park family sharing, AR, smart-home, and advanced assistants.",
        output:
          "An MVP definition tied to one successful tote retrieval, plus an explicit non-goals list.",
      },
      {
        number: "05",
        title: "Brand and Messaging",
        aiContribution:
          "Explore naming territories, promise lines, and explanation sequences for a technical capability told simply.",
        humanResponsibility:
          "Lock brand hierarchy, customer promise, and tone that stays practical rather than futuristic.",
        output:
          "Totely / There's A Spot For That messaging anchored on Stop searching. Start finding.",
      },
      {
        number: "06",
        title: "UX and Interaction Design Direction",
        aiContribution:
          "Draft flow outlines, empty states, review states, and search-result content hierarchies.",
        humanResponsibility:
          "Protect usability, reduce steps, and insist that AI suggestions remain editable.",
        output:
          "Directed user flows for add-container, review, location save, and find.",
      },
      {
        number: "07",
        title: "Implementation Support",
        aiContribution:
          "Support planning, coding assistance, debugging hypotheses, and repository documentation drafts with the product/engineering team.",
        humanResponsibility:
          "Own product acceptance criteria; coordinate with Nick and Ben; avoid claiming sole engineering authorship.",
        output:
          "Working public marketing and application surfaces for the core loop.",
      },
      {
        number: "08",
        title: "SEO and Content Systems",
        aiContribution:
          "Help structure use-case pages, FAQ drafts, resource outlines, and search-intent topic clusters.",
        humanResponsibility:
          "Approve claims, keep copy evidence-safe, and align content with the real product.",
        output:
          "Marketing-site content infrastructure covering resources, use cases, and FAQ support.",
        evidenceNote:
          "TEMPORARY evidence language: SEO playbook PDFs were not found in-repo; content work is described from live site infrastructure and approved narrative.",
      },
      {
        number: "09",
        title: "QA and Edge-Case Review",
        aiContribution:
          "Generate test matrices for empty states, edit paths, location gaps, and ambiguous search phrasing.",
        humanResponsibility:
          "Run product judgment on what must work before wider promotion; log unresolved gaps such as voice verification.",
        output:
          "A clearer implemented-versus-future status map for portfolio and product planning.",
      },
      {
        number: "10",
        title: "Launch Preparation",
        aiContribution:
          "Draft launch checklists, onboarding copy variants, and support-response outlines.",
        humanResponsibility:
          "Decide readiness thresholds, pricing-message framing, and what not to promise publicly.",
        output:
          "Public launch surfaces with free-entry messaging and One-Tote Test onboarding logic.",
      },
      {
        number: "11",
        title: "Reusable Operating Assets",
        aiContribution:
          "Package prompts, research templates, status language, and workflow cards for the next product cycle.",
        humanResponsibility:
          "Define which artifacts are durable standards versus one-off Totely material.",
        output:
          "A reusable startup research-to-launch workflow set documented in this case study.",
      },
    ] satisfies AiDevStage[],
  },

  productStrategy: {
    heading: "Product Strategy",
    body: [
      "Strategy stayed anchored to a narrow promise: make stored belongings findable through numbered containers, capture, location, and natural-language retrieval.",
      "Expansion ideas were welcome as learning, but not allowed to redefine the MVP before the core loop worked in public.",
    ],
    mvp: [
      "Numbered tote identity",
      "Photo capture and AI-assisted first item list",
      "Editable review / catalog",
      "Saved locations",
      "Natural-language text search with photo proof",
      "Marketing explanation and free entry up to 10 totes",
      "One-Tote Test onboarding message",
    ],
    nextStage: [
      "Onboarding friction reduction through real usage observation",
      "Search-quality refinement for ambiguous household language",
      "Household sharing design validation",
      "Seasonal reminder concepts tied to real pack cycles",
      "Clearer premium-value hypotheses that do not weaken free utility",
    ],
    longTerm: [
      "Voice search if and when in-app behavior is verified",
      "Declutter assistance layered on top of trusted inventory",
      "AR or smart-home experiments only after retrieval fundamentals are strong",
      "Broader physical-kit and manufacturing options for numbered systems",
    ],
  },

  implementationStatus: {
    heading: "Implementation Status",
    intro:
      "Status language follows the portfolio operating model so marketed ideas are not confused with verified shipped behavior.",
    items: [
      {
        label: "Core Number → Snap → Review → Find loop",
        status: "implemented",
        description:
          "Public marketing and app onboarding present the searchable container workflow as the product foundation.",
      },
      {
        label: "Marketing site, resources, use cases, and FAQ",
        status: "implemented",
        description:
          "Live There's A Spot For That marketing experience explains the product and supports education infrastructure.",
      },
      {
        label: "Free entry up to 10 totes",
        status: "implemented",
        description:
          "Current public pricing message verified on the live site. Not a revenue or conversion claim.",
      },
      {
        label: "AI-assisted item list with human review",
        status: "implemented",
        description:
          "Marketing describes AI help for first-pass lists; review remains part of the trusted workflow.",
      },
      {
        label: "Household sharing",
        status: "designed",
        description:
          "Multi-user access is designed as a next-stage need and is not claimed as shipped.",
      },
      {
        label: "Seasonal reminders and declutter assistant",
        status: "designed",
        description:
          "Lifecycle and decision-support concepts exist as product thinking, not verified features.",
      },
      {
        label: "Voice search",
        status: "future",
        description:
          "Appears in marketing language; app verification incomplete. Keep labeled future until confirmed.",
      },
      {
        label: "AR and smart-home integrations",
        status: "future",
        description:
          "Longer-term exploration only. Not part of the verified current product.",
      },
    ] satisfies ImplementationStatusItem[],
  },

  marketingEngine: {
    heading: "Marketing Engine",
    body: [
      "Marketing for Totely had to teach a new habit without sounding like enterprise inventory software.",
      "The public site carries the product promise, explains the loop, supports SEO and educational content, and points people into the app with a credible free starting point.",
    ],
    blocks: [
      {
        id: "promise",
        title: "Promise and Positioning",
        items: [
          "Stop searching. Start finding.",
          "Find anything in storage",
          "Number it. Photograph it. Find it later.",
          "Practical household utility over futuristic inventory theater",
        ],
      },
      {
        id: "education",
        title: "Education Infrastructure",
        items: [
          "Use-case storytelling for garage, moving, seasonal, and closet scenarios",
          "Resource library and FAQ support paths",
          "One-Tote Test as a low-anxiety first action",
        ],
      },
      {
        id: "acquisition",
        title: "Acquisition and Entry",
        items: [
          "SEO-informed topic structure around storage and retrieval language",
          "Clear path from marketing explanation to app onboarding",
          "Public free-entry message: up to 10 totes free forever",
        ],
      },
      {
        id: "trust",
        title: "Trust and Claim Discipline",
        items: [
          "Show the workflow before promising advanced automation",
          "Keep voice, AR, and sharing claims in the correct maturity bucket",
          "Use illustrative product visuals when live screenshots are still being packaged as evidence",
        ],
      },
    ] satisfies MarketingBlock[],
  },

  searchFirst: {
    heading: "Search-First Product Thinking",
    body: [
      "Totely was shaped backward from the moment of need: someone is missing an item and wants an answer, not a filing lesson.",
      "That search-first lens influenced information architecture, capture requirements, marketing copy, and what the MVP was allowed to postpone.",
    ],
    influences: [
      "Query language people actually use when something is missing",
      "Need for tote identity and location in every successful answer",
      "Photo proof as confidence after a match",
      "Resistance to category trees as the primary retrieval model",
    ],
    useCases: [
      "Holiday decorations packed since last season",
      "Moving boxes that outlive the move",
      "Garage shelves of similar black totes",
      "Closet and attic overflow after a remodel",
      "Shared household memory gaps about who put what where",
    ],
    journeyMap: [
      {
        number: "01",
        title: "Need appears",
        description:
          "A person needs an item and cannot remember which container holds it.",
      },
      {
        number: "02",
        title: "Ask naturally",
        description:
          "They search with everyday language rather than an exact folder name.",
      },
      {
        number: "03",
        title: "Match returns",
        description:
          "The system points to a tote number, location, and supporting photo proof.",
      },
      {
        number: "04",
        title: "Physical retrieval",
        description:
          "They go to the place, open the numbered tote, and confirm the item.",
      },
      {
        number: "05",
        title: "Trust compounds",
        description:
          "A successful find makes the next tote worth capturing — starting from the One-Tote Test.",
      },
    ] satisfies JourneyStep[],
  },

  reusableWorkflows: {
    heading: "Reusable Workflows",
    body: [
      "Totely doubled as a proving ground for a reusable startup-development framework: research, strategy, build, content, QA, and launch assets that can transfer to the next product.",
      "Each workflow keeps AI in an acceleration role and human review in a decision role.",
    ],
    principle:
      "Package the way of working — not just the product — so the next company starts with clearer research-to-launch loops.",
    cards: [
      {
        id: "market-research",
        name: "Market Research Synthesis",
        input:
          "Customer conversations, forums, reviews, trends exploration, and competitor sites",
        aiAssisted:
          "Cluster themes, extract recurring friction, and draft structured research notes",
        humanReview:
          "Validate relevance, reject weak analogies, and set portfolio claim boundaries",
        output: "Opportunity framing and explicit non-goals",
        reusability:
          "Template for any zero-to-one product before feature brainstorming",
      },
      {
        id: "competitive-analysis",
        name: "Competitive Analysis",
        input: "Competitor websites, app patterns, labeling products, pricing pages",
        aiAssisted:
          "Compare capture, retrieval, onboarding, and monetization patterns",
        humanReview: "Choose differentiation and free-entry posture",
        output: "Positioning boundaries and MVP constraints",
        reusability: "Repeatable competitor teardown checklist",
      },
      {
        id: "feature-planning",
        name: "Feature Planning",
        input: "Journey maps, support questions, technical constraints, team capacity",
        aiAssisted: "Draft MVP / next / later groupings and dependency notes",
        humanReview: "Cut scope ruthlessly; protect the core retrieval loop",
        output: "Prioritized backlog with status language",
        reusability: "Status-aware roadmap ritual for lean teams",
      },
      {
        id: "brand-messaging",
        name: "Brand and Messaging",
        input: "Problem statement, promise candidates, audience language",
        aiAssisted: "Generate naming territories and explanation sequences",
        humanReview: "Select human, practical voice; reject hype",
        output: "Brand hierarchy and customer promise",
        reusability: "Message architecture starter for consumer products",
      },
      {
        id: "ux-flows",
        name: "UX Flow Drafting",
        input: "Primary journey, edge cases, empty states",
        aiAssisted: "Outline screens, review states, and content hierarchy",
        humanReview: "Usability judgment and step reduction",
        output: "Directed flows for capture, review, and find",
        reusability: "Flow critique prompts for future apps",
      },
      {
        id: "seo-system",
        name: "SEO Topic System",
        input: "Demand language, use cases, FAQ themes",
        aiAssisted: "Cluster topics and draft outline structures",
        humanReview: "Evidence-safe claims and product alignment",
        output: "Resource / use-case / FAQ content map",
        reusability: "SEO system pattern for educational product marketing",
      },
      {
        id: "content-production",
        name: "Content Production",
        input: "Approved outlines, product truths, brand voice",
        aiAssisted: "Draft page sections, FAQs, and onboarding copy variants",
        humanReview: "Fact check against implemented behavior",
        output: "Publishable marketing and education copy",
        reusability: "Draft-then-verify content pipeline",
      },
      {
        id: "dev-support",
        name: "AI-Assisted Development Support",
        input: "Acceptance criteria, bugs, repo context, design intent",
        aiAssisted:
          "Implementation suggestions, debugging hypotheses, documentation drafts",
        humanReview:
          "Engineering ownership with Nick/Ben collaboration; product acceptance by Steve",
        output: "Working public product surfaces",
        reusability: "Team-aware AI coding workflow with human accountability",
      },
      {
        id: "qa-matrix",
        name: "QA and Edge-Case Matrix",
        input: "Core flows, known unknowns, device targets",
        aiAssisted: "Generate test cases and ambiguity examples",
        humanReview: "Decide release blockers versus future backlog",
        output: "Implemented / prototype / designed / future map",
        reusability: "Claim-safe QA language for portfolios and launches",
      },
      {
        id: "docs-system",
        name: "Documentation System",
        input: "Decisions, workflows, tool choices, open questions",
        aiAssisted: "Turn working notes into durable operating docs",
        humanReview: "Keep docs honest about uncertainty and ownership",
        output: "Reusable prompts, checklists, and case-study structure",
        reusability: "Company memory that survives the next sprint",
      },
      {
        id: "launch-readiness",
        name: "Launch Readiness",
        input: "Product status, pricing message, support paths, evidence gaps",
        aiAssisted: "Draft launch checklists and risk lists",
        humanReview: "Go / no-go judgment and public promise discipline",
        output: "Launch plan aligned to verified capabilities",
        reusability: "Startup launch gate for future products",
      },
      {
        id: "evidence-packaging",
        name: "Evidence Packaging",
        input: "Live URLs, screenshots, redacted build artifacts",
        aiAssisted: "Suggest evidence slots and caption structures",
        humanReview:
          "Classify illustrative vs real vs temporary; never invent metrics",
        output: "Portfolio-ready proof plan",
        reusability: "Evidence standards shared across case studies",
      },
    ] satisfies WorkflowCard[],
  },

  developmentWorkflow: {
    heading: "Development Workflow",
    body: [
      "Development moved in short loops: clarify acceptance criteria, implement with AI-assisted support, review as a team, verify against the public product promise, then document what changed.",
      "Because private repositories and full stack details are not fully verifiable inside this portfolio environment, tooling notes distinguish verified public practice from unverified internal assumptions.",
    ],
    stages: [
      {
        id: "define",
        number: "01",
        title: "Define",
        description:
          "Translate product judgment into acceptance criteria for one slice of the Number → Snap → Review → Find loop.",
      },
      {
        id: "build",
        number: "02",
        title: "Build",
        description:
          "Implement with AI-assisted coding support under shared product and engineering ownership.",
      },
      {
        id: "review",
        number: "03",
        title: "Review",
        description:
          "Human review for usability, claim safety, edge cases, and team alignment across Steve, Nick, and Ben.",
      },
      {
        id: "verify",
        number: "04",
        title: "Verify",
        description:
          "Check the change against live marketing language and app onboarding behavior.",
      },
      {
        id: "document",
        number: "05",
        title: "Document",
        description:
          "Capture decisions, open questions, and reusable workflow updates for the next cycle.",
      },
    ],
    verifiedTools: [
      "ChatGPT / Claude-style assistants for research synthesis and drafting",
      "Cursor-assisted development support",
      "GitHub for repository collaboration",
      "Vercel-style modern web deployment practices where applicable",
      "Figma / Adobe-oriented creative production for brand and marketing direction",
      "Google-based SEO and trends exploration during research",
    ],
    unverifiedNote:
      "Detailed private stack, model providers inside the production app, and internal infra choices are not assumed here. Prefer verified public capabilities over guessed architecture.",
  },

  technology: {
    heading: "Technology and Tools",
    intro:
      "Tools supported research, creative, development coordination, and marketing systems. This section describes how tools were used in the operating model — not an exhaustive production bill of materials.",
    ownershipNote:
      "Tooling accelerated the team; it did not replace product judgment or shared engineering ownership among Steve, Nick, and Ben.",
    groups: [
      {
        title: "AI and Development Assistants",
        tools: [
          {
            name: "ChatGPT",
            howUsed:
              "Research clustering, messaging drafts, journey variants, and documentation assistance",
            logoSrc: "/logos/tech/chatgpt.svg",
          },
          {
            name: "Claude",
            howUsed:
              "Long-form synthesis, critique passes, and structured planning support",
          },
          {
            name: "Cursor",
            howUsed:
              "AI-assisted implementation support, debugging hypotheses, and repo-aware edits",
            logoSrc: "/logos/tech/cursor.svg",
          },
        ],
      },
      {
        title: "Product and Collaboration",
        tools: [
          {
            name: "GitHub",
            howUsed:
              "Source control, review collaboration, and development documentation",
            logoSrc: "/logos/tech/github.svg",
          },
          {
            name: "Vercel",
            howUsed:
              "Modern web deployment workflow where applicable to public web surfaces",
            logoSrc: "/logos/tech/vercel.svg",
          },
          {
            name: "Figma",
            howUsed:
              "UX direction, interface exploration, and creative handoff artifacts",
          },
        ],
      },
      {
        title: "Brand, Content and Growth",
        tools: [
          {
            name: "Adobe Creative Suite",
            howUsed:
              "Brand and marketing creative production alongside AI-assisted image briefs",
          },
          {
            name: "SEO research tooling",
            howUsed:
              "Keyword and topic exploration to inform educational content structure",
          },
          {
            name: "Google Trends",
            howUsed:
              "Directional interest checks around organization, moving, and storage themes",
          },
        ],
      },
    ] satisfies TechGroup[],
  },

  humanJudgment: {
    heading: "AI Accelerated the Work. It Did Not Own the Decisions.",
    body: "Customer empathy, positioning, prioritization, usability, brand judgment, claim safety, and product accountability remained human responsibilities.\n\nAI increased the speed of research synthesis, option exploration, drafting, implementation support, and documentation. Final decisions still depended on understanding the customer, protecting simplicity, coordinating as a team, and choosing what not to build — including keeping voice search, household sharing, AR, smart-home, seasonal reminders, and declutter assistance in the correct maturity bucket until verified.",
  },

  outcomes: {
    heading: "Outcomes",
    items: [
      {
        id: "working-public-product",
        title: "A Working Public Product Surface",
        body: "Totely presents a live marketing experience and application path for numbered containers, capture, review, location, and natural-language retrieval — without relying on invented usage metrics.",
      },
      {
        id: "clear-product-loop",
        title: "A Clear, Teachable Product Loop",
        body: "Number → Snap → Review → Find, reinforced by One-Tote Test messaging and a free-entry offer of up to 10 totes.",
      },
      {
        id: "claim-safe-roadmap",
        title: "Claim-Safe Roadmap Discipline",
        body: "Future capabilities such as voice search, household sharing, AR, smart-home, seasonal reminders, and declutter assistance are labeled as designed or future rather than shipped.",
      },
      {
        id: "reusable-framework",
        title: "A Reusable Startup Framework",
        body: "Research, strategy, content, QA, documentation, and launch workflows were packaged so the next product can inherit the operating system, not only the story.",
      },
      {
        id: "team-aware-leadership",
        title: "Team-Aware Product Leadership",
        body: "The work demonstrates co-founder leadership across vision, brand, growth, and AI workflows while recognizing Nick's AI and product leadership and Ben's product/systems contributions.",
      },
    ] satisfies OutcomeItem[],
    closing:
      "Totely shows the kind of product work I want to keep doing: start with a real retrieval problem, research before building, keep the promise simple, use AI to move faster, and leave behind workflows another startup can reuse — without confusing ambition for evidence.",
  },

  relatedWork: [
    {
      id: "how-i-build-with-ai",
      label: "How I Build With AI",
      href: "/how-i-build-with-ai",
      relationship:
        "Operating-model companion — the broader human-led, AI-assisted system Totely helped prove in a zero-to-one product context.",
    },
    {
      id: "campaign-intelligence",
      label: "Campaign Intelligence",
      href: "/systems/klaviyo-campaign-intelligence",
      relationship:
        "Parallel systems work — evidence-led workflow design and status language applied to lifecycle growth instead of physical+digital product development.",
    },
    {
      id: "fishewear-growth-system",
      label: "FisheWear",
      href: "/work/fishewear-growth-system",
      relationship:
        "Related growth and AI operations work inside an established DTC brand, complementary to Totely's zero-to-one product build.",
    },
  ] satisfies RelatedWork[],

  /** Project IDs resolvable via site-data `projects` for related project cards. */
  relatedProjectIds: ["fishewear-growth-system", "slyde-handboards"],

  brand: {
    heading: "Brand Hierarchy",
    body: [
      "The brand system needed to feel practical and human while explaining a technical retrieval capability.",
      "Totely sits under There's A Spot For That with a customer promise that stays short enough to survive a garage conversation.",
    ],
    hierarchy: [
      { label: "Product brand", value: "Totely" },
      {
        label: "Umbrella company",
        value: "There's A Spot For That",
      },
      {
        label: "Category line",
        value: "Find anything in storage",
      },
      {
        label: "Customer promise",
        value: "Stop searching. Start finding.",
      },
    ] satisfies BrandHierarchyItem[],
  },
} as const;

/** Homepage / featured-card impact — methodology-first, no commercial inventions. */
export const totelyHomepageImpact: ImpactAtGlance = {
  eyebrow: "At a Glance",
  items: totelyCaseStudy.atAGlance.items,
  guardrail: totelyCaseStudy.atAGlance.guardrail,
};

export function getTotelyCapabilitiesByStatus(
  status: ProductCapability["status"]
): readonly ProductCapability[] {
  return totelyCaseStudy.whatWeBuilt.capabilities.filter(
    (capability) => capability.status === status
  );
}
