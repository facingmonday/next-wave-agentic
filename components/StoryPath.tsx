"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface StoryStep {
  title: string;
  body: string;
}

interface StoryPathProps {
  steps: StoryStep[]; // Expecting 5, but will use up to 5
}

// Hard-coded circle positions in the SVG viewBox (0–100)
const CIRCLE_POINTS = [
  { x: 50, y: 10 }, // step 1 – center top
  { x: 20, y: 30 }, // step 2 – left
  { x: 80, y: 50 }, // step 3 – right
  { x: 20, y: 70 }, // step 4 – left
  { x: 50, y: 90 }, // step 5 – center bottom
];

const CIRCLE_RADIUS = 2.5;

// Hard-coded smooth path that passes through the circle area
const PATH_D = [
  "M 50 0", // start a bit above first circle
  "C 50 4, 50 7, 50 10", // into circle 1
  "C 40 18, 30 24, 20 30", // to circle 2 (left)
  "C 30 38, 55 44, 80 50", // to circle 3 (right)
  "C 60 58, 35 64, 20 70", // to circle 4 (left)
  "C 30 80, 40 86, 50 90", // to circle 5 (center) - ends here
].join(" ");

export default function StoryPathSection({ steps }: StoryPathProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const basePathRef = useRef<SVGPathElement | null>(null);
  const progressPathRef = useRef<SVGPathElement | null>(null);
  const circleFillRefs = useRef<(SVGRectElement | null)[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Use at most 5 steps, fill missing with empty placeholders if needed
  const normalizedSteps: StoryStep[] = Array.from({ length: 5 }).map(
    (_, i) => steps[i] || { title: `Step ${i + 1}`, body: "" }
  );

  useEffect(() => {
    const container = containerRef.current;
    const basePath = basePathRef.current;
    const progressPath = progressPathRef.current;

    if (!container || !basePath || !progressPath) return;

    const totalLength = progressPath.getTotalLength();

    // Prepare progress path for "draw" animation
    gsap.set(progressPath, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });

    // Prepare circle fill rects (height 0, starting at top of circle)
    circleFillRefs.current.forEach((rect, i) => {
      if (!rect) return;
      const { x, y } = CIRCLE_POINTS[i];
      gsap.set(rect, {
        x: x - CIRCLE_RADIUS,
        y: y - CIRCLE_RADIUS,
        width: CIRCLE_RADIUS * 2,
        height: 0,
      });
    });

    // Hide all step cards initially
    stepRefs.current.forEach((el) => {
      if (!el) return;
      gsap.set(el, { autoAlpha: 0, y: 40 });
    });

    // Compute approximate length along the path where each circle sits
    const circleProgresses: number[] = CIRCLE_POINTS.map(({ x, y }) => {
      let closestLength = 0;
      let minDist = Infinity;

      const samples = Math.max(Math.floor(totalLength), 200);
      const step = totalLength / samples;

      for (let l = 0; l <= totalLength; l += step) {
        const pt = progressPath.getPointAtLength(l);
        const dx = pt.x - x;
        const dy = pt.y - y;
        const dist = dx * dx + dy * dy;
        if (dist < minDist) {
          minDist = dist;
          closestLength = l;
        }
      }

      return closestLength / totalLength; // 0–1
    });

    // Sort progresses just in case (should already be in order)
    circleProgresses.sort((a, b) => a - b);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=3000", // total scroll distance; tweak as needed
        scrub: true,
        pin: true,
        snap: {
          snapTo: circleProgresses,
          duration: 0.4,
          ease: "power1.inOut",
        },
      },
    });

    // Path draw: whole timeline duration normalized to 1
    tl.to(progressPath, {
      strokeDashoffset: 0,
      ease: "none",
      duration: 1,
    });

    const lastIndex = circleProgresses.length - 1;

    // For each circle + step card, tie into the same timeline
    circleProgresses.forEach((p, i) => {
      const rect = circleFillRefs.current[i];
      const stepEl = stepRefs.current[i];

      // How "wide" the window around the circle is (fraction of entire scroll)
      const fillWindow = 0.1;
      const cardWindow = 0.18;

      const fillStart = Math.max(p - fillWindow / 2, 0);
      const fillEnd = Math.min(p + fillWindow / 2, 1);
      const cardIn = Math.max(p - cardWindow / 2, 0);
      const cardOut = Math.min(p + cardWindow / 2, 1);

      // Circle fill rect: height from 0 → 2R (downwards from top of circle)
      if (rect) {
        tl.fromTo(
          rect,
          { height: 0 },
          {
            height: CIRCLE_RADIUS * 2,
            ease: "none",
            duration: fillEnd - fillStart,
          },
          fillStart
        );
      }

      // Step content card fade in/out
      if (stepEl) {
        tl.fromTo(
          stepEl,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
            duration: cardWindow * 0.4, // quick ease in that fits window
          },
          cardIn
        );

        if (i !== lastIndex) {
          tl.to(
            stepEl,
            {
              autoAlpha: 0,
              y: -40,
              ease: "power2.in",
              duration: cardWindow * 0.4,
            },
            cardOut
          );
        }
      }
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [steps]);

  const setCircleFillRef = (index: number) => (el: SVGRectElement | null) => {
    circleFillRefs.current[index] = el;
  };

  const setStepRef = (index: number) => (el: HTMLDivElement | null) => {
    stepRefs.current[index] = el;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* SVG path + circles */}
      <svg
        className="w-full h-[100vh] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {CIRCLE_POINTS.map((pt, i) => (
            <clipPath id={`circleClip-${i}`} key={`clip-${i}`}>
              <circle cx={pt.x} cy={pt.y} r={CIRCLE_RADIUS} />
            </clipPath>
          ))}
        </defs>

        {/* Base gray path */}
        <path
          ref={basePathRef}
          d={PATH_D}
          stroke="#4b4f4b"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
        />

        {/* Gray circle nodes on the path (visually part of the path) */}
        {CIRCLE_POINTS.map((pt, i) => (
          <circle
            key={`base-circle-${i}`}
            cx={pt.x}
            cy={pt.y}
            r={CIRCLE_RADIUS}
            fill="#4b4f4b"
          />
        ))}

        {/* Progress path (blue) */}
        <path
          ref={progressPathRef}
          d={PATH_D}
          stroke="#45A4FF"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
        />

        {/* Circle fills – revealed from top→bottom via rect + clipPath */}
        {CIRCLE_POINTS.map((pt, i) => (
          <g clipPath={`url(#circleClip-${i})`} key={`fill-${i}`}>
            <rect
              ref={setCircleFillRef(i)}
              // x, y, width, height are set via gsap
              fill="#45A4FF"
            />
          </g>
        ))}
      </svg>

      {/* Step content cards */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-[18vh] px-4 md:px-12 lg:px-24">
        {normalizedSteps.map((step, i) => {
          const pt = CIRCLE_POINTS[i];

          let alignClass = "mx-auto";
          if (pt.x < 35) alignClass = "ml-[5%] mr-auto";
          else if (pt.x > 65) alignClass = "mr-[5%] ml-auto";

          return (
            <div
              key={`step-${i}`}
              ref={setStepRef(i)}
              className={`pointer-events-auto max-w-md md:max-w-lg bg-black/80 border border-white/10 rounded-2xl shadow-xl p-6 md:p-8 ${alignClass}`}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                {step.title}
              </h2>
              {step.body && (
                <p className="text-sm md:text-base text-white/80 whitespace-pre-line">
                  {step.body}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
