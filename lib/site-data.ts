/**
 * Structured site content for Steve Watts portfolio.
 * Copy and hierarchy from https://stevewattsportfolio.framer.website/
 */

// ---------------------------------------------------------------------------
// Site meta
// ---------------------------------------------------------------------------

export const siteMeta = {
  name: "Steve Watts",
  title: "Steve Watts | Digital Growth & AI Innovation",
  description:
    "Digital growth and innovation leader building brands, DTC businesses, digital products, and AI-enabled operating systems across e-commerce, lifecycle marketing, customer experience, and creative strategy.",
  location: "San Clemente, CA",
  locationShort: "San Clemente, CA",
  email: "stevenstewart90@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/stevenstewartwatts/",
  resumeUrl:
    "https://drive.google.com/file/d/1wIqAsnoWu_yGf_r_Mn7QzB_54PUtBZXf/view?usp=drive_link",
  copyright: "©2026 Steve Watts",
  rightsReserved: "©2026 All Rights Reserved",
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
  imageSrc?: string;
};

export type CaseStudy = {
  title: string;
  intro: string;
  client: string;
  year: string;
  category: string;
  sections: CaseStudySection[];
  relatedProjectIds: string[];
  externalLink?: {
    label: string;
    href: string;
  };
};

export type CardMetric = {
  value: string;
  label: string;
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
  /** Overrides for selected works page card display. */
  selectedLabel?: string;
  selectedName?: string;
  selectedYear?: string;
  featured: boolean;
  /** Render this project as a full-width, emphasized featured card. */
  featuredWide?: boolean;
  /** Optional supporting description shown on emphasized cards. */
  cardDescription?: string;
  /** Optional headline metrics shown on emphasized cards. */
  cardMetrics?: CardMetric[];
  caseStudy?: CaseStudy;
};

export type ContactFormField = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  required?: boolean;
};

// ---------------------------------------------------------------------------
// 1. Navigation
// ---------------------------------------------------------------------------

