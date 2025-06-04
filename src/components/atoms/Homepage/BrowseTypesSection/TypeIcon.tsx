import React from 'react';

interface TypeIconProps {
  type: string;
  isHovered: boolean;
}

export const TypeIcon: React.FC<TypeIconProps> = ({ type, isHovered }) => {
  const icons = {
    'mountain-biking': (
      <svg
        style={{
          width: '40px',
          height: '40px',
          color: isHovered ? '#fff' : '#1E2A44', // Updated colors
          transition: 'color 0.3s ease-in-out',
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 3a2 2 0 00-2 2v2h-2V5a2 2 0 00-4 0v3L3 12v6h3a3 3 0 006 0h2a3 3 0 006 0h1v-6l-3-4h-2V5a2 2 0 00-2-2zm-6 13a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    ),
    'adventure': (
      <svg
        style={{
          width: '40px',
          height: '40px',
          color: isHovered ? '#fff' : '#1E2A44', // Updated colors
          transition: 'color 0.3s ease-in-out',
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2l-8 8h4v6h4v-6h4l-8-8zm-2 14v4h4v-4h-4z"
        />
      </svg>
    ),
    'beache': (
      <svg
        style={{
          width: '40px',
          height: '40px',
          color: isHovered ? '#fff' : '#1E2A44', // Updated colors
          transition: 'color 0.3s ease-in-out',
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v3m0 12v3m-9-9h3m12 0h3M5.64 5.64l2.12 2.12m10.61 10.61l2.12 2.12M5.64 18.36l2.12-2.12m10.61-10.61l2.12-2.12M12 9a3 3 0 110 6 3 3 0 010-6z"
        />
      </svg>
    ),
    'discovery': (
      <svg
        style={{
          width: '40px',
          height: '40px',
          color: isHovered ? '#fff' : '#1E2A44', // Updated colors
          transition: 'color 0.3s ease-in-out',
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 016 6c0 2-1 4-3 5l-3-3m0 0l-3 3c-2-1-3-3-3-5a6 6 0 016-6z"
        />
      </svg>
    ),
  };

  return icons[type as keyof typeof icons] || null;
};