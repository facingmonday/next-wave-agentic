'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'opacity' | 'scale';

export interface PinSectionWithAnimationProps {
  children: React.ReactNode;
  animationDirection?: AnimationDirection;
  animationDuration?: number; // Duration per child in seconds
  stagger?: number; // Delay between each child animation
  scrollDistance?: number; // Total scroll distance in pixels (auto-calculated if not provided)
  startOffset?: string; // When pinning starts
  className?: string;
  pinSpacer?: boolean;
}

export function PinSectionWithAnimation({
  children,
  animationDirection = 'opacity',
  animationDuration = 1,
  stagger = 0.3,
  scrollDistance,
  startOffset = 'top top',
  className = '',
  pinSpacer = true,
}: PinSectionWithAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    
    // Find all direct child elements that should be animated
    // If there's a wrapper, look for children inside it
    let childElements: HTMLElement[] = [];
    
    // First, try direct children
    const directChildren = Array.from(element.children) as HTMLElement[];
    
    // If there's only one child and it's a container, look inside it
    if (directChildren.length === 1) {
      const wrapper = directChildren[0];
      childElements = Array.from(wrapper.children) as HTMLElement[];
    } else {
      childElements = directChildren;
    }

    if (childElements.length === 0) return;

    // Get initial state based on direction
    const getInitialState = () => {
      switch (animationDirection) {
        case 'up':
          return { y: 80, opacity: 0, pointerEvents: 'none', visibility: 'hidden' };
        case 'down':
          return { y: -80, opacity: 0, pointerEvents: 'none', visibility: 'hidden' };
        case 'left':
          return { x: 80, opacity: 0, pointerEvents: 'none', visibility: 'hidden' };
        case 'right':
          return { x: -80, opacity: 0, pointerEvents: 'none', visibility: 'hidden' };
        case 'opacity':
          return { opacity: 0, pointerEvents: 'none', visibility: 'hidden' };
        case 'scale':
          return { scale: 0.7, opacity: 0, pointerEvents: 'none', visibility: 'hidden' };
        default:
          return { opacity: 0, pointerEvents: 'none', visibility: 'hidden' };
      }
    };

    const initialState = getInitialState();
    const finalState = { x: 0, y: 0, scale: 1, opacity: 1, pointerEvents: 'auto', visibility: 'visible' };
    const fadeOutState = { opacity: 0, pointerEvents: 'none', visibility: 'hidden' };

    // Set initial styles for all children
    childElements.forEach((child, index) => {
      // First slide should be visible initially, others hidden
      if (index === 0) {
        gsap.set(child, { ...finalState, opacity: 1, visibility: 'visible' });
      } else {
        gsap.set(child, initialState);
      }
    });

    // Create timeline for animations
    const tl = gsap.timeline({ paused: true });
    timelineRef.current = tl;

    // Calculate timing
    // animationDuration = how long each slide stays fully visible
    // stagger = transition/crossfade duration between slides
    const totalSlides = childElements.length;
    const segmentDuration = animationDuration; // Time slide is fully visible
    const transitionDuration = stagger; // Crossfade duration

    // Start timeline with first slide already visible
    // Set first slide to final state at time 0
    if (childElements.length > 0) {
      tl.set(childElements[0], finalState, 0);
    }

    // Animate each slide: fade in, stay visible, then fade out as next fades in
    childElements.forEach((child, index) => {
      // Calculate when this slide starts (previous slide's fade out overlaps with this fade in)
      const slideStartTime = index * (segmentDuration + transitionDuration);
      
      // For first slide, it's already visible, so we just need to handle fade out
      if (index === 0) {
        // First slide fades out when second slide starts
        if (totalSlides > 1) {
          tl.to(
            child,
            {
              ...fadeOutState,
              duration: transitionDuration,
              ease: 'power2.in',
            },
            slideStartTime + segmentDuration
          );
        }
      } else {
        // Fade in (overlaps with previous slide fading out)
        tl.to(
          child,
          {
            ...finalState,
            duration: transitionDuration,
            ease: 'power2.out',
          },
          slideStartTime
        );

        // Fade out when next slide starts fading in (except for last slide)
        if (index < totalSlides - 1) {
          const fadeOutStartTime = slideStartTime + segmentDuration;
          tl.to(
            child,
            {
              ...fadeOutState,
              duration: transitionDuration,
              ease: 'power2.in',
            },
            fadeOutStartTime
          );
        }
      }
    });

    // Calculate total animation duration
    // Last slide doesn't fade out, so: (n-1) segments + (n-1) transitions + 1 final segment
    const totalDuration = (totalSlides - 1) * (segmentDuration + transitionDuration) + segmentDuration;
    
    // Calculate scroll distance (default: 100px per second of animation)
    const calculatedScrollDistance = scrollDistance || totalDuration * 100;

    // Create ScrollTrigger that pins and scrubs the timeline
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: startOffset,
      end: `+=${calculatedScrollDistance}`,
      pin: true,
      pinSpacing: pinSpacer,
      scrub: 1, // Smooth scrubbing with 1 second lag
      onUpdate: (self) => {
        // Update timeline progress based on scroll progress
        const progress = self.progress;
        tl.progress(progress);
      },
    });

    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      scrollTrigger.kill();
    };
  }, [
    animationDirection,
    animationDuration,
    stagger,
    scrollDistance,
    startOffset,
    pinSpacer,
  ]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
    </div>
  );
}

