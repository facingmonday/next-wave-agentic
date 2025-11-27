import { ContentReveal } from "./ContentReveal";

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <ContentReveal direction="opacity" duration={1}>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 font-accent">
              Next Wave Agentic
            </h3>
            <p className="text-gray-400 mb-6">
              Where creativity, technology, and storytelling are built locally
              and launched globally.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-300">
              <div>
                <p className="font-semibold mb-2">NWA Apps</p>
                <p className="text-sm">Engineering & Development</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Planet Goodtimes</p>
                <p className="text-sm">Creative & Storytelling</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Kikits</p>
                <p className="text-sm">Events & Engagement</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              © {new Date().getFullYear()} Next Wave Agentic. All rights
              reserved.
            </p>
          </div>
        </ContentReveal>
      </div>
    </footer>
  );
}
