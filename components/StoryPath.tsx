"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface StoryStep {
  icon?: ReactNode; // icon rendered inside the circle
  iconColor: string; // background color of the icon circle
  title: string; // text shown in the white pill
}

interface StoryPathProps {
  steps: StoryStep[]; // expects up to 5, will normalize to 5
}

const GAP_SIZE = 8;

// Define circle positions - positioned to create gaps like step 3
const CIRCLE_POINTS = [
  { x: 50, y: 10 }, // step 1: above the start of the line
  { x: 50, y: 50 }, // step 2: centered in gap (between segment 1 end and segment 2 start)
  { x: 50, y: 90 }, // step 3: centered in gap - reference point (perfect alignment)
  { x: 50, y: 130 }, // step 4: centered in gap (between segment 3 end and segment 4 start)
  { x: 50, y: 170 }, // step 5: below the end of the line
];

const ROUTE_PATH_SEGMENTS = [
  // Segment 1: from line start to above circle 2
  `M 50 24 L 50 52`,
  // Segment 2: from below circle 2 to above circle 3
  `M 50 60 L 50 88`,
  // Segment 3: from below circle 3 to above circle 4
  `M 50 94 L 50 122`,
  // Segment 4: from below circle 4 to line end
  `M 50 130 L 50 156`,
];

