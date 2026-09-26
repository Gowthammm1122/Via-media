import Image from "next/image";
import React from "react";

export interface WorkHeroMeta {
  client: string;
  category: string;
  engagement: string;
  execution: string;
}

export interface WorkHeroProps {
  tagline?: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  meta: WorkHeroMeta;
  heroImage: string;
  heroImageAlt?: string;
}

export default function WorkHero({
  tagline,
  titlePrefix,
  titleHighlight,
  description,
  meta,
  heroImage,
  heroImageAlt = "Project Hero Showcase",
}: WorkHeroProps) {
  return (
    <section className="w-full max-w-[1720px] mx-auto pt-[48px] sm:pt-[64px] lg:pt-[96px] pb-[64px] lg:pb-[96px]">
      
      {/* Top Header Section */}
      <div className="flex flex-col gap-[110px] items-start w-full">
        
        {/* Main Text Content: max-w-[1140px] */}
        <div className="w-full max-w-[1140px] flex flex-col gap-[48px] items-start">
          
          {/* Tagline + Main Title: gap-[5px] */}
          <div className="w-full flex flex-col gap-[5px] items-start">
            {tagline && (
              <p className="text-zinc-800 opacity-60 text-[16px] leading-[28px] font-normal">
                {tagline}
              </p>
            )}

            {/* Title: 72px / 90px leading */}
            <h1 className="max-w-[1000px] text-zinc-900 text-[36px] sm:text-[54px] lg:text-[72px] font-normal leading-[44px] sm:leading-[64px] lg:leading-[90px] tracking-normal">
              <span>{titlePrefix} </span>
              <span className="text-[#2ABCFF]">{titleHighlight}</span>
            </h1>
          </div>

          {/* Description Paragraph: max-w-[1094px], 30px font, 36px leading */}
          <p className="w-full max-w-[1094px] text-zinc-900 text-[18px] sm:text-[24px] lg:text-[30px] font-normal leading-[28px] sm:leading-[34px] lg:leading-[36px]">
            {description}
          </p>

        </div>

        {/* Metadata Info Bar: 128px height, bg-[#F5F4F0] (stone-100), 3px white dividers */}
        <div className="w-full bg-[#F5F4F0] border border-[#E5E5E5] relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 divide-y sm:divide-y-0 lg:divide-y-0 lg:divide-x-[3px] divide-white items-stretch">
            
            {/* Column 1: Client (~325px / lg:col-span-3) */}
            <div className="lg:col-span-3 min-h-[128px] py-[26px] px-[26px] flex flex-col justify-center gap-[6px]">
              <span className="text-zinc-500 text-[16px] leading-[32px] font-normal">
                Client
              </span>
              <span className="text-zinc-900 text-[20px] leading-[28px] font-medium">
                {meta.client}
              </span>
            </div>

            {/* Column 2: Category (lg:col-span-3) */}
            <div className="lg:col-span-3 min-h-[128px] py-[26px] px-[26px] flex flex-col justify-center gap-[6px]">
              <span className="text-zinc-500 text-[16px] leading-[32px] font-normal">
                Category
              </span>
              <span className="text-zinc-900 text-[20px] leading-[28px] font-medium">
                {meta.category}
              </span>
            </div>

            {/* Column 3: Engagement (lg:col-span-4) */}
            <div className="lg:col-span-4 min-h-[128px] py-[26px] px-[26px] flex flex-col justify-center gap-[6px]">
              <span className="text-zinc-500 text-[16px] leading-[32px] font-normal">
                Engagement
              </span>
              <span className="text-zinc-900 text-[20px] leading-[28px] font-medium">
                {meta.engagement}
              </span>
            </div>

            {/* Column 4: Execution (lg:col-span-2) */}
            <div className="lg:col-span-2 min-h-[128px] py-[26px] px-[26px] flex flex-col justify-center gap-[6px]">
              <span className="text-zinc-500 text-[16px] leading-[32px] font-normal">
                Execution
              </span>
              <span className="text-zinc-900 text-[20px] leading-[28px] font-medium">
                {meta.execution}
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Hero Showcase Image: 1720px width, 918px height (aspect-[1720/918]) */}
      <div className="mt-[48px] lg:mt-[96px] w-full max-w-[1720px] h-[340px] sm:h-[540px] lg:h-[918px] relative overflow-hidden bg-zinc-100">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          priority
          sizes="(max-width: 1720px) 100vw, 1720px"
          className="object-cover object-center"
        />
      </div>

    </section>
  );
}
