"use client";

import React from 'react';
import Image from 'next/image';

interface ProgressCircleProps {
  percentage: number;
  label: string;
  name: string;
  title: string;
  imageUrl: string;
}

export const ProgressCircle = ({
  percentage,
  label,
  name,
  title,
  imageUrl,
}: ProgressCircleProps) => {
  return (
    <div style={{ width: '100%', fontFamily: 'sans-serif' }}>
      {/* Label and percentage */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontWeight: 600, color: '#000' }}>{label}</span>
        <span style={{ color: '#6b7280', fontWeight: 500 }}>{percentage}%</span>
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: '100%',
          height: '10px',
          backgroundColor: '#e5e7eb',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            width: `${percentage}%`,
            height: '100%',
            backgroundColor: '#D6DAFF',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Profile section */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '9999px',
              padding: '3px',
              backgroundColor: '#D6DAFF',
              marginRight: '12px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={50}
              height={50}
              style={{ borderRadius: '9999px', objectFit: 'cover' }}
            />
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 700, color: '#1f2937' }}>{name}</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>{title}</p>
          </div>
        </div>
        <button
          style={{
            backgroundColor: '#D6DAFF',
            color: 'white',
            fontWeight: 600,
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Discover More
        </button>
      </div>
    </div>
  );
};