import React from 'react';

interface HeaderTitleProps {
  children: React.ReactNode;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => {
  return (
    <h1
      className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {children}
    </h1>
  );
};