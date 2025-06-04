"use client";

import React from 'react';

// Define the types for the props
interface ProgressCircleProps {
  percentage: number;
  label: string;
}

export const ProgressCircle: React.FC<ProgressCircleProps> = ({ percentage, label }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
    }}
  >
    <div
      style={{
        position: 'relative',
        width: '150px',
        height: '150px',
      }}
    >
      <svg
        viewBox="0 0 36 36"
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="#D6DAFF" // Updated to light purple-blue from the logo
          strokeWidth="2"
        />
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831"
          fill="none"
          stroke="#1E2A44" // Updated to dark blue from the logo (previously green #22c55e)
          strokeWidth="2"
          strokeDasharray={`${percentage}, 100`}
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1D197B', // Updated to dark blue from the logo
        }}
      >
        {percentage}%
      </div>
    </div>
    <p
      style={{
        marginTop: '16px',
        fontWeight: '600',
        color: '#1D197B', // Updated to dark blue from the logo
        fontSize: '1.2rem',
      }}
    >
      {label}
    </p>
  </div>
);