"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export interface VimeoVideoProps {
  vimeoUrl: string;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  responsive?: boolean;
  background?: boolean;
  /** When true, attempts to pause the Vimeo player via postMessage */
  paused?: boolean;
  /** Optional React node to show while the Vimeo iframe is loading/buffering */
  fallbackBackground?: React.ReactNode;
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
  paused = false,
  fallbackBackground,
}: VimeoVideoProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const videoId = useMemo(() => extractVimeoId(vimeoUrl), [vimeoUrl]);
  const [isLoaded, setIsLoaded] = useState(false);

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
    if (autoplay) params.append("playsinline", "1");

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

  // Control playback via postMessage when pause/resume is requested
  useEffect(() => {
    if (typeof window === "undefined") return;
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;

    const method = paused ? "pause" : autoplay ? "play" : null;
    if (!method) return;

    try {
      iframe.contentWindow.postMessage(
        JSON.stringify({ method }),
        "*"
      );
    } catch {
      // Fail silently if postMessage is not available
    }
  }, [paused, autoplay, videoId]);

  // When used as background (not responsive), fill the full container
  if (!responsive || background) {
    return (
      <div className={`absolute inset-0 w-full h-full ${className}`}>
        {/* Fallback while the Vimeo iframe loads/buffers */}
        {!isLoaded && (
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-black">
            {fallbackBackground ?? (
              <div className="flex flex-col items-center justify-center gap-2 text-white/70 text-sm">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                <span>Loading background…</span>
              </div>
            )}
          </div>
        )}

        <iframe
          key={videoId}
          src={iframeSrc}
          ref={iframeRef}
          className="absolute inset-0 w-full h-full"
          style={{
            width: "100vw",
            height: "56.25vw", // 16:9 aspect ratio based on width
            minHeight: "100vh", // Ensure it covers full height on mobile
            minWidth: "177.77vh", // Ensure it covers full width when height is constraint
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo video player"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    );
  }

  // Responsive version (original behavior)
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full h-0 pb-[56.25%]">
        {/* Fallback while the Vimeo iframe loads/buffers */}
        {!isLoaded && (
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-black rounded-lg">
            {fallbackBackground ?? (
              <div className="flex flex-col items-center justify-center gap-2 text-white/70 text-sm">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                <span>Loading video…</span>
              </div>
            )}
          </div>
        )}

        <iframe
          key={videoId}
          src={iframeSrc}
          ref={iframeRef}
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo video player"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}
