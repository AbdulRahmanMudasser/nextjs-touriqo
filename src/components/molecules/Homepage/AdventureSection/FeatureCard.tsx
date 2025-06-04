"use client";

import React from 'react';
import { FeatureIcon } from '../../../atoms/Homepage/AdventureSection/FeatureIcon';

interface FeatureCardProps {
  iconType: 'safety' | 'price' | 'guide';
  title: string;
  description: string;
}

export const FeatureCard = ({ iconType, title, description }: FeatureCardProps) => {
  return (
    <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
      <FeatureIcon type={iconType}  />
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
          {title}
        </h3>
        <p
          style={{
            fontSize: '1rem',
            color: '#4b5563',
            lineHeight: '1.2',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};