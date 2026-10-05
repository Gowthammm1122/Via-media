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

      {/* Case Study Specific Section: Problem & Pillars (Responsive on Mobile, Tablet, Laptop, Desktop) */}
      {project.problemSection && (
        <section className="w-full max-w-[1720px] mx-auto pt-[40px] sm:pt-[60px] lg:pt-[80px] pb-[60px] sm:pb-[90px] lg:pb-[120px]">
          
          {/* Section Heading & Subheading: max-w-[1285px] */}
          <div className="w-full max-w-[1285px] flex flex-col items-start">
            <h2 className="text-neutral-900 text-[26px] sm:text-[34px] md:text-[38px] lg:text-[48px] font-normal leading-[32px] sm:leading-[40px] md:leading-[44px] lg:leading-[48px]">
              {project.problemSection.heading}
            </h2>
            <p className="w-full max-w-[850px] text-zinc-900 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] mt-[16px] sm:mt-[20px]">
              {project.problemSection.subheading}
            </p>
          </div>

          {/* 3 Pillars Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop (max-w 492px, 20px gap) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full mt-[36px] sm:mt-[48px] lg:mt-[60px]">
            {project.problemSection.cards.map((card, idx) => (
              <div
                key={idx}
                className="w-full min-h-[240px] sm:min-h-[288px] p-[24px] sm:px-[28px] sm:py-[32px] lg:px-[32px] lg:pt-[40px] lg:pb-[36px] bg-white border border-zinc-300 flex flex-col justify-start"
              >
                {/* Tag */}
                <span className="text-zinc-500 text-[14px] sm:text-[16px] leading-[24px] sm:leading-[32px] font-normal tracking-wide uppercase">
                  {card.tag}
                </span>

                {/* Card Title */}
                <h3 className="text-zinc-900 text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] font-normal leading-[28px] sm:leading-[34px] md:leading-[38px] lg:leading-[48px] mt-[4px]">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-neutral-600 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] mt-[10px] sm:mt-[12px]">
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

      {/* Aspirational Homes Custom Showcase Section (pt-[117px] on desktop with responsive mobile/tablet scaling) */}
      {project.aspirationSection && (
        <section className="w-full max-w-[1720px] mx-auto pt-[40px] sm:pt-[70px] lg:pt-[117px] pb-[60px] sm:pb-[90px] lg:pb-[140px] flex flex-col justify-start items-start gap-8 sm:gap-11 lg:gap-14">
          {/* Header Title + Description: max-w-[1140px] */}
          <div className="w-full max-w-[1140px] flex flex-col justify-start items-start gap-4 sm:gap-6 lg:gap-7">
            <h2 className="self-stretch text-neutral-900 text-[24px] sm:text-[30px] md:text-[34px] lg:text-4xl font-normal leading-[32px] sm:leading-[38px] md:leading-[42px] lg:leading-[48px]">
              {project.aspirationSection.title}
            </h2>
            <p className="self-stretch text-zinc-900 text-[15px] sm:text-[17px] md:text-[18px] lg:text-xl font-normal leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-8">
              {project.aspirationSection.description}
            </p>
          </div>

          {/* Images Stack */}
          <div className="w-full self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-col justify-start items-start gap-5">
              <div className="self-stretch flex flex-col justify-start items-start gap-5">
                {/* 2 Full-width Banners */}
                <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                  <div className="w-full overflow-hidden bg-neutral-100">
                    <img
                      src={project.aspirationSection.images.banner1}
                      alt={`${project.title} showcase banner 1`}
                      className="w-full h-auto object-cover object-center"
                    />
                  </div>
                  <div className="w-full overflow-hidden bg-neutral-100">
                    <img
                      src={project.aspirationSection.images.banner2}
                      alt={`${project.title} showcase banner 2`}
                      className="w-full h-auto object-cover object-center"
                    />
                  </div>
                </div>

                {/* 2 Rows of 2 side-by-side Images (850x574) */}
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                      <img
                        src={project.aspirationSection.images.row1Left}
                        alt={`${project.title} showcase item 1`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                      <img
                        src={project.aspirationSection.images.row1Right}
                        alt={`${project.title} showcase item 2`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                      <img
                        src={project.aspirationSection.images.row2Left}
                        alt={`${project.title} showcase item 3`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                      <img
                        src={project.aspirationSection.images.row2Right}
                        alt={`${project.title} showcase item 4`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Banner 3 */}
              <div className="w-full overflow-hidden bg-neutral-100">
                <img
                  src={project.aspirationSection.images.banner3}
                  alt={`${project.title} showcase banner 3`}
                  className="w-full h-auto object-cover object-center"
                />
              </div>
            </div>

            {/* Row 3: 2 side-by-side Images (850x574) */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                <img
                  src={project.aspirationSection.images.row3Left}
                  alt={`${project.title} showcase item 5`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-full aspect-[850/574] overflow-hidden bg-neutral-100">
                <img
                  src={project.aspirationSection.images.row3Right}
                  alt={`${project.title} showcase item 6`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GD Car Museum Custom Showcase Section */}
      {project.carMuseumSection && (
        <section className="w-full max-w-[1720px] mx-auto pt-[40px] sm:pt-[70px] lg:pt-[100px] pb-[60px] sm:pb-[90px] lg:pb-[140px] flex flex-col justify-start items-start gap-8 sm:gap-11">
          <div className="w-full flex flex-col justify-start items-start gap-5">
            {/* Top Full-width Banner */}
            <div className="w-full overflow-hidden bg-neutral-100">
              <img
                src={project.carMuseumSection.images.topBanner}
                alt={`${project.title} showcase banner 1`}
                className="w-full h-auto object-cover object-center"
              />
            </div>

            {/* Middle Grid: 2 rows of 2 images (850x502) */}
            <div className="w-full flex flex-col justify-start items-start gap-5">
              {/* Row 1 */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="w-full aspect-[850/502] overflow-hidden bg-neutral-100">
                  <img
                    src={project.carMuseumSection.images.row1Left}
                    alt={`${project.title} showcase item 1`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full aspect-[850/502] overflow-hidden bg-neutral-100">
                  <img
                    src={project.carMuseumSection.images.row1Right}
                    alt={`${project.title} showcase item 2`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="w-full aspect-[850/502] overflow-hidden bg-neutral-100">
                  <img
                    src={project.carMuseumSection.images.row2Left}
                    alt={`${project.title} showcase item 3`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full aspect-[850/502] overflow-hidden bg-neutral-100">
                  <img
                    src={project.carMuseumSection.images.row2Right}
                    alt={`${project.title} showcase item 4`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Full-width Banner */}
          <div className="w-full overflow-hidden bg-neutral-100">
            <img
              src={project.carMuseumSection.images.bottomBanner}
              alt={`${project.title} showcase bottom banner`}
              className="w-full h-auto object-cover object-center"
            />
          </div>
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
