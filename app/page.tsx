"use client";

import Image from "next/image";
import { ContentReveal } from "@/components/ContentReveal";
import { ImageParallax } from "@/components/ImageParallax";
import { PinnedHero } from "@/components/PinnedHero";
import { VideoScroll } from "@/components/VideoScroll";
import { VimeoVideo } from "@/components/VimeoVideo";
import { Header } from "@/components/Header";
import {
  ScrollCarousel,
  ScrollCarouselItems,
  ScrollCarouselItem,
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <VideoScroll
        totalFrames={192}
        framesPath="/frame1"
        frameFilePattern="frame1-%03d.jpg"
        scrollDistance={5000}
        sticky={true}
        contentAlignment="center"
      >
        <div className="text-center text-white z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
            Next Wave Agentic
          </h1>
          <p className="text-xl md:text-2xl opacity-90">Scroll to explore</p>
        </div>
      </VideoScroll>
      <section className="relative">
        <ImageParallax
          imageSrc="/images/kikits.jpg"
          strength={0.5}
          className="min-h-[600px]"
        >
          <div className="text-center text-white z-20 bg-black/50 backdrop-blur-sm px-8 py-12 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">What We Do</h2>
            <p className="text-xl md:text-2xl opacity-90">
              A creative-technology powerhouse delivering everything modern
              businesses need to grow fast and stand out.
            </p>
          </div>
        </ImageParallax>
      </section>
      <VideoScroll
        totalFrames={192}
        framesPath="/frame2"
        frameFilePattern="frame2-%03d.jpg"
        scrollDistance={5000}
        sticky={true}
        contentAlignment="center"
      >
        <div className="text-center text-white z-20">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Welcome to NWA
          </h1>
          <p className="text-xl md:text-2xl opacity-90">Scroll to explore</p>
        </div>
      </VideoScroll>
      {/* Hero Section */}
      <section className="relative">
        <PinnedHero
          backgroundVideo="https://vimeo.com/1136559533?share=copy&fl=sv&fe=ci"
          title="Next Wave Agentic"
          subtitle="Building the future of creativity, technology, and storytelling in Northwest Arkansas"
          body="Websites, apps, AI solutions, video production, branding, marketing, and event innovation — all under one unified ecosystem."
          ctaLabel="Start a Project"
          ctaHref="#contact"
          scrollDistance={1400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
        />
      </section>

      <section className="relative">
        <ImageParallax
          imageSrc="/images/kikits.jpg"
          strength={0.5}
          className="min-h-[600px]"
        >
          <div className="text-center text-white z-20 bg-black/50 backdrop-blur-sm px-8 py-12 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">What We Do</h2>
            <p className="text-xl md:text-2xl opacity-90">
              A creative-technology powerhouse delivering everything modern
              businesses need to grow fast and stand out.
            </p>
          </div>
        </ImageParallax>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="relative bg-black z-10">
        <ScrollCarousel
          sticky={true}
          animationDirection="opacity"
          animationDuration={1.5}
          stagger={0.4}
          scrollDistance={4000}
          startOffset="top top"
          className="relative z-10"
          scrollThrottle="slow"
        >
          <ScrollCarouselItems>
            {/* Websites & Apps - Video on Right */}
            <ScrollCarouselItem
              animation="right"
              backgroundImage="/images/kikits.jpg"
              backgroundOpacity={0.5}
            >
              <div className="max-w-7xl w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="bg-black/50 p-8 rounded-xl">
                    <h3 className="text-4xl md:text-6xl font-bold text-[#FFFFFF] mb-6 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                      Websites & Apps
                    </h3>
                    <p className="text-lg text-[#FFFFFF] leading-relaxed shadow-md">
                      Custom web apps, mobile apps, platforms, and digital
                      experiences. Built with high-performance engineering from
                      <span className="text-[#FFFFFF]">NWA Apps.</span>
                    </p>
                  </div>
                  <div>
                    <VimeoVideo
                      vimeoUrl="https://vimeo.com/1105184966?fl=ip&fe=ec"
                      className="rounded-xl shadow-2xl overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </ScrollCarouselItem>

            {/* AI Solutions - Video on Left */}
            <ScrollCarouselItem animation="left">
              <div className="max-w-7xl w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <VimeoVideo
                      vimeoUrl="https://vimeo.com/1126858733?fl=ip&fe=ec"
                      className="rounded-xl shadow-2xl overflow-hidden"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="w-16 h-16 bg-[#3F395B] rounded-lg mb-6 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-[#CFC8CF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-6">
                      AI Solutions
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      Custom AI tools, automation, integrations, data systems,
                      and intelligent dashboards.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollCarouselItem>

            {/* Video & Storytelling - Video on Right */}
            <ScrollCarouselItem animation="right">
              <div className="max-w-7xl w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-16 h-16 bg-[#fc05b9] rounded-lg mb-6 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-[#CFC8CF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-6">
                      Video & Storytelling
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      AI videos, explainers, brand stories, animation, and
                      creative campaigns powered by Planet Goodtimes.
                    </p>
                  </div>
                  <div>
                    <VimeoVideo
                      vimeoUrl="https://vimeo.com/1110591196?fl=ip&fe=ec"
                      className="rounded-xl shadow-2xl overflow-hidden"
                    />
                  </div>
                </div>
              </div>
            </ScrollCarouselItem>

            {/* Events & Engagement - Video on Left */}
            <ScrollCarouselItem animation="scale">
              <div className="max-w-7xl w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <VimeoVideo
                      vimeoUrl="https://vimeo.com/1105184966?fl=ip&fe=ec"
                      className="rounded-xl shadow-2xl overflow-hidden"
                    />
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="w-16 h-16 bg-[#4E79A7] rounded-lg mb-6 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-[#CFC8CF]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-6">
                      Events & Engagement
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      Smart ticketing, member engagement, and QR-powered
                      experiences with Kikits.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollCarouselItem>
          </ScrollCarouselItems>
        </ScrollCarousel>
      </section>

      {/* Parallax Section */}
      <section className="relative">
        <ImageParallax
          imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          strength={0.5}
          className="min-h-[600px]"
        >
          <div className="text-center text-white z-20 bg-black/50 backdrop-blur-sm px-8 py-12 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Our Ecosystem
            </h2>
            <p className="text-xl md:text-2xl opacity-90">
              The Future is Next Wave Agentic
            </p>
          </div>
        </ImageParallax>
      </section>

      {/* Our Ecosystem Section */}
      <section id="ecosystem" className="relative bg-[#201E30] z-0">
        <ScrollCarousel
          sticky={true}
          animationDirection="opacity"
          animationDuration={1.5}
          stagger={0.5}
          scrollDistance={2000}
          startOffset="top top"
          scrollThrottle="slow"
        >
          <ScrollCarouselItems>
            {/* NWA Apps */}
            <ScrollCarouselItem
              animation="right"
              background="bg-gradient-to-br from-[#201E30] to-[#3F395B]"
            >
              <div className="max-w-6xl w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <Image
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                      alt="NWA Apps"
                      width={800}
                      height={600}
                      className="rounded-xl shadow-2xl"
                    />
                  </div>
                  <div className="text-[#CFC8CF]">
                    <h3 className="text-4xl md:text-6xl font-bold mb-6">
                      NWA Apps
                    </h3>
                    <p className="text-xl text-[#4E79A7] mb-4 font-semibold">
                      The engineering engine.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Platforms, apps, SaaS, and system architecture.
                      Engineering, platforms, product development, SaaS systems,
                      and custom software.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollCarouselItem>

            {/* Planet Goodtimes */}
            <ScrollCarouselItem
              animation="left"
              background="bg-gradient-to-br from-[#84596C] to-[#3F395B]"
            >
              <div className="max-w-6xl w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1 text-[#CFC8CF]">
                    <h3 className="text-4xl md:text-6xl font-bold mb-6">
                      Planet Goodtimes
                    </h3>
                    <p className="text-xl text-[#fc05b9] mb-4 font-semibold">
                      The storytelling machine.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Creative storytelling, video production, brand campaigns,
                      content strategy, and AI media. We bring stories to life
                      through powerful visuals and compelling narratives.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <Image
                      src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
                      alt="Planet Goodtimes"
                      width={800}
                      height={600}
                      className="rounded-xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </ScrollCarouselItem>

            {/* Kikits */}
            <ScrollCarouselItem
              animation="scale"
              background="bg-gradient-to-br from-[#3F395B] to-[#201E30]"
            >
              <div className="max-w-6xl w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <Image
                      src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                      alt="Kikits"
                      width={800}
                      height={600}
                      className="rounded-xl shadow-2xl"
                    />
                  </div>
                  <div className="text-[#CFC8CF]">
                    <h3 className="text-4xl md:text-6xl font-bold mb-6">
                      Kikits
                    </h3>
                    <p className="text-xl text-[#4E79A7] mb-4 font-semibold">
                      The event infrastructure.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Next-generation ticketing, member management, QR scanning,
                      entitlements, and event intelligence. Powering seamless
                      event experiences.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollCarouselItem>
          </ScrollCarouselItems>
        </ScrollCarousel>
      </section>

      {/* Why It Matters Section */}
      <section className="py-4 px-4 bg-black">
        <PinnedHero
          backgroundImage="/images/kikits.jpg"
          title="Next Wave Agentic"
          subtitle="Building the future of creativity, technology, and storytelling in Northwest Arkansas"
          body="Websites, apps, AI solutions, video production, branding, marketing, and event innovation — all under one unified ecosystem."
          ctaLabel="Start a Project"
          ctaHref="#contact"
          scrollDistance={1400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
        />
      </section>

      {/* Featured Work Section */}
      <section id="work" className="relative bg-black py-32">
        <ScrollCarousel
          sticky={true}
          animationDirection="opacity"
          animationDuration={1.5}
          stagger={0.4}
          scrollDistance={2000}
          startOffset="center center"
        >
          <ScrollCarouselItems>
            {/* NWA Apps Projects */}
            <ScrollCarouselItem animation="opacity">
              <div className="flex flex-col md:flex-row items-center gap-12 px-4 max-w-6xl w-full">
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <Image
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                    alt="NWA Apps Projects"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <div className="flex-1 text-white">
                  <h2 className="text-5xl md:text-7xl font-bold mb-6">
                    NWA Apps
                  </h2>
                  <p className="text-xl md:text-2xl opacity-90 mb-8">
                    Featured Projects
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-3">•</span>
                      <span>CityView CMS</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-3">•</span>
                      <span>Lineup Booking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-3">•</span>
                      <span>Supply Chain Simulation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollCarouselItem>

            {/* Planet Goodtimes Projects */}
            <ScrollCarouselItem animation="right">
              <div className="flex flex-col md:flex-row items-center gap-12 px-4 max-w-6xl w-full">
                <div className="flex-shrink-0 w-full md:w-1/2 order-2 md:order-1">
                  <Image
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
                    alt="Planet Goodtimes Projects"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <div className="flex-1 text-white order-1 md:order-2">
                  <h2 className="text-5xl md:text-7xl font-bold mb-6">
                    Planet Goodtimes
                  </h2>
                  <p className="text-xl md:text-2xl opacity-90 mb-8">
                    Creative Campaigns
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                      <span className="text-[#fc05b9] mr-3">•</span>
                      <span>AI campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fc05b9] mr-3">•</span>
                      <span>Brand storytelling videos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#fc05b9] mr-3">•</span>
                      <span>Character-driven animations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollCarouselItem>

            {/* Kikits Projects */}
            <ScrollCarouselItem animation="scale">
              <div className="flex flex-col md:flex-row items-center gap-12 px-4 max-w-6xl w-full">
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <Image
                    src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80"
                    alt="Kikits Projects"
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                <div className="flex-1 text-white">
                  <h2 className="text-5xl md:text-7xl font-bold mb-6">
                    Kikits
                  </h2>
                  <p className="text-xl md:text-2xl opacity-90 mb-8">
                    Event Solutions
                  </p>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-3">•</span>
                      <span>Event entry & scanning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-3">•</span>
                      <span>VIP experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-3">•</span>
                      <span>Multi-tier ticket systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollCarouselItem>
          </ScrollCarouselItems>
        </ScrollCarousel>
      </section>

      {/* Who We Serve Section */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <ContentReveal direction="up" duration={1.2}>
            <h2 className="text-5xl md:text-7xl font-bold text-[#CFC8CF] mb-4 text-center">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-400 mb-16 text-center max-w-3xl mx-auto">
              From startups to enterprises, we help organizations of all sizes
              achieve their digital goals.
            </p>
          </ContentReveal>
          <ContentReveal direction="up" duration={1} stagger={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Small businesses",
                "Startups",
                "Event organizers",
                "Nonprofits",
                "Enterprises",
                "Government",
                "Creators",
                "Universities",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#201E30] to-[#3F395B] p-8 rounded-xl border-2 border-[#3F395B] hover:border-[#4E79A7] hover:shadow-lg transition-all text-center"
                >
                  <p className="text-lg font-semibold text-[#CFC8CF]">{item}</p>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative">
        <ImageParallax
          imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          strength={0.5}
          className="min-h-[600px]"
        >
          <div className="text-center text-white z-20 bg-black/50 backdrop-blur-sm px-8 py-12 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Ideas born here. Experiences built everywhere.
            </h2>
            <p className="text-xl md:text-2xl opacity-90">
              The Future is Next Wave Agentic
            </p>
          </div>
        </ImageParallax>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-[#201E30]">
        <div className="max-w-4xl mx-auto">
          <ContentReveal direction="up" duration={1.2}>
            <h2 className="text-5xl md:text-7xl font-bold text-[#CFC8CF] mb-4 text-center">
              Let&apos;s Build Something
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Ready to start your project? Get in touch and let&apos;s bring
              your vision to life.
            </p>
          </ContentReveal>
          <ContentReveal direction="scale" duration={1}>
            <form className="bg-[#3F395B] rounded-2xl p-8 md:p-12 shadow-2xl border border-[#201E30]">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF] placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF] placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                  >
                    Business/Organization
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF] placeholder-gray-500"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                  >
                    What are you looking to build?
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF] placeholder-gray-500"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF]"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF]"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg py-4 px-8 rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
                >
                  Let&apos;s Build Something
                </button>
              </div>
            </form>
          </ContentReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ContentReveal direction="opacity" duration={1}>
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 font-accent">
                Next Wave Agentic
              </h3>
              <p className="text-gray-400 mb-6">
                Where creativity, technology, and storytelling are built locally
                and launched globally.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-gray-300">
                <div>
                  <p className="font-semibold mb-2">NWA Apps</p>
                  <p className="text-sm">Engineering & Development</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Planet Goodtimes</p>
                  <p className="text-sm">Creative & Storytelling</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Kikits</p>
                  <p className="text-sm">Events & Engagement</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-8">
                © {new Date().getFullYear()} Next Wave Agentic. All rights
                reserved.
              </p>
            </div>
          </ContentReveal>
        </div>
      </footer>
    </main>
  );
}
