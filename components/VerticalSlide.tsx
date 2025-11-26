"use client";

export interface VerticalSlideItem {
  title: string;
  subtitle: string;
  defaultImage: string;
  backgroundColor: string;
  href?: string;
}

export default function VerticalSlide({ title, subtitle }: VerticalSlideItem) {
  // Format title: if first word + space + second word > 11 chars, move second word to second row
  const words = title.split(" ");
  const formatTitle = () => {
    const first = words[0] || "";
    const second = words[1] || "";
    const rest = words.slice(2).join(" ");

    const firstTwoLength = first.length + second.length; // no spaces counted

    // If first two words combined are <= 11 chars → keep them together
    if (words.length >= 2 && firstTwoLength <= 11) {
      return (
        <>
          {first} {second}
          <br />
          {rest}
        </>
      );
    }

    if (words.length >= 2) {
      return (
        <>
          {first}
          <br />
          {words.slice(1).join(" ")}
        </>
      );
    }

    return first;
  };

  return (
    <section className="h-screen flex items-center justify-center px-10 sm:px-20 relative">
      <div className="relative flex w-full max-w-7xl h-full">
        {/* MOBILE: TITLE — CENTERED ABOVE ICON */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full px-4 sm:hidden">
          <h1 className="text-black font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.9] text-center">
            {formatTitle()}
          </h1>
        </div>

        {/* MOBILE: SUBTITLE — CENTERED BELOW BUTTON */}
        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-full max-w-xs px-4 sm:hidden">
          <p className="text-black text-2xl sm:text-2xl lg:text-4xl leading-snug font-medium text-center">
            {subtitle}
          </p>
        </div>

        {/* DESKTOP: TITLE — LEFT CENTER */}
        <div className="hidden sm:block absolute -left-24 top-2/5 -translate-y-1/2">
          <h1 className="text-black font-bold text-5xl sm:text-7xl lg:text-8xl leading-[0.9]">
            {formatTitle()}
          </h1>
        </div>

        {/* DESKTOP: SUBTITLE — BOTTOM RIGHT */}
        <div className="hidden sm:block absolute right-0 bottom-64 max-w-sm text-right">
          <p className="text-black text-xl sm:text-2xl lg:text-4xl leading-snug font-medium">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
