/**
 * Structured homepage content for Steve Watts portfolio.
 * Source: Framer reference (reference/framer-home.html) — copy cleaned and deduplicated.
 */

export const siteMeta = {
  name: "Steve Watts",
  title: "Steve Watts | Portfolio",
  description:
    "Founder, Creative Director, and Brand Strategist with over 15 years of experience leading creative teams and building compelling brand identities across diverse industries.",
  location: "San Clemente, CA",
  linkedInUrl: "https://www.linkedin.com/in/stevenstewartwatts/",
  copyright: "©2024 Steve Watts",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navigation: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export type FeaturedProject = {
  id: string;
  title: string;
  category: string;
  year: string;
  href?: string;
  imageSrc?: string;
};

export const hero = {
  availabilityLabel: "Available for freelance",
  headline: "Steve Watts",
  tagline: "Vision. Brand. Impact.",
  locationLabel: "Based in San Clemente, CA",
  roles: ["Digital Designer", "Storyteller"],
  cta: {
    label: "Contact now",
    href: "#contact",
  },
} as const;

export const featuredWork = {
  title: "Featured Work",
  description:
    "My creative spirit thrives in the digital space, where I combine storytelling, design, and strategic innovation to craft impactful brand experiences that connect and inspire.",
  projects: [
    {
      id: "veldskoen-shoes",
      title: "Veldskoen Shoes",
      category: "Packaging",
      year: "2022",
      href: "/work/veldskoen-shoes",
    },
    {
      id: "slyde-handboards",
      title: "Slyde Handboards",
      category: "Product / Graphic",
      year: "2010",
      href: "/work/slyde-handboards",
    },
    {
      id: "multi-business",
      title: "Multi Business",
      category: "Email",
      year: "2010–2025",
      href: "/work/multi-business",
    },
    {
      id: "rizible",
      title: "Rizible",
      category: "Branding",
      year: "2024",
      href: "/work/rizible",
    },
  ] satisfies FeaturedProject[],
  moreProjectsCta: {
    label: "See more projects",
    href: "/work",
  },
} as const;

export const moreAboutSteve = {
  title: "More About Steve",
  headline:
    "I'm a Creative Director and Brand Strategist — passionate about minimalist design, storytelling, and crafting visuals that connect brands to people.",
  body: [
    "Based in San Clemente, I am a creative director, brand strategist, and digital artist with a passion for storytelling, innovative design, and seamless user experiences.",
    "With a strong foundation in branding, e-commerce, and digital marketing, my work merges minimalist aesthetics, strategic typography, and intuitive design to craft compelling visual identities that drive engagement and business growth.",
  ],
  resumeCta: {
    label: "Download resume",
    href: "/resume.pdf",
  },
  mediaLogos: [
    "Slyde",
    "Shark Tank",
    "ABC",
    "Forbes",
    "Disney",
    "Patagonia",
    "REI",
  ],
} as const;

export type ExpertiseItem = {
  number: number;
  title: string;
  description: string;
};

export const expertise = {
  title: "Expertise",
  items: [
    {
      number: 1,
      title: "Creative Leadership",
      description:
        "Leading design teams to develop innovative campaigns and distinctive brand identities — from concept through execution.",
    },
    {
      number: 2,
      title: "Digital Marketing",
      description:
        "Crafting high-performing paid social campaigns that drive engagement, boost brand visibility, and deliver measurable growth.",
    },
    {
      number: 3,
      title: "Storytelling & Brand Narrative",
      description:
        "Crafting compelling narratives that resonate with audiences and strengthen brand loyalty.",
    },
    {
      number: 4,
      title: "E-commerce Growth",
      description:
        "Scaling brands from inception to seven-figure success through strategic planning, conversion-focused design, and relentless optimization.",
    },
    {
      number: 5,
      title: "Email Marketing",
      description:
        "Building engaging email strategies and dynamic e-commerce flows that fuel brand growth and customer retention.",
    },
    {
      number: 6,
      title: "SEO",
      description:
        "Optimizing content, keywords, and site performance to boost rankings, drive traffic, and increase conversions.",
    },
  ] satisfies ExpertiseItem[],
} as const;

export const motivation = {
  title: "Motivation",
  paragraphs: [
    "As a Founder, Creative Director, and Brand Strategist, I'm passionate about transforming ideas into powerful brand experiences. With over 15 years of leadership, I've built and scaled brands like Veldskoen USA, Thula Tula, and Slyde Handboards — merging design, storytelling, and business strategy to drive engagement and growth.",
    "I thrive on crafting visual narratives that connect, guiding teams to execute innovative solutions that elevate brand identity and customer experience. Fueled by creativity and strategy, my mission is to shape brands that inspire, resonate, and lead in their industries.",
  ],
} as const;

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
};

