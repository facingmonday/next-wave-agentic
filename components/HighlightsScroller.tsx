"use client";

import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

export default function HighlightsScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for entire scroller
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Convert children → array
  const slides = React.Children.toArray(children);
  const total = slides.length;

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${total * 100}vh` }}
    >
      {/* The pinned viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {slides.map((child, index) =>
          React.cloneElement(child, {
            index,
            total,
            scrollYProgress,
          })
        )}
      </div>
    </div>
  );
}
