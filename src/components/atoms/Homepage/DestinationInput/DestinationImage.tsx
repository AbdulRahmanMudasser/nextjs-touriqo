import React from 'react';
import Image from 'next/image';

interface DestinationImageProps {
  src: string;
  alt: string;
}

export const DestinationImage: React.FC<DestinationImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-48">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};