export const experience = {
  title: "Experience",
  items: [
    {
      id: "slyde-handboards",
      company: "Slyde Handboards",
      role: "Founder + Creative Director",
      period: "2010–2024",
    },
    {
      id: "veldskoen",
      company: "Veldskoen",
      role: "Founder + Creative Director",
      period: "2018–2024",
    },
    {
      id: "happybond",
      company: "Happybond",
      role: "Paid Media Consultancy",
      period: "2023–2024",
      description:
        "Led explosive growth at Happybond, scaling monthly revenue from $5K to $50K in just a few months through paid media, organic marketing, and high-converting email campaigns.",
    },
    {
      id: "ilan-dei",
      company: "Ilan Dei",
      role: "Junior Designer",
      period: "2008–2010",
      description:
        "Started my career as a Junior Designer at Ilan Dei, honing skills in product design, branding, and creative storytelling.",
    },
  ] satisfies ExperienceItem[],
} as const;

export type StackItem = {
  id: string;
  name: string;
  category: string;
  description: string;
};

export const favoriteStack = {
  title: "Favorite Stack",
  items: [
    {
      id: "adobe-suite",
      name: "Adobe Suite",
      category: "Creative design and visual storytelling",
      description:
        "Photoshop, Illustrator, and Premiere Pro for digital design, video editing, and compelling visual content — from graphics to motion.",
    },
    {
      id: "klaviyo",
      name: "Klaviyo",
      category: "Customer data platform / SMS / mobile push",
      description:
        "Building segmented flows, lifecycle campaigns, and retention programs that turn customer data into revenue.",
    },
    {
      id: "capcut",
      name: "CapCut",
      category: "Video editing",
      description:
        "Crafting high-quality paid media and organic videos with advanced editing, seamless transitions, and creative storytelling.",
    },
    {
      id: "figma",
      name: "Figma",
      category: "Collaborative design tool",
      description:
        "Designing user paths and optimizing experiences through intuitive workflows. Figma Jam for brainstorming and team collaboration.",
    },
    {
      id: "airtable",
      name: "Airtable",
      category: "Streamlining paid media campaigns",
      description:
        "Planning and managing Facebook campaigns and social projects with dynamic workflows, content schedules, and streamlined collaboration.",
    },
    {
      id: "shopify",
      name: "Shopify",
      category: "Web design and build",
      description:
        "Designing and building e-commerce experiences that balance brand storytelling with conversion-focused UX.",
    },
    {
      id: "clickup",
      name: "ClickUp",
      category: "Project management",
      description:
        "Keeping teams aligned, on schedule, and focused on deliverables with efficient task management and streamlined workflows.",
    },
    {
      id: "microsoft-office",
      name: "Microsoft Office Suite",
      category: "15+ years of expertise",
      description:
        "Daily use of Word, Excel, and PowerPoint for strategy docs, reporting, and client presentations.",
    },
  ] satisfies StackItem[],
} as const;

