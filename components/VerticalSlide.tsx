"use client";

export interface VerticalSlideItem {
  title: string;
  subtitle: string;
  defaultImage: string;
  backgroundColor: string;
  href?: string;
}

export default function VerticalSlide({ title, subtitle }: VerticalSlideItem) {
  // Format title: if 3 words, split first two on top, third below
  const words = title.split(" ");
  const formattedTitle =
    words.length === 3 ? (
      <>
        {words[0]} {words[1]}
        <br />
        {words[2]}
      </>
    ) : (
      title
    );

  return (
    <section className="h-screen flex items-center justify-center px-10 sm:px-20 relative">
      <div className="relative flex w-full max-w-7xl h-full">
        {/* TITLE — LEFT CENTER */}
        <div className="absolute -left-24 top-2/5 -translate-y-1/2">
          <h1 className="text-black font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.9]">
            {formattedTitle}
          </h1>
        </div>

        {/* SUBTITLE — BOTTOM RIGHT */}
        <div className="absolute right-0 bottom-64 max-w-sm text-right">
          <p className="text-black text-xl sm:text-2xl lg:text-4xl leading-snug font-medium">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
