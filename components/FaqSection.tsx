import { ContentReveal } from "./ContentReveal";

export const faqs = [
  {
    question: "What is an agentic workflow?",
    answer:
      "An agentic workflow is an AI design pattern where AI models are given specific tools, memory, and autonomy to execute multi-step tasks. Instead of just generating static text responses, an agentic workflow can search databases, call APIs, check human-in-the-loop validation, and run complex systems autonomously to achieve a goal.",
  },
  {
    question: "How does Next Wave Agentic use AI in healthcare?",
    answer:
      "We help health systems move beyond experimental AI pilots. We build secure, governance-first enterprise wrappers that manage PHI compliance, establish comprehensive audit trails, configure role-based dashboards, and construct EHR integration connectors, enabling organizations to scale AI safely in 90 days.",
  },
  {
    question: "What makes Nexie different from standard AI integrations?",
    answer:
      "Nexie is our proprietary intelligence layer and operating system built on OpenClaw. Rather than waiting for manual user commands, Nexie proactively observes data and events across your apps, decides on next actions using pattern analysis, and autonomously executes workflows, messaging, and content generation in real time.",
  },
  {
    question: "Where is Next Wave Agentic based?",
    answer:
      "Next Wave Agentic is based in Bentonville, Arkansas, at the intersection of active community initiatives and global technological innovation. We serve ambitious brands and organizations across Northwest Arkansas (NWA) and globally with advanced AI engineering, custom software, and cinematic storytelling.",
  },
];

export function FaqSection() {
  return (
    <section className="relative border-t border-[#3F395B]/50 py-24 md:py-32 bg-black">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <ContentReveal direction="up" duration={1.2}>
          <div className="text-center mb-16">
            <p className="agency-kicker justify-center mb-4">FAQ</p>
            <h2 className="font-heading text-4xl font-semibold text-[#CFC8CF] md:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-400">
              Clear answers to the most common questions about agentic workflows, Nexie, and our work.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                name="homepage-faq"
                className="group border border-[#3F395B]/30 rounded-2xl bg-[#201e30]/30 hover:border-[#fc05b9]/30 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 text-lg font-semibold text-[#CFC8CF] hover:text-[#4E79A7] transition-colors focus:outline-none select-none">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-400 group-open:text-[#fc05b9]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300 leading-relaxed text-base border-t border-[#3F395B]/15 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </ContentReveal>
      </div>
    </section>
  );
}
