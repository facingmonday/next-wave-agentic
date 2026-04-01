"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import Image from "next/image";
import Link from "next/link";

const IMG = "/images/nexie";

const capabilities = [
  { title: "Content Generation", desc: "Ads, posts, images, and copy — produced on demand" },
  { title: "Workflow Automation", desc: "Multi-step processes that run without prompting" },
  { title: "Event Intelligence", desc: "Real-time tracking, access control, and analytics" },
  { title: "CRM Syncing", desc: "Enriched, connected customer data across systems" },
  { title: "Messaging & Notifications", desc: "Triggered SMS, email, and push at the right moment" },
  { title: "Analytics & Insights", desc: "Pattern detection and weekly reports, auto-generated" },
  { title: "Personalization Engine", desc: "Adaptive experiences tailored to each user" },
  { title: "API Orchestration", desc: "Connect, trigger, and chain services automatically" },
];

const useCases = [
  {
    title: "Content Engine",
    headline: "Create unlimited content without a creative bottleneck",
    points: ["Generates ads, posts, and images", "Adapts per platform", "Schedules and iterates on performance"],
    outcome: "Always-on marketing engine",
    image: `${IMG}/Futuristic_content_generation_202603271806.jpeg`,
  },
  {
    title: "Event Intelligence",
    headline: "Run smarter events in real time",
    points: ["Track attendance and check-ins", "Trigger VIP access and notifications", "Analyze crowd behavior live"],
    outcome: "Data-driven live experiences",
    image: `${IMG}/Night_event_crowds_202603271806.jpeg`,
  },
  {
    title: "Smart CMS",
    headline: "Your content platform that runs itself",
    points: ["Auto-generate articles and listings", "Categorize and tag intelligently", "Summarize data into digestible formats"],
    outcome: "Scalable media machine",
    image: `${IMG}/Floating_article_cards_202603271806.jpeg`,
  },
  {
    title: "Agency Automation",
    headline: "Your AI strategist and operator",
    points: ["Generate proposals from client inputs", "Summarize meetings into action items", "Draft follow-ups and project plans"],
    outcome: "Faster delivery, less overhead",
    image: `${IMG}/Presentation_slides_assembling_202603271806.jpeg`,
  },
  {
    title: "Customer Experience",
    headline: "Websites that guide and convert",
    points: ["Personalized user flows", "Contextual intelligent responses", "Real-time behavioral adaptation"],
    outcome: "Higher engagement and conversions",
    image: `${IMG}/Website_interface_with_202603271806.jpeg`,
  },
  {
    title: "Backend Intelligence",
    headline: "Systems that run themselves",
    points: ["API orchestration across services", "Event-triggered multi-step workflows", "Autonomous monitoring and adjustment"],
    outcome: "Proactive, self-operating backend",
    image: `${IMG}/Glowing_orb_activating_202603271806.jpeg`,
  },
];

const quickHits = [
  { title: "Auto Newsletters", benefit: "Always stay in touch" },
  { title: "Behavioral Messaging", benefit: "Right message, right time" },
  { title: "Trend Reports", benefit: "Weekly insights on autopilot" },
  { title: "Pitch Deck Generation", benefit: "From data to presentation" },
  { title: "Social Campaigns", benefit: "Multi-platform, auto-scheduled" },
  { title: "Performance Optimization", benefit: "AI-driven recommendations" },
  { title: "Smart Pricing", benefit: "Demand-based adjustments" },
  { title: "Media Library Tagging", benefit: "Organized automatically" },
  { title: "Custom Onboarding", benefit: "Tailored to every user" },
  { title: "Loyalty Automation", benefit: "Rewards without manual work" },
  { title: "Dynamic Landing Pages", benefit: "Generated from templates" },
  { title: "CRM Enrichment", benefit: "Clean, synced data everywhere" },
];

