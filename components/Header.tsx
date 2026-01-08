"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ContactFormModal } from "@/components/ContactFormModal";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-sm md:text-base text-[#CFC8CF] px-4 py-2 rounded-lg font-medium hover:text-[#4E79A7] transition-colors flex items-center gap-2"
              >
                Menu
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-[#3f395b] rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/strategy"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block text-sm md:text-base text-[#CFC8CF] px-4 py-2 hover:text-[#4E79A7] hover:bg-[#3f395b]/50 transition-colors"
                  >
                    Strategy
                  </Link>
                  <Link
                    href="/software"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block text-sm md:text-base text-[#CFC8CF] px-4 py-2 hover:text-[#4E79A7] hover:bg-[#3f395b]/50 transition-colors"
                  >
                    Software
                  </Link>
                  <Link
                    href="/storytelling"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block text-sm md:text-base text-[#CFC8CF] px-4 py-2 hover:text-[#4E79A7] hover:bg-[#3f395b]/50 transition-colors"
                  >
                    Stories
                  </Link>
                  <Link
                    href="/engagement"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block text-sm md:text-base text-[#CFC8CF] px-4 py-2 hover:text-[#4E79A7] hover:bg-[#3f395b]/50 transition-colors"
                  >
                    Engagement
                  </Link>
                  <Link
                    href="/experiences"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block text-sm md:text-base text-[#CFC8CF] px-4 py-2 hover:text-[#4E79A7] hover:bg-[#3f395b]/50 transition-colors"
                  >
                    Experiences
                  </Link>
                  <Link
                    href="/gallery"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block text-sm md:text-base text-[#CFC8CF] px-4 py-2 hover:text-[#4E79A7] hover:bg-[#3f395b]/50 transition-colors"
                  >
                    Gallery
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                openContactForm();
              }}
              className="text-sm md:text-base text-[#CFC8CF] px-4 py-2 rounded-lg font-medium hover:text-[#4E79A7] transition-colors"
            >
              Contact
            </button>
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
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2 flex items-center justify-between"
            >
              Menu
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="mt-2 pl-4 space-y-2 border-l-2 border-[#3f395b]">
                <Link
                  href="/strategy"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false);
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
                >
                  Strategy
                </Link>
                <Link
                  href="/software"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false);
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
                >
                  Software
                </Link>
                <Link
                  href="/storytelling"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false);
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
                >
                  Stories
                </Link>
                <Link
                  href="/engagement"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false);
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
                >
                  Engagement
                </Link>
                <Link
                  href="/experiences"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false);
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
                >
                  Experiences
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false);
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-[#4E79A7] transition-colors font-medium py-2"
                >
                  Gallery
                </Link>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              closeMenu();
              openContactForm();
            }}
            className="text-base bg-[#fc05b9] text-[#CFC8CF] px-4 py-2 rounded-lg hover:bg-[#fc05b9]/90 transition-colors font-medium text-center"
          >
            Contact
          </button>
        </nav>
      </div>
      <ContactFormModal isOpen={isContactFormOpen} onClose={closeContactForm} />
    </header>
  );
}
