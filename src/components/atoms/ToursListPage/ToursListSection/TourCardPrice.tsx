import React from 'react';

interface TourCardPriceProps {
  price: string;
}

export const TourCardPrice: React.FC<TourCardPriceProps> = ({ price }) => {
  return (
    <p
      className="text-sm text-gray-600 mt-2"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {price}
    </p>
  );
};