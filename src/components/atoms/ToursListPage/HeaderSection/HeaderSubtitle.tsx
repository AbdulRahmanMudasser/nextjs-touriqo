import React from 'react';

interface HeaderSubtitleProps {
  children: React.ReactNode;
}

export const HeaderSubtitle: React.FC<HeaderSubtitleProps> = ({ children }) => {
  return (
    <p
      className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {children}
    </p>
  );
};