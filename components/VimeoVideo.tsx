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
  background?: boolean;
}

/**
 * Extracts video ID from various Vimeo URL formats
 * Supports:
 * - https://vimeo.com/1105184966
 * - https://vimeo.com/1105184966?fl=ip&fe=ec
 * - https://player.vimeo.com/video/1105184966
 */
function extractVimeoId(url: string): string | null {
  const patterns = [/vimeo\.com\/(\d+)/, /player\.vimeo\.com\/video\/(\d+)/];

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
  background = false,
}: VimeoVideoProps) {
  const videoId = useMemo(() => extractVimeoId(vimeoUrl), [vimeoUrl]);

  // Build embed URL - memoized to prevent unnecessary recalculations
  // The stable key={videoId} on the iframe prevents React from recreating it
  // unless the videoId actually changes
  const iframeSrc = useMemo(() => {
    if (!videoId) return "";

    const embedUrl = `https://player.vimeo.com/video/${videoId}?`;
    const params = new URLSearchParams();

    if (autoplay) params.append("autoplay", "1");
    if (loop) params.append("loop", "1");
    if (muted) params.append("muted", "1");
    if (!controls) params.append("controls", "0");
    if (background) params.append("background", "1");

    return embedUrl + params.toString();
  }, [videoId, autoplay, loop, muted, controls, background]);

  if (!videoId) {
    console.error("Invalid Vimeo URL:", vimeoUrl);
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <p className="text-gray-500">Invalid Vimeo URL</p>
      </div>
    );
  }

  return (
    <div className={`${responsive ? "relative w-full" : ""} ${className}`}>
      <div
        className={`${
          responsive ? "relative w-full h-0 pb-[56.25%]" : "w-full h-full"
        }`}
      >
        <iframe
          key={videoId} // Stable key based on videoId prevents unnecessary recreation
          src={iframeSrc}
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
