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
  title = "Trusted by teams with real stakes",
  subtitle = "A selection of brands, schools, destinations, and operators we have supported across strategy, digital products, storytelling, and launch campaigns.",
  logos,
  className = "",
}: LogoListProps) {
  return (
    <section
      className={`agency-shell relative overflow-x-hidden py-16 md:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ContentReveal direction="up" duration={1.1}>
          <div className="text-center mb-10 md:mb-14">
            <p className="agency-kicker justify-center mb-4">Proof and partnerships</p>
            <h2 className="font-heading text-4xl md:text-6xl font-semibold text-[#CFC8CF] mb-4">
              {title}
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </ContentReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 items-center">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="agency-panel flex items-center justify-center w-full rounded-[1.75rem] p-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={240}
                height={120}
                className="h-auto w-full object-contain transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

