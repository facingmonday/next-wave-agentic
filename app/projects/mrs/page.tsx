import { Header } from "@/components/Header";
import { PinnedHero } from "@/components/PinnedHero";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { VideoGallery } from "@/components/VideoGallery";
import Image from "next/image";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";

export default function MRSProjectPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <PinnedHero
        backgroundVideo="https://vimeo.com/908721800?fl=pl&fe=ti"
        title="Miller Risk Solutions"
        subtitle="Protecting Your Professional Reputation"
        body="A comprehensive website redesign and social media strategy that transformed MRS's digital presence, helping them communicate their specialized insurance services to diverse audiences and drive meaningful engagement."
        ctaLabel="Visit Website"
        ctaHref="https://millerrisksolutions.com/"
        scrollDistance={2400}
        startOffset="top top"
        textPosition="center"
        textAlign="center"
      />

      {/* Opportunity Section */}
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
                Who We Are
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Miller Risk Solutions provided a broad range of specialized
                insurance products (marina, trucking, pest control, etc.) and
                needed a digital presence to clearly communicate their services,
                speak to different audience segments (small business owners,
                legal professionals, women entrepreneurs), and differentiate
                themselves in a competitive space.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
              <div>
                <Image
                  src="/images/MRS/MRS.png"
                  alt="Miller Risk Solutions"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Key Challenges
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Communicating complex insurance products to diverse
                      audiences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Differentiating in a competitive insurance marketplace
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Building trust and thought leadership in niche insurance
                      sectors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Creating engaging content that drives lead generation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 text-center">
              Our Solution
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              We delivered a comprehensive website redesign — creating intuitive
              navigation, content architecture mapped to specific business
              segments, rich content (blogs, case studies, testimonials), and an
              SEO-optimized structure to boost visibility and engagement.
            </p>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Key Features
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Segment-specific service pages with clear benefit-driven
                      messaging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Thought leadership content (blogs/case studies)
                      positioning MRS as an expert
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      User-friendly navigation and calls to action driving
                      inbound leads
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      SEO strategy focused on niche insurance categories
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Responsive design with brand consistency across devices
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/MRS/MRsImage.png"
                  alt="MRS Website Features"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                Branded Video & Ad Production
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Beyond web design, our team produces custom video content and
                ads that elevate your brand, increase audience engagement, and
                drive traffic to your website. From company overview videos to
                targeted social ads, we help you tell your story and amplify
                your reach for greater business impact.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <VideoGallery
                videos={[
                  {
                    id: "mrs-brand-story",
                    videoUrl: "https://vimeo.com/908721800?fl=pl&fe=ti",
                    thumbnailUrl: "/images/MRS/MRS.png",
                    title: "Who Is Miller Risk Solutions?",
                    subtitle:
                      "A brand video we crafted for MRS that introduces their mission and showcases our production capabilities.",
                    ctaLabel: "See More Video Work",
                    ctaHref: "/storytelling",
                  },
                ]}
                className="py-8"
                titleClassName="text-[#CFC8CF]"
                subtitleClassName="text-gray-300"
                buttonClassName="inline-block px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
                showThumbnails={false}
              />
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Outcomes Section */}
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
                Results & Impact
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                After launch, MRS experienced increased site traffic, deeper
                user engagement (higher time-on-site and pages per session), and
                stronger lead generation from the website redesign and content
                strategy.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30 hover:border-[#4E79A7]/60 transition-colors">
                <div className="text-4xl font-bold text-[#4E79A7] mb-4">↑</div>
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Increased Traffic
                </h3>
                <p className="text-gray-300">
                  Visitors grew significantly within the first quarter
                  post-launch, with improved SEO visibility driving organic
                  search results.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30 hover:border-[#4E79A7]/60 transition-colors">
                <div className="text-4xl font-bold text-[#4E79A7] mb-4">⏱</div>
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Higher Engagement
                </h3>
                <p className="text-gray-300">
                  User sessions lasted longer and users visited more pages per
                  session, indicating improved content relevance and navigation.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30 hover:border-[#4E79A7]/60 transition-colors">
                <div className="text-4xl font-bold text-[#4E79A7] mb-4">📈</div>
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Lead Generation
                </h3>
                <p className="text-gray-300">
                  More qualified inquiries stemming from targeted content and
                  better UX, with improved conversion rates across key service
                  pages.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Website Performance
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The redesigned website improved user experience with intuitive
                  navigation, faster load times, and mobile-responsive design.
                  Segment-specific landing pages helped visitors quickly find
                  relevant insurance products.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  SEO optimization resulted in better search rankings for niche
                  insurance categories, driving organic traffic from target
                  audiences.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Social Media Growth
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Strategic social media campaigns increased brand awareness and
                  engagement across LinkedIn, Instagram, and Facebook. Content
                  series like &quot;Risk Tip Tuesday&quot; positioned MRS as a
                  trusted expert in specialized insurance.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Community engagement and shareable content helped expand reach
                  and drive traffic back to key service pages, creating a
                  cohesive digital ecosystem.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Social Media Strategy Section */}
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
                Social Media Strategy & Growth
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                To amplify MRS’s reach and build trust among diverse audiences,
                we developed and ran a social-media push — tailored posts for
                each segment, a content calendar, shareable visuals, and organic
                community engagement.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Strategy Overview
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We created content series like “Risk Tip Tuesday”,
                  segment-spotlights (e.g., trucking & fleet safety), and
                  behind-the-scenes insights to humanize MRS’s brand and
                  generate conversations among business owners.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Weekly stories, short-form video clips, and targeted ad
                  support helped boost visibility and drive traffic back to key
                  service pages.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Social content calendar + asset creation</li>
                  <li>
                    Short-form educational videos (LinkedIn, Instagram,
                    Facebook)
                  </li>
                  <li>
                    Audience-specific messaging for niche insurance sectors
                  </li>
                  <li>Community management + engagement tracking</li>
                  <li>Monthly performance review + optimization</li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>
      <Portfolio
        items={[
          {
            id: "sm_1",
            image: "/images/MRS/MRSSocialMedia1.png",
            title: "Risk Tip Tuesday – Fleet Safety",
            description:
              "Short video clip optimized for LinkedIn and IG reels, providing valuable safety tips for fleet operators.",
          },
          {
            id: "sm_2",
            image: "/images/MRS/MRSSocialMedia2.png",
            title: "Marina Insurance Spotlight",
            description:
              "Targeted carousel post for small business owners in the marina sector, highlighting specialized coverage.",
          },
          {
            id: "sm_3",
            image: "/images/MRS/MRSSocialMedia3.png",
            title: "Women Entrepreneurs Series",
            description:
              "Instagram story sequence celebrating women-led businesses insured by MRS, showcasing empowerment and support.",
          },
          {
            id: "sm_4",
            image: "/images/MRS/MRSSocialMedia4.png",
            title: "Behind the Scenes – Team Feature",
            description:
              "Humanizing post showcasing MRS culture and service team, building trust through authentic storytelling.",
          },
        ]}
        title="Social Media Gallery"
        description="A gallery of social media assets created for Miller Risk Solutions."
        autoScrollSpeed={4000}
      />

      {/* Closing / Contact CTA */}
      <section id="contact" className="py-32 px-4 bg-[#201E30]">
        <div className="max-w-4xl mx-auto">
          <ContentReveal direction="up" duration={1.2}>
            <h2 className="text-5xl md:text-7xl font-bold text-[#CFC8CF] mb-4 text-center">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Whether you’re targeting niche markets, building
              thought-leadership, or launching a full-scale brand redesign —
              we’re ready when you are.
            </p>
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
                      placeholder="Tell us about your project…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg py-4 px-8 rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
                  >
                    Let’s Build Something
                  </button>
                </div>
              </form>
            </ContentReveal>
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
                Where creativity, technology, and storytelling align to drive
                growth.
              </p>
              <p className="text-gray-500 text-sm mt-8">
                © {new Date().getFullYear()} Next Wave Agentic. All rights
                reserved.
              </p>
            </div>
          </ContentReveal>
        </div>
      </footer>
      <Footer />
    </main>
  );
}
