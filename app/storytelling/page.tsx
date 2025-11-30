"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { PinnedHero } from "@/components/PinnedHero";
import { VideoThumbnailGrid } from "@/components/VideoThumbnailGrid";
import { VimeoVideo } from "@/components/VimeoVideo";
import { Footer } from "@/components/Footer";
import { HorizontalScrollCarousel } from "@/components/HorizontalScrollCarousel";
import { ContactFormModal } from "@/components/ContactFormModal";
import { VideoGallery } from "@/components/VideoGallery";

export default function StorytellingPage() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section className="relative">
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
          intensity="minimal"
          showOrbs={false}
          primaryColor="#fc05b9"
          secondaryColor="#4E79A7"
          tertiaryColor="#84596c"
          lineCount={8}
        />
        <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
          <div className="text-center pt-12 md:pt-32">
            <h2 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-6">
              The Benefits of AI Generation
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
              AI doesn&apos;t replace creativity—it amplifies it. By combining
              human insight with AI capabilities, we unlock new possibilities
              for storytelling, production speed, and creative scale.
            </p>
          </div>
        </ContentReveal>
        <HorizontalScrollCarousel
          items={[
            {
              image: "/images/projects/kikits/MayaAndSpark.jpg",
              title: "AI Storytelling",
              body: "We use AI to analyze brand identity, audience psychology, and emotional arcs. This allows us to build story engines that generate narratives designed to resonate, persuade, and convert — not just entertain.",
              buttonLabel: "Explore Narrative AI",
              buttonOnClick: openContactForm,
            },
            {
              image: "/images/projects/pedal-pals/ricky.jpg",
              title: "AI-Generated Video Production",
              body: "From Pixar-style characters to hyper-realistic avatars, our AI pipeline produces cinematic-quality video content in a fraction of the time and cost. Faster iterations mean sharper creative and stronger results.",
              buttonLabel: "See AI Video Styles",
              buttonOnClick: openContactForm,
            },
            {
              image: "/images/projects/kikits/spokesperson.jpeg",
              title: "Rapid Concept-to-Campaign Workflow",
              body: "AI allows us to ideate, storyboard, animate, and edit at lightning speed. Instead of waiting weeks for production, brands can move from idea → script → video in hours — without sacrificing quality.",
              buttonLabel: "Accelerate Your Production",
              buttonOnClick: openContactForm,
            },
            {
              image: "/images/projects/uniting-wealth-partners/drain.jpeg",
              title: "Emotion-Driven Character Creation",
              body: "We use AI to develop characters that represent your audience's emotions, fears, goals, and identity. From uplifting mascots to cinematic protagonists, each character is engineered for emotional impact.",
              buttonLabel: "Build Your Characters",
              buttonOnClick: openContactForm,
            },
            {
              image: "/images/projects/uniting-wealth-partners/oil.jpeg",
              title: "AI-Powered Ads & Creative Automation",
              body: "We generate endless content variations for social ads, video spots, and campaigns. A single concept becomes dozens of unique, tailored outputs — optimized per audience segment and platform.",
              buttonLabel: "Automate Your Creative",
              buttonOnClick: openContactForm,
            },
            {
              image: "/images/projects/pedal-pals/benny.jpg",
              title: "Scalable Story Systems",
              body: "Our AI-driven frameworks let brands create episodic content, recurring characters, and narrative universes that can be infinitely expanded. Your brand doesn't just tell one story — it builds a world.",
              buttonLabel: "Build a Story Universe",
              buttonOnClick: openContactForm,
            },
          ]}
        />
      </section>

      {/* Kikits: Maya & Spark */}
      <section className="relative">
        <PinnedHero
          backgroundVideo="https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci"
          title="Kikits: Maya & Spark"
          subtitle="Find Your Way. Light the Moment."
          body="An emotionally uplifting animated short that tells the story of Maya, a quiet first-time attendee navigating a crowded event hall. Through AI-generated character design and narrative structure, we created a story that captures the universal experience of finding connection in unexpected moments. The campaign uses Pixar-style 3D animation to bring warmth and relatability to the brand experience."
          ctaLabel="Watch Video"
          scrollDistance={2400}
          startOffset="top top"
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
              Kikits is more than a ticketing platform — it’s a new way for
              events to operate. To launch it, we produced a series of
              AI-generated videos that introduce the product, teach key
              features, and empower users to get the most out of the system. By
              leveraging AI for these videos, we were able to deliver
              high-quality storytelling, faster iteration, and consistent brand
              voice — all while reducing production time.
            </p>
            <VideoGallery
              videos={[
                {
                  id: "kikits_spokesperson",
                  videoUrl: "https://vimeo.com/1105184966?fl=ip&fe=ec",
                  thumbnailUrl: "/images/projects/kikits/kikits-video.png",
                  title: "Kikits Launch Announcement",
                  subtitle:
                    "A high-level launch announcement introducing Kikits to the world, highlighting the vision, core features, and the future of ticketing.",
                },
                {
                  id: "kikits_explain",
                  videoUrl: "https://vimeo.com/1110591196?fl=ip&fe=ec",
                  thumbnailUrl: "/images/projects/kikits/explain.jpeg",
                  title: "Creating QR Codes",
                  subtitle:
                    "An AI-generated walkthrough that teaches users how to create and customize QR codes in Kikits, helping them unlock the system’s most powerful tools.",
                },
                {
                  id: "kikits_showcase",
                  videoUrl: "https://vimeo.com/1111744640?fl=ip&fe=ec",
                  thumbnailUrl: "/images/projects/kikits/show.jpeg",
                  title: "Creating Drink Tickets",
                  subtitle:
                    "A clear, guided explanation showing how Kikits simplifies drink ticket creation using Facts and Scanner Actions — produced with AI for speed, clarity, and consistency.",
                },
              ]}
            />
            {/* <VideoThumbnailGrid
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
            /> */}
          </ContentReveal>
        </div>
      </section>

      {/* Pedal Pals */}
      <section className="relative">
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
      <ContactFormModal isOpen={isContactFormOpen} onClose={closeContactForm} />
      <Footer />
    </main>
  );
}
