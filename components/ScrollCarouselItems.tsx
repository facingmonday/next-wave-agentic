'use client';

import { ReactNode } from 'react';

export interface ScrollCarouselItemsProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper component for ScrollCarouselItem components.
 * This provides a container for carousel items and ensures proper layout.
 */
export function ScrollCarouselItems({
  children,
  className = '',
}: ScrollCarouselItemsProps) {
  return (
    <div className={`relative w-full min-h-screen ${className}`}>
      {children}
    </div>
  );
}

