/**
 * Structured site content for Steve Watts portfolio.
 * Copy and hierarchy from https://stevewattsportfolio.framer.website/
 */

// ---------------------------------------------------------------------------
// Site meta
// ---------------------------------------------------------------------------

export const siteMeta = {
  name: "Steve Watts",
  title: "Steven watts | Portfolio",
  description:
    "Founder, Creative Director, and Brand Strategist with over 15 years of experience leading creative teams and building compelling brand identities across diverse industries.",
  location: "San Clemente, CA",
  locationShort: "San Clemente, CA",
  email: "stevenstewart90@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/stevenstewartwatts/",
  resumeUrl:
    "https://drive.google.com/file/d/1wIqAsnoWu_yGf_r_Mn7QzB_54PUtBZXf/view?usp=drive_link",
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
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  contactCta: {
    label: "CONTACT NOW",
    href: "/contact",
  },
  availabilityLabel: "AVAILABLE FOR FREELANCE",
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
        },
        {
          id: "design",
          heading: "Design",
          body:
            "I created visually striking email templates that seamlessly blend bold imagery with clear, persuasive calls to action. Every design element was thoughtfully chosen to guide the reader through a story-like experience, elevating the brand’s narrative.",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "By integrating data-driven insights and rigorous A/B testing, I fine-tuned each email to achieve consistently high open rates (over 50%) and robust clickthroughs (3–5%). The development process balanced creative sketches with technical precision to ensure flawless performance across devices and dark screens.",
        },
        {
          id: "outcome",
          heading: "Outcome",
          body:
            "Our campaigns and flows across our 3 companies consistently delivered impressive results—significantly boosting revenue and deepening customer engagement. We maintained a consistent open rate of over 50% and an average click-through rate of 10-20%, showcasing exceptional engagement levels and the effectiveness of our strategies.",
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
        },
        {
          id: "design",
          heading: "Design",
          body:
            "Using countless sketches, foam models, and 3D modeling, we refined the shape and functionality of each board to ensure an optimal riding experience for specific wave styles. The digital designs and foam printing allowed us to experiment with different shapes, curves, and materials to find the perfect balance between performance and aesthetics.",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "Partnering with a factory in Taiwan, we developed the Slyde Handboard from the ground up, creating six high-quality stainless steel molds for each shape to ensure precision and consistency in production. Every aspect of production, from the core materials to the final finish, was carefully engineered to create a handboard that would outperform anything else in the market.",
        },
        {
          id: "concept",
          heading: "Concept",
          body:
            "Slyde quickly gained traction, selling over 10,000 boards worldwide and significantly contributing to the growth of bodysurfing. The brand helped redefine and create what was essentially a new spot, making wave riding more accessible and fun for ocean lovers around the world.",
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
        },
        {
          id: "process",
          heading: "Design Process",
          body:
            "The design process was driven by the principles of minimal waste and maximum storytelling. Earthy textures, clean lines, and bold branding elements reflected Veldskoen’s connection to nature and craftsmanship. Customer experience remained front and center, ensuring every box conveyed the spirit of exploration and authenticity.",
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
            "☝️ The final shoe box and insert tell a story of quality, sustainability, and adventure—the essence of the Veldskoen brand. From the tactile materials to the thoughtful unboxing experience, this packaging reflects the journey every step of the way.",
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
        },
        {
          id: "design",
          heading: "Design",
          body:
            "The design process focused on translating clarity into visuals. Clean, geometric shapes with soft edges were selected to mirror Rizible’s balance between functionality and approachability. Bold typography and purposeful negative space helped eliminate visual clutter while reinforcing confidence.",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "From sketching initial concepts to refining every curve and corner, each element of the logo was meticulously crafted to reflect Rizible’s dynamic yet streamlined nature. Typography was carefully selected for its readability and strength, embodying purpose without complexity.",
        },
        {
          id: "outcome",
          heading: "Outcome",
          body:
            "The final logo and visual identity perfectly capture Rizible’s essence: bold, clear, and collaborative. Rounded edges convey friendliness, while the heavy geometric forms radiate strength and purpose. It's a mark that symbolizes getting things done with clarity, confidence, and a little fun along the way.",
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
        },
        {
          id: "design",
          heading: "Design",
          body:
            "Little Dude is minimalist yet expressive—his form invites interpretation, reflection, and interaction. Crafted with sustainability in mind, he’s designed to be both a personal totem and a storytelling piece, evolving with the user's experiences.",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "From early sketches to collecting and studying toys, the process was hands-on and iterative. Materials were carefully selected to balance durability with a tactile, comforting feel. User feedback shaped key elements, from the countdown mechanism to the vials that store physical memories of past adventures.",
        },
        {
          id: "concept",
          heading: "Concept",
          body:
            "More than just an object, Little Dude is a ritual. He marks the countdown to your next adventure, holds physical tokens of past experiences, and serves as a visual record of your journey. In a fast-paced world, he offers a pause—a moment to reflect, anticipate, and stay connected to the thrill of living.",
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
        },
        {
          id: "design",
          heading: "Design",
          body:
            "We created a refined, zebra-style design, combining elegance with African-inspired patterns. The design quickly became a fan favorite, highly requested by Curateur's customers for its unique and stylish appeal.",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "Collaborating closely with our South African mill, we ensured the blankets met the required quality and aesthetic standards. Despite production challenges, we successfully created a product that fit seamlessly into Curateur's monthly collection.",
        },
        {
          id: "outcome",
          heading: "Outcome",
          body:
            "The result was a major success—over 30,000 blankets sold, along with a generous donation of 10,000 blankets to the people of Lesotho, one of the world's poorest countries. The campaign not only boosted sales but also made a significant social impact.",
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
        },
        {
          id: "bold-minimalism",
          heading: "Bold Minimalism",
          body:
            "The design maintained the core brand colors and feel while allowing each shoe style to take center stage. By letting the product speak for itself, the lookbook achieved a clean yet compelling visual narrative.",
        },
        {
          id: "curated-visuals",
          heading: "Curated Visuals",
          body:
            "To bring the vision to life, I sourced and organized media while coordinating a targeted photoshoot to fill any content gaps. This strategic approach ensured the lookbook was cohesive and visually compelling.",
        },
        {
          id: "engaging-storytelling",
          heading: "Engaging Storytelling",
          body:
            "The final product was a visually rich, magazine-style lookbook that beautifully told the Veldskoen story. It showcased the shoes through stunning photography and provided a clear, engaging vision of how they can be styled with various outfits.",
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
    label: "Product dev",
    name: "Slyde handboards",
    category: "Product dev",
    year: "2018",
    selectedLabel: "The grom",
    selectedName: "Product Dev",
    href: "/work/the-grom",
    featured: true,
    caseStudy: {
      title: "The grom",
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
        },
        {
          id: "design",
          heading: "Design",
          body:
            "The design process focused on creating a playful and approachable shape with vibrant, exciting color variations that appeal to kids and parents alike. We crafted a fun name, “The Grom,” and designed eye-catching packaging to stand out on retail shelves. Every detail, from the shape to the colors, was chosen to inspire fun and adventure in the ocean.",
        },
        {
          id: "development",
          heading: "Development",
          body:
            "The development phase involved countless sketches, foam models, and a highly technical 3D model that was turned into a mold. By collaborating closely with our factory partners, we perfected the manufacturing process, enabling production of up to 200 boards per day. This efficient production capacity ensured we could meet growing demand without compromising on quality.",
        },
        {
          id: "concept",
          heading: "Concept",
          body:
            "The Grom Kids Handboard became our best-selling product, drawing the attention of major retailers like Dick’s Sporting Goods. Its success not only expanded our product line but also solidified our brand's presence in the youth market, proving that innovative design and strategic manufacturing can create a hit in the competitive surf industry.",
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
  headline: "sTEVE WATTS",
  tagline: "Vision. Brand. Impact.",
  locationLabel: "BASED IN SAN CLEMENTE CA",
  roles: ["Digital Designer", "STORY TELLER"],
  roleHref: "/#about",
  cta: {
    label: "Contact now",
    href: "/contact",
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
    label: "see more projects",
    href: "/projects",
  },
} as const;

// ---------------------------------------------------------------------------
// 4. Selected Work / Project Cards (full archive page)
// ---------------------------------------------------------------------------

export const selectedWork = {
  title: "Selected Works",
  periodLabel: "(2007 - 2024)",
  description:
    "A curated archive of brand, product, packaging, and digital work across founder-led ventures and client collaborations.",
  /** Grid order matches Framer selected works page. */
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
  titleLines: ["More", "About", "STEVE"],
  headline:
    "I'm a Creative Director and Brand Strategist. Passionate about minimalist design, storytelling, and crafting visuals that connect brands to people",
  body: [
    "I harness cutting-edge design tools and creative strategies to bring visionary concepts to life. With a passion for innovation and storytelling, I excel at finding unexpected solutions that captivate audiences. My dedication to design and branding is driven by the belief that powerful storytelling can transform brands and elevate the customer experience.",
  ],
  resumeCta: {
    label: "Download resume",
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
  titleLines: ["My", "EXPERTISE"],
  items: [
    {
      id: "creative-leadership",
      number: 1,
      title: "Creative Leadership",
      preview:
        "Craft intuitive navigation that makes features accessible. Choose layouts and graphics that fit your personality.",
      modalTitle: "Creative Leadership:",
      modalSubtitle: "Vision, Innovation, & Impact",
      modalBody:
        "I turn ideas into multi-million-dollar brands, leading high-performing teams to drive innovation, storytelling, and growth. As the force behind Slyde Handboards and Veldskoen USA, I've scaled startups, secured $500K from Mark Cuban & Ashton Kutcher, and built brands featured in Forbes and The New York Times. With expertise in branding, digital marketing, and e-commerce, I fuse creativity with data-driven strategy to deliver real results. Recognized for award-winning leadership, I don't just create—I inspire, execute, and grow.",
      modalImage: "/images/expertise/creative-leadership.avif",
      ctaLabel: "E-mail",
      ctaHref: "mailto:stevenstewart90@gmail.com",
    },
    {
      id: "digital-marketing",
      number: 2,
      title: "Digital Marketing",
      preview:
        "Digital marketing specialist with a flair for crafting high-performing Facebook ad campaigns—driving engagement, boosting brand visibility, and delivering measurable growth.",
      modalTitle: "Digital Marketing",
      modalSubtitle: "Data-Driven Revenue Growth",
      modalBody:
        "I specialize in high-impact digital marketing that transforms brands and drives revenue. Managing $30K+ monthly ad budgets, I've optimized Facebook, Google, and email campaigns to maximize ROI. My expertise in Shopify, UX/UI, and conversion optimization has fueled e-commerce success, scaling Veldskoen USA to $250K/month in a year. By blending strategic storytelling with performance marketing, I create campaigns that not only engage but convert—turning audiences into loyal customers and brands into industry leaders.",
      modalImage: "/images/expertise/digital-marketing.webp",
      ctaLabel: "E-mail",
      ctaHref: "mailto:stevenstewart90@gmail.com",
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
      ctaHref: "mailto:stevenstewart90@gmail.com",
    },
    {
      id: "ecomm-growth",
      number: 4,
      title: "ecomm growth",
      preview:
        "Proven ability to scale brands from inception to million-dollar success stories through strategic planning and execution.",
      modalTitle: "Ecomm Growth",
      modalSubtitle: "Conversion-Focused Digital Growth",
      modalBody:
        "I drive e-commerce success through data-backed strategies, UX optimization, and high-converting digital campaigns. By refining customer journeys and leveraging A/B testing, I've boosted conversions and expanded market reach. My expertise in Shopify, CRO, and multi-channel marketing turns online stores into revenue powerhouses.",
      modalImage: "/images/expertise/ecomm-growth.webp",
      ctaLabel: "E-mail",
      ctaHref: "mailto:stevenstewart90@gmail.com",
    },
    {
      id: "email-marketing",
      number: 5,
      title: "email marketing",
      preview:
        "Creating engaging email marketing strategies, and dynamic e-commerce solutions that fuel brand growth and customer engagement.",
      modalTitle: "Email Marketing",
      modalSubtitle: "Data-Driven Revenue Growth",
      modalBody:
        "I create high-performing, on-brand email campaigns that drive 40-50% of overall brand revenue. With 40-60% open rates and 5%+ click-through rates, I leverage robust segmentation and extensive A/B testing to optimize engagement, retention, and conversions—turning email into a powerhouse for sustained growth.",
      modalImage: "/images/expertise/email-marketing.avif",
      ctaLabel: "E-mail",
      ctaHref: "mailto:stevenstewart90@gmail.com",
    },
    {
      id: "seo",
      number: 6,
      title: "seo: it's a passion",
      preview:
        "I optimize content, keywords, and site performance to boost rankings, drive traffic, and increase conversions.",
      modalTitle: "SEO: Optimized for",
      modalSubtitle: "Data-Driven Revenue Growth",
      modalBody:
        "I drive organic traffic through strategic SEO, including keyword research, content optimization, and technical improvements. My data-driven approach boosts search rankings, increases visibility, and enhances user engagement for sustained brand growth.",
      modalImage: "/images/expertise/seo.avif",
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
      id: "slyde-handboards",
      company: "slyde Handboards",
      role: "founder + Creative director",
      period: "2010 - 2024",
      description:
        "At Slyde Handboards, I built a million-dollar brand from the ground up, securing $500K in funding from Mark Cuban and Ashton Kutcher. I led branding, product development, and multi-channel marketing, using Facebook ads, email, and storytelling to drive growth. Through strategic partnerships and UX/UI optimization, I boosted conversions, expanded market reach, and earned features in Forbes and The New York Times.",
    },
    {
      id: "veldskoen",
      company: "Veldskoen",
      role: "fOUNDER + cREATIVE DIRECTOR",
      period: "2018 – 2024",
      description:
        "At Veldskoen USA, I transformed a startup into a $250K/month brand within a year through strategic storytelling, digital marketing, and eCommerce optimization. Managing a $30K/month ad budget, I leveraged Facebook and Google Ads, influencer partnerships, and data-driven campaigns to maximize ROI. I also enhanced the brand's identity, customer experience, and sustainability efforts, positioning Veldskoen as a globally recognized lifestyle brand.",
    },
    {
      id: "happybond",
      company: "Happybond",
      role: "paid media consultancy",
      period: "2023 – 2024",
      description:
        "I led the explosive growth of HappyBond, skyrocketing monthly revenue from $5K to $50K in just a few months. Through a powerful blend of paid media, organic marketing, and high-converting email campaigns.",
    },
    {
      id: "ilan-dei",
      company: "Ilan dei",
      role: "junior designer",
      period: "2008 – 2010",
      description:
        "I started my career as a Junior Designer at Illan Dei, honing my skills in product design, branding, and creative storytelling.",
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
  titleLines: ["Favorite", "STack"],
  items: [
    {
      id: "adobe-suite",
      name: "adobe SUITE",
      category: "Creative Design and Visual Storytelling",
      description:
        "I leverage Adobe Creative Suite (Photoshop, Illustrator, and Premiere Pro) extensively in my work, particularly for digital design, video editing, and creating compelling visual content. Whether it's using Photoshop for graphics, Illustrator for vector designs, or Premiere Pro for video projects",
    },
    {
      id: "klaviyo",
      name: "kLAVIYO",
      category: "Customer data platform / SMS marketing / Mobile push",
      description:
        "With 15 years of experience in email marketing, I've honed my skills in creating data-driven campaigns that engage, convert, and retain customers. From developing strategies to crafting compelling content and optimizing deliverability, I've worked across various industries to design emails that drive results.",
    },
    {
      id: "capcut",
      name: "CAPCUT",
      category: "VIDEO EDITING",
      description:
        "With extensive experience using CapCut, I specialize in crafting high-quality paid media and organic videos that engage audiences and drive results. My expertise includes advanced editing techniques, seamless transitions, and creative storytelling to elevate brand content.",
    },
    {
      id: "figma",
      name: "Figma",
      category: "collaborative Design Tool",
      description:
        "I have extensive experience using Figma to design user paths and optimize user experiences through intuitive, collaborative workflows. Leveraging Figma Jam, I foster creative brainstorming and seamless team collaboration to bring innovative design solutions to life.",
    },
    {
      id: "shopify",
      name: "shopify",
      category: "Web design and build",
      description:
        "With over 15 years of experience in Shopify, I specialize in creating minimalist, elegant designs that prioritize refined typography and intuitive user experiences. Passionate about conversion rate optimization, I leverage A/B testing and strategic landing page development to drive engagement and maximize results.",
    },
    {
      id: "clickup",
      name: "Click up",
      category: "Project managment",
      description:
        "With extensive project management experience using primarily ClickUp, I excel at keeping teams aligned, on schedule, and focused on deliverables. My approach ensures efficient task management, streamlined workflows, and successful project execution from start to finish.",
    },
    {
      id: "microsoft-office",
      name: "microsoft office suite",
      category: "15+ Years of Expertise",
      description:
        "With 15 years of experience in both Microsoft Office and Google Suite environments, I specialize in using Excel and Google Sheets for advanced data analysis, reporting, and automation, as well as crafting professional documents in Word and Google Docs. My expertise ensures efficient workflow management, seamless collaboration, and high-quality deliverables.",
    },
    {
      id: "airtable",
      name: "Airtable",
      category: "Streamlining paid Media Campaigns",
      description:
        "Experienced in using Airtable for planning and managing Facebook campaigns and social media projects. I create dynamic workflows, track content schedules, and streamline collaboration to ensure timely and impactful campaign execution.",
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
      title: "Investor relations",
      subtitle: "mark cuban + Ashton Kutcher",
      year: "2017",
      description:
        "Successfully pitched and obtained funding from investors like Mark Cuban and Ashton Kutcher, driving the growth and market presence of Slyde Handboards and Veldskoen USA and Named Mark Cubans Top 5 favorite Investments by Inc Magazine.",
    },
    {
      id: "press-features",
      title: "fEATURED IN NEW YORK TIMES",
      subtitle: "ARNO RED Themed PORTFOLIO",
      year: "2017",
      description:
        "Featured in prominent publications such as the New York Times, Forbes, and Business Journal, along with a memorable appearance on Shark Tank, gaining nationwide recognition and bolstering brand visibility.",
      href: "https://www.nytimes.com/2016/04/28/business/smallbusiness/selling-surfers-on-a-new-way-to-ride-the-waves.html",
      linkLabel: "full article",
    },
    {
      id: "orange-county-award",
      title: "Award-Winning Leadership",
      subtitle: "oRANGE COUNTY bUSINESS jOURNAL",
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
      label: "Data-Driven Digital My Marketing Strategies",
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
  headlineLines: ["Let'S WORK", "TOGETHER"],
  subheadline: "contact",
  description:
    "Based in San Clemente, I am a creative director, brand strategist, and digital artist with a passion for storytelling, innovative design, and seamless user experiences.",
  descriptionSecondary:
    "With a strong foundation in branding, e-commerce, and digital marketing, my work merges minimalist aesthetics, strategic typography, and intuitive design to craft compelling visual identities that drive engagement and business growth.",
  cta: {
    label: "contact",
    href: "/contact",
  },
  social: [
    {
      label: "linkdin",
      href: siteMeta.linkedInUrl,
      handle: "steve watts",
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
    "My creative spirit comes alive in the digital realm. With nimble fingers flying across the keyboard.",
  formIntro: "Fill THIS form out",
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
  submitLabel: "SEND EMAIL",
  socialHeading: "SOCIAL",
  social: {
    label: "Linkdin",
    href: siteMeta.linkedInUrl,
  },
  location: {
    label: "CURRENT LOCATION",
    value: "san Clemente, California (CA), 92672, United States",
  },
  phone: {
    label: "Phone",
    value: "USA, +1 310 433 0363",
  },
  email: {
    label: "EMAIL",
    value: siteMeta.email,
    href: `mailto:${siteMeta.email}`,
  },
  backToTopLabel: "Go Back To Top",
} as const;
