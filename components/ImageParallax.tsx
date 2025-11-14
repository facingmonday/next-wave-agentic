"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface ImageParallaxProps {
  imageSrc: string;
  strength?: number; // Parallax strength (0-1, where 1 is full parallax)
  startOffset?: string;
  endOffset?: string;
  className?: string;
  children?: React.ReactNode;
  alt?: string;
}

export function ImageParallax({
  imageSrc,
  strength = 0.5,
  startOffset = "top bottom",
  endOffset = "bottom top",
  className = "",
  children,
  alt = "",
}: ImageParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const image = imageRef.current;
    const container = containerRef.current;

    // Calculate parallax distance based on strength
    const parallaxDistance = strength * 200; // Max 200px movement

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: startOffset,
      end: endOffset,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const y = (progress - 0.5) * parallaxDistance * 2;
        gsap.set(image, { y });
      },
    });

    // Cleanup
    return () => {
      scrollTrigger.kill();
    };
  }, [imageSrc, strength, startOffset, endOffset]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        height: "100vh",
        minHeight: "100vh",
      }}
    >
      <img
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          height: "100vh",
          objectFit: "cover",
        }}
      />
      {children && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {children}
        </div>
      )}
    </div>
  );
}
