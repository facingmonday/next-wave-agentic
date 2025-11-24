import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { VideoThumbnailGrid } from "@/components/VideoThumbnailGrid";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Engagement | Next Wave Agentic",
  description:
    "Experiential events and interactive engagement experiences by Next Wave Agentic.",
  openGraph: {
    title: "Engagement | Next Wave Agentic",
    description:
      "Discover our experiential events and interactive engagement experiences.",
    type: "website",
  },
};

export default function EngagementPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="relative z-30 py-16 md:py-24 bg-black">
        <div className="max-w-3xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
            Engagement
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Marketing, community, distribution, and social media that connects
            brands with audiences
          </p>
        </div>
      </section>

      {/* Marketing Section */}
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
                Marketing Campaigns
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We develop and execute marketing campaigns that drive awareness,
                engagement, and action across multiple channels and touchpoints.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Campaign Strategy
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We plan multi-channel marketing campaigns that align
                  messaging, timing, and creative assets across digital, social,
                  and traditional media.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Channel strategy and media planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Content calendar and asset production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Performance tracking and optimization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Creative Production
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We produce marketing assets including videos, graphics, copy,
                  and interactive content optimized for each platform and
                  audience.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Video and animation production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Social media content creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Email and digital advertising assets</span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Community Building */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                Community Building
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We help brands build and nurture communities through content,
                events, and engagement strategies that foster connection and
                loyalty.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Content Strategy
                </h3>
                <p className="text-gray-300">
                  Developing content that educates, entertains, and engages
                  community members while reinforcing brand values.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Event Programming
                </h3>
                <p className="text-gray-300">
                  Creating events and experiences that bring community members
                  together and strengthen relationships.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Engagement Tactics
                </h3>
                <p className="text-gray-300">
                  Implementing strategies for ongoing engagement, conversation,
                  and community participation across platforms.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Distribution */}
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
                Distribution & Reach
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We develop distribution strategies that maximize reach and
                impact across platforms, channels, and audiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Multi-Channel Distribution
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We distribute content and campaigns across social media,
                  email, web, paid advertising, and partner channels to maximize
                  visibility and engagement.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Each channel is optimized for its unique audience and format
                  requirements, ensuring consistent messaging while respecting
                  platform-specific best practices.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Distribution Channels
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Social media platforms (Instagram, TikTok, Facebook,
                      LinkedIn)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Email marketing and newsletters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Paid advertising and sponsored content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Partner and influencer networks</span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Social Media */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                Social Media Engagement
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We create and manage social media content that builds brand
                awareness, drives engagement, and fosters community connection.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Content Creation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We produce platform-specific content including videos,
                  graphics, stories, and interactive posts optimized for
                  engagement and reach.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Video content and short-form videos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Visual graphics and carousels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Stories and ephemeral content</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Community Management
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We manage social media accounts, respond to comments and
                  messages, and foster conversations that build brand loyalty
                  and trust.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Daily posting and content scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Comment moderation and response</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>Engagement strategy and tactics</span>
                  </li>
                </ul>
              </div>
            </div>
            <VideoThumbnailGrid
              vimeoUrl="https://vimeo.com/1136702563?share=copy&fl=sv&fe=ci"
              thumbnails={[
                {
                  id: "social_uwp_1",
                  image: "/images/projects/uniting-wealth-partners/oil.jpeg",
                  title: "Social Media Campaign",
                  description:
                    "The Guilty campaign was distributed across social media platforms, generating engagement through relatable humor and authentic storytelling.",
                },
                {
                  id: "social_uwp_2",
                  image: "/images/projects/uniting-wealth-partners/drain.jpeg",
                  title: "Platform Adaptation",
                  description:
                    "Content was adapted for each platform's format and audience, maximizing reach and engagement across channels.",
                },
                {
                  id: "social_uwp_3",
                  image: "/images/projects/uniting-wealth-partners/deck.jpeg",
                  title: "Community Engagement",
                  description:
                    "The campaign generated conversations and shares, building brand awareness and trust through social engagement.",
                },
                {
                  id: "social_uwp_4",
                  image: "/images/projects/uniting-wealth-partners/scott.jpeg",
                  title: "Amplified Reach",
                  description:
                    "Social media distribution amplified the campaign's message, reaching audiences who might not have encountered the brand through traditional channels.",
                },
              ]}
            />
          </ContentReveal>
        </div>
      </section>

      {/* Kikits Engagement Example */}
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
                Kikits: Engagement in Action
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Kikits demonstrates how engagement appears across our work.
                Here's how we engaged users with Kikits:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Promotions & Campaigns
                </h3>
                <p className="text-gray-300">
                  We developed promotional campaigns that drove awareness and
                  user acquisition through targeted marketing, partnerships, and
                  special offers.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Influencer Partnerships
                </h3>
                <p className="text-gray-300">
                  We partnered with influencers and creators to showcase the
                  platform, reach new audiences, and build credibility through
                  authentic recommendations.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  User Onboarding
                </h3>
                <p className="text-gray-300">
                  We designed onboarding experiences that guide new users
                  through the platform, highlight key features, and encourage
                  first-time event discovery and ticket purchases.
                </p>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30">
                <Image
                  src="/images/projects/kikits/kikits-app.jpg"
                  alt="Kikits App"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Social Media Distribution
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Kikits content was distributed across social media platforms,
                  including product videos, event highlights, and user-generated
                  content that showcased the platform's value.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We managed social media accounts, created engaging posts, and
                  fostered community conversations that built brand awareness
                  and drove platform adoption.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>
    </main>
  );
}
