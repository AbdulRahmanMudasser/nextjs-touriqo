import React from 'react';

interface TypeDescriptionProps {
  children: React.ReactNode;
  isHovered: boolean;
}

export const TypeDescription: React.FC<TypeDescriptionProps> = ({ children, isHovered }) => {
  return (
    <p
      style={{
        fontSize: '0.875rem',
        color: isHovered ? '#fff' : '#1E2A44', // Updated colors
        lineHeight: '1.5',
        fontFamily: "'Montserrat', sans-serif",
        transition: 'color 0.3s ease-in-out',
      }}
    >
      {children}
    </p>
  );
};