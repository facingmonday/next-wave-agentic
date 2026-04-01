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
  highlights?: string[];
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
  highlights = [],
}: ServiceFeatureSectionProps) {
  const isImageLeft = imageSide === "left";

  return (
    <section className="relative overflow-x-hidden bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div
            className={`order-1 ${isImageLeft ? "md:order-1" : "md:order-2"}`}
          >
            <ContentReveal direction={isImageLeft ? "left" : "right"} duration={1.1}>
              <div className="agency-panel relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-[#3f395b] bg-[#201E30]">
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
              <div className="space-y-6">
                <p className="agency-kicker">
                  {subtitle}
                </p>
                <h2 className="font-heading text-4xl md:text-6xl font-semibold text-[#CFC8CF]">
                  {title}
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                  {description}
                </p>

                {highlights.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#CFC8CF]/75"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-2">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center justify-center rounded-full border border-[#4E79A7]/35 bg-[#4E79A7]/18 px-7 py-3 font-semibold text-[#CFC8CF] transition-colors hover:bg-[#4E79A7]/28"
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

