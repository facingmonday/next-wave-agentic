import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Next Wave Agentic",
  description:
    "Where creativity, technology, and storytelling are built locally and launched globally.",
  openGraph: {
    title: "Next Wave Agentic",
    description:
      "Where creativity, technology, and storytelling are built locally and launched globally.",
    type: "website",
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
      "Where creativity, technology, and storytelling are built locally and launched globally.",
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
      <body className={`${exo2.variable} antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
