"use client";

import React from 'react';

export const CheckmarkIcon = () => (
  <div
    style={{
      width: '24px',
      height: '24px',
      backgroundColor: '#A3BFFA', // Updated to lighter purple-blue
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '8px',
    }}
  >
    <svg
      style={{
        width: '16px',
        height: '16px',
        color: '#1E2A44', // Updated to dark blue for contrast
      }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  </div>
);