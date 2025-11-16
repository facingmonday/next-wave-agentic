"use client";

import { useState } from "react";
import Image from "next/image";

export interface Service {
  id: string;
  image: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
}

export interface ServicesGridProps {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  primaryCtaLabel: string;
  primaryCtaHref?: string;
  primaryCtaOnClick?: () => void;
  secondaryCtaLabel: string;
  secondaryCtaHref?: string;
  secondaryCtaOnClick?: () => void;
  services: Service[];
}

export function ServicesGrid({
  heroTitle,
  heroSubtitle,
  heroDescription,
  primaryCtaLabel,
  primaryCtaHref,
  primaryCtaOnClick,
  secondaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaOnClick,
  services,
}: ServicesGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-16 md:py-32 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="mb-16 md:mb-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-4 uppercase">
            {heroTitle}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#CFC8CF] mb-6">
            {heroSubtitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto mb-8">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCtaOnClick ? (
              <button
                onClick={primaryCtaOnClick}
                className="px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
              >
                {primaryCtaLabel}
              </button>
            ) : primaryCtaHref ? (
              <a
                href={primaryCtaHref}
                className="px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors inline-block"
              >
                {primaryCtaLabel}
              </a>
            ) : null}
            {secondaryCtaOnClick ? (
              <button
                onClick={secondaryCtaOnClick}
                className="px-8 py-4 bg-transparent border-2 border-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/10 transition-colors"
              >
                {secondaryCtaLabel}
              </button>
            ) : secondaryCtaHref ? (
              <a
                href={secondaryCtaHref}
                className="px-8 py-4 bg-transparent border-2 border-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/10 transition-colors inline-block"
              >
                {secondaryCtaLabel}
              </a>
            ) : null}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const handleClick = () => {
              if (service.ctaOnClick) {
                service.ctaOnClick();
              } else if (service.ctaHref) {
                window.location.href = service.ctaHref;
              }
            };

            return (
              <div
                key={service.id}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={handleClick}
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Title Overlay - Always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Description & CTA Overlay - Slides up on hover */}
                <div
                  className={`absolute inset-0 bg-black/85 backdrop-blur-sm transition-all duration-500 ease-out flex flex-col justify-center items-start p-6 md:p-8 z-20 ${
                    hoveredId === service.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    {service.ctaOnClick ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          service.ctaOnClick?.();
                        }}
                        className="text-[#4E79A7] font-semibold text-sm md:text-base hover:text-[#4E79A7]/80 transition-colors inline-flex items-center gap-2"
                      >
                        <span>{service.ctaLabel}</span>
                        <span>→</span>
                      </button>
                    ) : service.ctaHref ? (
                      <a
                        href={service.ctaHref}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#4E79A7] font-semibold text-sm md:text-base hover:text-[#4E79A7]/80 transition-colors inline-flex items-center gap-2"
                      >
                        <span>{service.ctaLabel}</span>
                        <span>→</span>
                      </a>
                    ) : (
                      <span className="text-[#4E79A7] font-semibold text-sm md:text-base inline-flex items-center gap-2">
                        <span>{service.ctaLabel}</span>
                        <span>→</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
