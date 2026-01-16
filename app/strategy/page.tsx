import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Footer } from "@/components/Footer";
import HeroCarousel, { type HeroSlide } from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "Strategy | Next Wave Agentic",
  description:
    "Strategic planning and architecture for software, marketing, events, and social media campaigns.",
  openGraph: {
    title: "Strategy | Next Wave Agentic",
    description:
      "Explore our strategic planning and architecture work across software, marketing, and events.",
    type: "website",
  },
};

export default function StrategyPage() {
  const HeroSlides: HeroSlide[] = [
    {
      title: "Strategy",
      subtitle: "Strategic Planning and Architecture",
      description:
        "We create strategic plans and architectures for software, marketing, and events. We identify real-world problems and brainstorm solutions to create impactful experiences.",
      backgroundImage:
        "/images/bentonville-watertower/bentonville-watertower-drone-047.jpg",
    },
    {
      title: "Kikits: Strategic Problem-Solving",
      subtitle: "Digital Ticketing Platform",
      description:
        "We created Kikits as a digital ticketing platform. View how we strategized this software and identified real-world problems through Planet Good Times events to create dynamic QR codes and seamless digital experiences.",
      backgroundImage: "/images/kikits/kikits.jpg",
      mainImage: "/images/kikits/kikits.png",
      button: {
        text: "View How We Strategized Kikits",
        href: "#kikits-strategy",
        variant: "primary",
      },
    },
    {
      title: "LineUp: Software Architecture",
      subtitle: "Event Management Platform",
      description:
        "We created LineUp as an event management platform. View how we strategized this software by architecting the system architecture, user flows, and technical infrastructure from the ground up.",
      backgroundImage: "/images/lineup-booking/LineUpDudes.png",
      button: {
        text: "View How We Strategized LineUp",
        href: "#lineup-strategy",
        variant: "primary",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroCarousel slides={HeroSlides} />

      {/* Kikits Strategy */}
      <section
        id="kikits-strategy"
        className="relative py-16 md:py-32 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Kikits: How Strategy Amplified the Platform
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We created Kikits as a digital ticketing platform. Our
                  strategic approach identified real-world problems through
                  Planet Good Times events: users struggling with paper tickets,
                  lost ticket stubs, and event organizers needing better
                  tracking systems.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our strategy involved recognizing these pain points and
                  brainstorming solutions that led to dynamic QR codes, digital
                  ticket management, and seamless redemption systems. This
                  strategic foundation shaped how Kikits operates today.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Strategic Elements
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Problem identification through real event experiences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Dynamic QR code system architecture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Digital-first user experience design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Event organizer workflow optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Lineup Software Architecture */}
      <section id="lineup-strategy" className="relative py-16 md:py-32">
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
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  LineUp: How Strategy Amplified the Platform
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We created LineUp as an event management platform. Our
                  strategic approach involved architecting the entire system
                  from the ground up, designing how artists and venues would
                  connect, how users would discover events, and how the platform
                  would scale.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The strategy mapped out user flows, technical infrastructure,
                  and system architecture that would power seamless event
                  management and ticketing across web and mobile experiences.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Key Strategic Elements
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>System architecture and database design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>User experience flows and wireframes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>API structure and integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Scalability and performance planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Uniting Wealth Partners Marketing Strategy */}
      {/* <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Marketing Strategy
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Brand positioning and messaging framework</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Content strategy and campaign concepts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Target audience definition and personas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Channel strategy and distribution plan</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Uniting Wealth Partners
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We discussed marketing concepts with Uniting Wealth Partners,
                  developing a strategy that would reframe financial services
                  messaging through relatable humor and storytelling.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The strategy focused on addressing financial guilt and anxiety
                  through content that felt authentic and approachable, rather
                  than traditional financial services marketing.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section> */}

      {/* BMC Event Planning */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  BMC: How Strategy Amplified the Event
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We created a comprehensive event strategy for BMC&apos;s
                  party. Our strategic approach involved developing the entire
                  event framework, from venue selection to attendee experience
                  design.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The strategy coordinated multiple vendors, designed the event
                  flow, and ensured all technical and logistical elements
                  aligned with the brand experience, creating a seamless and
                  memorable event.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Event Strategy Components
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Event concept and theme development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Timeline and programming structure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Vendor coordination and management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Technical and production planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Astro Strategy */}
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
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Astro: How Strategy Amplified Operations
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We created Astro as an app for tow truck companies. Our
                  strategic approach focused on identifying operational
                  inefficiencies and designing solutions that would simplify
                  workflows and improve efficiency with law enforcement.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The strategy involved mapping out how tow truck operations
                  could be streamlined, creating seamless integrations, and
                  building a platform that would transform how companies manage
                  their operations.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Strategic Elements
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Operational workflow analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Law enforcement integration planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>System architecture for efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>User experience optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
