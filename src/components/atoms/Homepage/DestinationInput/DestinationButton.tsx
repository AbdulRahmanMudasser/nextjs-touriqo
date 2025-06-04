import Link from 'next/link';
import React from 'react';

interface DestinationButtonProps {
  href: string;
  children: React.ReactNode;
}

export const DestinationButton: React.FC<DestinationButtonProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="inline-block px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 transition-colors"
    >
      {children}
    </Link>
  );
};