export const navigation = {
  /** Top bar — local indicator uses live time in UI; label prefix only here. */
  localPrefix: "LOCAL/",
  headerLinks: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  overlayLinks: [
    { label: "Home", href: "/#top", badge: "2" },
    { label: "Work", href: "/#work" },
    { label: "How I Build With AI", href: "/how-i-build-with-ai" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  contactCta: {
    label: "CONTACT NOW",
    href: "/contact",
  },
  availabilityLabel: "OPEN TO SENIOR DIGITAL & AI ROLES",
} as const;

// ---------------------------------------------------------------------------
// Projects (master list — selected work cards + case study pages)
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: "fishewear-growth-system",
    slug: "fishewear-growth-system",
    label: "AI-Enabled DTC Growth",
    name: "FisheWear",
    category: "E-Commerce / Lifecycle / AI",
    year: "2025–Present",
    href: "/work/fishewear-growth-system",
    selectedLabel: "FisheWear",
    selectedName: "Digital Growth System",
    selectedYear: "2025–Present",
    featured: true,
    featuredWide: true,
    cardDescription:
      "Building a connected growth engine across Shopify, Klaviyo, customer data, content, creative production, lifecycle automation, and AI-assisted workflows.",
    cardMetrics: [
      { value: "+63%", label: "Net Sales YoY" },
      { value: "+76%", label: "Store Sessions YoY" },
      { value: "+49%", label: "Average Order Value" },
      { value: "$104K+", label: "Attributed Flow Revenue" },
    ],
  },
  {
    id: "totely-ai-storage",
    slug: "totely-ai-storage",
    label: "AI Product / UX",
    name: "Totely",
    category: "AI Product Strategy",
    year: "2025–Present",
    href: "/work/totely-ai-storage",
    selectedLabel: "Totely",
    selectedName: "AI Storage System",
    selectedYear: "2025–Present",
    featured: true,
    cardDescription:
      "A physical-and-digital storage system that lets people number a container, photograph what is inside, record where it lives, and later ask naturally where something was stored.",
  },
  {
    id: "multi-business",
    slug: "multi-business",
    label: "Email",
    name: "Multi Business",
    category: "Email",
    year: "2010-2025",
    selectedYear: "2010-24",
    href: "/work/multi-business",
    referenceImage: "BuMzxENCqkpoJutTtqHUDqkZsw.avif",
    featured: true,
    caseStudy: {
      title: "Impactful Campaign Messaging",
      intro:
        "In this project, I transformed email marketing into an immersive brand experience that feels like unwrapping a unique treasure. Leveraging 12 years of expertise with Klaviyo, I crafted campaigns that engage and delight recipients.",
      client: "Multi",
      year: "2010-2024",
      category: "Email",
      sections: [
        {
          id: "challenge",
          heading: "The Challenge",
          body:
            "The objective was to drive 40–50% of overall revenue by reaching broad audiences and finely segmented niches. The challenge lay in developing a strategy that combined personalization with mass appeal to break through the noise.",
          imageSrc: "/images/work/multi-business/challenge.jpg",
        },
        {
          id: "design",
          heading: "Design",
          body:
            "I created visually striking email templates that seamlessly blend bold imagery with clear, persuasive calls to action. Every design element was thoughtfully chosen to guide the reader through a story-like experience, elevating the brand’s narrative.",
          imageSrc: "/images/work/multi-business/design.gif",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "By integrating data-driven insights and rigorous A/B testing, I fine-tuned each email to achieve consistently high open rates (over 50%) and robust clickthroughs (3–5%). The development process balanced creative sketches with technical precision to ensure flawless performance across devices and dark screens.",
          imageSrc: "/images/work/multi-business/development.gif",
        },
        {
          id: "outcome",
          heading: "Outcome",
          body:
            "Our campaigns and flows across our 3 companies consistently delivered impressive results—significantly boosting revenue and deepening customer engagement. We maintained a consistent open rate of over 50% and an average click-through rate of 10-20%, showcasing exceptional engagement levels and the effectiveness of our strategies.",
          imageSrc: "/images/work/multi-business/outcome.jpg",
        },
      ],
      relatedProjectIds: ["rachel-zoe", "veldskoen-packaging"],
    },
  },
  {
    id: "slyde-handboards",
    slug: "slyde-handboards",
    label: "Product/Graphic",
    name: "Slyde Handboards",
    category: "Product/Graphic",
    year: "2010",
    selectedLabel: "Slyde Handboards",
    selectedName: "Business",
    selectedYear: "2010-2023",
    href: "/work/slyde-handboards",
    referenceImage: "JEi4oggbYQA9XdRsMFutoxKDmwI.avif",
    featured: true,
    caseStudy: {
      title: "Slyde Handboards",
      intro:
        "Slyde Handboards is a brand that transformed the handboarding experience, revolutionizing the way we connect with the ocean. Born out of a passion for bodysurfing and a drive to innovate, Slyde quickly became a global leader in the sport, combining sleek design and cutting-edge technology.",
      client: "Slyde Handboards",
      year: "2010-2023",
      category: "Product Design",
      sections: [
        {
          id: "research",
          heading: "Research",
          body:
            "The challenge was to develop a handboard that was not only durable and lightweight but also visually striking, akin to the high-performance gear seen in snowboarding and skateboarding. We needed a product that could stand out in both design and performance.",
          imageSrc: "/images/work/slyde/research.gif",
        },
        {
          id: "design",
          heading: "Design",
          body:
            "Using countless sketches, foam models, and 3D modeling, we refined the shape and functionality of each board to ensure an optimal riding experience for specific wave styles. The digital designs and foam printing allowed us to experiment with different shapes, curves, and materials to find the perfect balance between performance and aesthetics.",
          imageSrc: "/images/work/slyde/design.jpg",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "Partnering with a factory in Taiwan, we developed the Slyde Handboard from the ground up, creating six high-quality stainless steel molds for each shape to ensure precision and consistency in production. Every aspect of production, from the core materials to the final finish, was carefully engineered to create a handboard that would outperform anything else in the market.",
          imageSrc: "/images/work/slyde/development.gif",
        },
        {
          id: "concept",
          heading: "Concept",
          body:
            "Slyde quickly gained traction, selling over 10,000 boards worldwide and significantly contributing to the growth of bodysurfing. The brand helped redefine and create what was essentially a new spot, making wave riding more accessible and fun for ocean lovers around the world.",
          imageSrc: "/images/work/slyde/concept.gif",
        },
      ],
      relatedProjectIds: ["portfolio-2008", "veldskoen-packaging"],
    },
  },
  {
    id: "veldskoen-packaging",
    slug: "veldskoen-packaging",
    label: "Packaging",
    name: "Veldskoen Shoes",
    category: "Packaging",
    year: "2022",
    selectedName: "Brand",
    href: "/work/veldskoen-packaging",
    referenceImage: "aHfIoxhXP6eh2D6dUXvdrRiLIU.avif",
    featured: true,
    caseStudy: {
      title: "Veldskoen Packaging",
      intro:
        "At Veldskoen, every detail matters—including the box your shoes arrive in. We embarked on a journey to craft a packaging experience that reflects our values of quality, sustainability, and adventure. The result is a shoe box that tells the story of Veldskoen before you even lace up.",
      client: "Veldskoen Shoes",
      year: "2020",
      category: "Packaging",
      sections: [
        {
          id: "challenge",
          heading: "The Challenge",
          body:
            "Our mission was to create a box that embodies what Veldskoen stands for: authenticity, eco-consciousness, and adventure. We explored how to balance functionality, sustainability, and aesthetics while meeting customer expectations for an impactful unboxing experience.",
          imageSrc: "/images/work/veldskoen-packaging/challenge.gif",
        },
        {
          id: "process",
          heading: "Design Process",
          body:
            "The design process was driven by the principles of minimal waste and maximum storytelling. Earthy textures, clean lines, and bold branding elements reflected Veldskoen’s connection to nature and craftsmanship. Customer experience remained front and center, ensuring every box conveyed the spirit of exploration and authenticity.",
          imageSrc: "/images/work/veldskoen-packaging/process.jpg",
        },
        {
          id: "development",
          heading: "The Development",
          body:
            "We explored countless materials, created detailed sketches, and tested numerous prototypes. We refined each fold and finish to achieve the right combination of durability and sustainability. By carefully sourcing recyclable materials, we crafted a box that protects the product and minimizes its footprint on the planet.",
          imageSrc: "/images/work/veldskoen-packaging/development.jpg",
        },
        {
          id: "outcome",
          heading: "The Outcome",
          body:
            "☝️ The final shoe box and insert tell a story of quality, sustainability, and adventure—the essence of the Veldskoen brand. From the tactile materials to the thoughtful unboxing experience, this packaging reflects the journey every step of the way.",
          imageSrc: "/images/work/veldskoen-packaging/outcome.jpg",
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
    selectedYear: "2023",
    href: "/work/rizible",
    featured: true,
    caseStudy: {
      title: "Rizible Branding",
      intro:
        "The Rizible brand design captures the heart of business clarity, where innovation and efficiency meet in a fun, approachable way. This project aimed to craft a visual identity that embodies Rizible’s mission: simplifying chaos so teams can thrive and get things done.",
      client: "Rizible",
      year: "2024",
      category: "Branding",
      sections: [
        {
          id: "challenge",
          heading: "The challenge",
          body:
            "How do you create a visual identity that screams simplicity, inspires confidence, and conveys momentum? The challenge was building a brand that speaks directly to innovators and problem-solvers, showing Rizible as approachable and unapologetically bold.",
          imageSrc: "/images/work/rizible/challenge.gif",
        },
        {
          id: "design",
          heading: "Design",
          body:
            "The design process focused on translating clarity into visuals. Clean, geometric shapes with soft edges were selected to mirror Rizible’s balance between functionality and approachability. Bold typography and purposeful negative space helped eliminate visual clutter while reinforcing confidence.",
          imageSrc: "/images/work/rizible/design.jpg",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "From sketching initial concepts to refining every curve and corner, each element of the logo was meticulously crafted to reflect Rizible’s dynamic yet streamlined nature. Typography was carefully selected for its readability and strength, embodying purpose without complexity.",
          imageSrc: "/images/work/rizible/development.jpg",
        },
        {
          id: "outcome",
          heading: "Outcome",
          body:
            "The final logo and visual identity perfectly capture Rizible’s essence: bold, clear, and collaborative. Rounded edges convey friendliness, while the heavy geometric forms radiate strength and purpose. It's a mark that symbolizes getting things done with clarity, confidence, and a little fun along the way.",
          imageSrc: "/images/work/rizible/outcome.jpg",
        },
      ],
      relatedProjectIds: ["rachel-zoe", "slyde-handboards"],
    },
  },
  {
    id: "portfolio-2008",
    slug: "portfolio",
    label: "Product Design",
    name: "Portfolio",
    category: "Product Design",
    year: "2008",
    href: "/work/portfolio",
    featured: true,
    caseStudy: {
      title: "Product Design",
      intro:
        "Little Dude is a playful yet powerful response to the rapid acceleration of modern life. Inspired by extreme sports and the need for deeper human connection, he serves as a tactile reminder to slow down, embrace adventure, and reconnect with what truly matters.",
      client: "Ual",
      year: "2008",
      category: "Portfolio",
      sections: [
        {
          id: "research",
          heading: "Research",
          body:
            "In a world where technology has automated much of daily life, many feel disconnected and restless. Extreme sports provide an outlet, yet the deeper psychological benefits are often overlooked. The challenge was to create a tangible object that keeps the thrill and anticipation of adventure alive in everyday moments.",
          imageSrc: "/images/work/portfolio/research.jpg",
        },
        {
          id: "design",
          heading: "Design",
          body:
            "Little Dude is minimalist yet expressive—his form invites interpretation, reflection, and interaction. Crafted with sustainability in mind, he’s designed to be both a personal totem and a storytelling piece, evolving with the user's experiences.",
          imageSrc: "/images/work/portfolio/design.jpg",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "From early sketches to collecting and studying toys, the process was hands-on and iterative. Materials were carefully selected to balance durability with a tactile, comforting feel. User feedback shaped key elements, from the countdown mechanism to the vials that store physical memories of past adventures.",
          imageSrc: "/images/work/portfolio/development.jpg",
        },
        {
          id: "concept",
          heading: "Concept",
          body:
            "More than just an object, Little Dude is a ritual. He marks the countdown to your next adventure, holds physical tokens of past experiences, and serves as a visual record of your journey. In a fast-paced world, he offers a pause—a moment to reflect, anticipate, and stay connected to the thrill of living.",
          imageSrc: "/images/work/portfolio/concept.jpg",
        },
        {
          id: "how-to-use",
          heading: "How to Use Little Dude",
          body:
            "1. Activate: Pull the pin from his head to start the countdown to your next extreme experience. (The pin doubles as a keyring.)\n2. Record: After your adventure, fill the vial with a token (e.g., sand or snow) and store it in the black box.\n3. Customize & Reset: Mark Little Dude with your “adventure scars” and shake his hand to set a new countdown.",
        },
      ],
      relatedProjectIds: ["multi-business", "rizible"],
    },
  },
  {
    id: "rachel-zoe",
    slug: "rachel-zoe",
    label: "Collab",
    name: "Rachel Zoe",
    category: "Collab",
    year: "2022",
    selectedLabel: "Rachel Zoe Collab",
    selectedName: "Collab",
    selectedYear: "2024",
    href: "/work/rachel-zoe",
    featured: true,
    caseStudy: {
      title: "Rachel Zoe Collab",
      intro:
        "We partnered with Rachel Zoe's Curateur to design a luxury African-inspired blanket through our brand Thula Tula. The project aimed to create a high-quality, affordable product that would be the lead item in Curateur's monthly subscription box.",
      client: "Rachel Zoe",
      year: "2020",
      category: "Collab",
      sections: [
        {
          id: "challenge",
          heading: "The Challenge",
          body:
            "The challenge was to deliver a premium blanket at an accessible price point while maintaining the high standards expected by Rachel Zoe's clientele. Additionally, the blankets needed to be produced and shipped to meet tight deadlines during the COVID-19 pandemic.",
          imageSrc: "/images/work/rachel-zoe/challenge.jpg",
        },
        {
          id: "design",
          heading: "Design",
          body:
            "We created a refined, zebra-style design, combining elegance with African-inspired patterns. The design quickly became a fan favorite, highly requested by Curateur's customers for its unique and stylish appeal.",
          imageSrc: "/images/work/rachel-zoe/design.jpg",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "Collaborating closely with our South African mill, we ensured the blankets met the required quality and aesthetic standards. Despite production challenges, we successfully created a product that fit seamlessly into Curateur's monthly collection.",
          imageSrc: "/images/work/rachel-zoe/development.jpg",
        },
        {
          id: "outcome",
          heading: "Outcome",
          body:
            "The result was a major success—over 30,000 blankets sold, along with a generous donation of 10,000 blankets to the people of Lesotho, one of the world's poorest countries. The campaign not only boosted sales but also made a significant social impact.",
          imageSrc: "/images/work/rachel-zoe/outcome.jpg",
        },
      ],
      relatedProjectIds: ["veldskoen-packaging", "portfolio-2008"],
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
    featured: true,
    caseStudy: {
      title: "Heritage Meets Style",
      intro:
        "I designed a magazine-style lookbook for Veldskoen Shoes to captivate potential retailers at an industry show in Chicago. This project aimed to immerse the audience in the Veldskoen brand experience, blending style with a uniquely African story.",
      client: "Veldskoen",
      year: "2022",
      category: "Print",
      sections: [
        {
          id: "tight-turnaround",
          heading: "Tight Turnaround",
          body:
            "The challenge was to showcase Veldskoen's shoes in a lifestyle format that authentically told the brand’s African story—all within a tight deadline. The lookbook needed to be equally stunning in both digital and print formats, ensuring a seamless and impactful presentation.",
          imageSrc: "/images/work/veldskoen-print/tight-turnaround.jpg",
        },
        {
          id: "bold-minimalism",
          heading: "Bold Minimalism",
          body:
            "The design maintained the core brand colors and feel while allowing each shoe style to take center stage. By letting the product speak for itself, the lookbook achieved a clean yet compelling visual narrative.",
          imageSrc: "/images/work/veldskoen-print/bold-minimalism.jpg",
        },
        {
          id: "curated-visuals",
          heading: "Curated Visuals",
          body:
            "To bring the vision to life, I sourced and organized media while coordinating a targeted photoshoot to fill any content gaps. This strategic approach ensured the lookbook was cohesive and visually compelling.",
          imageSrc: "/images/work/veldskoen-print/curated-visuals.jpg",
        },
        {
          id: "engaging-storytelling",
          heading: "Engaging Storytelling",
          body:
            "The final product was a visually rich, magazine-style lookbook that beautifully told the Veldskoen story. It showcased the shoes through stunning photography and provided a clear, engaging vision of how they can be styled with various outfits.",
          imageSrc: "/images/work/veldskoen-print/engaging-storytelling.jpg",
        },
      ],
      relatedProjectIds: ["portfolio-2008", "veldskoen-packaging"],
      externalLink: {
        label: "See Full Size",
        href: "https://online.fliphtml5.com/qpemg/vtaq/#p=10",
      },
    },
  },
  {
    id: "the-grom",
    slug: "the-grom",
    label: "Product Dev",
    name: "Slyde Handboards",
    category: "Product Dev",
    year: "2018",
    selectedLabel: "The Grom",
    selectedName: "Product Dev",
    href: "/work/the-grom",
    featured: true,
    caseStudy: {
      title: "The Grom",
      intro:
        "The Grom Kids Handboard is a soft foam handboard designed specifically for young wave riders, providing a fun and safe way to experience bodysurfing. Developed to expand our product line and appeal to a younger demographic, it offers an exciting alternative for kids and parents looking to enjoy the ocean in a playful, approachable way.",
      client: "Slyde Handboards",
      year: "2018",
      category: "Product",
      sections: [
        {
          id: "research",
          heading: "Research",
          body:
            "The challenge was to create a fun and safer option for kids to ride waves while ensuring durability and ease of use. To achieve this, we needed to find a manufacturer specializing in softboard technology. We partnered with Playmaker, whose expertise in mold development and manufacturing processes enabled us to bring this innovative product to life. Watch below 👇",
          imageSrc: "/images/work/the-grom/research.jpg",
        },
        {
          id: "design",
          heading: "Design",
          body:
            "The design process focused on creating a playful and approachable shape with vibrant, exciting color variations that appeal to kids and parents alike. We crafted a fun name, “The Grom,” and designed eye-catching packaging to stand out on retail shelves. Every detail, from the shape to the colors, was chosen to inspire fun and adventure in the ocean.",
          imageSrc: "/images/work/the-grom/design.jpg",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "The development phase involved countless sketches, foam models, and a highly technical 3D model that was turned into a mold. By collaborating closely with our factory partners, we perfected the manufacturing process, enabling production of up to 200 boards per day. This efficient production capacity ensured we could meet growing demand without compromising on quality.",
          imageSrc: "/images/work/the-grom/development.jpg",
        },
        {
          id: "concept",
          heading: "Concept",
          body:
            "The Grom Kids Handboard became our best-selling product, drawing the attention of major retailers like Dick’s Sporting Goods. Its success not only expanded our product line but also solidified our brand's presence in the youth market, proving that innovative design and strategic manufacturing can create a hit in the competitive surf industry.",
          imageSrc: "/images/work/the-grom/concept.jpg",
        },
      ],
      relatedProjectIds: ["portfolio-2008", "veldskoen-print"],
    },
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
  headline: "STEVE WATTS",
  tagline: "Digital Growth. AI Innovation. Brand Impact.",
  supportingStatement:
    "I build brands, digital products, and AI-enabled growth systems that turn ambitious ideas into measurable growth.",
  locationLabel: "BASED IN SAN CLEMENTE CA",
  roles: ["Digital Strategy", "DTC Growth Leader"],
  roleHref: "/#about",
  cta: {
    label: "Contact Now",
    href: "/contact",
  },
} as const;

// ---------------------------------------------------------------------------
// 3. Featured Work (homepage subset)
// ---------------------------------------------------------------------------

export const featuredWork = {
  title: "Featured Work",
  description:
    "A selection of businesses, products, campaigns, and digital systems I have helped build—combining creative direction, e-commerce, customer experience, lifecycle marketing, and practical AI implementation.",
  projectIds: [
    "fishewear-growth-system",
    "totely-ai-storage",
    "veldskoen-packaging",
    "slyde-handboards",
    "multi-business",
    "rizible",
    "portfolio-2008",
    "rachel-zoe",
    "veldskoen-print",
    "the-grom",
  ],
  moreProjectsCta: {
    label: "See More Projects",
    href: "/projects",
  },
} as const;

// ---------------------------------------------------------------------------
// 4. Selected Work / Project Cards (full archive page)
// ---------------------------------------------------------------------------

export const selectedWork = {
  title: "Selected Works",
  periodLabel: "(2007 – Present)",
  description:
    "A curated archive of brand, product, packaging, and digital work across founder-led ventures and client collaborations.",
  /** Grid order matches Framer selected works page. */
  projectIds: [
    "fishewear-growth-system",
    "totely-ai-storage",
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
  titleLines: ["More", "About", "STEVE"],
  headline:
    "I’m a digital growth leader, founder, and creative strategist who connects brand, technology, customer behavior, and AI to build products, workflows, and businesses that grow.",
  body: [
    "For more than 15 years, I have built brands, launched products, led cross-functional teams, optimized e-commerce businesses, and turned creative ideas into measurable commercial results. My work spans product development, Shopify, lifecycle marketing, customer segmentation, paid acquisition, content, conversion optimization, and brand storytelling.",
    "Today, I also design practical AI-assisted workflows that help small teams research faster, produce better work, connect information across platforms, and make clearer decisions. I believe the strongest digital systems combine human judgment, creative direction, customer insight, and technology rather than treating them as separate disciplines.",
  ],
  resumeCta: {
    label: "Download resume",
    // Existing Drive résumé URL preserved; review manually if a newer Digital Strategy & Innovation résumé should replace it.
    href: siteMeta.resumeUrl,
  },
} as const;

export type LogoTickerItem = {
  id: string;
  label: string;
  imageSrc?: string;
};

export const logoTicker = {
  items: [
    { id: "logo-1", label: "Partner", imageSrc: "/images/logos/logo-1.png" },
    { id: "logo-2", label: "Partner", imageSrc: "/images/logos/logo-2.png" },
    { id: "logo-3", label: "Partner", imageSrc: "/images/logos/logo-3.png" },
    { id: "logo-4", label: "Partner", imageSrc: "/images/logos/logo-4.png" },
    { id: "logo-5", label: "Partner", imageSrc: "/images/logos/logo-5.png" },
    { id: "logo-6", label: "Partner", imageSrc: "/images/logos/logo-6.png" },
    { id: "logo-7", label: "Partner", imageSrc: "/images/logos/logo-7.png" },
    { id: "logo-8", label: "Partner", imageSrc: "/images/logos/logo-8.png" },
    { id: "logo-9", label: "Partner", imageSrc: "/images/logos/logo-9.webp" },
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
  titleLines: ["My", "Expertise"],
  items: [
    {
      id: "digital-strategy-innovation",
      number: 1,
      title: "Digital Strategy & Innovation",
      preview:
        "Connecting customer insight, commercial priorities, and technology into clear digital direction teams can execute.",
      modalTitle: "Digital Strategy & Innovation",
      modalSubtitle: "Clarity, Systems & Practical Change",
      modalBody:
        "I help brands and operators turn fragmented activity into a coherent digital strategy. That means defining the customer problem, prioritizing opportunities, aligning channels and tools, and building operating systems that support measurable growth. Innovation is useful only when it improves decisions, customer experience, or commercial outcomes—so I focus on practical implementation, cross-functional leadership, and iteration rather than novelty for its own sake.",
      modalImage: "/images/expertise/digital-marketing.webp",
      ctaLabel: "E-mail",
      ctaHref: "mailto:stevenstewart90@gmail.com",
    },
    {
      id: "dtc-ecommerce-growth",
      number: 2,
      title: "DTC & E-Commerce Growth",
      preview:
        "Building Shopify-centered growth systems across acquisition, conversion, retention, product launches, and reporting.",
      modalTitle: "DTC & E-Commerce Growth",
      modalSubtitle: "Commerce, Conversion & Compounding Results",
      modalBody:
        "I operate at the intersection of product, merchandising, customer behavior, and performance marketing. Across founder-led DTC brands, I have built and scaled e-commerce systems that connect storefront experience, lifecycle communication, content, creative testing, and measurement. The goal is durable growth: clearer customer journeys, stronger conversion foundations, and retention systems that keep earning after the first purchase.",
      modalImage: "/images/expertise/ecomm-growth.webp",
      ctaLabel: "E-mail",
      ctaHref: "mailto:stevenstewart90@gmail.com",
    },
    {
      id: "ai-workflow-system-design",
      number: 3,
      title: "AI Workflow & System Design",
      preview:
        "Designing human-led, AI-assisted workflows that move from evidence and strategy to production, review, and learning.",
      modalTitle: "AI Workflow & System Design",
      modalSubtitle: "Practical Systems, Not Novelty Tools",
      modalBody:
        "I design AI-enabled operating models that gather context, apply commercial and brand rules, prepare structured work, and pass it into tools teams already use. The systems support research, campaign production, creative handoffs, documentation, and measurement—while keeping humans accountable for approval, privacy, and final decisions. AI accelerates the work; judgment, taste, and responsibility remain human.",
      modalImage: "/images/expertise/seo.avif",
      ctaLabel: "E-mail",
      ctaHref: "mailto:stevenstewart90@gmail.com",
    },
    {
      id: "lifecycle-retention-marketing",
      number: 4,
      title: "Lifecycle & Retention Marketing",
      preview:
        "Building email and SMS systems that protect list health while driving relevant revenue across the customer journey.",
      modalTitle: "Lifecycle & Retention Marketing",
      modalSubtitle: "Segmentation, Flows & Campaign Operations",
      modalBody:
        "Lifecycle marketing is where customer understanding becomes commercial advantage. I design audience strategy, flow architecture, campaign phases, exclusions, and creative systems that keep communication relevant. Using Klaviyo and connected commerce data, I focus on engagement quality, retention, and long-term list health—not short-term pressure that damages trust.",
      modalImage: "/images/expertise/email-marketing.avif",
      ctaLabel: "E-mail",
      ctaHref: "mailto:stevenstewart90@gmail.com",
    },
    {
      id: "product-customer-experience",
      number: 5,
      title: "Product & Customer Experience",
      preview:
        "Turning customer friction into clearer products, journeys, and experiences people can actually use.",
      modalTitle: "Product & Customer Experience",
      modalSubtitle: "Usefulness, Clarity & Adoption",
      modalBody:
        "Whether the work is a digital product, a campaign experience, or an operational workflow, I start with the customer job to be done. I map journeys, simplify interfaces, define requirements, and pressure-test edge cases so the experience remains understandable under real conditions. Strong products and growth systems share the same foundation: empathy, clarity, and disciplined prioritization.",
      modalImage: "/images/expertise/creative-leadership.avif",
      ctaLabel: "E-mail",
      ctaHref: "mailto:stevenstewart90@gmail.com",
    },
    {
      id: "brand-creative-storytelling",
      number: 6,
      title: "Brand, Creative & Storytelling",
      preview:
        "Building brand systems and creative direction that connect emotion, product truth, and commercial intent.",
      modalTitle: "Brand, Creative & Storytelling",
      modalSubtitle: "Narrative, Design Direction & Cultural Signal",
      modalBody:
        "I come from founder and creative leadership work across product brands that had to earn attention through story, design, and cultural relevance. That foundation still shapes my digital growth practice: positioning, creative systems, content direction, and campaign narrative must reinforce the same customer promise. Creative work is strongest when it is strategically grounded and operationally repeatable.",
      modalImage: "/images/expertise/storytelling-branding.webp",
      ctaLabel: "E-mail",
      ctaHref: "mailto:stevenstewart90@gmail.com",
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
      id: "fishewear",
      company: "FisheWear",
      role: "Head of Marketing & Growth",
      period: "2025 – Present",
      description:
        "Leading DTC growth across Shopify, Klaviyo, lifecycle marketing, customer segmentation, product launches, SEO, content, creative testing, performance reporting, and AI-assisted operating systems for a founder-led women’s outdoor apparel brand.",
    },
    {
      id: "cognetix-ai",
      company: "Cognetix AI",
      role: "Strategic Advisor, AI Strategy & Digital Innovation",
      period: "2023 – Present",
      description:
        "Advising executives and operators on practical AI applications across customer experience, marketing workflows, automation, content operations, digital strategy, and decision-making.",
    },
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
      company: "HappyBond",
      role: "Paid Media Consultancy",
      period: "2023 – 2024",
      description:
        "I led the explosive growth of HappyBond, skyrocketing monthly revenue from $5K to $50K in just a few months. Through a powerful blend of paid media, organic marketing, and high-converting email campaigns.",
    },
    {
      id: "ilan-dei",
      company: "Ilan Dei",
      role: "Junior Designer",
      period: "2008 – 2010",
      description:
        "I started my career as a Junior Designer at Ilan Dei, honing my skills in product design, branding, and creative storytelling.",
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
  titleLines: ["Favorite", "Stack"],
  description:
    "Tools organized by purpose across commerce, customer data, creative production, operations, and measurement—supporting connected workflows rather than isolated software proficiency.",
  items: [
    {
      id: "shopify",
      name: "Shopify",
      category: "Commerce and Customer Data",
      description:
        "The commercial source of truth for product, inventory, storefront experience, and conversion work across DTC growth systems.",
    },
    {
      id: "klaviyo",
      name: "Klaviyo",
      category: "Commerce and Customer Data",
      description:
        "Lifecycle and retention infrastructure for email, SMS, segmentation, flows, campaign operations, and performance review.",
    },
    {
      id: "figma",
      name: "Figma",
      category: "Creative Production",
      description:
        "Collaborative design for user journeys, campaign wireframes, creative systems, and production handoffs.",
    },
    {
      id: "adobe-suite",
      name: "Adobe Suite",
      category: "Creative Production",
      description:
        "Visual design, image production, and motion support across brand, campaign, and content systems.",
    },
    {
      id: "capcut",
      name: "CapCut",
      category: "Creative Production",
      description:
        "Fast production for paid and organic video content that supports campaign and product storytelling.",
    },
    {
      id: "airtable",
      name: "Airtable",
      category: "Operations and Collaboration",
      description:
        "Structured campaign and project records that keep strategy, creative status, review state, and learnings connected.",
    },
    {
      id: "clickup",
      name: "ClickUp",
      category: "Operations and Collaboration",
      description:
        "Cross-functional planning and delivery tracking for marketing, product, and creative workstreams.",
    },
    {
      id: "microsoft-office",
      name: "Microsoft Office Suite",
      category: "Measurement and Optimization",
      description:
        "Reporting, analysis, and documentation across Microsoft Office and Google Workspace for planning and decision support.",
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
        "Successfully pitched and obtained funding from investors like Mark Cuban and Ashton Kutcher, driving the growth and market presence of Slyde Handboards and Veldskoen USA and named Mark Cuban's Top 5 favorite investments by Inc. Magazine.",
    },
    {
      id: "press-features",
      title: "Featured in New York Times",
      subtitle: "Arno Red Themed Portfolio",
      year: "2017",
      description:
        "Featured in prominent publications such as the New York Times, Forbes, and Business Journal, along with a memorable appearance on Shark Tank, gaining nationwide recognition and bolstering brand visibility.",
      href: "https://www.nytimes.com/2016/04/28/business/smallbusiness/selling-surfers-on-a-new-way-to-ride-the-waves.html",
      linkLabel: "Full Article",
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
// 12. Contact (homepage section)
// ---------------------------------------------------------------------------

export const contact = {
  id: "contact",
  headline: "Let's Work Together",
  headlineLines: ["Let's Work", "Together"],
  subheadline: "Contact",
  description:
    "I’m interested in senior digital strategy, e-commerce, growth, product, and AI innovation opportunities—as well as select advisory and founder-led collaborations.",
  descriptionSecondary:
    "Based in San Clemente, I connect brand, technology, customer behavior, and AI-assisted operating systems to help teams build clearer products, stronger growth systems, and more accountable execution.",
  cta: {
    label: "Contact",
    href: "/contact",
  },
  social: [
    {
      label: "LinkedIn",
      href: siteMeta.linkedInUrl,
      handle: "Steve Watts",
    },
  ],
  footerNav: [] as NavLink[],
  backToTopLabel: "Go Back To Top",
} as const;

// ---------------------------------------------------------------------------
// 13. Contact page (/contact)
// ---------------------------------------------------------------------------

export const contactPage = {
  headline: "Say Hello!",
  description:
    "I’m interested in senior digital strategy, e-commerce, growth, product, and AI innovation opportunities—as well as select advisory and founder-led collaborations.",
  formIntro: "Fill This Form Out",
  formFields: [
    {
      id: "name",
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Name",
      required: true,
    },
    {
      id: "email",
      name: "email",
      label: "E-Mail",
      type: "email",
      placeholder: "E-Mail",
      required: true,
    },
    {
      id: "message",
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Message",
      required: true,
    },
  ] satisfies ContactFormField[],
  submitLabel: "Send Email",
  socialHeading: "Social",
  social: {
    label: "LinkedIn",
    href: siteMeta.linkedInUrl,
  },
  location: {
    label: "Current Location",
    value: "San Clemente, California (CA), 92672, United States",
  },
  phone: {
    label: "Phone",
    value: "USA, +1 310 433 0363",
  },
  email: {
    label: "Email",
    value: siteMeta.email,
    href: `mailto:${siteMeta.email}`,
  },
  backToTopLabel: "Go Back To Top",
} as const;
