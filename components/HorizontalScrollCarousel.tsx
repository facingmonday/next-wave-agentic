"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FuturisticBackground } from "./FuturisticBackground";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface HorizontalScrollCarouselItem {
  title: string;
  subtitle?: string;
  body: string;
  image: string;
  imageAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
}

export interface HorizontalScrollCarouselProps {
  backgroundImage?: string;
  items: HorizontalScrollCarouselItem[];
  scrollDistance?: number; // optional override
  startOffset?: string;
  className?: string;
}

export function HorizontalScrollCarousel({
  backgroundImage,
  items,
  scrollDistance,
  startOffset = "top top",
  className = "",
}: HorizontalScrollCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !wrapper || items.length === 0) return;

    const slides = wrapper.querySelectorAll(
      "[data-horizontal-item]"
    ) as NodeListOf<HTMLElement>;

    const viewportWidth = window.innerWidth;
    const slideWidth = viewportWidth;

    // total scroll distance = one full viewport per slide (no extra distance after last slide)
    const computedScroll = scrollDistance ?? viewportWidth * items.length;

    // set wrapper width
    gsap.set(wrapper, {
      width: slideWidth * slides.length,
      x: 0,
    });

    // --- TIMELINE ----
    const tl = gsap.timeline({ paused: true });

    slides.forEach((slide, index) => {
      const enterAt = index; // scroll segment start
      const leaveAt = index + 1;

      // Slide enters from right → center
      tl.fromTo(
        slide,
        { x: slideWidth, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        enterAt
      );

      // Slide moves left + fades out (except last slide)
      if (index < slides.length - 1) {
        tl.to(
          slide,
          {
            x: -slideWidth,
            opacity: 0,
            duration: 1,
            ease: "power2.in",
          },
          leaveAt
        );
      }

      // Move wrapper (horizontal track)
      tl.to(
        wrapper,
        {
          x: -slideWidth * index,
          duration: 1,
          ease: "none",
        },
        enterAt
      );
    });

    // --- SCROLLTRIGGER ----
    const st = ScrollTrigger.create({
      trigger: container,
      start: startOffset,
      end: () => "+=" + computedScroll,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        // progress mapping:
        tl.progress(self.progress * items.length);
      },
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, [items, scrollDistance, startOffset]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden ${className}`}
    >
      {/* Background */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      /> */}
      <FuturisticBackground
        pattern="waves"
        intensity="moderate"
        showOrbs={false}
        primaryColor="#fc05b9"
        secondaryColor="#4E79A7"
        tertiaryColor="#84596c"
        lineCount={10}
      />

      {/* Slide wrapper */}
      <div
        ref={wrapperRef}
        className="relative z-10 h-full flex"
        style={{ willChange: "transform" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            data-horizontal-item
            className="flex-shrink-0 w-full h-full flex items-center justify-center px-8 md:px-16"
            style={{
              width: "100vw",
              minWidth: "100vw",
            }}
          >
            <div className="max-w-7xl w-full flex flex-col justify-center py-12 md:py-16">
              {/* Title - Top Left */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12">
                {item.title}
              </h2>

              {/* Content Grid: Image on left, Text on right */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
                {/* Image - Left side, below title */}
                <div className="w-full relative">
                  <Image
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>

                {/* Text Content - Right side */}
                <div className="flex flex-col justify-start text-white">
                  {item.subtitle && (
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white/90">
                      {item.subtitle}
                    </p>
                  )}

                  <p className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed">
                    {item.body}
                  </p>

                  {item.buttonLabel && (
                    <div className="mt-auto">
                      {item.buttonHref ? (
                        <a
                          href={item.buttonHref}
                          className="inline-block px-8 py-4 bg-[#4E79A7] text-white rounded-lg hover:bg-[#3a5e7f] transition-colors"
                        >
                          {item.buttonLabel}
                        </a>
                      ) : (
                        <button
                          onClick={item.buttonOnClick}
                          className="inline-block px-8 py-4 bg-[#4E79A7] text-white rounded-lg hover:bg-[#3a5e7f] transition-colors"
                        >
                          {item.buttonLabel}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
