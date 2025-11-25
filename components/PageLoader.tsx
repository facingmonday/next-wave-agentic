"use client";

import { useEffect, useState } from "react";

interface PageLoaderProps {
  onLoadComplete?: () => void;
  minLoadTime?: number; // Minimum time to show loader (ms)
}

export function PageLoader({
  onLoadComplete,
  minLoadTime = 1500,
}: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    let progressInterval: NodeJS.Timeout;

    // Simulate progress
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Accelerate progress, but cap at 90% until everything is ready
        const increment = prev < 90 ? Math.random() * 3 + 1 : 0.1;
        return Math.min(prev + increment, 90);
      });
    };

    progressInterval = setInterval(updateProgress, 50);

    // Wait for page to be fully loaded
    const handleLoad = () => {
      // Ensure minimum load time
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        // Complete progress
        setProgress(100);
        clearInterval(progressInterval);

        // Small delay before hiding to show 100%
        setTimeout(() => {
          setIsLoading(false);
          onLoadComplete?.();
        }, 300);
      }, remaining);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Also wait for ScrollTrigger to be ready (if using GSAP)
    if (typeof window !== "undefined") {
      // Give ScrollTrigger time to initialize
      const scrollTriggerCheck = setInterval(() => {
        if (
          (window as any).ScrollTrigger ||
          document.readyState === "complete"
        ) {
          clearInterval(scrollTriggerCheck);
        }
      }, 100);

      // Cleanup after 5 seconds max
      setTimeout(() => clearInterval(scrollTriggerCheck), 5000);
    }

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, [minLoadTime, onLoadComplete]);

  useEffect(() => {
    // Prevent scrolling while loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      // Small delay before re-enabling scroll to allow fade-out
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 500);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      style={{
        opacity: isLoading ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="loader-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#fc05b9" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#4E79A7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#84596c" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              id="loader-gradient-2"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4E79A7" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#CFC8CF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#84596c" stopOpacity="0.5" />
            </linearGradient>
          </defs>

          {/* Animated flowing lines */}
          {Array.from({ length: 8 }).map((_, i) => {
            const offset = (i * 10) / 8;
            const yStart = offset * 0.8;
            const yEnd = offset * 2.5;
            const x1 = 50 + Math.sin(offset * 0.5) * 12;
            const y1 = offset * 0.8;
            const x2 = 50 + Math.cos(offset) * 8;
            const y2 = offset * 2.5;
            return (
              <path
                key={`line-${i}`}
                d={`M 50,${yStart} Q ${x1},${y1} ${x2},${y2} T 50,${yEnd}`}
                fill="none"
                stroke={`url(#${
                  i % 2 === 0 ? "loader-gradient-1" : "loader-gradient-2"
                })`}
                strokeWidth="0.1"
                opacity={0.7 - i * 0.08}
                className="loader-flow"
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            );
          })}
        </svg>

        {/* Animated gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 loader-pulse"
          style={{
            backgroundColor: "#fc05b9",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 loader-pulse"
          style={{
            backgroundColor: "#4E79A7",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-2 uppercase tracking-wider">
            Kikits
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Loading experience...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 md:w-80 h-1 bg-[#3F395B]/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#fc05b9] via-[#4E79A7] to-[#84596c] rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              boxShadow: `0 0 20px ${progress > 50 ? "#fc05b9" : "#4E79A7"}`,
            }}
          />
        </div>

        {/* Animated dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-[#4E79A7] loader-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
