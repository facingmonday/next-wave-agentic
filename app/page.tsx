import { ContentReveal } from "@/components/ContentReveal";
import { PinnedHero } from "@/components/PinnedHero";
import { VideoScroll } from "@/components/VideoScroll";
import { VimeoVideo } from "@/components/VimeoVideo";
import { Header } from "@/components/Header";
import { VideoThumbnailGrid } from "@/components/VideoThumbnailGrid";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Portfolio } from "@/components/Portfolio";
import type { PortfolioItem } from "@/components/PortfolioCarousel";
import { HorizontalScrollCarousel } from "@/components/HorizontalScrollCarousel";
import { VideoGallery } from "@/components/VideoGallery";
import StoryPath from "@/components/StoryPath";

const portfolioItems: PortfolioItem[] = [
  {
    id: "maya-spark",
    image: "/images/projects/kikits/MayaAndSpark.jpg",
    title: "Maya & Spark",
    description:
      "An emotionally uplifting animated short and event experience that blends AI storytelling with real-world interaction.",
    tags: ["AI Video", "Event Experience", "Storytelling"],
  },
  {
    id: "pedal-pals",
    image: "/images/projects/pedal-pals/crystal.jpg",
    title: "Pedal Pals",
    description:
      "A community-driven cycling safety campaign featuring original characters, worldbuilding, and educational content.",
    tags: ["Community", "Campaign", "Character Design"],
  },
  {
    id: "uwp-guilty",
    image: "/images/projects/uniting-wealth-partners/oil.jpeg",
    title: "Uniting Wealth Partners – Guilty",
    description:
      "A relatable, humor-forward campaign that reframes financial guilt and builds trust through storytelling.",
    tags: ["Social Content", "Financial Services", "Campaign"],
  },
  {
    id: "kikits-product",
    image: "/images/projects/kikits/spokesperson.jpeg",
    title: "Kikits Product Launch",
    description:
      "A suite of AI-powered spokesperson and product videos designed for high-performing social and web campaigns.",
    tags: ["Product Video", "Spokesperson", "AI Production"],
  },
] as const;

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
        <StoryPath
          steps={[
            {
              title: "1. Discovery",
              body: "We identified the core problems with the old event workflow...",
              background: "/bg/kikits-discovery.jpg",
            },
            {
              title: "2. Architecture",
              body: "We designed the fact system, scanners, access logic, and flows...",
              background: "/bg/kikits-architecture.jpg",
            },
            {
              title: "3. Build",
              body: "Checkout flow, dashboards, Apple Wallet, scanning system...",
              background: "/bg/kikits-build.jpg",
            },
            {
              title: "4. Storytelling",
              body: "Spark, Maya, brand voice, creative direction...",
              background: "/bg/kikits-stories.jpg",
            },
            {
              title: "5. Launch",
              body: "Onboarding, community rollout, events, analytics...",
              background: "/bg/kikits-launch.jpg",
            },
          ]}
        />
      </section>
      {/* Services Section */}
      <section className="relative bg-black">
        <FuturisticBackground
          primaryColor="#fc05b9"
          secondaryColor="#4E79A7"
          tertiaryColor="#84596c"
          lineCount={6}
          lineThickness="medium"
          intensity="moderate"
        />
        {/* <ServicesGrid
          heroTitle="AI Creativity "
          heroSubtitle="Meets Real-World Impact"
          heroDescription="Next Wave Agentic is your all-in-one studio for AI-generated video, brand strategy, web and app development, experiential events, and automated marketing systems. We build the technology and the stories that power the next generation of businesses."
          primaryCtaLabel="Start a Project"
          secondaryCtaLabel="Explore Our Work"
          services={[
            {
              id: "1",
              image: "/images/projects/kikits/MayaAndSpark.jpg",
              title: "AI Video & Storytelling Studio",
              description:
                "Cinematic AI-generated videos in Pixar-style 3D, comic-book animation, and realistic avatars. We craft full campaigns, episodic narratives, and brand films optimized for social, web, and advertising.",
              ctaLabel: "Explore AI Video Styles",
            },
            {
              id: "2",
              image: "/images/projects/pedal-pals/crystal.jpg",
              title: "Brand Identity & Creative Direction",
              description:
                "Complete brand identity from logos and palettes to typography, voice, and visual language. AI accelerates exploration while human creative direction ensures consistency and long-term recognizability.",
              ctaLabel: "Build a Cohesive Brand",
            },
            {
              id: "3",
              image: "/images/projects/kikits/KikitsPhone.jpg",
              title: "AI-Enhanced Web & App Development",
              description:
                "High-performance websites and mobile apps built with React, Next.js, and TypeScript. Features include AI search, automated content flows, dashboards, and custom integrations.",
              ctaLabel: "View Development Capabilities",
            },
            {
              id: "4",
              image:
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
              title: "Experiential Events & Interactive Media",
              description:
                "AI-driven event experiences with dynamic QR systems, real-time visuals, and narrative-driven interactions. From VIP activations to festivals, we create adaptive event ecosystems.",
              ctaLabel: "See Event Innovations",
            },
            {
              id: "5",
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              title: "Marketing Systems & Automation",
              description:
                "Automated marketing systems that handle content creation, email flows, video generation, SEO, and social scheduling. Always-on systems that multiply output while reducing workload.",
              ctaLabel: "Automate Your Marketing",
            },
            {
              id: "6",
              image:
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
              title: "Enterprise AI Consulting & Custom Solutions",
              description:
                "Enterprise AI solutions including internal tools, intelligent assistants, automated workflows, and custom model integrations. We engineer scalable solutions from apps to fully AI-powered operations.",
              ctaLabel: "Build Custom AI Tools",
            },
          ]}
        /> */}
        <HorizontalScrollCarousel
          items={[
            {
              image: "/images/projects/kikits/MayaAndSpark.jpg",
              title: "AI Video & Storytelling Studio",
              body: "Cinematic AI-generated videos in Pixar-style 3D, comic-book animation, and realistic avatars. We craft full campaigns, episodic narratives, and brand films optimized for social, web, and advertising.",
              buttonLabel: "Explore AI Video Styles",
              buttonHref: "/contact",
            },
            {
              image: "/images/projects/pedal-pals/crystal.jpg",
              title: "Brand Identity & Creative Direction",
              body: "Complete brand identity from logos and palettes to typography, voice, and visual language. AI accelerates exploration while human creative direction ensures consistency and long-term recognizability.",
              buttonLabel: "Build a Cohesive Brand",
              buttonHref: "/contact",
            },
            {
              image: "/images/projects/kikits/KikitsPhone.jpg",
              title: "AI-Enhanced Web & App Development",
              body: "High-performance websites and mobile apps built with React, Next.js, and TypeScript. Features include AI search, automated content flows, dashboards, and custom integrations.",
              buttonLabel: "View Development Capabilities",
              buttonHref: "/contact",
            },
            {
              image:
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
              title: "Experiential Events & Interactive Media",
              body: "AI-driven event experiences with dynamic QR systems, real-time visuals, and narrative-driven interactions. From VIP activations to festivals, we create adaptive event ecosystems.",
              buttonLabel: "See Event Innovations",
              buttonHref: "/contact",
            },
            {
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              title: "Marketing Systems & Automation",
              body: "Automated marketing systems that handle content creation, email flows, video generation, SEO, and social scheduling. Always-on systems that multiply output while reducing workload.",
              buttonLabel: "Automate Your Marketing",
              buttonHref: "/contact",
            },
            {
              image:
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
              title: "Enterprise AI Consulting & Custom Solutions",
              body: "Enterprise AI solutions including internal tools, intelligent assistants, automated workflows, and custom model integrations. We engineer scalable solutions from apps to fully AI-powered operations.",
              buttonLabel: "Build Custom AI Tools",
              buttonHref: "/contact",
            },
          ]}
        />
      </section>

      <section className="relative">
        <VideoScroll
          totalFrames={192}
          framesPath="/images/bentonville-watertower"
          frameFilePattern="bentonville-watertower-drone-%03d.jpg"
          scrollDistance={5000}
          sticky={true}
          contentAlignment="center"
        >
          <div className="text-center text-white z-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
              Made in Bentonville
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              The City of the Future
            </p>
          </div>
        </VideoScroll>
      </section>

      {/* Portfolio Section */}
      <Portfolio
        title="Featured Work"
        description="A selection of campaigns, films, and digital experiences crafted at the intersection of AI, storytelling, and product strategy."
        // 4s between slides for a relaxed autoplay pace
        autoScrollSpeed={4000}
        items={portfolioItems}
      />

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
        <h1 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-6 text-center">
          Our Projects
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed text-center">
          We are proud to be part of the Bentonville community and to have
          worked on some amazing projects.
        </p>
      </section>

      {/* Hero Section */}
      <section className="relative">
        <PinnedHero
          backgroundVideo="https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci"
          title="Maya & Spark"
          subtitle="Find Your Way. Light the Moment."
          body="In this emotionally uplifting animated short, we follow Maya, a quiet first-time attendee navigating a crowded event hall, until a single scan changes everything."
          ctaLabel="Watch Video"
          scrollDistance={2400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
        />
      </section>

      {/* What We Do Section */}
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
        <div className="max-w-7xl mx-auto">
          <ContentReveal direction="right" duration={1.2} startOffset="top 80%">
            <div className="relative max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-black/50 p-8 rounded-xl">
                  <h3 className="text-4xl md:text-6xl font-bold text-[#FFFFFF] mb-6 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                    AI Storytelling
                  </h3>
                  <p className="text-lg text-[#FFFFFF] leading-relaxed shadow-md">
                    Cinematic AI-generated videos in Pixar-style 3D, comic-book
                    animation, and realistic avatars. We craft full campaigns,
                    episodic narratives, and brand films optimized for social,
                    web, and advertising.
                  </p>
                </div>
                <div>
                  <VimeoVideo
                    vimeoUrl="https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci"
                    className="rounded-xl shadow-2xl overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      <section className="relative py-16 md:py-32 bg-black">
        <PinnedHero
          backgroundVideo="https://vimeo.com/1126858733?fl=ip&fe=ec"
          title="Pedal Pals"
          subtitle="Ride Smart. Ride Safe. Ride Together."
          body="Pedal Pals is a community-driven initiative that aims to create a safer and more connected cycling culture in Bentonville. We are a team of volunteers who are passionate about promoting safe cycling and creating a more connected community."
          scrollDistance={2400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
          ctaLabel="Watch Video"
        />
      </section>

      <section className="relative">
        <FuturisticBackground
          pattern="flowing"
          intensity="moderate"
          showOrbs={false}
          primaryColor="#fc05b9"
          secondaryColor="#4E79A7"
          tertiaryColor="#84596c"
          lineCount={10}
        />
        <h1 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-6 text-center">
          Character Development
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed text-center mb-6">
          Character development, storytelling, and brand development.
        </p>
        <VideoThumbnailGrid
          vimeoUrl="https://vimeo.com/1126858733?fl=ip&fe=ec"
          thumbnails={[
            {
              id: "character_1",
              image: "/images/projects/pedal-pals/benny.jpg",
              title: "Benny",
              description:
                "Meet Benny, one of the Pedal Pals characters bringing safe cycling culture to Bentonville.",
            },
            {
              id: "character_2",
              image: "/images/projects/pedal-pals/ricky.jpg",
              title: "Ricky",
              description:
                "Ricky represents the community spirit and passion for safe cycling in Northwest Arkansas.",
            },
            {
              id: "character_3",
              image: "/images/projects/pedal-pals/carrie.jpg",
              title: "Carrie",
              description:
                "Carrie embodies the values of safety, community, and connection that Pedal Pals promotes.",
            },
            {
              id: "character_4",
              image: "/images/projects/pedal-pals/sheldon.jpg",
              title: "Shelby",
              description:
                "Shelby is part of the Pedal Pals team working to promote proper bike safety equipment.",
            },
          ]}
        />
      </section>

      <section className="relative py-16 md:py-32 bg-black">
        <PinnedHero
          backgroundVideo="https://vimeo.com/1136702563?share=copy&fl=sv&fe=ci"
          title="Guilty"
          subtitle="You Don't Have to Feel Guilty."
          body="We launch with relatable humor that disarms the viewer immediately. By showing everyday people proudly attempting things they clearly don't understand we invite laughter and recognition."
          scrollDistance={2400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
          ctaLabel="Watch Video"
        />
      </section>

      <section className="relative">
        <FuturisticBackground
          pattern="flowing"
          intensity="moderate"
          showOrbs={false}
          primaryColor="#fc05b9"
          secondaryColor="#4E79A7"
          tertiaryColor="#84596c"
          lineCount={10}
        />
        <h1 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-6 text-center">
          Social Media Content
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed text-center">
          For Uniting Wealth Partners, we created a series of social media
          content to promote the company and their services.
        </p>
        <VideoThumbnailGrid
          vimeoUrl="https://vimeo.com/1136702563?share=copy&fl=sv&fe=ci"
          thumbnails={[
            {
              id: "social_1",
              image: "/images/projects/uniting-wealth-partners/oil.jpeg",
              title: "Financial Anxiety",
              description:
                "By showing Carol, Mike, and Brad confidently attempting DIY tasks they clearly don't understand, the video triggers immediate recognition and laughter.",
            },
            {
              id: "social_2",
              image: "/images/projects/uniting-wealth-partners/drain.jpeg",
              title: "Universal Emotional",
              description:
                "Everyone has tried (and failed) to fix something they weren't qualified to fix. These relatable moments become a perfect metaphor for financial confusion.",
            },
            {
              id: "social_3",
              image: "/images/projects/uniting-wealth-partners/deck.jpeg",
              title: "Reframes Guilt",
              description:
                "The core insight lands because the humor isn't mocking — it's empathetic. Each character is portrayed with confidence, pride, and charm.",
            },
            {
              id: "social_4",
              image: "/images/projects/uniting-wealth-partners/scott.jpeg",
              title: "Clarity",
              description:
                "The video strategically moves from quick comedic beats into a warm, sincere tone as the narrator introduces UWP.",
            },
          ]}
        />
      </section>

      {/* Product Promotion - PinnedHero */}
      <section className="relative">
        <PinnedHero
          backgroundVideo="https://vimeo.com/1110591196?fl=ip&fe=ec"
          title="Product Promotion"
          subtitle="AI-Powered Creative Campaigns"
          body="AI videos, explainers, brand stories, animation, and creative campaigns powered by Planet Goodtimes."
          ctaLabel="Watch Video"
          scrollDistance={2400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
        />
      </section>

      {/* Product Promotion - VideoThumbnailGrid */}
      <section className="relative">
        <VideoThumbnailGrid
          vimeoUrl="https://vimeo.com/1110591196?fl=ip&fe=ec"
          thumbnails={[
            {
              id: "product_1",
              image: "/images/projects/kikits/spokesperson.jpeg",
              title: "Create a Spokesperson",
              description:
                "Create a spokesperson for your brand that is engaging and relatable then use them for the voice over and video content.",
            },
            {
              id: "product_2",
              image: "/images/projects/kikits/explain.jpeg",
              title: "Explain Your Product",
              description:
                "Optimized video content designed for maximum engagement across social platforms.",
            },
            {
              id: "product_3",
              image: "/images/projects/kikits/show.jpeg",
              title: "Showcase Your Product",
              description:
                "Showcase your product in a clear, engaging way that showcases your product's features and benefits.",
            },
            {
              id: "product_4",
              image: "/images/projects/kikits/relate.jpeg",
              title: "Relate to Your Audience",
              description:
                "Relate to your audience by showing them how your product can help them solve their problems.",
            },
          ]}
        />
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
