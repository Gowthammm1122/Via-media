export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  meta: {
    client: string;
    category: string;
    engagement: string;
    execution: string;
  };
  heroImage: string;
  problemSection?: {
    heading: string;
    subheading: string;
    cards: Array<{
      tag: string;
      title: string;
      description: string;
    }>;
  };
  gallerySection?: {
    heading: string;
    images: {
      topLarge: string;
      middleLeft: string;
      middleRight: string;
      bottomLarge: string;
    };
  };
  showcaseBlocks?: {
    section1?: {
      title: string;
      description: string;
      images: {
        banner1: string;
        banner2: string;
        row1Left: string;
        row1Right: string;
        banner3: string;
        banner4: string;
        row2Left: string;
        row2Right: string;
      };
    };
    section2?: {
      title: string;
      description: string;
      images: {
        splitLeft: string;
        splitRight: string;
        row1Left: string;
        row1Right: string;
        row2Left: string;
        row2Right: string;
        bottomBanner: string;
      };
    };
  };
  aspirationSection?: {
    title: string;
    description: string;
    images: {
      banner1: string;
      banner2: string;
      row1Left: string;
      row1Right: string;
      row2Left: string;
      row2Right: string;
      banner3: string;
      row3Left: string;
      row3Right: string;
    };
  };
  carMuseumSection?: {
    images: {
      topBanner: string;
      row1Left: string;
      row1Right: string;
      row2Left: string;
      row2Right: string;
      bottomBanner: string;
    };
  };
  learningsCTA?: {
    badge?: string;
    mainText?: string;
    highlightText?: string;
    bannerSubheading?: string;
    bannerHeading?: string;
    ctaText?: string;
    ctaHref?: string;
  };
}

