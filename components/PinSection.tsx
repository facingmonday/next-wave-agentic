"use client";

import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface PinSectionProps {
  children: React.ReactNode;
  pinDuration?: number; // Height in pixels to pin for
  startOffset?: string; // When pinning starts
  endOffset?: string; // When pinning ends
  className?: string;
  pinSpacer?: boolean; // Whether to add spacer for pin duration
}

export function PinSection({
  children,
  pinDuration = 1000,
  startOffset = "top top",
  endOffset,
  className = "",
  pinSpacer = true,
}: PinSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const end = endOffset || `+=${pinDuration}`;

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: startOffset,
      end,
      pin: true,
      pinSpacing: pinSpacer,
    });

    // Cleanup
    return () => {
      scrollTrigger.kill();
    };
  }, [pinDuration, startOffset, endOffset, pinSpacer]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
