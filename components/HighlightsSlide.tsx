"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type HighlightSlideProps = {
  title: string;
  subtitle: string;
  href: string;
  defaultImage: string;
  backgroundColor: string;

  /** injected by parent scroller */
  index?: number;
  total?: number;
  scrollYProgress?: MotionValue<number>;
};

export default function HighlightSlide(props: HighlightSlideProps) {
  const {
    title,
    subtitle,
    href,
    defaultImage,
    backgroundColor,
    index = 0,
    total = 1,
    scrollYProgress,
  } = props;

  // Create a fallback MotionValue if scrollYProgress is not provided
  // This ensures hooks are always called in the same order
  const fallbackProgress = useMotionValue(0);
  const progress = scrollYProgress || fallbackProgress;

  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;

  // Fade window for smoother crossfade
  const fade = segment * 0.35;

  const opacity = useTransform(
    progress,
    [start, start + fade, end - fade, end],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [start, start + fade, end - fade, end],
    [1.05, 1, 1, 0.92]
  );

  // Safety guard - return null if scrollYProgress is not provided
  if (!scrollYProgress) return null;

  return (
    <motion.section
      style={{
        backgroundColor,
        zIndex: total - index,
      }}
      className="absolute inset-0 flex items-center justify-center px-10 sm:px-20"
    >
      <div className="relative flex w-full max-w-7xl h-[70vh] items-center justify-between">
        {/* Title */}
        <motion.h1
          className="text-black font-bold text-6xl lg:text-[150px] leading-[0.9]"
          style={{ opacity }}
        >
          {title}
        </motion.h1>

        {/* Floating image */}
        <motion.div
          style={{ scale, opacity }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[280px] sm:w-[360px] lg:w-[460px]"
        >
          <div className="relative w-full aspect-square rounded-full bg-white/20 backdrop-blur-xl shadow-2xl">
            <Image
              src={defaultImage}
              alt={title}
              fill
              priority={index === 0}
              className="object-contain p-6"
            />
          </div>
        </motion.div>

        {/* Subtitle + CTA */}
        <motion.div className="ml-auto text-right max-w-sm" style={{ opacity }}>
          <p className="text-black text-xl sm:text-3xl mb-6">{subtitle}</p>

          <Link
            href={href}
            className="inline-block bg-black text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-black/90 transition"
          >
            View →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
