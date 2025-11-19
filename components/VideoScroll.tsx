"use client";

/**
 * VideoScroll Component - Frame-based video playback on scroll
 *
 * This component displays video frames on scroll by preloading individual frame images
 * and drawing them to a canvas based on scroll position using Framer Motion.
 *
 * To use this component:
 * 1. Extract frames from your video using ffmpeg:
 *    ffmpeg -i input.mp4 public/frames/frame-%03d.jpg
 *
 * 2. Place the frames in your public/frames directory
 *
 * 3. Use the component:
 *    <VideoScroll
 *      totalFrames={192}
 *      framesPath="/frames"
 *      frameFilePattern="frame-%03d.jpg"
 *      scrollDistance={5000}
 *    >
 *      <YourContent />
 *    </VideoScroll>
 */

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface VideoScrollProps {
  totalFrames: number; // Total number of frames (e.g., 192)
  framesPath?: string; // Path to frames directory (e.g., "/frames")
  frameFilePattern?: string; // Pattern for frame files (e.g., "frame-%03d.jpg" or just number like "1.jpg")
  scrollDistance?: number; // Height of scroll container (in pixels)
  sticky?: boolean; // If true, component stays pinned/sticky while scrolling through frames
  contentAlignment?: "left" | "center" | "right";
  /** Optional scroll-linked animation for the overlaid content (e.g. fade + slide) */
  contentAnimationDirection?: "none" | "up" | "down" | "left" | "right";
  /** If true, content will fade in/out with scroll in addition to any slide animation */
  contentFade?: boolean;
  /** Optional React node to show behind the canvas while frames are loading (e.g. blurred poster) */
  fallbackBackground?: React.ReactNode;
  /** Number of frames that must be loaded before we consider the sequence \"ready\" */
  minimumReadyFrames?: number;
  children?: React.ReactNode;
  className?: string;
}

