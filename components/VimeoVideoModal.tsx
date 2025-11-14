"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VimeoVideo } from "./VimeoVideo";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface VimeoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  vimeoUrl: string;
}

export function VimeoVideoModal({
  isOpen,
  onClose,
  vimeoUrl,
}: VimeoVideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Store current scroll position
    const scrollY = window.scrollY;

    // Prevent body scroll when modal is open using position fixed
    // This preserves ScrollTrigger calculations
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    window.addEventListener("keydown", handleEscape);

    return () => {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      if (scrollY) {
        const scrollPosition = parseInt(scrollY || "0") * -1;
        // Use requestAnimationFrame to restore scroll without triggering immediate refresh
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollPosition);
          // Delay ScrollTrigger refresh to prevent video restart
          // This allows the scroll position to settle before recalculating
          setTimeout(() => {
            ScrollTrigger.update();
          }, 50);
        });
      }

      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={(e) => {
        if (e.target === backdropRef.current) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-6xl mx-4 bg-black rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/70 hover:bg-black/90 text-white rounded-full transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Video */}
        <div className="w-full">
          <VimeoVideo
            vimeoUrl={vimeoUrl}
            className="w-full"
            autoplay={true}
            controls={true}
            responsive={true}
          />
        </div>
      </div>
    </div>
  );
}
