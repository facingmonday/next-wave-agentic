"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type TransitionEvent,
} from "react";

const VIMEO_BASE = "https://player.vimeo.com/video";
const VIMEO_PARAMS =
  "api=1&autoplay=1&muted=1&loop=1&background=1&controls=0&title=0&byline=0&portrait=0&autopause=0&dnt=1&playsinline=1";

const VIMEO_ORIGIN = "https://player.vimeo.com";
const SPLASH_MIN_MS = 500;
const SPLASH_MAX_MS = 3500;
const SPLASH_UNMOUNT_FALLBACK_MS = 1000;

function isVimeoReadyMessage(e: MessageEvent): boolean {
  if (e.origin !== VIMEO_ORIGIN) return false;
  let data: unknown = e.data;
  if (typeof data === "string") {
    try {
      data = JSON.parse(data);
    } catch {
      return false;
    }
  }
  if (!data || typeof data !== "object") return false;
  return (data as { event?: string }).event === "ready";
}

type Stat = { value: string; label: string };

export type HeroVideoProps = {
  videoId?: string;
  variant?: "dark" | "light";
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  stats?: Stat[];
  logoSrc?: string;
};

const overlayStyles = {
  dark:
    "bg-[linear-gradient(110deg,rgba(0,0,0,0.88)_5%,rgba(0,0,0,0.55)_42%,rgba(0,0,0,0.2)_100%)]",
  light:
    "bg-gradient-to-r from-white/55 via-white/35 to-white/12 md:from-white/60 md:via-white/38 md:to-white/15",
};

const textStyles = {
  dark: {
    eyebrow: "text-[#fc05b9]",
    heading: "text-[#CFC8CF]",
    sub: "text-gray-300",
    secondaryLink: "text-[#CFC8CF] hover:text-[#fc05b9]",
    primaryBtn:
      "bg-[#4E79A7] text-white shadow-lg hover:bg-[#4E79A7]/85",
    statValue: "text-[#CFC8CF]",
    statLabel: "text-[#CFC8CF]/65",
    statBorder: "border-[#CFC8CF]/20",
    statDivider: "border-[#CFC8CF]/15",
  },
  light: {
    eyebrow: "text-black/70",
    heading: "text-black",
    sub: "text-black/85",
    secondaryLink: "text-black hover:text-black/75",
    primaryBtn: "bg-black text-white shadow-lg hover:bg-black/90",
    statValue: "text-black",
    statLabel: "text-black/65",
    statBorder: "border-black/20",
    statDivider: "border-black/15",
  },
};

const DEFAULT_STATS: Stat[] = [
  { value: "30+", label: "Projects launched" },
  { value: "End-to-end", label: "Strategy through launch" },
  { value: "NWA", label: "Based in Bentonville" },
];

