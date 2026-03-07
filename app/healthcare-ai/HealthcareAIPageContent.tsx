"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { ContactFormModal } from "@/components/ContactFormModal";

export function HealthcareAIPageContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <ContactFormModal isOpen={isContactOpen} onClose={closeContact} />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-24">
        <FuturisticBackground
          pattern="flowing"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#1e3a5f"
          secondaryColor="#4E79A7"
          tertiaryColor="#2d5a87"
          lineCount={6}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-12">
            <ContentReveal direction="left" duration={1} startOffset="top 85%">
              <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-xl border border-[#3F395B]/50">
                <Image
                  src="/images/healthcare/healthcare1.jpg"
                  alt="Healthcare technology and AI collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </ContentReveal>
            <div className="text-center md:text-left">
              <ContentReveal direction="right" duration={1} startOffset="top 85%">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4E79A7] mb-4">
                  AI Pilot to Enterprise Acceleration for Healthcare
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#CFC8CF] mb-6 leading-tight">
                  From AI Pilot to Enterprise Impact in 90 Days
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl md:max-w-none leading-relaxed mb-8">
                  Northwest Arkansas health systems are piloting AI across clinical
                  and administrative workflows. NWA Apps helps you harden, govern,
                  scale, and operationalize those pilots into enterprise-ready
                  solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button
                    onClick={openContact}
                    className="px-8 py-4 rounded-lg bg-[#4E79A7] text-[#CFC8CF] font-semibold hover:bg-[#4E79A7]/90 transition-colors"
                  >
                    Schedule an AI Enterprise Readiness Review
                  </button>
                  <Link
                    href="#framework"
                    className="px-8 py-4 rounded-lg border border-[#4E79A7]/60 text-[#CFC8CF] font-semibold hover:bg-[#4E79A7]/20 transition-colors"
                  >
                    Download the Pilot-to-Enterprise Framework
                  </Link>
                </div>
              </ContentReveal>
            </div>
          </div>

          {/* Supporting Points */}
          <ContentReveal direction="up" duration={1} delay={0.2} startOffset="top 85%">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-[#1a1a2e]/60 border border-[#3F395B]/50">
                <span className="text-2xl mb-3 block">🔒</span>
                <h3 className="font-semibold text-[#CFC8CF] mb-2">
                  Governance-First Architecture
                </h3>
                <p className="text-sm text-gray-400">
                  Security, audit trails, and policy enforcement built in from
                  day one.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[#1a1a2e]/60 border border-[#3F395B]/50">
                <span className="text-2xl mb-3 block">⚙</span>
                <h3 className="font-semibold text-[#CFC8CF] mb-2">
                  Rapid Enterprise Infrastructure
                </h3>
                <p className="text-sm text-gray-400">
                  API gateways, RBAC, dashboards, and EHR integrations—fast.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-[#1a1a2e]/60 border border-[#3F395B]/50">
                <span className="text-2xl mb-3 block">📊</span>
                <h3 className="font-semibold text-[#CFC8CF] mb-2">
                  Measurable ROI & Workforce Capacity
                </h3>
                <p className="text-sm text-gray-400">
                  Time saved, adoption rates, denial reduction—board-ready
                  metrics.
                </p>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* 2. THE PROBLEM SECTION */}
      <section className="relative py-20 md:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#3F395B]/50 order-2 md:order-1">
                <Image
                  src="/images/healthcare/healthcare2.jpg"
                  alt="AI pilot challenges in healthcare"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  The AI Pilot Plateau
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Many health systems are running AI pilots: ambient documentation,
                  scheduling automation, denial management, diagnostic augmentation.
                  But pilots rarely become scalable enterprise systems without
                  intentional architecture, governance, and operational
                  infrastructure.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Pilots lack enterprise security controls",
                    "No centralized oversight or audit trails",
                    "Workflow integration gaps",
                    "No ROI dashboarding",
                    "Staff adoption inconsistent",
                    "Governance documentation incomplete",
                    "Scaling beyond one department becomes risky",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="text-[#4E79A7] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Progression graphic */}
            <div className="bg-[#1a1a2e]/80 rounded-xl border border-[#3F395B]/50 p-8 overflow-x-auto">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 min-w-[600px]">
                <span className="px-4 py-2 rounded-lg bg-[#3F395B]/50 text-[#CFC8CF] text-sm font-medium">
                  AI Idea
                </span>
                <span className="text-gray-500">→</span>
                <span className="px-4 py-2 rounded-lg bg-[#3F395B]/50 text-[#CFC8CF] text-sm font-medium">
                  Small Pilot
                </span>
                <span className="text-gray-500">→</span>
                <span className="px-4 py-2 rounded-lg bg-[#3F395B]/50 text-[#CFC8CF] text-sm font-medium">
                  Department Adoption
                </span>
                <span className="px-4 py-2 rounded-lg bg-amber-900/40 border border-amber-700/50 text-amber-200 text-sm font-medium">
                  ???
                </span>
                <span className="text-gray-500">→</span>
                <span className="px-4 py-2 rounded-lg bg-[#4E79A7]/30 border border-[#4E79A7]/50 text-[#CFC8CF] text-sm font-medium">
                  Enterprise Standard
                </span>
              </div>
              <p className="text-center text-sm text-[#4E79A7] mt-6 font-medium">
                Governance • Infrastructure • Integration • Change Management •
                Metrics
              </p>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* 3. POSITIONING SECTION */}
      <section className="relative py-20 md:py-32">
        <FuturisticBackground
          pattern="flowing"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#1e3a5f"
          secondaryColor="#4E79A7"
          tertiaryColor="#2d5a87"
          lineCount={6}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-8 text-center">
              We Are the Bridge Between Experimentation and Institutional
              Adoption
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-16">
              NWA Apps specializes in rapid MVP development and proof-of-concept
              engineering. We extend that capability into enterprise
              acceleration by wrapping AI pilots with the infrastructure
              required for safe, scalable deployment.
            </p>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-[#3F395B]/50 mb-3">
                    <Image
                      src="/images/healthcare/img-001.png"
                      alt="AI vendor tools and applications"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-400">AI Vendor Tool</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <span className="text-3xl text-[#4E79A7]">→</span>
                  <p className="text-sm text-gray-400 text-center">Enterprise wrapper</p>
                </div>
              </div>
              <div className="p-8 rounded-xl bg-[#1a1a2e]/80 border border-[#4E79A7]/30">
                <h3 className="text-xl font-semibold text-[#CFC8CF] mb-6 text-center">
                  NWA Apps Enterprise Wrapper
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Secure orchestration layer",
                    "Role-based dashboards",
                    "Audit logging",
                    "Policy enforcement",
                    "ROI tracking",
                    "Integration connectors",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <span className="text-[#4E79A7]">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* 4. PILOT-TO-ENTERPRISE FRAMEWORK */}
      <section
        id="framework"
        className="relative py-20 md:py-32 bg-black"
      >
        <div className="max-w-6xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-4 text-center">
              The 90-Day Pilot-to-Enterprise Framework
            </h2>
            <p className="text-center text-gray-400 mb-16">
              Four connected phases from assessment to scale
            </p>

            {/* Phase diagram */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                { num: 1, title: "Assess & Harden", weeks: "Weeks 1–3", color: "#4E79A7" },
                { num: 2, title: "Architect & Wrap", weeks: "Weeks 4–7", color: "#4E79A7" },
                { num: 3, title: "Govern & Control", weeks: "Weeks 8–10", color: "#4E79A7" },
                { num: 4, title: "Scale & Measure", weeks: "Weeks 11–13", color: "#4E79A7" },
              ].map((phase) => (
                <div
                  key={phase.num}
                  className="p-6 rounded-xl border border-[#3F395B]/50 bg-[#1a1a2e]/40 relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ backgroundColor: phase.color }}
                  />
                  <span className="text-sm font-semibold text-[#4E79A7]">
                    Phase {phase.num}
                  </span>
                  <h3 className="text-xl font-bold text-[#CFC8CF] mt-1">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">{phase.weeks}</p>
                </div>
              ))}
            </div>

            {/* Phase details */}
            <div className="space-y-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[#CFC8CF] mb-4">
                    Phase 1: Assess & Harden
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Evaluate the technical, operational, and governance
                    readiness of your AI pilot.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    {[
                      "Architecture review",
                      "Data flow mapping",
                      "PHI risk exposure assessment",
                      "Prompt and model evaluation",
                      "Role-based workflow analysis",
                      "Enterprise readiness scorecard",
                    ].map((d, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#4E79A7]">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-[#1a1a2e]/60 border border-[#3F395B]/50">
                  <p className="text-sm font-semibold text-[#CFC8CF] mb-4">
                    Readiness Checklist
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Security", "Scalability", "Compliance", "Adoption", "ROI Potential"].map(
                      (label) => (
                        <span
                          key={label}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-[#2d5a87]/40 text-[#CFC8CF] border border-[#4E79A7]/30"
                        >
                          {label}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[#CFC8CF] mb-4">
                    Phase 2: Architect & Wrap
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Build the enterprise infrastructure around the pilot.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    {[
                      "Secure API gateway",
                      "Role-based access control",
                      "Usage dashboards",
                      "Prompt governance layer",
                      "Human-in-the-loop review system",
                      "Integration connectors to EHR / RCM / Scheduling",
                      "AI orchestration layer",
                    ].map((d, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#4E79A7]">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-[#1a1a2e]/60 border border-[#3F395B]/50">
                  <p className="text-sm font-semibold text-[#CFC8CF] mb-4">
                    Wrapper Ring
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                    {["Security", "Permissions", "Logging", "Monitoring", "Integration", "Audit", "Analytics"].map(
                      (label) => (
                        <span key={label} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#4E79A7]" />
                          {label}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[#CFC8CF] mb-4">
                    Phase 3: Govern & Control
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Establish responsible, documented, repeatable AI usage.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    {[
                      "AI usage policies",
                      "Staff guidelines",
                      "Prompt approval workflows",
                      "Bias monitoring checkpoints",
                      "Incident response framework",
                      "Version control for AI configurations",
                      "Leadership reporting tools",
                    ].map((d, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#4E79A7]">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-[#1a1a2e]/60 border border-[#3F395B]/50 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl mb-2 block">🛡</span>
                    <p className="text-sm font-semibold text-[#CFC8CF]">
                      Policy • Oversight • Transparency • Trust
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[#CFC8CF] mb-4">
                    Phase 4: Scale & Measure
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Convert pilot into enterprise budget line item.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    {[
                      "ROI dashboard",
                      "Adoption heatmap by department",
                      "Time saved metrics",
                      "Error reduction tracking",
                      "Patient experience impact metrics",
                      "Workflow bottleneck analytics",
                      "Board-ready executive reports",
                    ].map((d, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-[#4E79A7]">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-[#1a1a2e]/60 border border-[#3F395B]/50">
                  <p className="text-sm font-semibold text-[#CFC8CF] mb-4">
                    Trend Direction
                  </p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Efficiency</span>
                      <span className="text-emerald-400">↑</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Capacity</span>
                      <span className="text-emerald-400">↑</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Administrative Burden</span>
                      <span className="text-amber-400">↓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time-to-Task</span>
                      <span className="text-amber-400">↓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* 5. USE CASES */}
      <section className="relative py-20 md:py-32">
        <FuturisticBackground
          pattern="flowing"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#1e3a5f"
          secondaryColor="#4E79A7"
          tertiaryColor="#2d5a87"
          lineCount={6}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-16 text-center">
              High-Impact Starting Points
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Administrative Workflow Automation",
                  image: "/images/healthcare/img-002.png",
                  items: [
                    "AI call triage",
                    "Intelligent scheduling",
                    "Insurance verification",
                    "Claims denial classification",
                    "Document processing",
                  ],
                },
                {
                  title: "Ambient Documentation Enterprise Toolkit",
                  image: "/images/healthcare/img-003.png",
                  items: [
                    "QA scoring dashboard",
                    "Note confidence tracking",
                    "Feedback loop interface",
                    "Risk review interface",
                  ],
                },
                {
                  title: "Prior Authorization Acceleration",
                  image: "/images/healthcare/img-004.png",
                  items: [
                    "AI summary assistant",
                    "Submission automation",
                    "Denial prediction",
                    "Tracking dashboard",
                  ],
                },
                {
                  title: "Diagnostic Augmentation Support",
                  image: "/images/healthcare/img-005.png",
                  items: [
                    "AI review tracking",
                    "Clinician feedback interface",
                    "Adoption measurement",
                    "Governance reporting",
                  ],
                },
              ].map((useCase, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl bg-[#1a1a2e]/60 border border-[#3F395B]/50"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#CFC8CF] mb-4">
                      {useCase.title}
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm mb-4">
                      {useCase.items.map((item, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-[#4E79A7]">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-gray-500">
                      Task → AI Assist → Human Review → Dashboard → Governance Log
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* 6. THE DIFFERENCE */}
      <section className="relative py-20 md:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-16 text-center">
              Why NWA Apps
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Speed",
                  image: "/images/healthcare/img-006.png",
                  items: [
                    "Rapid MVP engineering",
                    "30-day iteration cycles",
                    "In-house orchestration capability",
                  ],
                },
                {
                  title: "Enterprise Thinking",
                  image: "/images/healthcare/img-007.png",
                  items: [
                    "Security-first design",
                    "Governance integration",
                    "Scalable architecture",
                  ],
                },
                {
                  title: "Regional Commitment",
                  image: "/images/healthcare/img-008.png",
                  items: [
                    "Built in Northwest Arkansas",
                    "Aligned with regional workforce goals",
                    "Focused on health system capacity growth",
                  ],
                },
                {
                  title: "Flexible Engagement",
                  image: "/images/healthcare/img-009.png",
                  items: [
                    "Pilot hardening",
                    "Enterprise wrapper builds",
                    "Retained AI integration partner",
                    "Shared regional frameworks",
                  ],
                },
              ].map((diff, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl bg-[#1a1a2e]/40 border border-[#3F395B]/50"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={diff.image}
                      alt={diff.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#CFC8CF] mb-4">
                      {diff.title}
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {diff.items.map((item, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-[#4E79A7]">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* 7. ROI & IMPACT */}
      <section className="relative py-20 md:py-32">
        <FuturisticBackground
          pattern="flowing"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#1e3a5f"
          secondaryColor="#4E79A7"
          tertiaryColor="#2d5a87"
          lineCount={6}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-8 text-center">
              Enterprise AI Should Produce Measurable Outcomes
            </h2>
            <p className="text-center text-gray-400 mb-16">
              Metrics we help you track
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Operational Efficiency",
                  image: "/images/healthcare/img-010.png",
                  metrics: [
                    "Time saved per clinician",
                    "Administrative hours reduced",
                    "Patient wait time reduction",
                    "Documentation accuracy",
                  ],
                },
                {
                  title: "Workforce Capacity",
                  image: "/images/healthcare/healthcare1.jpg",
                  metrics: [
                    "Staff adoption rate",
                    "Compliance score",
                    "Error reduction",
                    "Time-to-task completion",
                  ],
                },
                {
                  title: "Financial Impact",
                  image: "/images/healthcare/healthcare2.jpg",
                  metrics: [
                    "Denial rate improvement",
                    "ROI dashboard",
                    "Cost per encounter",
                    "Revenue cycle metrics",
                  ],
                },
              ].map((col, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl bg-[#1a1a2e]/60 border border-[#4E79A7]/30"
                >
                  {col.image && (
                    <div className="relative aspect-video">
                      <Image
                        src={col.image}
                        alt={col.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#CFC8CF] mb-4">
                      {col.title}
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {col.metrics.map((m, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-[#4E79A7]">•</span>
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* 8. ENGAGEMENT MODEL */}
      <section className="relative py-20 md:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-16 text-center">
              Flexible Engagement Options
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Enterprise Readiness Review",
                  duration: "2–3 week engagement",
                  deliverable: "Enterprise readiness roadmap",
                },
                {
                  title: "90-Day Acceleration Program",
                  duration: "Full framework execution",
                  deliverable: "Pilot → Enterprise transition",
                },
                {
                  title: "Ongoing AI Integration Retainer",
                  duration: "Monthly support",
                  deliverable: "Optimization and scaling",
                },
              ].map((opt, i) => (
                <div
                  key={i}
                  className="p-8 rounded-xl bg-[#1a1a2e]/60 border border-[#3F395B]/50 text-center"
                >
                  <h3 className="text-xl font-bold text-[#CFC8CF] mb-4">
                    {opt.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{opt.duration}</p>
                  <p className="text-gray-300 text-sm mb-6">{opt.deliverable}</p>
                  <p className="text-[#4E79A7] font-semibold">Custom Scope</p>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* 9. REGIONAL VISION */}
      <section className="relative py-20 md:py-32">
        <FuturisticBackground
          pattern="flowing"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#1e3a5f"
          secondaryColor="#4E79A7"
          tertiaryColor="#2d5a87"
          lineCount={6}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-8 text-center">
              Building Enterprise AI Infrastructure for Northwest Arkansas
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-12">
              We are committed to workforce capacity, augmentation over
              replacement, responsible adoption, and scalable health innovation
              across the region.
            </p>

            <div className="p-8 rounded-xl bg-[#1a1a2e]/60 border border-[#3F395B]/50">
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Hospitals",
                  "Medical School",
                  "Allied Health",
                  "Administrative Teams",
                  "Technology Partners",
                ].map((node) => (
                  <span
                    key={node}
                    className="px-4 py-2 rounded-lg bg-[#3F395B]/50 text-[#CFC8CF] text-sm font-medium"
                  >
                    {node}
                  </span>
                ))}
              </div>
              <p className="text-center text-[#4E79A7] font-semibold mt-6">
                AI Enterprise Infrastructure
              </p>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="relative py-20 md:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-16 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "How is this different from AI vendors?",
                  a: "We don't sell AI models—we build the enterprise infrastructure around them. AI vendors provide the tools; we provide governance, security, integration, and ROI measurement so those tools become institutional assets.",
                },
                {
                  q: "Do you store PHI?",
                  a: "We design for minimal PHI exposure. Our architecture focuses on orchestration layers, metadata, and dashboards—not PHI storage. When PHI flows through integrations, we follow BAA requirements and your existing security policies.",
                },
                {
                  q: "How do you handle compliance?",
                  a: "We map to HIPAA, SOC 2, and your internal policies. Governance documentation, audit trails, and policy enforcement are built into the enterprise wrapper from day one.",
                },
                {
                  q: "Can this integrate with Epic?",
                  a: "Yes. We build integration connectors to EHR, RCM, and scheduling systems. Epic integration depends on your existing agreements and FHIR/HL7 capabilities.",
                },
                {
                  q: "What if we are early-stage in AI adoption?",
                  a: "The readiness review is designed for early-stage teams. We assess where you are, identify gaps, and create a roadmap—whether you're evaluating vendors or already running pilots.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-[#1a1a2e]/40 border border-[#3F395B]/50"
                >
                  <h3 className="font-semibold text-[#CFC8CF] mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="relative py-24 md:py-32">
        <FuturisticBackground
          pattern="flowing"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#1e3a5f"
          secondaryColor="#4E79A7"
          tertiaryColor="#2d5a87"
          lineCount={8}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
              AI Pilots Are Easy. Enterprise AI Is Hard.
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Let&apos;s make your AI investments scalable, secure, and
              measurable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openContact}
                className="px-8 py-4 rounded-lg bg-[#4E79A7] text-[#CFC8CF] font-semibold hover:bg-[#4E79A7]/90 transition-colors"
              >
                Schedule Enterprise Consultation
              </button>
              <button
                onClick={openContact}
                className="px-8 py-4 rounded-lg border border-[#4E79A7]/60 text-[#CFC8CF] font-semibold hover:bg-[#4E79A7]/20 transition-colors"
              >
                Request Pilot Readiness Scorecard
              </button>
            </div>
          </ContentReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
