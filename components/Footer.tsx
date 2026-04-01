import Link from "next/link";
import { ContentReveal } from "./ContentReveal";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black px-4 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <ContentReveal direction="opacity" duration={1}>
          <div className="agency-panel rounded-[2rem] px-8 py-12 text-center md:px-12">
            <p className="agency-kicker justify-center mb-5">Next Wave Agentic</p>
            <h3 className="mb-4 font-accent text-4xl font-semibold text-[#CFC8CF] md:text-5xl">
              Next Wave Agentic
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
              Strategy, storytelling, and digital systems for brands that want
              to launch sharper and grow with more momentum.
            </p>
            <div className="mb-10 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#CFC8CF]/70">
                Strategy
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#CFC8CF]/70">
                Websites and products
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#CFC8CF]/70">
                Campaign storytelling
              </span>
            </div>
            <div className="mb-10 flex justify-center">
              <Link
                href="/?contact=1"
                className="inline-flex items-center rounded-full bg-[#4E79A7] px-7 py-3 font-semibold text-white transition hover:bg-[#4E79A7]/90"
              >
                Start a project
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Next Wave Agentic. All rights
              reserved.
            </p>
          </div>
        </ContentReveal>
      </div>
    </footer>
  );
}
