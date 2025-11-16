"use client";

import { useEffect, useRef, useState } from "react";
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
  ctaLabel?: string;
  ctaHref?: string; // Optional if ctaOnClick is provided
  ctaOnClick?: () => void; // Optional custom click handler
  scrollDistance?: number; // Height in pixels for the scroll section
  startOffset?: string; // When pinning starts
  textPosition?: "left" | "center" | "right";
  textAlign?: "left" | "center" | "right";
  clearOnLeave?: boolean; // If true, clears content when scrolling past. Defaults to false (keeps content visible)
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
  ctaOnClick,
  scrollDistance = 1000,
  startOffset = "top top",
  textPosition = "left",
  textAlign = "left",
  clearOnLeave = false,
  className = "",
}: PinnedHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  // Intersection Observer to detect when component is about to enter viewport
  useEffect(() => {
    if (!containerRef.current || !backgroundVideo) return;

    const container = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Start playing when component is about to enter viewport (200px before)
          if (entry.isIntersecting) {
            setShouldAutoplay(true);
            observer.disconnect(); // Only trigger once
          }
        });
      },
      {
        rootMargin: "200px 0px", // Trigger 200px before entering viewport
        threshold: 0,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [backgroundVideo]);

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
        scrub: true, // Smooth scrubbing
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

    // Create timeline FOR CONTENT ONLY with GPU acceleration
    const tl = gsap.timeline({
      defaults: {
        force3D: true, // GPU acceleration
        lazy: false, // Don't defer updates
      },
    });

    // Title appears (0-20% of scroll)
    tl.to(
      title,
      {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 0.2,
        ease: "power3.out",
        force3D: true,
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
          force3D: true,
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
        force3D: true,
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
        force3D: true,
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
      scrub: true, // Smooth scrubbing (defaults to 0.5, smoother than 1)
      anticipatePin: 1, // Anticipate pinning for smoother transitions
      onUpdate: (self) => {
        const progress = self.progress;
        // Only update timeline if we're in the active scroll range
        if (self.isActive) {
          // Ensure content wrapper is visible while active
          gsap.set(content, { autoAlpha: 1 });
          tl.progress(progress);
        } else {
          // If clearOnLeave is true, hide content when not active
          if (clearOnLeave) {
            tl.progress(0);
            gsap.set(content, { autoAlpha: 0 });
            gsap.set([title, subtitle, body, cta], {
              opacity: 0,
              y: 50,
              visibility: "hidden",
            });
          }
          // If clearOnLeave is false, keep content visible (do nothing)
        }
      },
      onEnter: () => {
        // When entering the trigger zone, start from beginning
        gsap.set(content, { autoAlpha: 1 });
        tl.progress(0);
      },
      onLeave: () => {
        // When leaving forwards (scrolled past)
        if (clearOnLeave) {
          // Hide content if clearOnLeave is true
          tl.progress(0);
          gsap.set(content, { autoAlpha: 0 });
          gsap.set([title, subtitle, body, cta], {
            opacity: 0,
            y: 50,
            visibility: "hidden",
          });
        }
        // If clearOnLeave is false, keep final state (content stays visible)
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
    ctaOnClick,
    scrollDistance,
    startOffset,
    clearOnLeave,
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

  // When background is provided, use exactly 100vh on both mobile and desktop
  const hasBackground = backgroundVideo || backgroundImage;

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full bg-black"
        style={{
          height: hasBackground ? "100vh" : "auto",
          minHeight: hasBackground ? "100vh" : "100vh",
        }}
      >
        {/* Background Video or Image */}
        {backgroundVideo ? (
          <div
            data-background
            className="absolute inset-0 z-0 opacity-50 overflow-hidden"
          >
            <VimeoVideo
              vimeoUrl={backgroundVideo}
              autoplay={shouldAutoplay}
              loop={true}
              muted={true}
              controls={false}
              responsive={false}
              background={true}
              className=""
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />
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
          className={`relative z-10 flex items-center px-4 md:px-8 lg:px-16 ${getTextPositionClasses()}`}
          style={{
            height: hasBackground ? "100vh" : "auto",
            minHeight: hasBackground ? "100vh" : "100vh",
          }}
        >
          <div className={`max-w-2xl ${getTextAlignClasses()}`}>
            <h1
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
              style={{
                opacity: 0,
                transform: "translateY(50px) translateZ(0)",
                visibility: "hidden",
                willChange: "transform, opacity",
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                ref={subtitleRef}
                className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
                style={{
                  opacity: 0,
                  transform: "translateY(50px) translateZ(0)",
                  visibility: "hidden",
                  willChange: "transform, opacity",
                }}
              >
                {subtitle}
              </p>
            )}
            <p
              ref={bodyRef}
              className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
              style={{
                opacity: 0,
                transform: "translateY(50px) translateZ(0)",
                visibility: "hidden",
                willChange: "transform, opacity",
              }}
            >
              {body}
            </p>
            {ctaOnClick && ctaLabel ? (
              <button
                ref={ctaRef as React.RefObject<HTMLButtonElement>}
                onClick={ctaOnClick}
                className="inline-block px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
                style={{
                  opacity: 0,
                  transform: "translateY(50px) translateZ(0)",
                  visibility: "hidden",
                  willChange: "transform, opacity",
                }}
              >
                {ctaLabel}
              </button>
            ) : ctaHref ? (
              <a
                ref={ctaRef as React.RefObject<HTMLAnchorElement>}
                href={ctaHref}
                className="inline-block px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
                style={{
                  opacity: 0,
                  transform: "translateY(50px) translateZ(0)",
                  visibility: "hidden",
                  willChange: "transform, opacity",
                }}
              >
                {ctaLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
