import Link from 'next/link';
import React from 'react';

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

export const HeroButton: React.FC<HeroButtonProps> = ({ href, children, variant }) => {
  const baseStyles = 'px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 text-xs md:text-sm lg:text-base font-medium uppercase tracking-wide rounded-lg transition-all duration-300';
  const variantStyles = variant === 'primary'
    ? 'bg-[#A3BFFA] text-[#1E2A44] hover:bg-[#7689F5]' // Updated primary variant
    : 'bg-transparent border-2 border-[#A3BFFA] text-[#A3BFFA] hover:bg-[#F7F9FF] hover:text-[#1E2A44]'; // Updated secondary variant

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </Link>
  );
};