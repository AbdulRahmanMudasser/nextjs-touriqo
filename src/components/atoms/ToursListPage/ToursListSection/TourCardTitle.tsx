import React from 'react';

interface TourCardTitleProps {
  children: React.ReactNode;
}

export const TourCardTitle: React.FC<TourCardTitleProps> = ({ children }) => {
  return (
    <h3
      className="text-lg font-semibold text-gray-900 mt-4"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {children}
    </h3>
  );
};