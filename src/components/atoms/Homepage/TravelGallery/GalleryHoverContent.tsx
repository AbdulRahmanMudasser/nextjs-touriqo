"use client";

import React from 'react';
import { FaPlus } from 'react-icons/fa';

interface GalleryHoverContentProps {
    title: string;
    subtitle: string;
}

export const GalleryHoverContent: React.FC<GalleryHoverContentProps> = ({ title, subtitle }) => {
    return (
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
            backgroundColor: '#D6DAFF', // Changed from orange to light blue
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
    );
};