import type { Metadata } from "next";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import ClientsSection from "@/components/ClientsSection";

export const metadata: Metadata = {
  title: "Work | VIAMEDIA",
  description: "Our projects designed for impact — VIAMEDIA portfolio",
};

// Projects list
const projects: Project[] = [
  {
    id: "1",
    title: "Fiore",
    slug: "fiore",
    categories: ["Branding", "Communication"],
    image: "/projects/fiore/fiore 1.webp",
  },
  {
    id: "2",
    title: "Sagehill",
    slug: "sagehill",
    categories: ["Industrial B2B", "Energy Technology"],
    image:
      "/projects/sagehill/sage1.webp",
  },
  {
    id: "3",
    title: "Aspirational Homes",
    slug: "aspirational-homes",
    categories: ["Industrial B2B", "Energy Technology"],
    image: "/projects/aspiration/a1.webp",
  },
  {
    id: "4",
    title: "Last Forest",
    slug: "lastforest",
    categories: ["Industrial B2B", "Energy Technology"],
    image: "/projects/lastforest/last1.webp",
  },
  {
    id: "5",
    title: "GD Car Museum",
    slug: "gd-car-museum",
    categories: ["Industrial B2B", "Energy Technology"],
    image: "/projects/gdcar/gd1.webp",
  },
  {
    id: "6",
    title: "KMCH Healthcare - Intervention Radiology",
    slug: "kmch-healthcare",
    categories: ["Coffee table Book", "Event design"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "5",
    title: "Aura Living",
    slug: "aura-living",
    categories: ["Spatial Design", "Identity"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "6",
    title: "Nexa Mobility",
    slug: "nexa-mobility",
    categories: ["UI/UX Design", "Digital Product"],
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "7",
    title: "Atelier Noir",
    slug: "atelier-noir",
    categories: ["Packaging", "Brand Strategy"],
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "8",
    title: "Kroma Architecture",
    slug: "kroma-architecture",
    categories: ["Editorial", "Web Experience"],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "9",
    title: "Solace Botanicals",
    slug: "solace-botanicals",
    categories: ["Creative Direction", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "10",
    title: "Vektor Labs",
    slug: "vektor-labs",
    categories: ["3D Motion", "Visual Identity"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function WorkPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 lg:pt-36 pb-14 sm:pb-20">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[104px] font-normal tracking-tight leading-[1.08] max-w-5xl">
          <div>
            <span className="text-sky-400 font-medium">Our</span>{" "}
            <span className="text-black">projects</span>
          </div>
          <div>
            <span className="text-black">designed for </span>
            <span className="text-sky-400 font-medium">impact.</span>
          </div>
        </h1>
      </section>

      {/* Projects Grid Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-12 lg:gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* "Trusted by the visionaries" Clients Section (with 236px desktop gap) */}
      <ClientsSection />
    </div>
  );
}
