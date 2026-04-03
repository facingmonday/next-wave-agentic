"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { VideoGallery } from "@/components/VideoGallery";
import { Footer } from "@/components/Footer";
import { ProjectHelpCTA } from "@/components/ProjectHelpCTA";

const VIMEO_URL = "https://vimeo.com/1170723192?share=copy&fl=sv&fe=ci";

const HeroSlides = [
  {
    title: "Arkansas Graveler",
    subtitle: "Seven Days Through the Delta",
    description:
      "A multi-day gravel and mountain-bike style journey across the Arkansas Delta. We produced a promo that pairs AI-generated riders with real roads, towns, and terrain—plus kit that matches what cyclists may wear during the event.",
    backgroundImage: "/images/arkansas-graveler/gravel-road.jpg",
    mainImage: "/images/arkansas-graveler/cyclists-fields.jpg",
  },
  {
    title: "Real Places. Grounded Riders.",
    subtitle: "AI in the service of realism",
    description:
      "Instead of generic studio riders, we anchored the story in Jonesboro, Ozark foothills, mud sectors, and open Delta fields—then pushed the AI treatment so motion, light, and wardrobe feel event-authentic.",
    backgroundImage: "/images/arkansas-graveler/winding-road.jpg",
    mainImage: "/images/arkansas-graveler/jonesboro.jpg",
  },
];

const ShowcaseImages = [
  {
    src: "/images/arkansas-graveler/gravel-road.jpg",
    alt: "Gravel road through Arkansas Delta landscape",
    title: "Delta gravel",
    description: "Wide-open gravel that sells the scale of a week-long route.",
  },
  {
    src: "/images/arkansas-graveler/winding-road.jpg",
    alt: "Winding road through rural Arkansas",
    title: "Route as character",
    description: "Curves and sightlines that make the geography feel intentional, not decorative.",
  },
  {
    src: "/images/arkansas-graveler/jonesboro.jpg",
    alt: "Jonesboro Arkansas street scene",
    title: "Real towns on the map",
    description: "Anchoring the story in recognizable Delta communities.",
  },
  {
    src: "/images/arkansas-graveler/cyclists-fields.jpg",
    alt: "Cyclists riding through open fields",
    title: "Fields and horizon",
    description: "Open-country riding that matches the endurance tone of a seven-day event.",
  },
  {
    src: "/images/arkansas-graveler/cyclist-ozark-uphill.jpg",
    alt: "Cyclist climbing an Ozark-style uphill",
    title: "Climb and grit",
    description: "Pitch and texture that read as real effort, not a flat stock shot.",
  },
  {
    src: "/images/arkansas-graveler/cyclist-ozark-uniform.jpg",
    alt: "Cyclist in event-style kit on Ozark terrain",
    title: "Kit that matches the week",
    description: "Uniforms and layers aligned with what riders might actually wear during Arkansas Graveler.",
  },
  {
    src: "/images/arkansas-graveler/cyclists-usa-uniform.jpg",
    alt: "Cyclists in USA-themed cycling uniforms",
    title: "Identity on the bike",
    description: "Team and national cues that feel at home in a competitive gravel field.",
  },
  {
    src: "/images/arkansas-graveler/cyclists-fpv-mud.jpg",
    alt: "First-person style view of cyclists in mud",
    title: "Mud and momentum",
    description: "Low, dynamic framing to stress conditions riders will remember.",
  },
  {
    src: "/images/arkansas-graveler/biketire-mud.jpg",
    alt: "Bicycle tire in mud close-up",
    title: "Texture you can feel",
    description: "Ground-level detail that sells the Delta and Ozark mix without saying a word.",
  },
];

export default function ArkansasGravelerPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroCarousel slides={HeroSlides} />

      <section className="relative py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4 text-center">
              Promo film
            </h2>
            <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-10">
              Watch the Arkansas Graveler piece on Vimeo—built to feel like the
              event: long days, real geography, and riders who look like they
              belong on course.
            </p>
            <VideoGallery
              videos={[
                {
                  id: "arkansas-graveler-main",
                  videoUrl: VIMEO_URL,
                  thumbnailUrl: "/images/arkansas-graveler/cyclists-fpv-mud.jpg",
                  title: "Arkansas Graveler",
                  subtitle:
                    "Seven days of gravel through the Arkansas Delta—AI cyclists composited into real locations and event-true kit.",
                },
              ]}
              className="py-4"
              titleClassName="text-[#CFC8CF]"
              subtitleClassName="text-gray-300"
              buttonClassName="inline-block px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
            />
          </ContentReveal>
        </div>
      </section>

      <section className="relative py-16 md:py-32">
        <FuturisticBackground
          pattern="flowing"
          intensity="moderate"
          showOrbs={false}
          primaryColor="#fc05b9"
          secondaryColor="#4E79A7"
          tertiaryColor="#84596c"
          lineCount={10}
        />
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                What we set out to prove
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-4">
                Arkansas Graveler is a seven-day gravel ride through the Delta—a
                serious endurance format that deserves marketing that feels as
                specific as the route. We used{" "}
                <span className="text-[#4E79A7] font-medium">
                  AI-generated cyclists
                </span>{" "}
                but placed them in{" "}
                <span className="text-[#4E79A7] font-medium">
                  real Arkansas locations
                </span>
                : small towns, mud sectors, open fields, and winding rural
                roads. Riders wear{" "}
                <span className="text-[#4E79A7] font-medium">
                  uniforms and kit
                </span>{" "}
                in line with what participants might wear during the event, so
                the film reads as “this ride” rather than generic cycling stock.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                At Next Wave Agentic, that is the through-line—using AI to move
                faster and iterate harder, while grounding every frame in
                real-world truth so the result feels believable, cinematic, and
                on-brand for the community hosting the event.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Creative approach
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      AI riders composited into photographed Delta and Ozark
                      plates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Wardrobe aligned with event-week kit and team identity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Pacing and shot language aimed at endurance and atmosphere,
                      not a slideshow
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Hero promo cut for web and social</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Stills and scene frames for campaigns and project pages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      A repeatable recipe: real locations + controlled AI talent
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                Stills from the world we built
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Every frame ties back to Arkansas terrain and the tone of a
                multi-day gravel week—mud, sky, roads, and riders who look like
                they showed up to start line.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {ShowcaseImages.map((item) => (
                <article
                  key={item.src}
                  className="group bg-[#3F395B]/30 rounded-xl overflow-hidden border border-[#4E79A7]/30 hover:border-[#4E79A7] transition-all duration-300"
                >
                  <div className="relative aspect-video bg-slate-800">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#CFC8CF] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      <ProjectHelpCTA />
      <Footer />
    </main>
  );
}
