"use client";

import { Header } from "@/components/Header";
import { PinnedHero } from "@/components/PinnedHero";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Footer } from "@/components/Footer";
import { ProjectHelpCTA } from "@/components/ProjectHelpCTA";

export default function NovaStoneCapitalAdvisorsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <PinnedHero
        backgroundImage="/images/novastone/novastone-capital-advisors.jpg"
        title="Nova Stone Capital Advisors"
        subtitle="Modernizing Brand and Engagement"
        body="A website redesign and social media strategy to modernize the Nova Stone Capital Advisors brand and drive high-intent engagement. We helped position a financial advisory firm for growth by elevating their digital presence and creating content systems that connect with the right audiences."
        scrollDistance={2400}
        startOffset="top top"
        textPosition="center"
        textAlign="center"
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
                What we did for Nova Stone Capital Advisors
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                We delivered a full website redesign and social media strategy
                that modernized Nova Stone Capital Advisors&apos; brand and
                positioned them for high-intent engagement. The work included a
                refreshed web presence, content systems, and social strategy
                built to connect with investors and clients.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Brand and Digital Transformation
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Financial advisory firms need a digital presence that conveys
                  credibility, clarity, and professionalism. We redesigned the
                  Nova Stone website to reflect their expertise while making it
                  easier for prospects to understand their services and reach
                  out.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The social media strategy complemented the website by creating
                  consistent, high-quality content that builds trust and drives
                  engagement with the right audience.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Full website redesign</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Social media strategy and content systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Brand modernization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>High-intent engagement focus</span>
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
                We combined strategic discovery with modern design and content
                best practices. Our process focused on understanding the
                firm&apos;s positioning, their ideal clients, and the channels
                that drive the most meaningful engagement—then building a
                cohesive digital presence around that strategy.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Strategic Discovery
                </h3>
                <p className="text-gray-300">
                  We started by understanding Nova Stone&apos;s positioning,
                  target audience, and competitive landscape—ensuring the
                  redesign and social strategy aligned with their business
                  goals.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Modern Web Design
                </h3>
                <p className="text-gray-300">
                  We built a clean, professional website that prioritizes
                  clarity and conversion—making it easy for prospects to
                  understand services, see credentials, and take the next step.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Content Systems
                </h3>
                <p className="text-gray-300">
                  We established social media content systems and workflows that
                  support consistent, high-quality output—helping Nova Stone
                  build presence and engagement over time.
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
