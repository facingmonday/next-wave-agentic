import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import HeroCarousel, { type HeroSlide } from "@/components/HeroCarousel";
import { ServiceFeatureSection } from "@/components/ServiceFeatureSection";
import { LogoList } from "@/components/LogoList";
import { VideoGallery } from "@/components/VideoGallery";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";

const HeroSlides: HeroSlide[] = [
  {
    title: "Strategy",
    subtitle: "Clarity, positioning, and a plan that moves",
    description:
      "We turn ambiguity into direction—defining the story, the audience, and the roadmap so every build and campaign has a clear purpose.",
    backgroundImage: "/images/projects/kikits/spokesperson.jpeg",
    button: {
      text: "Explore Strategy",
      href: "/strategy",
      variant: "primary",
    },
  },
  {
    title: "Software",
    subtitle: "Fast, modern product builds",
    description:
      "We design and build high-performance web apps and sites with Next.js and TypeScript—integrations, dashboards, and automation included.",
    backgroundImage: "/images/cityview/cityview-dashboard.png",
    button: {
      text: "Explore Software",
      href: "/software",
      variant: "primary",
    },
  },
  {
    title: "Stories",
    subtitle: "AI-powered video + narrative craft",
    description:
      "From cinematic shorts to product explainers, we create story systems that build connection, earn attention, and drive action.",
    backgroundImage: "/images/projects/kikits/MayaAndSpark.jpg",
    button: {
      text: "Explore Stories",
      href: "/storytelling",
      variant: "primary",
    },
  },
  {
    title: "Engagement",
    subtitle: "Community, distribution, and growth loops",
    description:
      "We help brands show up consistently—building campaigns, content systems, and partnerships that turn attention into momentum.",
    backgroundImage: "/images/okay-nwa/okay-nwa-dash.png",
    button: {
      text: "Explore Engagement",
      href: "/engagement",
      variant: "primary",
    },
  },
  {
    title: "Experiences",
    subtitle: "Real-world moments, built like products",
    description:
      "We create interactive experiences—events, activations, and systems that feel alive, scale operationally, and leave a lasting impression.",
    backgroundImage: "/images/planet-goodtimes/VampireBarCrawl.jpg",
    button: {
      text: "Explore Experiences",
      href: "/experiences",
      variant: "primary",
    },
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <HeroCarousel slides={HeroSlides} />

      {/* 5 service feature sections (alternating layout) */}
      <ServiceFeatureSection
        title="Strategy"
        subtitle="Positioning • Narrative • Roadmaps"
        description="Placeholder: We clarify what you’re building, who it’s for, and why it matters—so every asset, feature, and campaign compounds toward the same outcome."
        ctaLabel="Learn about Strategy"
        ctaHref="/strategy"
        imageSrc="/images/projects/uniting-wealth-partners/deck.jpeg"
        imageAlt="Strategy placeholder image"
        imageSide="left"
      />
      <ServiceFeatureSection
        title="Software"
        subtitle="Web Apps • Sites • Integrations"
        description="Placeholder: We ship modern products with strong UX, clean architecture, and measurable performance—then automate the workflows around them."
        ctaLabel="Learn about Software"
        ctaHref="/software"
        imageSrc="/images/cityview/cityview-dashboard.png"
        imageAlt="Software placeholder image"
        imageSide="right"
      />
      <ServiceFeatureSection
        title="Stories"
        subtitle="AI Video • Animation • Narrative"
        description="Placeholder: We create story systems—campaign films, explainers, and episodic worlds that make your message memorable and your brand feel alive."
        ctaLabel="Learn about Stories"
        ctaHref="/storytelling"
        imageSrc="/images/projects/kikits/MayaAndSpark.jpg"
        imageAlt="Stories placeholder image"
        imageSide="left"
      />
      <ServiceFeatureSection
        title="Engagement"
        subtitle="Content • Partnerships • Distribution"
        description="Placeholder: We build engagement engines that keep momentum—content pipelines, social systems, and partnerships that connect with real communities."
        ctaLabel="Learn about Engagement"
        ctaHref="/engagement"
        imageSrc="/images/okay-nwa/okay-nwa-dash.png"
        imageAlt="Engagement placeholder image"
        imageSide="right"
      />
      <ServiceFeatureSection
        title="Experiences"
        subtitle="Events • Activations • Interactive Systems"
        description="Placeholder: We design experiences with real operational leverage—interactive moments, live systems, and story-driven environments people want to share."
        ctaLabel="Learn about Experiences"
        ctaHref="/experiences"
        imageSrc="/images/planet-goodtimes/VampireBarCrawl.jpg"
        imageAlt="Experiences placeholder image"
        imageSide="left"
      />

      {/* Logos */}
      <LogoList
        logos={[

          {
            src: "/images/logos/universityofarkansas.jpg",
            alt: "University of Arkansas",
          },
          {
            src: "/images/logos/bentonvilleschools.jpg",
            alt: "Bentonville Schools",
          },
          { src: "/images/logos/lineupbooking.jpg", alt: "Lineup Booking" },
          {
            src: "/images/logos/novastonecapitaladvisors.jpg",
            alt: "NovaStone Capital Advisors",
          },
          { src: "/images/logos/visitbentonville.jpg", alt: "Visit Bentonville" },
          {
            src: "/images/logos/discoverbellavista.jpg",
            alt: "Discover Bella Vista",
          },
          {
            src: "/images/logos/arkansasmoves.jpg",
            alt: "Arkansas Move",
          },
          {
            src: "/images/logos/ledger.jpg",
            alt: "Ledger Bentonville",
          },
          {
            src: "/images/logos/ropeswing.jpg",
            alt: "Ropeswing",
          },
        ]}
      />

      {/* Gallery section */}
      <section className="relative py-16 md:py-24 bg-black">
        <FuturisticBackground
          pattern="flowing"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#fc05b9"
          secondaryColor="#4E79A7"
          tertiaryColor="#84596c"
          lineCount={8}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-3">
                Gallery
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-3xl">
                A small selection of videos from our work across products,
                campaigns, and storytelling.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#4E79A7] text-[#CFC8CF] font-semibold hover:bg-[#4E79A7]/90 transition-colors w-fit"
            >
              View full gallery
            </Link>
          </div>

          <VideoGallery
            videos={[
              {
                id: "kikits-launch",
                videoUrl: "https://vimeo.com/1105184966?fl=ip&fe=ec",
                thumbnailUrl: "/images/projects/kikits/kikits-video.png",
                title: "Kikits Launch Announcement",
                subtitle:
                  "A high-level launch announcement introducing Kikits to the world.",
              },
              {
                id: "pedal-pals-main",
                videoUrl: "https://vimeo.com/1126858733?fl=ip&fe=ec",
                thumbnailUrl: "/images/projects/pedal-pals/crystal.jpg",
                title: "Pedal Pals Main Campaign",
                subtitle:
                  "Character-driven safety storytelling built for community impact.",
              },
              {
                id: "maya-spark",
                videoUrl: "https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci",
                thumbnailUrl: "/images/projects/kikits/MayaAndSpark.jpg",
                title: "Maya & Spark",
                subtitle:
                  "An emotionally uplifting short that blends narrative craft with AI production.",
              },
              {
                id: "kikits-qr-codes",
                videoUrl: "https://vimeo.com/1110591196?fl=ip&fe=ec",
                thumbnailUrl: "/images/projects/kikits/explain.jpeg",
                title: "Creating QR Codes",
                subtitle:
                  "An AI-generated walkthrough teaching users how to create and customize QR codes in Kikits.",
              },
            ]}
          />
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="relative py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-3">
                Latest from the Blog
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-3xl">
                Insights on AI, software development, and the future of creative
                technology.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#4E79A7] text-[#CFC8CF] font-semibold hover:bg-[#4E79A7]/90 transition-colors w-fit"
            >
              View all posts
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getAllPosts()
              .slice(0, 3)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="h-full rounded-2xl border border-[#3f395b]/30 bg-[#201e30]/40 overflow-hidden transition-all duration-300 hover:border-[#fc05b9]/40 hover:bg-[#201e30]/60">
                    <div className="aspect-[16/9] bg-gradient-to-br from-[#4e79a7]/15 via-[#fc05b9]/10 to-[#201e30] relative overflow-hidden">
                      {post.coverImage && (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover relative z-10"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold uppercase tracking-wider text-[#fc05b9]/80 bg-[#fc05b9]/10 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-[#CFC8CF] mb-2 group-hover:text-[#4E79A7] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-[#CFC8CF]/60 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#3f395b]">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-xs font-medium text-[#fc05b9] group-hover:text-[#4E79A7] transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Keep existing content: Our Projects intro */}
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
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-6 text-center">
            Our Projects
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed text-center">
            We are proud to be part of the Bentonville community and to have
            worked on some amazing projects.
          </p>

          {/* Horizontal slider of project pages */}
          <div className="mt-12">
            <PortfolioCarousel items={projects} autoScrollSpeed={800} />
          </div>
        </div>
      </section>

      {/* Healthcare AI — Enterprise anchor section */}
      <section className="relative py-24 md:py-32 border-t border-[#3F395B]/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1729]/50 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#3F395B]/50">
              <Image
                src="/images/healthcare/healthcare1.jpg"
                alt="Healthcare technology and AI collaboration in action"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4E79A7] mb-4">
                For Northwest Arkansas Health Systems
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                From AI Pilot to Enterprise Impact in 90 Days
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl md:max-w-none">
                Health systems are piloting AI across clinical and administrative
                workflows. We help you harden, govern, scale, and operationalize
                those pilots into enterprise-ready solutions.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
                <span className="px-4 py-2 rounded-lg bg-[#1e3a5f]/60 border border-[#4E79A7]/40 text-[#CFC8CF] text-sm font-medium">
                  Governance-First
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#1e3a5f]/60 border border-[#4E79A7]/40 text-[#CFC8CF] text-sm font-medium">
                  Rapid Infrastructure
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#1e3a5f]/60 border border-[#4E79A7]/40 text-[#CFC8CF] text-sm font-medium">
                  Measurable ROI
                </span>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/healthcare-ai"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#4E79A7] text-[#CFC8CF] font-semibold hover:bg-[#4E79A7]/90 transition-colors"
                >
                  AI Pilot to Enterprise
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
