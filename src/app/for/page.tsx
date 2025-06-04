"use client";

import React, { useState, useEffect } from 'react';
import { Logo } from '../../components/atoms/Homepage/Navbar/Logo';
import { SearchInput } from '../../components/atoms/Homepage/Navbar/SearchInput';
import { DropdownMenu } from '../../components/molecules/DropdownMenu';

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1f2937] shadow-md' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 scale-90 md:scale-100">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <DropdownMenu title="Home" items={dropdownItems.home} />
            <DropdownMenu title="Tours" items={dropdownItems.tours} />
            <DropdownMenu title="Destination" items={dropdownItems.destinations} />
            <DropdownMenu title="Pages" items={dropdownItems.pages} />
            <DropdownMenu title="News" items={dropdownItems.news} />
            <a
              href="/contact"
              className="text-white hover:text-[#22c55e] text-sm font-medium uppercase tracking-wide"
            >
              Contact
            </a>
            <SearchInput />
          </div>

          {/* Profile & Mobile Menu Icon */}
          <div className="flex items-center space-x-3">
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="p-2 rounded-full text-white hover:bg-[#4b5563] transition"
              >
                <svg
                  className="h-5 w-5"
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
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-md z-20 py-2">
                  <a
                    href="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Up
                  </a>
                </div>
              )}
            </div>

            {/* Mobile menu toggle button */}
            <button
              className="lg:hidden p-2 text-white hover:text-[#22c55e]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#1f2937] py-4 px-4 rounded-md space-y-3 mt-2">
            <div>
              <SearchInput />
            </div>
            <DropdownMenu title="Home" items={dropdownItems.home} />
            <DropdownMenu title="Tours" items={dropdownItems.tours} />
            <DropdownMenu title="Destination" items={dropdownItems.destinations} />
            <DropdownMenu title="Pages" items={dropdownItems.pages} />
            <DropdownMenu title="News" items={dropdownItems.news} />
            <a
              href="/contact"
              className="block text-white hover:text-[#22c55e] text-sm font-medium uppercase"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
