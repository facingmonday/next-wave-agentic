import { Header } from "@/components/Header";
import { PinnedHero } from "@/components/PinnedHero";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { VideoGallery } from "@/components/VideoGallery";
import { VimeoVideo } from "@/components/VimeoVideo";
import { Footer } from "@/components/Footer";

export default function MayaSparkPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <PinnedHero
        backgroundVideo="https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci"
        title="Maya & Spark"
        subtitle="Find Your Way. Light the Moment."
        body="An emotionally uplifting animated short and event experience that blends AI storytelling with real-world interaction. Follow Maya, a quiet first-time attendee navigating a crowded event hall, until a single scan changes everything."
        scrollDistance={2400}
        startOffset="top top"
        textPosition="center"
        textAlign="center"
        ctaLabel="Watch Video"
      />

      {/* Strategy Section - AI-Powered Storytelling */}
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
                Strategy: Human Connection Through Story
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Using AI narrative analysis, we identified that event discovery
                platforms often feel transactional. We wanted to tell a story
                about the human connection that happens at events, not just the
                logistics of finding them. The Maya & Spark campaign uses
                AI-generated character archetypes and emotional journey mapping
                to create a story that resonates with anyone who&apos;s ever
                felt lost in a crowd.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  The Story Behind the Story
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We created a narrative that captures the universal experience
                  of finding connection in unexpected moments. Through
                  AI-generated character design and narrative structure, we
                  developed a story that transforms the transactional nature of
                  event discovery into an emotional journey of belonging.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  The campaign uses Pixar-style 3D animation to bring warmth and
                  relatability to the brand experience. By focusing on
                  Maya&apos;s journey from isolation to connection, we
                  demonstrate how technology can facilitate meaningful human
                  interactions rather than replace them.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Each element of the story was crafted to resonate with
                  first-time event attendees, creating an emotional connection
                  that goes beyond the functional benefits of the platform.
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
                      AI-powered narrative analysis to identify emotional
                      touchpoints
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Character archetype development using AI-generated
                      insights
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Emotional journey mapping that transforms transaction into
                      connection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Pixar-style 3D animation for warmth and relatability
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Real-world event integration that brings the story to life
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 text-center">
              The Maya & Spark Story
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              Watch Maya&apos;s journey from a quiet first-time attendee to
              finding connection through a simple scan. This animated short
              demonstrates how technology can facilitate meaningful human
              interactions.
            </p>
            <div className="max-w-4xl mx-auto">
              <VimeoVideo
                vimeoUrl="https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci"
                className="rounded-xl shadow-2xl overflow-hidden"
              />
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Software Section - AI Technologies */}
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
                Software: AI-Powered Storytelling
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                We leveraged AI technologies to analyze narrative structures,
                develop character archetypes, and create emotional journey maps
                that transformed a transactional event discovery experience into
                an emotionally resonant story. The combination of AI insights
                and human creativity resulted in a campaign that connects on a
                deeper level.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1">
                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    AI Technologies Used
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        AI narrative analysis to identify emotional touchpoints
                        and story structure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Character archetype generation and personality
                        development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Emotional journey mapping to guide narrative flow
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        3D animation tools for character design and movement
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Real-world event integration technology for immersive
                        experiences
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  From Analysis to Animation
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  AI helped us understand the emotional landscape of event
                  discovery, identifying that the core challenge wasn&apos;t
                  finding events, but finding connection. This insight shaped
                  every aspect of the campaign, from character design to
                  narrative structure.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  The animation process combined AI-generated character
                  archetypes with traditional storytelling techniques, resulting
                  in a Pixar-style aesthetic that feels both familiar and fresh.
                  The technology enabled us to iterate quickly on character
                  designs and narrative beats, ensuring the final story would
                  resonate with our audience.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Looking forward, we see opportunities to expand Maya & Spark
                  into interactive experiences, where attendees can engage with
                  the story at real events, creating a bridge between the
                  animated narrative and live event experiences.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Narrative Analysis
                </h3>
                <p className="text-gray-300">
                  AI analyzed existing event discovery narratives to identify
                  gaps and opportunities for emotional connection, guiding our
                  story development process.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Character Development
                </h3>
                <p className="text-gray-300">
                  AI-generated character archetypes helped us create Maya as a
                  relatable protagonist, ensuring her journey would resonate
                  with first-time event attendees.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Event Integration
                </h3>
                <p className="text-gray-300">
                  The story extends beyond the screen, with real-world event
                  experiences that bring Maya&apos;s journey to life for actual
                  attendees.
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
                Stories: Maya & Spark in Action
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                The Maya & Spark campaign tells a complete story that extends
                from animated narrative to real-world event experiences. Each
                element reinforces the core message of finding connection
                through technology.
              </p>
            </div>
            <div className="py-8">
              <VideoGallery
                videos={[
                  {
                    id: "maya-spark-main",
                    videoUrl:
                      "https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci",
                    thumbnailUrl: "/images/projects/kikits/MayaAndSpark.jpg",
                    title: "Maya & Spark: The Animated Short",
                    subtitle:
                      "Follow Maya as she navigates a crowded event hall, feeling lost until a single scan changes everything. This emotionally uplifting story demonstrates how technology can facilitate meaningful human connections.",
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

      {/* Engagement Section - Event Experience */}
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
                Engagement: Bringing Stories to Life
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Maya & Spark isn&apos;t just an animated short—it&apos;s an
                event experience that bridges the gap between digital
                storytelling and real-world interaction. The campaign creates
                opportunities for attendees to engage with the story at actual
                events, making the narrative tangible and memorable.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Immersive Event Integration
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  The Maya & Spark story extends beyond the screen, with
                  real-world event experiences that allow attendees to step into
                  Maya&apos;s world. Through interactive elements, QR code
                  scanning, and immersive installations, we create moments where
                  the animated narrative becomes a lived experience.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  This approach transforms event discovery from a transactional
                  process into an emotional journey. Attendees don&apos;t just
                  find events—they find connection, community, and moments of
                  discovery that mirror Maya&apos;s experience in the animated
                  short.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The integration of story and experience creates lasting
                  memories and emotional connections that extend far beyond the
                  event itself, building brand loyalty through meaningful
                  engagement.
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
                      Interactive event installations that bring the story to
                      life
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      QR code scanning experiences that mirror Maya&apos;s
                      journey
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Social media content that extends the narrative across
                      platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Community-building initiatives that foster connection
                      among attendees
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Event partnerships that integrate the story into live
                      experiences
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Interactive Experiences
                </h3>
                <p className="text-gray-300">
                  Event installations and interactive elements allow attendees
                  to step into Maya&apos;s world, creating memorable moments
                  that bridge digital and physical experiences.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Emotional Connection
                </h3>
                <p className="text-gray-300">
                  By focusing on human connection rather than transaction, the
                  campaign creates lasting emotional bonds between attendees and
                  the brand.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Community Building
                </h3>
                <p className="text-gray-300">
                  The story fosters a sense of community among event attendees,
                  creating connections that extend beyond individual events and
                  build long-term engagement.
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
                The Work Behind Maya & Spark
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Creating Maya & Spark required a comprehensive approach
                combining AI-powered narrative analysis, character development,
                3D animation, and real-world event integration. Here&apos;s what
                went into making this project a success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Narrative Development
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Using AI narrative analysis, we identified the emotional gaps
                  in event discovery platforms and developed a story framework
                  that would resonate with first-time attendees. The process
                  involved analyzing existing narratives, mapping emotional
                  journeys, and crafting a story that transforms transaction
                  into connection.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The narrative structure was carefully designed to mirror the
                  real experience of attending events, making Maya&apos;s
                  journey relatable and emotionally engaging.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Character & Animation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Maya was developed using AI-generated character archetypes,
                  ensuring she would be relatable to our target audience. The
                  Pixar-style 3D animation brought warmth and personality to the
                  character, making her journey feel authentic and emotionally
                  resonant.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The animation process combined AI insights with traditional
                  storytelling techniques, resulting in a character that feels
                  both familiar and fresh.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Event Integration
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bringing the story to life at real events required careful
                  planning and creative execution. We developed interactive
                  installations, QR code experiences, and immersive elements
                  that allow attendees to step into Maya&apos;s world.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This integration creates a seamless bridge between the
                  animated narrative and live event experiences, making the
                  story tangible and memorable.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Measuring Impact
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The campaign&apos;s success is measured not just in views, but
                  in the emotional connections it creates. Attendees report
                  feeling more connected to events and the community, validating
                  our approach of prioritizing human connection over
                  transaction.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The story has become a touchstone for the brand, demonstrating
                  how technology can facilitate meaningful human interactions
                  rather than replace them.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
