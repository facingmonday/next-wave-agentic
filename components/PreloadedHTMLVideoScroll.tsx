"use client";

import { useEffect, useState } from "react";
import {
  HTMLVideoScroll,
  type HTMLVideoScrollProps,
} from "@/components/HTMLVideoScroll";

export interface PreloadedHTMLVideoScrollProps
  extends Omit<HTMLVideoScrollProps, "videoSrc"> {
  /** Remote video URL to download before rendering the scroll experience */
  remoteSrc: string;
}

export function PreloadedHTMLVideoScroll({
  remoteSrc,
  ...rest
}: PreloadedHTMLVideoScrollProps) {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    let localUrl: string | null = null;

    const load = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(remoteSrc);
        if (!response.ok) {
          throw new Error("Failed to fetch video");
        }

        const blob = await response.blob();
        if (cancelled) return;

        localUrl = URL.createObjectURL(blob);
        setObjectUrl(localUrl);
      } catch {
        if (!cancelled) {
          // If we can't pre-download (e.g. due to CORS), fall back to streaming
          // directly from the remote URL.
          console.warn(
            "PreloadedHTMLVideoScroll: falling back to streaming remoteSrc directly",
            remoteSrc
          );
          setObjectUrl(remoteSrc);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
      if (localUrl) {
        URL.revokeObjectURL(localUrl);
      }
    };
  }, [remoteSrc]);

  if (isLoading && !objectUrl) {
    return (
      <section className="relative bg-black py-24">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-white/80 text-sm min-h-[60vh]">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          <span>Preparing full video experience…</span>
        </div>
      </section>
    );
  }

  // Pass either a blob: URL (if pre-download succeeded) or the original
  // remote URL into HTMLVideoScroll. It will handle both cases gracefully.
  return <HTMLVideoScroll videoSrc={objectUrl ?? remoteSrc} {...rest} />;
}
