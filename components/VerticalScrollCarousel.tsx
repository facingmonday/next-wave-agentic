"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import VerticalSlide, { VerticalSlideItem } from "./VerticalSlide";
import Link from "next/link";
import Image from "next/image";

interface VerticalScrollCarouselProps {
  items: VerticalSlideItem[];
}

export default function VerticalScrollCarousel({
  items,
}: VerticalScrollCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const throttleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);
  const snapTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollY } = useScroll();

  const [activeBgIndex, setActiveBgIndex] = useState(0);
  const [imageOpacities, setImageOpacities] = useState<number[]>(
    () => items.map(() => 0) // all images start fully faded out
  );

  // Throttle delay in milliseconds (16ms ≈ 60fps, adjust as needed)
  const THROTTLE_DELAY = 16;

  // ---------- CORE: VISIBILITY-BASED LOGIC ----------
  const recomputeVisibility = useCallback(() => {
    if (typeof window === "undefined") return;

    const vh = window.innerHeight;

    // 1) Compute percent visible for each slide
    const visibilities = items.map((_, index) => {
      const el = slideRefs.current[index];
      if (!el) return 0;

      const rect = el.getBoundingClientRect();
      const visibleHeight = Math.max(
        0,
        Math.min(rect.bottom, vh) - Math.max(rect.top, 0)
      );

      const percentVisible = visibleHeight / vh; // 0 → 1
      return percentVisible;
    });

    // 2) Choose background owner:
    //    - If a slide is ≥ 0.5 visible, it owns the background
    //    - Else fall back to the most visible one
    let bgIndex = visibilities.findIndex((v) => v >= 0.5);
    if (bgIndex === -1) {
      let maxVis = 0;
      bgIndex = 0;
      visibilities.forEach((v, i) => {
        if (v > maxVis) {
          maxVis = v;
          bgIndex = i;
        }
      });
    }
    setActiveBgIndex(bgIndex);

    // 3) Compute image opacities based on each slide's own visibility
    //    - If slide visible ≤ 0.5 → image opacity 0
    //    - From 0.5 → 0.9 visible → fade in 0 → 1
    //    - ≥ 0.9 visible → full opacity
    const newOpacities = visibilities.map((v) => {
      const start = 0.5; // start showing *after* majority
      const full = 0.9; // fully in once slide is mostly on screen

      if (v <= start) return 0;
      if (v >= full) return 1;
      return (v - start) / (full - start); // linear 0→1
    });

    setImageOpacities(newOpacities);
  }, [items]);

  // ---------- INITIAL: Run visibility computation on mount ----------
  useEffect(() => {
    // Run once on mount to set initial opacities
    recomputeVisibility();

    // Cleanup timeouts on unmount
    return () => {
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
      if (snapTimeoutRef.current) {
        clearTimeout(snapTimeoutRef.current);
      }
    };
  }, [recomputeVisibility]);

  // ---------- SCROLL: VISIBILITY + SNAP ON PAUSE ----------
  useMotionValueEvent(scrollY, "change", () => {
    if (!containerRef.current) return;

    // Throttle visibility recomputation
    const now = Date.now();
    const timeSinceLastUpdate = now - lastUpdateTimeRef.current;

    if (timeSinceLastUpdate >= THROTTLE_DELAY) {
      // Update immediately if enough time has passed
      recomputeVisibility();
      lastUpdateTimeRef.current = now;
    } else {
      // Schedule update if throttled
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current);
      }
      throttleTimeoutRef.current = setTimeout(() => {
        recomputeVisibility();
        lastUpdateTimeRef.current = Date.now();
      }, THROTTLE_DELAY - timeSinceLastUpdate);
    }

    // Snap behavior (only when scrolling stops briefly)
    if (snapTimeoutRef.current) {
      clearTimeout(snapTimeoutRef.current);
    }

    snapTimeoutRef.current = setTimeout(() => {
      const scrollPos = window.scrollY;
      const vh = window.innerHeight;

      // nearest whole slide
      const nearestSlideIndex = Math.round(scrollPos / vh);
      const target = nearestSlideIndex * vh;

      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    }, 120);
  });

  return (
    <div ref={containerRef} className="relative w-full">
      {/* BACKGROUND LAYER – smooth fade transition */}
      <motion.div
        className="fixed inset-0 z-0"
        animate={{
          backgroundColor: items[activeBgIndex]?.backgroundColor ?? "#000000",
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      />

      {/* FIXED CENTER IMAGE LAYER */}
      <div className="pointer-events-none fixed inset-0 z-30 flex flex-col items-center justify-center">
        {items.map((item, index) => (
          <motion.div
            key={index}
            style={{ opacity: imageOpacities[index] ?? 0 }}
            className="absolute flex flex-col items-center justify-center w-[260px] sm:w-[330px] lg:w-[420px]"
          >
            <div className="relative w-full aspect-square rounded-full bg-white/20 backdrop-blur-xl shadow-2xl pointer-events-none">
              <Image
                src={item.defaultImage}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-contain p-6"
                width={100}
                height={100}
              />
            </div>
            {item?.href && (
              <Link
                href={item.href}
                className="mt-6 px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/80 transition-colors cursor-pointer"
                style={{
                  opacity: imageOpacities[index] ?? 0,
                  pointerEvents:
                    (imageOpacities[index] ?? 0) > 0.5 ? "auto" : "none",
                }}
              >
                View {item.title}
              </Link>
            )}
          </motion.div>
        ))}
      </div>

      {/* VERTICAL STACK OF SLIDES */}
      <div className="relative z-20 w-full">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
          >
            <VerticalSlide {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
