import { Header } from "@/components/Header";
import { PinnedHero } from "@/components/PinnedHero";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { VideoGallery } from "@/components/VideoGallery";
import { VideoThumbnailGrid } from "@/components/VideoThumbnailGrid";
import { Footer } from "@/components/Footer";

export default function PedalPalsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      

      {/* Hero Section */}
      <PinnedHero
        backgroundVideo="https://vimeo.com/1126858733?fl=ip&fe=ec"
        title="Pedal Pals"
        subtitle="Ride Smart. Ride Safe. Ride Together."
        body="Pedal Pals is a community-driven initiative that aims to create a safer and more connected cycling culture in Bentonville. Through original animal characters, AI-powered storytelling, and engaging content, we're reaching young children across Northwest Arkansas to promote bike safety and foster a love for cycling."
        scrollDistance={2400}
        startOffset="top top"
        textPosition="center"
        textAlign="center"
        ctaLabel="Watch Video"
      />

      {/* Strategy Section - Character Development */}
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
                Strategy: Character-Driven Bike Safety
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Our strategic approach focused on creating memorable animal
                characters that would resonate with children while teaching
                essential bike safety lessons. Each character was carefully
                designed to represent a specific piece of bike safety equipment
                or practice, making learning fun and engaging.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Character Design Philosophy
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We developed a cast of animal characters, each tailored to
                  represent different aspects of bike safety. From
                  helmet-wearing heroes to reflective gear champions, every
                  character serves as both a mascot and a teaching tool, making
                  bike safety approachable and memorable for young children.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  The strategy focused on making safety education feel like an
                  adventure rather than a lecture. By creating characters that
                  children can relate to and root for, we transform important
                  safety messages into engaging stories that stick.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Each character embodies specific safety values while remaining
                  appealing and fun, ensuring that children not only learn about
                  bike safety but also develop a positive association with safe
                  cycling practices.
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
                      Character development tailored to specific bike safety
                      lessons
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Child-friendly design that appeals to young audiences
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Narrative framework that transforms safety into adventure
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Educational content embedded in engaging storytelling
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Brand identity that promotes safety and community values
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Character Showcase */}
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 text-center">
              Meet the Pedal Pals
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
              Each character represents a different aspect of bike safety,
              teaching children important lessons through memorable
              personalities and engaging stories.
            </p>
            <VideoThumbnailGrid
              vimeoUrl="https://vimeo.com/1126858733?fl=ip&fe=ec"
              thumbnails={[
                {
                  id: "benny",
                  image: "/images/projects/pedal-pals/benny.jpg",
                  title: "Benny",
                  description:
                    "Benny embodies the spirit of adventure and learning, showing young cyclists how to enjoy riding while staying safe.",
                },
                {
                  id: "ricky",
                  image: "/images/projects/pedal-pals/ricky.jpg",
                  title: "Ricky",
                  description:
                    "Ricky represents community spirit and the importance of riding together safely, promoting connected cycling culture.",
                },
                {
                  id: "carrie",
                  image: "/images/projects/pedal-pals/carrie.jpg",
                  title: "Carrie",
                  description:
                    "Carrie demonstrates the values of safety, community, and connection that define the Pedal Pals mission.",
                },
                {
                  id: "shelby",
                  image: "/images/projects/pedal-pals/sheldon.jpg",
                  title: "Shelby",
                  description:
                    "Shelby champions proper safety equipment and responsible cycling practices, making safety cool and important.",
                },
              ]}
            />
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
                Software: AI-Powered Creation
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                We leveraged the latest AI technologies to bring the Pedal Pals
                world to life, from character design and animation to content
                generation and storytelling. Our use of cutting-edge AI tools
                accelerated the creative process while maintaining the quality
                and heart that makes these characters special.
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
                        AI-generated character design and personality
                        development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Advanced animation tools for bringing characters to life
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        AI-powered narrative generation for educational content
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Content creation tools for scalable video and media
                        production
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>
                        Interactive platforms to engage children with the
                        characters
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Bringing Ideas to Life
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  We used the latest AI technologies to rapidly prototype
                  character designs, generate educational narratives, and create
                  engaging content that would normally take months to produce.
                  This allowed us to iterate quickly and refine our approach
                  based on what resonated most with our young audience.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Looking forward, we have plans to expand the Pedal Pals
                  universe with interactive apps, augmented reality experiences,
                  and personalized learning paths that adapt to each
                  child&apos;s interests and progress. AI will continue to power
                  these innovations, making bike safety education more engaging,
                  accessible, and effective.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The combination of human creativity and AI capability enables
                  us to create content at scale while maintaining the authentic,
                  community-driven spirit that makes Pedal Pals special.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Character Animation
                </h3>
                <p className="text-gray-300">
                  AI-powered animation tools helped us bring each character to
                  life with personality and charm, making them instantly
                  recognizable and lovable.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Content Generation
                </h3>
                <p className="text-gray-300">
                  AI assists in creating educational content, storylines, and
                  messaging that resonates with children while teaching
                  important safety lessons.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Future Platforms
                </h3>
                <p className="text-gray-300">
                  Plans for interactive apps, AR experiences, and personalized
                  learning tools will leverage AI to create unique, engaging
                  experiences for each child.
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
                Stories: Pedal Pals in Action
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                Our collection of videos brings the Pedal Pals characters to
                life, telling stories that entertain while educating children
                about bike safety. Each video features our beloved characters in
                adventures that teach important safety lessons.
              </p>
            </div>
            <div className="py-8">
              <VideoGallery
                videos={[
                  {
                    id: "main-campaign",
                    videoUrl: "https://vimeo.com/1126858733?fl=ip&fe=ec",
                    thumbnailUrl: "/images/projects/pedal-pals/crystal.jpg",
                    title: "Pedal Pals Main Campaign",
                    subtitle:
                      "Join the Pedal Pals as they explore Bentonville and learn about bike safety together. This campaign introduces our characters and their mission to make cycling safer and more fun for everyone.",
                  },
                  {
                    id: "safety-tips",
                    videoUrl:
                      "https://vimeo.com/1140033869?share=copy&fl=sv&fe=ci",
                    thumbnailUrl: "/images/projects/pedal-pals/benny.jpg",
                    title: "Cold Weather Tips and Safety",
                    subtitle:
                      "Learn about the importance of safety in cold weather, and how to stay warm and safe while riding your bike.",
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

      {/* Engagement Section - Reaching Children in NWA */}
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
                Engagement: Reaching Young Children in NWA
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Pedal Pals has become a powerful tool for reaching young
                children across Northwest Arkansas, promoting bike safety and
                encouraging a love for cycling. Through engaging characters,
                educational content, and community events, we&apos;re making a
                real impact on the next generation of cyclists.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                  Community Impact
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Through Pedal Pals, we&apos;ve connected with thousands of
                  young children in Northwest Arkansas, introducing them to bike
                  safety in a way that feels like fun rather than a lecture. The
                  characters have become recognizable faces in the community,
                  appearing at events, schools, and cycling programs.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  The response from children and parents has been overwhelmingly
                  positive. Kids are excited to see the characters, remember the
                  safety lessons, and feel empowered to ride safely. Parents
                  appreciate how the content makes it easier to teach important
                  safety concepts to their children.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We&apos;ve seen children actively engaging with the
                  characters, repeating safety tips, and becoming advocates for
                  safe cycling among their peers. This engagement translates
                  into real-world behavior change, making the streets of
                  Northwest Arkansas safer for everyone.
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
                      Character appearances at local events and cycling programs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Educational content distributed through schools and
                      community centers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Social media content that parents can share with children
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Interactive experiences at community bike safety events
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4E79A7] mr-2">•</span>
                    <span>
                      Partnerships with local cycling organizations and schools
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Educational Outreach
                </h3>
                <p className="text-gray-300">
                  We partner with schools and community centers to bring Pedal
                  Pals into educational settings, making bike safety part of the
                  curriculum in a fun and engaging way.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Community Events
                </h3>
                <p className="text-gray-300">
                  The characters make regular appearances at bike safety events,
                  cycling festivals, and community gatherings, creating
                  memorable experiences that reinforce safety messages.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                  Positive Response
                </h3>
                <p className="text-gray-300">
                  The great response from children and families validates our
                  approach, showing that character-driven education makes a real
                  difference in promoting bike safety.
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
                The Work Behind Pedal Pals
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Creating Pedal Pals required a comprehensive approach combining
                character design, storytelling, technology, and community
                engagement. Here&apos;s what went into making this project a
                success.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Character Development
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Each character was carefully crafted to be both appealing to
                  children and representative of important safety concepts. The
                  design process involved multiple iterations, child testing,
                  and refinement to ensure the characters resonated with our
                  target audience.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  From initial concept sketches to final animated characters,
                  the development process ensured that each Pedal Pal would be
                  memorable, relatable, and effective at teaching safety
                  lessons.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Content Creation
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Producing educational content that balances entertainment with
                  learning required careful scripting, animation, and
                  production. Each video and piece of content was designed to
                  capture children&apos;s attention while delivering important
                  safety messages.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The content creation process leveraged AI tools for efficiency
                  while maintaining the authentic, community-driven spirit that
                  makes Pedal Pals special.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Community Partnerships
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Building relationships with schools, community centers, and
                  cycling organizations was essential to reaching our target
                  audience. These partnerships enabled us to bring Pedal Pals
                  directly to children across Northwest Arkansas.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Working with local organizations helped ensure that the
                  messaging and content were appropriate and effective for the
                  communities we serve.
                </p>
              </div>
              <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                <h3 className="text-2xl font-semibold text-[#CFC8CF] mb-4">
                  Measuring Impact
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The positive response from children and families demonstrates
                  the project&apos;s success. Children remember the characters,
                  repeat safety tips, and are more engaged with bike safety
                  education.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This engagement translates into real-world behavior change,
                  making Northwest Arkansas safer for cyclists and promoting a
                  positive cycling culture for generations to come.
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
