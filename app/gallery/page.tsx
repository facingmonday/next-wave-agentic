"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VimeoVideo } from "@/components/VimeoVideo";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import {
  galleryVideos,
  galleryAppsWebsites,
  type GalleryVideoItem,
} from "@/lib/gallery-content";

export default function GalleryPage() {
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideoItem | null>(
    null
  );

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
                Gallery
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Explore our collection of AI-powered videos, apps, and websites
                from projects we&apos;ve built.
              </p>
            </div>
          </ContentReveal>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="relative py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-4xl font-bold text-[#CFC8CF] mb-8 md:mb-12">
              Video Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {galleryVideos.map((video) => (
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
                          <p
                            className={`text-sm text-gray-400 line-clamp-2 ${
                              video.teaser ? "mb-2" : "mb-3"
                            }`}
                          >
                            {video.description}
                          </p>
                        )}
                        {video.teaser && (
                          <p className="text-xs text-[#4E79A7]/90 italic mb-3">
                            {video.teaser}
                          </p>
                        )}
                        {video.projectHref && (
                          <Link
                            href={video.projectHref}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-sm font-medium text-[#4E79A7] hover:text-[#4E79A7]/80 transition-colors"
                          >
                            More Info
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
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

      {/* Apps & Websites Section */}
      <section className="relative py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-4xl font-bold text-[#CFC8CF] mb-8 md:mb-12">
              Apps & Websites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {galleryAppsWebsites.map((app) => (
                <Link
                  key={app.id}
                  href={app.href}
                  className="group block bg-[#3F395B]/30 rounded-xl overflow-hidden border border-[#4E79A7]/30 hover:border-[#4E79A7] transition-all duration-300 hover:shadow-lg hover:shadow-[#4E79A7]/20"
                >
                  <div className="relative aspect-video bg-slate-800 overflow-hidden rounded-t-xl">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-[#CFC8CF] mb-2 group-hover:text-[#4E79A7] transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                      {app.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#4E79A7] hover:text-[#4E79A7]/80 transition-colors">
                      View Project
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
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
                <p className="text-gray-400 mb-2">
                  {selectedVideo.description}
                </p>
              )}
              {selectedVideo.teaser && (
                <p className="text-sm text-[#4E79A7]/90 italic mb-6">
                  {selectedVideo.teaser}
                </p>
              )}
              {!selectedVideo.teaser && selectedVideo.description && (
                <div className="mb-6" />
              )}
              {!selectedVideo.description && !selectedVideo.teaser && (
                <div className="mb-6" />
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
              {selectedVideo.projectHref && (
                <Link
                  href={selectedVideo.projectHref}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[#4E79A7] hover:text-[#4E79A7]/80 transition-colors"
                >
                  More Info
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
