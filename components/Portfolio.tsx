"use client";

import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import {
  PortfolioCarousel,
  type PortfolioItem,
} from "@/components/PortfolioCarousel";

export interface PortfolioProps {
  title?: string;
  description?: string;
  items: PortfolioItem[];
  autoScrollSpeed?: number;
}

export function Portfolio({
  title = "Our Portfolio",
  description = "Explore the websites and apps we've built. Each project represents our commitment to innovation, design excellence, and cutting-edge technology.",
  items,
  autoScrollSpeed = 60,
}: PortfolioProps) {
  return (
    <section className="relative py-16 md:py-32 px-4 bg-black">
      <FuturisticBackground
        pattern="flowing"
        intensity="moderate"
        showOrbs={false}
        primaryColor="#fc05b9"
        secondaryColor="#4E79A7"
        tertiaryColor="#84596c"
        lineCount={10}
      />
      <div className="max-w-7xl mx-auto mb-12">
        <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
          <h1 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-6 text-center">
            {title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
            {description}
          </p>
        </ContentReveal>
      </div>
      <PortfolioCarousel items={items} autoScrollSpeed={autoScrollSpeed} />
    </section>
  );
}
