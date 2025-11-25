"use client";

import { Header } from "@/components/Header";
import { PinnedHero } from "@/components/PinnedHero";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { VideoGallery } from "@/components/VideoGallery";
import { VideoThumbnailGrid } from "@/components/VideoThumbnailGrid";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";

export default function KikitsPage() {
  return (
    <>
      <PageLoader minLoadTime={1500} />
      <main className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <PinnedHero
          backgroundVideo="https://vimeo.com/1105184966"
          title="Kikits"
          subtitle="Discover Events. Connect with Community."
          body="Kikits is an event discovery and ticketing platform that connects users with local events. Built with React, Next.js, and TypeScript, featuring real-time event updates, seamless ticket purchasing, and user-friendly event management tools. We also created a suite of AI-powered spokesperson and product videos designed for high-performing social and web campaigns."
          scrollDistance={2400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
          ctaLabel="Watch Video"
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
                  Strategy: Building Community Through Events
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Kikits was designed to solve a fundamental challenge: making
                  event discovery and ticketing seamless while fostering genuine
                  community connections. Our strategic approach focused on
                  creating a platform that feels intuitive, reliable, and
                  community-driven, transforming how people discover and engage
                  with local events.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    Platform Philosophy
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    We built Kikits with the understanding that events are about
                    more than just tickets—they&apos;re about connection,
                    community, and shared experiences. The platform was designed
                    to make event discovery feel natural and engaging, not
                    transactional.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Our strategy focused on creating a user experience that
                    prioritizes discovery over search, community over
                    transaction, and connection over convenience. This approach
                    has enabled Kikits to facilitate hundreds of events,
                    building a vibrant community around shared experiences.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    The platform serves both event creators and attendees,
                    providing tools that make event management simple while
                    ensuring attendees have a seamless experience from discovery
                    to attendance.
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
                        User-centric design that prioritizes discovery and
                        community
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Real-time event updates and seamless ticket purchasing
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
                        AI-powered content creation for marketing and engagement
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Community-building features that foster connection
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 text-center">
                Kikits Product Videos
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
                AI-powered spokesperson videos and product narratives that
                explain, showcase, and connect with audiences through authentic
                storytelling.
              </p>
              <VideoThumbnailGrid
                vimeoUrl="https://vimeo.com/1110591196?fl=ip&fe=ec"
                thumbnails={[
                  {
                    id: "kikits_spokesperson",
                    image: "/images/projects/kikits/spokesperson.jpeg",
                    title: "AI Spokesperson",
                    description:
                      "We created an AI-generated spokesperson that embodies the Kikits brand voice, delivering product information with warmth and authenticity.",
                  },
                  {
                    id: "kikits_explain",
                    image: "/images/projects/kikits/explain.jpeg",
                    title: "Product Explanation",
                    description:
                      "AI helps us structure product explanations that are clear, engaging, and memorable, turning features into benefits through storytelling.",
                  },
                  {
                    id: "kikits_showcase",
                    image: "/images/projects/kikits/show.jpeg",
                    title: "Product Showcase",
                    description:
                      "Visual narratives that showcase the platform's capabilities through user journeys and real-world scenarios.",
                  },
                  {
                    id: "kikits_relate",
                    image: "/images/projects/kikits/relate.jpeg",
                    title: "Relatable Content",
                    description:
                      "Content that connects with audiences by addressing their needs and demonstrating how Kikits solves real problems.",
                  },
                ]}
              />
            </ContentReveal>
          </div>
        </section>

        {/* Software Section - Technology Stack */}
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
                  Software: Modern Platform Architecture
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Kikits is built on a modern technology stack that prioritizes
                  performance, scalability, and user experience. The platform
                  leverages React, Next.js, and TypeScript to deliver a seamless
                  experience for both event creators and attendees, with
                  real-time updates and intuitive event management tools.
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
                          React and Next.js for fast, responsive user interfaces
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>TypeScript for type-safe, maintainable code</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          Real-time event updates and ticket availability
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          Seamless ticket purchasing and payment processing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          Comprehensive event management and analytics tools
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#4E79A7] mr-2">•</span>
                        <span>
                          AI-powered content creation for marketing campaigns
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    Building for Scale
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Kikits was architected to handle everything from intimate
                    concerts to large-scale festivals, with a scalable backend
                    infrastructure that ensures reliable performance even during
                    peak event times. The platform&apos;s real-time capabilities
                    keep users informed about event updates, ticket
                    availability, and community activity.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    The event management tools empower creators to easily set up
                    events, manage ticket sales, track attendance, and analyze
                    performance. This comprehensive approach makes Kikits both a
                    platform for discovery and a tool for event success.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Looking forward, we continue to enhance the platform with
                    new features, improved user experiences, and expanded
                    capabilities that make event discovery and management even
                    more seamless and engaging.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    User Experience
                  </h3>
                  <p className="text-gray-300">
                    The platform prioritizes intuitive design and seamless
                    interactions, making event discovery feel natural and
                    engaging rather than transactional.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Event Management
                  </h3>
                  <p className="text-gray-300">
                    Comprehensive tools enable event creators to manage every
                    aspect of their events, from setup to analytics, all in one
                    platform.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Real-Time Updates
                  </h3>
                  <p className="text-gray-300">
                    Live event information, ticket availability, and community
                    activity keep users informed and engaged throughout the
                    event lifecycle.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Stories Section - Video Gallery */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Stories: Kikits in Action
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                  Our collection of AI-powered product videos brings the Kikits
                  platform to life, explaining features, showcasing
                  capabilities, and connecting with audiences through authentic
                  storytelling. Each video demonstrates how Kikits makes event
                  discovery and management seamless.
                </p>
              </div>
              <div className="py-8">
                <VideoGallery
                  videos={[
                    {
                      id: "kikits-main",
                      videoUrl: "https://vimeo.com/1110591196?fl=ip&fe=ec",
                      thumbnailUrl: "/images/projects/kikits/spokesperson.jpeg",
                      title: "Kikits Info Video",
                      subtitle:
                        "Creating Qr codes with Kikits, this video shows how to create a Qr code and how to use it to promote your events and make them more engaging.",
                    },
                    {
                      id: "kikits-main",
                      videoUrl: "https://vimeo.com/1111744640",
                      thumbnailUrl: "/images/projects/kikits/explain.jpeg",
                      title: "Kikits Info Video",
                      subtitle:
                        "Drink Tickets with Kikits, this video shows how to create a Drink Ticket and how to use it to enhance your event experiences.",
                    },
                  ]}
                  className="py-8"
                  titleClassName="text-[#CFC8CF]"
                  subtitleClassName="text-gray-300"
                  buttonClassName="inline-block px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
                />
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
                  Engagement: Building Event Communities
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Kikits serves as both the platform that powers events and the
                  tool we use to create and manage our own event experiences.
                  The platform enables seamless ticket sales, attendee
                  management, and event promotion, facilitating hundreds of
                  events and building a vibrant community around shared
                  experiences.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    Platform-Powered Experiences
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    Through Kikits, we&apos;ve facilitated hundreds of events,
                    connecting event creators with audiences and building a
                    vibrant community around shared experiences. The platform
                    makes it easy for creators to set up events, manage ticket
                    sales, and engage with attendees.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    For attendees, Kikits transforms event discovery from a
                    search-driven process into an exploration of community and
                    connection. The platform&apos;s design encourages discovery,
                    making it easy to find events that align with interests and
                    connect with like-minded people.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    The AI-powered content creation tools help event creators
                    effectively market their events, creating engaging videos
                    and narratives that connect with audiences and drive
                    attendance.
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
                        Discovery-focused design that encourages exploration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Real-time updates that keep users informed and engaged
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        AI-powered marketing content that connects with
                        audiences
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Community features that foster connection among
                        attendees
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
                    Event Facilitation
                  </h3>
                  <p className="text-gray-300">
                    Kikits has facilitated hundreds of events, from intimate
                    concerts to large-scale festivals, building a track record
                    of successful event management and community building.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Community Growth
                  </h3>
                  <p className="text-gray-300">
                    The platform fosters genuine community connections, helping
                    attendees discover events and connect with like-minded
                    people who share their interests.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Creator Success
                  </h3>
                  <p className="text-gray-300">
                    Event creators benefit from comprehensive management tools
                    and AI-powered marketing content that helps them effectively
                    promote their events and build their audience.
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
                  The Work Behind Kikits
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  Creating Kikits required a comprehensive approach combining
                  platform architecture, user experience design, AI-powered
                  content creation, and community building. Here&apos;s what
                  went into making this project a success.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    Platform Development
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Building Kikits required careful architecture to handle
                    everything from event discovery to ticket sales to community
                    engagement. The platform was designed with scalability in
                    mind, ensuring reliable performance even during peak event
                    times.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The technology stack—React, Next.js, and TypeScript—enables
                    fast, responsive interfaces while maintaining code quality
                    and maintainability.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    AI-Powered Content
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We created a suite of AI-powered spokesperson and product
                    videos that explain the platform, showcase its capabilities,
                    and connect with audiences through authentic storytelling.
                    These videos have become essential tools for marketing and
                    user education.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The AI content creation process enables rapid iteration and
                    customization, making it easy to create engaging videos for
                    different audiences and use cases.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    User Experience Design
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The platform&apos;s design prioritizes discovery and
                    community over transaction, creating an experience that
                    feels natural and engaging. Every interaction was carefully
                    crafted to foster connection and make event discovery feel
                    like exploration rather than search.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This user-centric approach has resulted in a platform that
                    users love to use, building loyalty through positive
                    experiences rather than just functional utility.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                    Community Impact
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Kikits has facilitated hundreds of events, connecting event
                    creators with audiences and building a vibrant community
                    around shared experiences. The platform&apos;s success is
                    measured in the connections it creates and the events it
                    enables.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The positive response from both creators and attendees
                    validates our approach of prioritizing community and
                    connection, demonstrating that technology can facilitate
                    meaningful human interactions.
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
