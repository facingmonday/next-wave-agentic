"use client";

import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export interface HTMLVideoScrollProps {
  videoSrc: string;
  posterSrc?: string;
  scrollDistance?: number;
  virtualFps?: number;
  sticky?: boolean;
  contentAlignment?: "left" | "center" | "right";
  contentAnimationDirection?: "none" | "up" | "down" | "left" | "right";
  contentFade?: boolean;
  fallbackBackground?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export function HTMLVideoScroll({
  videoSrc,
  posterSrc,
  scrollDistance = 4000,
  virtualFps = 30,
  sticky = false,
  contentAlignment = "center",
  contentAnimationDirection = "none",
  contentFade = false,
  fallbackBackground,
  children,
  className = "",
}: HTMLVideoScrollProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [duration, setDuration] = useState<number | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  /* 
    Smooth scroll → time
    Extremely helpful for reducing seek-jitter
  */
  const targetTime = useMotionValue(0);
  const smoothTime = useSpring(targetTime, {
    stiffness: 200,
    damping: 28,
    mass: 0.4,
  });

  /* 
    Scroll tracking 
  */
  const scrollTarget = sticky ? wrapperRef : containerRef;
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end start"],
  });

  /** Content animations */
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    contentFade ? [0, 1, 1, 0] : [1, 1, 1, 1]
  );

  const slide = {
    up: [40, 0, -40],
    down: [-40, 0, 40],
    left: [40, 0, -40],
    right: [-40, 0, 40],
    none: [0, 0, 0],
  }[contentAnimationDirection];

  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], slide);
  const contentX = useTransform(scrollYProgress, [0, 0.5, 1], slide);

  // Throttle logic (prevents Chrome freeze)
  let lastSeek = 0;

  /**
   * Seek the video safely
   */
  useMotionValueEvent(smoothTime, "change", (latest) => {
    const video = videoRef.current;
    if (!video || !isReady || duration == null) return;

    const now = performance.now();
    if (now - lastSeek < 40) return; // limit to 25 seeks per second
    lastSeek = now;

    if (!video.paused) video.pause();

    const frameDuration = 1 / virtualFps;
    if (Math.abs(video.currentTime - latest) > frameDuration / 2) {
      video.currentTime = latest;
    }
  });

  /**
   * Map scroll → virtual time
   */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!duration || !isReady) return;

    const rawTime = v * duration;
    const frameDuration = 1 / virtualFps;
    const frameIndex = Math.round(rawTime / frameDuration);
    targetTime.set(frameIndex * frameDuration);
  });

  /**
   * Intersection observer: start loading only when near viewport
   */
  useEffect(() => {
    const target = sticky ? wrapperRef.current : containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
        }
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [sticky]);

  /**
   * Video loaded event listeners
   */
  const onMetadata = useCallback((e: any) => {
    setDuration(e.target.duration || null);
  }, []);

  const onLoadedData = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Only allow scrubbing once browser can decode all frames
    if (video.readyState >= 4) {
      setIsReady(true);
    }
  }, []);

  const onCanPlay = useCallback(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 4) {
      setIsReady(true);
    }
  }, []);

  /** Alignment helpers */
  const alignment = {
    left: "justify-start items-center",
    center: "justify-center items-center",
    right: "justify-end items-center",
  }[contentAlignment];

  const textAlign = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[contentAlignment];

  /* --------------------  RENDER  -------------------- */

  const StickyWrapper = sticky ? (
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: scrollDistance }}
    >
      <div
        ref={containerRef}
        className={`relative w-full ${className}`}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "black",
        }}
      >
        {/* Video */}
        {shouldLoad && (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedMetadata={onMetadata}
            onLoadedData={onLoadedData}
            onCanPlay={onCanPlay}
            style={{
              visibility: isReady ? "visible" : "hidden",
            }}
          />
        )}

        {/* Loader */}
        {!isReady && (
          <div className="absolute inset-0 bg-black flex items-center justify-center text-white/70">
            {fallbackBackground ?? (
              <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 border-2 border-white/30 border-t-white animate-spin rounded-full" />
                Loading…
              </div>
            )}
          </div>
        )}

        {/* Content */}
        {children && (
          <motion.div
            className={`absolute inset-0 flex px-8 ${alignment}`}
            style={{ opacity: contentOpacity, x: contentX, y: contentY }}
          >
            <div className={textAlign}>{children}</div>
          </motion.div>
        )}
      </div>
    </div>
  ) : null;

  if (sticky) return StickyWrapper;

  /* ----------- NON-STICKY MODE ----------- */

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        height: scrollDistance,
        background: "black",
      }}
    >
      {shouldLoad && (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedMetadata={onMetadata}
          onLoadedData={onLoadedData}
          onCanPlay={onCanPlay}
          style={{
            visibility: isReady ? "visible" : "hidden",
          }}
        />
      )}

      {!isReady && (
        <div className="absolute inset-0 bg-black flex items-center justify-center text-white/70">
          {fallbackBackground ?? (
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-8 border-2 border-white/30 border-t-white animate-spin rounded-full" />
              Loading…
            </div>
          )}
        </div>
      )}

      {children && (
        <motion.div
          className={`absolute inset-0 flex px-8 ${alignment}`}
          style={{ opacity: contentOpacity, x: contentX, y: contentY }}
        >
          <div className={textAlign}>{children}</div>
        </motion.div>
      )}
    </div>
  );
}
