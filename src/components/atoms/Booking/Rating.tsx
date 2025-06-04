// src/atoms/Booking/Rating.tsx
import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  reviewCount?: number;
  size?: 'sm' | 'md';
}

const Rating: React.FC<RatingProps> = ({ value, reviewCount, size = 'md' }) => {
  const starSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  
  return (
    <div className="flex items-center">
      <Star className={`${starSize} text-yellow-400 fill-current`} />
      <span className={`ml-1 font-medium ${size === 'sm' ? 'text-sm' : ''}`}>
        {value}
      </span>
      {reviewCount !== undefined && (
        <span className={`text-gray-500 ${size === 'sm' ? 'text-xs' : 'text-sm'} ml-1`}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default Rating;
