"use client";

import { Header } from "@/components/Header";
import { PinnedHero } from "@/components/PinnedHero";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { VideoGallery } from "@/components/VideoGallery";
import { Footer } from "@/components/Footer";
import { ProjectHelpCTA } from "@/components/ProjectHelpCTA";

export default function GoodtimesBentonvillePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <PinnedHero
        backgroundVideo="https://vimeo.com/1168643448?share=copy&fl=sv&fe=ci"
        title="Goodtimes Bentonville"
        subtitle="The Town of GoodTimes"
        body="Concierge service and event storytelling for Bentonville—we created experiences and content that bring the GoodTimes spirit to life. From community engagement to platform integrations with Kikits and Planet GoodTimes, we helped build the connective tissue between local events and the people who discover them."
        scrollDistance={2400}
        startOffset="top top"
        textPosition="center"
        textAlign="center"
        ctaLabel="Watch Video"
      />

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
                What we did for Goodtimes Bentonville
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                We created concierge-style storytelling and event experiences
                that showcase Bentonville&apos;s community spirit. Our work
                included video content, event design, and integrations with
                Kikits and Planet GoodTimes to connect audiences with local
                experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Concierge Experience
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  The Goodtimes Bentonville brand is about making people feel at
                  home—whether they&apos;re discovering events, exploring
                  venues, or connecting with the community. We designed content
                  and experiences that communicate that warmth and inclusivity.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our storytelling approach focused on the human side of event
                  discovery: the moments of connection, the joy of shared
                  experiences, and the sense of belonging that makes Bentonville
                  special.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Concierge-style video content and branding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Event experience design and activation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Platform integrations with Kikits and Planet GoodTimes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Community engagement and storytelling</span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* How We Did It */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                How we did it
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                We combined event design, content creation, and platform strategy
                to build a cohesive Goodtimes Bentonville experience. Our work
                leveraged Kikits for ticketing and discovery, Planet GoodTimes
                for creative direction, and AI-powered video to tell the story
                of the community.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Events & Experiences
                </h3>
                <p className="text-gray-300">
                  We designed event experiences that felt alive, welcoming, and
                  aligned with the GoodTimes or Better spirit—from activation
                  concepts to multi-venue experiences.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Content & Storytelling
                </h3>
                <p className="text-gray-300">
                  AI-powered video and narrative craft helped convey the
                  concierge feel and community focus, making Goodtimes
                  Bentonville tangible and relatable.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Platform Integration
                </h3>
                <p className="text-gray-300">
                  We connected the experience to Kikits for ticketing and
                  discovery, ensuring that storytelling and software worked
                  together to drive engagement and attendance.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Stories Section */}
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
                Stories: Goodtimes Bentonville
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                A video that showcases the Goodtimes Bentonville concierge
                service and the community spirit of The Town of GoodTimes.
              </p>
            </div>
            <div className="py-8">
              <VideoGallery
                videos={[
                  {
                    id: "goodtimes-bentonville",
                    videoUrl:
                      "https://vimeo.com/1168643448?share=copy&fl=sv&fe=ci",
                    title: "Goodtimes Bentonville",
                    subtitle:
                      "A video that showcases the Goodtimes Bentonville concierge service and the community spirit of Bentonville.",
                  },
                ]}
                className="py-8"
                titleClassName="text-[#CFC8CF]"
                subtitleClassName="text-gray-300"
                buttonClassName="inline-block px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
              />
            </div>
          </ContentReveal>
        </div>
      </section>

      <ProjectHelpCTA />
      <Footer />
    </main>
  );
}
