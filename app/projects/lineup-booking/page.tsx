"use client";

import { Header } from "@/components/Header";
import { PinnedHero } from "@/components/PinnedHero";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

export default function LineupBookingPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <HeroCarousel
          slides={[
            {
              title: "Lineup Booking",
              subtitle: "Booking, Payments, Connections — All in One Platform",
              description:
                "Lineup Booking is a modern platform built to bring artists, venues, and live events together. From discovery and booking to payments and event management, Lineup turns the scattered booking process into a streamlined digital workflow — built for the next era of live entertainment.",
              backgroundImage: "/images/lineup-booking/LineUpConcertSeries.jpg",
              mainImage: "/images/lineup-booking/profile-schedule.png",
              button: {
                text: "Visit Lineup Booking",
                href: "https://lineupbooking.com",
              },
            },
          ]}
        />

        {/* Challenge + Opportunity */}
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
              {/* CHALLENGE */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Challenge: A Disconnected Booking World
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  The live entertainment industry runs on relationships — but
                  *finding* those relationships is often messy. Artists send
                  cold messages. Venues dig through emails. Booking forms get
                  lost, dates double-book, and payments live in scattered
                  spreadsheets.
                </p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
                  Lineup Booking emerged from a simple belief:{" "}
                  <span className="text-[#4E79A7]">
                    artists and venues should spend less time coordinating and
                    more time creating memorable events.
                  </span>
                </p>
              </div>

              {/* OPPORTUNITY */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl text-[#CFC8CF] font-bold mb-6">
                    Opportunity: A Platform Built for Live Music
                  </h3>
                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    We saw the opportunity to build a unified booking platform
                    where artists and venues could discover each other, handle
                    payouts, manage documents, share availability, and review
                    each other — all without leaving the platform.
                  </p>
                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    Instead of cobbling together DMs, calendars, text messages,
                    invoices, and PDFs, Lineup centralizes the entire lifecycle
                    of event booking into one seamless flow.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    The result is a vibrant digital ecosystem where live
                    entertainment thrives on connection, trust, and clarity.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Key Challenges We Addressed
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex">
                      <span className="text-[#4E79A7] mr-2">•</span> Scattered
                      communication across texts, email, and social media
                    </li>
                    <li className="flex">
                      <span className="text-[#4E79A7] mr-2">•</span> Manual
                      spreadsheets for booking, payments, and scheduling
                    </li>
                    <li className="flex">
                      <span className="text-[#4E79A7] mr-2">•</span> No
                      centralized way to verify artists, share documents, or
                      share expectations
                    </li>
                    <li className="flex">
                      <span className="text-[#4E79A7] mr-2">•</span> Difficulty
                      finding new talent or matching artists to the right venue
                    </li>
                    <li className="flex">
                      <span className="text-[#4E79A7] mr-2">•</span> No unified
                      payment flow for deposits, payouts, and settlement
                    </li>
                  </ul>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* SOLUTION — Technology */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              {/* HEADER */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl text-[#CFC8CF] font-bold mb-6">
                  Solution: A Modern Platform for Booking & Payments
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Lineup Booking is powered by a modern React + TypeScript stack
                  optimized for speed, clarity, and scale. We architected the
                  entire front-end platform — from the booking workflows and
                  calendars to Stripe-backed payments and document management.
                </p>
              </div>

              {/* STACK */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 md:order-1">
                  <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                    <h3 className="text-xl text-[#CFC8CF] font-semibold mb-4">
                      Technology Stack
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex">
                        <span className="text-[#4E79A7] mr-2">•</span> React 18
                        + TypeScript for a scalable, type-safe architecture
                      </li>
                      <li className="flex">
                        <span className="text-[#4E79A7] mr-2">•</span> Vite for
                        blazing-fast dev experience
                      </li>
                      <li className="flex">
                        <span className="text-[#4E79A7] mr-2">•</span> Tailwind
                        + MUI for a hybrid design system with custom branding
                      </li>
                      <li className="flex">
                        <span className="text-[#4E79A7] mr-2">•</span> Stripe
                        for deposits, payouts, and full financial workflows
                      </li>
                    </ul>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="order-1 md:order-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30">
                    <Image
                      src="/images/lineup-booking/LineUpDudes.png"
                      alt="Lineup Booking Concert Series"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-[#3F395B]/50 border border-[#4E79A7]/30 p-6 rounded-xl">
                  <h3 className="text-xl text-[#CFC8CF] font-semibold mb-4">
                    Booking Architecture
                  </h3>
                  <p className="text-gray-300">
                    Artists and venues manage inquiries, booking terms, date
                    proposals, and confirmations through a structured workflow
                    designed to eliminate guesswork.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 border border-[#4E79A7]/30 p-6 rounded-xl">
                  <h3 className="text-xl text-[#CFC8CF] font-semibold mb-4">
                    Payment Flows
                  </h3>
                  <p className="text-gray-300">
                    Deposits, payouts, and settlements run through Stripe’s
                    secure payment rails — providing clarity and trust for both
                    parties.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 border border-[#4E79A7]/30 p-6 rounded-xl">
                  <h3 className="text-xl text-[#CFC8CF] font-semibold mb-4">
                    Profiles & Discovery
                  </h3>
                  <p className="text-gray-300">
                    Rich profiles, music library features, and discovery tools
                    help artists and venues find their perfect match.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Engagement / What Happened */}
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
              {/* HEADER */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl text-[#CFC8CF] font-bold mb-6">
                  Engagement: A Platform That Moves the Music Scene Forward
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Lineup Booking has become the backbone for connections across
                  the independent live music ecosystem. Artists find venues that
                  understand them; venues discover new talent; payments run
                  smoothly; and event calendars fill with less friction.
                </p>
              </div>

              {/* CONTENT */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                {/* LEFT */}
                <div>
                  <h3 className="text-2xl md:text-4xl text-[#CFC8CF] font-bold mb-6">
                    Stronger Artist–Venue Relationships
                  </h3>
                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    Artists now have a central hub where they can build a
                    presence, share music, request bookings, track payments, and
                    manage documents. Lineup makes the business side of music
                    easier so creatives can focus on the craft.
                  </p>
                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    Venues benefit from discovery tools, scheduling workflows,
                    and organized booking pipelines. Instead of sorting through
                    endless messages, they get real data, real profiles, and
                    real communication.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    The result? A healthier, more connected entertainment
                    community.
                  </p>
                </div>

                {/* RIGHT */}
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl text-[#CFC8CF] font-semibold mb-4">
                    Engagement Outcomes
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex">
                      <span className="text-[#4E79A7] mr-2">•</span> Faster
                      booking cycles and fewer missed opportunities
                    </li>
                    <li className="flex">
                      <span className="text-[#4E79A7] mr-2">•</span> Verified
                      profiles and document handling streamline trust
                    </li>
                    <li className="flex">
                      <span className="text-[#4E79A7] mr-2">•</span>{" "}
                      Stripe-backed financial flows create accountability and
                      clarity
                    </li>
                    <li className="flex">
                      <span className="text-[#4E79A7] mr-2">•</span> Playlists,
                      libraries, and saved venues deepen user engagement
                    </li>
                    <li className="flex">
                      <span className="text-[#4E79A7] mr-2">•</span> Reviews &
                      ratings help build trust and elevate local talent
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3-COLUMN */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-[#3F395B]/50 border border-[#4E79A7]/30 p-6 rounded-xl">
                  <h3 className="text-xl text-[#CFC8CF] font-semibold mb-4">
                    Artist Growth
                  </h3>
                  <p className="text-gray-300">
                    Artists find more shows, build better profiles, get paid
                    faster, and gain long-term relationships with venues.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 border border-[#4E79A7]/30 p-6 rounded-xl">
                  <h3 className="text-xl text-[#CFC8CF] font-semibold mb-4">
                    Venue Efficiency
                  </h3>
                  <p className="text-gray-300">
                    Venues streamline booking workflows, keep calendars filled,
                    and discover talent that fits their vibe.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 border border-[#4E79A7]/30 p-6 rounded-xl">
                  <h3 className="text-xl text-[#CFC8CF] font-semibold mb-4">
                    Community Impact
                  </h3>
                  <p className="text-gray-300">
                    The platform strengthens local music scenes by giving both
                    sides an easier, more professional way to connect.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* BUILD STORY */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl text-[#CFC8CF] font-bold mb-6">
                  The Build: Engineering a Booking Ecosystem
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Lineup Booking wasn’t just a website — it was a platform built
                  from the ground up. Architecting availability systems,
                  messaging, document handling, payments, and reviews required
                  careful planning, consistent modeling, and scalable design.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Architecture */}
                <div className="bg-[#3F395B]/50 border border-[#4E79A7]/30 p-8 rounded-xl">
                  <h3 className="text-2xl text-[#CFC8CF] font-semibold mb-4">
                    Platform Architecture
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We structured the platform around React, TypeScript, and a
                    service-driven architecture. Validation (Zod), forms (RHF),
                    maps, payments, and calendars all plug into a consistent
                    data model for artists, venues, events, and bookings.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The entire UI is powered by a modular component system,
                    allowing rapid iteration without sacrificing clarity.
                  </p>
                </div>

                {/* UX */}
                <div className="bg-[#3F395B]/50 border border-[#4E79A7]/30 p-8 rounded-xl">
                  <h3 className="text-2xl text-[#CFC8CF] font-semibold mb-4">
                    User Experience Design
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We crafted flows that feel intuitive for both sides.
                    Messaging, availability selection, deposit payments,
                    profiles, document verification — every piece feels
                    connected and seamless.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Artists and venues interact with the platform through clean
                    layouts, bold visuals, and frictionless steps.
                  </p>
                </div>

                {/* Booking & Payments */}
                <div className="bg-[#3F395B]/50 border border-[#4E79A7]/30 p-8 rounded-xl">
                  <h3 className="text-2xl text-[#CFC8CF] font-semibold mb-4">
                    Booking & Payments Engine
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The booking engine handles negotiations, offers, date
                    proposals, and confirmations. Stripe powers deposits and
                    payouts, enabling safe, transparent transactions.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This unified flow eliminates misunderstandings and helps
                    both sides trust the process.
                  </p>
                </div>

                {/* Community */}
                <div className="bg-[#3F395B]/50 border border-[#4E79A7]/30 p-8 rounded-xl">
                  <h3 className="text-2xl text-[#CFC8CF] font-semibold mb-4">
                    Built for Community Growth
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By centralizing booking and communication, Lineup supports
                    local music ecosystems. Events happen more often, artists
                    stay booked, and venues keep calendars full.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The platform grows alongside the community it empowers.
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
