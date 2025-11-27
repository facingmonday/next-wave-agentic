"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.2) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-heading"
            >
              NWA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 md:gap-8">
            <Link
              href="/strategy"
              className="text-sm md:text-base text-[#CFC8CF] px-4 py-2 rounded-lg font-medium hover:text-[#4E79A7] transition-colors"
            >
              Strategy
            </Link>
            <Link
              href="/software"
              className="text-sm md:text-base text-[#CFC8CF] px-4 py-2 rounded-lg font-medium hover:text-[#4E79A7] transition-colors"
            >
              Software
            </Link>
            <Link
              href="/storytelling"
              className="text-sm md:text-base text-[#CFC8CF] px-4 py-2 rounded-lg font-medium hover:text-[#4E79A7] transition-colors"
            >
              Stories
            </Link>
            <Link
              href="/engagement"
              className="text-sm md:text-base text-[#CFC8CF] px-4 py-2 rounded-lg font-medium hover:text-[#4E79A7] transition-colors"
            >
              Engagement
            </Link>
            <Link
              href="/experiences"
              className="text-sm md:text-base text-[#CFC8CF] px-4 py-2 rounded-lg font-medium hover:text-[#4E79A7] transition-colors"
            >
              Experiences
            </Link>
            <a
              href="#contact"
              className="text-sm md:text-base text-[#CFC8CF] px-4 py-2 rounded-lg font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[#CFC8CF] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#CFC8CF] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#CFC8CF] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-[#3f395b] transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="flex flex-col px-4 py-6 space-y-4">
          <Link
            href="/strategy"
            onClick={closeMenu}
            className="text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
          >
            Strategy
          </Link>
          <Link
            href="/software"
            onClick={closeMenu}
            className="text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
          >
            Software
          </Link>
          <Link
            href="/storytelling"
            onClick={closeMenu}
            className="text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
          >
            Stories
          </Link>
          <Link
            href="/engagement"
            onClick={closeMenu}
            className="text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
          >
            Engagement
          </Link>
          <Link
            href="/experiences"
            onClick={closeMenu}
            className="text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
          >
            Experiences
          </Link>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-base bg-[#fc05b9] text-[#CFC8CF] px-4 py-2 rounded-lg hover:bg-[#fc05b9]/90 transition-colors font-medium text-center"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