export function HeroVideo({
  videoId = "1177961991",
  variant = "dark",
  eyebrow = "Creative technology agency",
  title = (
    <>
      Strategy. Stories.
      <br />
      Digital experiences that move.
    </>
  ),
  subtitle = "We help ambitious brands clarify their message, launch stronger digital experiences, and build campaigns people actually remember.",
  primaryCta = { label: "Start a project", href: "/?contact=1" },
  secondaryCta = { label: "See selected work", href: "/#featured-work" },
  stats = DEFAULT_STATS,
  logoSrc,
}: HeroVideoProps) {
  const id = videoId ?? process.env.NEXT_PUBLIC_HERO_VIMEO_ID ?? "";
  const hasVideo = Boolean(id);
  const t = textStyles[variant];

  const [videoReady, setVideoReady] = useState(!hasVideo);
  const [minElapsed, setMinElapsed] = useState(false);
  const [maxElapsed, setMaxElapsed] = useState(false);
  const [splashMounted, setSplashMounted] = useState(hasVideo);
  const [clientReady, setClientReady] = useState(false);
  const isMobileRef = useRef(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    isMobileRef.current = window.innerWidth < 768;
    setClientReady(true);
  }, []);

  const quality = isMobileRef.current ? "540p" : "auto";
  const src = id
    ? `${VIMEO_BASE}/${id}?${VIMEO_PARAMS}&quality=${quality}`
    : "";

  const markVideoReady = useCallback(() => setVideoReady(true), []);

  const splashDismiss = maxElapsed || (videoReady && minElapsed);

  useLayoutEffect(() => {
    if (!id || !clientReady) return;
    const el = iframeRef.current;
    if (!el) return;
    el.addEventListener("load", markVideoReady);
    return () => el.removeEventListener("load", markVideoReady);
  }, [id, clientReady, src, markVideoReady]);

  useEffect(() => {
    if (!id) return;
    const onMessage = (e: MessageEvent) => {
      if (isVimeoReadyMessage(e)) markVideoReady();
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [id, markVideoReady]);

  useEffect(() => {
    if (!id) return;
    const tMin = window.setTimeout(() => setMinElapsed(true), SPLASH_MIN_MS);
    const tMax = window.setTimeout(() => {
      setMaxElapsed(true);
      setVideoReady(true);
    }, SPLASH_MAX_MS);
    return () => {
      window.clearTimeout(tMin);
      window.clearTimeout(tMax);
    };
  }, [id]);

  useEffect(() => {
    if (!splashDismiss) return;
    const timer = window.setTimeout(
      () => setSplashMounted(false),
      SPLASH_UNMOUNT_FALLBACK_MS
    );
    return () => window.clearTimeout(timer);
  }, [splashDismiss]);

  const handleSplashTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName === "opacity" && splashDismiss) {
      setSplashMounted(false);
    }
  };

  const renderVideo = () => {
    if (!id) {
      return (
        <div className="hero-video hero-video--fallback" aria-hidden>
          <div className="hero-video__fallback" />
        </div>
      );
    }

    return (
      <div className="hero-video">
        <div className="hero-video__media" aria-hidden />
        {splashMounted && (
          <div
            className={`hero-video__loading transition-opacity duration-700 ease-out ${splashDismiss ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            aria-busy={!splashDismiss}
            aria-hidden={splashDismiss}
            onTransitionEnd={handleSplashTransitionEnd}
          >
            <div className="flex flex-col items-center gap-6 px-6">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt=""
                  width={320}
                  height={160}
                  className="h-auto w-full max-w-[min(280px,85vw)] object-contain"
                  priority
                />
              ) : (
                <span className="text-2xl font-bold text-[#CFC8CF]">
                  Loading…
                </span>
              )}
              <svg
                className="h-9 w-9 animate-spin text-[#fc05b9]/50"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            </div>
            <span className="sr-only">Loading hero video</span>
          </div>
        )}
        <div
          className={`hero-video__embed transition-opacity duration-500 ease-in ${splashDismiss && videoReady ? "opacity-100" : "opacity-0"
            }`}
          aria-hidden
        >
          {clientReady && (
            <iframe
              ref={iframeRef}
              className="hero-video__iframe"
              src={src}
              title="Hero background video"
              allow="autoplay; fullscreen; picture-in-picture"
              loading="eager"
              onLoad={markVideoReady}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden md:h-[900px] md:min-h-0">
      <div className="absolute inset-0 z-0">{renderVideo()}</div>

      <div
        className={`pointer-events-none absolute inset-0 z-[1] ${overlayStyles[variant]}`}
        aria-hidden
      />

      <div className="relative z-[2] flex min-h-screen flex-col justify-center px-6 pb-24 pt-28 md:min-h-0 md:h-full md:px-12 lg:px-16 xl:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl text-left">
            <p
              className={`agency-kicker ${t.eyebrow}`}
            >
              {eyebrow}
            </p>
            <h1
              className={`font-heading mt-6 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight sm:text-6xl md:text-3xl lg:text-6xl ${t.heading}`}
            >
              {title}
            </h1>
            <p
              className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl ${t.sub}`}
            >
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href={primaryCta.href}
                className={`inline-flex h-12 items-center rounded-full px-8 text-sm font-semibold transition ${t.primaryBtn}`}
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className={`group inline-flex items-center gap-2 text-sm font-medium transition ${t.secondaryLink}`}
              >
                {secondaryCta.label}
                <svg
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {stats.length > 0 && (
            <div
              className="mt-16 grid max-w-4xl gap-4 sm:grid-cols-3 md:mt-24"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`agency-panel rounded-3xl p-6`}
                >
                  <p
                    className={`text-3xl font-bold sm:text-4xl ${t.statValue}`}
                  >
                    {s.value}
                  </p>
                  <p
                    className={`mt-3 text-[10px] uppercase tracking-[0.24em] sm:text-xs ${t.statLabel}`}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
