import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { PinnedHero } from "@/components/PinnedHero";

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
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="relative z-30 py-16 md:py-24 bg-black">
        <div className="max-w-3xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
            Strategy
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Planning and architecture that connects software, stories,
            engagement, and experiences
          </p>
        </div>
      </section>

      {/* Lineup Software Architecture */}
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
                  Lineup Software Architecture
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We worked with Lineup to architect their software platform,
                  designing the system architecture, user flows, and technical
                  infrastructure that would power their event management and
                  ticketing platform.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The strategy involved mapping out how users would discover
                  events, purchase tickets, and engage with the platform across
                  web and mobile experiences.
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
      <section className="relative py-16 md:py-32 bg-black">
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
      </section>

      {/* BMC Event Planning */}
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
                  BMC Event Planning
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We worked with BMC to plan their party, developing a
                  comprehensive event strategy that included venue selection,
                  programming, attendee experience design, and technical
                  requirements.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The planning process involved coordinating multiple vendors,
                  designing the flow of the event, and ensuring all technical
                  and logistical elements aligned with the brand experience.
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

      {/* Social Media Rollout Strategy */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Rollout Strategy
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Content calendar and posting schedule</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Platform-specific content adaptation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Engagement and community management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Performance tracking and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Social Media Rollout
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We planned social media rollouts for multiple clients,
                  developing comprehensive strategies that aligned content
                  creation, posting schedules, and engagement tactics with
                  broader marketing goals.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Each rollout strategy was customized to the brand's voice,
                  target audience, and platform-specific best practices,
                  ensuring consistent messaging across all touchpoints.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Kikits Strategy Example */}
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
                Kikits: A Multi-Faceted Strategy
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Kikits demonstrates how strategy connects across all our
                services. Here's how we approached it from a strategic planning
                perspective:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  UI/UX Planning
                </h3>
                <p className="text-gray-300">
                  Designed user flows, wireframes, and interaction patterns for
                  the event discovery and ticketing platform.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Platform Architecture
                </h3>
                <p className="text-gray-300">
                  Planned the technical infrastructure, database schema, and API
                  design to support scalable event management.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Go-to-Market Strategy
                </h3>
                <p className="text-gray-300">
                  Developed launch plans, user acquisition strategies, and
                  growth frameworks for the platform.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>
    </main>
  );
}