export const projectsData: Record<string, ProjectCaseStudy> = {
  fiore: {
    slug: "fiore",
    title: "Fiore — Beautiful Living",
    tagline: "Industrial Retail · Living Space",
    titlePrefix: "Fiore embodies the philosophy of transforming spaces into",
    titleHighlight: "havens of beauty and intention.",
    description:
      'We were tasked with creating a distinct brand identity and communication strategy that would help Fiore articulate its vision of "Beautiful Living" through compelling narratives, elegant design, and thoughtful messaging.',
    meta: {
      client: "Fiore",
      category: "Branding + Communication",
      engagement: "Strategy Identity Sales Web",
      execution: "Viamedia",
    },
    heroImage: "/projects/fiore/fiore 1.webp",
    problemSection: {
      heading: "The problem was not intelligence. It was translation.",
      subheading:
        "Theiox combined energy management with predictive AI — a proposition with strong technical depth, but one that risked becoming abstract for business buyers.",
      cards: [
        {
          tag: "COMPLEXITY",
          title: "Too much to explain",
          description:
            "AI, energy intelligence, analytics and optimisation can quickly become a feature stack instead of a business case.",
        },
        {
          tag: "TRUST",
          title: "High proof threshold",
          description:
            "Enterprise energy decisions require clarity, confidence and a professional system across every touchpoint.",
        },
        {
          tag: "RELEVANCE",
          title: "Value had to land fast",
          description:
            "The story needed to move from technical capability to better decisions, lower friction and clearer operational value.",
        },
      ],
    },
    gallerySection: {
      heading: "Technical without becoming cold.",
      images: {
        topLarge: "/projects/fiore/fiore 2.webp",
        middleLeft: "/projects/fiore/fiore 3.webp",
        middleRight: "/projects/fiore/fiore 4.webp",
        bottomLarge: "/projects/fiore/fiore 6.webp",
      },
    },
  },
  sagehill: {
    slug: "sagehill",
    title: "Sagehill",
    tagline: "Industrial B2B  ·  Energy Technology",
    titlePrefix: "Simplifying intelligence for",
    titleHighlight: "smarter energy decisions.",
    description:
      "Theiox was an intelligent energy-management and predictive-AI platform entering a category where technical complexity could easily outrun buyer understanding. The assignment was not simply to make the brand look smarter. It was to make the intelligence easier to grasp, easier to trust, and easier to buy.",
    meta: {
      client: "Sankara",
      category: "Energy Management + Predictive AI",
      engagement: "Strategy . Brochure",
      execution: "Viamedia",
    },
    heroImage: "/projects/sagehill/sage1.webp",
    problemSection: {
      heading: "The problem was not intelligence. It was translation.",
      subheading:
        "Theiox combined energy management with predictive AI — a proposition with strong technical depth, but one that risked becoming abstract for business buyers.",
      cards: [
        {
          tag: "COMPLEXITY",
          title: "Too much to explain",
          description:
            "AI, energy intelligence, analytics and optimisation can quickly become a feature stack instead of a business case.",
        },
        {
          tag: "TRUST",
          title: "High proof threshold",
          description:
            "Enterprise energy decisions require clarity, confidence and a professional system across every touchpoint.",
        },
        {
          tag: "RELEVANCE",
          title: "Value had to land fast",
          description:
            "The story needed to move from technical capability to better decisions, lower friction and clearer operational value.",
        },
      ],
    },
    showcaseBlocks: {
      section1: {
        title: "Technical without becoming cold.",
        description:
          "The digital design carried the same logic forward: establish relevance first, then allow the user to move into technology, industries, use-cases and proof. The interface uses large areas of whitespace, restrained navigation and modular information blocks so the complexity is contained rather than exposed all at once.",
        images: {
          banner1: "/projects/sagehill/sage2.webp",
          banner2: "/projects/sagehill/sage3.webp",
          row1Left: "/projects/sagehill/sage4.webp",
          row1Right: "/projects/sagehill/sage5.webp",
          banner3: "/projects/sagehill/sage6.webp",
          banner4: "/projects/sagehill/sage7.webp",
          row2Left: "/projects/sagehill/sage8.webp",
          row2Right: "/projects/sagehill/sage9.webp",
        },
      },
      section2: {
        title: "Making Energy",
        description:
          "The digital design carried the same logic forward: establish relevance first, then allow the user to move into technology, industries, use-cases and proof. The interface uses large areas of whitespace, restrained navigation and modular information blocks so the complexity is contained rather than exposed all at once.",
        images: {
          splitLeft: "/projects/sagehill/sage10.webp",
          splitRight: "/projects/sagehill/sage11.webp",
          row1Left: "/projects/sagehill/sage12.webp",
          row1Right: "/projects/sagehill/sage13.webp",
          row2Left: "/projects/sagehill/sage14.webp",
          row2Right: "/projects/sagehill/sage15.webp",
          bottomBanner: "/projects/sagehill/sage16.webp",
        },
      },
    },
    learningsCTA: {
      badge: "KEY LEARNING",
      mainText: "Deep-tech value must be translated into commercial certainty.",
      highlightText: "Clear narratives outperform complex feature lists every time.",
      bannerSubheading: "READY TO ELEVATE YOUR TECH BRAND?",
      bannerHeading: "Let's build clarity together.",
      ctaText: "Start a conversation",
      ctaHref: "/contact",
    },
  },
  "kmch-healthcare": {
    slug: "kmch-healthcare",
    title: "KMCH Healthcare",
    tagline: "Healthcare · Editorial",
    titlePrefix: "Documenting breakthrough medical interventions through",
    titleHighlight: "human-centric visual narratives.",
    description:
      "A comprehensive editorial and event design project showcasing cutting-edge radiology procedures and physician stories.",
    meta: {
      client: "KMCH",
      category: "Coffee table Book + Event design",
      engagement: "Editorial Identity Print Production",
      execution: "Viamedia",
    },
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=85",
  },
  "aura-living": {
    slug: "aura-living",
    title: "Aura Living",
    tagline: "Spatial Design · Identity",
    titlePrefix: "Crafting architectural identities that merge nature with",
    titleHighlight: "sustainable luxury living.",
    description:
      "Developing an all-encompassing identity system and experiential touchpoints for high-end residential spaces.",
    meta: {
      client: "Aura",
      category: "Spatial Design + Identity",
      engagement: "Brand System Wayfinding Digital",
      execution: "Viamedia",
    },
    heroImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85",
  },
  breakthru: {
    slug: "breakthru",
    title: "The Breakthru Partnership",
    tagline: "Spatial Branding · Identity",
    titlePrefix: "Creating modern, bold environmental spaces that inspire",
    titleHighlight: "collaborative momentum.",
    description:
      "A comprehensive workplace brand identity and spatial signage system for The Breakthru Partnership.",
    meta: {
      client: "Breakthru",
      category: "Brand & Environmental Design",
      engagement: "Identity Environmental Wayfinding",
      execution: "Viamedia",
    },
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85",
  },
  "aspirational-homes": {
    slug: "aspirational-homes",
    title: "Aspirational Homes",
    tagline: "Industrial B2B  ·  Energy Technology",
    titlePrefix: "Simplifying intelligence for",
    titleHighlight: "smarter energy decisions.",
    description:
      "Theiox was an intelligent energy-management and predictive-AI platform entering a category where technical complexity could easily outrun buyer understanding. The assignment was not simply to make the brand look smarter. It was to make the intelligence easier to grasp, easier to trust, and easier to buy.",
    meta: {
      client: "Sankara",
      category: "Energy Management + Predictive AI",
      engagement: "Strategy . Brochure",
      execution: "Viamedia",
    },
    heroImage: "/projects/aspiration/a1.webp",
    problemSection: {
      heading: "The problem was not intelligence. It was translation.",
      subheading:
        "Theiox combined energy management with predictive AI — a proposition with strong technical depth, but one that risked becoming abstract for business buyers.",
      cards: [
        {
          tag: "COMPLEXITY",
          title: "Too much to explain",
          description:
            "AI, energy intelligence, analytics and optimisation can quickly become a feature stack instead of a business case.",
        },
        {
          tag: "TRUST",
          title: "High proof threshold",
          description:
            "Enterprise energy decisions require clarity, confidence and a professional system across every touchpoint.",
        },
        {
          tag: "RELEVANCE",
          title: "Value had to land fast",
          description:
            "The story needed to move from technical capability to better decisions, lower friction and clearer operational value.",
        },
      ],
    },
    aspirationSection: {
      title: "Technical without becoming cold.",
      description:
        "The digital design carried the same logic forward: establish relevance first, then allow the user to move into technology, industries, use-cases and proof. The interface uses large areas of whitespace, restrained navigation and modular information blocks so the complexity is contained rather than exposed all at once.",
      images: {
        banner1: "/projects/aspiration/a2.webp",
        banner2: "/projects/aspiration/a3.webp",
        row1Left: "/projects/aspiration/a4.webp",
        row1Right: "/projects/aspiration/a5.webp",
        row2Left: "/projects/aspiration/a6.webp",
        row2Right: "/projects/aspiration/a7.webp",
        banner3: "/projects/aspiration/a8.webp",
        row3Left: "/projects/aspiration/a9.webp",
        row3Right: "/projects/aspiration/a10.webp",
      },
    },
  },
  aspiration: {
    slug: "aspiration",
    title: "Aspirational Homes",
    tagline: "Industrial B2B  ·  Energy Technology",
    titlePrefix: "Simplifying intelligence for",
    titleHighlight: "smarter energy decisions.",
    description:
      "Theiox was an intelligent energy-management and predictive-AI platform entering a category where technical complexity could easily outrun buyer understanding. The assignment was not simply to make the brand look smarter. It was to make the intelligence easier to grasp, easier to trust, and easier to buy.",
    meta: {
      client: "Sankara",
      category: "Energy Management + Predictive AI",
      engagement: "Strategy . Brochure",
      execution: "Viamedia",
    },
    heroImage: "/projects/aspiration/a1.webp",
    problemSection: {
      heading: "The problem was not intelligence. It was translation.",
      subheading:
        "Theiox combined energy management with predictive AI — a proposition with strong technical depth, but one that risked becoming abstract for business buyers.",
      cards: [
        {
          tag: "COMPLEXITY",
          title: "Too much to explain",
          description:
            "AI, energy intelligence, analytics and optimisation can quickly become a feature stack instead of a business case.",
        },
        {
          tag: "TRUST",
          title: "High proof threshold",
          description:
            "Enterprise energy decisions require clarity, confidence and a professional system across every touchpoint.",
        },
        {
          tag: "RELEVANCE",
          title: "Value had to land fast",
          description:
            "The story needed to move from technical capability to better decisions, lower friction and clearer operational value.",
        },
      ],
    },
    aspirationSection: {
      title: "Technical without becoming cold.",
      description:
        "The digital design carried the same logic forward: establish relevance first, then allow the user to move into technology, industries, use-cases and proof. The interface uses large areas of whitespace, restrained navigation and modular information blocks so the complexity is contained rather than exposed all at once.",
      images: {
        banner1: "/projects/aspiration/a2.webp",
        banner2: "/projects/aspiration/a3.webp",
        row1Left: "/projects/aspiration/a4.webp",
        row1Right: "/projects/aspiration/a5.webp",
        row2Left: "/projects/aspiration/a6.webp",
        row2Right: "/projects/aspiration/a7.webp",
        banner3: "/projects/aspiration/a8.webp",
        row3Left: "/projects/aspiration/a9.webp",
        row3Right: "/projects/aspiration/a10.webp",
      },
    },
  },
  lastforest: {
    slug: "lastforest",
    title: "Last Forest",
    tagline: "Industrial B2B  ·  Energy Technology",
    titlePrefix: "Simplifying intelligence for",
    titleHighlight: "smarter energy decisions.",
    description:
      "Theiox was an intelligent energy-management and predictive-AI platform entering a category where technical complexity could easily outrun buyer understanding. The assignment was not simply to make the brand look smarter. It was to make the intelligence easier to grasp, easier to trust, and easier to buy.",
    meta: {
      client: "Sankara",
      category: "Energy Management + Predictive AI",
      engagement: "Strategy . Brochure",
      execution: "Viamedia",
    },
    heroImage: "/projects/lastforest/last1.webp",
    problemSection: {
      heading: "The problem was not intelligence. It was translation.",
      subheading:
        "Theiox combined energy management with predictive AI — a proposition with strong technical depth, but one that risked becoming abstract for business buyers.",
      cards: [
        {
          tag: "COMPLEXITY",
          title: "Too much to explain",
          description:
            "AI, energy intelligence, analytics and optimisation can quickly become a feature stack instead of a business case.",
        },
        {
          tag: "TRUST",
          title: "High proof threshold",
          description:
            "Enterprise energy decisions require clarity, confidence and a professional system across every touchpoint.",
        },
        {
          tag: "RELEVANCE",
          title: "Value had to land fast",
          description:
            "The story needed to move from technical capability to better decisions, lower friction and clearer operational value.",
        },
      ],
    },
    aspirationSection: {
      title: "Technical without becoming cold.",
      description:
        "The digital design carried the same logic forward: establish relevance first, then allow the user to move into technology, industries, use-cases and proof. The interface uses large areas of whitespace, restrained navigation and modular information blocks so the complexity is contained rather than exposed all at once.",
      images: {
        banner1: "/projects/lastforest/last2.webp",
        banner2: "/projects/lastforest/last3.webp",
        row1Left: "/projects/lastforest/last4.webp",
        row1Right: "/projects/lastforest/last5.webp",
        row2Left: "/projects/lastforest/last6.webp",
        row2Right: "/projects/lastforest/last7.webp",
        banner3: "/projects/lastforest/last8.webp",
        row3Left: "/projects/lastforest/last9.webp",
        row3Right: "/projects/lastforest/last10.webp",
      },
    },
  },
  "last-forest": {
    slug: "lastforest",
    title: "Last Forest",
    tagline: "Industrial B2B  ·  Energy Technology",
    titlePrefix: "Simplifying intelligence for",
    titleHighlight: "smarter energy decisions.",
    description:
      "Theiox was an intelligent energy-management and predictive-AI platform entering a category where technical complexity could easily outrun buyer understanding. The assignment was not simply to make the brand look smarter. It was to make the intelligence easier to grasp, easier to trust, and easier to buy.",
    meta: {
      client: "Sankara",
      category: "Energy Management + Predictive AI",
      engagement: "Strategy . Brochure",
      execution: "Viamedia",
    },
    heroImage: "/projects/lastforest/last1.webp",
    problemSection: {
      heading: "The problem was not intelligence. It was translation.",
      subheading:
        "Theiox combined energy management with predictive AI — a proposition with strong technical depth, but one that risked becoming abstract for business buyers.",
      cards: [
        {
          tag: "COMPLEXITY",
          title: "Too much to explain",
          description:
            "AI, energy intelligence, analytics and optimisation can quickly become a feature stack instead of a business case.",
        },
        {
          tag: "TRUST",
          title: "High proof threshold",
          description:
            "Enterprise energy decisions require clarity, confidence and a professional system across every touchpoint.",
        },
        {
          tag: "RELEVANCE",
          title: "Value had to land fast",
          description:
            "The story needed to move from technical capability to better decisions, lower friction and clearer operational value.",
        },
      ],
    },
    aspirationSection: {
      title: "Technical without becoming cold.",
      description:
        "The digital design carried the same logic forward: establish relevance first, then allow the user to move into technology, industries, use-cases and proof. The interface uses large areas of whitespace, restrained navigation and modular information blocks so the complexity is contained rather than exposed all at once.",
      images: {
        banner1: "/projects/lastforest/last2.webp",
        banner2: "/projects/lastforest/last3.webp",
        row1Left: "/projects/lastforest/last4.webp",
        row1Right: "/projects/lastforest/last5.webp",
        row2Left: "/projects/lastforest/last6.webp",
        row2Right: "/projects/lastforest/last7.webp",
        banner3: "/projects/lastforest/last8.webp",
        row3Left: "/projects/lastforest/last9.webp",
        row3Right: "/projects/lastforest/last10.webp",
      },
    },
  },
  "gd-car-museum": {
    slug: "gd-car-museum",
    title: "GD Car Museum",
    tagline: "Industrial B2B  ·  Energy Technology",
    titlePrefix: "Simplifying intelligence for",
    titleHighlight: "smarter energy decisions.",
    description:
      "Theiox was an intelligent energy-management and predictive-AI platform entering a category where technical complexity could easily outrun buyer understanding. The assignment was not simply to make the brand look smarter. It was to make the intelligence easier to grasp, easier to trust, and easier to buy.",
    meta: {
      client: "Sankara",
      category: "Energy Management + Predictive AI",
      engagement: "Strategy . Brochure",
      execution: "Viamedia",
    },
    heroImage: "/projects/gdcar/gd1.webp",
    problemSection: {
      heading: "The problem was not intelligence. It was translation.",
      subheading:
        "Theiox combined energy management with predictive AI — a proposition with strong technical depth, but one that risked becoming abstract for business buyers.",
      cards: [
        {
          tag: "COMPLEXITY",
          title: "Too much to explain",
          description:
            "AI, energy intelligence, analytics and optimisation can quickly become a feature stack instead of a business case.",
        },
        {
          tag: "TRUST",
          title: "High proof threshold",
          description:
            "Enterprise energy decisions require clarity, confidence and a professional system across every touchpoint.",
        },
        {
          tag: "RELEVANCE",
          title: "Value had to land fast",
          description:
            "The story needed to move from technical capability to better decisions, lower friction and clearer operational value.",
        },
      ],
    },
    carMuseumSection: {
      images: {
        topBanner: "/projects/gdcar/gd2.webp",
        row1Left: "/projects/gdcar/gd3.webp",
        row1Right: "/projects/gdcar/gd4.webp",
        row2Left: "/projects/gdcar/gd5.webp",
        row2Right: "/projects/gdcar/gd6.webp",
        bottomBanner: "/projects/gdcar/gd7.webp",
      },
    },
  },
  gdcar: {
    slug: "gd-car-museum",
    title: "GD Car Museum",
    tagline: "Industrial B2B  ·  Energy Technology",
    titlePrefix: "Simplifying intelligence for",
    titleHighlight: "smarter energy decisions.",
    description:
      "Theiox was an intelligent energy-management and predictive-AI platform entering a category where technical complexity could easily outrun buyer understanding. The assignment was not simply to make the brand look smarter. It was to make the intelligence easier to grasp, easier to trust, and easier to buy.",
    meta: {
      client: "Sankara",
      category: "Energy Management + Predictive AI",
      engagement: "Strategy . Brochure",
      execution: "Viamedia",
    },
    heroImage: "/projects/gdcar/gd1.webp",
    problemSection: {
      heading: "The problem was not intelligence. It was translation.",
      subheading:
        "Theiox combined energy management with predictive AI — a proposition with strong technical depth, but one that risked becoming abstract for business buyers.",
      cards: [
        {
          tag: "COMPLEXITY",
          title: "Too much to explain",
          description:
            "AI, energy intelligence, analytics and optimisation can quickly become a feature stack instead of a business case.",
        },
        {
          tag: "TRUST",
          title: "High proof threshold",
          description:
            "Enterprise energy decisions require clarity, confidence and a professional system across every touchpoint.",
        },
        {
          tag: "RELEVANCE",
          title: "Value had to land fast",
          description:
            "The story needed to move from technical capability to better decisions, lower friction and clearer operational value.",
        },
      ],
    },
    carMuseumSection: {
      images: {
        topBanner: "/projects/gdcar/gd2.webp",
        row1Left: "/projects/gdcar/gd3.webp",
        row1Right: "/projects/gdcar/gd4.webp",
        row2Left: "/projects/gdcar/gd5.webp",
        row2Right: "/projects/gdcar/gd6.webp",
        bottomBanner: "/projects/gdcar/gd7.webp",
      },
    },
  },
  "gd-car": {
    slug: "gd-car-museum",
    title: "GD Car Museum",
    tagline: "Industrial B2B  ·  Energy Technology",
    titlePrefix: "Simplifying intelligence for",
    titleHighlight: "smarter energy decisions.",
    description:
      "Theiox was an intelligent energy-management and predictive-AI platform entering a category where technical complexity could easily outrun buyer understanding. The assignment was not simply to make the brand look smarter. It was to make the intelligence easier to grasp, easier to trust, and easier to buy.",
    meta: {
      client: "Sankara",
      category: "Energy Management + Predictive AI",
      engagement: "Strategy . Brochure",
      execution: "Viamedia",
    },
    heroImage: "/projects/gdcar/gd1.webp",
    problemSection: {
      heading: "The problem was not intelligence. It was translation.",
      subheading:
        "Theiox combined energy management with predictive AI — a proposition with strong technical depth, but one that risked becoming abstract for business buyers.",
      cards: [
        {
          tag: "COMPLEXITY",
          title: "Too much to explain",
          description:
            "AI, energy intelligence, analytics and optimisation can quickly become a feature stack instead of a business case.",
        },
        {
          tag: "TRUST",
          title: "High proof threshold",
          description:
            "Enterprise energy decisions require clarity, confidence and a professional system across every touchpoint.",
        },
        {
          tag: "RELEVANCE",
          title: "Value had to land fast",
          description:
            "The story needed to move from technical capability to better decisions, lower friction and clearer operational value.",
        },
      ],
    },
    carMuseumSection: {
      images: {
        topBanner: "/projects/gdcar/gd2.webp",
        row1Left: "/projects/gdcar/gd3.webp",
        row1Right: "/projects/gdcar/gd4.webp",
        row2Left: "/projects/gdcar/gd5.webp",
        row2Right: "/projects/gdcar/gd6.webp",
        bottomBanner: "/projects/gdcar/gd7.webp",
      },
    },
  },
};

