"use client";

import React from 'react';

interface FeatureIconProps {
  type: 'safety' | 'price' | 'guide';
}

export const FeatureIcon = ({ type }: FeatureIconProps) => {
  const icons = {
    safety: (
      <svg
        style={{ width: '16px', height: '16px', color: '#1E3A8A' }}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    price: (
      <svg
        style={{ width: '16px', height: '16px', color: '#1E3A8A' }}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.82v-1.93c-1.81-.36-3.35-1.71-3.88-3.53l2.37-.79c.34 1.03 1.28 1.82 2.43 1.82 1.01 0 1.83-.65 1.83-1.45 0-.75-.59-1.32-1.56-1.56l-1.97-.55C9.53 12.09 8 11.19 8 9.43c0-1.65 1.34-3.01 3.18-3.37V4h2.82v1.94c1.62.34 2.97 1.62 3.47 3.34l-2.37.79c-.32-.97-1.14-1.67-2.1-1.67-.96 0-1.74.62-1.74 1.38 0 .73.58 1.29 1.53 1.53l1.97.55c1.59.45 3.11 1.34 3.11 3.08 0 1.71-1.39 3.07-3.29 3.43z" />
      </svg>
    ),
    guide: (
      <svg
        style={{ width: '16px', height: '16px', color: '#1E3A8A' }}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
      </svg>
    ),
  };

  return (
    <div
      style={{
        backgroundColor: '#D6DAFF',
        borderRadius: '8px',
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '8px',
      }}
    >
      {icons[type]}
    </div>
  );
};