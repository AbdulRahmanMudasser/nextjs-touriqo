"use client";

import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Topbar() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
      `}</style>
      <div className="w-full max-w-none bg-gradient-to-r from-[#1E2A44] to-[#2A3A66] py-1 shadow-sm overflow-visible">
        <div className="w-full max-w-[1408px] mx-auto px-2 sm:px-2 md:px-3 lg:px-4 overflow-visible">
          <div className="flex flex-row flex-nowrap justify-between items-center gap-1 sm:gap-1 md:gap-1.5 lg:gap-2 min-h-fit">
            {/* Contact Info */}
            <div className="flex flex-nowrap justify-start items-center gap-1 sm:gap-1 md:gap-1.5 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] text-gray-200 font-['Montserrat']">
              <div className="flex items-center gap-0.5 group">
                <FaMapMarkerAlt className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200 w-2 h-2 sm:w-2.5 md:w-3 lg:w-3.5 sm:h-2.5 md:h-3 lg:h-3.5" />
                <span className="group-hover:text-white transition-colors duration-200">250 Main St, USA</span>
              </div>
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-0.5 group"
              >
                <FaEnvelope className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200 w-2 h-2 sm:w-2.5 md:w-3 lg:w-3.5 sm:h-2.5 md:h-3 lg:h-3.5" />
                <span className="group-hover:text-white transition-colors duration-200">contact@example.com</span>
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex flex-nowrap items-center gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2 min-w-[70px] sm:min-w-[80px] md:min-w-[90px] lg:min-w-[100px]">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-indigo-300 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="w-2 h-2 sm:w-2.5 md:w-3 lg:w-3.5 sm:h-2.5 md:h-3 lg:h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-indigo-300 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-2 h-2 sm:w-2.5 md:w-3 lg:w-3.5 sm:h-2.5 md:h-3 lg:h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-indigo-300 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-2 h-2 sm:w-2.5 md:w-3 lg:w-3.5 sm:h-2.5 md:h-3 lg:h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-indigo-300 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-2 h-2 sm:w-2.5 md:w-3 lg:w-3.5 sm:h-2.5 md:h-3 lg:h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}