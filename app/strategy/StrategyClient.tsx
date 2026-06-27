"use client";

import React, { useState } from "react";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { openStartProjectChat } from "@/components/chat-modal";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function StrategyClient() {
  // Centerpiece Architecture stack hover state
  const [activeArchLayer, setActiveArchLayer] = useState<number | null>(null);

  // Strategy Canvas framework hover state
  const [activeCanvasNode, setActiveCanvasNode] = useState<string>("ai");

  // Layer details for centerpiece architecture
  const archLayers = [
    {
      id: 1,
      name: "Customers & Interfaces",
      desc: "The interaction layer. Modern users query search engines, activate local LLMs, or engage through rich generative UI interfaces. Traditional direct browsing is replaced by conversational agency.",
      examples: "Gemini, ChatGPT, Claude, custom mobile apps, local desktop agents",
      standards: "Generative UI, Web Components, WebSocket sync",
      tech: "High-latency human-in-the-loop approvals, dynamic layouts"
    },
    {
      id: 2,
      name: "AI Search Layer / Discoverability",
      desc: "How intelligent agents index, parse, and verify your organization. Optimized for generative discovery using machine-readable specifications and semantic semantic structures.",
      examples: "Perplexity, Google AI Overviews, SearchGPT, custom crawler agents",
      standards: "llms.txt, structured JSON-LD schemas, Robots.txt integrations",
      tech: "GEO (Generative Engine Optimization), vector database crawlability"
    },
    {
      id: 3,
      name: "Nexie Agent Layer",
      desc: "The orchestration hub. Multi-agent workflows running autonomous pipelines. Planner agents break down instructions, dispatching specialized sub-agents to fetch data, generate content, or run analytics.",
      examples: "Planner Agent, Analytics Agent, Search Agent, Content Agent",
      standards: "OpenClaw orchestration, LLM function calling, semantic routing",
      tech: "RAG readiness, context caching, local open-source models"
    },
    {
      id: 4,
      name: "MCP Servers / Tool Registry",
      desc: "Action and tools registry. Secure adapters exposing internal software resources directly to LLMs using standardised schemas, allowing AI to query database records, charge Stripe, or draft CRM entries.",
      examples: "Stripe MCP, CRM Tool Registries, Inventory API Servers, CMS adapters",
      standards: "Model Context Protocol (MCP), OpenAPI schemas, SSE, stdio transports",
      tech: "Encrypted API keys, rate-limiting, semantic schemas, execution sandboxes"
    },
    {
      id: 5,
      name: "Internal Business Systems",
      desc: "The repository of records. Databases, legacy ERPs, local filesystems, internal document repositories, and proprietary APIs that house the raw operational power of your organization.",
      examples: "SQL Databases, Vector Stores, Salesforce, ERP filesystems, local PDFs",
      standards: "REST, GraphQL, gRPC, file system access",
      tech: "Direct integrations, encrypted vector pipelines, legacy code adapters"
    }
  ];

  // Canvas nodes descriptions
  const canvasNodes: Record<string, { title: string; desc: string; highlights: string[] }> = {
    business: {
      title: "Business Strategy",
      desc: "The apex framework. Defining organizational goals, competitive advantages, revenue models, and operational parameters in an era where software handles logical execution.",
      highlights: ["Differentiated positioning", "AI-driven unit economics", "Autonomous agent roadmaps"]
    },
    knowledge: {
      title: "Knowledge Strategy",
      desc: "Structuring internal expertise, policy documents, training logs, and customer histories so they can be securely ingested by Retrieval-Augmented Generation (RAG) and RAG-ready agents.",
      highlights: ["Data curation & cleanup", "Vector database architecture", "Semantic knowledge graphs"]
    },
    ai: {
      title: "AI Strategy (Core)",
      desc: "Designing the custom agentic architectures, tool boundaries, Model Context Protocol (MCP) integrations, human approval guardrails, and model selections that orchestrate workflows.",
      highlights: ["OpenClaw orchestration", "Human-in-the-loop logic", "AI governance & security"]
    },
    experience: {
      title: "Experience Strategy",
      desc: "Architecting interactive apps, dynamic dashboards, generative UI portals, and digital screens that provide humans with seamless control over backend AI systems.",
      highlights: ["Generative UI design", "Real-time sync interfaces", "Human-agent collaboration dashboards"]
    },
    discoverability: {
      title: "Discoverability Strategy (GEO)",
      desc: "Ensuring LLMs, search engines, and autonomous search agents can crawl, synthesize, and accurately recommend your business to buyers. The evolution of search engine optimization.",
      highlights: ["llms.txt specifications", "Structured JSON-LD schema design", "Generative Engine Optimization"]
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-[#cfc8cf] font-body overflow-x-hidden">
      {/* Styles for blueprint anims */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
        .blueprint-line {
          stroke-dasharray: 8 8;
          animation: dash 2.5s linear infinite;
        }
        .blueprint-line-reverse {
          stroke-dasharray: 6 6;
          animation: dash 3s linear infinite reverse;
        }
        .pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
      `}</style>

      {/* ===== 1. HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16">
        <FuturisticBackground
          pattern="flowing"
          intensity="moderate"
          showOrbs={true}
          primaryColor="#fc05b9"
          secondaryColor="#4e79a7"
          tertiaryColor="#84596c"
          lineCount={12}
        />
        
        {/* Ambient background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#201e30_1px,transparent_1px),linear-gradient(to_bottom,#201e30_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <p className="agency-kicker">Operating System Strategy</p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#cfc8cf] leading-[1.1] tracking-tight">
              Strategy for the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc05b9] via-[#84596c] to-[#4e79a7]">
                Agentic Era
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl">
              Your website is no longer the center of your business.
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
              We design how your company thinks, how AI understands your business, and how intelligent systems execute work. Your knowledge, AI agents, APIs, internal tools, and digital experiences all need a common operating strategy. We design that foundation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => openStartProjectChat()}
                className="px-8 py-4 rounded-full bg-[#4e79a7] text-white font-semibold hover:bg-[#4e79a7]/90 transition-all hover:scale-105 shadow-lg shadow-[#4e79a7]/20"
              >
                Start Your Strategy
              </button>
              <a
                href="#agent-layer"
                className="px-8 py-4 rounded-full border border-[#3f395b] text-[#cfc8cf] font-semibold hover:border-[#4e79a7] hover:text-[#4e79a7] transition-all"
              >
                Explore Agent Stack
              </a>
            </div>
          </div>

          {/* Right SVG Network Diagram */}
          <div className="lg:col-span-5 relative aspect-square w-full max-w-[450px] mx-auto bg-[#201e30]/10 border border-[#3f395b]/30 rounded-3xl p-6 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#fc05b9]/5 to-transparent opacity-50" />
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connecting blueprint paths */}
              {/* Brand (20,35) to Knowledge (50,15) */}
              <path d="M 20,35 L 50,15" stroke="rgba(78, 121, 167, 0.3)" strokeWidth="0.8" className="blueprint-line" />
              {/* Brand (20,35) to Agents (50,50) */}
              <path d="M 20,35 L 50,50" stroke="rgba(252, 5, 185, 0.3)" strokeWidth="0.8" className="blueprint-line-reverse" />
              {/* Knowledge (50,15) to Agents (50,50) */}
              <path d="M 50,15 L 50,50" stroke="rgba(78, 121, 167, 0.4)" strokeWidth="1" className="blueprint-line" />
              {/* Agents (50,50) to Tools (50,85) */}
              <path d="M 50,50 L 50,85" stroke="rgba(252, 5, 185, 0.4)" strokeWidth="1.2" className="blueprint-line" />
              {/* Agents (50,50) to Customers (80,35) */}
              <path d="M 50,50 L 80,35" stroke="rgba(78, 121, 167, 0.3)" strokeWidth="0.8" className="blueprint-line-reverse" />
              {/* Tools (50,85) to Operations (80,65) */}
              <path d="M 50,85 L 80,65" stroke="rgba(78, 121, 167, 0.3)" strokeWidth="0.8" className="blueprint-line" />
              {/* Customers (80,35) to Operations (80,65) */}
              <path d="M 80,35 L 80,65" stroke="rgba(252, 5, 185, 0.3)" strokeWidth="0.8" className="blueprint-line" />

              {/* Node Circles */}
              {/* 1. Brand */}
              <g className="cursor-pointer group">
                <circle cx="20" cy="35" r="5" fill="#201e30" stroke="#4e79a7" strokeWidth="1.5" className="transition-transform group-hover:scale-110" />
                <circle cx="20" cy="35" r="2" fill="#4e79a7" />
                <text x="20" y="27" fill="#cfc8cf" fontSize="3.2" fontWeight="600" textAnchor="middle" className="tracking-wider">BRAND</text>
              </g>

              {/* 2. Knowledge */}
              <g className="cursor-pointer group">
                <circle cx="50" cy="15" r="5" fill="#201e30" stroke="#4e79a7" strokeWidth="1.5" className="transition-transform group-hover:scale-110" />
                <circle cx="50" cy="15" r="2" fill="#4e79a7" />
                <text x="50" y="7" fill="#cfc8cf" fontSize="3.2" fontWeight="600" textAnchor="middle" className="tracking-wider">KNOWLEDGE</text>
              </g>

              {/* 3. Agents */}
              <g className="cursor-pointer group">
                <circle cx="50" cy="50" r="7" fill="#201e30" stroke="#fc05b9" strokeWidth="2" className="transition-transform group-hover:scale-110" />
                <circle cx="50" cy="50" r="3" fill="#fc05b9" className="animate-pulse" />
                <text x="50" y="40" fill="#cfc8cf" fontSize="3.5" fontWeight="700" textAnchor="middle" className="tracking-wider">AGENTS</text>
              </g>

              {/* 4. Tools */}
              <g className="cursor-pointer group">
                <circle cx="50" cy="85" r="5" fill="#201e30" stroke="#4e79a7" strokeWidth="1.5" className="transition-transform group-hover:scale-110" />
                <circle cx="50" cy="85" r="2" fill="#4e79a7" />
                <text x="50" y="94" fill="#cfc8cf" fontSize="3.2" fontWeight="600" textAnchor="middle" className="tracking-wider">TOOLS</text>
              </g>

              {/* 5. Customers */}
              <g className="cursor-pointer group">
                <circle cx="80" cy="35" r="5" fill="#201e30" stroke="#fc05b9" strokeWidth="1.5" className="transition-transform group-hover:scale-110" />
                <circle cx="80" cy="35" r="2" fill="#fc05b9" />
                <text x="80" y="27" fill="#cfc8cf" fontSize="3.2" fontWeight="600" textAnchor="middle" className="tracking-wider">CUSTOMERS</text>
              </g>

              {/* 6. Operations */}
              <g className="cursor-pointer group">
                <circle cx="80" cy="65" r="5" fill="#201e30" stroke="#4e79a7" strokeWidth="1.5" className="transition-transform group-hover:scale-110" />
                <circle cx="80" cy="65" r="2" fill="#4e79a7" />
                <text x="80" y="75" fill="#cfc8cf" fontSize="3.2" fontWeight="600" textAnchor="middle" className="tracking-wider">OPERATIONS</text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== 2. THE PROBLEM ("THE WORLD CHANGED") ===== */}
      <section className="relative py-24 border-t border-[#3f395b]/30 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="agency-kicker justify-center">A Decisive Paradigm Shift</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#cfc8cf] leading-tight">
              The World Changed
            </h2>
            <p className="text-lg text-gray-400">
              Traditional digital strategy optimized for humans. Modern strategy optimizes for both humans and intelligent systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Old World Card */}
            <div className="bg-[#0f0e16]/30 border border-[#3f395b]/20 rounded-3xl p-8 transition-all hover:border-[#3f395b]/40 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#3f395b]/5 rounded-bl-full pointer-events-none" />
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                Old World
              </p>
              <ul className="space-y-4">
                {["Website", "SEO (Keyword matching)", "Marketing Funnel", "CRM (Manual Entry)", "Employees (Manual Execution)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-500 text-base">
                    <span className="text-gray-600 font-semibold text-sm">0{i+1}</span>
                    <span className="line-through decoration-gray-700/60">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#3f395b]/10">
                <p className="text-sm text-gray-500 italic">
                  Built to capture click traffic and channel human attention through linear paths.
                </p>
              </div>
            </div>

            {/* Agentic World Card */}
            <div className="bg-[#201e30]/40 border border-[#fc05b9]/20 rounded-3xl p-8 transition-all hover:border-[#fc05b9]/45 hover:scale-[1.01] hover:shadow-lg hover:shadow-[#fc05b9]/5 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#fc05b9]/5 rounded-bl-full pointer-events-none" />
              <p className="text-sm font-semibold uppercase tracking-widest text-[#fc05b9] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fc05b9] animate-pulse" />
                Agentic World
              </p>
              <ul className="space-y-4">
                {["AI Search & Discovery", "LLM Discovery (GEO)", "MCP Servers", "Tool Registries", "Agent Workflows", "Autonomous Operations", "Human-in-the-loop"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#cfc8cf] text-base group/item">
                    <span className="text-[#fc05b9] font-mono text-sm">0{i+1}</span>
                    <span className="group-hover/item:text-[#fc05b9] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-[#3f395b]/20">
                <p className="text-sm text-gray-400 italic">
                  Designed for semantic indexing, machine-to-machine protocols, and automated tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. WHAT STRATEGY MEANS IN AN AI WORLD ===== */}
      <section className="relative py-24 bg-black border-t border-[#3f395b]/30">
        <FuturisticBackground
          pattern="swirl"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#4e79a7"
          secondaryColor="#fc05b9"
          lineCount={6}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="agency-kicker justify-center">Beyond Slides & Reports</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#cfc8cf] leading-tight">
              Strategy Isn&apos;t Slides. It&apos;s Infrastructure.
            </h2>
            <p className="text-lg text-gray-400">
              We design and structure the five operating layers that power an intelligent organization.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                num: "1",
                title: "Business Strategy",
                desc: "Re-engineering market positioning and goal hierarchies. We align commercial models to benefit from sub-second agent processing and automated transactions.",
                bullets: ["Corporate purpose definition", "Differentiation modeling", "AI-native revenue models", "Resource distribution roadmap"]
              },
              {
                num: "2",
                title: "Knowledge Strategy",
                desc: "Cleaning, organizing, and exposing internal corporate intelligence. We transform static manuals and databases into query-ready, semantically indexed resources for RAG and LLM ingest.",
                bullets: ["System documentation auditing", "Internal expertise mapping", "RAG readiness and embeddings design", "Structured knowledge graph creation"]
              },
              {
                num: "3",
                title: "AI Strategy",
                desc: "Designing secure autonomous execution pipelines. We configure multi-agent frameworks, design tool boundaries, select foundation LLMs, and structure human approval checkpoints.",
                bullets: ["Multi-agent team orchestration", "Model Context Protocol (MCP) design", "Security & data privacy governance", "Human-in-the-loop guardrails"]
              },
              {
                num: "4",
                title: "Discovery Strategy (GEO)",
                desc: "Optimizing for LLM search behavior. We build structured digital assets so that major AI search clients and agent scrapers locate and accurately represent your capabilities.",
                bullets: ["llms.txt configuration", "Structured JSON-LD schema deployment", "Generative Engine Optimization (GEO)", "Entity relationship graph design"]
              },
              {
                num: "5",
                title: "Experience Strategy",
                desc: "Fusing traditional websites with adaptive layouts. We construct conversational portals, generative dashboards, and interactive touchpoints so users maintain intuitive control over automated workflows.",
                bullets: ["Generative UI design", "Real-time sync interfaces", "Kiosks & physical event activations", "Customer collaboration journeys"]
              }
            ].map((layer, index) => (
              <div 
                key={index} 
                className="agency-panel rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start border border-[#3f395b]/30 hover:border-[#fc05b9]/30 transition-all hover:translate-x-1 duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#201e30] border border-[#3f395b]/60 flex items-center justify-center text-[#fc05b9] font-mono text-xl font-bold flex-shrink-0">
                  {layer.num}
                </div>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#cfc8cf]">{layer.title}</h3>
                    <p className="text-gray-400 mt-2 text-sm md:text-base leading-relaxed">{layer.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-[#3f395b]/10">
                    {layer.bullets.map((bullet, idx) => (
                      <span key={idx} className="text-xs text-gray-300 flex items-center gap-1.5">
                        <span className="text-[#4e79a7] font-bold text-sm">+</span>
                        {bullet}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. THE AGENT LAYER (CENTERPIECE DIAGRAM) ===== */}
      <section id="agent-layer" className="relative py-24 bg-black border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="agency-kicker justify-center">Blueprint Blueprint</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#cfc8cf] leading-tight">
              The Agentic Stack
            </h2>
            <p className="text-lg text-gray-400">
              Hover over each architectural layer below to unpack the components, standards, and runtime systems that run the ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Architecture Stack */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-4 py-2">
              {archLayers.map((layer, index) => {
                const isActive = activeArchLayer === layer.id;
                return (
                  <div
                    key={layer.id}
                    onMouseEnter={() => setActiveArchLayer(layer.id)}
                    onMouseLeave={() => setActiveArchLayer(null)}
                    onClick={() => setActiveArchLayer(activeArchLayer === layer.id ? null : layer.id)}
                    className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                      isActive 
                        ? "bg-[#201e30]/80 border-[#fc05b9] translate-x-2" 
                        : "bg-[#201e30]/30 border-[#3f395b]/40 hover:border-[#4e79a7]/60"
                    }`}
                  >
                    {/* Layer indicator bar */}
                    <div 
                      className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl transition-colors duration-300 ${
                        isActive ? "bg-[#fc05b9]" : "bg-transparent group-hover:bg-[#4e79a7]/60"
                      }`} 
                    />
                    
                    <div className="pl-2 space-y-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 block">
                        Layer 0{layer.id}
                      </span>
                      <h3 className={`text-lg md:text-xl font-bold transition-colors ${
                        isActive ? "text-[#fc05b9]" : "text-[#cfc8cf] group-hover:text-[#4e79a7]"
                      }`}>
                        {layer.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-xs transition-opacity duration-300 ${
                        isActive ? "opacity-100 text-[#fc05b9]" : "opacity-0 text-gray-500 group-hover:opacity-100"
                      }`}>
                        View specifications
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isActive ? "rotate-90 text-[#fc05b9]" : "text-gray-500 group-hover:translate-x-1"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Detail Card */}
            <div className="lg:col-span-5 flex">
              <div className="agency-panel rounded-3xl p-8 border border-[#3f395b]/40 w-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#fc05b9]/5 to-transparent pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {activeArchLayer !== null ? (
                    <motion.div
                      key={activeArchLayer}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-6"
                    >
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fc05b9]">
                          Layer 0{activeArchLayer} Specifications
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#cfc8cf] mt-2">
                          {archLayers.find(l => l.id === activeArchLayer)?.name}
                        </h3>
                      </div>

                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {archLayers.find(l => l.id === activeArchLayer)?.desc}
                      </p>

                      <div className="space-y-4 pt-4 border-t border-[#3f395b]/20">
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Integrations & Systems</h4>
                          <p className="text-xs text-[#cfc8cf] mt-1 font-mono">{archLayers.find(l => l.id === activeArchLayer)?.examples}</p>
                        </div>
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Standards & Protocols</h4>
                          <p className="text-xs text-[#4e79a7] mt-1 font-mono">{archLayers.find(l => l.id === activeArchLayer)?.standards}</p>
                        </div>
                        <div>
                          <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Operational Focus</h4>
                          <p className="text-xs text-gray-400 mt-1 font-mono">{archLayers.find(l => l.id === activeArchLayer)?.tech}</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col justify-center h-full space-y-6 text-center lg:text-left"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#201e30] border border-[#3f395b]/50 flex items-center justify-center mx-auto lg:mx-0">
                        <svg className="w-8 h-8 text-[#4e79a7] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#cfc8cf]">Architectural Blueprint</h3>
                        <p className="text-sm text-gray-400 mt-2 leading-relaxed max-w-sm mx-auto lg:mx-0">
                          Deploying agent capabilities requires clean boundary parameters. Select or hover over any layer on the left to review our integration models and engineering standards.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="mt-8 pt-6 border-t border-[#3f395b]/20 flex items-center justify-between text-xs text-gray-500">
                  <span>Architecture: V2.6.0</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    RAG & MCP Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. STRATEGIC DELIVERABLES ===== */}
      <section className="relative py-24 bg-black border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="agency-kicker justify-center">Engineering Outputs</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#cfc8cf] leading-tight">
              Strategic Deliverables
            </h2>
            <p className="text-lg text-gray-400">
              Clear, working outputs. We build the infrastructure layer that bridges software, content, and agency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Readiness Assessment",
                points: ["Compliance risk exposure audit", "Inventory of internal systems", "Quick-win value matrices", "Model selection priorities"]
              },
              {
                title: "Agent Architecture Design",
                points: ["Multi-agent deployment roadmaps", "Tool schema configurations", "Human approval boundaries", "Rate limit & token budget maps"]
              },
              {
                title: "Knowledge Design",
                points: ["Corporate manuals structuring", "RAG vector database design", "Semantic retrieval pipelines", "Knowledge graph mapping"]
              },
              {
                title: "AI Search Optimization",
                points: ["llms.txt configuration", "JSON-LD structured schema design", "Generative Engine Optimization (GEO)", "Entity validation audits"]
              },
              {
                title: "Workflow Design",
                points: ["Autonomous execution flows", "MCP server deployment plans", "Human escalation guardrails", "Audit trail configurations"]
              },
              {
                title: "Executive Roadmap",
                points: ["90-day pilot validation plan", "12-month implementation timeline", "Budgeting and token estimation", "KPI tracking framework"]
              }
            ].map((deliv, index) => (
              <div 
                key={index} 
                className="bg-[#201e30]/30 border border-[#3f395b]/30 hover:border-[#fc05b9]/30 rounded-2xl p-6 transition-all hover:scale-[1.02] duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#cfc8cf] border-b border-[#3f395b]/10 pb-3 mb-4">{deliv.title}</h3>
                  <ul className="space-y-2.5">
                    {deliv.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4e79a7] mt-1.5 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-[#3f395b]/10 text-right">
                  <span className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider">Specifications</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 6. WHAT MAKES US DIFFERENT ===== */}
      <section className="relative py-24 bg-black border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="agency-kicker justify-center">Structural Comparison</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#cfc8cf] leading-tight">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-400">
              Traditional consulting delivers slides. We design dynamic operating systems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden border border-[#3f395b]/30 rounded-3xl bg-[#201e30]/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 border-b border-[#3f395b]/30 bg-[#201e30]/30 py-4 px-6 text-sm font-semibold uppercase tracking-wider text-gray-400">
              <div>Traditional Agency</div>
              <div className="text-[#fc05b9]">Next Wave</div>
            </div>
            
            {[
              { trad: "Branding", nex: "Operating Systems" },
              { trad: "Website Development", nex: "Digital Ecosystem Integration" },
              { trad: "SEO (Search Engine Optimization)", nex: "AI Discoverability (GEO)" },
              { trad: "Automation (Zapier/Linear)", nex: "Agentic Architecture" },
              { trad: "Marketing Copywriting", nex: "Organizational Intelligence Tuning" },
              { trad: "Deliverables (PDF Slides)", nex: "Working Software & Models" }
            ].map((row, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-2 py-4 px-6 text-sm sm:text-base border-b last:border-0 border-[#3f395b]/10 transition-colors hover:bg-[#201e30]/20`}
              >
                <div className="text-gray-500 line-through decoration-gray-700/60 flex items-center pr-4">
                  {row.trad}
                </div>
                <div className="text-[#cfc8cf] font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fc05b9] flex-shrink-0" />
                  {row.nex}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. EXAMPLE ENGAGEMENT ===== */}
      <section className="relative py-24 bg-black border-t border-[#3f395b]/30">
        <FuturisticBackground
          pattern="flowing"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#fc05b9"
          secondaryColor="#4e79a7"
          lineCount={6}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="agency-kicker justify-center">Deployment Timeline</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#cfc8cf] leading-tight">
              Example Engagement
            </h2>
            <p className="text-lg text-gray-400">
              A structured roadmap to design, build, and deploy your Agentic Operating System.
            </p>
          </div>

          {/* Horizontal timeline on desktop, vertical on mobile */}
          <div className="hidden lg:grid grid-cols-6 gap-6 relative pt-8 pb-12 max-w-6xl mx-auto">
            {/* Continuous linking line */}
            <div className="absolute top-12 left-6 right-6 h-0.5 border-t border-dashed border-[#3f395b]" />
            
            {[
              { week: "Week 1", title: "Discovery", desc: "Audit current infrastructure, identify quick wins, and outline data compliance parameters." },
              { week: "Week 2", title: "Knowledge Mapping", desc: "Ingest and structure internal documentation, preparing vectors and embeddings." },
              { week: "Week 3", title: "AI Architecture", desc: "Design multi-agent logic flowcharts, tool definitions, and human-in-the-loop triggers." },
              { week: "Week 4", title: "Prototype", desc: "Deploy experimental workflows in a sandboxed test environment to verify task resolution." },
              { week: "Week 5", title: "Automation", desc: "Connect live APIs, configure custom MCP servers, and audit performance thresholds." },
              { week: "Week 6", title: "Deployment Roadmap", desc: "Production release, LLM discoverability optimization, and long-term scaling guidelines." }
            ].map((step, idx) => (
              <div key={idx} className="relative space-y-4 bg-black">
                {/* Node indicator */}
                <div className="w-8 h-8 rounded-full bg-[#201e30] border-2 border-[#4e79a7] flex items-center justify-center font-mono text-[10px] text-gray-400 relative z-10 mx-auto transition-transform hover:scale-110 hover:border-[#fc05b9]">
                  {idx + 1}
                </div>
                <div className="text-center space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#fc05b9] font-bold block">{step.week}</span>
                  <h4 className="text-base font-bold text-[#cfc8cf]">{step.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed px-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical version for mobile */}
          <div className="lg:hidden space-y-8 max-w-md mx-auto relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-dashed before:border-l before:border-dashed before:border-[#3f395b]">
            {[
              { week: "Week 1", title: "Discovery", desc: "Audit current infrastructure, identify quick wins, and outline data compliance parameters." },
              { week: "Week 2", title: "Knowledge Mapping", desc: "Ingest and structure internal documentation, preparing vectors and embeddings." },
              { week: "Week 3", title: "AI Architecture", desc: "Design multi-agent logic flowcharts, tool definitions, and human-in-the-loop triggers." },
              { week: "Week 4", title: "Prototype", desc: "Deploy experimental workflows in a sandboxed test environment to verify task resolution." },
              { week: "Week 5", title: "Automation", desc: "Connect live APIs, configure custom MCP servers, and audit performance thresholds." },
              { week: "Week 6", title: "Deployment Roadmap", desc: "Production release, LLM discoverability optimization, and long-term scaling guidelines." }
            ].map((step, idx) => (
              <div key={idx} className="relative space-y-1">
                {/* Node indicator */}
                <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-full bg-[#201e30] border-2 border-[#4e79a7] z-10" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#fc05b9]">{step.week}</span>
                <h4 className="text-base font-bold text-[#cfc8cf]">{step.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 8. BUILT AROUND MODERN AI STANDARDS ===== */}
      <section className="relative py-24 bg-black border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="agency-kicker justify-center">Technical Specifications</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#cfc8cf] leading-tight">
              Built Around Modern AI Standards
            </h2>
            <p className="text-lg text-gray-400">
              We leverage established open protocols to ensure compliance, stability, and future portability.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Model Context Protocol (MCP)",
              "Agent Tool Registries",
              "llms.txt Specifications",
              "Structured JSON-LD Data",
              "Vector Database Indexing",
              "Retrieval-Augmented Generation (RAG)",
              "Human-in-the-loop Approvals",
              "Generative UI Frameworks",
              "AI Compliance & Governance",
              "Semantic Search Networks",
              "API-First Architecture",
              "Multi-Agent Orchestration"
            ].map((std, idx) => (
              <div 
                key={idx}
                className="rounded-full border border-[#3f395b]/45 bg-[#201e30]/30 hover:border-[#fc05b9]/40 hover:bg-[#201e30]/60 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider text-[#cfc8cf] transition-all hover:scale-105 duration-200 cursor-default"
              >
                {std}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 9. INDUSTRIES ===== */}
      <section className="relative py-24 bg-black border-t border-[#3f395b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="agency-kicker justify-center">Ecosystem Application</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#cfc8cf] leading-tight">
              Sectors We Transform
            </h2>
            <p className="text-lg text-gray-400">
              Our designs scale across verticals that demand security, semantic compliance, and low overhead.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {["Healthcare", "Government", "Education", "Cities", "Events", "Media", "Retail", "Internal Enterprise"].map((ind, idx) => (
              <div 
                key={idx}
                className="bg-[#201e30]/20 border border-[#3f395b]/20 hover:border-[#4e79a7]/30 rounded-2xl p-6 text-center transition-all group duration-200"
              >
                <span className="text-lg font-bold text-gray-400 group-hover:text-[#cfc8cf] transition-colors block">
                  {ind}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 10. THE NEXT WAVE STRATEGY CANVAS ===== */}
      <section className="relative py-24 bg-black border-t border-[#3f395b]/30">
        <FuturisticBackground
          pattern="swirl"
          intensity="minimal"
          showOrbs={false}
          primaryColor="#fc05b9"
          secondaryColor="#4e79a7"
          lineCount={6}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="agency-kicker justify-center">Proprietary Framework</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#cfc8cf] leading-tight">
              The Strategy Canvas
            </h2>
            <p className="text-lg text-gray-400">
              Interact with the nodes of our structural strategy canvas to explore how we connect organization assets.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* Left: Graphic representation */}
            <div className="lg:col-span-6 relative aspect-square w-full max-w-[400px] mx-auto">
              <svg 
                className="w-full h-full"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connecting lines from center AI node */}
                <line x1="50" y1="50" x2="50" y2="15" stroke={activeCanvasNode === "business" ? "#fc05b9" : "#3f395b"} strokeWidth={activeCanvasNode === "business" ? "1.5" : "0.8"} className="transition-all duration-300" />
                <line x1="50" y1="50" x2="50" y2="85" stroke={activeCanvasNode === "discoverability" ? "#fc05b9" : "#3f395b"} strokeWidth={activeCanvasNode === "discoverability" ? "1.5" : "0.8"} className="transition-all duration-300" />
                <line x1="50" y1="50" x2="15" y2="50" stroke={activeCanvasNode === "knowledge" ? "#fc05b9" : "#3f395b"} strokeWidth={activeCanvasNode === "knowledge" ? "1.5" : "0.8"} className="transition-all duration-300" />
                <line x1="50" y1="50" x2="85" y2="50" stroke={activeCanvasNode === "experience" ? "#fc05b9" : "#3f395b"} strokeWidth={activeCanvasNode === "experience" ? "1.5" : "0.8"} className="transition-all duration-300" />

                {/* Outer bounding lines */}
                <polygon points="50,15 85,50 50,85 15,50" fill="none" stroke="rgba(63, 57, 91, 0.2)" strokeWidth="0.8" />

                {/* Center Node (AI) */}
                <g className="cursor-pointer" onClick={() => setActiveCanvasNode("ai")} onMouseEnter={() => setActiveCanvasNode("ai")}>
                  <circle cx="50" cy="50" r="8" fill="#201e30" stroke={activeCanvasNode === "ai" ? "#fc05b9" : "#3f395b"} strokeWidth="2" className="transition-all duration-300" />
                  <circle cx="50" cy="50" r="3" fill="#fc05b9" />
                  <text x="50" y="44" fill="#cfc8cf" fontSize="3" fontWeight="600" textAnchor="middle" className="tracking-widest">AI</text>
                </g>

                {/* Top Node (Business) */}
                <g className="cursor-pointer" onClick={() => setActiveCanvasNode("business")} onMouseEnter={() => setActiveCanvasNode("business")}>
                  <circle cx="50" cy="15" r="6" fill="#201e30" stroke={activeCanvasNode === "business" ? "#fc05b9" : "#3f395b"} strokeWidth="1.5" className="transition-all duration-300" />
                  <circle cx="50" cy="15" r="2.5" fill="#4e79a7" />
                  <text x="50" y="7" fill="#cfc8cf" fontSize="3.2" fontWeight="700" textAnchor="middle" className="tracking-wider">BUSINESS</text>
                </g>

                {/* Bottom Node (Discoverability) */}
                <g className="cursor-pointer" onClick={() => setActiveCanvasNode("discoverability")} onMouseEnter={() => setActiveCanvasNode("discoverability")}>
                  <circle cx="50" cy="85" r="6" fill="#201e30" stroke={activeCanvasNode === "discoverability" ? "#fc05b9" : "#3f395b"} strokeWidth="1.5" className="transition-all duration-300" />
                  <circle cx="50" cy="85" r="2.5" fill="#4e79a7" />
                  <text x="50" y="94" fill="#cfc8cf" fontSize="3.2" fontWeight="700" textAnchor="middle" className="tracking-wider">DISCOVERABILITY</text>
                </g>

                {/* Left Node (Knowledge) */}
                <g className="cursor-pointer" onClick={() => setActiveCanvasNode("knowledge")} onMouseEnter={() => setActiveCanvasNode("knowledge")}>
                  <circle cx="15" cy="50" r="6" fill="#201e30" stroke={activeCanvasNode === "knowledge" ? "#fc05b9" : "#3f395b"} strokeWidth="1.5" className="transition-all duration-300" />
                  <circle cx="15" cy="50" r="2.5" fill="#4e79a7" />
                  <text x="15" y="42" fill="#cfc8cf" fontSize="3.2" fontWeight="700" textAnchor="middle" className="tracking-wider">KNOWLEDGE</text>
                </g>

                {/* Right Node (Experience) */}
                <g className="cursor-pointer" onClick={() => setActiveCanvasNode("experience")} onMouseEnter={() => setActiveCanvasNode("experience")}>
                  <circle cx="85" cy="50" r="6" fill="#201e30" stroke={activeCanvasNode === "experience" ? "#fc05b9" : "#3f395b"} strokeWidth="1.5" className="transition-all duration-300" />
                  <circle cx="85" cy="50" r="2.5" fill="#4e79a7" />
                  <text x="85" y="42" fill="#cfc8cf" fontSize="3.2" fontWeight="700" textAnchor="middle" className="tracking-wider">EXPERIENCE</text>
                </g>
              </svg>
            </div>

            {/* Right: Expandable text panel */}
            <div className="lg:col-span-6">
              <div className="agency-panel rounded-3xl p-8 border border-[#3f395b]/30 min-h-[250px] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#fc05b9] block">
                    Canvas Framework
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#cfc8cf] mt-1">
                    {canvasNodes[activeCanvasNode]?.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-4">
                    {canvasNodes[activeCanvasNode]?.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#3f395b]/20">
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block mb-2">Key Areas Focus</span>
                  <div className="flex flex-wrap gap-2">
                    {canvasNodes[activeCanvasNode]?.highlights.map((tag, idx) => (
                      <span key={idx} className="rounded-full bg-[#201e30] border border-[#3f395b]/60 px-3 py-1 text-xs text-[#cfc8cf] font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 11. CTA ===== */}
      <section className="relative py-28 md:py-36 bg-black border-t border-[#3f395b]/30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#201e30]/10 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          <p className="agency-kicker justify-center">Design Your System</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#cfc8cf] leading-tight">
            Build Your Agentic <br/>
            Operating System
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re launching an AI-native startup or modernizing an enterprise, we help design the intelligence layer that connects your people, knowledge, software, and customers.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => openStartProjectChat()}
              className="px-8 py-4 rounded-full bg-[#4e79a7] text-white font-semibold hover:bg-[#4e79a7]/90 transition-all hover:scale-105 shadow-lg shadow-[#4e79a7]/20"
            >
              Start a Strategy Engagement
            </button>
            <Link
              href="/projects"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-[#cfc8cf] font-semibold hover:bg-white/10 transition-all hover:scale-105"
            >
              Review Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
