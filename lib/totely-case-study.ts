/**
 * Structured content for the Totely AI product case study.
 *
 * Totely by There’s A Spot For That.
 * Primary product message: Stop searching. Start finding.
 *
 * Claim guardrails: no invented user counts, revenue, conversion rates,
 * App Store approval, or search-accuracy percentages. Live marketing and
 * application URLs are verified; detailed technology stack is not assumed.
 */

export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type ExternalCta = {
  label: string;
  href: string;
};

export type ProcessStep = {
  number: string;
  label: string;
};

export type ProductBlock = {
  id: string;
  title: string;
  body: string;
};

export type WorkflowStage = {
  number: string;
  title: string;
  body: string;
};

export type BuiltItem = {
  label: string;
  href?: string;
};

export const totelyCaseStudy = {
  hero: {
    eyebrow: "Totely by There’s A Spot For That",
    title: "Building an AI-Powered System for Finding Anything You Store",
    intro:
      "Totely began with a familiar household frustration: people carefully store belongings in garages, closets, attics, moving boxes, and storage units—but cannot remember which container holds what when they need it.\n\nI developed Totely as a connected physical and digital system that makes storage searchable. Users number a container, photograph what is inside, record where it lives, and later ask naturally where an item was stored.",
    meta: [
      {
        label: "Role",
        value: "Founder / Product Strategist / Creative Director",
      },
      { label: "Period", value: "2025–Present" },
      {
        label: "Focus",
        value: "Product Strategy, Brand, UX, AI Search & Digital Development",
      },
    ] satisfies CaseStudyMeta[],
    ctas: [
      { label: "Visit Totely", href: "https://totely.app" },
      { label: "Open the App", href: "https://app.totely.app" },
    ] satisfies ExternalCta[],
    image: {
      src: "/images/work/totely/hero.svg",
      alt: "Abstract editorial visual connecting numbered storage containers with a simplified mobile search concept in restrained neutrals and amber accents.",
    },
  },

  problem: {
    heading: "Storage Works Until You Need Something",
    body: [
      "Most storage systems focus on putting things away. The harder problem begins months later, when someone needs an item but cannot remember which box contains it, where that box was placed, or how it was originally categorized.",
      "Traditional inventory systems often require too much manual typing, rigid folder structures, or perfect organization. That creates friction before the system has delivered any value.",
    ],
    featuredQuestion:
      "What if finding something in storage felt more like asking a question than maintaining a spreadsheet?",
  },

  insight: {
    heading: "The Retrieval Problem Was More Important Than the Storage Problem",
    body: [
      "The core insight was that people did not necessarily need another elaborate organization system. They needed a faster way to retrieve information about the things they had already stored.",
      "Totely was designed around a simple loop:",
    ],
    process: [
      { number: "01", label: "Number the container" },
      { number: "02", label: "Photograph what is inside" },
      { number: "03", label: "Record where the container lives" },
      { number: "04", label: "Add optional details when useful" },
      { number: "05", label: "Search naturally later" },
      { number: "06", label: "Receive the matching container number and location" },
    ] satisfies ProcessStep[],
  },

  searchExample: {
    label: "Example Search",
    note: "Illustrative product demonstration — not a live production query.",
    question: "Where are the holiday lights?",
    resultTitle: "Found in Tote 12",
    resultLocation: "Garage · Back Wall · Upper Shelf",
    alsoContainsLabel: "Also contains",
    alsoContains: "Extension cords, outdoor clips, tree timer",
  },

  ecosystem: {
    heading: "A Physical and Digital Product Ecosystem",
    intro:
      "Totely is not only an app. The product works because the physical storage environment and the digital experience support each other.",
    image: {
      src: "/images/work/totely/product-system.svg",
      alt: "Conceptual product-system visual suggesting numbered containers, capture, location, and later retrieval.",
    },
    blocks: [
      {
        id: "labels",
        title: "Numbered Physical Labels",
        body: "Simple numbered labels give every container a durable identity. The number creates a reliable connection between the physical object, its contents, and its stored location.",
      },
      {
        id: "capture",
        title: "Fast Visual Capture",
        body: "Photography reduces the amount of manual inventory work. A user can quickly document the contents of a container without describing every item one by one.",
      },
      {
        id: "retrieval",
        title: "Natural-Language Retrieval",
        body: "The search experience is designed around the way people actually remember possessions. Instead of recalling an exact label or category, users can ask a natural question about what they are trying to find.",
      },
      {
        id: "location",
        title: "Location Awareness",
        body: "Finding the correct container is only part of the problem. Totely also records where the container lives—such as a garage shelf, closet, attic, storage unit, or moving location.",
      },
    ] satisfies ProductBlock[],
  },

  role: {
    heading: "Building From Problem Discovery to Working Product",
    intro:
      "I led Totely as an end-to-end founder and product initiative, connecting customer research, strategy, design, branding, technology, development, content, and launch preparation.",
    contribution:
      "My contribution combined founder leadership, product strategy, creative direction, building, AI-assisted operations, and development leadership — without claiming every technical line of code was personally written.",
    responsibilities: [
      "Problem and opportunity research",
      "Customer pain-point analysis",
      "Competitive research",
      "Product positioning",
      "Naming and brand development",
      "Product requirements",
      "User-flow design",
      "UX and interface direction",
      "Physical label-system development",
      "Marketing-site strategy",
      "Application-development direction",
      "AI search planning",
      "Content and SEO planning",
      "Creative production",
      "GitHub and deployment workflows",
      "App Store preparation",
      "Product documentation",
    ],
  },

  research: {
    heading: "Starting With the Problem, Not the Technology",
    body: [
      "The product concept was shaped by researching how people describe storage frustration, what existing inventory tools require, where those tools introduce friction, and which parts of the process people are most likely to abandon.",
      "The research focused on questions such as:",
    ],
    questions: [
      "How do people currently label and remember stored belongings?",
      "Which items are hardest to find later?",
      "How much setup work will users tolerate?",
      "Is photography faster than manual entry?",
      "How do people naturally describe something they have lost?",
      "What information is required to locate the correct container?",
      "Which parts of the experience must work for free?",
      "Where could paid features create real value without weakening the basic system?",
    ],
    pullQuote:
      "The product had to create value before asking the user to become perfectly organized.",
  },

  brand: {
    heading: "Making an AI Product Feel Simple and Human",
    body: [
      "The product needed to communicate a technical capability without making storage feel more complicated.",
      "The Totely brand was developed around a clear customer promise:",
      "Stop searching. Start finding.",
      "The name, messaging, visual direction, website, onboarding, numbered labels, and app experience were designed to make the system feel approachable, practical, and immediately understandable.",
    ],
    hierarchy: [
      { label: "Brand", value: "Totely" },
      { label: "Umbrella company", value: "There’s A Spot For That" },
      { label: "Customer promise", value: "Stop searching. Start finding." },
      {
        label: "Product explanation",
        value: "Number it. Photograph it. Find it later.",
      },
    ],
  },

  ai: {
    heading: "AI as a Product-Development Partner",
    body: [
      "AI supported the project across research, strategy, product definition, development, creative production, content, analysis, and documentation.",
      "The role of AI was not to generate an idea and call the product finished. It helped accelerate the repeated work between identifying the problem and building a usable solution.",
    ],
    stages: [
      {
        number: "01",
        title: "Research",
        body: "Customer pain points, competitor patterns, search behavior, product opportunities, and unanswered questions.",
      },
      {
        number: "02",
        title: "Product Strategy",
        body: "Feature prioritization, requirements, user stories, edge cases, onboarding, and monetization considerations.",
      },
      {
        number: "03",
        title: "UX Development",
        body: "User journeys, screen logic, interface feedback, content hierarchy, and friction reduction.",
      },
      {
        number: "04",
        title: "Development Support",
        body: "Code planning, implementation guidance, debugging, repository reviews, test cases, and documentation.",
      },
      {
        number: "05",
        title: "Brand and Content",
        body: "Positioning, messaging, website structure, SEO content, image briefs, onboarding copy, and launch material.",
      },
      {
        number: "06",
        title: "Quality Review",
        body: "Reviewing inconsistencies, broken paths, unclear language, mobile behavior, and incomplete product states.",
      },
      {
        number: "07",
        title: "Reusable Systems",
        body: "Creating repeatable prompts, project context, documentation, workflows, and standards that allow future products to be built more efficiently.",
      },
    ] satisfies WorkflowStage[],
  },

  humanJudgment: {
    heading: "AI Accelerated the Work. It Did Not Own the Decisions.",
    body: "Customer empathy, positioning, prioritization, usability, brand judgment, and product accountability remained human responsibilities.\n\nAI increased the speed at which information could be gathered, options could be explored, implementation could be reviewed, and documentation could be created. The final decisions still depended on understanding the customer, protecting simplicity, and choosing what not to build.",
  },

  development: {
    heading: "From Concept to a Working Digital Product",
    body: [
      "The project moved beyond strategy and presentation into application development, website development, repository management, deployment, product testing, and launch preparation.",
      "Because the complete Totely application repositories were not available for verification inside this portfolio, the work is presented through verified product capabilities rather than an assumed technology stack.",
    ],
    capabilities: [
      "Product Strategy",
      "UX Direction",
      "AI-Assisted Development",
      "Repository Management",
      "Testing and Deployment",
      "Launch Preparation",
    ],
  },

  built: {
    heading: "The Working Product Ecosystem",
    items: [
      { label: "Totely product positioning" },
      { label: "Totely brand system" },
      { label: "Numbered storage-label concept" },
      { label: "Marketing website", href: "https://totely.app" },
      { label: "Searchable application", href: "https://app.totely.app" },
      { label: "Add-a-container workflow" },
      { label: "Location-recording system" },
      { label: "Natural-language search concept" },
      { label: "Mobile product experience" },
      { label: "Educational content structure" },
      { label: "SEO foundation" },
      { label: "Launch and App Store preparation" },
      { label: "Reusable product-development workflow" },
    ] satisfies BuiltItem[],
  },

  currentStage: {
    heading: "A Working Product With a Clear Path Forward",
    body: [
      "Totely demonstrates the complete path from customer problem to functioning product ecosystem.",
      "The next stage is not about proving that the concept can be designed. It is about observing real usage, reducing onboarding friction, improving retrieval quality, learning which storage situations create the most value, and identifying where premium features are genuinely useful.",
    ],
    priorities: [
      "User onboarding",
      "Search-quality refinement",
      "Real-world usage feedback",
      "Monetization validation",
    ],
  },

  result: {
    heading: "The Result",
    body: [
      "Totely represents the kind of product work I want to keep doing: identify a real problem, research it deeply, simplify the experience, build the brand, create the digital system, and use AI to move faster without giving up human judgment.",
      "It demonstrates my ability to connect product thinking, user experience, technology, storytelling, development, and go-to-market strategy into one working system.",
    ],
    ctas: [
      { label: "Visit Totely", href: "https://totely.app" },
      { label: "Open the App", href: "https://app.totely.app" },
    ] satisfies ExternalCta[],
  },

  relatedProjectIds: ["fishewear-growth-system", "slyde-handboards"],
} as const;
