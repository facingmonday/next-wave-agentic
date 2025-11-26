"use client";

import { Header } from "@/components/Header";
import { PinnedHero } from "@/components/PinnedHero";
import HeroCarousel from "@/components/HeroCarousel";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function OkayNWAPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <HeroCarousel
          slides={[
            {
              title: "OkayNWA",
              subtitle: "AI-Powered Event Discovery for Northwest Arkansas",
              description:
                "OkayNWA is an AI-powered event discovery platform designed specifically for Northwest Arkansas. Built to help residents and visitors discover local events, connect with the community, and explore everything NWA has to offer. The platform leverages AI to personalize event recommendations and make discovery feel natural and engaging.",
              backgroundImage: "/images/okay-nwa/okay-nwa-dash.png",
              mainImage: "/images/okay-nwa/SmartPhone_Mockup_04_03.png",
              button: {
                text: "Visit OkayNWA",
                href: "https://okaynwa.com",
              },
            },
          ]}
        />
        {/* <PinnedHero
          backgroundVideo=""
          title="OkayNWA"
          subtitle="AI-Powered Event Discovery for Northwest Arkansas"
          body="OkayNWA is an AI-powered event discovery platform designed specifically for Northwest Arkansas. Built to help residents and visitors discover local events, connect with the community, and explore everything NWA has to offer. The platform leverages AI to personalize event recommendations and make discovery feel natural and engaging."
          scrollDistance={2400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
        />

        {/* Strategy Section - Platform Development */}
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
                  Strategy: Discovering NWA Through AI
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  OkayNWA was designed to solve a fundamental challenge: making
                  event discovery in Northwest Arkansas seamless and
                  personalized. Our strategic approach focused on creating a
                  platform that leverages AI to understand user preferences and
                  surface events that matter, transforming how people discover
                  and engage with local happenings.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    Platform Philosophy
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    We built OkayNWA with the understanding that event discovery
                    should feel personal and intuitive, not overwhelming. The
                    platform was designed to make finding events feel like
                    exploration, with AI-powered recommendations that learn from
                    user preferences.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Our strategy focused on creating a user experience that
                    prioritizes discovery over search, personalization over
                    generic listings, and connection over information overload.
                    This approach has enabled OkayNWA to help thousands of users
                    discover events that align with their interests and
                    lifestyle.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    The platform serves both event-goers and event creators,
                    providing tools that make discovery simple while ensuring
                    creators can effectively reach their target audiences.
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
                        AI-powered personalization that learns from user
                        preferences
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Discovery-focused design that encourages exploration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Real-time event updates and personalized recommendations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Comprehensive event management tools for creators
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Community-building features that foster local
                        connections
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Software Section - Technology Stack */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Software: AI-Enhanced Platform Architecture
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  OkayNWA is built on a modern technology stack that prioritizes
                  AI-powered personalization, performance, and user experience.
                  The platform leverages machine learning to understand user
                  preferences and deliver personalized event recommendations,
                  making discovery feel natural and engaging.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 md:order-1">
                  <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                    <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                      Technology Stack
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          AI-powered recommendation engine for personalized
                          event discovery
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          Modern web architecture built for performance and
                          scalability
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          Real-time event updates and personalized notifications
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          Comprehensive event management tools for creators
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          User preference learning and adaptive recommendations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          Community features that foster local connections
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30 bg-[#182618] flex items-center justify-center">
                    <Image
                      src="/images/okay-nwa/OkayNWAWhite.png"
                      alt="OkayNWA"
                      width={600}
                      height={400}
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    AI Personalization
                  </h3>
                  <p className="text-gray-300">
                    The platform uses AI to learn user preferences and deliver
                    personalized event recommendations that align with interests
                    and lifestyle.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Event Discovery
                  </h3>
                  <p className="text-gray-300">
                    Discovery-focused design makes finding events feel like
                    exploration, with intuitive interfaces that surface relevant
                    happenings.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Community Connection
                  </h3>
                  <p className="text-gray-300">
                    Features that help users connect with local communities and
                    discover events that bring people together.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Engagement Section - Community Building */}
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
                  Engagement: Building NWA&apos;s Event Community
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  OkayNWA serves as the platform that powers event discovery in
                  Northwest Arkansas, helping residents and visitors discover
                  local happenings and connect with the community. The platform
                  enables seamless discovery, personalized recommendations, and
                  community engagement, creating opportunities for people to
                  explore everything NWA has to offer.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    Platform-Powered Discovery
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Through OkayNWA, we&apos;ve helped thousands of users
                    discover events that align with their interests, building a
                    vibrant community around local happenings. The platform
                    makes it easy for users to find events that matter to them,
                    with AI-powered recommendations that learn from their
                    preferences.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    For event-goers, OkayNWA transforms event discovery from a
                    time-consuming search into an intuitive exploration of local
                    happenings. The platform&apos;s AI learns from user behavior
                    to surface events that align with interests, making
                    discovery feel personal and relevant.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    For event creators, the platform provides powerful tools to
                    reach target audiences, manage event listings, and connect
                    with the NWA community.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Engagement Strategies
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        AI-powered personalization that surfaces relevant events
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Real-time updates that keep users informed about new
                        events
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Discovery-focused design that encourages exploration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Community features that foster local connections
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Comprehensive analytics that help creators understand
                        their audience
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    User Discovery
                  </h3>
                  <p className="text-gray-300">
                    Users benefit from AI-powered recommendations that help them
                    discover events aligned with their interests, making
                    exploration feel personal and relevant.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Creator Reach
                  </h3>
                  <p className="text-gray-300">
                    Event creators can reach their target audiences through
                    personalized recommendations and comprehensive event
                    management tools.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Community Growth
                  </h3>
                  <p className="text-gray-300">
                    The platform fosters genuine connections, helping build a
                    vibrant NWA event community where discovery and engagement
                    thrive.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Impact & Results Section */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  The Work Behind OkayNWA
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Creating OkayNWA required a comprehensive approach combining
                  AI-powered personalization, platform architecture, user
                  experience design, and community building. Here&apos;s what
                  went into making this project a success.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    AI-Powered Personalization
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Building OkayNWA required developing an AI recommendation
                    engine that learns from user preferences and behavior. The
                    system analyzes user interactions to understand interests
                    and deliver personalized event recommendations that feel
                    relevant and timely.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The AI-powered approach enables the platform to surface
                    events that matter to each user, making discovery feel
                    personal rather than generic.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    Platform Architecture
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The platform was architected to handle everything from event
                    discovery to personalized recommendations to community
                    engagement. The system was designed with scalability in
                    mind, ensuring reliable performance as the NWA event
                    community grows.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Modern web architecture enables fast, responsive interfaces
                    while maintaining code quality and maintainability for
                    long-term success.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    User Experience Design
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The platform&apos;s design prioritizes discovery and
                    personalization over search, creating an experience that
                    feels intuitive and engaging. Every interaction was
                    carefully crafted to make event discovery feel like
                    exploration rather than work.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This user-centric approach has resulted in a platform that
                    users love to use, building loyalty through positive
                    experiences and relevant recommendations.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    Community Impact
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    OkayNWA has helped thousands of users discover events in
                    Northwest Arkansas, connecting people with local happenings
                    and building a vibrant event community. The platform&apos;s
                    success is measured in the connections it creates and the
                    events it helps people discover.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The positive response from both event-goers and creators
                    validates our approach of prioritizing personalization and
                    discovery, demonstrating that AI can facilitate meaningful
                    connections in local communities.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
