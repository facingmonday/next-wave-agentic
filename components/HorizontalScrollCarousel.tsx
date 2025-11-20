"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Mobile breakpoint - matches Tailwind's md breakpoint (768px)
const MOBILE_BREAKPOINT = 768;

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
  startOffset?: string;
  className?: string;
}

export function HorizontalScrollCarousel({
  items,
  startOffset = "top top",
  className = "",
}: HorizontalScrollCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop horizontal scroll effect
  useEffect(() => {
    // Skip if mobile - no GSAP animations needed
    if (isMobile) return;

    const container = containerRef.current;
    const wrapper = wrapperRef.current;

    if (!container || !wrapper || items.length === 0) return;

    const slides = wrapper.querySelectorAll(
      "[data-horizontal-item]"
    ) as NodeListOf<HTMLElement>;

    if (!slides.length) return;

    // Ensure each slide is full viewport width
    slides.forEach((slide) => {
      slide.style.width = "100vw";
      slide.style.minWidth = "100vw";
      slide.style.flexShrink = "0";
    });

    // Build per-slide timelines for image / text animations
    const slideTimelines: gsap.core.Timeline[] = [];

    slides.forEach((slide) => {
      const image = slide.querySelector("[data-image]") as HTMLElement | null;
      const subtitle = slide.querySelector(
        "[data-subtitle]"
      ) as HTMLElement | null;
      const body = slide.querySelector("[data-body]") as HTMLElement | null;
      const button = slide.querySelector("[data-button]") as HTMLElement | null;

      const tl = gsap.timeline({ paused: true });

      // Initial states (off / subtle offset)
      if (image) {
        gsap.set(image, { xPercent: 15, opacity: 0 });
      }
      if (body) {
        gsap.set(body, { y: 20, opacity: 0 });
      }
      if (subtitle) {
        gsap.set(subtitle, { y: 10, opacity: 0 });
      }
      if (button) {
        gsap.set(button, { y: 10, opacity: 0 });
      }

      // 0 → 0.5 = entering and composing at center
      // 0.5 → 1 = exiting, text/body fade first, image last

      // Image: delayed start, then fast catch-up, then fades out last
      if (image) {
        tl.to(
          image,
          {
            xPercent: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 0.9,
          },
          0.3 // starts after title has already begun moving
        ).to(
          image,
          {
            opacity: 0,
            ease: "power2.in",
            duration: 0.5,
          },
          0.85 // fade out towards end of slide's journey
        );
      }

      // Subtitle: fades in behind image, exits before image
      if (subtitle) {
        tl.to(
          subtitle,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.9,
          },
          0.75
        ).to(
          subtitle,
          {
            opacity: 0,
            ease: "power2.in",
            duration: 0.4,
          },
          0.75
        );
      }

      // Button: paired with subtitle
      if (button) {
        tl.to(
          button,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.6,
          },
          0.3
        ).to(
          button,
          {
            opacity: 0,
            ease: "power2.in",
            duration: 0.4,
          },
          0.78
        );
      }

      // Body text: comes in last, fades out first
      if (body) {
        tl.to(
          body,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.7,
          },
          0.35 // starts after image and subtitle are moving in
        ).to(
          body,
          {
            opacity: 0,
            ease: "power2.in",
            duration: 0.5,
          },
          0.7 // fades before subtitle/button/image
        );
      }

      slideTimelines.push(tl);
    });

    // Snap points in terms of ScrollTrigger global progress (0 → 1)
    const snapPoints =
      items.length > 1
        ? Array.from({ length: items.length }, (_, i) => i / (items.length - 1))
        : [0];

    let st: ScrollTrigger | null = null;

    const createScrollTrigger = () => {
      const wrapperWidth = wrapper.scrollWidth;
      const viewportWidth = window.innerWidth;
      const maxTranslateX = Math.max(wrapperWidth - viewportWidth, 0);

      if (st) {
        st.kill();
        st = null;
      }

      st = ScrollTrigger.create({
        trigger: container,
        start: startOffset,
        end: () => "+=" + maxTranslateX,
        scrub: 1,
        pin: true,
        anticipatePin: 1,

        snap: {
          snapTo: snapPoints,
          duration: 0.5,
          delay: 0,
          ease: "power2.out",
        },

        onUpdate: (self) => {
          const currentWrapperWidth = wrapper.scrollWidth;
          const currentViewportWidth = window.innerWidth;
          const currentMaxTranslateX = Math.max(
            currentWrapperWidth - currentViewportWidth,
            0
          );

          // TITLE & SLIDE MOTION (unchanged): map progress → wrapper x
          gsap.set(wrapper, {
            x: -self.progress * currentMaxTranslateX,
          });

          // PER-SLIDE ANIMATIONS (image/text stagger)
          if (!slideTimelines.length || items.length <= 1) return;

          // t goes from 0 to (items.length - 1) as we scroll from first to last slide
          const t = self.progress * (items.length - 1);

          slideTimelines.forEach((tl, index) => {
            // For slide i:
            // t = i - 1  => slide just fully right (entering)
            // t = i      => slide centered
            // t = i + 1  => slide fully left (leaving)
            const s = t - (index - 1); // 0 → 2 over enter→center→exit
            let localProgress = s / 2; // map 0→2 to 0→1

            // Clamp outside range (before enter or after exit)
            if (localProgress < 0) localProgress = 0;
            if (localProgress > 1) localProgress = 1;

            tl.progress(localProgress);
          });
        },
      });
    };

    createScrollTrigger();

    const handleResize = () => {
      createScrollTrigger();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (st) st.kill();
      slideTimelines.forEach((tl) => tl.kill());
    };
  }, [items.length, startOffset, isMobile]);

  // Mobile: simple vertical stack layout
  if (isMobile) {
    return (
      <div className={`w-full ${className}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full min-h-screen-10 flex flex-col items-center justify-start px-6 py-8"
          >
            <div className="w-full max-w-2xl flex flex-col gap-8">
              {/* Title on top */}
              <h2 className="text-3xl font-bold text-white">{item.title}</h2>

              {/* Image in middle */}
              <div className="w-full relative">
                <Image
                  src={item.image}
                  alt={item.imageAlt || item.title}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* Body text and button below */}
              <div className="flex flex-col gap-4 text-white items-center text-center">
                {item.subtitle && (
                  <p className="text-xl font-semibold text-white/90">
                    {item.subtitle}
                  </p>
                )}

                <p className="text-base text-white/80 leading-relaxed">
                  {item.body}
                </p>

                {item.buttonLabel && (
                  <div className="mt-4">
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
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden ${className}`}
    >
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
          >
            <div className="max-w-7xl w-full flex flex-col justify-center py-12 md:py-16">
              {/* TITLE – core piece, motion controlled by wrapper translateX */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12">
                {item.title}
              </h2>

              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
                {/* IMAGE – delayed start, fast catch-up, fades out last */}
                <div className="w-full relative">
                  <Image
                    data-image
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>

                {/* TEXT / CTA – staggered fades */}
                <div className="flex flex-col justify-start text-white">
                  {item.subtitle && (
                    <p
                      data-subtitle
                      className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white/90"
                    >
                      {item.subtitle}
                    </p>
                  )}

                  <p
                    data-body
                    className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed"
                  >
                    {item.body}
                  </p>

                  {item.buttonLabel && (
                    <div className="mt-auto">
                      {item.buttonHref ? (
                        <a
                          data-button
                          href={item.buttonHref}
                          className="inline-block px-8 py-4 bg-[#4E79A7] text-white rounded-lg hover:bg-[#3a5e7f] transition-colors"
                        >
                          {item.buttonLabel}
                        </a>
                      ) : (
                        <button
                          data-button
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
