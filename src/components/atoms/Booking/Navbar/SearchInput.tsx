"use client";

import React, { useState, useEffect, useRef } from 'react';

export const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close the input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full text-black hover:bg-[#4b5563] transition-colors"
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 md:w-64 w-full sm:w-48 bg-white rounded-lg shadow-xl z-10 transition-all duration-300 ease-in-out transform origin-top-right"
        >
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full px-4 py-2 text-sm text-gray-700 rounded-lg focus:outline-none"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            autoFocus
          />
        </div>
      )}
    </div>
  );
};