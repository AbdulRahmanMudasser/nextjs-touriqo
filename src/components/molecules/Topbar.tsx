"use client";

import React, { useState } from 'react';
import { TopbarLink } from '../atoms/Homepage/TopBar/TopbarLink';
import { CartButton } from '../atoms/Homepage/TopBar/CartButton';
import { SocialIcon } from '../atoms/Homepage/TopBar/SocialIcon';

export default function Topbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
      `}</style>
      <div className="w-full bg-[#1E2A44] py-4">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center relative">
            {/* Left side - Address and Email */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4 sm:mb-0 w-full sm:w-auto">
              <div className="flex items-center gap-1.5 w-full sm:w-auto justify-center">
                <svg
                  className="w-4 h-4 text-[#A3BFFA]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span
                  className="text-[#A3BFFA] text-xs"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  250 Main Street, 2nd Floor, USA
                </span>
              </div>
              <a
                href="mailto:contact@example.com"
                className="text-[#A3BFFA] hover:text-[#1E2A90] flex items-center gap-1.5 transition-colors w-full sm:w-auto justify-center"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span
                  className="text-xs"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  contact@example.com
                </span>
              </a>
            </div>

            {/* Hamburger Button for Mobile */}
            <button
              className="sm:hidden text-[#A3BFFA] hover:text-[#1E2A44] transition-colors right-4 top-4 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
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

            {/* Menu Content */}
            <div
              className={`${
                isMobileMenuOpen ? 'flex' : 'hidden'
              } sm:flex flex-col sm:flex-row items-center gap-4 fixed sm:relative inset-0 sm:inset-auto bg-[#1E2A44] sm:bg-transparent p-4 sm:p-0 mt-16 sm:mt-0 z-40 h-full sm:h-auto`}
            >
              {/* Links */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-4">
                <TopbarLink href="/booking">Booking Now</TopbarLink>
                <TopbarLink href="/about">About</TopbarLink>
              </div>

              {/* Cart Button */}
              <CartButton itemCount={0} />

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <SocialIcon platform="facebook" />
                <SocialIcon platform="twitter" />
                <SocialIcon platform="instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}