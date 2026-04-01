import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { HeroVideo } from "@/components/HeroVideo";
import { ServiceFeatureSection } from "@/components/ServiceFeatureSection";
import { LogoList } from "@/components/LogoList";
import { VideoGallery } from "@/components/VideoGallery";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { ViewMoreLink } from "@/components/ViewMoreLink";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";

const homeLogos = [
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
    alt: "Arkansas Moves",
  },
  {
    src: "/images/logos/ledger.jpg",
    alt: "Ledger Bentonville",
  },
  {
    src: "/images/logos/ropeswing.jpg",
    alt: "Ropeswing",
  },
];

const featuredProjects = ["kikits", "chasinpayson", "goodtimes-bentonville"]
  .map((id) => projects.find((project) => project.id === id))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

const proofCards = [
  {
    title: "Positioning with a point of view",
    description:
      "We help brands sharpen the message before they spend time and budget making assets that do not connect.",
  },
  {
    title: "Creative built for launch",
    description:
      "From campaign films to product pages, we shape the visuals and story around the moments that matter most.",
  },
  {
    title: "Digital systems that keep working",
    description:
      "Sites, apps, and automations are designed to support growth after the launch push is over.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Clarify the story",
    description:
      "We align the offer, audience, and message so the work has a strong strategic spine.",
  },
  {
    step: "02",
    title: "Build the launch system",
    description:
      "We design the campaign, website, content, or product experience around the specific conversion moment.",
  },
  {
    step: "03",
    title: "Create momentum",
    description:
      "We extend the launch with content, automations, and measurement so the work compounds instead of fading.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <HeroVideo
        eyebrow="Creative technology agency"
        title={
          <>
            We make brands
            <br />
            feel sharper, bolder,
            <br />
            and easier to trust.
          </>
        }
        subtitle="Next Wave Agentic brings strategy, storytelling, websites, campaigns, and intelligent systems together so ambitious teams can launch with clarity and grow with momentum."
        primaryCta={{ label: "Start a project", href: "/?contact=1" }}
        secondaryCta={{ label: "See selected work", href: "/#featured-work" }}
        stats={[
          { value: "30+", label: "Projects launched across web, campaigns, and experiences" },
          { value: "End-to-end", label: "Strategy, creative, software, and launch support" },
          { value: "NWA", label: "Based in Bentonville and built for teams beyond it" },
        ]}
      />

      <LogoList
        title="Trusted by teams that need more than a pretty launch"
        subtitle="We support brands, schools, destinations, and operators with strategy, websites, campaigns, and experiences designed to create momentum."
        logos={homeLogos}
      />

      <section className="relative bg-black py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {proofCards.map((card) => (
              <article
                key={card.title}
                className="agency-panel rounded-[2rem] p-7 md:p-8"
              >
                <p className="agency-kicker mb-5">What clients need</p>
                <h2 className="font-heading text-3xl font-semibold text-[#CFC8CF]">
                  {card.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-300">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="agency-shell py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <div>
            <p className="agency-kicker mb-5">Capabilities</p>
            <h2 className="font-heading max-w-3xl text-4xl font-semibold text-[#CFC8CF] md:text-6xl">
              One partner for brand story, digital execution, and launch momentum.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              The site already showed the range. This version makes the range
              easier to understand: we clarify the message, make the work look
              stronger, and build the systems that carry it forward.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="agency-panel rounded-[1.75rem] p-6">
              <p className="agency-kicker mb-4">Strategy</p>
              <p className="text-sm leading-relaxed text-gray-300">
                Positioning, narrative, launch planning, and the decision-making
                needed to keep creative and technical work aligned.
              </p>
            </div>
            <div className="agency-panel rounded-[1.75rem] p-6">
              <p className="agency-kicker mb-4">Creative</p>
              <p className="text-sm leading-relaxed text-gray-300">
                Campaign storytelling, video, visuals, and experiences built to
                make the brand feel memorable rather than generic.
              </p>
            </div>
            <div className="agency-panel rounded-[1.75rem] p-6">
              <p className="agency-kicker mb-4">Systems</p>
              <p className="text-sm leading-relaxed text-gray-300">
                Websites, products, automations, and AI-enabled workflows that
                turn a strong launch into something scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeatureSection
        title="Strategy"
        subtitle="Positioning • Narrative • Roadmaps"
        description="We shape the positioning, story, and rollout plan before production starts, so the website, campaign, and product experience all point in the same direction."
        ctaLabel="Explore Strategy"
        ctaHref="/strategy"
        imageSrc="/images/services/software/teacher3.jpg"
        imageAlt="Team workshop focused on strategy and planning"
        imageSide="left"
        highlights={["Positioning", "Messaging", "Launch planning"]}
      />
      <ServiceFeatureSection
        title="Software"
        subtitle="Web Apps • Sites • Integrations"
        description="We build modern websites, products, and internal systems that make the brand look credible, feel fast, and support the workflows behind growth."
        ctaLabel="Explore Software"
        ctaHref="/software"
        imageSrc="/images/services/software/teacher.jpg"
        imageAlt="Digital product interface and software design"
        imageSide="right"
        highlights={["Websites", "Platforms", "Automations"]}
      />
      <ServiceFeatureSection
        title="Stories"
        subtitle="AI Video • Animation • Narrative"
        description="We create launch films, explainers, branded narratives, and AI-assisted content that give the brand a distinct voice instead of another polished blur."
        ctaLabel="Explore Stories"
        ctaHref="/storytelling"
        imageSrc="/images/services/experiences/bikers.jpg"
        imageAlt="Storytelling and branded campaign imagery"
        imageSide="left"
        highlights={["Campaign films", "Explainers", "Narrative systems"]}
      />
      <ServiceFeatureSection
        title="Engagement"
        subtitle="Content • Partnerships • Distribution"
        description="We design the content, distribution, and partnership motion around the work so launches keep earning attention after the first announcement."
        ctaLabel="Explore Engagement"
        ctaHref="/engagement"
        imageSrc="/images/services/experiences/couple.jpg"
        imageAlt="Audience engagement and community-focused campaign"
        imageSide="right"
        highlights={["Content systems", "Partnerships", "Audience growth"]}
      />
      <ServiceFeatureSection
        title="Experiences"
        subtitle="Events • Activations • Interactive Systems"
        description="We create activations, event systems, and interactive moments that translate the brand into something people can feel, share, and return to."
        ctaLabel="Explore Experiences"
        ctaHref="/experiences"
        imageSrc="/images/services/experiences/biker_pov.jpg"
        imageAlt="Immersive event and interactive experience"
        imageSide="left"
        highlights={["Events", "Activations", "Interactive systems"]}
      />

      <section
        id="featured-work"
        className="agency-shell py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="agency-kicker mb-4">Featured work</p>
              <h2 className="font-heading text-4xl font-semibold text-[#CFC8CF] md:text-6xl">
                The work gets stronger when strategy, story, and systems move together.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-[#CFC8CF] transition hover:bg-white/10"
            >
              More
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group agency-panel overflow-hidden rounded-[2rem]"
              >
                <article className="h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="p-7">
                    <p className="agency-kicker mb-4">{project.client ?? "Featured client work"}</p>
                    <h3 className="font-heading text-3xl font-semibold text-[#CFC8CF]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-gray-300">
                      {project.impact ?? project.description}
                    </p>
                    {project.services && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[#CFC8CF]/70"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <PortfolioCarousel items={projects} autoScrollSpeed={1200} />
          </div>
        </div>
      </section>

      <section className="relative border-t border-[#3F395B]/50 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f1729]/45 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="agency-panel relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/healthcare/healthcare1.jpg"
                alt="Healthcare technology and AI collaboration in action"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="agency-kicker mb-4">Vertical expertise</p>
              <h2 className="font-heading text-4xl font-semibold text-[#CFC8CF] md:text-6xl">
                Healthcare teams need more than an AI pilot.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 md:max-w-none">
                For Northwest Arkansas health systems, we frame AI adoption as a
                brand, operations, and trust problem, not just a technology one.
                That means governance, implementation, and communication move together.
              </p>
              <div className="mb-12 mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <span className="rounded-full border border-[#4E79A7]/35 bg-[#1e3a5f]/40 px-4 py-2 text-sm font-medium text-[#CFC8CF]">
                  Governance-first
                </span>
                <span className="rounded-full border border-[#4E79A7]/35 bg-[#1e3a5f]/40 px-4 py-2 text-sm font-medium text-[#CFC8CF]">
                  Scalable infrastructure
                </span>
                <span className="rounded-full border border-[#4E79A7]/35 bg-[#1e3a5f]/40 px-4 py-2 text-sm font-medium text-[#CFC8CF]">
                  Executive-ready rollout
                </span>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/healthcare-ai"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4E79A7] px-8 py-4 font-semibold text-[#CFC8CF] transition-colors hover:bg-[#4E79A7]/90"
                >
                  See the healthcare offer
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

      <section className="agency-shell py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="agency-kicker mb-4">How we work</p>
            <h2 className="font-heading text-4xl font-semibold text-[#CFC8CF] md:text-6xl">
              A simple process for making the work sharper and easier to ship.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="agency-panel rounded-[2rem] p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#fc05b9]/85">
                  {step.step}
                </p>
                <h3 className="mt-6 font-heading text-3xl font-semibold text-[#CFC8CF]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-300">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-[#3F395B]/50 py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/nexie/Glowing_orb_with_202603271806.jpeg"
            alt="Nexie intelligence layer"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="text-center md:text-left">
              <p className="agency-kicker mb-4">Our differentiator</p>
              <h2 className="font-heading text-4xl font-semibold text-[#CFC8CF] md:text-6xl">
                Meet Nexie, the intelligence layer behind the work.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                Most agencies stop at launch. Nexie helps us connect content,
                workflows, products, and event systems so your brand can keep
                learning and operating after the first campaign is live.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                Powered by OpenClaw, it turns disconnected tools into a more
                responsive operating layer for content generation, automation,
                and decision support.
              </p>
              <div className="mb-10 mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <span className="rounded-full border border-[#fc05b9]/30 bg-[#fc05b9]/10 px-4 py-2 text-sm font-medium text-[#CFC8CF]">
                  Content generation
                </span>
                <span className="rounded-full border border-[#fc05b9]/30 bg-[#fc05b9]/10 px-4 py-2 text-sm font-medium text-[#CFC8CF]">
                  Workflow automation
                </span>
                <span className="rounded-full border border-[#fc05b9]/30 bg-[#fc05b9]/10 px-4 py-2 text-sm font-medium text-[#CFC8CF]">
                  Event intelligence
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Link
                  href="/nexie"
                  className="inline-flex items-center gap-2 rounded-full bg-[#4E79A7] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#4E79A7]/90"
                >
                  Explore Nexie
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
                <Link
                  href="/blog/introducing-nexie"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-[#CFC8CF] transition hover:bg-white/10"
                >
                  Read the story
                </Link>
              </div>
            </div>
            <div className="relative mx-auto aspect-[3/2] w-full max-w-md md:max-w-none">
              <div className="absolute inset-0 rounded-full bg-[#fc05b9]/5 blur-3xl" />
              <Image
                src="/images/nexie/nexie.jpg"
                alt="Nexie intelligence layer powering connected marketing systems"
                fill
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-16 md:py-24">
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
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="agency-kicker mb-4">Motion and storytelling</p>
              <h2 className="font-heading text-4xl font-semibold text-[#CFC8CF] md:text-6xl">
                Campaign films, explainers, and launch stories.
              </h2>
              <p className="max-w-3xl text-base md:text-lg text-gray-400">
                A small selection of videos from our work across products,
                campaigns, and branded storytelling.
              </p>
            </div>
            <ViewMoreLink href="/gallery" label="View full gallery" />
          </div>

          <VideoGallery
            videos={[
              {
                id: "kikits-launch",
                videoUrl: "https://vimeo.com/1105184966?fl=ip&fe=ec",
                thumbnailUrl: "/images/projects/kikits/kikits-video.png",
                title: "Kikits Launch Announcement",
                subtitle:
                  "A high-level launch film introducing Kikits with product clarity and campaign energy.",
              },
              {
                id: "pedal-pals-main",
                videoUrl: "https://vimeo.com/1126858733?fl=ip&fe=ec",
                thumbnailUrl: "/images/projects/pedal-pals/crystal.jpg",
                title: "Pedal Pals Main Campaign",
                subtitle:
                  "Character-driven storytelling built to create memorable community engagement.",
              },
              {
                id: "maya-spark",
                videoUrl: "https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci",
                thumbnailUrl: "/images/projects/kikits/MayaAndSpark.jpg",
                title: "Maya & Spark",
                subtitle:
                  "An uplifting short blending narrative craft with AI-assisted production.",
              },
              {
                id: "kikits-qr-codes",
                videoUrl: "https://vimeo.com/1110591196?fl=ip&fe=ec",
                thumbnailUrl: "/images/projects/kikits/explain.jpeg",
                title: "Creating QR Codes",
                subtitle:
                  "An educational walkthrough that turns a product feature into clear, useful content.",
              },
            ]}
          />
        </div>
      </section>

      <section className="relative bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="agency-kicker mb-4">Thinking</p>
              <h2 className="font-heading text-4xl font-semibold text-[#CFC8CF] md:text-6xl">
                Insights on AI, launch strategy, and creative technology.
              </h2>
              <p className="max-w-3xl text-base md:text-lg text-gray-400">
                The blog supports the work with perspective on brand building,
                software, and what is changing in creative production.
              </p>
            </div>
            <ViewMoreLink href="/blog" label="View all" className="text-xs" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {getAllPosts()
              .slice(0, 3)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="agency-panel h-full overflow-hidden rounded-[2rem] transition-all duration-300 hover:border-[#fc05b9]/40 hover:bg-[#201e30]/60">
                    <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#4e79a7]/15 via-[#fc05b9]/10 to-[#201e30]">
                      {post.coverImage && (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="relative z-10 object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#fc05b9]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#fc05b9]/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold leading-snug text-[#CFC8CF] transition-colors group-hover:text-[#4E79A7]">
                        {post.title}
                      </h3>
                      <p className="mb-4 mt-3 line-clamp-3 text-sm leading-relaxed text-[#CFC8CF]/60">
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
                        <span className="text-xs font-medium text-[#fc05b9] transition-colors group-hover:text-[#4E79A7]">
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

      <section className="agency-shell py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <p className="agency-kicker justify-center mb-5">Ready when you are</p>
          <h2 className="font-heading text-5xl font-semibold text-[#CFC8CF] md:text-7xl">
            If the brand needs to feel sharper, the next launch should too.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Bring us in when the story is muddy, the website undersells the work,
            or the campaign needs a stronger system behind it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/?contact=1"
              className="inline-flex items-center rounded-full bg-[#4E79A7] px-8 py-4 font-semibold text-white transition hover:bg-[#4E79A7]/90"
            >
              Start a project
            </Link>
            <Link
              href="/#featured-work"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-[#CFC8CF] transition hover:bg-white/10"
            >
              Review selected work
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
