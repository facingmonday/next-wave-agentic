"use client";

import { useEffect, useRef, useState } from "react";

export interface ScrollDampenerProps {
  /**
   * Maximum scroll velocity (pixels per frame) before damping kicks in
   * @default 15
   */
  maxVelocity?: number;
  /**
   * Damping factor (0-1). Lower values = more aggressive damping
   * @default 0.5
   */
  dampingFactor?: number;
  /**
   * Minimum velocity threshold below which damping stops
   * @default 2
   */
  minVelocity?: number;
  /**
   * Root margin for intersection observer (when to start monitoring)
   * @default "200px 0px"
   */
  rootMargin?: string;
  /**
   * Additional className for the wrapper
   */
  className?: string;
  /**
   * Children to render
   */
  children?: React.ReactNode;
}

/**
 * ScrollDampener component that slows down fast scrolling when entering a section.
 * Drop this component into a <section> to prevent scroll momentum from carrying over
 * from pinned/sticky components like PinnedHero or HTMLVideoScroll.
 */
export function ScrollDampener({
  maxVelocity = 15,
  dampingFactor = 0.5,
  minVelocity = 2,
  rootMargin = "200px 0px",
  className = "",
  children,
}: ScrollDampenerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isActiveRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const isDampingRef = useRef(false);
  const scrollHistoryRef = useRef<number[]>([]);
  const rafIdRef = useRef<number | null>(null);
  const targetScrollYRef = useRef<number | null>(null);
  const [debugState, setDebugState] = useState({
    isActive: false,
    isDamping: false,
    velocity: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize time tracking
    lastTimeRef.current = performance.now();
    lastScrollYRef.current = window.scrollY;

    // Track scroll velocity using a rolling average for smoother detection
    const handleScroll = () => {
      const now = performance.now();
      const currentScrollY = window.scrollY;
      const timeDelta = now - lastTimeRef.current;

      if (timeDelta > 0 && timeDelta < 100) {
        const scrollDelta = currentScrollY - lastScrollYRef.current;
        // Calculate velocity in pixels per millisecond
        const instantVelocity = Math.abs(scrollDelta / timeDelta);

        // Maintain a rolling history of recent velocities
        scrollHistoryRef.current.push(instantVelocity);
        if (scrollHistoryRef.current.length > 5) {
          scrollHistoryRef.current.shift();
        }

        // Use average velocity for more stable detection
        const avgVelocity =
          scrollHistoryRef.current.length > 0
            ? scrollHistoryRef.current.reduce((a, b) => a + b, 0) /
              scrollHistoryRef.current.length
            : 0;
        // Convert to pixels per frame (assuming 60fps = 16.67ms per frame)
        velocityRef.current = avgVelocity * 16.67;
      }

      lastScrollYRef.current = currentScrollY;
      lastTimeRef.current = now;
    };

    // Active damping loop - continuously applies damping when active
    const applyDamping = () => {
      if (!isActiveRef.current) {
        rafIdRef.current = requestAnimationFrame(applyDamping);
        return;
      }

      const currentVelocity = velocityRef.current;
      const currentScrollY = window.scrollY;

      // Update debug state
      setDebugState({
        isActive: isActiveRef.current,
        isDamping: isDampingRef.current,
        velocity: currentVelocity,
      });

      // Check if we should start damping
      if (currentVelocity > maxVelocity && !isDampingRef.current) {
        isDampingRef.current = true;
        targetScrollYRef.current = currentScrollY;
      }

      // Apply damping if active
      if (isDampingRef.current) {
        if (currentVelocity < minVelocity) {
          // Velocity has dropped, stop damping
          isDampingRef.current = false;
          targetScrollYRef.current = null;
        } else {
          // Apply smooth deceleration
          const scrollDelta =
            currentScrollY - (targetScrollYRef.current ?? currentScrollY);

          // Calculate damping based on velocity
          const velocityRatio = Math.min(currentVelocity / maxVelocity, 1);
          const dynamicDamping =
            dampingFactor + (1 - dampingFactor) * (1 - velocityRatio);

          // Apply damping to reduce scroll distance
          const dampedDelta = scrollDelta * dynamicDamping;
          const newTarget =
            (targetScrollYRef.current ?? currentScrollY) + dampedDelta;

          // Only apply if difference is significant
          if (Math.abs(currentScrollY - newTarget) > 0.5) {
            window.scrollTo({
              top: newTarget,
              behavior: "auto",
            });
            targetScrollYRef.current = newTarget;
          } else {
            targetScrollYRef.current = currentScrollY;
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(applyDamping);
    };

    // Intersection Observer to activate damping when component is near viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isActiveRef.current = true;
            // Reset scroll history when entering to get fresh velocity readings
            scrollHistoryRef.current = [];
            lastScrollYRef.current = window.scrollY;
            lastTimeRef.current = performance.now();
            targetScrollYRef.current = window.scrollY;

            // Check if we should start damping immediately
            if (velocityRef.current > maxVelocity) {
              isDampingRef.current = true;
            }
          } else {
            // Deactivate after leaving viewport
            const rect = container.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) {
              isActiveRef.current = false;
              isDampingRef.current = false;
              targetScrollYRef.current = null;
            }
          }
        });
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    observer.observe(container);

    // Check initial intersection state in case component is already in view
    const rect = container.getBoundingClientRect();
    const isInViewport =
      rect.top < window.innerHeight + 200 && rect.bottom > -200;
    if (isInViewport) {
      isActiveRef.current = true;
      targetScrollYRef.current = window.scrollY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Start the damping loop
    rafIdRef.current = requestAnimationFrame(applyDamping);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [maxVelocity, dampingFactor, minVelocity, rootMargin]);

  // Debug logging
  useEffect(() => {
    if (debugState.isActive || debugState.isDamping) {
      console.log("ScrollDampener", {
        isActive: debugState.isActive,
        isDamping: debugState.isDamping,
        velocity: debugState.velocity.toFixed(2),
      });
    }
  }, [debugState]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
