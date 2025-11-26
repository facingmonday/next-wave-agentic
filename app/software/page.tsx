import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import VerticalScrollCarousel from "@/components/VerticalScrollCarousel";
import HeroCarousel from "@/components/HeroCarousel";

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
    id: "cv_cms",
    title: "CityView CMS",
    subtitle:
      "An AI powered content management system for small to large cities",
    // href: "/projects/okay-nwa",
    defaultImage: "/images/cityview/cms_logo_black.png",
    backgroundColor: "#4178E1",
  },
  {
    id: "planet-good-times",
    title: "Planet Good Times",
    subtitle:
      "A creative platform and event hub that showcases Planet Good Times events, experiences, and creative content.",
    // href: "/projects/planet-good-times",
    defaultImage: "/images/planet-goodtimes/damon.png",
    backgroundColor: "#FDF4D2",
  },
  {
    id: "lineup",
    title: "Lineup Booking",
    subtitle:
      "A comprehensive event management platform designed for bringing artists and venues together.",
    // href: "/projects/lineup",
    defaultImage: "/images/lineup-booking/thedudes.png",
    backgroundColor: "#FFFFFF",
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
    id: "astro",
    title: "Astro",
    subtitle:
      "An app built for Tow Truck Companies to simplify their operations and improve efficiency with law enforcement.",
    // href: "/projects/astro",
    defaultImage: "/images/astro/astro.png",
    backgroundColor: "#1E3A5F",
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

const HeroSlides = [
  {
    title: "Next Wave Agentic Software",
    subtitle: "Custom development and AI-enhanced applications",
    description:
      "Custom development and AI-enhanced applications built in Bentonville, Arkansas",
    backgroundImage:
      "/images/bentonville-watertower/bentonville-watertower-drone-067.jpg",
    mainImage: "/images/kikits/kikits-phone-2.png",
  },
];

export default function SoftwarePage() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Header />
      <HeroCarousel slides={HeroSlides} className="z-40" />
      <VerticalScrollCarousel items={softwarehighlights} />
      <section className="relative z-50 bg-black">
        <Footer />
      </section>
    </main>
  );
}
