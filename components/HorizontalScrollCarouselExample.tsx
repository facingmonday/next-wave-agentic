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
  const ballRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<SVGPolylineElement | null>(null);
  const trailHistoryRef = useRef<number[]>([]);
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

    // Initialize ball and trail
    const ball = ballRef.current;
    const trail = trailRef.current;
    if (ball) {
      gsap.set(ball, { y: 0 });
    }
    if (trail) {
      trailHistoryRef.current = [];
      trail.setAttribute("points", "0,115 40,115 80,115 120,115 160,115");
    }

    // Ensure each slide is full viewport width
    slides.forEach((slide) => {
      slide.style.width = "100vw";
      slide.style.minWidth = "100vw";
      slide.style.flexShrink = "0";
    });

    // Build per-slide timelines for image / text animations
    const slideTimelines: gsap.core.Timeline[] = [];

    slides.forEach((slide, slideIndex) => {
      const image = slide.querySelector("[data-image]") as HTMLElement | null;
      const subtitle = slide.querySelector(
        "[data-subtitle]"
      ) as HTMLElement | null;
      const body = slide.querySelector("[data-body]") as HTMLElement | null;
      const button = slide.querySelector("[data-button]") as HTMLElement | null;

      const tl = gsap.timeline({ paused: true });
      const isFirstSlide = slideIndex === 0;

      // Initial states (off / subtle offset)
      // First slide: all elements visible immediately (no fade-in animation)
      if (image) {
        if (isFirstSlide) {
          gsap.set(image, { xPercent: 0, opacity: 1 });
        } else {
          gsap.set(image, { xPercent: 15, opacity: 0 });
        }
      }
      if (body) {
        if (isFirstSlide) {
          gsap.set(body, { y: 0, opacity: 1 });
        } else {
          gsap.set(body, { y: 20, opacity: 0 });
        }
      }
      if (subtitle) {
        if (isFirstSlide) {
          gsap.set(subtitle, { y: 0, opacity: 1 });
        } else {
          gsap.set(subtitle, { y: 10, opacity: 0 });
        }
      }
      if (button) {
        if (isFirstSlide) {
          gsap.set(button, { y: 0, opacity: 1 });
        } else {
          gsap.set(button, { y: 10, opacity: 0 });
        }
      }

      // Image: delayed start, then fast catch-up, then fades out last
      if (image) {
        if (!isFirstSlide) {
          tl.to(
            image,
            {
              xPercent: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 0.9,
            },
            0.3
          );
        }
        tl.to(
          image,
          {
            opacity: 0,
            ease: "power2.in",
            duration: 0.5,
          },
          isFirstSlide ? 0.7 : 0.85
        );
      }

      // Subtitle
      if (subtitle) {
        if (!isFirstSlide) {
          tl.to(
            subtitle,
            {
              opacity: 1,
              y: 0,
              ease: "power2.out",
              duration: 0.9,
            },
            0.75
          );
        }
        tl.to(
          subtitle,
          {
            opacity: 0,
            ease: "power2.in",
            duration: 0.4,
          },
          isFirstSlide ? 0.6 : 0.75
        );
      }

      // Button
      if (button) {
        if (!isFirstSlide) {
          tl.to(
            button,
            {
              opacity: 1,
              y: 0,
              ease: "power2.out",
              duration: 0.6,
            },
            0.3
          );
        }
        tl.to(
          button,
          {
            opacity: 0,
            ease: "power2.in",
            duration: 0.4,
          },
          isFirstSlide ? 0.65 : 0.78
        );
      }

      // Body text
      if (body) {
        if (!isFirstSlide) {
          tl.to(
            body,
            {
              opacity: 1,
              y: 0,
              ease: "power2.out",
              duration: 0.7,
            },
            0.35
          );
        }
        tl.to(
          body,
          {
            opacity: 0,
            ease: "power2.in",
            duration: 0.5,
          },
          isFirstSlide ? 0.55 : 0.7
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

          // TITLE & SLIDE MOTION: map progress → wrapper x
          gsap.set(wrapper, {
            x: -self.progress * currentMaxTranslateX,
          });

          // BOUNCING BALL + TRAIL ANIMATION
          const ball = ballRef.current;
          const trail = trailRef.current;

          // Number of bounces per full scroll (adjust for desired bounce frequency)
          const bouncesPerScroll = items.length * 2; // 2 bounces per slide
          const bounceCycle = self.progress * bouncesPerScroll;
          const bouncePhase = bounceCycle * Math.PI * 2;

          // 0..1 normalized bounce
          const bounceNormalized = Math.abs(Math.sin(bouncePhase));
          const bounceHeight = 125; // Maximum bounce height in pixels
          const bounceY = bounceNormalized * bounceHeight;

          if (ball) {
            gsap.set(ball, {
              y: -bounceY,
              ease: "power2.out",
            });
          }

          // Trail: history of recent bounce positions with more curvature
          if (trail) {
            const history = trailHistoryRef.current;
            const maxPoints = 12; // more points for smoother curve

            history.push(bounceNormalized);
            if (history.length > maxPoints) {
              history.splice(0, history.length - maxPoints);
            }

            const pointCount = history.length;
            const width = 160; // matches SVG viewBox width
            const baseLineY = 115; // midline in the SVG (adjusted to move trail up)
            // Match ball's bounce height exactly (ball bounces 125px)
            const amplitudePx = 125;

            const stepX = pointCount > 1 ? width / (pointCount - 1) : 0;

            const points = history
              .map((v, i) => {
                const x = i * stepX;
                // Apply the bounce value directly to create more pronounced curve
                const y = baseLineY - v * amplitudePx;
                return `${x},${y}`;
              })
              .join(" ");

            trail.setAttribute("points", points || "0,115 160,115");
          }

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

            // First slide: keep at 0 progress (fully visible) until it starts leaving
            if (index === 0 && t < 0.5) {
              localProgress = 0;
            }

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
      {/* Bouncing Ball + Trail - bottom left, ball shifted right to leave room for trail */}
      <div
        className="fixed left-8 bottom-8 z-50 flex items-center pointer-events-none"
        aria-hidden="true"
      >
        {/* Trail showing recent bounce history with curvature */}
        <svg className="w-36 h-[250px]" viewBox="0 -10 160 270">
          <defs>
            <linearGradient
              id="trailGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="50%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <polyline
            ref={trailRef}
            fill="none"
            stroke="url(#trailGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 4"
            points="0,115 40,115 80,115 120,115 160,115"
          />
        </svg>

        {/* Ball, shifted right from the trail */}
        <div
          ref={ballRef}
          className="ml-2 w-15 h-15 rounded-full bg-white/90 shadow-lg"
          style={{ willChange: "transform" }}
        />
      </div>

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