export default function StoryPath({ steps }: StoryPathProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressPathRefs = useRef<(SVGPathElement | null)[]>(
    Array(ROUTE_PATH_SEGMENTS.length).fill(null)
  );

  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Normalize to exactly 5 steps
  const normalizedSteps: StoryStep[] = Array.from({ length: 5 }).map(
    (_, i) =>
      steps[i] || {
        icon: undefined,
        iconColor: "#45A4FF",
        title: `Step ${i + 1}`,
      }
  );

  useEffect(() => {
    const container = containerRef.current;
    const progressPaths = progressPathRefs.current.filter(
      Boolean
    ) as SVGPathElement[];

    if (!container || progressPaths.length === 0) return;

    // Calculate total length of all segments
    const segmentLengths = progressPaths.map((path) => path.getTotalLength());
    const totalLength = segmentLengths.reduce((sum, len) => sum + len, 0);

    // Initialize each path segment: fully hidden at start
    progressPaths.forEach((path) => {
      const len = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: len,
        strokeDashoffset: len,
      });
    });

    // Icons & pills hidden initially
    iconRefs.current.forEach((icon) => {
      if (!icon) return;
      gsap.set(icon, { autoAlpha: 0, scale: 0.6 });
    });
    pillRefs.current.forEach((pill) => {
      if (!pill) return;
      gsap.set(pill, { autoAlpha: 0, scaleX: 0.4, x: -8 });
    });

    // Calculate scroll progress where each circle appears
    // Circles appear at the transitions between segments (at the gaps)
    // - Circle 1: at start (0%) - appears immediately, path starts from below it
    // - Circle 2: after segment 1 completes
    // - Circle 3: after segment 2 completes
    // - Circle 4: after segment 3 completes
    // - Circle 5: after segment 4 completes (100%)
    const circleProgresses: number[] = [0]; // First circle at start
    let cumulativeProgress = 0; // First segment starts immediately
    segmentLengths.forEach((length) => {
      const segmentProgress = length / totalLength;
      cumulativeProgress += segmentProgress;
      circleProgresses.push(cumulativeProgress);
    });

    // Ensure last circle is exactly at 100%
    circleProgresses[circleProgresses.length - 1] = 1;

    const lastIndex = circleProgresses.length - 1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        // Start anim when section top hits bottom of viewport,
        // end when section bottom leaves top of viewport.
        start: "top bottom",
        end: "bottom top",
        scrub: 0, // Instant response - no lag behind scroll
        snap: {
          snapTo: circleProgresses,
          duration: 0.4,
          ease: "power1.inOut",
        },
      },
    });

    // Animate each path segment in sequence
    // First segment starts immediately from below circle 1
    cumulativeProgress = 0;
    progressPaths.forEach((path, segmentIndex) => {
      const segmentLength = segmentLengths[segmentIndex];
      const segmentProgress = segmentLength / totalLength;

      // Animate this segment
      tl.to(
        path,
        {
          strokeDashoffset: 0,
          ease: "none",
          duration: segmentProgress,
        },
        cumulativeProgress
      );

      cumulativeProgress += segmentProgress;
    });

    // For each step: icon appears, pill expands, then pill collapses
    circleProgresses.forEach((p, i) => {
      const icon = iconRefs.current[i];
      const pill = pillRefs.current[i];

      // Window of scroll progress around each step
      // Increased from 0.2 to 0.3 to give more time for steps to appear during fast scrolling
      const activeWindow = 0.3;
      const appearStart = Math.max(p - activeWindow / 2, 0);
      const appearEnd = Math.min(p + activeWindow / 2, 1);

      // ICON: appears when we approach the step, stays visible forever after
      if (icon) {
        tl.fromTo(
          icon,
          { autoAlpha: 0, scale: 0.6 },
          {
            autoAlpha: 1,
            scale: 1,
            ease: "back.out(1.5)",
            duration: activeWindow * 0.5,
          },
          appearStart
        );
      }

      // PILL: expands when at the step, collapses when leaving
      if (pill) {
        // expand
        tl.fromTo(
          pill,
          { autoAlpha: 0, scaleX: 0.4, x: -8 },
          {
            autoAlpha: 1,
            scaleX: 1,
            x: 0,
            ease: "power2.out",
            duration: activeWindow * 0.4,
          },
          appearStart
        );

        // collapse for all but last step
        // Delay collapse for later steps to ensure they're visible even during fast scrolling
        if (i !== lastIndex) {
          const collapseDelay = i >= 2 ? activeWindow * 0.2 : 0; // Extra delay for steps 3, 4, 5
          tl.to(
            pill,
            {
              autoAlpha: 0,
              scaleX: 0.4,
              x: -8,
              ease: "power2.in",
              duration: activeWindow * 0.4,
            },
            appearEnd + collapseDelay
          );
        }
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [steps]);

  const setIconRef = (index: number) => (el: HTMLDivElement | null) => {
    iconRefs.current[index] = el;
  };

  const setPillRef = (index: number) => (el: HTMLDivElement | null) => {
    pillRefs.current[index] = el;
  };

  const setPathRef = (index: number) => (el: SVGPathElement | null) => {
    progressPathRefs.current[index] = el;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black text-white overflow-hidden min-h-[350vh]"
    >
      {/* Map + route SVG (scrolls with section) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Base route segments (gray) */}
        {ROUTE_PATH_SEGMENTS.map((segmentPath, index) => (
          <path
            key={`base-${index}`}
            d={segmentPath}
            stroke="#4b4f4b"
            strokeWidth={1.5}
            strokeLinecap="round"
            fill="none"
          />
        ))}

        {/* Progress route segments (blue) */}
        {ROUTE_PATH_SEGMENTS.map((segmentPath, index) => (
          <path
            key={`progress-${index}`}
            ref={setPathRef(index)}
            d={segmentPath}
            stroke="#45A4FF"
            strokeWidth={1.5}
            strokeLinecap="round"
            fill="none"
          />
        ))}
      </svg>

      {/* Markers (icon circle + white pill) */}
      <div className="absolute inset-0">
        {normalizedSteps.map((step, i) => {
          const pt = CIRCLE_POINTS[i];
          const topPercent = (pt.y / 200) * 100;
          const leftPercent = (pt.x / 100) * 100;

          return (
            <div
              key={`marker-${i}`}
              className="absolute"
              style={{
                top: `${topPercent}%`,
                left: `${leftPercent}%`,
              }}
            >
              {/* Icon circle (centered on SVG line point) */}
              <div
                ref={setIconRef(i)}
                className="absolute h-14 w-14 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  backgroundColor: step.iconColor,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {step.icon}
              </div>

              {/* White pill with title (appears to the right of circle) */}
              <div
                ref={setPillRef(i)}
                className="absolute origin-left rounded-full bg-white text-black px-4 py-2 shadow-lg whitespace-nowrap text-sm md:text-base font-medium"
                style={{
                  left: "24px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                {step.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
