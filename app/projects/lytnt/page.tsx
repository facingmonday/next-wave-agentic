"use client";

import { Header } from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import { ContentReveal } from "@/components/ContentReveal";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { Footer } from "@/components/Footer";
import { ProjectHelpCTA } from "@/components/ProjectHelpCTA";
import Image from "next/image";

const HeroSlides = [
  {
    title: "lytnt",
    subtitle: "AI Image Generation in Bulk",
    description:
      "Create images at scale from ingredients and references. Built for brands, bars, restaurants, and anyone who needs to produce visuals—cartoon, lifelike, ads, social media, and more. One place to generate exactly what you need.",
    backgroundImage: "/images/lytnt/lytnt_black_icon.jpg",
    button: {
      text: "Visit lytnt",
      href: "https://lytnt.com",
    },
  },
];

const ShowcaseImages = [
  {
    src: "/images/lytnt/lytnt1.jpg",
    alt: "lytnt AI image generation example",
    title: "Visual variety",
    description:
      "Generate images in any style—cartoon, lifelike, editorial, or ad-ready—driven by your ingredients and reference prompts.",
  },
  {
    src: "/images/lytnt/lytnt2.jpg",
    alt: "lytnt bulk generation",
    title: "Bulk generation",
    description:
      "Produce many images at once from a single set of ingredients and references, so brands and venues can keep content flowing.",
  },
  {
    src: "/images/lytnt/lytnt3.jpg",
    alt: "lytnt for food and beverage",
    title: "Food & beverage",
    description:
      "Ideal for bars and restaurants: menu shots, specials, and social content based on real ingredients and your brand look.",
  },
  {
    src: "/images/lytnt/lytnt4.jpg",
    alt: "lytnt ads and social",
    title: "Ads & social",
    description:
      "Create ad creatives and social media assets in bulk—consistent style, on-brand, without hiring a full design team.",
  },
  {
    src: "/images/lytnt/lytnt5.jpg",
    alt: "lytnt for brands",
    title: "For brands",
    description:
      "Any business that needs to create images regularly can use lytnt to scale visual content from ingredients and references.",
  },
];

export default function LytntPage() {
  return (
    <>
      <main className="min-h-screen bg-black">
        <Header />

        {/* Hero Section */}
        <HeroCarousel slides={HeroSlides} />

        {/* What We Did */}
        <section className="relative py-16 md:py-32">
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
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  What we did for lytnt
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
                  Brands, bars, and restaurants need a constant stream of
                  images—menus, specials, ads, social posts—but commissioning
                  every asset is slow and expensive. lytnt started from a simple
                  idea:{" "}
                  <span className="text-[#4E79A7]">
                    what if you could generate images in bulk from ingredients
                    and references, in any style you need?
                  </span>
                </p>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  We built lytnt so anyone who needs to create images can do it
                  at scale. You provide ingredients and references; the app
                  produces cartoon, lifelike, ad-ready, or social-style visuals
                  in bulk. Perfect for food and beverage, retail, and brands that
                  need to keep their visual content fresh without a full creative
                  team.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#CFC8CF] mb-6">
                    Built for content at scale
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    lytnt is for anyone who needs to create images: bars and
                    restaurants updating menus and specials, brands running ads
                    and social, and teams that want consistent visuals without
                    endless rounds of design. Styles range from cartoon to
                    lifelike to high-impact ad creative—all driven by your
                    ingredients and reference prompts.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Bulk generation means one setup can produce many images at
                    once, so you spend less time briefing and more time
                    publishing.
                  </p>
                </div>

                <div className="bg-[#3F395B]/50 p-8 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Deliverables
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Bulk AI image generation from ingredients and references</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Multiple styles: cartoon, lifelike, ads, social media</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Built for brands, bars, restaurants, and content teams</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Reference-driven output so visuals stay on-brand</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4E79A7] mr-2">•</span>
                      <span>Scale visual content without scaling design headcount</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* Image showcase */}
        <section className="relative py-16 md:py-32 bg-black">
          <div className="max-w-7xl mx-auto px-4">
            <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  Create the images you need
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
                  From ingredients and references to finished visuals—cartoon,
                  lifelike, ads, and social—in bulk.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {ShowcaseImages.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-[#3F395B]/30 rounded-xl overflow-hidden border border-[#4E79A7]/30 hover:border-[#4E79A7] transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] bg-slate-800">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#CFC8CF] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ContentReveal>
          </div>
        </section>

        {/* How it works */}
        <section className="relative py-16 md:py-32">
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
                <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                  How it works
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Provide ingredients and references. Choose the style—cartoon,
                  lifelike, ads, social—and generate images in bulk. Built for
                  anyone who needs to create visuals at scale.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Ingredients & references
                  </h3>
                  <p className="text-gray-300">
                    Start with what you have: ingredients, product details, or
                    reference images. lytnt uses them to drive consistent,
                    on-brand output across many images at once.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Any style you need
                  </h3>
                  <p className="text-gray-300">
                    Cartoon, lifelike, ad creative, or social—pick the style for
                    each run. One workflow supports menus, ads, and social
                    content without switching tools.
                  </p>
                </div>
                <div className="bg-[#3F395B]/50 p-6 rounded-xl border border-[#4E79A7]/30">
                  <h3 className="text-xl font-semibold text-[#CFC8CF] mb-4">
                    Bulk generation
                  </h3>
                  <p className="text-gray-300">
                    Generate many images in one go. Brands, bars, and
                    restaurants can keep feeds and menus updated without
                    commissioning every asset individually.
                  </p>
                </div>
              </div>
            </ContentReveal>
          </div>
        </section>

        <ProjectHelpCTA />
        <Footer />
      </main>
    </>
  );
}
