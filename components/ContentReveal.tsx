'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'opacity' | 'scale';

export interface ContentRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  startOffset?: string; // GSAP ScrollTrigger start value (e.g., "top 80%")
  endOffset?: string; // GSAP ScrollTrigger end value
  duration?: number; // Animation duration in seconds
  delay?: number; // Delay before animation starts
  className?: string;
  stagger?: number; // Stagger delay for child elements (in seconds)
}

export function ContentReveal({
  children,
  direction = 'up',
  startOffset = 'top 80%',
  endOffset = 'top 20%',
  duration = 1,
  delay = 0,
  className = '',
  stagger = 0,
}: ContentRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const childElements = Array.from(element.children) as HTMLElement[];

    // Set initial state based on direction
    const getInitialState = () => {
      switch (direction) {
        case 'up':
          return { y: 60, opacity: 0 };
        case 'down':
          return { y: -60, opacity: 0 };
        case 'left':
          return { x: 60, opacity: 0 };
        case 'right':
          return { x: -60, opacity: 0 };
        case 'opacity':
          return { opacity: 0 };
        case 'scale':
          return { scale: 0.8, opacity: 0 };
        default:
          return { y: 60, opacity: 0 };
      }
    };

    const initialState = getInitialState();
    const finalState = { x: 0, y: 0, scale: 1, opacity: 1 };

    // Set initial styles
    const targets = childElements.length > 0 ? childElements : [element];
    gsap.set(targets, initialState);

    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: startOffset,
        end: endOffset,
        toggleActions: 'play none none reverse',
      },
      delay,
    });

    // Animate children with stagger or single element
    if (childElements.length > 0 && stagger > 0) {
      tl.to(childElements, {
        ...finalState,
        duration,
        stagger,
        ease: 'power3.out',
      });
    } else {
      tl.to(targets, {
        ...finalState,
        duration,
        ease: 'power3.out',
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, startOffset, endOffset, duration, delay, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

