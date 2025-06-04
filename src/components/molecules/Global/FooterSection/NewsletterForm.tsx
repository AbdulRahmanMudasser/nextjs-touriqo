"use client";

import React from 'react';

export const NewsletterForm = () => {
  return (
    <div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
        Newsletter
      </h3>
      <p style={{ fontSize: '0.875rem', color: '#d1d5db', marginBottom: '12px' }}>
        Subscribe our newsletter to get our latest update & news.
      </p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <input
          type="email"
          placeholder="Email address"
          style={{
            padding: '8px',
            borderRadius: '8px 0 0 8px',
            border: '1px solid #D6DAFF',
            outline: 'none',
            flex: '1',
            fontSize: '0.875rem',
            height: '34px', // Set explicit height for consistency
          }}
        />
        <button
          style={{
            backgroundColor: '#D6DAFF',
            color: '#1E2A44',
            padding: '8px 12px',
            borderRadius: '0 8px 8px 0',
            border: 'none',
            cursor: 'pointer',
            height: '34px', // Match input height
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            style={{ width: '16px', height: '16px', stroke: '#1E2A44' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
      <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.75rem', color: '#d1d5db' }}>
        <input type="checkbox" style={{ marginRight: '8px' }} />
        I agree to all terms and policies
      </label>
    </div>
  );
};