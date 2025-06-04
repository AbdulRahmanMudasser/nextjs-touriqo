import React from 'react';

interface DividerProps {
  isHovered: boolean;
}

export const Divider: React.FC<DividerProps> = ({ isHovered }) => {
  return (
    <div
      style={{
        width: '20px',
        height: '2px',
        backgroundColor: isHovered ? '#fff' : '#1E2A44', // Updated colors
        margin: '12px 0',
        transition: 'background-color 0.3s ease-in-out',
      }}
    />
  );
};