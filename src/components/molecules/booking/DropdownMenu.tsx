"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface DropdownMenuProps {
  title: string;
  items: { href: string; label: string }[];
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-black hover:text-[#22c55e] transition-colors font-medium text-sm uppercase tracking-wide py-2 px-3 focus:outline-none"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {title}
        <svg
          className={`w-4 h-4 text-[#22c55e] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {(isOpen || true) && (
        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-10 border border-gray-100 lg:group-hover:block lg:hidden">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#22c55e] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};