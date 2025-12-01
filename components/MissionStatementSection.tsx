"use client";

import { ContentReveal } from "./ContentReveal";
import { FuturisticBackground } from "./FuturisticBackground";
import { HorizontalScrollCarousel } from "./HorizontalScrollCarousel";
import { motion } from "framer-motion";

function VerticalMissionSlide({
  title,
  body,
}: {
  title: string;
  body?: string;
}) {
  return (
    <section className="h-[90vh] flex items-center justify-center px-10 sm:px-20 relative">
      <div className="relative flex w-full max-w-7xl h-full">
        {/* DESKTOP: TITLE — LEFT CENTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          transition={{
            duration: 1.4,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 1.2 },
          }}
          className="hidden sm:block absolute -left-24 top-1/3 -translate-y-1/2"
        >
          <h1 className="text-white font-bold text-6xl md:text-8xl leading-[0.9]">
            {title}
          </h1>
        </motion.div>

        {/* DESKTOP: BODY — RIGHT LOWER */}
        {body && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
            transition={{
              duration: 1.6,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 1.3 },
            }}
            className="hidden sm:block absolute right-10 bottom-32 max-w-2xl text-right"
          >
            <p className="text-gray-300 text-2xl md:text-3xl leading-snug font-medium">
              {body}
            </p>
          </motion.div>
        )}

        {/* MOBILE VERSION */}
        <div className="sm:hidden flex flex-col items-center justify-center w-full h-full text-center space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 1 },
            }}
            className="text-white font-bold text-5xl leading-[0.9]"
          >
            {title}
          </motion.h1>

          {body && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.25, 0.1, 0.25, 1],
                opacity: { duration: 1.1 },
              }}
              className="text-gray-300 text-xl max-w-xs"
            >
              {body}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

export function MissionStatementSection() {
  return (
    <div className="relative">
      <FuturisticBackground
        primaryColor="#fc05b9"
        secondaryColor="#4E79A7"
        tertiaryColor="#84596c"
        lineCount={6}
        lineThickness="thin"
        intensity="moderate"
        showOrbs={false}
        animated={true}
        pattern="flowing"
      />

      <section className="relative pt-32 text-white">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <ContentReveal
            direction="opacity"
            duration={1.2}
            startOffset="top 80%"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-[#CFC8CF] text-center">
              The Next Wave Agentic Ecosystem
            </h2>
          </ContentReveal>

          <ContentReveal
            direction="opacity"
            duration={1.2}
            startOffset="top 80%"
            delay={0.2}
          >
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto text-center">
              We are an ecosystem of creators, engineers, and experience-makers
              who turn ideas into reality. From software to real-world events to
              AI-driven storytelling, we build the systems, stories, and
              experiences that bring visions to life.
            </p>
          </ContentReveal>

          <ContentReveal
            direction="opacity"
            duration={1.2}
            startOffset="top 80%"
            delay={0.4}
          >
            <p className="text-lg text-gray-400 max-w-2xl mx-auto text-center">
              We strategize ideas. We create software and experiences. We use
              storytelling to build connection. We generate engagement that
              moves people. And we bring it all into the real world.
            </p>
          </ContentReveal>
        </div>
      </section>

      <VerticalMissionSlide
        title="Who We Are -"
        body="Next Wave Agentic is a collaborative ecosystem of companies working together under one mission: transforming ideas into high-performance digital products and unforgettable real-world experiences."
      />

      <VerticalMissionSlide
        title="What We Believe -"
        body="We believe the future belongs to those who imagine boldly and execute intelligently. 
          Every idea deserves a strategy, every product deserves a story, and every experience 
          deserves a moment that feels alive. Our role is to connect those pieces — strategy → 
          creation → storytelling → engagement → real experience."
      />

      <section className="relative">
        <HorizontalScrollCarousel
          MainTitle="What We Do -"
          items={[
            {
              image: "/images/projects/kikits/KikitsPhone.jpg",
              title: "AI-Enhanced Web & App Development",
              body: "High-performance websites and mobile apps built with React, Next.js, and TypeScript. Features include AI search, automated content flows, dashboards, and custom integrations.",
              buttonLabel: "View Development Capabilities",
              buttonHref: "/contact",
            },
            {
              image: "/images/projects/kikits/MayaAndSpark.jpg",
              title: "AI Video & Storytelling Studio",
              body: "Cinematic AI-generated videos in Pixar-style 3D, comic-book animation, and realistic avatars. We craft full campaigns, episodic narratives, and brand films optimized for social, web, and advertising.",
              buttonLabel: "Explore AI Video Styles",
              buttonHref: "/contact",
            },
            {
              image: "/images/projects/pedal-pals/crystal.jpg",
              title: "Brand Identity & Creative Direction",
              body: "Complete brand identity from logos and palettes to typography, voice, and visual language. AI accelerates exploration while human creative direction ensures consistency and long-term recognizability.",
              buttonLabel: "Build a Cohesive Brand",
              buttonHref: "/contact",
            },
            {
              image:
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
              title: "Experiential Events & Interactive Media",
              body: "AI-driven event experiences with dynamic QR systems, real-time visuals, and narrative-driven interactions. From VIP activations to festivals, we create adaptive event ecosystems.",
              buttonLabel: "See Event Innovations",
              buttonHref: "/contact",
            },
            {
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
              title: "Marketing Systems & Automation",
              body: "Automated marketing systems that handle content creation, email flows, video generation, SEO, and social scheduling. Always-on systems that multiply output while reducing workload.",
              buttonLabel: "Automate Your Marketing",
              buttonHref: "/contact",
            },
            {
              image:
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
              title: "Enterprise AI Consulting & Custom Solutions",
              body: "Enterprise AI solutions including internal tools, intelligent assistants, automated workflows, and custom model integrations. We engineer scalable solutions from apps to fully AI-powered operations.",
              buttonLabel: "Build Custom AI Tools",
              buttonHref: "/contact",
            },
          ]}
        />
      </section>
    </div>
  );
}
