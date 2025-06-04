"use client";

import React from 'react';
import { CheckmarkIcon } from '../../../atoms/Homepage/QASection/CheckmarkIcon';

export const ContentBox = () => {
  return (
    <div
      style={{
        backgroundColor: '#f3f4f6',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '16px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: '#1f2937',
            margin: 0,
          }}
        >
          How Much Price About Tour & Travels
        </h4>
        <CheckmarkIcon />
      </div>
      <p
        style={{
          fontSize: '0.875rem',
          color: '#4b5563',
          marginTop: '8px',
          lineHeight: '1.5',
        }}
      >
        Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam ac elit at eros pulvinar vulput velut nisi sit placerat neque amet sapien semper tempus.
      </p>
    </div>
  );
};