"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ContactFormModal } from "@/components/ContactFormModal";
export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

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
    if (typeof window !== "undefined" && window.location.search.includes("contact=1")) {
      router.replace(pathname);
    }
  };

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Only handle desktop dropdown when menu is not open (desktop mode)
    if (isDropdownOpen && !isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, isMenuOpen]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search.includes("contact=1")) {
      const timer = window.setTimeout(() => {
        setIsContactFormOpen(true);
      }, 0);

      return () => window.clearTimeout(timer);
    }
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-black/55 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="transition-opacity hover:opacity-90"
              aria-label="Next Wave Agentic home"
            >
              <Image
                src="/logo/NextWaveAgenticLogo.png"
                alt="Next Wave Agentic"
                width={320}
                height={64}
                className="h-8 w-auto md:h-10"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 md:gap-8">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-sm md:text-base text-[#CFC8CF] px-4 py-2 rounded-full font-medium hover:text-white transition-colors flex items-center gap-2"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
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
                <div className="absolute top-full left-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#0f0f17]/95 p-2 shadow-2xl backdrop-blur-xl z-50">
                  <Link
                    href="/strategy"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block rounded-xl px-4 py-2 text-sm md:text-base text-[#CFC8CF] transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Strategy
                  </Link>
                  <Link
                    href="/software"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block rounded-xl px-4 py-2 text-sm md:text-base text-[#CFC8CF] transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Software
                  </Link>
                  <Link
                    href="/storytelling"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block rounded-xl px-4 py-2 text-sm md:text-base text-[#CFC8CF] transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Stories
                  </Link>
                  <Link
                    href="/engagement"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block rounded-xl px-4 py-2 text-sm md:text-base text-[#CFC8CF] transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Engagement
                  </Link>
                  <Link
                    href="/experiences"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block rounded-xl px-4 py-2 text-sm md:text-base text-[#CFC8CF] transition-colors hover:bg-white/5 hover:text-white"
                  >
                    Experiences
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/blog"
              onClick={() => setIsDropdownOpen(false)}
              className="block text-sm md:text-base text-[#CFC8CF] px-4 py-2 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/gallery"
              onClick={() => setIsDropdownOpen(false)}
              className="block text-sm md:text-base text-[#CFC8CF] px-4 py-2 hover:text-white transition-colors"
            >
              Gallery
            </Link>
            <button
              onClick={() => {
                openContactForm();
              }}
              className="inline-flex items-center rounded-full border border-[#4E79A7]/35 bg-[#4E79A7] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#4E79A7]/15 transition hover:bg-[#4E79A7]/90"
            >
              Start a project
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
              className={`block w-6 h-0.5 bg-[#CFC8CF] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#CFC8CF] transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#CFC8CF] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-[#3f395b] transition-all duration-300 ease-in-out z-40 ${isMenuOpen
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col px-4 py-6 pt-4 space-y-4">
          <div className="pb-4 border-b border-[#3f395b] mb-2 flex items-center justify-between">
            <Link
              href="/"
              onClick={() => {
                closeMenu();
                setIsDropdownOpen(false);
              }}
              className="inline-block transition-opacity hover:opacity-90"
              aria-label="Next Wave Agentic home"
            >
              <Image
                src="/logo/NextWaveAgenticLogo.png"
                alt="Next Wave Agentic"
                width={320}
                height={64}
                className="h-8 w-auto"
                priority
              />
            </Link>
            <button
              onClick={() => {
                closeMenu();
                setIsDropdownOpen(false);
              }}
              className="w-8 h-8 flex items-center justify-center text-[#CFC8CF] hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              setIsDropdownOpen(false);
              router.push("/");
            }}
            className="block text-base text-[#CFC8CF] hover:text-white transition-colors font-medium py-2 w-full text-left"
          >
            Home
          </button>
          <div className="relative" ref={mobileDropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full text-base text-[#CFC8CF] hover:text-white transition-colors font-medium py-2 flex items-center justify-between"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
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
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeMenu();
                    setIsDropdownOpen(false);
                    router.push("/strategy");
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-white transition-colors font-medium py-2 w-full text-left"
                >
                  Strategy
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeMenu();
                    setIsDropdownOpen(false);
                    router.push("/software");
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-white transition-colors font-medium py-2 w-full text-left"
                >
                  Software
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeMenu();
                    setIsDropdownOpen(false);
                    router.push("/storytelling");
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-white transition-colors font-medium py-2 w-full text-left"
                >
                  Stories
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeMenu();
                    setIsDropdownOpen(false);
                    router.push("/engagement");
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-white transition-colors font-medium py-2 w-full text-left"
                >
                  Engagement
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeMenu();
                    setIsDropdownOpen(false);
                    router.push("/experiences");
                  }}
                  className="block text-base text-[#CFC8CF] hover:text-white transition-colors font-medium py-2 w-full text-left"
                >
                  Experiences
                </button>
              </div>
            )}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              setIsDropdownOpen(false);
              router.push("/blog");
            }}
            className="block text-base text-[#CFC8CF] hover:text-white transition-colors font-medium py-2 w-full text-left"
          >
            Blog
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              setIsDropdownOpen(false);
              router.push("/gallery");
            }}
            className="block text-base text-[#CFC8CF] hover:text-white transition-colors font-medium py-2 w-full text-left"
          >
            Gallery
          </button>
          <button
            onClick={() => {
              closeMenu();
              openContactForm();
            }}
            className="w-full rounded-full bg-[#4E79A7] px-5 py-3 text-left text-base font-semibold text-white transition hover:bg-[#4E79A7]/90"
          >
            Start a project
          </button>
        </nav>
      </div>
      <ContactFormModal isOpen={isContactFormOpen} onClose={closeContactForm} />
    </header>
  );
}
