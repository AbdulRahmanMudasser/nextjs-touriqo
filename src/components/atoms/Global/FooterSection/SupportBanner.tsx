"use client";

import React from 'react';

export const SupportBanner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 0',
        borderBottom: '1px solid #4b5563',
        marginBottom: '24px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg
          style={{ width: '24px', height: '24px', color: '#D6DAFF', marginRight: '8px' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span style={{ fontSize: '0.875rem', color: '#fff' }}>
          Need any support for tour & travels?
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: '0.875rem', color: '#fff', marginRight: '8px' }}>
          Ready to Get Started With Vacations!
        </span>
        <svg
          style={{ width: '24px', height: '24px', color: '#D6DAFF' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};