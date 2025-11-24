import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software | Next Wave Agentic",
  description:
    "Custom software development and AI-enhanced web applications by Next Wave Agentic.",
  openGraph: {
    title: "Software | Next Wave Agentic",
    description:
      "Explore our custom software development and AI-enhanced web applications.",
    type: "website",
  },
};

interface SoftwareProject {
  id: string;
  name: string;
  description: string;
  image: string;
  link?: string;
  technologies?: string[];
}

const softwareProjects: SoftwareProject[] = [
  {
    id: "kikits",
    name: "Kikits",
    description:
      "An event discovery and ticketing platform that connects users with local events. Built with React, Next.js, and TypeScript, featuring real-time event updates, seamless ticket purchasing, and user-friendly event management tools.",
    image: "/images/projects/kikits/kikitsPhone.jpg",
    link: "https://kikits.com",
    technologies: ["React", "Next.js", "TypeScript", "Event Management"],
  },
  {
    id: "lineup",
    name: "Lineup",
    description:
      "A comprehensive event management and ticketing software platform. We architected the system to handle event creation, ticket sales, attendee management, and analytics. The platform supports both web and mobile experiences with a scalable backend infrastructure.",
    image: "/images/lineup-booking/lineUpDudes.png",
    link: "https://www.lineupbooking.com/",
    technologies: [
      "System Architecture",
      "Event Management",
      "Ticketing",
      "Analytics",
    ],
  },
  {
    id: "mrs",
    name: "Miller Risk Solutions",
    description:
      "A risk management platform designed to help businesses identify, assess, and mitigate risks.",
    image: "/images/MRS/MRsImage.png",
    link: "https://www.millerrisk.com/",
    technologies: ["Web Development", "Risk Management", "Content Management"],
  },
  {
    id: "planet-good-times",
    name: "Planet Good Times",
    description:
      "A creative platform and event hub that showcases events, experiences, and creative content. The site integrates event listings, video galleries, and community features to create an engaging digital experience for event-goers and creators.",
    image: "/images/planet-goodtimes/GoodTimesLogo.png",
    link: "https://planetgoodtimes.com",
    technologies: ["Event Platform", "Content Management", "Video Integration"],
  },
];

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="relative z-30 py-16 md:py-24 bg-black">
        <div className="max-w-3xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
            Software
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Custom development and AI-enhanced applications
          </p>
        </div>
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
            <div className="space-y-24">
              {softwareProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 1 ? "md:order-2" : ""
                    } relative group`}
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-[#4E79A7]/30 bg-[#3F395B]/30">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#CFC8CF] mb-4">
                      {project.name}
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[#3F395B]/50 border border-[#4E79A7]/30 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#4E79A7] hover:text-[#4E79A7]/80 font-medium transition-colors"
                      >
                        Visit Site
                        <svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>
    </main>
  );
}
