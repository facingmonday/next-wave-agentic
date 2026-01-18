"use client";

import Image from "next/image";
import Link from "next/link";
import { ContentReveal } from "@/components/ContentReveal";

export type ServiceFeatureImageSide = "left" | "right";

export interface ServiceFeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imageSide?: ServiceFeatureImageSide;
}

export function ServiceFeatureSection({
  title,
  subtitle,
  description,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  imageSide = "left",
}: ServiceFeatureSectionProps) {
  const isImageLeft = imageSide === "left";

  return (
    <section className="relative py-16 md:py-24 bg-black overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div
            className={`order-1 ${isImageLeft ? "md:order-1" : "md:order-2"}`}
          >
            <ContentReveal direction={isImageLeft ? "left" : "right"} duration={1.1}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#3f395b] bg-[#201E30] shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </ContentReveal>
          </div>

          <div
            className={`order-2 ${isImageLeft ? "md:order-2" : "md:order-1"}`}
          >
            <ContentReveal direction={isImageLeft ? "right" : "left"} duration={1.1}>
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  {subtitle}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF]">
                  {title}
                </h2>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {description}
                </p>

                <div className="pt-2">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#4E79A7] text-[#CFC8CF] font-semibold hover:bg-[#4E79A7]/90 transition-colors"
                  >
                    {ctaLabel}
                  </Link>
                </div>
              </div>
            </ContentReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

