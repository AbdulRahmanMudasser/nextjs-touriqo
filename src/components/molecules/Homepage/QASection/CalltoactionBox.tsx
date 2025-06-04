"use client";

import React from 'react';
import { ArrowIcon } from '../../../atoms/Homepage/QASection/ArrowIcon';

interface CallToActionBoxProps {
  title: string;
}

export const CallToActionBox = ({ title }: CallToActionBoxProps) => {
  return (
    <div
      style={{
        backgroundColor: '#f3f4f6',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <h4
        style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: '#1f2937',
          margin: 0,
        }}
      >
        {title}
      </h4>
      <ArrowIcon />
    </div>
  );
};