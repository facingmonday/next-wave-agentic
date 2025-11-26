import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Projects | Next Wave Agentic",
  description:
    "Explore our portfolio of AI-powered projects, campaigns, and digital experiences.",
  openGraph: {
    title: "Projects | Next Wave Agentic",
    description:
      "Discover our portfolio of innovative projects and digital experiences.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="relative z-30 py-16 md:py-24 bg-black">
        <div className="max-w-3xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
            Projects
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Our portfolio of innovative work
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
