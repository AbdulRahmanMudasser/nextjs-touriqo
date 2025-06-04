// components/atoms/NavbarLink.tsx
import Link from 'next/link';
import React from 'react';

interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  className?: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ 
  href, 
  children, 
  hasDropdown = false,
  className = '' 
}) => (
  <Link
    href={href}
    className={`flex items-center gap-1 text-[#A3BFFA] hover:text-[#1E2A44] transition-colors font-medium text-[15px] py-2 px-3 ${className}`}
  >
    {children}
    {hasDropdown && (
      <svg 
        className="w-4 h-4 mt-0.5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    )}
  </Link>
);