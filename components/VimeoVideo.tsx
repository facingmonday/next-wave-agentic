"use client";

import { useMemo } from "react";

export interface VimeoVideoProps {
  vimeoUrl: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  responsive?: boolean;
}

/**
 * Extracts video ID from various Vimeo URL formats
 * Supports:
 * - https://vimeo.com/1105184966
 * - https://vimeo.com/1105184966?fl=ip&fe=ec
 * - https://player.vimeo.com/video/1105184966
 */
function extractVimeoId(url: string): string | null {
  const patterns = [
    /vimeo\.com\/(\d+)/,
    /player\.vimeo\.com\/video\/(\d+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

export function VimeoVideo({
  vimeoUrl,
  className = "",
  autoplay = false,
  loop = false,
  muted = true,
  controls = true,
  responsive = true,
}: VimeoVideoProps) {
  const videoId = useMemo(() => extractVimeoId(vimeoUrl), [vimeoUrl]);

  if (!videoId) {
    console.error("Invalid Vimeo URL:", vimeoUrl);
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <p className="text-gray-500">Invalid Vimeo URL</p>
      </div>
    );
  }

  const embedUrl = `https://player.vimeo.com/video/${videoId}?`;
  const params = new URLSearchParams();
  
  if (autoplay) params.append("autoplay", "1");
  if (loop) params.append("loop", "1");
  if (muted) params.append("muted", "1");
  if (!controls) params.append("controls", "0");
  params.append("background", "0");

  const fullEmbedUrl = embedUrl + params.toString();

  return (
    <div className={`${responsive ? "relative w-full" : ""} ${className}`}>
      <div
        className={`${
          responsive
            ? "relative w-full h-0 pb-[56.25%]"
            : "w-full h-full"
        }`}
      >
        <iframe
          src={fullEmbedUrl}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo video player"
        />
      </div>
    </div>
  );
}

