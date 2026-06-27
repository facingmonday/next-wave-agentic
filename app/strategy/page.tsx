import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import StrategyClient from "./StrategyClient";
import { getStrategyServiceSchema, getStrategyFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "AI Strategy & Agentic Operating System Design | Next Wave Agentic",
  description:
    "We design how your company thinks, how AI understands your business, and how intelligent systems execute work. Strategy for the Agentic Era.",
  openGraph: {
    title: "AI Strategy & Agentic Operating System Design | Next Wave Agentic",
    description:
      "We design how your company thinks, how AI understands your business, and how intelligent systems execute work. Strategy for the Agentic Era.",
    type: "website",
  },
};

export default function StrategyPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Inject AEO/GEO schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStrategyServiceSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStrategyFAQSchema()),
        }}
      />

      <Header />
      <StrategyClient />
      <Footer />
    </main>
  );
}
