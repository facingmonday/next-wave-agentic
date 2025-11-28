"use client";

import { useEffect } from "react";
import { ContentReveal } from "@/components/ContentReveal";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 z-0"
        onClick={(e) => e.stopPropagation()}
      />

      {/* MODAL CONTAINER */}
      <div className="relative z-10 flex min-h-full items-center justify-center px-4 py-10">
        <div
          className="w-full max-w-3xl transform transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-[#201E30] rounded-2xl shadow-2xl border border-[#3F395B] p-8 md:p-12">
            <ContentReveal direction="up" duration={1.2}>
              <h2
                id="modal-title"
                className="text-4xl md:text-6xl font-bold text-[#CFC8CF] mb-2 text-center"
              >
                Let&apos;s Build Something
              </h2>
              <p className="text-lg text-gray-300 mb-8 text-center">
                Ready to start your project? Let&apos;s bring your vision to
                life.
              </p>
            </ContentReveal>

            <ContentReveal direction="scale" duration={1}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF] placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF] placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                  >
                    Business/Organization
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF] placeholder-gray-500"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                  >
                    What are you looking to build?
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF] placeholder-gray-500"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF]"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-semibold text-[#CFC8CF] mb-2"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="w-full px-4 py-3 bg-[#201E30] border border-[#3F395B] rounded-lg focus:ring-2 focus:ring-[#4E79A7] focus:border-[#4E79A7] text-[#CFC8CF]"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3months">1–3 months</option>
                      <option value="3-6months">3–6 months</option>
                      <option value="6-12months">6–12 months</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="w-full bg-[#4E79A7] text-[#CFC8CF] font-semibold text-lg py-4 px-8 rounded-lg hover:bg-[#4E79A7]/90 transition-colors"
                >
                  Let&apos;s Build Something
                </button>
              </form>
            </ContentReveal>

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="mt-8 w-full text-center text-gray-400 hover:text-gray-200 underline text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
