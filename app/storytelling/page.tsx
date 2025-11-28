import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { PinnedHero } from "@/components/PinnedHero";
import { VideoThumbnailGrid } from "@/components/VideoThumbnailGrid";
import { VimeoVideo } from "@/components/VimeoVideo";
import { Footer } from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { HorizontalScrollCarousel } from "@/components/HorizontalScrollCarousel";

export const metadata: Metadata = {
  title: "Stories | Next Wave Agentic",
  description:
    "AI-powered storytelling and narrative experiences crafted by Next Wave Agentic.",
  openGraph: {
    title: "Stories | Next Wave Agentic",
    description:
      "Explore our AI-powered storytelling and narrative experiences.",
    type: "website",
  },
};

export default function StorytellingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="relative bg-black">
        <PinnedHero
          backgroundVideo="https://vimeo.com/1136559533"
          title="AI-Powered Storytelling"
          subtitle="AI-powered storytelling and narrative experiences"
          body="We use AI to craft stories that are not only engaging but also strategically aligned with business objectives. Each narrative is crafted to build connection, drive action, and leave lasting impressions."
          ctaLabel="Explore Stories Below"
          scrollDistance={2400}
          startOffset="top top"
          textPosition="left"
          textAlign="left"
        />
      </section>

      {/* AI Storytelling Intro */}
      <section className="relative bg-black">
        <FuturisticBackground
          pattern="flowing"
          intensity="moderate"
          showOrbs={false}
          primaryColor="#fc05b9"
          secondaryColor="#4E79A7"
          tertiaryColor="#84596c"
          lineCount={10}
        />
        <HorizontalScrollCarousel
          items={[
            {
              image: "/images/projects/kikits/MayaAndSpark.jpg",
              title: "AI Storytelling",
              body: "We use AI to analyze brand identity, audience psychology, and emotional arcs. This allows us to build story engines that generate narratives designed to resonate, persuade, and convert — not just entertain.",
              buttonLabel: "Explore Narrative AI",
              buttonHref: "/contact",
            },
            {
              image: "/images/projects/pedal-pals/crystal.jpg",
              title: "AI-Generated Video Production",
              body: "From Pixar-style characters to hyper-realistic avatars, our AI pipeline produces cinematic-quality video content in a fraction of the time and cost. Faster iterations mean sharper creative and stronger results.",
              buttonLabel: "See AI Video Styles",
              buttonHref: "/contact",
            },
            {
              image: "/images/projects/kikits/KikitsPhone.jpg",
              title: "Rapid Concept-to-Campaign Workflow",
              body: "AI allows us to ideate, storyboard, animate, and edit at lightning speed. Instead of waiting weeks for production, brands can move from idea → script → video in hours — without sacrificing quality.",
              buttonLabel: "Accelerate Your Production",
              buttonHref: "/contact",
            },
            {
              image:
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
              title: "Emotion-Driven Character Creation",
              body: "We use AI to develop characters that represent your audience’s emotions, fears, goals, and identity. From uplifting mascots to cinematic protagonists, each character is engineered for emotional impact.",
              buttonLabel: "Build Your Characters",
              buttonHref: "/contact",
            },
            {
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              title: "AI-Powered Ads & Creative Automation",
              body: "We generate endless content variations for social ads, video spots, and campaigns. A single concept becomes dozens of unique, tailored outputs — optimized per audience segment and platform.",
              buttonLabel: "Automate Your Creative",
              buttonHref: "/contact",
            },
            {
              image:
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
              title: "Scalable Story Systems",
              body: "Our AI-driven frameworks let brands create episodic content, recurring characters, and narrative universes that can be infinitely expanded. Your brand doesn’t just tell one story — it builds a world.",
              buttonLabel: "Build a Story Universe",
              buttonHref: "/contact",
            },
          ]}
        />
      </section>

      {/* Kikits: Maya & Spark */}
      <section className="relative py-16 md:py-32 bg-black">
        <PinnedHero
          backgroundVideo="https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci"
          title="Kikits: Maya & Spark"
          subtitle="Find Your Way. Light the Moment."
          body="An emotionally uplifting animated short that tells the story of Maya, a quiet first-time attendee navigating a crowded event hall. Through AI-generated character design and narrative structure, we created a story that captures the universal experience of finding connection in unexpected moments. The campaign uses Pixar-style 3D animation to bring warmth and relatability to the brand experience."
          ctaLabel="Watch Video"
          scrollDistance={2400}
          startOffset="top 80%"
          textPosition="center"
          textAlign="center"
        />
      </section>

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
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  The Story Behind the Story
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Using AI narrative analysis, we identified that event
                  discovery platforms often feel transactional. We wanted to
                  tell a story about the human connection that happens at
                  events, not just the logistics of finding them.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The Maya & Spark campaign uses AI-generated character
                  archetypes and emotional journey mapping to create a story
                  that resonates with anyone who&apos;s ever felt lost in a
                  crowd, only to find their place through a simple interaction.
                </p>
              </div>
              <div>
                <VimeoVideo
                  vimeoUrl="https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci"
                  className="rounded-xl shadow-2xl overflow-hidden"
                />
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Kikits Product Videos */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 text-center">
              Kikits Product Storytelling
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
                  title: "Audience Connection",
                  description:
                    "Stories that connect product features to user emotions and needs, building relatability and trust.",
                },
              ]}
            />
          </ContentReveal>
        </div>
      </section>

      {/* Pedal Pals */}
      <section className="relative py-16 md:py-32">
        <PinnedHero
          backgroundVideo="https://vimeo.com/1126858733?fl=ip&fe=ec"
          title="Pedal Pals"
          subtitle="Ride Smart. Ride Safe. Ride Together."
          body="A community-driven cycling safety campaign that uses AI-generated character design and worldbuilding to create an engaging educational narrative. Through original characters like Benny, Ricky, Carrie, and Shelby, we tell stories about cycling safety that feel approachable and memorable. The campaign transforms safety messaging into character-driven adventures that resonate with both kids and adults."
          ctaLabel="Watch Video"
          scrollDistance={2400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
        />
      </section>

      <section className="relative py-16 md:py-32 bg-black">
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
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 text-center">
              Character-Driven Storytelling
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              AI helped us develop character archetypes and personality traits
              that would resonate with the cycling community, creating a cast of
              characters that feel authentic and relatable.
            </p>
            <VideoThumbnailGrid
              vimeoUrl="https://vimeo.com/1126858733?fl=ip&fe=ec"
              thumbnails={[
                {
                  id: "pedal_pals_benny",
                  image: "/images/projects/pedal-pals/benny.jpg",
                  title: "Benny",
                  description:
                    "Benny represents the enthusiastic beginner, learning safe cycling practices through adventure and discovery.",
                },
                {
                  id: "pedal_pals_ricky",
                  image: "/images/projects/pedal-pals/ricky.jpg",
                  title: "Ricky",
                  description:
                    "Ricky embodies the community spirit, showing how cycling safety brings people together.",
                },
                {
                  id: "pedal_pals_carrie",
                  image: "/images/projects/pedal-pals/carrie.jpg",
                  title: "Carrie",
                  description:
                    "Carrie demonstrates the values of safety, community, and connection that define the Pedal Pals mission.",
                },
                {
                  id: "pedal_pals_sheldon",
                  image: "/images/projects/pedal-pals/sheldon.jpg",
                  title: "Shelby",
                  description:
                    "Shelby champions proper safety equipment and responsible cycling practices.",
                },
              ]}
            />
          </ContentReveal>
        </div>
      </section>

      {/* Uniting Wealth Partners
      <section className="relative py-16 md:py-32">
        <PinnedHero
          backgroundVideo="https://vimeo.com/1136702563?share=copy&fl=sv&fe=ci"
          title="Uniting Wealth Partners: Guilty"
          subtitle="You Don't Have to Feel Guilty."
          body="A relatable, humor-forward campaign that uses AI to analyze financial anxiety patterns and craft stories that reframe guilt through empathy. By showing everyday people confidently attempting DIY tasks they clearly don't understand, we created a perfect metaphor for financial confusion. The AI-generated narrative structure helps us move from comedic recognition to warm, sincere connection with the brand."
          ctaLabel="Watch Video"
          scrollDistance={2400}
          startOffset="top top"
          textPosition="center"
          textAlign="center"
        />
      </section> */}

      {/* <section className="relative py-16 md:py-32 bg-black">
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
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 text-center">
              Reframing Financial Stories
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              AI narrative analysis helped us identify that financial services
              marketing often triggers anxiety. We used AI to craft stories that
              disarm, relate, and then reframe, turning financial guilt into
              understanding and trust.
            </p>
            <VideoThumbnailGrid
              vimeoUrl="https://vimeo.com/1136702563?share=copy&fl=sv&fe=ci"
              thumbnails={[
                {
                  id: "uwp_oil",
                  image: "/images/projects/uniting-wealth-partners/oil.jpeg",
                  title: "Financial Anxiety",
                  description:
                    "By showing Carol, Mike, and Brad confidently attempting DIY tasks they clearly don't understand, the video triggers immediate recognition and laughter.",
                },
                {
                  id: "uwp_drain",
                  image: "/images/projects/uniting-wealth-partners/drain.jpeg",
                  title: "Universal Emotions",
                  description:
                    "Everyone has tried (and failed) to fix something they weren't qualified to fix. These relatable moments become a perfect metaphor for financial confusion.",
                },
                {
                  id: "uwp_deck",
                  image: "/images/projects/uniting-wealth-partners/deck.jpeg",
                  title: "Reframing Guilt",
                  description:
                    "The core insight lands because the humor isn't mocking — it's empathetic. Each character is portrayed with confidence, pride, and charm.",
                },
                {
                  id: "uwp_scott",
                  image: "/images/projects/uniting-wealth-partners/scott.jpeg",
                  title: "Building Trust",
                  description:
                    "The video strategically moves from quick comedic beats into a warm, sincere tone as the narrator introduces UWP, building trust through storytelling.",
                },
              ]}
            />
          </ContentReveal>
        </div>
      </section> */}
      <Footer />
    </main>
  );
}
