"use client";

import React from 'react';
import { ProgressCircle } from './ProgressCircle';

export const ProgressStats = () => (
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
);