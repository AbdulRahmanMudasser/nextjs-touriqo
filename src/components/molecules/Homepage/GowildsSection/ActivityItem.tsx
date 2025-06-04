
"use client";

import React from 'react';

interface ActivityItemProps {
  activity: string;
}

export const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#F7F9FF',
      borderRadius: '8px',
      padding: '8px 16px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}
  >
    {/* CheckmarkIcon inline */}
    <div
      style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#A3BFFA',
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
          color: '#1E2A44',
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span
      style={{
        fontSize: '1rem',
        color: '#1E2A44',
        fontWeight: 500,
      }}
    >
      {activity}
    </span>
  </div>
);