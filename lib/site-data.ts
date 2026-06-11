/**
 * Structured site content for Steve Watts portfolio.
 * Copy and hierarchy from reference/framer-home.html; project grid and case studies
 * cross-checked with reference screenshots (homepage, navigation, selected works, project pages).
 */

// ---------------------------------------------------------------------------
// Site meta
// ---------------------------------------------------------------------------

export const siteMeta = {
  name: "Steve Watts",
  title: "Steve Watts | Portfolio",
  description:
    "Founder, Creative Director, and Brand Strategist with over 15 years of experience leading creative teams and building compelling brand identities across diverse industries.",
  location: "San Clemente, CA",
  locationShort: "San Clemente, CA",
  linkedInUrl: "https://www.linkedin.com/in/stevenstewartwatts/",
  copyright: "©2024 Steve Watts",
  rightsReserved: "©2024 All Rights Reserved",
} as const;

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export type NavLink = {
  label: string;
  href: string;
  badge?: string;
};

export type CaseStudySection = {
  id: string;
  heading: string;
  body: string;
};

export type Project = {
  id: string;
  slug: string;
  /** Primary card label (e.g. "Email", "Packaging"). */
  label: string;
  /** Client or project name shown on the card (e.g. "Multi Business", "Veldskoen Shoes"). */
  name: string;
  /** Normalized discipline for metadata and filters. */
  category: string;
  year: string;
  href: string;
  /** Path under public/ once assets are migrated from reference/. */
  imageSrc?: string;
  /** Reference asset filename in reference/ for migration. */
  referenceImage?: string;
  featured: boolean;
  caseStudy?: {
    title: string;
    intro: string;
    client: string;
    year: string;
    category: string;
    sections: CaseStudySection[];
    relatedProjectIds: string[];
  };
};

// ---------------------------------------------------------------------------
// 1. Navigation
// ---------------------------------------------------------------------------

