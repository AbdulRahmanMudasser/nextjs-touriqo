import React from 'react';

interface HeroSubtitleProps {
  children: React.ReactNode;
}

export const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ children }) => {
  return (
    <p
      style={{
        marginTop: '16px',
        fontSize: '0.875rem',
        color: '#A3BFFA',
        maxWidth: '100%',
        padding: '0 16px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: "'Montserrat', sans-serif",
        lineHeight: '1.5',
      }}
      className="text-sm sm:text-base md:text-lg lg:text-xl"
    >
      {children}
    </p>
  );
};