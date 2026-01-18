"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  Parallax,
} from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

export interface HeroSlideButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  mainImage?: string;
  button?: HeroSlideButton;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  className?: string;
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 5000,
  showArrows = true,
  showIndicators = true,
  className = "",
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  if (!slides || slides.length === 0) {
    return null;
  }

  const getButtonClasses = (button: HeroSlideButton) => {
    const baseClasses =
      "group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50";

    if (button.variant === "secondary") {
      return `${baseClasses} bg-white/20 text-white border-2 border-white/50 hover:bg-white/30 hover:border-white/70 backdrop-blur-sm shadow-lg ${
        button.className || ""
      }`;
    }

    return `${baseClasses} bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-xl hover:shadow-2xl ${
      button.className || ""
    }`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, Parallax]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        parallax={true}
        speed={1200}
        autoplay={{
          delay: autoPlayInterval,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet hero-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active hero-bullet-active",
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onAutoplayStart={() => setIsPlaying(true)}
        onAutoplayStop={() => setIsPlaying(false)}
        className="h-[90vh] min-h-[600px] lg:h-[100vh] lg:min-h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0" data-swiper-parallax="-100">
                <Image
                  src={slide.backgroundImage}
                  alt={`${slide.title} background`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/80"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative pt-16 lg:pt-0">
                    {/* Text Content */}
                    <div
                      className="text-white space-y-8 relative z-20 lg:col-span-9"
                      data-swiper-parallax="-200"
                    >
                      <div className="space-y-6">
                        <div
                          className="inline-block"
                          data-swiper-parallax="-100"
                          data-swiper-parallax-delay="100"
                        >
                          <span className="text-blue-400 text-xs md:text-base lg:text-lg font-semibold uppercase tracking-wider bg-blue-500/20 px-5 py-2.5 rounded-full backdrop-blur-sm border border-blue-500/30">
                            {slide.subtitle}
                          </span>
                        </div>

                        <h1
                          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-shadow-lg"
                          data-swiper-parallax="-300"
                          data-swiper-parallax-delay="200"
                        >
                          {slide.title}
                        </h1>

                        <p
                          className="text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed text-shadow max-w-4xl"
                          data-swiper-parallax="-200"
                          data-swiper-parallax-delay="300"
                        >
                          {slide.description}
                        </p>
                      </div>

                      {/* Button */}
                      {slide.button && (
                        <div
                          className="pt-4"
                          data-swiper-parallax="-100"
                          data-swiper-parallax-delay="400"
                        >
                          {slide.button.href ? (
                            <Link
                              href={slide.button.href}
                              className={getButtonClasses(slide.button)}
                            >
                              {slide.button.text}
                            </Link>
                          ) : (
                            <button
                              onClick={slide.button.onClick}
                              className={getButtonClasses(slide.button)}
                            >
                              {slide.button.text}
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Featured Image */}
                    <div
                      className="hidden sm:block relative lg:static absolute -top-[5vh] lg:top-auto lg:col-span-3"
                      data-swiper-parallax="100"
                      data-swiper-parallax-delay="200"
                    >
                      <div className="relative">
                        {/* Main Image Container */}
                        {slide.mainImage && (
                          <div className="relative h-[50vh] lg:h-[90vh] w-full rounded-3xl overflow-visible flex items-center justify-center">
                            <Image
                              src={slide.mainImage}
                              alt={slide.title}
                              width={1000}
                              height={1000}
                              className="max-h-[50vh] lg:max-h-[90vh] w-auto hover:scale-110 transition-transform duration-1000"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      {showArrows && slides.length > 1 && (
        <>
          <button className="hero-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 group bg-transparent border-none hidden lg:block">
            <div className="flex items-center justify-center w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </button>
          <button className="hero-next absolute right-6 top-1/2 -translate-y-1/2 z-20 group bg-transparent border-none hidden lg:block">
            <div className="flex items-center justify-center w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </>
      )}

      {/* Custom Pagination */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <div className="swiper-pagination flex space-x-2"></div>
          </div>
        </div>
      )}

      {/* Slide Progress Indicator */}
      <div className="absolute top-0 left-0 w-full h-[0.5px] bg-white/10 z-30">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-100 ease-linear"
          style={{
            width: `${((activeIndex + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .hero-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          transition: all 0.3s ease;
          opacity: 1;
        }

        .hero-bullet-active {
          background: #4e79a7;
          transform: scale(1.3);
        }

        .text-shadow {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        }

        /* Hide default Swiper buttons */
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }

        /* Animation for slide transitions */
        .swiper-slide-active [data-swiper-parallax] {
          transform: translate3d(0, 0, 0) !important;
          opacity: 1 !important;
        }

        .swiper-slide:not(.swiper-slide-active) [data-swiper-parallax] {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
