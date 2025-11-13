"use client";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl md:text-3xl font-bold text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-heading"
            >
              NWA
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-8">
            <a
              href="#what-we-do"
              className="text-sm md:text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium"
            >
              What We Do
            </a>
            <a
              href="#ecosystem"
              className="text-sm md:text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium"
            >
              Ecosystem
            </a>
            <a
              href="#work"
              className="text-sm md:text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-sm md:text-base bg-[#fc05b9] text-[#CFC8CF] px-4 py-2 rounded-lg hover:bg-[#fc05b9]/90 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
