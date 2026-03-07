import type { Metadata } from "next";
import { HealthcareAIPageContent } from "./HealthcareAIPageContent";

export const metadata: Metadata = {
  title: "AI Pilot to Enterprise | Healthcare AI | NWA Apps",
  description:
    "Turn AI experiments into scalable, governed, measurable systems. NWA Apps helps Northwest Arkansas health systems accelerate from AI pilot to enterprise impact in 90 days.",
  openGraph: {
    title: "AI Pilot to Enterprise Acceleration for Healthcare | NWA Apps",
    description:
      "Governance-first AI infrastructure for Northwest Arkansas health systems. From pilot to enterprise in 90 days.",
    type: "website",
  },
};

export default function HealthcareAIPage() {
  return <HealthcareAIPageContent />;
}