export type AwardItem = {
  id: string;
  title: string;
  subtitle?: string;
  year: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export const awardsMedia = {
  title: "Awards + Media",
  items: [
    {
      id: "investor-relations",
      title: "Investor Relations",
      subtitle: "Mark Cuban + Ashton Kutcher",
      year: "2017",
      description:
        "Successfully pitched and obtained funding from investors including Mark Cuban and Ashton Kutcher, driving growth and market presence for Slyde Handboards and Veldskoen USA. Named one of Mark Cuban's top five favorite investments by Inc. Magazine.",
    },
    {
      id: "press-features",
      title: "Featured in New York Times",
      subtitle: "ARNO Portfolio",
      year: "",
      description:
        "Featured in prominent publications including the New York Times, Forbes, and Business Journal, along with a memorable appearance on Shark Tank — gaining nationwide recognition and bolstering brand visibility.",
      linkLabel: "Full article",
    },
    {
      id: "orange-county-award",
      title: "Award-Winning Leadership",
      subtitle: "Orange County Business Journal",
      year: "2020",
      description:
        "Received the Orange County Business Journal Up-and-Coming Award for exceptional growth and innovation.",
    },
  ] satisfies AwardItem[],
} as const;

export type FaqTopic = {
  id: string;
  label: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  topicId?: string;
};

export const faq = {
  title: "Frequently Asked Questions",
  topics: [
    {
      id: "brand-narrative",
      label: "Crafting a Strong Brand Narrative",
    },
    {
      id: "digital-marketing",
      label: "Data-Driven Digital Marketing Strategies",
    },
    {
      id: "ecommerce",
      label: "E-Commerce Optimization",
    },
    {
      id: "success-examples",
      label: "Real-World Success Examples",
    },
    {
      id: "influencer-marketing",
      label: "Leveraging Influencer and Community Marketing",
    },
    {
      id: "purpose-driven",
      label: "Emotional & Purpose-Driven Marketing",
    },
  ] satisfies FaqTopic[],
  items: [
    {
      id: "industries",
      question: "What industries do you specialize in?",
      answer:
        "Consumer products, lifestyle brands, e-commerce, and outdoor recreation — with deep experience in footwear, handboards, pet wellness, and direct-to-consumer retail. I gravitate toward founder-led brands with a story worth telling.",
      topicId: "brand-narrative",
    },
    {
      id: "services",
      question: "What services do you offer as a designer?",
      answer:
        "Brand strategy, creative direction, visual identity, packaging, product design, e-commerce UX, email marketing, paid media creative, and content strategy. I work end-to-end or plug into existing teams where you need senior creative leadership.",
      topicId: "digital-marketing",
    },
    {
      id: "previous-work",
      question: "Can you provide examples of your previous work?",
      answer:
        "Yes — explore the Featured Work section and full project archive for case studies across Slyde Handboards, Veldskoen, Rizible, and multi-brand email programs. I'm happy to walk through relevant examples on a call.",
      topicId: "success-examples",
    },
    {
      id: "branding-approach",
      question: "How do you approach branding projects?",
      answer:
        "I start with the business goal and audience insight, then build a strategic foundation before any visual exploration. Minimalist design, clear typography, and narrative consistency guide every touchpoint — from packaging to paid social to the checkout flow.",
      topicId: "brand-narrative",
    },
    {
      id: "design-process",
      question: "Can you walk me through your design process?",
      answer:
        "Discover → define → design → deliver. Discovery covers goals, competitors, and customer research. Definition locks strategy and creative direction. Design iterates across key assets and channels. Delivery includes handoff, launch support, and optimization based on real performance data.",
      topicId: "ecommerce",
    },
    {
      id: "tools",
      question: "What software and tools do you use for your designs?",
      answer:
        "Adobe Creative Suite, Figma, Shopify, Klaviyo, CapCut, Airtable, ClickUp, and Microsoft Office. I choose tools that keep collaboration fast and output polished — whether we're building a brand system or scaling a campaign.",
      topicId: "digital-marketing",
    },
  ] satisfies FaqItem[],
} as const;

export const contact = {
  id: "contact",
  headline: "Let's Work Together",
  subheadline: "Contact",
  description:
    "I'm always looking for new and exciting projects. If you have an idea or just want to say hi, feel free to reach out — I'd love to hear from you.",
  cta: {
    label: "Get in touch",
    href: "mailto:hello@stevewatts.com",
  },
  social: [
    {
      label: "LinkedIn",
      href: siteMeta.linkedInUrl,
      handle: "Steve Watts",
    },
  ],
  backToTopLabel: "Go back to top",
} as const;

/** Additional projects referenced on the full work archive (not shown in homepage grid). */
export const additionalProjects: FeaturedProject[] = [
  {
    id: "portfolio-2008",
    title: "Portfolio",
    category: "Product Design",
    year: "2008",
    href: "/work/portfolio",
  },
  {
    id: "rachel-zoe",
    title: "Rachel Zoe",
    category: "Collab",
    year: "2022",
    href: "/work/rachel-zoe",
  },
  {
    id: "veldskoen-print",
    title: "Veldskoen Shoes",
    category: "Print",
    year: "2022",
    href: "/work/veldskoen-print",
  },
  {
    id: "slyde-product-dev",
    title: "Slyde Handboards",
    category: "Product Dev",
    year: "2018",
    href: "/work/slyde-product-dev",
  },
];
