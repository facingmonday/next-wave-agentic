"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VimeoVideo, type VimeoVideoHandle } from "@/components/VimeoVideo";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import {
  galleryVideos,
  galleryAppsWebsites,
  type GalleryVideoItem,
} from "@/lib/gallery-content";

function GalleryVideoCard({ video }: { video: GalleryVideoItem }) {
  const vimeoRef = useRef<VimeoVideoHandle>(null);

  return (
    <div className="group relative bg-[#3F395B]/30 rounded-xl overflow-hidden border border-[#4E79A7]/30 hover:border-[#4E79A7] transition-all duration-300 hover:shadow-lg hover:shadow-[#4E79A7]/20">
      <div className="relative aspect-video bg-slate-800 overflow-hidden rounded-t-xl">
        <VimeoVideo
          ref={vimeoRef}
          vimeoUrl={video.videoUrl}
          controls={true}
          responsive={true}
          autoplay={false}
          muted={true}
          className="rounded-t-xl w-full h-full"
        />
      </div>
      <button
        type="button"
        onClick={() => {
          void vimeoRef.current?.requestFullscreen().catch(() => {
            /* Fullscreen may be blocked or unsupported (e.g. some mobile browsers) */
          });
        }}
        className="w-full py-2.5 px-3 text-sm font-semibold text-[#CFC8CF] bg-[#3F395B]/70 hover:bg-[#4E79A7]/80 border-t border-[#4E79A7]/40 transition-colors"
      >
        Full screen
      </button>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-semibold text-[#CFC8CF] mb-2 group-hover:text-[#4E79A7] transition-colors">
          {video.title}
        </h3>
        {video.description && (
          <p
            className={`text-sm text-gray-400 line-clamp-2 ${video.teaser ? "mb-2" : "mb-3"
              }`}
          >
            {video.description}
          </p>
        )}
        {video.teaser && (
          <p className="text-xs text-[#4E79A7]/90 italic mb-3">{video.teaser}</p>
        )}
        {video.projectHref && (
          <Link
            href={video.projectHref}
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
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative z-30 py-16 md:pt-24 pb-0 bg-black">
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
      <section className="relative py-16 md:py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <h2 className="text-3xl md:text-4xl font-bold text-[#CFC8CF] mb-8 md:mb-12">
              Video Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {galleryVideos.map((video) => (
                <GalleryVideoCard key={video.id} video={video} />
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

      <Footer />
    </main>
  );
}
