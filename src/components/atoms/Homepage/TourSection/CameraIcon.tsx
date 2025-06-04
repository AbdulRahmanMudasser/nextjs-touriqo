"use client";

import React from 'react';

export const CameraIcon = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '12px',
        left: '12px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '4px 8px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.75rem',
        color: '#4b5563',
      }}
    >
      <svg
        style={{ width: '16px', height: '16px', marginRight: '4px' }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      10
    </div>
  );
};