"use client";

import { Header } from "@/components/Header";
import { PinnedHero } from "@/components/PinnedHero";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Footer } from "@/components/Footer";
import { ProjectHelpCTA } from "@/components/ProjectHelpCTA";

export default function AstroTowPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <PinnedHero
        backgroundImage="/images/astro/astro.png"
        title="Astro Tow"
        subtitle="Simplifying Operations for Tow Truck Companies"
        body="An app built for tow truck companies to streamline their operations and improve efficiency with law enforcement. We designed and developed a mobile-first solution that helps tow operators manage jobs, communicate with dispatch, and integrate with law enforcement workflows."
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
                What we did for Astro Tow
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                We built a custom mobile app for tow truck companies that
                simplifies daily operations, improves coordination with law
                enforcement, and helps operators work more efficiently. The app
                addresses the unique challenges of the towing industry—job
                management, real-time communication, and regulatory compliance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Operations at Your Fingertips
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Tow truck operators need tools that work in the field—on the
                  road, at accident scenes, and in coordination with law
                  enforcement. We designed Astro Tow to be intuitive and
                  reliable, so operators can focus on the job instead of
                  paperwork.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The app streamlines job assignment, status updates, and
                  communication between drivers, dispatch, and law
                  enforcement—all in one place.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Mobile app for tow truck operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Job management and dispatch workflow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Law enforcement integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>User-centric design for field use</span>
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
                We combined user research with modern app development practices
                to build a solution that fits the towing industry. Our process
                prioritized usability in the field, clear workflows, and
                integration points that make coordination with law enforcement
                seamless.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  User-Centered Design
                </h3>
                <p className="text-gray-300">
                  We spent time understanding how tow operators work in the
                  field—from accident scenes to impound lots—and designed
                  interfaces that reduce friction and support fast decision
                  making.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Modern Tech Stack
                </h3>
                <p className="text-gray-300">
                  We built the app with technologies that prioritize
                  performance, reliability, and maintainability—ensuring it can
                  scale as operations grow and adapt to changing requirements.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Industry Alignment
                </h3>
                <p className="text-gray-300">
                  We aligned the product with towing industry norms, law
                  enforcement expectations, and regulatory requirements—so
                  operators can trust the app in real-world scenarios.
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
