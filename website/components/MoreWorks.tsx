import React from "react";
import Link from "next/link";
import { projectsData, ProjectCaseStudy } from "@/data/workProjects";

export interface MoreWorkItem {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface MoreWorksProps {
  title?: string;
  viewAllText?: string;
  viewAllHref?: string;
  currentSlug?: string;
  items?: MoreWorkItem[];
}

const defaultMoreWorks: MoreWorkItem[] = [
  {
    slug: "fiore",
    title: "Fiore",
    subtitle: "Lorem ipsum dolosit",
    image: "/projects/fiore/fiore 3.webp",
  },
  {
    slug: "kmch-healthcare",
    title: "KMCH Hospital",
    subtitle: "Lorem ipsum dolosit",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85",
  },
  {
    slug: "breakthru",
    title: "Breakthru",
    subtitle: "Lorem ipsum dolosit",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85",
  },
];

export default function MoreWorks({
  title = "More works",
  viewAllText = "View all",
  viewAllHref = "/work",
  currentSlug,
  items,
}: MoreWorksProps) {
  // If custom items are provided, use them. Otherwise use the default showcase list
  const displayItems = items || defaultMoreWorks;

  return (
    <section className="w-full max-w-[1720px] mx-auto pb-[96px] sm:pb-[140px]">
      {/* Top Header: Title & View All */}
      <div className="w-full flex items-center justify-between pb-[16px]">
        <h2 className="text-[#1A1A1A] text-[32px] sm:text-[42px] lg:text-[48px] font-normal leading-[40px] sm:leading-[52px] lg:leading-[59px]">
          {title}
        </h2>
        <Link
          href={viewAllHref}
          className="group inline-flex items-center gap-[8px] text-[#000000] hover:text-[#2ABCFF] text-[18px] sm:text-[22px] lg:text-[24px] font-normal leading-[20px] transition-colors"
        >
          <span>{viewAllText}</span>
          <svg
            className="w-[14px] h-[14px] stroke-[2.2] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 12.5L12.5 1.5M12.5 1.5H3.5M12.5 1.5V10.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* 3-Column Grid: 560px width cards with 20px gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full mt-[32px] sm:mt-[48px]">
        {displayItems.map((item, idx) => (
          <Link
            key={idx}
            href={`/work/${item.slug}`}
            className="group w-full flex flex-col justify-start items-start focus:outline-none"
          >
            {/* Card Image Container (560x373 in Figma) */}
            <div className="w-full h-[260px] sm:h-[320px] lg:h-[373px] bg-neutral-100 overflow-hidden rounded-[2px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
              />
            </div>

            {/* Text details below image */}
            <div className="w-full flex flex-col justify-start items-start mt-[16px]">
              <h3 className="text-[#1A1A1A] group-hover:text-[#2ABCFF] text-[20px] sm:text-[24px] font-normal leading-[28px] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#606060] text-[16px] sm:text-[18px] font-normal leading-[28px] mt-[2px]">
                {item.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
