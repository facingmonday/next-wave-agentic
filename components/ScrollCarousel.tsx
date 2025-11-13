"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type CarouselAnimationDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "opacity"
  | "scale"
  | "slide";

export type ScrollThrottleSpeed = "slow" | "medium" | "fast";

export interface ScrollCarouselProps {
  children: React.ReactNode;
  sticky?: boolean; // Whether to pin/sticky the carousel during scroll
  animationDirection?: CarouselAnimationDirection;
  animationDuration?: number; // Duration per slide in seconds
  stagger?: number; // Transition duration between slides
  scrollDistance?: number; // Total scroll distance in pixels (auto-calculated if not provided)
  startOffset?: string; // When pinning starts (e.g., 'top top', 'center center')
  className?: string;
  pinSpacer?: boolean; // Whether to add spacing when pinned
  scrollThrottle?: ScrollThrottleSpeed; // Scroll speed: 'slow' (300px/sec), 'medium' (200px/sec), 'fast' (100px/sec)
}

export function ScrollCarousel({
  children,
  sticky = true,
  animationDirection = "opacity",
  animationDuration = 1.2,
  stagger = 0.4,
  scrollDistance,
  startOffset = "center center",
  className = "",
  pinSpacer = true,
  scrollThrottle = "medium", // Default: medium speed
}: ScrollCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Map throttle speed to scroll distance multiplier, scrub value, and animation speed multipliers
    const getThrottleValues = (speed: ScrollThrottleSpeed) => {
      switch (speed) {
        case "slow":
          return {
            scrollMultiplier: 600,
            scrub: 3.0,
            animationDurationMultiplier: 2.0, // 2x longer animations
            staggerMultiplier: 2.5, // 2.5x longer transitions
            ease: "power1.inOut", // Smoother easing
          };
        case "fast":
          return {
            scrollMultiplier: 100,
            scrub: 1.0,
            animationDurationMultiplier: 0.7, // Faster animations
            staggerMultiplier: 0.6, // Faster transitions
            ease: "power1.inOut", // Snappier easing
          };
        case "medium":
        default:
          return {
            scrollMultiplier: 400,
            scrub: 1.5,
            animationDurationMultiplier: 1.5, // Normal speed
            staggerMultiplier: 2.0, // Normal transitions
            ease: "power1.inOut", // Balanced easing
          };
      }
    };

    const throttleValues = getThrottleValues(scrollThrottle);
    const element = containerRef.current;

    // Apply throttle multipliers to animation durations
    const throttledStagger = stagger * throttleValues.staggerMultiplier;

    // Find ScrollCarouselItems component (should be a direct child)
    // Then find all ScrollCarouselItem children
    let carouselItems: HTMLElement[] = [];

    // Look for children with data-carousel-item attribute (set by ScrollCarouselItem)
    const allChildren = element.querySelectorAll("[data-carousel-item]");
    carouselItems = Array.from(allChildren) as HTMLElement[];

    // Fallback: if no data attributes, look for direct children structure
    if (carouselItems.length === 0) {
      const directChildren = Array.from(element.children) as HTMLElement[];
      // Check if there's a wrapper (ScrollCarouselItems)
      if (directChildren.length === 1) {
        const wrapper = directChildren[0];
        carouselItems = Array.from(wrapper.children) as HTMLElement[];
      } else {
        carouselItems = directChildren;
      }
    }

    if (carouselItems.length === 0) return;

    // Helper function to get initial state based on animation direction
    const getInitialState = (direction: CarouselAnimationDirection) => {
      switch (direction) {
        case "up":
          return {
            y: 80,
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
          };
        case "down":
          return {
            y: -80,
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
          };
        case "left":
          return {
            x: 80,
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
          };
        case "right":
          return {
            x: -80,
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
          };
        case "opacity":
          return { opacity: 0, pointerEvents: "none", visibility: "hidden" };
        case "scale":
          return {
            scale: 0.7,
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
          };
        case "slide":
          return {
            x: "100%",
            opacity: 0,
            pointerEvents: "none",
            visibility: "hidden",
          };
        default:
          return { opacity: 0, pointerEvents: "none", visibility: "hidden" };
      }
    };

    // Get animation for each item (from data attribute or fallback to global)
    const getItemAnimation = (
      item: HTMLElement
    ): CarouselAnimationDirection => {
      const itemAnimation = item.getAttribute(
        "data-animation"
      ) as CarouselAnimationDirection | null;
      return itemAnimation || animationDirection;
    };

    // Get duration for each item (from data attribute or fallback to global)
    const getItemDuration = (item: HTMLElement): number => {
      const itemDuration = item.getAttribute("data-duration");
      return itemDuration ? parseFloat(itemDuration) : animationDuration;
    };

    const finalState = {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      pointerEvents: "auto",
      visibility: "visible",
    };
    const fadeOutState = {
      opacity: 0,
      pointerEvents: "none",
      visibility: "hidden",
    };

    // Set initial styles for all items using their specific animations
    carouselItems.forEach((item, index) => {
      const itemAnimation = getItemAnimation(item);
      const initialState = getInitialState(itemAnimation);

      // First slide should be visible initially, others hidden
      if (index === 0) {
        gsap.set(item, { ...finalState, opacity: 1, visibility: "visible" });
      } else {
        gsap.set(item, initialState);
      }
    });

    // Create timeline for animations
    const tl = gsap.timeline({ paused: true });
    timelineRef.current = tl;

    // Calculate timing for each item
    const totalSlides = carouselItems.length;
    const transitionDuration = throttledStagger; // Crossfade duration (throttled)

    // Calculate cumulative start times for each slide
    let cumulativeTime = 0;
    const slideTimings: Array<{
      start: number;
      duration: number;
      end: number;
    }> = [];

    carouselItems.forEach((item) => {
      const baseItemDuration = getItemDuration(item);
      // Apply throttle multiplier to individual item durations
      const itemDuration =
        baseItemDuration * throttleValues.animationDurationMultiplier;
      slideTimings.push({
        start: cumulativeTime,
        duration: itemDuration,
        end: cumulativeTime + itemDuration,
      });
      cumulativeTime += itemDuration + transitionDuration;
    });

    // Start timeline with first slide already visible
    if (carouselItems.length > 0) {
      tl.set(carouselItems[0], finalState, 0);
    }

    // Animate each slide with its specific animation type
    carouselItems.forEach((item, index) => {
      const timing = slideTimings[index];

      // For first slide, handle fade out
      if (index === 0) {
        if (totalSlides > 1) {
          tl.to(
            item,
            {
              ...fadeOutState,
              duration: transitionDuration,
              ease: throttleValues.ease,
            },
            timing.end
          );
        }
      } else {
        // Fade in with item-specific animation (overlaps with previous slide fading out)
        // The initial state is already set, so we animate to final state
        tl.to(
          item,
          {
            ...finalState,
            duration: transitionDuration,
            ease: throttleValues.ease,
          },
          timing.start
        );

        // Fade out when next slide starts fading in (except for last slide)
        if (index < totalSlides - 1) {
          tl.to(
            item,
            {
              ...fadeOutState,
              duration: transitionDuration,
              ease: throttleValues.ease,
            },
            timing.end
          );
        }
      }
    });

    // Calculate total animation duration
    const totalDuration = cumulativeTime - transitionDuration; // Subtract last transition since last slide doesn't fade out

    // Calculate scroll distance based on throttle speed
    // Higher scrollMultiplier = more scroll needed = slower animation
    const calculatedScrollDistance =
      scrollDistance || totalDuration * throttleValues.scrollMultiplier;

    // Create ScrollTrigger with throttled scrolling
    // Higher scrub value = smoother, slower animation response
    // Higher scrollDistance = more scroll needed to complete animation
    const scrollTriggerConfig: ScrollTrigger.Vars = {
      trigger: element,
      start: startOffset,
      end: `+=${calculatedScrollDistance}`,
      scrub: throttleValues.scrub, // Scrub value based on throttle speed
      onUpdate: (self) => {
        // Update timeline progress based on scroll progress
        const progress = self.progress;
        tl.progress(progress);
      },
    };

    // Add pinning if sticky is enabled
    if (sticky) {
      scrollTriggerConfig.pin = true;
      scrollTriggerConfig.pinSpacing = pinSpacer;
    }

    const scrollTrigger = ScrollTrigger.create(scrollTriggerConfig);

    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      scrollTrigger.kill();
    };
  }, [
    sticky,
    animationDirection,
    animationDuration,
    stagger,
    scrollDistance,
    startOffset,
    pinSpacer,
    scrollThrottle,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative ${sticky ? "z-10" : ""} ${className}`}
      style={sticky ? { position: "relative", zIndex: 10 } : undefined}
    >
      {children}
    </div>
  );
}
