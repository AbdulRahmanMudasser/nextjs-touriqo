
import React from 'react';
import Link from 'next/link';

interface TourCardButtonProps {
  href: string;
}

export const TourCardButton: React.FC<TourCardButtonProps> = ({ href }) => {
  return (
    <Link
      href={href}
      className="inline-block mt-4 px-4 py-2 bg-[#28a745] text-white text-sm uppercase font-medium rounded-lg hover:bg-[#22c55e] transition-colors"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      Explore
    </Link>
  );
};