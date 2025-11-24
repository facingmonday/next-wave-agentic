import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
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
              Planet Good Times
            </h2>
            <p className="text-xl md:text-2xl opacity-90">
              Bringing the community together through unforgettable experiences.
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
                  Bentonville Moves Celebration
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We brought together the Bentonville community for an evening
                  of reflection, recognition, and joy at the iconic Bentonville
                  Water Tower—complete with bike valet for those arriving in
                  true Bentonville style—to honor the city&apos;s remarkable
                  progress in completing 30 miles of the Connecting Bentonville
                  Bike & Pedestrian Master Plan. Guests gathered to celebrate an
                  achievement that few U.S. cities can claim, looking back on
                  three years of collaboration while recognizing city leaders,
                  staff, and community members for their dedication. The
                  atmosphere buzzed with live music by House of Songs,
                  accompanied by curated food, beverages, and laughter as
                  attendees toasted to the collective effort that made
                  Bentonville&apos;s 30 miles of connection a reality.
                </p>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h4 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    What We Created
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Iconic venue experience at the Bentonville Water Tower
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Bike valet service for community accessibility
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Live music by House of Songs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        A heartfelt moment honoring progress, partnership, and
                        community spirit
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30">
                <Image
                  src="/images/bentonville-moves/BentonvilleMoves.jpg"
                  alt="Bentonville Moves Celebration"
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
                  src="/images/lineup-booking/LineUpConcertSeries.jpg"
                  alt="LineUp Concert Series"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  LineUp Concert Series
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We turned up the volume—and the spotlight—on three powerful
                  players reshaping the rhythm of Bentonville with the LineUp
                  Concert Series, an electrifying kickoff event for LineUp
                  Booking held at Stoic Brews Alternative. This free community
                  event brought together LineUp, Kikits, and Planet GoodTimes in
                  one unforgettable evening, transforming Bentonville into a
                  vibrant hub of creativity and camaraderie. The night featured
                  live talent curated by LineUp, showcased the innovative Kikits
                  ticketing platform built for creators, and embodied Planet
                  GoodTimes&apos; mission to spread joy through wild, immersive
                  experiences—proving how these homegrown brands work together
                  to build &quot;The Town of GoodTimes.&quot;
                </p>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h4 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    What We Delivered
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Electrifying kickoff event at Stoic Brews Alternative
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Free community event showcasing three innovative brands
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Live music and unforgettable vibes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        A night that proved Bentonville is better because of
                        local innovation
                      </span>
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
                  GoodTimes Halloween Crawl
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We created the 2nd Annual GoodTimes Halloween Crawl, a
                  multi-venue experience that transformed three distinct
                  locations into an immersive Halloween journey through
                  Bentonville&apos;s nightlife. The evening kicked off at
                  Loveless with meet-up and wristband pickup, featuring
                  Theronious Chunk and GoodTimes specials, then moved to The
                  Barber for DJ Sheep&apos;s set, before culminating at Lady
                  Slipper with DJ Oplex and a private entrance dance party that
                  went late into the night. We coordinated the entire
                  experience, managing the flow between locations, curating the
                  entertainment lineup, and creating special offerings at each
                  stop, bringing together Halloween enthusiasts, music lovers,
                  and community members for a night that embodied the
                  &quot;GoodTimes or Better&quot; spirit.
                </p>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h4 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    What We Built
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Multi-venue crawl experience across three locations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Curated entertainment lineup: Theronious Chunk, DJ
                        Sheep, DJ Oplex
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Exclusive GoodTimes specials and private entrance access
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        A Halloween experience that embodied the &quot;GoodTimes
                        or Better&quot; spirit
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30">
                <Image
                  src="/images/planet-goodtimes/VampireBarCrawl.jpg"
                  alt="GoodTimes Halloween Crawl"
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
                platform itself powers ticketed events, and we&apos;ve created
                and managed events that showcase the platform&apos;s
                capabilities.
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
                  We&apos;ve created and managed ticketed events through the
                  Kikits platform, from intimate concerts to large-scale
                  community celebrations.
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
                  Through Kikits, we&apos;ve facilitated hundreds of events,
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
