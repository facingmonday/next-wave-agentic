"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VimeoVideo } from "@/components/VimeoVideo";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";

interface VideoItem {
  id: string;
  videoUrl: string;
  thumbnailUrl?: string;
  title: string;
  description?: string;
}

const allVideos: VideoItem[] = [
  {
    id: "kikits-launch",
    videoUrl: "https://vimeo.com/1105184966?fl=ip&fe=ec",
    thumbnailUrl: "/images/projects/kikits/kikits-video.png",
    title: "Kikits Launch Announcement",
    description:
      "A high-level launch announcement introducing Kikits to the world.",
  },
  {
    id: "pedal-pals-main",
    videoUrl: "https://vimeo.com/1126858733?fl=ip&fe=ec",
    thumbnailUrl: "/images/projects/pedal-pals/crystal.jpg",
    title: "Pedal Pals Main Campaign",
    description:
      "Join the Pedal Pals as they explore Bentonville and learn about bike safety together.",
  },
  {
    id: "maya-spark",
    videoUrl: "https://vimeo.com/1136697005?share=copy&fl=sv&fe=ci",
    thumbnailUrl: "/images/projects/kikits/MayaAndSpark.jpg",
    title: "Maya & Spark",
    description:
      "Find Your Way. Light the Moment. An emotionally uplifting animated short.",
  },
  {
    id: "stewart-healthcare",
    videoUrl: "https://vimeo.com/1152624059?share=copy&fl=sv&fe=ci",
    thumbnailUrl: "/images/projects/kikits/MayaAndSpark.jpg",
    title: "Stewart Gill - Healthcare Innovation",
    description:
      "Stewart Gill - Healthcare Innovation. A video that showcases the innovation and leadership of Stewart Gill in the healthcare industry.",
  },
  {
    id: "stewart-gill-legacy",
    videoUrl: "https://vimeo.com/1152629235?share=copy&fl=sv&fe=ci",
    thumbnailUrl: "/images/projects/pedal-pals/benny.jpg",
    title: "Stewart Gill - Legacy",
    description:
      "Stewart Gill - Legacy. A video that showcases the legacy of Stewart Gill in the healthcare industry.",
  },
  {
    id: "kikits-qr-codes",
    videoUrl: "https://vimeo.com/1110591196?fl=ip&fe=ec",
    thumbnailUrl: "/images/projects/kikits/explain.jpeg",
    title: "Creating QR Codes",
    description:
      "An AI-generated walkthrough that teaches users how to create and customize QR codes in Kikits.",
  },
  {
    id: "pedal-pals-safety",
    videoUrl: "https://vimeo.com/1140033869?share=copy&fl=sv&fe=ci",
    thumbnailUrl: "/images/projects/pedal-pals/benny.jpg",
    title: "Cold Weather Tips and Safety",
    description:
      "Learn about the importance of safety in cold weather, and how to stay warm and safe while riding your bike.",
  },
  {
    id: "kikits-drink-tickets",
    videoUrl: "https://vimeo.com/1111744640?fl=ip&fe=ec",
    thumbnailUrl: "/images/projects/kikits/show.jpeg",
    title: "Creating Drink Tickets",
    description:
      "A clear, guided explanation showing how Kikits simplifies drink ticket creation.",
  },
];

export default function GalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative z-30 py-16 md:py-24 bg-black">
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
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-6">
                Video Gallery
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Explore our collection of AI-powered videos, campaigns, and
                storytelling content.
              </p>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Video Grid */}
      <section className="relative py-2 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {allVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group relative bg-[#3F395B]/30 rounded-xl overflow-hidden border border-[#4E79A7]/30 hover:border-[#4E79A7] transition-all duration-300 hover:shadow-lg hover:shadow-[#4E79A7]/20 cursor-pointer"
                >
                  <div className="relative aspect-video bg-slate-800 overflow-hidden rounded-t-xl">
                    <VimeoVideo
                      vimeoUrl={video.videoUrl}
                      controls={true}
                      responsive={true}
                      autoplay={false}
                      muted={true}
                      className="rounded-t-xl w-full h-full"
                    />
                    {/* Fullscreen Button Overlay */}
                    <div className="absolute top-4 right-4 z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVideo(video);
                        }}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#3F395B]/90 hover:bg-[#4E79A7] text-[#CFC8CF] transition-all duration-300 backdrop-blur-sm hover:scale-110"
                        aria-label={`Open ${video.title} in dialog`}
                        title="Open video in dialog"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-[#CFC8CF] mb-2 group-hover:text-[#4E79A7] transition-colors">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-sm text-gray-400 line-clamp-2">
                        {video.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Video Dialog Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#201E30] rounded-xl overflow-hidden border border-[#4E79A7]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#3F395B] hover:bg-[#4E79A7] text-[#CFC8CF] transition-colors"
              aria-label="Close video"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#CFC8CF] mb-4">
                {selectedVideo.title}
              </h2>
              {selectedVideo.description && (
                <p className="text-gray-400 mb-6">
                  {selectedVideo.description}
                </p>
              )}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-800">
                <VimeoVideo
                  vimeoUrl={selectedVideo.videoUrl}
                  controls={true}
                  responsive={true}
                  autoplay={false}
                  muted={false}
                  className="rounded-lg w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
