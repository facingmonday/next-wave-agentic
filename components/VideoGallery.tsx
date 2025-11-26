"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { VimeoVideo } from "./VimeoVideo";
import { motion, useInView } from "framer-motion";

// Mobile breakpoint - matches Tailwind's md breakpoint (768px)
const MOBILE_BREAKPOINT = 768;

export interface VideoGalleryItem {
  id?: string;
  videoUrl: string;
  thumbnailUrl?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
}

export interface VideoGalleryProps {
  videos: VideoGalleryItem[];
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  buttonClassName?: string;
  showThumbnails?: boolean;
}

export function VideoGallery({
  videos,
  className = "",
  titleClassName = "text-white",
  subtitleClassName = "text-white",
  buttonClassName = "inline-block px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors",
  showThumbnails = true,
}: VideoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  // Detect mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Check if section is in view for initial animation
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const videoVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const textVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const thumbnailsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8,
      },
    },
  };

  const thumbnailItemVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
      },
    },
  };

  // Transition configs
  const slideTransition = {
    duration: 1.2,
    ease: "easeOut" as const,
  };

  const activeVideo = videos[activeIndex];

  if (!videos || videos.length === 0) return null;

  const handleThumbnailClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleCta = () => {
    if (!activeVideo) return;
    if (activeVideo.ctaOnClick) {
      activeVideo.ctaOnClick();
    } else if (activeVideo.ctaHref) {
      window.location.href = activeVideo.ctaHref;
    }
  };

  // Mobile: simple vertical stack layout
  if (isMobile) {
    return (
      <section
        ref={sectionRef}
        className={`w-full max-w-7xl mx-auto px-6 ${className}`}
      >
        <div className="w-full flex flex-col gap-6">
          {/* Title on top */}
          <h2
            className={`text-2xl font-semibold text-center ${titleClassName}`}
          >
            {activeVideo.title}
          </h2>

          {/* Video in middle */}
          <div className="relative w-full rounded-3xl border border-slate-300 bg-slate-100 overflow-hidden">
            <VimeoVideo
              key={activeVideo.videoUrl}
              vimeoUrl={activeVideo.videoUrl}
              controls={true}
              responsive={true}
              className="rounded-3xl"
            />
          </div>

          {/* Subtitle and button below */}
          <div className="flex flex-col gap-4 items-center text-center">
            {activeVideo.subtitle && (
              <p className={`text-sm leading-relaxed ${subtitleClassName}`}>
                {activeVideo.subtitle}
              </p>
            )}

            {activeVideo.ctaLabel && (
              <button
                type="button"
                onClick={handleCta}
                className={buttonClassName}
              >
                {activeVideo.ctaLabel}
              </button>
            )}
          </div>

          {/* Thumbnails row at bottom */}
          <div className="mt-6 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
            <div className="flex gap-4 min-w-max pb-2">
              {videos.map((video, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={video.id ?? index}
                    type="button"
                    onClick={() => handleThumbnailClick(index)}
                    className={`group flex flex-col items-center w-[200px] flex-shrink-0 focus:outline-none`}
                  >
                    <div
                      className={`relative w-full rounded-2xl bg-slate-100 aspect-[4/3] overflow-hidden ${
                        isActive
                          ? "border-2 border-slate-500 shadow-md"
                          : "border border-slate-300"
                      }`}
                    >
                      {video.thumbnailUrl ? (
                        <Image
                          src={video.thumbnailUrl}
                          alt={video.title}
                          width={200}
                          height={150}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 border border-slate-400">
                            <div className="ml-0.5 h-0 w-0 border-y-[5px] border-y-transparent border-l-[8px] border-l-slate-600" />
                          </div>
                        </div>
                      )}

                      {isActive && (
                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-slate-900/70" />
                      )}
                    </div>
                    <p
                      className={`mt-2 text-xs font-medium text-center truncate w-full text-white`}
                    >
                      {video.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop: original layout with video on left, text on right
  return (
    <section
      ref={sectionRef}
      className={`w-full max-w-7xl mx-auto ${className}`}
    >
      {/* Top: Featured video + text */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
        {/* Featured video */}
        <motion.div
          key={`video-${activeIndex}`} // Re-animate when activeIndex changes
          className="w-full md:w-3/5"
          variants={videoVariants}
          initial="hidden"
          animate={isInView || activeIndex > 0 ? "visible" : "hidden"}
          transition={slideTransition}
        >
          <div className="relative w-full rounded-3xl border border-slate-300 bg-slate-100 overflow-hidden">
            <VimeoVideo
              key={activeVideo.videoUrl} // force reload on change
              vimeoUrl={activeVideo.videoUrl}
              controls={true}
              responsive={true}
              className="rounded-3xl"
            />
          </div>
        </motion.div>

        {/* Text / CTA */}
        <motion.div
          key={`text-${activeIndex}`} // Re-animate when activeIndex changes
          className="w-full md:w-2/5 flex flex-col"
          variants={textVariants}
          initial="hidden"
          animate={isInView || activeIndex > 0 ? "visible" : "hidden"}
          transition={slideTransition}
        >
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 ${titleClassName}`}
          >
            {activeVideo.title}
          </h2>
          {activeVideo.subtitle && (
            <p
              className={`text-sm md:text-base leading-relaxed mb-5 ${subtitleClassName}`}
            >
              {activeVideo.subtitle}
            </p>
          )}

          {activeVideo.ctaLabel && (
            <button
              type="button"
              onClick={handleCta}
              className={buttonClassName}
            >
              {activeVideo.ctaLabel}
            </button>
          )}
        </motion.div>
      </div>

      {/* Bottom: Thumbnail scroller */}
      {showThumbnails && (
        <motion.div
          ref={thumbnailsRef}
          className="mt-10 flex items-center gap-4"
          variants={thumbnailsVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Thumbnails row */}
          <div
            ref={scrollerRef}
            className="flex-1 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent"
          >
            <div className="flex gap-4 min-w-max">
              {videos.map((video, index) => {
                const isActive = index === activeIndex;
                const isHovered = hoveredIndex === index;
                return (
                  <motion.div
                    key={video.id ?? index}
                    variants={thumbnailItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <button
                      type="button"
                      onClick={() => handleThumbnailClick(index)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`group flex flex-col items-center w-[270px] flex-shrink-0 focus:outline-none`}
                    >
                      <div
                        className={`relative w-full rounded-3xl bg-slate-100 aspect-[4/3] overflow-hidden ${
                          isActive ? "border border-slate-300 shadow-md" : ""
                        }`}
                      >
                        {video.thumbnailUrl ? (
                          // thumbnail image
                          <Image
                            src={video.thumbnailUrl}
                            alt={video.title}
                            width={270}
                            height={203}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          // placeholder surface
                          <div className="h-full w-full flex items-center justify-center">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 border border-slate-400">
                              <div
                                className="ml-0.5 h-0 w-0 border-y-[6px] border-y-transparent 
                                       border-l-[10px] border-l-slate-600"
                              />
                            </div>
                          </div>
                        )}

                        {/* active ring */}
                        {isActive && (
                          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-slate-900/70" />
                        )}

                        {/* Hover overlay - slides up from bottom */}
                        <div
                          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent backdrop-blur-sm transition-all duration-300 ease-out rounded-b-3xl ${
                            isHovered
                              ? "translate-y-0 opacity-100"
                              : "translate-y-full opacity-0"
                          }`}
                        >
                          <div className="p-4 text-center">
                            <h3 className="text-lg md:text-xl font-bold text-white">
                              {video.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
