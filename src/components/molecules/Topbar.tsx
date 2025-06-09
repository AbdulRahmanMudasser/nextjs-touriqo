"use client";

import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Topbar() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
      `}</style>
      <div className="w-full bg-gradient-to-r from-[#1E2A44] to-[#2A3A66] py-2 shadow-lg overflow-visible">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 text-[10px] sm:text-sm text-gray-200 font-['Montserrat']">
              <div className="flex items-center gap-1 group">
                <FaMapMarkerAlt className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200 w-3 h-3 sm:w-4 sm:h-4" />
                <span className="group-hover:text-white transition-colors duration-200">250 Main Street, USA</span>
              </div>
              <a
                href="mailto:contact@example.com"
                className="flex items-center gap-1 group"
              >
                <FaEnvelope className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-200 w-3 h-3 sm:w-4 sm:h-4" />
                <span className="group-hover:text-white transition-colors duration-200">contact@example.com</span>
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-2 min-w-[100px] sm:min-w-[120px]">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-indigo-300 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-indigo-300 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-indigo-300 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-indigo-300 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}