"use client";

import React from 'react';
import { HalfRoundedImage } from '../../../atoms/Homepage/WhoWeAreSection/HalfRoundedImage';

// ProgressCircle component defined directly to avoid "not defined" error
type ProgressCircleProps = {
  percentage: number;
  label: string;
};
const ProgressCircle = ({ percentage, label }: ProgressCircleProps) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  }}>
    <div style={{
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: `conic-gradient(#1E2A44 ${percentage}%, #E5E7EB ${percentage}%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        fontWeight: 500,
        color: '#1E2A44',
      }}>
        {percentage}%
      </div>
    </div>
    <span style={{
      fontSize: '0.875rem',
      color: '#1E2A44',
      fontWeight: 500,
    }}>
      {label}
    </span>
  </div>
);

export const WhoWeAreSection = () => (
  <div style={{
    margin: '48px 0',
    padding: '48px 0',
    backgroundColor: '#F7F9FF',
  }}>
    <div style={{
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '60px',
    }}>
      {/* Left Image */}
      <div style={{ flex: 1 }}>
        <HalfRoundedImage />
      </div>

      {/* Right Content */}
      <div style={{ flex: 1 }}>
        {/* WhoWeAreBadge */}
        <p
          style={{
            fontSize: '0.875rem',
            color: '#1E2A44',
            marginBottom: '16px',
            fontWeight: 500,
            backgroundColor: '#D6DAFF',
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '8px',
          }}
        >
          Who We Are
        </p>

        {/* SectionHeading */}
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '16px',
          lineHeight: '1.2',
        }}>
          Great opportunity for adventure & travels
        </h1>

        {/* DescriptionText */}
        <p style={{
          fontSize: '1rem',
          color: '#6b7280',
          marginBottom: '32px',
          lineHeight: '1.5',
        }}>
          Sit amet consectetur velit integer tincidunt sceleries nodalesry volutpat neque fermentum malesuada sceleris quecy massa lacus ultrices eget leo cras odio blandit rhoncus eues feugiat.
        </p>

        {/* ProgressStats */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '32px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            gap: '48px',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '600px',
            marginTop: '32px',
          }}
        >
          <ProgressCircle percentage={50} label="Satisfied Clients" />
          <div
            style={{
              width: '2px',
              backgroundColor: '#1E2A44',
              height: '100px',
            }}
          />
          <ProgressCircle percentage={50} label="Success Rate" />
        </div>
      </div>
    </div>
  </div>
);