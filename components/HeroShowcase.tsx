"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { HeroSlide } from "./HeroCarousel";

interface HeroShowcaseProps {
  slides: HeroSlide[];
  cycleDuration?: number;
  className?: string;
}

export default function HeroShowcase({
  slides,
  cycleDuration = 4000,
  className = "",
}: HeroShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(index);
      setProgress(0);
      startTimeRef.current = Date.now();
    },
    []
  );

  const next = useCallback(() => {
    goTo((activeIndex + 1) % slides.length);
  }, [activeIndex, slides.length, goTo]);

  useEffect(() => {
    if (isPaused) return;

    startTimeRef.current = Date.now() - progress * cycleDuration;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(elapsed / cycleDuration, 1);
      setProgress(pct);
      if (pct >= 1) {
        next();
      }
    };

    timerRef.current = setInterval(tick, 30);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex, cycleDuration, next, progress]);

  if (!slides || slides.length === 0) return null;

  const active = slides[activeIndex];

  return (
    <section
      className={`relative h-[100vh] min-h-[700px] bg-black overflow-hidden ${className}`}
    // onMouseEnter={() => setIsPaused(true)}
    // onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images — all mounted, only active one visible */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        >
          <Image
            src={slide.backgroundImage}
            alt=""
            fill
            className="object-cover scale-105"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        </div>
      ))}

      {/* Content grid */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-0 lg:justify-center">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-end lg:items-center">

            {/* Left — vertical tab list */}
            <nav className="hidden lg:flex flex-col gap-1 pt-24">
              {slides.map((slide, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`group relative text-left py-5 pl-8 pr-4 rounded-r-xl transition-all duration-500 ${isActive
                      ? "bg-white/[0.06] backdrop-blur-sm"
                      : "hover:bg-white/[0.03]"
                      }`}
                  >
                    {/* Progress bar on active tab */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-colors duration-300 ${isActive ? "bg-[#fc05b9]" : "bg-white/10 group-hover:bg-white/20"
                        }`}
                    >
                      {isActive && (
                        <div
                          className="absolute top-0 left-0 w-full bg-[#fc05b9] rounded-full transition-none"
                          style={{ height: `${progress * 100}%` }}
                        />
                      )}
                    </div>

                    <span
                      className={`block text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${isActive
                        ? "text-[#fc05b9]"
                        : "text-white/30 group-hover:text-white/50"
                        }`}
                    >
                      {slide.subtitle}
                    </span>
                    <span
                      className={`block text-2xl xl:text-3xl font-bold mt-1 transition-colors duration-300 ${isActive
                        ? "text-white"
                        : "text-white/40 group-hover:text-white/60"
                        }`}
                    >
                      {slide.title}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Right — active slide detail */}
            <div className="relative min-h-[340px] flex flex-col justify-center">
              {/* Mobile title */}
              <div className="lg:hidden mb-6 pt-28">
                <span className="text-[#fc05b9] text-xs font-semibold uppercase tracking-[0.25em]">
                  {active.subtitle}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
                  {active.title}
                </h1>
              </div>

              {/* Description + CTA with crossfade */}
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ease-out ${i === activeIndex
                    ? "opacity-100 translate-y-0 relative"
                    : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                    }`}
                >
                  {/* Large display title — desktop only */}
                  <h2 className="hidden lg:block text-5xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
                    {slide.title}
                  </h2>

                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                    {slide.description}
                  </p>

                  {slide.button && (
                    <div className="flex items-center gap-4">
                      {slide.button.href ? (
                        <Link
                          href={slide.button.href}
                          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#4E79A7] text-white font-semibold transition-all duration-300 hover:bg-[#4E79A7]/85 hover:gap-5"
                        >
                          {slide.button.text}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      ) : (
                        <button
                          onClick={slide.button.onClick}
                          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[#4E79A7] text-white font-semibold transition-all duration-300 hover:bg-[#4E79A7]/85 hover:gap-5"
                        >
                          {slide.button.text}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dots */}
      <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="relative w-3 h-3 rounded-full overflow-hidden"
          >
            <span
              className={`block w-full h-full rounded-full transition-colors duration-300 ${i === activeIndex ? "bg-[#fc05b9]" : "bg-white/30"
                }`}
            />
          </button>
        ))}
      </div>

      {/* Bottom counter — desktop */}
      <div className="hidden lg:flex absolute bottom-10 right-12 z-20 items-center gap-4 text-white/40 text-sm font-mono tracking-wider">
        <span className="text-white font-bold text-lg">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span className="w-12 h-[1px] bg-white/20 relative">
          <span
            className="absolute inset-y-0 left-0 bg-[#fc05b9] transition-none"
            style={{ width: `${progress * 100}%` }}
          />
        </span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
