"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VimeoVideo } from "./VimeoVideo";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface PinnedHeroProps {
  backgroundImage?: string;
  backgroundVideo?: string; // Vimeo URL
  title: string;
  subtitle?: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  scrollDistance?: number; // Height in pixels for the scroll section
  startOffset?: string; // When pinning starts
  textPosition?: "left" | "center" | "right";
  textAlign?: "left" | "center" | "right";
  className?: string;
}

export function PinnedHero({
  backgroundImage,
  backgroundVideo,
  title,
  subtitle,
  body,
  ctaLabel,
  ctaHref,
  scrollDistance = 1000,
  startOffset = "top top",
  textPosition = "left",
  textAlign = "left",
  className = "",
}: PinnedHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    // Find background element within container (works for both image and video)
    const background = container.querySelector(
      "[data-background]"
    ) as HTMLElement;
    const content = contentRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const body = bodyRef.current;
    const cta = ctaRef.current;

    if (!content || !title || !body || !cta) return;

    // Set initial states IMMEDIATELY - before any scroll triggers
    // Background starts completely hidden and fades in - only for images
    if (!backgroundVideo && background) {
      // Set immediately to prevent any flash
      gsap.set(background, { autoAlpha: 0, immediateRender: true }); // opacity:0 + visibility:hidden
    }
    // Entire content wrapper hidden until trigger activates
    gsap.set(content, { autoAlpha: 0 }); // opacity:0 + visibility:hidden
    gsap.set([title, subtitle, body, cta], {
      opacity: 0,
      y: 50,
      visibility: "hidden",
    });

    // SEPARATE SCROLL TRIGGER FOR BACKGROUND FADE IN/OUT
    let backgroundTrigger: ScrollTrigger | undefined;
    if (!backgroundVideo && background) {
      backgroundTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top bottom", // When top of container hits bottom of viewport
        end: "bottom top", // When bottom of container hits top of viewport
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // Fade in during first 30% of entering viewport
          // Stay visible during middle 40%
          // Fade out during last 30% of leaving viewport
          let opacity = 0;

          if (progress < 0.3) {
            // Fade in
            opacity = (progress / 0.3) * 0.5;
          } else if (progress < 0.7) {
            // Stay at full opacity
            opacity = 0.5;
          } else {
            // Fade out
            opacity = ((1 - progress) / 0.3) * 0.5;
          }

          gsap.set(background, {
            opacity: opacity,
            visibility: opacity > 0 ? "visible" : "hidden",
          });
        },
        onLeave: () => {
          gsap.set(background, { autoAlpha: 0 });
        },
        onLeaveBack: () => {
          gsap.set(background, { autoAlpha: 0 });
        },
      });
    }

    // Create timeline FOR CONTENT ONLY
    const tl = gsap.timeline();

    // Title appears (0-20% of scroll)
    tl.to(
      title,
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.2,
        ease: "power3.out",
      },
      0
    );

    // Subtitle appears (20-40% of scroll)
    if (subtitle) {
      tl.to(
        subtitle,
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.2,
          ease: "power3.out",
        },
        0.2
      );
    }

    // Body appears (40-60% of scroll)
    tl.to(
      body,
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.2,
        ease: "power3.out",
      },
      0.4
    );

    // CTA appears last (60-100% of scroll)
    tl.to(
      cta,
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.4,
        ease: "power3.out",
      },
      0.6
    );

    // Create ScrollTrigger for CONTENT animation (pinned)
    const contentTrigger = ScrollTrigger.create({
      trigger: container,
      start: startOffset,
      end: `+=${scrollDistance}`,
      pin: true,
      pinSpacing: true,
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress;
        // Only update timeline if we're in the active scroll range
        if (self.isActive) {
          // Ensure content wrapper is visible while active
          gsap.set(content, { autoAlpha: 1 });
          tl.progress(progress);
        } else {
          // If not active, ensure content is hidden
          tl.progress(0);
          gsap.set(content, { autoAlpha: 0 });
          gsap.set([title, subtitle, body, cta], {
            opacity: 0,
            y: 50,
            visibility: "hidden",
          });
        }
      },
      onEnter: () => {
        // When entering the trigger zone, start from beginning
        gsap.set(content, { autoAlpha: 1 });
        tl.progress(0);
      },
      onLeave: () => {
        // When leaving forwards (scrolled past), keep final state
        // Content can stay visible after animation completes
      },
      onLeaveBack: () => {
        // When leaving backwards (scrolled back up), hide content
        tl.progress(0);
        gsap.set(content, { autoAlpha: 0 });
        gsap.set([title, subtitle, body, cta], {
          opacity: 0,
          y: 50,
          visibility: "hidden",
        });
      },
    });

    // Initial check: ensure content is hidden if section hasn't reached trigger point
    const checkInitialState = () => {
      if (!contentTrigger.isActive) {
        // If scroll trigger is not active, ensure content is hidden
        gsap.set(content, { autoAlpha: 0 });
        gsap.set([title, subtitle, body, cta], {
          opacity: 0,
          y: 50,
          visibility: "hidden",
        });
        tl.progress(0);
      }
      // Background state is managed by its own trigger
      if (
        !backgroundVideo &&
        background &&
        backgroundTrigger &&
        !backgroundTrigger.isActive
      ) {
        gsap.set(background, { autoAlpha: 0 });
      }
    };

    // Check initial state after ScrollTrigger has calculated positions
    ScrollTrigger.addEventListener("refresh", checkInitialState);
    setTimeout(checkInitialState, 100);

    // Cleanup
    return () => {
      ScrollTrigger.removeEventListener("refresh", checkInitialState);
      tl.kill();
      contentTrigger.kill();
      if (backgroundTrigger) {
        backgroundTrigger.kill();
      }
    };
  }, [
    backgroundImage,
    backgroundVideo,
    title,
    subtitle,
    body,
    ctaLabel,
    ctaHref,
    scrollDistance,
    startOffset,
  ]);

  // Get text position classes
  const getTextPositionClasses = () => {
    switch (textPosition) {
      case "left":
        return "justify-start";
      case "center":
        return "justify-center";
      case "right":
        return "justify-end";
      default:
        return "justify-start";
    }
  };

  const getTextAlignClasses = () => {
    switch (textAlign) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div ref={containerRef} className="relative w-full min-h-screen bg-black">
        {/* Background Video or Image */}
        {backgroundVideo ? (
          <div data-background className="absolute inset-0 z-0 opacity-50">
            <VimeoVideo
              vimeoUrl={backgroundVideo}
              autoplay={true}
              loop={true}
              muted={true}
              controls={false}
              responsive={false}
              className="absolute inset-0 w-full h-full"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ) : backgroundImage ? (
          <div
            data-background
            className="absolute inset-0 z-0 opacity-0 invisible"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ) : null}

        {/* Content */}
        <div
          ref={contentRef}
          className={`relative z-10 min-h-screen flex items-center px-4 md:px-8 lg:px-16 ${getTextPositionClasses()}`}
        >
          <div className={`max-w-2xl ${getTextAlignClasses()}`}>
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
              style={{
                opacity: 0,
                transform: "translateY(50px)",
                visibility: "hidden",
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6"
                style={{
                  opacity: 0,
                  transform: "translateY(50px)",
                  visibility: "hidden",
                }}
              >
                {subtitle}
              </p>
            )}
            <p
              ref={bodyRef}
              className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
              style={{
                opacity: 0,
                transform: "translateY(50px)",
                visibility: "hidden",
              }}
            >
              {body}
            </p>
            <a
              ref={ctaRef}
              href={ctaHref}
              className="inline-block px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
              style={{
                opacity: 0,
                transform: "translateY(50px)",
                visibility: "hidden",
              }}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