export const navigation = {
  /** Top bar — local indicator uses live time in UI; label prefix only here. */
  localPrefix: "LOCAL /",
  headerLinks: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  overlayLinks: [
    { label: "Home", href: "#top" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  contactCta: {
    label: "Contact now",
    href: "/#contact",
  },
  availabilityLabel: "Available for freelance",
} as const;

// ---------------------------------------------------------------------------
// Projects (master list — selected work cards + case study pages)
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: "multi-business",
    slug: "multi-business",
    label: "Email",
    name: "Multi Business",
    category: "Email",
    year: "2010–2025",
    href: "/work/multi-business",
    referenceImage: "BuMzxENCqkpoJutTtqHUDqkZsw.avif",
    featured: true,
  },
  {
    id: "slyde-handboards",
    slug: "slyde-handboards",
    label: "Slyde Handboards",
    name: "Business",
    category: "Product / Graphic",
    year: "2010–2023",
    href: "/work/slyde-handboards",
    referenceImage: "JEi4oggbYQA9XdRsMFutoxKDmwI.avif",
    featured: true,
    caseStudy: {
      title: "Slyde Handboards",
      intro:
        "From garage startup to Shark Tank stage — building a handboard brand through product design, storytelling, and relentless creative direction.",
      client: "Slyde Handboards",
      year: "2019",
      category: "Product Design",
      sections: [
        {
          id: "challenge",
          heading: "The Challenge",
          body:
            "Establish Slyde as the definitive handboard brand — balancing performance product development with a lifestyle narrative that resonates on land and in the water.",
        },
        {
          id: "process",
          heading: "Design Process",
          body:
            "Iterative prototyping, athlete feedback, and brand storytelling shaped every product line — from The Grom for beginners to premium boards for core riders.",
        },
        {
          id: "outcome",
          heading: "The Outcome",
          body:
            "A nationally recognized brand with investor backing, Shark Tank visibility, and a product ecosystem that continues to define the category.",
        },
      ],
      relatedProjectIds: ["the-grom", "veldskoen-packaging"],
    },
  },
  {
    id: "veldskoen-packaging",
    slug: "veldskoen-packaging",
    label: "Packaging",
    name: "Veldskoen Shoes",
    category: "Packaging",
    year: "2022",
    href: "/work/veldskoen-packaging",
    referenceImage: "aHfIoxhXP6eh2D6dUXvdrRiLIU.avif",
    featured: true,
    caseStudy: {
      title: "Veldskoen Packaging",
      intro:
        "At Veldskoen, every detail matters—including the box your shoes arrive in. We embarked on a journey to craft a packaging experience that reflects our values of quality, sustainability, and adventure. The result is a shoe box that tells the story of Veldskoen before you even lace up.",
      client: "Veldskoen Shoes",
      year: "2021",
      category: "Packaging",
      sections: [
        {
          id: "challenge",
          heading: "The Challenge",
          body:
            "Our mission was to create a box that embodies what Veldskoen stands for: authenticity, eco-consciousness, and adventure. We explored how to balance functionality, sustainability, and aesthetics while meeting customer expectations for an impactful unboxing experience.",
        },
        {
          id: "process",
          heading: "Design Process",
          body:
            "The design process was driven by the principles of minimal waste and maximum storytelling. Earthy textures, clean lines, and bold branding elements reflected Veldskoen's connection to nature and craftsmanship. Customer experience remained front and center, ensuring every box conveyed the spirit of exploration and authenticity.",
        },
        {
          id: "development",
          heading: "The Development",
          body:
            "We explored countless materials, created detailed sketches, and tested numerous prototypes. We refined each fold and finish to achieve the right combination of durability and sustainability. By carefully sourcing recyclable materials, we crafted a box that protects the product and minimizes its footprint on the planet.",
        },
        {
          id: "outcome",
          heading: "The Outcome",
          body:
            "The final shoe box and insert tell a story of quality, sustainability, and adventure—the essence of the Veldskoen brand. From the tactile materials to the thoughtful unboxing experience, this packaging reflects the journey every step of the way.",
        },
      ],
      relatedProjectIds: ["slyde-handboards", "rachel-zoe"],
    },
  },
  {
    id: "rizible",
    slug: "rizible",
    label: "Branding",
    name: "Rizible",
    category: "Branding",
    year: "2024",
    href: "/work/rizible",
    featured: true,
  },
  {
    id: "portfolio-2008",
    slug: "portfolio",
    label: "Product Design",
    name: "Portfolio",
    category: "Product Design",
    year: "2008",
    href: "/work/portfolio",
    featured: false,
  },
  {
    id: "rachel-zoe",
    slug: "rachel-zoe",
    label: "Rachel Zoe Collab",
    name: "Collab",
    category: "Collab",
    year: "2024",
    href: "/work/rachel-zoe",
    featured: false,
    caseStudy: {
      title: "Rachel Zoe Collab",
      intro:
        "A creative collaboration blending lifestyle luxury with Slyde's coastal energy — packaging, campaign visuals, and a cohesive brand moment.",
      client: "Rachel Zoe",
      year: "2021",
      category: "Creative",
      sections: [
        {
          id: "challenge",
          heading: "The Challenge",
          body:
            "Merge two distinct brand worlds into a single, aspirational collaboration that feels authentic to both audiences.",
        },
        {
          id: "outcome",
          heading: "The Outcome",
          body:
            "A polished campaign and product presentation that elevated Slyde's positioning in the lifestyle space.",
        },
      ],
      relatedProjectIds: ["slyde-handboards", "veldskoen-packaging"],
    },
  },
  {
    id: "veldskoen-print",
    slug: "veldskoen-print",
    label: "Print",
    name: "Veldskoen Shoes",
    category: "Print",
    year: "2022",
    href: "/work/veldskoen-print",
    featured: false,
  },
  {
    id: "the-grom",
    slug: "the-grom",
    label: "The Grom",
    name: "Product Dev",
    category: "Product Dev",
    year: "2018",
    href: "/work/the-grom",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

// ---------------------------------------------------------------------------
// 2. Hero
// ---------------------------------------------------------------------------

export const hero = {
  headline: "Steve Watts",
  tagline: "Vision. Brand. Impact.",
  locationLabel: "Based in San Clemente, CA",
  roles: ["Digital Designer", "Storyteller"],
  cta: {
    label: "Contact now",
    href: "#contact",
  },
} as const;

// ---------------------------------------------------------------------------
// 3. Featured Work (homepage subset)
// ---------------------------------------------------------------------------

export const featuredWork = {
  title: "Featured Work",
  description:
    "My creative spirit thrives in the digital space, where I combine storytelling, design, and strategic innovation to craft impactful brand experiences that connect and inspire.",
  projectIds: [
    "multi-business",
    "slyde-handboards",
    "veldskoen-packaging",
    "rizible",
    "portfolio-2008",
    "rachel-zoe",
    "veldskoen-print",
    "the-grom",
  ],
  moreProjectsCta: {
    label: "See more projects",
    href: "/projects",
  },
} as const;

// ---------------------------------------------------------------------------
// 4. Selected Work / Project Cards (full archive page)
// ---------------------------------------------------------------------------

export const selectedWork = {
  title: "Selected Works",
  periodLabel: "(2007 – 2024)",
  description:
    "A curated archive of brand, product, packaging, and digital work across founder-led ventures and client collaborations.",
  /** Grid order matches reference/selected works page screenshot. */
  projectIds: [
    "multi-business",
    "slyde-handboards",
    "veldskoen-packaging",
    "rizible",
    "portfolio-2008",
    "rachel-zoe",
    "veldskoen-print",
    "the-grom",
  ],
  moreWorksMarquee: "Works More Works More Works More",
} as const;

// ---------------------------------------------------------------------------
// 5. More About Steve
// ---------------------------------------------------------------------------

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
  readMoreCta: {
    label: "Read more about me",
    href: "/about",
  },
} as const;

export type LogoTickerItem = {
  id: string;
  label: string;
  imageSrc?: string;
};

export const logoTicker = {
  items: [
    { id: "gma", label: "Good Morning America" },
    { id: "curateur", label: "Curateur" },
    { id: "dicks", label: "Dick's Sporting Goods" },
    { id: "ual", label: "UAL Central Saint Martins" },
    { id: "happybond", label: "Happy Bond" },
    {
      id: "veldskoen",
      label: "Veldskoen",
      imageSrc: "/images/projects/veldskoen-packaging.png",
    },
    { id: "slyde", label: "Slyde" },
    { id: "thula-tula", label: "Thula Tula" },
    { id: "forbes", label: "Forbes" },
    { id: "shark-tank", label: "Shark Tank" },
    { id: "abc", label: "ABC" },
    { id: "patagonia", label: "Patagonia" },
    { id: "rei", label: "REI" },
    { id: "disney", label: "Disney" },
  ] satisfies LogoTickerItem[],
} as const;

// ---------------------------------------------------------------------------
// 6. Expertise
// ---------------------------------------------------------------------------

export type ExpertiseItem = {
  id: string;
  number: number;
  title: string;
  preview: string;
  modalTitle: string;
  modalSubtitle: string;
  modalBody: string;
  modalImage: string;
  ctaLabel: string;
  ctaHref: string;
};

export const expertise = {
  title: "Expertise",
  items: [
    {
      id: "creative-leadership",
      number: 1,
      title: "Creative Leadership",
      preview:
        "Leading design teams to develop innovative campaigns and distinctive brand identities — from concept through execution.",
      modalTitle: "Creative Leadership:",
      modalSubtitle: "Vision, Innovation, & Impact",
      modalBody:
        "I turn ideas into multi-million-dollar brands, leading high-performing teams to drive innovation, storytelling, and growth. As the force behind Slyde Handboards and Veldskoen USA, I've scaled startups, secured $500K from Mark Cuban & Ashton Kutcher, and built brands featured in Forbes and The New York Times. With expertise in branding, digital marketing, and e-commerce, I fuse creativity with data-driven strategy to deliver real results. Recognized for award-winning leadership, I don't just create—I inspire, execute, and grow.",
      modalImage: "/images/expertise/creative-leadership.avif",
      ctaLabel: "E-mail",
      ctaHref: "mailto:hello@stevewatts.com",
    },
    {
      id: "digital-marketing",
      number: 2,
      title: "Digital Marketing",
      preview:
        "Crafting high-performing Facebook ad campaigns that drive engagement, boost brand visibility, and deliver measurable growth.",
      modalTitle: "Digital Marketing",
      modalSubtitle: "Data-Driven Revenue Growth",
      modalBody:
        "I specialize in high-impact digital marketing that transforms brands and drives revenue. Managing $30K+ monthly ad budgets, I've optimized Facebook, Google, and email campaigns to maximize ROI. My expertise in Shopify, UX/UI, and conversion optimization has fueled e-commerce success, scaling Veldskoen USA to $250K/month in a year. By blending strategic storytelling with performance marketing, I create campaigns that not only engage but convert—turning audiences into loyal customers and brands into industry leaders.",
      modalImage: "/images/expertise/digital-marketing.webp",
      ctaLabel: "E-mail",
      ctaHref: "mailto:hello@stevewatts.com",
    },
    {
      id: "storytelling-branding",
      number: 3,
      title: "Storytelling & Branding",
      preview:
        "Crafting compelling narratives that resonate with audiences and strengthen brand loyalty.",
      modalTitle: "Storytelling & Branding:",
      modalSubtitle: "Crafting Iconic Narratives",
      modalBody:
        "I build brands that captivate and convert. By blending authentic storytelling with strategic branding, I create compelling narratives that forge deep customer connections. From securing national media features to driving multi-million-dollar brand growth, my approach turns vision into lasting impact.",
      modalImage: "/images/expertise/storytelling-branding.webp",
      ctaLabel: "E-mail",
      ctaHref: "mailto:hello@stevewatts.com",
    },
    {
      id: "ecomm-growth",
      number: 4,
      title: "Ecomm Growth",
      preview:
        "Proven ability to scale brands from inception to million-dollar success stories through strategic planning and execution.",
      modalTitle: "Ecomm Growth",
      modalSubtitle: "Conversion-Focused Digital Growth",
      modalBody:
        "I drive e-commerce success through data-backed strategies, UX optimization, and high-converting digital campaigns. By refining customer journeys and leveraging A/B testing, I've boosted conversions and expanded market reach. My expertise in Shopify, CRO, and multi-channel marketing turns online stores into revenue powerhouses.",
      modalImage: "/images/expertise/ecomm-growth.webp",
      ctaLabel: "E-mail",
      ctaHref: "mailto:hello@stevewatts.com",
    },
    {
      id: "email-marketing",
      number: 5,
      title: "Email Marketing",
      preview:
        "Creating engaging email marketing strategies and dynamic e-commerce solutions that fuel brand growth and customer engagement.",
      modalTitle: "Email Marketing",
      modalSubtitle: "Data-Driven Revenue Growth",
      modalBody:
        "I create high-performing, on-brand email campaigns that drive 40-50% of overall brand revenue. With 40-60% open rates and 5%+ click-through rates, I leverage robust segmentation and extensive A/B testing to optimize engagement, retention, and conversions—turning email into a powerhouse for sustained growth.",
      modalImage: "/images/expertise/email-marketing.avif",
      ctaLabel: "E-mail",
      ctaHref: "mailto:hello@stevewatts.com",
    },
    {
      id: "seo",
      number: 6,
      title: "SEO: It's a Passion",
      preview:
        "Optimizing content, keywords, and site performance to boost rankings, drive traffic, and increase conversions.",
      modalTitle: "SEO: Optimized for",
      modalSubtitle: "Data-Driven Revenue Growth",
      modalBody:
        "I drive organic traffic through strategic SEO, including keyword research, content optimization, and technical improvements. My data-driven approach boosts search rankings, increases visibility, and enhances user engagement for sustained brand growth.",
      modalImage: "/images/expertise/seo.avif",
      ctaLabel: "E-mail",
      ctaHref: "mailto:hello@stevewatts.com",
    },
  ] satisfies ExpertiseItem[],
} as const;

// ---------------------------------------------------------------------------
// 7. Motivation
// ---------------------------------------------------------------------------

export type MotivationTextPart = {
  text: string;
  bold?: boolean;
};

export const motivation = {
  title: "Motivation",
  paragraphs: [
    [
      { text: "As a " },
      { text: "Founder, Creative Director, and Brand Strategist", bold: true },
      {
        text: ", I'm passionate about transforming ideas into powerful brand experiences. With over ",
      },
      { text: "15 years of leadership", bold: true },
      { text: ", I've built and scaled brands like " },
      { text: "Veldskoen USA, Thula Tula, and Slyde Handboards", bold: true },
      { text: ", merging " },
      { text: "design, storytelling, and business strategy", bold: true },
      { text: " to drive engagement and growth." },
    ],
    [
      { text: "I thrive on crafting " },
      { text: "visual narratives that connect", bold: true },
      {
        text: ", guiding teams to execute innovative solutions that elevate brand identity and customer experience. Fueled by creativity and strategy, my mission is to shape brands that inspire, resonate, and lead in their industries.",
      },
    ],
  ] satisfies MotivationTextPart[][],
} as const;

// ---------------------------------------------------------------------------
// 8. Experience
// ---------------------------------------------------------------------------

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
      period: "2010 – 2024",
      description:
        "At Slyde Handboards, I built a million-dollar brand from the ground up, securing $500K in funding from Mark Cuban and Ashton Kutcher. I led branding, product development, and multi-channel marketing, using Facebook ads, email, and storytelling to drive growth. Through strategic partnerships and UX/UI optimization, I boosted conversions, expanded market reach, and earned features in Forbes and The New York Times.",
    },
    {
      id: "veldskoen",
      company: "Veldskoen",
      role: "Founder + Creative Director",
      period: "2018 – 2024",
      description:
        "At Veldskoen USA, I transformed a startup into a $250K/month brand within a year through strategic storytelling, digital marketing, and eCommerce optimization. Managing a $30K/month ad budget, I leveraged Facebook and Google Ads, influencer partnerships, and data-driven campaigns to maximize ROI. I also enhanced the brand's identity, customer experience, and sustainability efforts, positioning Veldskoen as a globally recognized lifestyle brand.",
    },
    {
      id: "happybond",
      company: "Happybond",
      role: "Paid Media Consultancy",
      period: "2023 – 2024",
      description:
        "Led explosive growth at Happybond, scaling monthly revenue from $5K to $50K in just a few months through paid media, organic marketing, and high-converting email campaigns.",
    },
    {
      id: "ilan-dei",
      company: "Ilan Dei",
      role: "Junior Designer",
      period: "2008 – 2010",
      description:
        "Started my career as a Junior Designer at Ilan Dei, honing skills in product design, branding, and creative storytelling.",
    },
  ] satisfies ExperienceItem[],
} as const;