const integrations = [
  { name: "Kikits", desc: "Event intelligence and real-time operations", href: "/projects/kikits" },
  { name: "CityView CMS", desc: "Content automation and publishing", href: "/projects/cityviewcms" },
  { name: "lytnt", desc: "AI-powered creative generation at scale", href: "/projects/lytnt" },
  { name: "Client Websites", desc: "Intelligent, adaptive user experiences", href: "/projects" },
];

export default function NexiePage() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />

      {/* ===== 1. HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/Glowing_orb_with_202603271806.jpeg`}
            alt="Nexie — the intelligence layer"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ContentReveal direction="up" duration={1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4E79A7] mb-6">
              Powered by OpenClaw &middot; Built for the Next Wave
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#CFC8CF] mb-6 leading-[1.1]">
              Nexie is the intelligence layer behind everything you build.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
              It doesn&apos;t just respond. It observes, decides, and takes action
              across your apps, workflows, and content.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#use-cases"
                className="px-8 py-4 rounded-lg bg-[#4E79A7] text-white font-semibold hover:bg-[#4E79A7]/90 transition-colors"
              >
                See Nexie in Action
              </Link>
              <Link
                href="#capabilities"
                className="px-8 py-4 rounded-lg border border-[#3f395b] text-[#CFC8CF] font-semibold hover:border-[#4E79A7] hover:text-[#4E79A7] transition-colors"
              >
                Explore Use Cases
              </Link>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 2. CORE IDEA ===== */}
      <section className="relative py-24 md:py-32">
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
          <ContentReveal direction="up" duration={1} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 leading-tight">
                  Software that thinks,<br />not just works.
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Most software waits for you to click, type, or trigger something.
                  Nexie doesn&apos;t wait. It connects your systems, interprets your data,
                  and executes decisions — continuously.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  It&apos;s not a feature you bolt on. It&apos;s the layer that makes
                  everything else smarter.
                </p>
              </div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#3f395b]/30">
                <Image
                  src={`${IMG}/Futuristic_network_connecting_202603271806.jpeg`}
                  alt="Nexie connecting systems"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 3. THE PROBLEM ===== */}
      <section className="relative py-24 md:py-32 border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1} startOffset="top 80%">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4">
                Too many tools. Not enough intelligence.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-[#201e30]/60 rounded-2xl p-8 border border-[#3f395b]/30">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#4E79A7] mb-6">
                  Your tools
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {["CMS platforms", "CRMs", "Marketing software", "Event systems", "Analytics dashboards"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4E79A7]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#201e30]/60 rounded-2xl p-8 border border-[#fc05b9]/20">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#fc05b9] mb-6">
                  The pain
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {["Disconnected workflows", "Manual processes everywhere", "Slow execution", "Missed insights and opportunities"].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fc05b9]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <blockquote className="text-center text-2xl md:text-3xl font-bold text-[#CFC8CF] max-w-3xl mx-auto leading-snug">
              &ldquo;Your tools don&apos;t talk.{" "}
              <span className="text-[#fc05b9]">Nexie does.</span>&rdquo;
            </blockquote>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 4. BEFORE vs AFTER ===== */}
      <section className="relative py-24 md:py-32">
        <FuturisticBackground
          pattern="flowing"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#4E79A7"
          secondaryColor="#fc05b9"
          tertiaryColor="#84596c"
          lineCount={6}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4">
                From tools you use &rarr; to systems that run themselves
              </h2>
            </div>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-[#3f395b]/30">
              <Image
                src={`${IMG}/Systems_connecting_to_202603271806.jpeg`}
                alt="Before and after Nexie — disconnected vs connected"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 5. HOW NEXIE WORKS — Observe. Decide. Act. ===== */}
      <section className="relative py-24 md:py-32 border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1} startOffset="top 80%">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4">
                Observe. Decide. Act.
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Three steps, running continuously.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Observe",
                  desc: "Connects to your systems. Watches user behavior. Tracks events and data in real time.",
                  image: `${IMG}/AI_orb_scanning_202603271806.jpeg`,
                },
                {
                  step: "02",
                  title: "Decide",
                  desc: "Analyzes patterns. Determines the next best actions. Learns and adapts over time.",
                  image: `${IMG}/Glowing_orb_analyzing_202603271806.jpeg`,
                },
                {
                  step: "03",
                  title: "Act",
                  desc: "Generates content. Triggers workflows. Sends messages. Updates systems — automatically.",
                  image: `${IMG}/Glowing_orb_activating_202603271806.jpeg`,
                },
              ].map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl overflow-hidden border border-[#3f395b]/30 bg-[#201e30]/40"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#201e30] via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 text-xs font-bold tracking-widest text-[#fc05b9]">
                      {s.step}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#CFC8CF] mb-2">{s.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-lg text-gray-400 mt-12 italic">
              &ldquo;Nexie doesn&apos;t wait for commands. It runs your playbook.&rdquo;
            </p>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 6. CAPABILITIES GRID ===== */}
      <section id="capabilities" className="relative py-24 md:py-32">
        <FuturisticBackground
          pattern="flowing"
          intensity="moderate"
          showOrbs={false}
          primaryColor="#fc05b9"
          secondaryColor="#4E79A7"
          tertiaryColor="#84596c"
          lineCount={10}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4">
                Core Capabilities
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl bg-[#201e30]/60 border border-[#3f395b]/30 p-6 hover:border-[#4E79A7]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#4E79A7]/20 flex items-center justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#4E79A7]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#CFC8CF] mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-400">{c.desc}</p>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 7. USE CASES ===== */}
      <section id="use-cases" className="relative py-24 md:py-32 border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1} startOffset="top 85%">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4">
                Nexie in Action
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Six ways Nexie transforms how businesses operate.
              </p>
            </div>
          </ContentReveal>

          <div className="space-y-24">
            {useCases.map((uc, i) => (
              <ContentReveal key={uc.title} direction="up" duration={1} startOffset="top 80%">
                <div
                  className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                    i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#3f395b]/30">
                    <Image
                      src={uc.image}
                      alt={uc.headline}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#fc05b9] mb-2 block">
                      {uc.title}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#CFC8CF] mb-4 leading-snug">
                      {uc.headline}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {uc.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4E79A7] mt-2 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div className="inline-block bg-[#4E79A7]/10 border border-[#4E79A7]/30 rounded-lg px-4 py-2">
                      <p className="text-sm text-[#4E79A7] font-medium">{uc.outcome}</p>
                    </div>
                  </div>
                </div>
              </ContentReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Run it through Nexie ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl md:text-4xl font-bold text-[#3f395b] italic">
            Run it through Nexie.
          </p>
        </div>
      </section>

      {/* ===== 8. EXTENDED CAPABILITIES (12 quick hits) ===== */}
      <section className="relative py-24 md:py-32 border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4">
                12 More Ways Nexie Delivers
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickHits.map((q, i) => (
                <div
                  key={q.title}
                  className="flex items-center gap-4 rounded-xl bg-[#201e30]/40 border border-[#3f395b]/20 px-5 py-4"
                >
                  <span className="text-xs font-bold text-[#fc05b9] w-6 text-right flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#CFC8CF]">{q.title}</p>
                    <p className="text-xs text-gray-400">{q.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 9. ARCHITECTURE ===== */}
      <section className="relative py-24 md:py-32">
        <FuturisticBackground
          pattern="flowing"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#4E79A7"
          secondaryColor="#fc05b9"
          tertiaryColor="#84596c"
          lineCount={6}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 leading-tight">
                  Nexie sits across everything
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Nexie isn&apos;t replacing your systems — it&apos;s enhancing them.
                  It sits between your apps and your outputs, orchestrating
                  everything into a cohesive, intelligent operation.
                </p>
                <div className="space-y-3">
                  {[
                    { label: "Apps & Frontend", color: "#CFC8CF" },
                    { label: "APIs & Data", color: "#4E79A7" },
                    { label: "Nexie Intelligence Layer", color: "#fc05b9" },
                    { label: "Actions & Outputs", color: "#4E79A7" },
                  ].map((layer, i) => (
                    <div key={layer.label} className="flex items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: layer.color }}
                        />
                        {i < 3 && (
                          <div className="w-px h-6 bg-[#3f395b]" />
                        )}
                      </div>
                      <p
                        className="text-base font-medium"
                        style={{ color: layer.color }}
                      >
                        {layer.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#3f395b]/30">
                <Image
                  src={`${IMG}/Data_nodes_and_202603271806.jpeg`}
                  alt="Nexie architecture — data nodes converging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 10. INTEGRATIONS ===== */}
      <section className="relative py-24 md:py-32 border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4">
                Already powering real platforms
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-2xl bg-[#201e30]/40 border border-[#3f395b]/30 p-6 hover:border-[#fc05b9]/40 transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#CFC8CF] mb-2 group-hover:text-[#fc05b9] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </Link>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 11. WHY NEXIE IS DIFFERENT ===== */}
      <section className="relative py-24 md:py-32">
        <FuturisticBackground
          pattern="flowing"
          intensity="moderate"
          showOrbs={false}
          primaryColor="#fc05b9"
          secondaryColor="#4E79A7"
          tertiaryColor="#84596c"
          lineCount={8}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4">
                Why Nexie is different
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[#3f395b]/30 rounded-2xl overflow-hidden">
              {[
                { trad: "Reactive", nexie: "Proactive" },
                { trad: "Single task", nexie: "Multi-system" },
                { trad: "User-driven", nexie: "System-driven" },
                { trad: "Static", nexie: "Adaptive" },
              ].map((row) => (
                <>
                  <div
                    key={`trad-${row.trad}`}
                    className="bg-[#201e30]/80 px-6 py-5 flex items-center"
                  >
                    <p className="text-gray-500 line-through decoration-gray-600">
                      {row.trad}
                    </p>
                  </div>
                  <div
                    key={`nexie-${row.nexie}`}
                    className="bg-[#201e30]/80 px-6 py-5 flex items-center"
                  >
                    <p className="text-[#CFC8CF] font-semibold">{row.nexie}</p>
                  </div>
                </>
              ))}
            </div>
            <blockquote className="text-center text-xl md:text-2xl font-bold text-[#CFC8CF] mt-12 max-w-2xl mx-auto">
              &ldquo;This isn&apos;t AI you use. It&apos;s AI that{" "}
              <span className="text-[#fc05b9]">runs alongside you.</span>&rdquo;
            </blockquote>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 12. FUTURE VISION ===== */}
      <section className="relative py-24 md:py-32 border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ContentReveal direction="up" duration={1} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#3f395b]/30">
                <Image
                  src={`${IMG}/Futuristic_workspace_with_202603271806.jpeg`}
                  alt="The future of intelligent software"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 leading-tight">
                  Built for the next wave of software
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  We&apos;re entering a new era. Systems that act. Platforms that evolve.
                  Experiences that adapt. Nexie is the foundation.
                </p>
                <ul className="space-y-3">
                  {["Smarter platforms", "Faster execution", "More personalized experiences", "Entirely new categories of products"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#fc05b9]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* ===== 13. FINAL CTA ===== */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/Glowing_orb_guiding_202603271806.jpeg`}
            alt="Build with Nexie"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <ContentReveal direction="up" duration={1}>
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6 leading-tight">
              Ready to build with Nexie?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl mx-auto">
              Whether you&apos;re launching a product, running events, or scaling
              content — Nexie is the intelligence layer that makes it all work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog/introducing-nexie"
                className="px-8 py-4 rounded-lg bg-[#4E79A7] text-white font-semibold hover:bg-[#4E79A7]/90 transition-colors"
              >
                Read the Full Story
              </Link>
              <Link
                href="#use-cases"
                className="px-8 py-4 rounded-lg border border-[#3f395b] text-[#CFC8CF] font-semibold hover:border-[#4E79A7] hover:text-[#4E79A7] transition-colors"
              >
                See Use Cases
              </Link>
            </div>
          </ContentReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
