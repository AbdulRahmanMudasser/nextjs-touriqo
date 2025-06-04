// src/molecules/booking/Price.tag.tsx
import React from 'react';

interface PriceTagProps {
  price: number;
  unit: string;
}

const PriceTag: React.FC<PriceTagProps> = ({ price, unit }) => {
  return (
    <div className="price-tag">
      <span>{unit}{price.toFixed(2)}</span>
    </div>
  );
};

export default PriceTag;
