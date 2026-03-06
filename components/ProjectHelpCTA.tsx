"use client";

import { ContentReveal } from "@/components/ContentReveal";
import { CHAT_OPEN_WITH_PROMPT_EVENT } from "@/components/chat-modal";

const SERVICE_ITEMS = [
  "Strategy: Clarify your vision, positioning, and roadmap",
  "Software: Build modern apps, sites, and integrations",
  "Stories: AI-powered video and narrative craft",
  "Engagement: Content systems and community growth",
  "Experiences: Events and activations that connect",
];

function openChat() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(CHAT_OPEN_WITH_PROMPT_EVENT, { detail: {} })
    );
  }
}

export function ProjectHelpCTA() {
  return (
    <>
      <section className="relative py-16 md:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <ContentReveal direction="up" duration={1.2} startOffset="top 80%">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-[#CFC8CF] mb-6">
                How we can help you
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
                From strategy and software to stories, engagement, and
                experiences—we bring clarity and execution to complex challenges.
              </p>
            </div>
            <ul className="space-y-3 max-w-2xl mx-auto mb-10">
              {SERVICE_ITEMS.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-left text-gray-300"
                >
                  <span className="text-[#4E79A7] mr-3 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <button
                type="button"
                onClick={openChat}
                className="inline-block px-8 py-4 bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
              >
                Let&apos;s talk about your project
              </button>
            </div>
          </ContentReveal>
        </div>
      </section>
    </>
  );
}
