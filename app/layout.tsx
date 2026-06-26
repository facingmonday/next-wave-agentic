import type { Metadata } from "next";
import { Suspense } from "react";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";
import ChatModal from "@/components/chat-modal";
import { ChatContactQuerySync } from "@/components/ChatContactQuerySync";
import {
  getOrganizationSchema,
  getServicesSchema,
  getProductSchema,
} from "@/lib/schema";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nextwaveagentic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Next Wave Agentic",
  description:
    "A creative technology agency for brands that need sharper strategy, stronger storytelling, and digital experiences built to perform.",
  openGraph: {
    title: "Next Wave Agentic",
    description:
      "A creative technology agency for brands that need sharper strategy, stronger storytelling, and digital experiences built to perform.",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/images/next-wave-agentic.jpeg",
        width: 1200,
        height: 630,
        alt: "Next Wave Agentic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Wave Agentic",
    description:
      "A creative technology agency for brands that need sharper strategy, stronger storytelling, and digital experiences built to perform.",
    images: ["/images/next-wave-agentic.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getServicesSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getProductSchema()),
          }}
        />
      </head>
      <body className={`${exo2.variable} antialiased`}>
        <SmoothScrollProvider>
          <Suspense fallback={null}>
            <ChatContactQuerySync />
          </Suspense>
          {children}
        </SmoothScrollProvider>
        <ChatModal />
      </body>
    </html>
  );
}
