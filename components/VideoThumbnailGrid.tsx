"use client";

import { useState } from "react";
import Image from "next/image";
import { VimeoVideo } from "./VimeoVideo";

interface Thumbnail {
  id: string;
  image: string;
  title: string;
  description: string;
}

interface VideoThumbnailGridProps {
  vimeoUrl: string;
  thumbnails: Thumbnail[];
  videoPosition?: "left" | "right";
}

export function VideoThumbnailGrid({
  vimeoUrl,
  thumbnails,
  videoPosition = "left",
}: VideoThumbnailGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const isVideoRight = videoPosition === "right";

  return (
    <section className="relative py-16 md:py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className={isVideoRight ? "order-2" : "order-1"}>
            <VimeoVideo
              vimeoUrl={vimeoUrl}
              className="rounded-xl shadow-2xl overflow-hidden"
            />
          </div>

          {/* Thumbnails grid */}
          <div
            className={`grid grid-cols-2 gap-4 ${
              isVideoRight ? "order-1" : "order-2"
            }`}
          >
            {thumbnails.map((thumbnail) => (
              <div
                key={thumbnail.id}
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
                onMouseEnter={() => setHoveredId(thumbnail.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  src={thumbnail.image}
                  alt={thumbnail.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay that slides up on hover */}
                <div
                  className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-all duration-300 ease-out flex flex-col justify-center items-center p-6 text-center ${
                    hoveredId === thumbnail.id
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {thumbnail.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200">
                    {thumbnail.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
