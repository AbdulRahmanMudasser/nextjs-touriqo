"use client";

import React, { useState, useEffect } from 'react';
import { Logo } from '../../atoms/Booking/Navbar/Logo';
import { SearchInput } from '../../atoms/Booking/Navbar/SearchInput';
import { DropdownMenu } from './DropdownMenu';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const dropdownItems = {
    home: [
      { href: "/home-1", label: "Home Layout 1" },
      { href: "/home-2", label: "Home Layout 2" },
    ],
    tours: [
      { href: "/tourslist", label: "Tours List" },
      { href: "/tours/grid", label: "Tours Grid" },
    ],
    destinations: [
      { href: "/destinations/europe", label: "Europe" },
      { href: "/destinations/asia", label: "Asia" },
    ],
    pages: [
      { href: "/about", label: "About Us" },
      { href: "/faq", label: "FAQ" },
    ],
    news: [
      { href: "/news/latest", label: "Latest News" },
      { href: "/news/archive", label: "News Archive" },
    ],
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
        className={`w-full sticky top-0 z-20 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0 scale-90 md:scale-100 lg:scale-125">
              <Logo />
            </div>

            {/* Right side - Navigation, Search and Profile */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Navigation items */}
              <div className="hidden lg:flex items-center space-x-2">
                <DropdownMenu title="Home" items={dropdownItems.home} />
                <DropdownMenu title="Tours page" items={dropdownItems.tours} />
                <DropdownMenu title="Destination" items={dropdownItems.destinations} />
                <DropdownMenu title="Pages" items={dropdownItems.pages} />
                <DropdownMenu title="News" items={dropdownItems.news} />
                <a
                  href="/contact"
                  className="text-black hover:text-[#22c55e] transition-colors font-medium text-sm md:text-base uppercase tracking-wide py-2 px-3"
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
                  className="p-2 rounded-full text-black hover:bg-[#4b5563] transition-colors"
                >
                  <svg
                    className="h-5 w-5 md:h-6 md:w-6"
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
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-10 border border-gray-100">
                    <a
                      href="/login"
                      className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-100 hover:text-[#22c55e]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Login
                    </a>
                    <a
                      href="/signup"
                      className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-100 hover:text-[#22c55e]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Sign Up
                    </a>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 text-black hover:text-[#22c55e] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="h-5 w-5 md:h-6 md:w-6"
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
            <div className="lg:hidden bg-[#1f2937] rounded-lg shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <div className="sm:hidden mb-4">
                  <SearchInput />
                </div>
                <DropdownMenu title="Home" items={dropdownItems.home} />
                <DropdownMenu title="Tours page" items={dropdownItems.tours} />
                <DropdownMenu title="Destination" items={dropdownItems.destinations} />
                <DropdownMenu title="Pages" items={dropdownItems.pages} />
                <DropdownMenu title="News" items={dropdownItems.news} />
                <a
                  href="/contact"
                  className="block text-black hover:text-[#22c55e] font-medium text-sm md:text-base uppercase tracking-wide py-2"
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
};