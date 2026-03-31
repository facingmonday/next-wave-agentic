"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Footer } from "@/components/Footer";
import { ProjectHelpCTA } from "@/components/ProjectHelpCTA";

const HeroSlides = [
  {
    title: "Chasin Payson",
    subtitle: "Event Microsite + Registration Experience",
    description:
      "A Red Bull-supported athlete activation and official shakeout ride for Rule of Three Week in Bentonville. We built a high-energy microsite experience designed to convert hype into registrations.",
    backgroundImage: "/images/chasinpayson/chasinpayson_home.jpeg",
    button: {
      text: "Visit chasinpayson.com",
      href: "https://chasinpayson.com/",
    },
  },
];

const ShowcaseImages = [
  {
    src: "/images/chasinpayson/chasinpayson_home.jpeg",
    alt: "Chasin Payson homepage hero",
    title: "High-energy hero storytelling",
    description:
      "The homepage is structured like a trailer with bold visuals, punchy copy, and clear calls to action.",
  },
  {
    src: "/images/chasinpayson/chasinpayson_map.jpeg",
    alt: "Chasin Payson course map",
    title: "Course and event logistics",
    description:
      "Key ride details are surfaced quickly: route context, pace expectations, and what riders need to know before lineup.",
  },
  {
    src: "/images/chasinpayson/chasinpayson_bio.jpeg",
    alt: "Payson athlete profile section",
    title: "Athlete credibility and trust",
    description:
      "The athlete profile adds legitimacy and narrative weight, helping visitors understand the event and why it matters.",
  },
  {
    src: "/images/chasinpayson/chasinpayson-logo.svg",
    alt: "Chasin Payson logo lockup",
    title: "Brand-forward identity",
    description:
      "Brand assets were used intentionally to create a distinct identity and keep sponsor and event messaging cohesive.",
  },
  {
    src: "/images/chasinpayson/RB_Standard_Logo_rgb_2017.png",
    alt: "Red Bull sponsor logo",
    title: "Sponsor integration",
    description:
      "Sponsor presence was integrated directly into the flow so visibility supports conversion rather than distracting from it.",
  },
  {
    src: "/images/chasinpayson/CP_9x16_Logos.jpg",
    alt: "Chasin Payson branded social graphics",
    title: "Campaign-ready visual system",
    description:
      "Supporting assets make the microsite easy to promote across social campaigns, partner channels, and event week traffic.",
  },
];

export default function ChasinPaysonPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroCarousel slides={HeroSlides} />

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
                What we built
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Chasin Payson is a Red Bull-supported athlete activation and the
                official shakeout ride for Rule of Three Week in Bentonville,
                Arkansas. The goal was to create more than just an event page;
                this needed to feel like the kickoff moment to an entire week of
                cycling culture. We approached this as a high-energy microsite
                experience, not a traditional registration page.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  The challenge
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Most event websites are static, informational, and
                  forgettable. This event needed to do the opposite.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Capture the energy of a pro-led ride</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Clearly explain a unique format (progressive pace, not a
                      race)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Handle registration, waivers, and operational logistics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Support sponsor visibility, especially Red Bull
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Convert hype into real signups on mobile</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  The solution
                </h3>
                <p className="text-gray-300 leading-relaxed mb-5">
                  We built a dedicated microsite at chasinpayson.com that acts
                  as the central hub for social campaigns, sponsor promotions,
                  Rule of Three traffic, and the local cycling community.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The journey is intentionally simple and conversion-oriented:
                  <span className="text-[#4E79A7] font-medium">
                    {" "}
                    Hook → Understand → Trust → Register
                  </span>
                  .
                </p>
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
                Experience design and content flow
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto">
                Instead of overwhelming users with dense information, content is
                layered to remove friction and build excitement: what the event
                is, how it works, who can ride, course breakdown, Rule of Three
                integration, FAQ, and logistics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#CFC8CF] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
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
                Video-first and operational layer
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                We treated video as a core storytelling asset and built the
                registration flow to support real event operations behind the
                scenes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Kikits integration
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Free registration with a 250-rider cap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Digital waiver collection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>QR-based check-in and number plate validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Sponsor activation via Red Bull redemption QR</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Operational outcomes
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Real-time registration tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Capacity management and onsite scanning support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Rider data collection for organizers and sponsors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Lightweight flow that keeps the rider experience simple
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
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                Why it is different
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                This is not just a microsite. It is a lightweight event
                platform that combines storytelling, registration, and
                operations in one conversion-focused flow.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Most event sites inform. This one pulls people in and gets them
                to act.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  The result
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>A centralized and shareable event destination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>A frictionless registration experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Strong sponsor integration throughout the journey</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      A repeatable model for future events and activations
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Project framing
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Chasin Payson sets the foundation for modern event microsites
                  that evolve from static pages into interactive,
                  conversion-driven experiences powered by real-time
                  infrastructure.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      <ProjectHelpCTA />
      <Footer />
    </main>
  );
}
