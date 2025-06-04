import React from 'react';

export const SearchButton: React.FC = () => {
  return (
    <button
      style={{
        padding: '12px 24px',
        backgroundColor: '#A3BFFA', // Updated background color
        color: '#1E2A44', // Updated text and icon color
        borderRadius: '8px',
        border: 'none',
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        whiteSpace: 'nowrap',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <svg
        style={{ width: '20px', height: '20px' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      Search
    </button>
  );
};