export function VideoScroll({
  totalFrames,
  framesPath = "/frames",
  frameFilePattern = "frame-%03d.jpg",
  scrollDistance = 5000,
  sticky = false,
  contentAlignment = "center",
  contentAnimationDirection = "none",
  contentFade = false,
  fallbackBackground,
  minimumReadyFrames = 32,
  children,
  className = "",
}: VideoScrollProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [loadedFrameCount, setLoadedFrameCount] = useState(0);
  const [hasTimedOut, setHasTimedOut] = useState(false);
  const [hasStartedLoading, setHasStartedLoading] = useState(false);

  const isReady = loadedFrameCount >= Math.min(minimumReadyFrames, totalFrames);

  // Determine padding based on total frames
  const padding = Math.ceil(Math.log10(totalFrames + 1));

  // Helper function to generate frame filename
  const getFrameFileName = useCallback(
    (frameNumber: number) => {
      let frameFileName: string;

      if (frameFilePattern.includes("%")) {
        // Handle patterns like "frame-%03d.jpg"
        const paddedNumber = String(frameNumber).padStart(padding, "0");
        frameFileName = frameFilePattern.replace(/%0*\d*d/g, paddedNumber);
      } else if (frameFilePattern.match(/\.(jpg|jpeg|webp|png)$/i)) {
        // Pattern has extension - check if it's just a number or has a prefix
        if (/^\d+\.(jpg|jpeg|webp|png)$/i.test(frameFilePattern)) {
          // Simple pattern like "1.jpg" - just replace with padded number
          const paddedNumber = String(frameNumber).padStart(padding, "0");
          frameFileName = `${paddedNumber}${
            frameFilePattern.match(/\.(jpg|jpeg|webp|png)$/i)?.[0] || ".jpg"
          }`;
        } else {
          // Pattern like "frame-1.jpg" - replace number with padded number
          const paddedNumber = String(frameNumber).padStart(padding, "0");
          frameFileName = frameFilePattern.replace(/\d+/, paddedNumber);
        }
      } else {
        // Default: just use the number with .jpg extension
        const paddedNumber = String(frameNumber).padStart(padding, "0");
        frameFileName = `${paddedNumber}.jpg`;
      }

      return `${framesPath}/${frameFileName}`;
    },
    [framesPath, frameFilePattern, padding]
  );

  // Preload all frame images with load tracking, but only after we've started loading
  const images = useMemo(() => {
    // Only run in browser environment
    if (typeof window === "undefined" || !hasStartedLoading) {
      return [];
    }

    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = getFrameFileName(i);
      img.onload = () => {
        loadedCount += 1;
        setLoadedFrameCount(loadedCount);
      };
      loadedImages.push(img);
    }

    return loadedImages;
  }, [totalFrames, getFrameFileName, hasStartedLoading]);

  // Setup scroll tracking
  // When sticky, track scroll within the wrapper container (parent of sticky element)
  // When not sticky, track scroll as the container passes through viewport
  const scrollTarget = sticky ? wrapperRef : containerRef;
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to frame index (1 to totalFrames)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);

  // Scroll-linked animation for overlaid content
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    contentFade ? [0, 1, 1, 0] : [1, 1, 1, 1]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    contentAnimationDirection === "up"
      ? [40, 0, -40]
      : contentAnimationDirection === "down"
      ? [-40, 0, 40]
      : [0, 0, 0]
  );

  const contentX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    contentAnimationDirection === "left"
      ? [40, 0, -40]
      : contentAnimationDirection === "right"
      ? [-40, 0, 40]
      : [0, 0, 0]
  );

  const drawImageToCanvas = useCallback(
    (image: HTMLImageElement) => {
      if (!image || !image.complete || image.naturalWidth === 0) return;

      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const isMobile = window.innerWidth < 768;

      let containerWidth: number;
      let containerHeight: number;

      if (sticky) {
        containerWidth = window.innerWidth;
        containerHeight = window.innerHeight;
      } else {
        const rect = container.getBoundingClientRect();
        containerWidth = rect.width || window.innerWidth;
        containerHeight = rect.height || window.innerHeight;
      }

      const imageAspect = image.width / image.height;

      let canvasWidth: number;
      let canvasHeight: number;
      let drawWidth: number;
      let drawHeight: number;
      let drawX: number;
      let drawY: number;

      if (isMobile && sticky) {
        canvasWidth = containerWidth;
        canvasHeight = containerHeight;
        const canvasAspect = canvasWidth / canvasHeight;

        if (imageAspect > canvasAspect) {
          drawHeight = canvasHeight;
          drawWidth = canvasHeight * imageAspect;
          drawX = (canvasWidth - drawWidth) / 2;
          drawY = 0;
        } else {
          drawWidth = canvasWidth;
          drawHeight = canvasWidth / imageAspect;
          drawX = 0;
          drawY = (canvasHeight - drawHeight) / 2;
        }
      } else {
        canvasWidth = containerWidth;
        canvasHeight = containerWidth / imageAspect;
        drawWidth = canvasWidth;
        drawHeight = canvasHeight;
        drawX = 0;
        drawY = 0;
      }

      canvas.width = canvasWidth * dpr;
      canvas.height = canvasHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;

      if (overlayRef.current) {
        overlayRef.current.style.height = `${canvasHeight}px`;
      }
      if (contentRef.current) {
        contentRef.current.style.height = `${canvasHeight}px`;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
    },
    [sticky]
  );

  // Render function - draws the current frame to canvas
  const render = useCallback(
    (index: number) => {
      const frameIndex = Math.max(1, Math.min(totalFrames, Math.round(index)));
      const image = images[frameIndex - 1];

      if (image) {
        drawImageToCanvas(image);
      }
    },
    [images, totalFrames, drawImageToCanvas]
  );

  // Update canvas when scroll index changes
  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  // Render the very first frame as soon as it's available (independent of scroll)
  useEffect(() => {
    let isCancelled = false;
    if (!hasStartedLoading) return;

    const firstFrameImage = new Image();

    firstFrameImage.onload = () => {
      if (!isCancelled) {
        drawImageToCanvas(firstFrameImage);
      }
    };

    firstFrameImage.onerror = () => {
      // If loading fails, try using the preloaded array as fallback
      if (!isCancelled && images[0]) {
        drawImageToCanvas(images[0]);
      }
    };

    firstFrameImage.src = getFrameFileName(1);

    return () => {
      isCancelled = true;
    };
  }, [drawImageToCanvas, getFrameFileName, images, hasStartedLoading]);

  // Timeout for very slow networks – after this we keep showing fallback instead of a broken canvas
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hasStartedLoading) return;

    const timeout = window.setTimeout(() => {
      setHasTimedOut(true);
    }, 3000);

    return () => window.clearTimeout(timeout);
  }, [hasStartedLoading]);

  // Start loading frames slightly before the section enters the viewport
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hasStartedLoading) return;

    const target = sticky ? wrapperRef.current : containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger when the section is about to come into view
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            setHasStartedLoading(true);
          }
        });
      },
      {
        root: null,
        // Start loading when the section is within ~150% viewport height
        rootMargin: "150% 0px 150% 0px",
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [hasStartedLoading, sticky]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const currentFrame = Math.round(Number(currentIndex.get()));
      render(currentFrame);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [render, currentIndex]);

  // Get content alignment classes
  const getContentAlignmentClasses = () => {
    switch (contentAlignment) {
      case "left":
        return "justify-start items-center";
      case "center":
        return "justify-center items-center";
      case "right":
        return "justify-end items-center";
      default:
        return "justify-center items-center";
    }
  };

  const getContentTextAlignClasses = () => {
    switch (contentAlignment) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };

  // When sticky, wrap in a container that provides scroll distance
  // The inner container will stick to the top while scrolling
  if (sticky) {
    return (
      <div
        ref={wrapperRef}
        className="relative"
        style={{
          // Wrapper height controls how long the section stays scrollable
          height: `${scrollDistance}px`,
          position: "relative",
        }}
      >
        <div
          ref={containerRef}
          className={`relative w-full ${className}`}
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            // Visible area is always one full viewport
            height: "100vh",
          }}
        >
          {/* Fallback background / poster while frames are still loading */}
          {!isReady && !hasTimedOut && (
            <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
              {fallbackBackground ?? (
                <div className="flex flex-col items-center justify-center gap-2 text-white/70 text-sm">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  <span>Loading experience…</span>
                </div>
              )}
            </div>
          )}

          {/* Canvas for video frames */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              zIndex: 0,
            }}
          />

          {/* Overlay for better content visibility - matches canvas height */}
          <div
            ref={overlayRef}
            className="absolute top-0 left-0 w-full bg-black/30"
            style={{ height: "100vh" }}
          />

          {/* Content */}
          {children && (
            <motion.div
              ref={contentRef}
              className={`absolute top-0 left-0 w-full flex px-4 md:px-8 lg:px-16 ${getContentAlignmentClasses()}`}
              style={{
                height: "100vh",
                opacity: contentOpacity,
                x: contentX,
                y: contentY,
              }}
            >
              <div className={getContentTextAlignClasses()}>{children}</div>
            </motion.div>
          )}
        </div>
      </div>
    );
  }

  // Non-sticky version (original behavior)
  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{
        height: `${scrollDistance}px`,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Fallback background / poster while frames are still loading */}
      {!isReady && !hasTimedOut && (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
          {fallbackBackground ?? (
            <div className="flex flex-col items-center justify-center gap-2 text-white/70 text-sm">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              <span>Loading experience…</span>
            </div>
          )}
        </div>
      )}

      {/* Canvas for video frames */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
      />

      {/* Overlay for better content visibility - matches canvas height */}
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full bg-black/30 z-10"
      />

      {/* Content */}
      {children && (
        <motion.div
          ref={contentRef}
          className={`absolute top-0 left-0 z-20 w-full flex px-4 md:px-8 lg:px-16 ${getContentAlignmentClasses()}`}
          style={{
            opacity: contentOpacity,
            x: contentX,
            y: contentY,
          }}
        >
          <div className={getContentTextAlignClasses()}>{children}</div>
        </motion.div>
      )}
    </div>
  );
}
