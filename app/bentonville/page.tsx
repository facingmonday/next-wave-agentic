import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { VideoScroll } from "@/components/VideoScroll";
import { PreloadedHTMLVideoScroll } from "@/components/PreloadedHTMLVideoScroll";

export const metadata: Metadata = {
  title: "Bentonville | Next Wave Agentic",
  description:
    "Next Wave Agentic is based in Bentonville, Arkansas, building AI-powered storytelling, product experiences, and events from the heart of the Ozarks.",
  openGraph: {
    title: "Bentonville | Next Wave Agentic",
    description:
      "Learn how Next Wave Agentic builds AI-powered creative and product experiences from Bentonville, Arkansas.",
    type: "website",
  },
};

export default function BentonvillePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="relative">
        <PreloadedHTMLVideoScroll
          remoteSrc="/images/castle-dropin/castle-dropin.mp4"
          scrollDistance={12000}
          sticky={true}
          contentAlignment="center"
          contentAnimationDirection="down"
          contentFade
        >
          <div className="text-center text-white z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
              Welcome to Bentonville
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Over 300 miles of trails await you in the Ozark Mountains.
            </p>
          </div>
        </PreloadedHTMLVideoScroll>
      </section>
      <section className="relative z-30 py-16 md:py-24 bg-black">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
            Made in Bentonville
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            The City of the Future
          </p>
        </div>
      </section>
      <section className="relative">
        <VideoScroll
          totalFrames={107}
          framesPath="/images/tunnel"
          frameFilePattern="tunnel-%03d.jpg"
          scrollDistance={5000}
          sticky={true}
          contentAlignment="center"
          contentAnimationDirection="right"
          contentFade
        >
          <div className="text-center text-white z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
              World Class MTB Trails
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Over 300 miles of trails await you in the Ozark Mountains.
            </p>
          </div>
        </VideoScroll>
      </section>
      <section className="relative z-30 py-16 md:py-24 bg-black">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
            Made in Bentonville
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            The City of the Future
          </p>
        </div>
      </section>
      <section className="relative">
        <VideoScroll
          totalFrames={145}
          framesPath="/images/catapult"
          frameFilePattern="catapult-%03d.jpg"
          scrollDistance={5000}
          sticky={true}
          contentAlignment="left"
          contentAnimationDirection="up"
          contentFade
        >
          <div className="text-center text-white z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
              World Class MTB Trails
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Over 300 miles of trails await you in the Ozark Mountains.
            </p>
          </div>
        </VideoScroll>
      </section>
      <section className="relative">
        <PreloadedHTMLVideoScroll
          remoteSrc="/video/drone2.mp4"
          scrollDistance={8000}
          sticky={true}
          contentAlignment="center"
          contentAnimationDirection="down"
          contentFade
        >
          <div className="text-center text-white z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
              Create a Drone
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Scrub through the full HTML video experience by scrolling.
            </p>
          </div>
        </PreloadedHTMLVideoScroll>
      </section>
    </main>
  );
}
