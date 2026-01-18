"use client";

import Image from "next/image";
import { ContentReveal } from "@/components/ContentReveal";

export interface LogoItem {
  src: string;
  alt: string;
}

export interface LogoListProps {
  title?: string;
  subtitle?: string;
  logos: LogoItem[];
  className?: string;
}

export function LogoList({
  title = "People we’ve worked with",
  subtitle = "A few teams and brands we’ve partnered with across strategy, software, storytelling, engagement, and experiences.",
  logos,
  className = "",
}: LogoListProps) {
  return (
    <section
      className={`relative py-16 md:py-24 bg-black overflow-x-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ContentReveal direction="up" duration={1.1}>
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4">
              {title}
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </ContentReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-center">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center w-full"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={120}
                className="w-full h-auto object-contain rounded-xl border border-[#3f395b]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

