"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HeroCarousel, { type HeroSlide } from "@/components/HeroCarousel";
import { ServiceFeatureSection } from "@/components/ServiceFeatureSection";
import { ContentReveal } from "@/components/ContentReveal";

const heroSlides: HeroSlide[] = [
  {
    title: "ScaleLXP",
    subtitle: "Supply Chain Applied Learning Environment",
    description:
      "ScaleLXP is an AI-powered learning platform designed to make supply chain education tangible, competitive, and memorable. Students run a simulated business, make weekly decisions, and experience real consequences under uncertainty—together.",
    backgroundImage:
      "/images/scalelxp/hero/Group_collaboration_scene_202601111653_jj9ed.jpg",
  },
  {
    title: "Learning Through Consequence",
    subtitle: "Simulation > memorization",
    description:
      "Instead of static case studies with clean answers, ScaleLXP is framed as a business simulation where tradeoffs are felt. Outcomes are explainable in plain language so instructors can teach from results, not slides.",
    backgroundImage:
      "/images/scalelxp/hero/Establishing_shot_of_202601111721_vvua0.jpg",
  },
  {
    title: "A Single System",
    subtitle: "Strategy • Software • Stories • Engagement • Experiences",
    description:
      "This project reflects how we approach complex problems at Next Wave Agentic—combining strategy, software, storytelling, engagement, and experience into a single system that people actually want to use.",
    backgroundImage:
      "/images/scalelxp/hero/Closeup_of_hands_202601111653_xn0ya.jpg",
  },
];

export default function ScaleLXPProjectPage() {
  return (
    <main id="top" className="min-h-screen bg-black overflow-x-hidden">
      <Header />

      <HeroCarousel slides={heroSlides} />

      <section className="relative py-16 md:py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1.1}>
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF]">
                ScaleLXP
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                ScaleLXP is an applied learning environment where students
                internalize supply chain concepts by operating a simulated
                business over time—making decisions, living with constraints,
                and learning from outcomes shaped by real-world uncertainty.
              </p>
            </div>
          </ContentReveal>
        </div>
      </section>

      <div id="strategy">
        <ServiceFeatureSection
          title="Strategy"
          subtitle="Understanding why traditional teaching was falling short"
          description="Before writing code, we met directly with instructors to understand where supply chain instruction struggled. The issue wasn’t content quality—it was abstraction. Students could recite forecasting, inventory risk, and constraints, but couldn’t feel how those ideas interact under pressure. Our goal became clear: design a system where students feel tradeoffs instead of memorizing them."
          ctaLabel="Next: Software"
          ctaHref="#software"
          imageSrc="/images/scalelxp/scalelxp_strategy.jpg"
          imageAlt="ScaleLXP strategy"
          imageSide="left"
        />
      </div>

      <div id="software">
        <ServiceFeatureSection
          title="Software"
          subtitle="Turning theory into a living system"
          description="We built ScaleLXP as a modular simulation engine. Students configure a business once, then respond to weekly scenarios created by the instructor. AI evaluates each student under shared conditions and personal constraints, producing outcomes grounded in deterministic accounting rules. A persistent ledger tracks inventory, costs, service levels, and profit over time—like a game engine for business education."
          ctaLabel="Next: Stories"
          ctaHref="#stories"
          imageSrc="/images/scalelxp/scalelxp_software.jpg"
          imageAlt="ScaleLXP software"
          imageSide="right"
        />
      </div>

      <div id="stories">
        <ServiceFeatureSection
          title="Stories"
          subtitle="Letting students create the narrative"
          description="We avoided pre-scripted outcomes. Two students can make the same choice and still see different results based on their configuration and prior performance. Each cycle ends with a narrative summary that explains what happened and why—turning numbers into meaning and helping students connect abstract metrics to concrete cause-and-effect. The story wasn’t something we told them; it was something they authored."
          ctaLabel="Next: Engagement"
          ctaHref="#engagement"
          imageSrc="/images/scalelxp/scalelxp_stories.jpg"
          imageAlt="ScaleLXP stories"
          imageSide="left"
        />
      </div>

      <div id="engagement">
        <ServiceFeatureSection
          title="Engagement"
          subtitle="Meeting students where they already are"
          description="Adoption didn’t come from shipping a product alone. We presented ScaleLXP on campus, walked students through it, and gave them time to explore hands-on. Once students logged in and made their first decisions, engagement followed naturally—the system rewarded curiosity, experimentation, and discussion because choices visibly changed outcomes."
          ctaLabel="Next: Experiences"
          ctaHref="#experiences"
          imageSrc="/images/scalelxp/scalelxp_engagement.jpg"
          imageAlt="ScaleLXP engagement"
          imageSide="right"
        />
      </div>

      <div id="experiences">
        <ServiceFeatureSection
          title="Experiences"
          subtitle="Competition, feedback, and real consequences"
          description="To complete the experience, we introduced friendly competition. Students could compare performance across profit, service level, efficiency, and risk management—creating motivation without making the class zero-sum. The point wasn’t winning; it was learning through consequence. By the end, students weren’t asking for the right answer—they were asking why their strategy worked or failed."
          ctaLabel="Back to top"
          ctaHref="#top"
          imageSrc="/images/scalelxp/scalelxp_experiences.jpg"
          imageAlt="ScaleLXP experiences"
          imageSide="left"
        />
      </div>

      <Footer />
    </main>
  );
}

