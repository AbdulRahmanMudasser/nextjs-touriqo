"use client";

import React from 'react';

interface CartButtonProps {
  itemCount?: number;
}

export const CartButton: React.FC<CartButtonProps> = ({ itemCount = 0 }) => (
  <button
    className="relative p-1.5 text-[#A3BFFA] hover:text-[#1E2A44] transition-colors"
    aria-label={`Cart with ${itemCount} items`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 lg:h-5 lg:w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    {itemCount > 0 && (
      <span
        className="absolute -top-1 -right-1 bg-[#A3BFFA] text-[#1E2A44] text-[10px] sm:text-xs rounded-full h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {itemCount}
      </span>
    )}
  </button>
);