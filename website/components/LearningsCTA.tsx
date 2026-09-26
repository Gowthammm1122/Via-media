import React from "react";
import Link from "next/link";

export interface LearningsCTAProps {
  badge?: string;
  mainText?: string;
  highlightText?: string;
  bannerSubheading?: string;
  bannerHeading?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function LearningsCTA({
  badge = "WHAT WE LEARNED",
  mainText = "In complex B2B categories, the job of brand is not to make the technology look intelligent. It is to make the ",
  highlightText = "decision feel simpler.",
  bannerSubheading = "Frame the decision.",
  bannerHeading = "Then build what proves it.",
  ctaText = "Start a Beta",
  ctaHref = "/contact",
}: LearningsCTAProps) {
  return (
    <section className="w-full max-w-[1720px] mx-auto pb-[80px] sm:pb-[140px] flex flex-col items-start">
      {/* Top Blue Card: What we learned */}
      <div className="w-full bg-[#52C5FF] sm:min-h-[642px] px-[24px] sm:px-[48px] lg:px-[80px] py-[64px] sm:py-[96px] lg:py-[128px] flex flex-col justify-start items-start">
        <div className="w-full max-w-[1157px] flex flex-col justify-start items-start gap-[24px] sm:gap-[32px]">
          {/* Tag / Badge */}
          <span className="text-zinc-900 text-[14px] sm:text-[16px] font-normal uppercase leading-[24px] sm:leading-[32px] tracking-wide">
            {badge}
          </span>

          {/* Main Statement with highlight */}
          <h2 className="text-zinc-900 text-[32px] sm:text-[48px] lg:text-[72px] font-normal leading-[42px] sm:leading-[60px] lg:leading-[80px]">
            <span>{mainText}</span>
            <span className="text-white">{highlightText}</span>
          </h2>
        </div>
      </div>

      {/* Bottom Dark Blue Card: Frame the decision + CTA */}
      <div className="w-full bg-[#035A8C] sm:min-h-[288px] px-[24px] sm:px-[48px] lg:px-[80px] py-[48px] sm:py-[64px] lg:py-[80px] flex flex-col justify-center items-start">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-[32px] sm:gap-[40px]">
          {/* Left Text */}
          <div className="flex flex-col">
            <span className="text-[#52C5FF] text-[28px] sm:text-[38px] lg:text-[48px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[60px]">
              {bannerSubheading}
            </span>
            <span className="text-white text-[28px] sm:text-[38px] lg:text-[48px] font-normal leading-[36px] sm:leading-[48px] lg:leading-[60px]">
              {bannerHeading}
            </span>
          </div>

          {/* Right Action Button */}
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-[10px] h-[64px] px-[36px] bg-[#52C5FF] hover:bg-[#3ec0fd] text-zinc-900 text-[18px] sm:text-[20px] font-normal rounded-[100px] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm flex-shrink-0"
          >
            <span>{ctaText}</span>
            <svg
              className="w-[14px] h-[14px] stroke-[2.5]"
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
      </div>
    </section>
  );
}
