import type { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Storytelling | Next Wave Agentic",
  description:
    "AI-powered storytelling and narrative experiences crafted by Next Wave Agentic.",
  openGraph: {
    title: "Storytelling | Next Wave Agentic",
    description:
      "Explore our AI-powered storytelling and narrative experiences.",
    type: "website",
  },
};

export default function StorytellingPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <section className="relative z-30 py-16 md:py-24 bg-black">
        <div className="max-w-3xl mx-auto text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase">
            Storytelling
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            AI-powered narratives that captivate and inspire
          </p>
        </div>
      </section>
    </main>
  );
}
