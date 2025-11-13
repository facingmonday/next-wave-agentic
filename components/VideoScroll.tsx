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

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef } from "react";

export interface VideoScrollProps {
  totalFrames: number; // Total number of frames (e.g., 192)
  framesPath?: string; // Path to frames directory (e.g., "/frames")
  frameFilePattern?: string; // Pattern for frame files (e.g., "frame-%03d.jpg" or just number like "1.jpg")
  scrollDistance?: number; // Height of scroll container (in pixels)
  sticky?: boolean; // If true, component stays pinned/sticky while scrolling through frames
  contentAlignment?: "left" | "center" | "right";
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
  children,
  className = "",
}: VideoScrollProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const firstFrameLoadedRef = useRef(false);

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

  // Preload all frame images
  const images = useMemo(() => {
    // Only run in browser environment
    if (typeof window === "undefined") {
      return [];
    }

    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = getFrameFileName(i);
      loadedImages.push(img);
    }

    return loadedImages;
  }, [totalFrames, getFrameFileName]);

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

  // Render function - draws the current frame to canvas
  const render = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const frameIndex = Math.max(1, Math.min(totalFrames, Math.round(index)));
      const image = images[frameIndex - 1];

      if (image && image.complete && image.naturalWidth > 0) {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        // Always fit to container width, calculate height based on image aspect ratio
        const containerWidth = rect.width;
        const imageAspect = image.width / image.height;
        const canvasHeight = containerWidth / imageAspect;

        // Set canvas size
        canvas.width = containerWidth * dpr;
        canvas.height = canvasHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${containerWidth}px`;
        canvas.style.height = `${canvasHeight}px`;

        // Update overlay and content height to match canvas
        if (overlayRef.current) {
          overlayRef.current.style.height = `${canvasHeight}px`;
        }
        if (contentRef.current) {
          contentRef.current.style.height = `${canvasHeight}px`;
        }
        // Update sticky container height to match canvas
        if (containerRef.current && sticky) {
          containerRef.current.style.height = `${canvasHeight}px`;
        }

        // Clear canvas
        ctx.clearRect(0, 0, containerWidth, canvasHeight);

        // Draw image fitting to width (full width, maintain aspect ratio)
        ctx.drawImage(image, 0, 0, containerWidth, canvasHeight);
      }
    },
    [images, totalFrames, sticky]
  );

  // Update canvas when scroll index changes
  useMotionValueEvent(currentIndex, "change", (latest) => {
    render(Number(latest.toFixed()));
  });

  // Preload and draw first frame immediately on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const firstFrameImg = new Image();
    firstFrameImg.onload = () => {
      firstFrameLoadedRef.current = true;
      // Draw first frame immediately once loaded
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const containerWidth = rect.width || window.innerWidth;
      const imageAspect = firstFrameImg.width / firstFrameImg.height;
      const canvasHeight = containerWidth / imageAspect;

      // Set canvas size
      canvas.width = containerWidth * dpr;
      canvas.height = canvasHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${containerWidth}px`;
      canvas.style.height = `${canvasHeight}px`;

      // Update overlay and content height to match canvas
      if (overlayRef.current) {
        overlayRef.current.style.height = `${canvasHeight}px`;
      }
      if (contentRef.current) {
        contentRef.current.style.height = `${canvasHeight}px`;
      }
      if (containerRef.current && sticky) {
        containerRef.current.style.height = `${canvasHeight}px`;
      }

      // Draw first frame
      ctx.clearRect(0, 0, containerWidth, canvasHeight);
      ctx.drawImage(firstFrameImg, 0, 0, containerWidth, canvasHeight);
    };

    // Load first frame immediately
    firstFrameImg.src = getFrameFileName(1);

    // Also call render as fallback
    render(1);
  }, [render, getFrameFileName, sticky]);

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
        style={{
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
          }}
        >
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
            <div
              ref={contentRef}
              className={`absolute top-0 left-0 z-20 w-full flex px-4 md:px-8 lg:px-16 ${getContentAlignmentClasses()}`}
            >
              <div className={getContentTextAlignClasses()}>{children}</div>
            </div>
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
        <div
          ref={contentRef}
          className={`absolute top-0 left-0 z-20 w-full flex px-4 md:px-8 lg:px-16 ${getContentAlignmentClasses()}`}
        >
          <div className={getContentTextAlignClasses()}>{children}</div>
        </div>
      )}
    </div>
  );
}
