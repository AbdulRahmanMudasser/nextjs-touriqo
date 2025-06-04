import React from 'react';

interface TourCardRatingProps {
  rating: number;
}

export const TourCardRating: React.FC<TourCardRatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center mt-2">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <svg
            key={index}
            className={`h-4 w-4 ${index < rating ? 'text-[#f97316]' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.5 3 1-5.5L2 7.5l5.5-.5L10 2l2.5 5 5.5.5-3.5 4 1 5.5L10 15z" />
          </svg>
        ))}
    </div>
  );
};