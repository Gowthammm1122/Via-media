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
};

