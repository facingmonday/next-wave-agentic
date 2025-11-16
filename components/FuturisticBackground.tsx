"use client";

import { useId } from "react";

export interface FuturisticBackgroundProps {
  // Color options
  primaryColor?: string; // Main line color
  secondaryColor?: string; // Secondary gradient color
  tertiaryColor?: string; // Tertiary gradient color
  // Pattern options
  pattern?: "flowing" | "swirl" | "waves" | "arc" | "all"; // Pattern style
  showOrbs?: boolean; // Show animated gradient orbs
  // Style options
  intensity?: "minimal" | "moderate" | "intense"; // Overall intensity
  opacity?: number; // Base opacity (0-1)
  lineThickness?: "thin" | "medium" | "thick"; // Line thickness
  lineCount?: number; // Number of parallel lines per pattern
  // Animation
  animated?: boolean; // Enable animations
  orbCount?: number; // Number of gradient orbs
}

export function FuturisticBackground({
  primaryColor = "#fc05b9",
  secondaryColor = "#4E79A7",
  tertiaryColor = "#84596c",
  pattern = "all",
  showOrbs = true,
  intensity = "moderate",
  opacity,
  lineThickness = "medium",
  lineCount = 8,
  animated = true,
  orbCount = 2,
}: FuturisticBackgroundProps) {
  // Calculate opacity based on intensity if not explicitly set
  const baseOpacity =
    opacity ??
    (intensity === "minimal" ? 0.6 : intensity === "moderate" ? 0.8 : 1.0);

  // Calculate line width based on thickness
  const lineWidth =
    lineThickness === "thin" ? 1 : lineThickness === "medium" ? 2 : 3;

  // Generate unique IDs for gradients/patterns to avoid conflicts
  const componentId = useId();

  // Create gradient IDs for different patterns
  const gradient1Id = `gradient1-${componentId}`;
  const gradient2Id = `gradient2-${componentId}`;
  const gradient3Id = `gradient3-${componentId}`;
  const gradient4Id = `gradient4-${componentId}`;

  // Helper to normalize floating-point values so SSR and client strings match
  const fmt = (value: number) => Number(value.toFixed(3));

  const showFlowing = pattern === "flowing" || pattern === "all";
  const showSwirl = pattern === "swirl" || pattern === "all";
  const showWaves = pattern === "waves" || pattern === "all";
  const showArc = pattern === "arc" || pattern === "all";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* SVG Pattern for flowing abstract lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ opacity: baseOpacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient 1: Pink/Red/Orange (top-left flowing pattern) */}
          <linearGradient id={gradient1Id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.8" />
            <stop offset="30%" stopColor={secondaryColor} stopOpacity="0.6" />
            <stop offset="60%" stopColor={tertiaryColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor={primaryColor} stopOpacity="0.2" />
          </linearGradient>

          {/* Gradient 2: Light Blue/White/Purple (top-right swirl) */}
          <linearGradient id={gradient2Id} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.6" />
            <stop offset="30%" stopColor="#CFC8CF" stopOpacity="0.8" />
            <stop offset="60%" stopColor={tertiaryColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.3" />
          </linearGradient>

          {/* Gradient 3: Purple/Blue/Magenta (bottom-left waves) */}
          <linearGradient id={gradient3Id} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={tertiaryColor} stopOpacity="0.7" />
            <stop offset="40%" stopColor={secondaryColor} stopOpacity="0.6" />
            <stop offset="70%" stopColor={primaryColor} stopOpacity="0.5" />
            <stop offset="100%" stopColor={tertiaryColor} stopOpacity="0.3" />
          </linearGradient>

          {/* Gradient 4: Orange/Red/Purple/Blue (bottom-right arc) */}
          <linearGradient id={gradient4Id} x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0.6" />
            <stop offset="25%" stopColor={tertiaryColor} stopOpacity="0.7" />
            <stop offset="50%" stopColor={secondaryColor} stopOpacity="0.5" />
            <stop offset="75%" stopColor={primaryColor} stopOpacity="0.4" />
            <stop offset="100%" stopColor={tertiaryColor} stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Top-Left: Flowing ribbon pattern (pink/red/orange) */}
        {showFlowing && (
          <g>
            {Array.from({ length: lineCount }).map((_, i) => {
              // Seeded random function for consistent randomness per line
              const seededRandom = (seed: number) => {
                const x = Math.sin(seed) * 10000;
                return x - Math.floor(x);
              };

              const seed1 = i * 7.3 + 123.456;
              const seed2 = i * 11.7 + 789.012;

              // Random y positions: start on left (0-100), end on right (0-100)
              const yStart = seededRandom(seed1) * 100;
              const yEnd = seededRandom(seed2) * 100;

              // Calculate midpoints to create smooth curves
              const offset = (i * 8) / lineCount;
              const yMid1 = (yStart + yEnd) / 2 + 5 + offset * 0.8;
              const yMid2 = (yStart + yEnd) / 2 - 5 + offset * 0.5;

              const path = `M 0,${fmt(yStart)} Q 25,${fmt(
                yMid1
              )} 50,${fmt(yMid2)} T 100,${fmt(yEnd)}`;
              return (
                <path
                  key={`flowing-${i}`}
                  d={path}
                  fill="none"
                  stroke={`url(#${gradient1Id})`}
                  strokeWidth={lineWidth * 0.1}
                  opacity={0.7 - i * 0.06}
                />
              );
            })}
          </g>
        )}

        {/* Top-Right: Swirling vertical helix pattern (light blue/white/purple) */}
        {showSwirl && (
          <g>
            {Array.from({ length: lineCount }).map((_, i) => {
              const offset = (i * 10) / lineCount;
              const x1 = 50 + Math.sin(offset * 0.5) * 12;
              const y1 = offset * 0.8;
              const x2 = 50 + Math.cos(offset) * 8;
              const y2 = offset * 2.5;
              const y3 = offset * 5;
              const path = `M 50,0 Q ${fmt(x1)},${fmt(y1)} ${fmt(
                x2
              )},${fmt(y2)} T 50,${fmt(y3)}`;
              return (
                <path
                  key={`swirl-${i}`}
                  d={path}
                  fill="none"
                  stroke={`url(#${gradient2Id})`}
                  strokeWidth={lineWidth * 0.1}
                  opacity={0.6 - i * 0.05}
                />
              );
            })}
          </g>
        )}

        {/* Bottom-Left: Undulating S-curve waves (purple/blue/magenta) */}
        {showWaves && (
          <g>
            {Array.from({ length: lineCount }).map((_, i) => {
              // Seeded random function for consistent randomness per line
              const seededRandom = (seed: number) => {
                const x = Math.sin(seed) * 10000;
                return x - Math.floor(x);
              };

              const seed1 = i * 13.7 + 456.789;
              const seed2 = i * 17.3 + 234.567;

              // Random y positions: start on left (0-100), end on right (0-100)
              const yStart = seededRandom(seed1) * 100;
              const yEnd = seededRandom(seed2) * 100;

              // Calculate midpoints for smooth undulating waves
              const offset = (i * 6) / lineCount;
              const midY = (yStart + yEnd) / 2;
              const y1 = midY - 5 - offset * 0.5;
              const y2 = midY + 5 - offset * 0.4;
              const y3 = midY - 5 - offset * 0.6;

              const path = `M 0,${fmt(yStart)} Q 20,${fmt(
                y1
              )} 40,${fmt(y2)} T 80,${fmt(y3)} T 100,${fmt(yEnd)}`;
              return (
                <path
                  key={`waves-${i}`}
                  d={path}
                  fill="none"
                  stroke={`url(#${gradient3Id})`}
                  strokeWidth={lineWidth * 0.1}
                  opacity={0.7 - i * 0.06}
                />
              );
            })}
          </g>
        )}

        {/* Bottom-Right: Broad arc pattern (orange/red/purple/blue) */}
        {showArc && (
          <g>
            {Array.from({ length: lineCount }).map((_, i) => {
              const offset = (i * 9) / lineCount;
              const yStart = 100 - offset * 0.3;
              const x1 = 70 - offset * 0.25;
              const y1 = 70 - offset * 0.4;
              const x2 = 50 - offset * 0.15;
              const y2 = 75 - offset * 0.3;
              const yEnd = 80 - offset * 0.5;
              const path = `M 100,${fmt(yStart)} Q ${fmt(x1)},${fmt(
                y1
              )} ${fmt(x2)},${fmt(y2)} T 0,${fmt(yEnd)}`;
              return (
                <path
                  key={`arc-${i}`}
                  d={path}
                  fill="none"
                  stroke={`url(#${gradient4Id})`}
                  strokeWidth={lineWidth * 0.1}
                  opacity={0.6 - i * 0.05}
                />
              );
            })}
          </g>
        )}
      </svg>

      {/* Animated gradient orbs for depth */}
      {showOrbs && (
        <>
          {Array.from({ length: orbCount }).map((_, i) => {
            const positions = [
              { top: "20%", left: "10%" },
              { bottom: "20%", right: "10%" },
              { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
              { top: "10%", right: "30%" },
              { bottom: "10%", left: "30%" },
            ];
            const pos = positions[i % positions.length];
            return (
              <div
                key={i}
                className={`absolute w-96 h-96 ${
                  secondaryColor.startsWith("#") ? "" : `bg-${secondaryColor}`
                } rounded-full blur-3xl opacity-5`}
                style={{
                  ...pos,
                  backgroundColor: secondaryColor.startsWith("#")
                    ? secondaryColor
                    : undefined,
                  ...(animated && {
                    animation: "pulse 4s ease-in-out infinite",
                    animationDelay: `${i * 0.5}s`,
                  }),
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
