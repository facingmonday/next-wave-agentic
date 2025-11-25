import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import HighlightsScroller from "@/components/HighlightsScroller";
import HighlightSlide from "@/components/HighlightsSlide";
import VerticalScrollCarousel from "@/components/VerticalScrollCarousel";

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

const softwarehighlights = [
  {
    id: "kikits",
    title: "Kikits",
    subtitle: "An Ticketing Platform, powered by AI, built for the New Age",
    href: "/projects/kikits",
    defaultImage: "/images/kikits/kikits.png",
    backgroundColor: "#F96f01",
  },
  {
    id: "planet-good-times",
    title: "Planet Good Times",
    subtitle:
      "A creative platform and event hub that showcases events, experiences, and creative content. ",
    // href: "/projects/planet-good-times",
    defaultImage: "/images/planet-goodtimes/damon.png",
    backgroundColor: "#FDF4D2",
  },
  {
    id: "okaynwa",
    title: "OkayNWA",
    subtitle: "An AI Powered Event Discovery Platform For NWA",
    // href: "/projects/okay-nwa",
    defaultImage: "/images/okay-nwa/okayNWAWhite.png",
    backgroundColor: "#182618",
  },
  {
    id: "lineup",
    title: "Lineup",
    subtitle:
      "A comprehensive event management platform designed for bringing artists and venues together.",
    // href: "/projects/lineup",
    defaultImage: "/images/lineup-booking/thedudes.png",
    backgroundColor: "#FFFFFF",
  },
  {
    id: "mrs",
    title: "Miller Risk Solutions",
    subtitle:
      "A risk management platform designed to help businesses identify, assess, and mitigate risks.",
    href: "/projects/mrs",
    defaultImage: "/images/mrs/mrs-dot.png",
    backgroundColor: "#3F395B",
  },
];

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section
        className="relative z-30 py-24 md:py-48 lg:py-48 xl:py-64"
        style={{
          background:
            "linear-gradient(to bottom, #000000 0%, #000000 75%, #F96f01 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
            Software
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Custom development and AI-enhanced applications
          </p>
        </div>
      </section>
      <VerticalScrollCarousel items={softwarehighlights} />
      <section className="relative z-50 bg-black">
        <Footer />
      </section>
    </main>
  );
}
