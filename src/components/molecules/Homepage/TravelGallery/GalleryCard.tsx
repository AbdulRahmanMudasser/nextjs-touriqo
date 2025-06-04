
"use client";

import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { FaPlus } from 'react-icons/fa';

interface GalleryCardProps {
    image: string;
    title: string;
    subtitle: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ image, title, subtitle }) => {
  return (
    <div
      className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      style={{
        width: '100%',
        height: '200px',
        backgroundColor: '#1f2937',
      }}
    >
      {/* Image (visible by default, hidden on hover) */}
      <Image
        src={image}
        alt={title}
        layout="fill" // Make it cover the container
        objectFit="cover" // Ensures proper scaling and positioning
        quality={75} // Optional: Adjusts image quality for optimization
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Overlay with Hover Content (visible on hover) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
      >
        {/* GalleryHoverContent inline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            opacity: 100,
            transition: 'opacity 0.3s ease',
          }}
          className="group-hover:opacity-100"
        >
          {/* Plus Icon */}
          <div
            style={{
              backgroundColor: '#D6DAFF',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
            }}
          >
            <FaPlus style={{ color: '#fff', fontSize: '20px' }} />
          </div>
          {/* Title */}
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#fff',
              textTransform: 'capitalize',
            }}
          >
            {title}
          </h3>
          {/* Subtitle */}
          <p
            style={{
              fontSize: '0.875rem',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
