"use client";

import { useId } from "react";

export function FuturisticBackgroundExample({
  primaryColor = "#fc05b9",
  secondaryColor = "#4E79A7",
  tertiaryColor = "#84596c",
  lineCount = 300,
  lineThickness = "medium",
  intensity = "moderate",
}) {
  const id = useId();

  const baseOpacity =
    intensity === "minimal" ? 0.25 : intensity === "moderate" ? 0.4 : 0.7;

  const strokeWidth =
    lineThickness === "thin" ? 1 : lineThickness === "medium" ? 2 : 3;

  // Super-tall SVG so the diagonal lines scroll naturally
  const SVG_HEIGHT = 3000; // px
  const VIEW_WIDTH = 3000; // wide enough to cover the diagonal length

  // Build diagonal line running top-right → bottom-left at ~45°
  const makeDiagonal = (i: number) => {
    const spacing = 120;
    const xStart = VIEW_WIDTH - i * spacing;
    const yStart = 0;
    const xEnd = -500 - i * spacing;
    const yEnd = SVG_HEIGHT;
    return `M ${xStart} ${yStart} L ${xEnd} ${yEnd}`;
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${SVG_HEIGHT}`}
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-[500vh]"
        style={{ opacity: baseOpacity }}
      >
        <defs>
          <linearGradient id={`grad-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="40%" stopColor={secondaryColor} />
            <stop offset="100%" stopColor={tertiaryColor} />
          </linearGradient>
        </defs>

        {Array.from({ length: lineCount }).map((_, i) => (
          <path
            key={i}
            d={makeDiagonal(i)}
            fill="none"
            stroke={`url(#grad-${id})`}
            strokeWidth={strokeWidth}
            opacity={0.9}
          />
        ))}
      </svg>
    </div>
  );
}
