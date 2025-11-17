"use client";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  url?: string;
  tags?: string[];
}

export interface PortfolioCarouselProps {
  items: PortfolioItem[];
  /** Autoplay delay in ms */
  autoScrollSpeed?: number;
  className?: string;
}

export function PortfolioCarousel({
  items,
  autoScrollSpeed = 4000,
  className = "",
}: PortfolioCarouselProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className={`relative w-full py-20 ${className}`}>
      {/* Gradient overlays for fade effect (hidden on mobile) */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 hidden w-32 bg-gradient-to-r from-black via-black/80 to-transparent md:block" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 hidden w-32 bg-gradient-to-l from-black via-black/80 to-transparent md:block" />

      {/* Swiper carousel */}
      <div className="relative mx-auto flex h-[600px] max-w-6xl items-center">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: autoScrollSpeed,
            disableOnInteraction: false,
          }}
          className="w-full portfolio-swiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center">
                <div className="group relative h-[500px] w-[400px] max-w-full overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-none md:shadow-2xl transition-colors duration-300 hover:border-[#fc05b9]">
                  {/* Image */}
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="400px"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="line-clamp-2 text-sm text-gray-300">
                        {item.description}
                      </p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#fc05b9]/30 bg-[#fc05b9]/20 px-2 py-1 text-xs text-[#fc05b9]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-[#fc05b9]/0 transition-colors duration-300 group-hover:bg-[#fc05b9]/10" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
