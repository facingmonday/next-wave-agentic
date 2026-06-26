"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface BlogImageGalleryProps {
  children: React.ReactNode;
}

interface ImageItem {
  src: string;
  alt: string;
}

export function BlogImageGallery({ children }: BlogImageGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const initGallery = useCallback(() => {
    if (!containerRef.current) return;

    // Find all img elements inside the blog post container
    const imgElements = containerRef.current.querySelectorAll("img");
    const parsedImages: ImageItem[] = [];

    imgElements.forEach((img, index) => {
      let src = img.getAttribute("src") || "";
      const alt = img.getAttribute("alt") || img.getAttribute("title") || "";

      if (src) {
        // Next.js optimized image URLs start with /_next/image or _next/image.
        // We extract the original unoptimized URL from the query string.
        if (src.startsWith("/_next/image") || src.startsWith("_next/image")) {
          try {
            const urlObj = new URL(src, window.location.origin);
            const originalUrl = urlObj.searchParams.get("url");
            if (originalUrl) {
              src = originalUrl;
            }
          } catch (err) {
            console.error("Failed to parse Next.js optimized image URL:", err);
          }
        }

        parsedImages.push({ src, alt });

        // Add styling & cursor to show it is clickable
        img.style.cursor = "zoom-in";
        img.classList.add("transition-all", "duration-200", "hover:brightness-90");

        // Add click event listener to open the modal
        img.onclick = (e) => {
          e.preventDefault();
          setCurrentIndex(index);
          setIsOpen(true);
        };
      }
    });

    setImages(parsedImages);

    // Clean up
    return () => {
      imgElements.forEach((img) => {
        img.onclick = null;
      });
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    // Run the initialization asynchronously to avoid synchronous setState inside effect warning
    const timer = setTimeout(() => {
      initGallery();
    }, 0);

    // Since images inside markdown could load late or components might re-render,
    // we also setup a small MutationObserver to re-evaluate the container if children change
    const observer = new MutationObserver(() => {
      initGallery();
    });

    if (container) {
      observer.observe(container, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();

      // Clean up onclick handlers manually
      if (container) {
        const imgElements = container.querySelectorAll("img");
        imgElements.forEach((img) => {
          img.onclick = null;
        });
      }
    };
  }, [initGallery]);

  // Navigate functions
  const showPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, showNext, showPrev, closeModal]);

  return (
    <>
      <div ref={containerRef}>{children}</div>

      <AnimatePresence>
        {isOpen && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 select-none"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-55 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/15 transition duration-200 focus:outline-none"
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main Carousel Wrapper */}
            <div
              className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              {/* Prev Button */}
              {images.length > 1 && (
                <button
                  onClick={showPrev}
                  className="absolute left-0 sm:left-4 z-55 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/15 transition duration-200 focus:outline-none bg-black/30"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Image Frame */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full max-h-[65vh]">
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt || "Gallery image"}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    priority
                  />
                </div>
              </motion.div>

              {/* Next Button */}
              {images.length > 1 && (
                <button
                  onClick={showNext}
                  className="absolute right-0 sm:right-4 z-55 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/15 transition duration-200 focus:outline-none bg-black/30"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>

            {/* Bottom Caption & Stats */}
            <div
              className="mt-6 text-center max-w-2xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {images[currentIndex].alt && (
                <p className="text-gray-300 font-medium text-base mb-1">{images[currentIndex].alt}</p>
              )}
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                {currentIndex + 1} of {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
