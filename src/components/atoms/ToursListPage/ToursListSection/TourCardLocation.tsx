import React from 'react';

interface TourCardLocationProps {
  location: string;
}

export const TourCardLocation: React.FC<TourCardLocationProps> = ({ location }) => {
  return (
    <p
      className="text-sm text-gray-600 mt-1"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {location}
    </p>
  );
};