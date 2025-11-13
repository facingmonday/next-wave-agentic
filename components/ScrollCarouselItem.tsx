"use client";

import { ReactNode, useRef, useEffect } from "react";
import type { CarouselAnimationDirection } from "./ScrollCarousel";

export interface ScrollCarouselItemProps {
  children: ReactNode;
  className?: string;
  animation?: CarouselAnimationDirection; // Animation direction for this specific item
  duration?: number; // Animation duration for this specific item (overrides global)
  background?: string; // Background color/classes (defaults to bg-black)
  backgroundImage?: string; // Background image URL
  backgroundOpacity?: number; // Background image opacity (0-1, defaults to 0.5)
}

/**
 * Individual carousel item component.
 * Each item will be animated in sequence as the user scrolls.
 * Each item can have its own animation type (fade, slide, etc.)
 */
export function ScrollCarouselItem({
  children,
  className = "",
  animation,
  duration,
  background = "bg-black",
  backgroundImage,
  backgroundOpacity = 0.5,
}: ScrollCarouselItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemRef.current) {
      // Store animation props as data attributes so ScrollCarousel can read them
      if (animation) {
        itemRef.current.setAttribute("data-animation", animation);
      }
      if (duration !== undefined) {
        itemRef.current.setAttribute("data-duration", duration.toString());
      }
    }
  }, [animation, duration]);

  return (
    <div
      ref={itemRef}
      data-carousel-item
      className={`absolute inset-0 min-h-screen flex items-center justify-center px-4 ${background} ${className}`}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: backgroundOpacity,
          }}
        />
      )}
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
