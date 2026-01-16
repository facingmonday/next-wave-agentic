import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import HeroCarousel, { type HeroSlide } from "@/components/HeroCarousel";

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
  const HeroSlides: HeroSlide[] = [
    {
      title: "Experiences",
      subtitle: "Strategic Event Planning",
      description:
        "We create comprehensive event experiences that bring together venue selection, programming, and attendee experience design to create a memorable gathering.",
      backgroundImage:
        "/images/bentonville-watertower/bentonville-watertower-drone-047.jpg",
    },
    {
      title: "BMC Event Experience",
      subtitle: "Strategic Event Planning",
      description:
        "We created a comprehensive event experience for BMC. Our strategic planning brought together venue selection, programming, and attendee experience design to create a memorable gathering.",
      backgroundImage: "/images/bentonville-moves/BentonvilleMoves.jpg",
    },
    {
      title: "Planet Good Times: Halloween Crawl",
      subtitle: "Multi-Venue Experience",
      description:
        "We created the GoodTimes Halloween Crawl, a multi-venue experience that transformed three distinct locations into an immersive Halloween journey through Bentonville's nightlife.",
      backgroundImage: "/images/planet-goodtimes/VampireBarCrawl.jpg",
    },
    {
      title: "LineUp Concert Series & Kikits Launch",
      subtitle: "Collaborative Event Experience",
      description:
        "An electrifying kickoff event that brought together LineUp, Kikits, and Planet GoodTimes. LineUp curated the artists, Planet GoodTimes created the event experience, and Kikits sold the tickets—showcasing how our software platforms work together.",
      backgroundImage: "/images/lineup-booking/LineUpConcertSeries.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroCarousel slides={HeroSlides} className="z-40" />

      {/* BMC Event */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  BMC: How Experiences Amplified the Event
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We created a comprehensive event strategy for BMC. Our
                  experience design brought together venue selection,
                  programming, and attendee experience to create a memorable
                  gathering.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The experience involved coordinating multiple vendors,
                  designing the event flow, and ensuring all elements aligned to
                  create a seamless and engaging experience for attendees.
                </p>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30 mt-6">
                  <h4 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    Experience Elements
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Event concept and theme development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Attendee experience design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Vendor coordination and management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Seamless event flow and programming</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30">
                <Image
                  src="/images/bentonville-moves/BentonvilleMoves.jpg"
                  alt="BMC Event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* LineUp Concert Series & Kikits Launch Party */}
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
                LineUp Concert Series & Kikits Launch Party
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                An electrifying kickoff event that brought together three of our
                software platforms in one unforgettable evening at Stoic Brews
                Alternative.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30">
                <Image
                  src="/images/lineup-booking/LineUpConcertSeries.jpg"
                  alt="LineUp Concert Series & Kikits Launch"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#CFC8CF] mb-6">
                  How Experiences Amplified Our Software
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  This event showcased how our software platforms work together
                  to create memorable experiences. Each platform played a unique
                  role in bringing the event to life.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  LineUp: Bringing the Artists
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We created LineUp as an event management platform. Here&apos;s
                  how we used experiences to amplify it: LineUp curated the live
                  talent for the evening, bringing together artists and creating
                  the musical experience that defined the event.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The platform&apos;s ability to connect artists with venues was
                  showcased through this real-world experience, demonstrating
                  how LineUp facilitates creative collaborations and brings
                  music to communities.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Planet Good Times: Creating the Event
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We created Planet Good Times as an event brand. Here&apos;s
                  how we used experiences to amplify it: Planet Good Times
                  designed and executed the entire event experience, from venue
                  coordination to atmosphere creation.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The brand&apos;s mission to spread joy through immersive
                  experiences was embodied in this event, showcasing how Planet
                  Good Times transforms spaces into memorable community
                  gatherings.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Kikits: Selling the Tickets
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We created Kikits as a ticketing platform. Here&apos;s how we
                  used experiences to amplify it: Kikits powered the ticket
                  sales for the launch party, allowing users to discover the
                  event, purchase tickets, and experience the platform in
                  action.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The launch party served as a real-world demonstration of
                  Kikits&apos; capabilities, giving users hands-on experience
                  with the platform and showcasing how digital ticketing
                  simplifies event management.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Collaborative Experience
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  This event proved how our software platforms work together to
                  build &quot;The Town of GoodTimes.&quot; Each platform
                  contributed its unique strengths to create a cohesive,
                  memorable experience.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The collaboration demonstrated the power of integrated
                  software solutions, showing how strategic partnerships between
                  platforms can amplify individual capabilities and create
                  greater value for communities.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Planet Good Times Halloween Crawl */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Planet Good Times: How Experiences Amplified the Brand
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We created Planet Good Times as an event brand. Here&apos;s
                  how we used experiences to amplify it: The 2nd Annual
                  GoodTimes Halloween Crawl transformed three distinct locations
                  into an immersive Halloween journey through Bentonville&apos;s
                  nightlife.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The experience kicked off at Loveless, moved to The Barber,
                  and culminated at Lady Slipper with a private entrance dance
                  party. We coordinated the entire experience, managing the flow
                  between locations and curating entertainment that embodied the
                  &quot;GoodTimes or Better&quot; spirit.
                </p>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30 mt-6">
                  <h4 className="text-xl font-semibold text-[#CFC8CF] mb-3">
                    Experience Elements
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

      <Footer />
    </main>
  );
}
