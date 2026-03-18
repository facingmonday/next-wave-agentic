"use client";

import { Header } from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Footer } from "@/components/Footer";
import { ProjectHelpCTA } from "@/components/ProjectHelpCTA";
import Image from "next/image";

const HeroSlides = [
  {
    title: "Drop In Displays",
    subtitle: "Multi-Screen Broadcast for Live Events",
    description:
      "Drop In Displays lets you manage queues of content for wall-mounted screens at conferences, expos, and trade shows. One admin, unlimited displays. Connect screens with a simple 6-digit code—all screens in a location share the same queue and stay in sync.",
    backgroundImage: "/images/drop-in-displays/drop-in-displays.jpg",
    button: {
      text: "Visit Drop In Displays",
      href: "https://dropindisplays.com",
    },
  },
];

const FeatureImages = [
  {
    src: "/images/drop-in-displays/drop-in-displays-1.jpg",
    alt: "Drop In Displays multi-screen sync",
    title: "Multi-screen sync",
    description:
      "Connect unlimited displays with a simple 6-digit code. All screens in a location share the same queue and stay in sync.",
  },
  {
    src: "/images/drop-in-displays/drop-in-displays-2.jpg",
    alt: "Drop In Displays video and display support",
    title: "Video & display support",
    description:
      "Queue Vimeo and YouTube content. Add callouts, business ads, and custom segments. Templates adapt to your event theme.",
  },
  {
    src: "/images/drop-in-displays/drop-in-displays-3.jpg",
    alt: "Drop In Displays real-time updates",
    title: "Real-time updates",
    description:
      "Changes sync automatically. Add or reorder segments from the admin panel and watch screens update on the next transition.",
  },
  {
    src: "/images/drop-in-displays/drop-in-displays-4.jpg",
    alt: "Drop In Displays event-ready",
    title: "Event-ready",
    description:
      "Built for conferences, expos, and trade shows. Themed layouts, callout overlays, and business ad carousels out of the box.",
  },
];

export default function DropInDisplaysPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <HeroCarousel slides={HeroSlides} />

        {/* What We Did */}
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
                  What we did for Drop In Displays
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
                  Event organizers were juggling USB sticks and manual updates
                  to keep wall-mounted screens in sync. Drop In Displays started
                  from a simple question:{" "}
                  <span className="text-[#4E79A7]">
                    what if one admin could manage queues of content for every
                    screen at a venue, with screens joining by code and staying
                    in sync?
                  </span>
                </p>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  We helped build a platform where you create locations and
                  queues, add segments—video, callouts, business ads,
                  countdowns—and let screens join by entering a 6-digit code.
                  Real-time updates mean changes from the admin panel sync on
                  the next transition, so event staff can focus on the experience
                  instead of running from display to display.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    Built for event scale
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Drop In Displays is built for conferences, expos, and trade
                    shows. Themed layouts, callout overlays that push to every
                    screen at once, and business ad carousels work out of the
                    box. AI can suggest insights and metadata for your content so
                    setup stays fast.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Digital signage use cases extend to hospitality, retail,
                    movie theaters, rooftop lounges, salons, museums, gyms, and
                    hotels—anywhere multiple screens need to stay in sync from
                    one place.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Deliverables
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Multi-screen sync with a 6-digit join code</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Video playlists (Vimeo, YouTube) and custom segments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Callout overlays that broadcast to all screens in real time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Business ads, QR codes, and themed templates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Location and queue management from one admin</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Feature showcase with images */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Everything you need for event displays
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Manage content from one place. Screens join by code and stay in
                  sync.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {FeatureImages.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-[#3F395B]/30 rounded-xl overflow-hidden border border-[#4E79A7]/30 hover:border-[#4E79A7] transition-all duration-300"
                  >
                    <div className="relative aspect-video bg-slate-800">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#CFC8CF] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* How it works */}
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
                  How it works
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Set up a location for each venue. Add queues with
                  segments—video, callouts, business ads, countdowns. Screens join
                  by entering a 6-digit code. Admin changes sync on the next
                  transition; callouts can overlay every screen until they
                  expire.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Create locations and queues
                  </h3>
                  <p className="text-gray-300">
                    One location per venue. Add queues with segments—video,
                    callouts, business ads, countdowns. Screens join by code and
                    play through the queue.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Customize with templates
                  </h3>
                  <p className="text-gray-300">
                    Full-screen image and video layouts. Configure themes and
                    widgets per segment. AI can suggest insights and metadata
                    for your content.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Broadcast in real time
                  </h3>
                  <p className="text-gray-300">
                    Screens play through the queue. Admin changes sync on the
                    next transition. Use callouts for announcements that overlay
                    all screens until they expire.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        <ProjectHelpCTA />
        <Footer />
      </main>
    </>
  );
}
