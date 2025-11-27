"use client";

import { Header } from "@/components/Header";
import { PinnedHero } from "@/components/PinnedHero";
import HeroCarousel from "@/components/HeroCarousel";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Footer } from "@/components/Footer";
import Image from "next/image";

const HeroSlides = [
  {
    title: "CityView CMS",
    subtitle: "AI-Powered Content & Community Management for Cities",
    description:
      "CityView CMS is a multi-tenant, AI-assisted content platform built for towns, cities, and regions that need to keep residents informed without hiring a full-time digital team. From events and news to locations, tickets, and QR-powered experiences, CityView turns municipal data into clear, timely, resident-facing storytelling.",
    backgroundImage: "/images/cityview/cityview-dashboard.png",
    button: {
      text: "Visit CityView CMS",
      href: "https://cityviewcms.com",
    },
  },
];

export default function CityViewCMSPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <HeroCarousel slides={HeroSlides} />
        {/* <PinnedHero
          backgroundVideo=""
          title="CityView CMS"
          subtitle="AI-Powered Content & Community Management for Cities"
          body="CityView CMS is a multi-tenant, AI-assisted content platform built for towns, cities, and regions that need to keep residents informed without hiring a full-time digital team. From events and news to locations, tickets, and QR-powered experiences, CityView turns municipal data into clear, timely, resident-facing storytelling."
          scrollDistance={2400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
        /> */}

        {/* Challenge & Opportunity Section */}
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
                  Challenge: Fragmented City Communication
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
                  Most cities try to manage digital communication across a maze
                  of tools: separate sites for events, static pages for
                  locations, third-party ticketing links, and social posts that
                  never quite line up. Staff are busy, content is scattered, and
                  residents are left digging for the information they need.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  CityView started from a simple question:{" "}
                  <span className="text-[#4E79A7]">
                    what would it look like if a city had a single, AI-assisted
                    system where events, locations, businesses, news, tickets,
                    and QR-powered experiences all lived together?
                  </span>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    Opportunity: A Platform for Civic Storytelling
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    We saw an opportunity to treat a city the way a modern brand
                    treats its digital presence. One place where staff could
                    manage everything: events, itineraries, locations,
                    businesses, tickets, memberships, and content — with AI
                    helping fill in the gaps instead of adding more work.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Instead of one-off websites or static portals, we set out to
                    build a reusable, multi-tenant CMS designed specifically for
                    civic use cases. The goal was simple:{" "}
                    <span className="text-[#4E79A7]">
                      let cities act quickly, publish confidently, and keep
                      residents in the loop without needing a dedicated
                      full-stack team.
                    </span>
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    CityView CMS became the backbone of that idea — an
                    admin-first platform where city teams can manage everything
                    happening in their community and send it anywhere it needs
                    to go.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Challenges We Set Out to Solve
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Content scattered across multiple systems, vendors, and
                        spreadsheets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Staff without technical backgrounds asked to manage
                        complex digital tools
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        No single source of truth for events, locations,
                        businesses, or tickets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Vendors owning the resident relationship instead of the
                        city owning its own data
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Limited ways to experiment with QR codes, passes, or new
                        digital programs without starting from scratch
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Solution Section - Software & Architecture */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Solution: A Modern, AI-Assisted City CMS
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Under the hood, CityView CMS is a modern React + TypeScript
                  admin application powered by a custom API layer. It combines a
                  flexible content model with AI tools, QR codes, ticketing, and
                  integrations that cities actually use — all inside a single,
                  cohesive interface.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="order-2 md:order-1">
                  <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                    <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                      Technology Stack & Architecture
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          <span className="font-semibold">
                            React + TypeScript
                          </span>{" "}
                          for a strongly typed, component-driven admin
                          experience
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          <span className="font-semibold">
                            Material UI + Tailwind CSS
                          </span>{" "}
                          for a custom design system with rapid layout control
                        </span>
                      </li>

                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          <span className="font-semibold">MongoDB</span> for for
                          data storage,{" "}
                          <span className="font-semibold">Stripe</span> for
                          subscriptions and ticket payments, and{" "}
                          <span className="font-semibold">OpenAI</span> for AI
                          assistance
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30 bg-[#4178E1] flex items-center justify-center">
                    <Image
                      src="/images/cityview/cms_logo_black.png"
                      alt="CityView CMS"
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
                    Unified Content Model
                  </h3>
                  <p className="text-gray-300">
                    Events, locations, businesses, itineraries, tickets, QR
                    codes, and members share a consistent content model, making
                    it easy to build new programs on top without reinventing the
                    stack every time.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Role-Based Access & Workflows
                  </h3>
                  <p className="text-gray-300">
                    A granular role system controls who can publish, approve,
                    and manage different parts of the city&apos;s digital
                    presence — from tourism teams to economic development,
                    marketing, and admin staff.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    AI-Assisted Creation
                  </h3>
                  <p className="text-gray-300">
                    AI tools help draft event descriptions, news posts,
                    itineraries, and business spotlights so staff can start from
                    a strong first version instead of a blank page — then refine
                    with their local expertise.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Engagement Section - What Happened After */}
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
                  Engagement: From Static Pages to Living City Experiences
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Once CityView CMS went live, cities were able to treat their
                  digital presence as a continuous, living story of what&apos;s
                  happening locally — instead of a static website they dread
                  updating. Staff workflows got faster, resident information got
                  clearer, and new programs could be launched without chasing
                  yet another vendor.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    What Changed for City Teams
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Instead of manually updating multiple tools, staff now log
                    into one system to manage events, locations, tickets, and
                    stories. AI suggestions help them move faster, while
                    reusable templates and forms keep content consistent across
                    departments.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    QR codes and digital passes created new ways to engage
                    residents — from event check-ins to scavenger hunts, walking
                    tours, and local loyalty programs. The same admin that
                    manages the content also manages the programs behind it.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    For residents, the experience is simple: a single, cohesive,
                    city-branded front door where everything feels connected —
                    events, places to go, things to do, and stories about their
                    community.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Engagement Outcomes
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Faster publishing cycles for events, news, and city
                        announcements — often reduced from days to hours
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Clear ownership of content by city teams instead of
                        being locked into external vendor workflows
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Increased usage of QR codes and passes for events,
                        programs, and campaigns — all tracked through a single
                        admin
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Consistent branding and messaging across the city&apos;s
                        public-facing sites, newsletters, and printed materials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        A foundation to add new programs (memberships, passes,
                        itineraries, sponsorships) without starting a new
                        project every time
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Staff Experience
                  </h3>
                  <p className="text-gray-300">
                    Non-technical staff can log in, find what they need, and
                    make updates without fear of “breaking the site.” The admin
                    is structured around the way cities actually work, not how
                    developers wish they did.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Resident Communication
                  </h3>
                  <p className="text-gray-300">
                    Residents see more complete event listings, richer stories,
                    and clearer information about where to go and what&apos;s
                    happening — all under a single city-branded experience.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Long-Term Impact
                  </h3>
                  <p className="text-gray-300">
                    CityView CMS gives cities a digital foundation they can grow
                    into — not grow out of. As new programs, events, and
                    partnerships come online, they plug into the same admin,
                    content model, and AI-assisted workflows.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Impact & Results Section – Deeper Build Story */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  The Build: From Admin Panel to City Platform
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  CityView CMS started as an internal admin and evolved into a
                  full-blown civic platform. Behind the scenes is a lot of quiet
                  engineering work: designing reusable patterns, building a
                  flexible schema, and wiring everything together so city teams
                  never have to think about any of it.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    Content & Data Architecture
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Events, locations, communities, businesses, news, tickets,
                    QR codes, and members are all modeled with shared concepts:
                    tags, images, time, relationships, and organizations. This
                    lets us reuse components, forms, and layouts instead of
                    building one-off solutions for every new idea.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    A dedicated services layer abstracts the API, while
                    TypeScript types and form schemas keep the UI and backend in
                    sync. When the platform grows, the admin doesn&apos;t get
                    messier — it gets richer.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    Experience & Performance
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Material UI components, Tailwind layout utilities, and
                    custom theming give CityView a consistent visual language
                    across every screen. Loading states, optimistic updates, and
                    validation patterns are standardized so the app feels fast
                    and predictable.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The result is an admin that feels closer to a modern SaaS
                    product than a government back-office tool — which is
                    exactly the point.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    Extensible Programs & QR Flows
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    QR codes, tickets, and passes are built on top of the same
                    core entities, which means cities can launch programs like
                    festivals, loyalty trails, museum crawls, or holiday
                    passports without a new codebase each time.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Scanner roles, access codes, and facts give fine-grained
                    control over who can scan, what counts as a valid scan, and
                    how those interactions are tracked for reporting.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    Built to Evolve With Cities
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    CityView CMS is intentionally not “done.” The architecture
                    leaves room for new AI flows, new content types, and new
                    front-end experiences while keeping the administrative core
                    stable and familiar for staff.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    That&apos;s the real outcome: a platform that grows with the
                    city, not one that has to be replaced the moment the
                    city&apos;s ambitions outgrow the original scope.
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