// ---------------------------------------------------------------------------
// 9. Favorite Stack
// ---------------------------------------------------------------------------

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
        "I leverage Adobe Creative Suite (Photoshop, Illustrator, and Premiere Pro) extensively in my work, particularly for digital design, video editing, and creating compelling visual content. Whether it's using Photoshop for graphics, Illustrator for vector designs, or Premiere Pro for video projects",
    },
    {
      id: "klaviyo",
      name: "Klaviyo",
      category: "Customer data platform / SMS marketing / mobile push",
      description:
        "With 15 years of experience in email marketing, I've honed my skills in creating data-driven campaigns that engage, convert, and retain customers. From developing strategies to crafting compelling content and optimizing deliverability, I've worked across various industries to design emails that drive results.",
    },
    {
      id: "capcut",
      name: "CapCut",
      category: "Video editing",
      description:
        "With extensive experience using CapCut, I craft high-quality paid media and organic videos that engage audiences and drive results — advanced editing, seamless transitions, and creative storytelling.",
    },
    {
      id: "figma",
      name: "Figma",
      category: "Collaborative design tool",
      description:
        "I use Figma to design user paths and optimize experiences through intuitive, collaborative workflows. Leveraging Figma Jam, I foster creative brainstorming and seamless team collaboration.",
    },
    {
      id: "airtable",
      name: "Airtable",
      category: "Streamlining paid media campaigns",
      description:
        "Experienced in using Airtable for planning and managing Facebook campaigns and social media projects — dynamic workflows, content schedules, and streamlined collaboration.",
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
        "With extensive project management experience in ClickUp, I keep teams aligned, on schedule, and focused on deliverables from kickoff through launch.",
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

// ---------------------------------------------------------------------------
// 10. Awards / Media
// ---------------------------------------------------------------------------

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
      subtitle: "Press Portfolio",
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

// ---------------------------------------------------------------------------
// 11. FAQ
// ---------------------------------------------------------------------------

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
    { id: "brand-narrative", label: "Crafting a Strong Brand Narrative" },
    {
      id: "digital-marketing",
      label: "Data-Driven Digital Marketing Strategies",
    },
    { id: "ecommerce", label: "E-Commerce Optimization" },
    { id: "success-examples", label: "Real-World Success Examples" },
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
        "Yes — explore Selected Works and individual project pages for case studies across Slyde Handboards, Veldskoen, Rizible, and multi-brand email programs. I'm happy to walk through relevant examples on a call.",
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

// ---------------------------------------------------------------------------
// 12. Contact
// ---------------------------------------------------------------------------

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
  footerNav: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavLink[],
  backToTopLabel: "Go back to top",
} as const;
