import React from 'react';
import Image from 'next/image';

interface TourCardImageProps {
  src: string;
  alt: string;
}

export const TourCardImage: React.FC<TourCardImageProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={200}
      className="w-full h-48 object-cover rounded-lg"
    />
  );
};