"use client";

import React from 'react';
import { SocialIcon } from '../atoms/Homepage/TopBar/SocialIcon';

export default function Topbar() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
      `}</style>
      <div className="w-full bg-[#1E2A44] py-4">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Address and Email */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-xs text-[#A3BFFA]">
              <span>250 Main Street, USA</span>
              <a
                href="mailto:contact@example.com"
                className="text-[#A3BFFA] hover:text-white transition-colors duration-200"
              >
                contact@example.com
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <SocialIcon platform="facebook" aria-label="Facebook" />
              <SocialIcon platform="twitter" aria-label="Twitter" />
              <SocialIcon platform="instagram" aria-label="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}