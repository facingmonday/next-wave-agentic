import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { PinnedHero } from "@/components/PinnedHero";
import { VideoScroll } from "@/components/VideoScroll";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Experiences | Next Wave Agentic",
  description:
    "Experiential events and interactive experiences by Next Wave Agentic and Planet Good Times.",
  openGraph: {
    title: "Experiences | Next Wave Agentic",
    description:
      "Discover our experiential events and interactive experiences.",
    type: "website",
  },
};

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      {/* Bentonville Moves */}
      <section className="relative">
        <VideoScroll
          totalFrames={192}
          framesPath="/images/bentonville-watertower"
          frameFilePattern="bentonville-watertower-drone-%03d.jpg"
          scrollDistance={5000}
          sticky={true}
          contentAlignment="center"
        >
          <div className="text-center text-white z-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
              Bentonville Moves
            </h2>
            <p className="text-xl md:text-2xl opacity-90">
              A celebration of movement, community, and the vibrant culture of
              Bentonville
            </p>
          </div>
        </VideoScroll>
      </section>

      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Bentonville Moves
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Bentonville Moves is an annual event that celebrates the
                  active lifestyle and community spirit of Northwest Arkansas.
                  The event brings together cyclists, runners, walkers, and
                  outdoor enthusiasts for a day of movement, connection, and
                  celebration.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We planned and executed the event experience, including venue
                  coordination, programming, vendor management, and attendee
                  engagement activities. The event featured group rides,
                  community gatherings, and interactive experiences that
                  showcased Bentonville's commitment to active living.
                </p>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h4 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    Event Features
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Group cycling and running activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Community vendor marketplace</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Live music and entertainment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Interactive experiences and activations</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30">
                <Image
                  src="/images/bentonville-watertower/bentonville-watertower-drone-001.jpg"
                  alt="Bentonville Moves"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Stoic Lineup Concert Series */}
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30">
                <Image
                  src="/images/projects/pedal-pals/crystal.jpg"
                  alt="Stoic Lineup Concert Series"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Stoic Lineup Concert Series
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  The Stoic Lineup Concert Series brings live music experiences
                  to Bentonville, featuring local and regional artists in
                  intimate, community-focused settings. Each concert is designed
                  to create connection between artists and audiences, fostering
                  a vibrant local music scene.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We handled event planning, artist coordination, venue
                  management, and audience engagement. The series has become a
                  cornerstone of Bentonville's cultural calendar, attracting
                  music lovers and supporting local talent.
                </p>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h4 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    Series Features
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Curated lineup of local and regional artists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Intimate venue experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Community networking and connection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Seasonal programming and themes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Vampire Bar */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Vampire Bar
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Vampire Bar is a themed pop-up event experience that
                  transforms spaces into immersive, atmospheric environments.
                  The event combines creative design, themed programming, and
                  interactive elements to create memorable nights that blend
                  entertainment, community, and unique experiences.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We designed and executed the event concept, including venue
                  transformation, themed decor, programming, and special
                  activations. The event has become a popular recurring
                  experience that draws crowds looking for something different
                  and memorable.
                </p>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h4 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    Event Elements
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Themed venue transformation and design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Atmospheric lighting and sound design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Interactive experiences and activations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Special programming and entertainment</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30">
                <Image
                  src="/images/projects/kikits/MayaAndSpark.jpg"
                  alt="Vampire Bar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Kikits Events */}
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
                Kikits: Ticketed Events
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Kikits demonstrates how experiences appear in our work. The
                platform itself powers ticketed events, and we've created and
                managed events that showcase the platform's capabilities.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Event Discovery
                </h3>
                <p className="text-gray-300">
                  Kikits enables users to discover and purchase tickets for
                  events like concerts, festivals, workshops, and community
                  gatherings.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Ticketed Experiences
                </h3>
                <p className="text-gray-300">
                  We've created and managed ticketed events through the Kikits
                  platform, from intimate concerts to large-scale community
                  celebrations.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Event Management
                </h3>
                <p className="text-gray-300">
                  The platform provides tools for event organizers to create,
                  manage, and track their events, making it easy to bring
                  experiences to life.
                </p>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30">
                <Image
                  src="/images/projects/kikits/kikits-app.jpg"
                  alt="Kikits Events"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Platform-Powered Experiences
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Kikits serves as both the platform that powers events and the
                  tool we use to create and manage our own event experiences.
                  The platform enables seamless ticket sales, attendee
                  management, and event promotion.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Through Kikits, we've facilitated hundreds of events,
                  connecting event creators with audiences and building a
                  vibrant community around shared experiences.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Planet Good Times */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                Planet Good Times
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Planet Good Times is our event and experience brand, creating
                memorable gatherings that bring communities together. From music
                series to themed events, we design experiences that foster
                connection, celebration, and joy.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30 text-center">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Event Production
                </h3>
                <p className="text-gray-300">
                  Full-service event production from concept to execution,
                  including planning, coordination, and management.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30 text-center">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Community Building
                </h3>
                <p className="text-gray-300">
                  Events designed to build and strengthen communities, creating
                  spaces for connection and shared experiences.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30 text-center">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Creative Experiences
                </h3>
                <p className="text-gray-300">
                  Unique, memorable experiences that blend entertainment, art,
                  and community in innovative ways.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>
    </main>
  );
}
