"use client";

import Link from 'next/link';
import React from 'react';

interface TopbarLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const TopbarLink: React.FC<TopbarLinkProps> = ({ href, children, className = '' }) => (
  <Link
    href={href}
    className={`text-[#A3BFFA] font-medium text-xs sm:text-sm md:text-base hover:text-[#1E2A90] transition-colors ${className}`}
    style={{ fontFamily: "'Montserrat', sans-serif" }}
  >
    {children}
  </Link>
);