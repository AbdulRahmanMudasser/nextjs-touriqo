// components/atoms/ProfileButton.tsx
"use client";

export const ProfileButton = () => (
  <button className="p-1 rounded-full text-[#A3BFFA] hover:text-[#1E2A44] hover:bg-[#E5EDFF] transition-colors">
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </button>
);