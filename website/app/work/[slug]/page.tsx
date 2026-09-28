import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import WorkHero from "@/components/WorkHero";
import LearningsCTA from "@/components/LearningsCTA";
import MoreWorks from "@/components/MoreWorks";
import { projectsData } from "@/data/workProjects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return {
      title: "Work | VIAMEDIA",
    };
  }

  return {
    title: `${project.title} | VIAMEDIA`,
    description: project.description,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full">
      {/* Reusable Common Hero Section with exact Figma pixel specs */}
      <WorkHero
        tagline={project.tagline}
        titlePrefix={project.titlePrefix}
        titleHighlight={project.titleHighlight}
        description={project.description}
        meta={project.meta}
        heroImage={project.heroImage}
        heroImageAlt={project.title}
      />

      {/* Case Study Specific Section: Problem & Pillars (Fiore Layout in exact px) */}
      {project.problemSection && (
        <section className="w-full max-w-[1720px] mx-auto pt-[40px] sm:pt-[80px] pb-[80px] sm:pb-[120px]">
          
          {/* Section Heading & Subheading: max-w-[1285px] */}
          <div className="w-full max-w-[1285px] flex flex-col items-start">
            <h2 className="text-neutral-900 text-[28px] sm:text-[38px] lg:text-[48px] font-normal leading-[34px] sm:leading-[44px] lg:leading-[48px]">
              {project.problemSection.heading}
            </h2>
            <p className="w-full max-w-[850px] text-zinc-900 text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[26px] sm:leading-[30px] lg:leading-[32px] mt-[20px]">
              {project.problemSection.subheading}
            </p>
          </div>

          {/* 3 Pillars Row: cards with exact 20px gap, 492px width, border-zinc-300 */}
          <div className="flex flex-col lg:flex-row items-stretch justify-start gap-[20px] mt-[48px] sm:mt-[60px]">
            {project.problemSection.cards.map((card, idx) => (
              <div
                key={idx}
                className="w-full lg:w-[492px] min-h-[288px] px-[32px] pt-[40px] pb-[36px] bg-white border border-zinc-300 flex flex-col justify-start flex-shrink-0"
              >
                {/* Tag: 16px font, 32px leading */}
                <span className="text-zinc-500 text-[16px] leading-[32px] font-normal tracking-wide uppercase">
                  {card.tag}
                </span>

                {/* Card Title: 30px font, 48px leading */}
                <h3 className="text-zinc-900 text-[24px] sm:text-[28px] lg:text-[30px] font-normal leading-[32px] sm:leading-[40px] lg:leading-[48px] mt-[4px]">
                  {card.title}
                </h3>

                {/* Card Description: 20px font, 32px leading */}
                <p className="text-neutral-600 text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[26px] sm:leading-[30px] lg:leading-[32px] mt-[12px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* Case Study Image Gallery Showcase Section */}
      {project.gallerySection && (
        <section className="w-full max-w-[1720px] mx-auto pb-[80px] sm:pb-[140px] flex flex-col items-start gap-[28px]">
          {/* Section Heading */}
          <h2 className="w-full text-neutral-900 text-[28px] sm:text-[36px] font-normal leading-[36px] sm:leading-[48px]">
            {project.gallerySection.heading}
          </h2>

          {/* Images Grid Stack */}
          <div className="w-full flex flex-col justify-start items-start gap-[24px]">
            {/* Top Full-width Hero Banner: 1720x850 */}
            <div className="w-full overflow-hidden bg-neutral-100">
              <img
                src={project.gallerySection.images.topLarge}
                alt={`${project.title} showcase top banner`}
                className="w-full h-[360px] sm:h-[560px] lg:h-[850px] object-cover object-center"
              />
            </div>

            {/* Middle Row: 2 side-by-side cards 850x694 with 20px gap */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              <div className="w-full overflow-hidden bg-neutral-100 rounded-[2px]">
                <img
                  src={project.gallerySection.images.middleLeft}
                  alt={`${project.title} detail left`}
                  className="w-full h-[320px] sm:h-[480px] lg:h-[694px] object-cover object-center"
                />
              </div>
              <div className="w-full overflow-hidden bg-neutral-100 rounded-[2px]">
                <img
                  src={project.gallerySection.images.middleRight}
                  alt={`${project.title} detail right`}
                  className="w-full h-[320px] sm:h-[480px] lg:h-[694px] object-cover object-center"
                />
              </div>
            </div>

            {/* Bottom Full-width Hero Banner: 1720x850 */}
            <div className="w-full overflow-hidden bg-neutral-100 rounded-[2px]">
              <img
                src={project.gallerySection.images.bottomLarge}
                alt={`${project.title} showcase bottom banner`}
                className="w-full h-[360px] sm:h-[560px] lg:h-[850px] object-cover object-center"
              />
            </div>
          </div>
        </section>
      )}

      {/* Multi-Section Rich Showcase Blocks (e.g. Sagehill Layout with 117px top gap and gap-28) */}
      {project.showcaseBlocks && (
        <section className="w-full max-w-[1720px] mx-auto pt-[117px] pb-[80px] sm:pb-[140px] flex flex-col items-start gap-[72px] sm:gap-[112px]">
          {/* Showcase Section 1 */}
          {project.showcaseBlocks.section1 && (
            <div className="w-full flex flex-col justify-start items-start gap-[36px] sm:gap-[56px]">
              {/* Heading + Description: max-w-[1140px] */}
              <div className="w-full max-w-[1140px] flex flex-col justify-start items-start gap-[20px] sm:gap-[28px]">
                <h2 className="w-full text-neutral-900 text-[28px] sm:text-[34px] lg:text-4xl font-normal leading-[36px] sm:leading-[42px] lg:leading-[48px]">
                  {project.showcaseBlocks.section1.title}
                </h2>
                <p className="w-full text-zinc-900 text-[16px] sm:text-[18px] lg:text-xl font-normal leading-[26px] sm:leading-[30px] lg:leading-8">
                  {project.showcaseBlocks.section1.description}
                </p>
              </div>

              {/* Images Grid Stack */}
              <div className="w-full flex flex-col justify-start items-start gap-[16px] sm:gap-[20px]">
                {/* 1. Full-width Banner 1 */}
                <div className="w-full overflow-hidden bg-neutral-100">
                  <img
                    src={project.showcaseBlocks.section1.images.banner1}
                    alt={`${project.title} showcase banner 1`}
                    className="w-full h-auto object-cover object-center"
                  />
                </div>

                {/* 2. Full-width Banner 2 */}
                <div className="w-full overflow-hidden bg-neutral-100">
                  <img
                    src={project.showcaseBlocks.section1.images.banner2}
                    alt={`${project.title} showcase banner 2`}
                    className="w-full h-auto object-cover object-center"
                  />
                </div>

                {/* 3. Row of 2 Images (850x574 each) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                    <img
                      src={project.showcaseBlocks.section1.images.row1Left}
                      alt={`${project.title} showcase item 1`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                    <img
                      src={project.showcaseBlocks.section1.images.row1Right}
                      alt={`${project.title} showcase item 2`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* 4. Full-width Banner 3 */}
                <div className="w-full overflow-hidden bg-neutral-100">
                  <img
                    src={project.showcaseBlocks.section1.images.banner3}
                    alt={`${project.title} showcase banner 3`}
                    className="w-full h-auto object-cover object-center"
                  />
                </div>

                {/* 5. Full-width Banner 4 */}
                <div className="w-full overflow-hidden bg-neutral-100">
                  <img
                    src={project.showcaseBlocks.section1.images.banner4}
                    alt={`${project.title} showcase banner 4`}
                    className="w-full h-auto object-cover object-center"
                  />
                </div>

                {/* 6. Row of 2 Images (850x574 each) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                    <img
                      src={project.showcaseBlocks.section1.images.row2Left}
                      alt={`${project.title} showcase item 3`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                    <img
                      src={project.showcaseBlocks.section1.images.row2Right}
                      alt={`${project.title} showcase item 4`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Showcase Section 2 */}
          {project.showcaseBlocks.section2 && (
            <div className="w-full flex flex-col justify-start items-start gap-[28px] sm:gap-[40px]">
              {/* Heading + Description: max-w-[1140px] */}
              <div className="w-full max-w-[1140px] flex flex-col justify-start items-start gap-[16px] sm:gap-[20px]">
                <h2 className="w-full text-neutral-900 text-[28px] sm:text-[34px] lg:text-4xl font-normal leading-[36px] sm:leading-[42px] lg:leading-[48px]">
                  {project.showcaseBlocks.section2.title}
                </h2>
                <p className="w-full text-zinc-900 text-[16px] sm:text-[18px] lg:text-xl font-normal leading-[26px] sm:leading-[30px] lg:leading-8">
                  {project.showcaseBlocks.section2.description}
                </p>
              </div>

              {/* Images Grid Stack */}
              <div className="w-full flex flex-col justify-start items-start gap-[16px] sm:gap-[20px]">
                {/* 1. Asymmetrical Row (661px + 1038px, height 574px) */}
                <div className="w-full flex flex-col lg:flex-row items-stretch gap-[20px]">
                  <div className="w-full lg:w-[661px] aspect-[661/574] overflow-hidden bg-neutral-100 flex-shrink-0">
                    <img
                      src={project.showcaseBlocks.section2.images.splitLeft}
                      alt={`${project.title} detail item 1`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="w-full lg:flex-1 aspect-[1038/574] overflow-hidden bg-neutral-100">
                    <img
                      src={project.showcaseBlocks.section2.images.splitRight}
                      alt={`${project.title} detail item 2`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* 2. Row of 2 Images (850x574 each) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                    <img
                      src={project.showcaseBlocks.section2.images.row1Left}
                      alt={`${project.title} detail item 3`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                    <img
                      src={project.showcaseBlocks.section2.images.row1Right}
                      alt={`${project.title} detail item 4`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* 3. Row of 2 Images (850x574 each) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                    <img
                      src={project.showcaseBlocks.section2.images.row2Left}
                      alt={`${project.title} detail item 5`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                    <img
                      src={project.showcaseBlocks.section2.images.row2Right}
                      alt={`${project.title} detail item 6`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* 4. Bottom Large Banner (1720x1162) */}
                <div className="w-full overflow-hidden bg-neutral-100">
                  <img
                    src={project.showcaseBlocks.section2.images.bottomBanner}
                    alt={`${project.title} detail large banner`}
                    className="w-full h-auto object-cover object-center"
                  />
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* Reusable Learnings & CTA Banner Section */}
      <LearningsCTA
        badge={project.learningsCTA?.badge}
        mainText={project.learningsCTA?.mainText}
        highlightText={project.learningsCTA?.highlightText}
        bannerSubheading={project.learningsCTA?.bannerSubheading}
        bannerHeading={project.learningsCTA?.bannerHeading}
        ctaText={project.learningsCTA?.ctaText}
        ctaHref={project.learningsCTA?.ctaHref}
      />

      {/* More Works Reusable Gallery Section */}
      <MoreWorks currentSlug={slug} />
    </div>
  );
}
