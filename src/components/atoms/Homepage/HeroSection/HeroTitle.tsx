import React from 'react';

interface HeroTitleProps {
  children: React.ReactNode;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({ children }) => {
  return (
    <h1
      style={{
        fontSize: '1.8rem',
        fontWeight: 800,
        color: '#A3BFFA', 
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        lineHeight: '1.2',
        fontFamily: "'Montserrat', sans-serif",
      }}
      className="text-[1.8rem] md:text-5xl transition-all duration-300"
    >
      {children}
    </h1>
  );
};