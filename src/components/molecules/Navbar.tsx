"use client";

import React, { useState, useEffect } from 'react';
import { Logo } from '../atoms/Homepage/Navbar/Logo';
import { SearchInput } from '../atoms/Homepage/Navbar/SearchInput';
import { DropdownMenu } from './DropdownMenu';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownItems = {
    home: [
      { href: "/home-1", label: "Home Layout 1" },
      { href: "/home-2", label: "Home Layout 2" }
    ],
    tours: [
      { href: "/tourslist", label: "Tours List" },
      { href: "/tours/grid", label: "Tours Grid" }
    ],
    destinations: [
      { href: "/destinations/europe", label: "Europe" },
      { href: "/destinations/asia", label: "Asia" }
    ],
    pages: [
      { href: "/about", label: "About Us" },
      { href: "/faq", label: "FAQ" }
    ],
    news: [
      { href: "/news/latest", label: "Latest News" },
      { href: "/news/archive", label: "News Archive" }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
      `}</style>

      <nav
        className={`w-full sticky top-0 z-20 transition-all duration-300 ${isScrolled ? 'bg-[#1E2A44] shadow-md' : 'bg-transparent backdrop-blur-sm'}`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-14 md:h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 scale-75 md:scale-90 lg:scale-100">
              <Logo />
            </div>
            {/* Right side - Navigation, Search and Profile */}
            <div className="flex items-center gap-1 md:gap-3">
              {/* Navigation items */}
              <div className="hidden lg:flex items-center space-x-2">
                <DropdownMenu title="Home" items={dropdownItems.home} />
                <DropdownMenu title="Tours page" items={dropdownItems.tours} />
                <DropdownMenu title="Destination" items={dropdownItems.destinations} />
                <DropdownMenu title="Pages" items={dropdownItems.pages} />
                <DropdownMenu title="News" items={dropdownItems.news} />
                <a
                  href="/contact"
                  className="text-[#A3BFFA] hover:text-[#1E2A44] transition-colors font-medium text-xs md:text-sm uppercase tracking-wide py-1.5 px-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Contact
                </a>
              </div>

              <div className="hidden sm:block">
                <SearchInput />
              </div>
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="p-1.5 rounded-full text-[#A3BFFA] hover:bg-[#1E2A44] transition-colors"
                >
                  <svg
                    className="h-4 w-4 md:h-5 md:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-[#F7F9FF] rounded-lg shadow-xl py-2 z-10 border border-[#E5EDFF]">
                    <a
                      href="/login"
                      className="block px-3 py-1.5 text-xs md:text-sm text-[#1E2A44] hover:bg-[#E5EDFF] hover:text-[#1E2A44]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Login
                    </a>
                    <a
                      href="/signup"
                      className="block px-3 py-1.5 text-xs md:text-sm text-[#1E2A44] hover:bg-[#E5EDFF] hover:text-[#1E2A44]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Sign Up
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-1.5 text-[#A3BFFA] hover:text-[#1E2A44] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="h-4 w-4 md:h-5 md:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-[#1E2A44] rounded-lg shadow-lg fixed top-14 left-0 right-0 max-h-[calc(100vh-3.5rem)] overflow-y-auto">
              <div className="px-3 py-4 space-y-3">
                <div className="sm:hidden mb-3">
                  <SearchInput />
                </div>
                <DropdownMenu title="Home" items={dropdownItems.home} />
                <DropdownMenu title="Tours page" items={dropdownItems.tours} />
                <DropdownMenu title="Destination" items={dropdownItems.destinations} />
                <DropdownMenu title="Pages" items={dropdownItems.pages} />
                <DropdownMenu title="News" items={dropdownItems.news} />
                <a
                  href="/contact"
                  className="block text-[#A3BFFA] hover:text-[#1E2A44] font-medium text-xs md:text-sm uppercase tracking-wide py-1.5"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}