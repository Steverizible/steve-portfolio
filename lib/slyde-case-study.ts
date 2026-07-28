/**
 * Structured content for the Slyde Handboards founder case study.
 *
 * Approved primary claims:
 * - $500K outside investment (Mark Cuban & Ashton Kutcher) — not revenue/profit/valuation
 * - 15+ professionals and global partners directed
 * - Concept → nationally recognized surf brand (2010–2024)
 *
 * Conditional claim (case study only, TEMPORARY until evidenced):
 * - +30% brand collaborations / +$500K attributed collaboration revenue
 *
 * Do not invent ROAS, units sold, retail doors, valuation, Shark Tank details,
 * or unsupported press/awards.
 */

import type { ImpactAtGlance } from "@/lib/impact";
import type { ImplementationStatusItem } from "@/lib/ai-operating-model";

export type MetaItem = { label: string; value: string };
export type WorkflowStage = {
  id: string;
  title: string;
  description: string;
};
export type ContentCard = { title: string; body: string };
export type Lesson = { title: string; body: string };
export type MessagingRow = { label: string; value: string };

export const slydeCaseStudy = {
  hero: {
    eyebrow: "Slyde Handboards",
    title: "Building Slyde From Product Idea to National Surf Brand",
    supportingHeadline:
      "Inventing the product, creating the category story, building the company, securing investment, and leading the brand from concept through growth.",
    intro:
      "Slyde began with a product opportunity inside an activity many people had experienced but few recognized as a defined product category.\n\nBuilding the company required more than creating a handboard. We had to develop the product, establish manufacturing, explain how it worked, create the brand, educate customers, build an e-commerce operation, grow a community, attract partners, and convince investors that the opportunity could scale.\n\nAs Founder and Creative Director, I led the work across product development, creative direction, branding, Shopify, marketing, partnerships, production, operations, customer education, and community building.",
    meta: [
      { label: "Role", value: "Founder / Creative Director" },
      { label: "Period", value: "January 2010 – December 2024" },
      {
        label: "Focus",
        value: "Product Development, Brand Building, E-Commerce & Growth",
      },
      {
        label: "Category",
        value: "Surf Hardgoods / Outdoor Lifestyle",
      },
    ] satisfies MetaItem[],
    methodologyNote:
      "Investment, operating scope, collaboration growth, and historical business claims are based on résumé records and supporting founder documentation. Evidence should be displayed as real, redacted, prototype, illustrative, or temporary according to the portfolio’s evidence standards.",
    image: {
      src: "/images/projects/slyde-handboards.jpg",
      alt: "Slyde Handboards product photography from the founder-led brand archive.",
    },
  },

  opportunity: {
    heading: "A Familiar Activity Without a Familiar Product Category",
    body: [
      "Body surfing was already accessible, physical, and deeply connected to the ocean. The product opportunity was to improve the experience with a compact piece of surf equipment that helped riders generate lift, speed, control, and a more dynamic connection to the wave.",
      "The challenge was not only designing the product.",
      "Most potential customers did not know the term handboard, understand how the product worked, or immediately see why they needed one.",
    ],
    featuredQuestion:
      "How do you build demand for a product when you also have to explain the category?",
  },

  role: {
    heading: "Building the Product and the Company at the Same Time",
    intro:
      "My responsibility extended across the full product, customer, brand, and business journey. I founded, designed, led, directed, managed, developed, coordinated, tested, pitched, built, and evolved the work with employees, contractors, specialists, suppliers, partners, manufacturers, investors, and distributors.",
    responsibilities: [
      "Opportunity discovery",
      "Industrial and product design",
      "Ideation and prototyping",
      "Product testing",
      "Materials exploration",
      "Manufacturing development",
      "Supplier coordination",
      "Packaging",
      "Brand strategy",
      "Naming and storytelling",
      "Creative direction",
      "Photography and video direction",
      "Shopify and e-commerce",
      "Product-page development",
      "Customer education",
      "Conversion testing",
      "Paid acquisition",
      "Email marketing",
      "PR",
      "Partnerships",
      "Retail and distribution",
      "Community building",
      "Investment pitching",
      "Team leadership",
      "Operational planning",
      "Product launches",
    ],
  },

  atAGlance: {
    eyebrow: "At a Glance",
    items: [
      {
        value: "$500K",
        label: "Outside Investment Secured",
        type: "commercial",
        prominence: "primary",
      },
      {
        value: "15+",
        label: "Professionals and Global Partners Directed",
        type: "leadership",
        prominence: "secondary",
      },
      {
        value: "Concept → National Brand",
        label: "Product, E-Commerce and Community",
        type: "product",
        prominence: "secondary",
      },
      {
        value: "2010–2024",
        label: "Founder-Led Brand Building",
        type: "leadership",
        prominence: "secondary",
      },
    ],
    guardrail:
      "The $500,000 figure refers to outside investment secured from Mark Cuban and Ashton Kutcher. It does not represent revenue, profit, or valuation. The team figure includes professionals and global operating partners across creative, product, marketing, production, and operations.",
  } satisfies ImpactAtGlance,

  founderJourney: {
    heading: "From Observation to Product, Brand and Business",
    image: {
      src: "/images/work/slyde/founder-journey.svg",
      alt: "Editorial loop connecting opportunity, product, brand, commerce, investment, partnerships, and product evolution.",
    },
    stages: [
      {
        id: "observe",
        title: "Observe the Opportunity",
        description:
          "Identify where the existing body-surfing experience could be improved through a compact, purpose-built product.",
      },
      {
        id: "define",
        title: "Define the Product",
        description:
          "Translate the opportunity into a clear product promise centered on lift, control, speed, enjoyment, and accessibility.",
      },
      {
        id: "prototype",
        title: "Prototype and Test",
        description:
          "Explore form, dimensions, materials, grip, comfort, performance, and manufacturability through repeated development.",
      },
      {
        id: "manufacturing",
        title: "Develop Manufacturing",
        description:
          "Work with production partners to translate prototypes into repeatable products that could be made, packaged, shipped, and supported.",
      },
      {
        id: "brand",
        title: "Build the Brand",
        description:
          "Create a distinctive identity capable of connecting product innovation, surf culture, accessibility, fun, and community.",
      },
      {
        id: "educate",
        title: "Educate the Market",
        description:
          "Demonstrate what the product was, how it worked, why it improved the experience, and who it was for.",
      },
      {
        id: "ecommerce",
        title: "Launch E-Commerce",
        description:
          "Build the Shopify experience, product pages, creative assets, education, and customer journey required to sell an unfamiliar product online.",
      },
      {
        id: "demand",
        title: "Create Demand",
        description:
          "Use content, email, paid media, partnerships, PR, demonstrations, and community storytelling.",
      },
      {
        id: "investment",
        title: "Secure Investment",
        description:
          "Develop and deliver a product and business pitch capable of communicating the opportunity to outside investors.",
      },
      {
        id: "partnerships",
        title: "Expand Partnerships",
        description:
          "Build retailer, distributor, collaboration, media, and lifestyle relationships that extended reach and credibility.",
      },
      {
        id: "operation",
        title: "Lead the Operation",
        description:
          "Coordinate product, creative, production, marketing, customer experience, inventory, distribution, and commercial decisions.",
      },
      {
        id: "evolve",
        title: "Evolve the Product Line",
        description:
          "Use testing, customer feedback, manufacturing knowledge, and market response to continue improving products and launches.",
      },
    ] satisfies WorkflowStage[],
    loopNote:
      "Product evolution reconnects to observation and customer learning as the brand grows.",
  },

  productDevelopment: {
    heading: "Designing a Product Customers Had Never Used Before",
    body: [
      "My product-design background shaped how Slyde was built. The work began with the physical experience: how a rider interacts with the water, where lift and control come from, how the product sits against the hand, and how form, materials, and manufacturing affect performance.",
      "Development connected product form, hydrodynamic intent, hand position, comfort, control, material decisions, durability, manufacturability, production consistency, product photography, product explanation, customer feedback, and product evolution—without claiming formal scientific validation or unsupported performance measurements.",
    ],
    stages: [
      "User and Activity Observation",
      "Early Concepts",
      "Form Development",
      "Material Exploration",
      "Grip and Comfort",
      "Prototyping",
      "Ocean Testing",
      "Manufacturing Refinement",
      "Packaging",
      "Launch",
    ],
  },

  manufacturing: {
    heading: "Moving From One-Off Prototype to Repeatable Product",
    body: [
      "A physical-product idea only becomes a business when it can be produced consistently, packaged correctly, delivered reliably, and supported after purchase.",
    ],
    blocks: [
      {
        title: "Prototype Development",
        body: "Translate ideas into testable physical forms and use real riding experience to expose weaknesses.",
      },
      {
        title: "Production Translation",
        body: "Adapt prototypes to manufacturing processes without losing the core product experience.",
      },
      {
        title: "Global Coordination",
        body: "Work across suppliers, production partners, timelines, quality expectations, shipping, and distribution.",
      },
      {
        title: "Continuous Improvement",
        body: "Use production knowledge and customer response to refine future versions and launches.",
      },
    ] satisfies ContentCard[],
  },

  categoryEducation: {
    heading: "Before Selling the Product, We Had to Explain It",
    body: [
      "A familiar product can rely on customers already understanding the category. Slyde could not.",
      "The customer journey needed to explain what a handboard is, how it is used, how it changes the riding experience, whether beginners can use it, how it differs from bodyboarding or traditional body surfing, which product is appropriate, how the rider wears or holds it, and why its size and portability matter.",
    ],
    cards: [
      {
        title: "Demonstration",
        body: "Show the product being used rather than relying only on static product images.",
      },
      {
        title: "Customer Language",
        body: "Explain the experience without requiring technical surf knowledge.",
      },
      {
        title: "Product Comparison",
        body: "Help customers understand differences between products and riding styles.",
      },
      {
        title: "Confidence Before Purchase",
        body: "Use video, photography, FAQs, product-page structure, and community content to reduce uncertainty.",
      },
    ] satisfies ContentCard[],
    principle:
      "The brand had to teach the category and sell the product at the same time.",
  },

  brandBuilding: {
    heading: "Creating a Brand Around Freedom, Fun and the Ocean",
    body: [
      "Slyde needed an identity that felt credible inside surf culture while remaining welcoming to people who did not see themselves as traditional surfers.",
      "The brand connected ocean access, play, speed and movement, product innovation, community, portability, travel, design, beginner accessibility, and experienced riding.",
    ],
    messaging: [
      { label: "Product", value: "Slyde Handboards" },
      {
        label: "Category",
        value: "Handboards and body-surfing equipment",
      },
      {
        label: "Core experience",
        value: "More lift, control and enjoyment in the wave",
      },
      {
        label: "Customer promise",
        value: "A more dynamic way to experience the ocean",
      },
      {
        label: "Brand role",
        value: "Make the activity understandable, approachable and exciting",
      },
    ] satisfies MessagingRow[],
  },

  creativeDirection: {
    heading: "The Product Had to Be Understood in Motion",
    body: [
      "Creative direction was central because the value of the product was easiest to understand when customers could see it interacting with a rider and a wave.",
    ],
    areas: [
      "Product photography",
      "Water photography",
      "Video demonstrations",
      "Founder storytelling",
      "Product education",
      "Lifestyle imagery",
      "Packaging",
      "Social content",
      "Paid creative",
      "Retail materials",
      "Press assets",
      "Launch campaigns",
    ],
    principle:
      "The product image created interest. The demonstration created understanding.",
  },

  ecommerce: {
    heading: "Turning Product Education Into an E-Commerce Journey",
    body: [
      "The Shopify experience needed to do more than display products. It had to introduce the activity, explain the equipment, demonstrate the experience, build trust, and help customers select the right product.",
    ],
    cards: [
      {
        title: "Product Pages",
        body: "Combine product explanation, imagery, video, use cases, customer questions, and clear calls to action.",
      },
      {
        title: "A/B Testing",
        body: "Test page structure, creative, messaging, and customer paths to improve understanding and purchase confidence.",
      },
      {
        title: "Mobile Experience",
        body: "Make the category understandable for customers arriving from social, advertising, email, search, or press on a small screen.",
      },
      {
        title: "Customer Education",
        body: "Use structured content to answer the questions that normally prevent an unfamiliar product from being purchased.",
      },
      {
        title: "Creative Continuity",
        body: "Ensure that the advertisement, landing page, product demonstration, and checkout journey supported the same promise.",
      },
    ] satisfies ContentCard[],
  },

  demand: {
    heading: "Growing Demand Through Story, Demonstration and Community",
    body: [
      "Because the category required education, customer acquisition could not depend on a single advertisement or channel.",
    ],
    channels: [
      "Facebook advertising",
      "Email marketing",
      "Educational content",
      "Product demonstrations",
      "Social media",
      "Founder storytelling",
      "PR",
      "Retail education",
      "Partnerships",
      "Collaborations",
      "Community events",
      "Customer stories",
    ],
    learningLoop: [
      "Customer Question",
      "Creative Hypothesis",
      "Demonstration",
      "Campaign",
      "Product Experience",
      "Customer Response",
      "Next Story",
    ],
  },

  investment: {
    heading: "From Product Pitch to $500K in Outside Investment",
    body: [
      "Securing investment required making an unfamiliar product category understandable as both a customer experience and a scalable business opportunity.",
      "The pitch needed to communicate the problem and opportunity, the product, why it improved the experience, customer interest, brand differentiation, product development, manufacturing readiness, growth potential, founder credibility, community opportunity, and business requirements.",
    ],
    metric: {
      value: "$500K",
      label: "Outside Investment Secured",
      supportingNote:
        "Pitched and secured from Mark Cuban and Ashton Kutcher.",
    },
    context:
      "The significance was not simply the association with well-known investors. The achievement was building and presenting a product, brand, and business opportunity strong enough to earn external confidence and capital.",
    methodologyNote:
      "This figure refers to outside investment secured. It does not represent revenue, profit, company valuation, ownership terms, or an exit.",
  },

  leadership: {
    heading: "Leading a Cross-Functional Product Company",
    body: [
      "Slyde required leadership across far more than creative direction.",
      "I directed 15+ professionals and global partners across product, industrial design, graphic design, photography, video, marketing, e-commerce, production, manufacturing, packaging, operations, distribution, customer experience, and partnerships.",
    ],
    cards: [
      {
        title: "Product Direction",
        body: "Keep development, performance, manufacturing, positioning, and customer needs connected.",
      },
      {
        title: "Creative Direction",
        body: "Maintain a coherent identity across product, web, campaigns, photography, video, packaging, and retail.",
      },
      {
        title: "Commercial Direction",
        body: "Connect acquisition, merchandising, pricing, launches, partnerships, inventory, and cash requirements.",
      },
      {
        title: "Team Alignment",
        body: "Coordinate specialists and partners around shared priorities, deadlines, quality standards, and launch plans.",
      },
      {
        title: "Founder Decision-Making",
        body: "Make decisions with incomplete information while remaining accountable for the product, team, customer, and company.",
      },
    ] satisfies ContentCard[],
  },

  partnerships: {
    heading: "Expanding Reach Beyond the Direct Channel",
    body: [
      "Partnerships helped the brand reach new customers, gain credibility, enter adjacent communities, and create new product or storytelling opportunities.",
    ],
    areas: [
      {
        title: "Retail and Distribution",
        body: "Support partners with product education, merchandising, imagery, and category explanation.",
      },
      {
        title: "Brand Collaborations",
        body: "Develop relationships across surf, outdoor, and lifestyle audiences.",
      },
      {
        title: "Media and PR",
        body: "Provide a clear founder, product, and category story that others could understand and communicate.",
      },
      {
        title: "Community Partnerships",
        body: "Build trust through authentic participation rather than treating the surf community as a marketing backdrop.",
      },
    ] satisfies ContentCard[],
  },

  collaborationGrowth: {
    heading: "Turning Partnerships Into Commercial Growth",
    body: [
      "Historical résumé records state that brand collaborations increased by 30% and contributed an additional $500,000 in revenue across surf, outdoor, and lifestyle audiences.",
      "This is a meaningful commercial claim and must not be presented without context.",
    ],
    statusLabel: "Historical Operating Claim",
    metrics: [
      {
        value: "+30%",
        label: "Increase in Brand Collaborations",
        supportingNote:
          "Based on historical founder and résumé records for the measured growth period.",
      },
      {
        value: "$500K",
        label: "Additional Revenue Attributed to Collaborations",
        supportingNote:
          "Separate from the $500K outside investment claim. Aggregate attributed partnership revenue only.",
      },
    ],
    methodologyNote:
      "This claim is based on historical founder and résumé records. Supporting agreements, reports, invoices, or partnership documentation should be added in redacted form before treating the metric as fully evidenced. Status remains TEMPORARY until that evidence is published.",
    implementationItems: [
      {
        label: "Collaboration Growth Evidence",
        status: "future",
        description:
          "Add redacted historical records showing collaboration count comparison, attributed aggregate revenue, and the measured period before elevating this claim beyond TEMPORARY evidence status.",
      },
    ] satisfies ImplementationStatusItem[],
  },

  operations: {
    heading: "Growth Exposed the Whole Business",
    body: [
      "Physical-product growth created operating responsibilities across production, quality, inventory, packaging, fulfillment, customer service, cash, launches, and partner commitments.",
    ],
    blocks: [
      {
        title: "Production Planning",
        body: "Coordinate demand expectations, manufacturing timelines, product readiness, and launch schedules.",
      },
      {
        title: "Quality and Consistency",
        body: "Protect the intended product experience as production volume and product variety increased.",
      },
      {
        title: "Inventory Decisions",
        body: "Balance customer demand, capital requirements, product availability, and launch timing.",
      },
      {
        title: "Customer Experience",
        body: "Support customers before and after purchase with education, service, and clear expectations.",
      },
      {
        title: "Distribution Coordination",
        body: "Move products between manufacturing, storage, direct customers, retailers, distributors, and partners.",
      },
    ] satisfies ContentCard[],
  },

  productEvolution: {
    heading: "A Product Company Is Never Finished",
    body: [
      "The first successful product was not the end of development.",
      "Customer feedback, ocean testing, manufacturing experience, category education, new use cases, and commercial needs continued to shape the product line.",
    ],
    loop: [
      "Observe",
      "Design",
      "Prototype",
      "Test",
      "Produce",
      "Launch",
      "Learn",
      "Improve",
    ],
    forms: [
      "Shape",
      "Size",
      "Materials",
      "Grip",
      "Comfort",
      "Durability",
      "Visual design",
      "Packaging",
      "Product range",
      "Customer education",
    ],
  },

  lessons: {
    heading: "The Lessons That Continue to Shape My Work",
    items: [
      {
        title: "Category Education Is Part of Product Design",
        body: "A customer cannot value a product they do not understand.",
      },
      {
        title: "Demonstration Builds Confidence",
        body: "Showing the product in use often communicates more than a long feature list.",
      },
      {
        title: "Product, Brand and Commerce Must Agree",
        body: "The physical experience, brand promise, website, advertisement, and customer service should reinforce one another.",
      },
      {
        title: "Investment Follows Clarity",
        body: "An unfamiliar opportunity becomes investable when the product, customer, market, story, and operating plan are understandable.",
      },
      {
        title: "Growth Is Operational",
        body: "Demand only becomes a healthy business when production, inventory, quality, distribution, and customer experience can support it.",
      },
      {
        title: "Community Cannot Be Manufactured",
        body: "A lasting brand relationship comes from participating honestly, listening, contributing, and building products people genuinely enjoy using.",
      },
    ] satisfies Lesson[],
  },

  result: {
    heading: "The Result",
    body: [
      "Slyde grew from a physical product idea into a nationally recognized surf brand.",
      "The company required product design, prototyping, manufacturing, creative direction, category education, Shopify, customer acquisition, partnerships, investment, team leadership, community participation, and ongoing product evolution.",
      "The experience demonstrates my ability to operate across the entire path from idea to product, product to brand, brand to business, and business to a connected team and community.",
    ],
    closing:
      "Slyde was not a campaign built around an existing product. It was the work of helping create the product, the category story, the company, and the market around it.",
  },

  relatedProjectIds: [
    "veldskoen-growth-story",
    "totely-ai-storage",
    "fishewear-growth-system",
  ],

  relatedNotes: {
    "veldskoen-growth-story":
      "Building and scaling a U.S. DTC footwear business",
    "totely-ai-storage":
      "Developing a physical and digital product system from zero",
    "fishewear-growth-system":
      "Modernizing an established DTC growth operation",
  } as Record<string, string>,

  metadata: {
    title: "Slyde Handboards Founder Case Study | Steve Watts",
    description:
      "How Steve Watts built Slyde Handboards from product idea to nationally recognized surf brand through product development, manufacturing, brand strategy, Shopify, investment, partnerships, and community.",
  },
} as const;

/** Homepage / Featured Work impact — first four approved items only. */
export const slydeHomepageImpact: ImpactAtGlance = {
  eyebrow: "At a Glance",
  items: slydeCaseStudy.atAGlance.items,
  guardrail:
    "Investment, team scope, and brand-development results are based on historical operating and résumé records. Supporting evidence is included or identified inside the case study.",
};
