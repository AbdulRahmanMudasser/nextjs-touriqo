
"use client";

import React from 'react';

export const AdventureSidebar = () => {
  return (
    <div
      style={{
        padding: '10px',
        width: '100%',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '12px',
          lineHeight: '1.2',
        }}
      >
        Great opportunity for adventure & travels
      </h2>
      {/* FeatureCard inline for safety */}
      <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
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
            color: '#1E2A44',
            fontSize: '12px',
          }}
        >
          S
        </div>
        <div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '4px',
              lineHeight: '1.2',
            }}
          >
            Safety first always
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#4b5563',
              lineHeight: '1.2',
            }}
          >
            Aenean placerat ut lacus nec pulvinar. Donec eu ante at, commodo diam.
          </p>
        </div>
      </div>

      {/* FeatureCard inline for price */}
      <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
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
            color: '#1E2A44',
            fontSize: '12px',
          }}
        >
          P
        </div>
        <div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '4px',
              lineHeight: '1.2',
            }}
          >
            Low price & friendly
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#4b5563',
              lineHeight: '1.2',
            }}
          >
            Aenean placerat ut lacus nec pulvinar. Donec eu ante at, commodo diam.
          </p>
        </div>
      </div>

      {/* FeatureCard inline for guide */}
      <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
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
            color: '#1E2A44',
            fontSize: '12px',
          }}
        >
          G
        </div>
        <div>
          <h3
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '4px',
              lineHeight: '1.2',
            }}
          >
            Trusted travel guide
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#4b5563',
              lineHeight: '1.2',
            }}
          >
            Aenean placerat ut lacus nec pulvinar. Donec eu ante at, commodo diam.
          </p>
        </div>
      </div>
    </div>
  );
};
