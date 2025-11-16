"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  url?: string;
  tags?: string[];
}

export interface PortfolioCarouselProps {
  items: PortfolioItem[];
  autoScrollSpeed?: number; // pixels per second
  className?: string;
}

export function PortfolioCarousel({
  items,
  autoScrollSpeed = 50,
  className = "",
}: PortfolioCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const animationFunctionRef = useRef<(() => void) | null>(null);
  const isPausedRef = useRef<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const dragOffset = useRef<number>(0);

  // Duplicate items for infinite scroll (3 sets: before, current, after)
  const duplicatedItems = [...items, ...items, ...items];

  // Calculate item width and spacing
  const itemWidth = 400; // Base width for each item
  const itemSpacing = 40; // Space between items

  // Initialize carousel
  useEffect(() => {
    if (!carouselRef.current || !containerRef.current || items.length === 0)
      return;

    const carousel = carouselRef.current;
    const container = containerRef.current;
    const itemSize = itemWidth + itemSpacing;
    const setSize = items.length * itemSize;

    // Set initial position to middle set (start at index = items.length)
    const initialOffset = -setSize;
    gsap.set(carousel, { x: initialOffset });

    // Create infinite scroll animation
    const duration = setSize / autoScrollSpeed;

    const animate = () => {
      // Check pause state from ref to avoid closure issues
      if (isPausedRef.current || isDragging.current) return;

      const currentX = gsap.getProperty(carousel, "x") as number;
      const targetX = currentX - setSize;

      gsap.to(carousel, {
        x: targetX,
        duration: duration,
        ease: "none",
        onComplete: () => {
          // Reset to initial position seamlessly
          gsap.set(carousel, { x: initialOffset });

          // Continue animation if not paused
          if (!isPausedRef.current && !isDragging.current) {
            requestAnimationFrame(() => animate());
          }
        },
      });
    };

    // Store animation function for resume
    animationFunctionRef.current = animate;

    // Start animation
    const tl = gsap.timeline();
    animationRef.current = tl;

    // Start animation immediately
    animate();

    // Update current index based on scroll position
    const updateIndex = () => {
      if (!carouselRef.current || !containerRef.current) return;

      const currentX = gsap.getProperty(carousel, "x") as number;
      const containerWidth = container.offsetWidth;
      const centerX = containerWidth / 2;

      // Calculate which item is at the center
      // Account for initial offset and find relative position
      const relativeX = Math.abs(currentX - initialOffset);
      const relativePosition = (relativeX + centerX - itemWidth / 2) % setSize;
      const index = Math.floor(relativePosition / itemSize);
      const normalizedIndex = Math.max(
        0,
        Math.min(items.length - 1, index % items.length)
      );

      setCurrentIndex(normalizedIndex);
    };

    // Update index periodically
    const updateInterval = setInterval(updateIndex, 100);

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      clearInterval(updateInterval);
    };
  }, [items, itemWidth, itemSpacing, autoScrollSpeed]);

  // Handle pause on hover
  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
    // Pause all GSAP animations on carousel
    if (carouselRef.current) {
      gsap.killTweensOf(carouselRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isDragging.current) {
      isPausedRef.current = false;
      // Resume animation
      if (animationFunctionRef.current) {
        animationFunctionRef.current();
      }
    }
  }, []);

  // Touch/swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
    isPausedRef.current = true;
    if (carouselRef.current) {
      gsap.killTweensOf(carouselRef.current);
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    const currentX = e.touches[0].clientX;
    dragOffset.current = currentX - touchStartX.current;

    // Apply drag offset to carousel
    const currentCarouselX = gsap.getProperty(
      carouselRef.current,
      "x"
    ) as number;
    gsap.set(carouselRef.current, {
      x: currentCarouselX + dragOffset.current * 0.5,
    });
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging.current || !carouselRef.current || !animationRef.current)
      return;

    // Snap to nearest item
    const currentX = gsap.getProperty(carouselRef.current, "x") as number;
    const itemSize = itemWidth + itemSpacing;
    const snappedX = Math.round(currentX / itemSize) * itemSize;

    gsap.to(carouselRef.current, {
      x: snappedX,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        isDragging.current = false;
        dragOffset.current = 0;
        isPausedRef.current = false;
        // Resume animation
        if (animationFunctionRef.current) {
          animationFunctionRef.current();
        }
      },
    });
  }, [itemWidth, itemSpacing]);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
    isDragging.current = true;
    isPausedRef.current = true;
    if (carouselRef.current) {
      gsap.killTweensOf(carouselRef.current);
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    const currentX = e.clientX;
    dragOffset.current = currentX - touchStartX.current;

    const currentCarouselX = gsap.getProperty(
      carouselRef.current,
      "x"
    ) as number;
    gsap.set(carouselRef.current, {
      x: currentCarouselX + dragOffset.current * 0.5,
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    handleTouchEnd();
  }, [handleTouchEnd]);

  // Add global mouse event listeners for dragging
  useEffect(() => {
    const handleWindowMouseMove = (event: MouseEvent) => {
      handleMouseMove(event as unknown as React.MouseEvent);
    };
    const handleWindowMouseUp = () => {
      handleMouseUp();
    };

    if (isDragging.current) {
      window.addEventListener("mousemove", handleWindowMouseMove);
      window.addEventListener("mouseup", handleWindowMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden py-20 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
    >
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

      {/* Carousel container */}
      <div className="relative h-[600px] flex items-center">
        <div
          ref={carouselRef}
          className="flex items-center gap-10"
          style={{
            willChange: "transform",
          }}
        >
          {duplicatedItems.map((item, index) => {
            // Calculate which set this item belongs to (0, 1, or 2)
            const setIndex = Math.floor(index / items.length);
            const itemIndex = index % items.length;

            // Determine if this item is in the center set and matches current index
            // We want to focus on items in the middle set (setIndex === 1)
            const isCenter = setIndex === 1 && itemIndex === currentIndex;

            // Calculate distance from current center item
            let distanceFromCenter: number;
            if (setIndex === 1) {
              // In center set, calculate distance normally
              distanceFromCenter = Math.abs(itemIndex - currentIndex);
            } else if (setIndex === 0) {
              // Before set - check if wrapping around
              distanceFromCenter = Math.abs(
                itemIndex + items.length - currentIndex
              );
            } else {
              // After set - check if wrapping around
              distanceFromCenter = Math.abs(
                itemIndex - items.length - currentIndex
              );
            }

            // Only render items near center for performance
            const isVisible = distanceFromCenter <= 4;

            if (!isVisible) {
              return (
                <div
                  key={`${item.id}-${index}`}
                  style={{
                    width: itemWidth,
                    height: 500,
                  }}
                />
              );
            }

            // Calculate scale and opacity based on distance from center
            const scale = isCenter
              ? 1.2
              : Math.max(0.7, 1 - distanceFromCenter * 0.15);
            const opacity = isCenter
              ? 1
              : Math.max(0.4, 1 - distanceFromCenter * 0.2);

            return (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 transition-all duration-300 ease-out"
                style={{
                  width: itemWidth,
                  transform: `scale(${scale})`,
                  opacity,
                  zIndex: isCenter ? 10 : 5 - distanceFromCenter,
                }}
              >
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl group hover:border-[#fc05b9] transition-colors duration-300">
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="400px"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-[#fc05b9]/20 text-[#fc05b9] rounded-full border border-[#fc05b9]/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-[#fc05b9]/0 group-hover:bg-[#fc05b9]/10 transition-colors duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Center indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex gap-2">
          {items.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-[#fc05b9]" : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
