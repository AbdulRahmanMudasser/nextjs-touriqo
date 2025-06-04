"use client";

import React from 'react';
import { ProgressCircle } from './ProgressCircle';

export const ProgressStats = () => (
  <div style={{
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    gap: '32px',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    marginTop: '32px',
    flexDirection: 'column',
    flexWrap: 'wrap'
  }}>
    <ProgressCircle 
      percentage={50} 
      label="Satisfied Clients"
      name="satisfied-clients"
      title="Satisfied Clients"
      imageUrl="/images/destination-paris.jpg"
    />
  
  </div>
);
