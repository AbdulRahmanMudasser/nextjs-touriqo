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
    className={`flex items-center gap-1 text-green hover:text-blue-600 transition-colors font-medium text-[15px] py-2 px-3 md:px-3 sm:px-2 xs:px-1 ${className}`}
  >
    {children}
    {hasDropdown && (
      <svg 
        className="w-4 h-4 mt-0.5 md:w-4 md:h-4 sm:w-3 sm:h-3 xs:w-2 xs:h-2" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    )}
  </Link>
);