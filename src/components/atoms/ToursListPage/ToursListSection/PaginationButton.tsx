import React from 'react';

interface PaginationButtonProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium rounded-lg ${
        active
          ? 'bg-[#1E2A44] text-white' // Updated active background to dark blue
          : 'bg-[#F7F9FF] text-[#1E2A44] hover:bg-[#A3BFFA] hover:text-[#1E2A44]' // Updated inactive and hover states
      }`}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {label}
    </button>
  );
};