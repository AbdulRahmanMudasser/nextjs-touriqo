import React from 'react';

interface TypeTitleProps {
  children: React.ReactNode;
  isHovered: boolean;
}

export const TypeTitle: React.FC<TypeTitleProps> = ({ children, isHovered }) => {
  return (
    <h3
      style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        color: isHovered ? '#fff' : '#1f2937',
        marginBottom: '8px',
        fontFamily: "'Montserrat', sans-serif",
        transition: 'color 0.3s ease-in-out',
      }}
    >
      {children}
    </h3>
  );
};