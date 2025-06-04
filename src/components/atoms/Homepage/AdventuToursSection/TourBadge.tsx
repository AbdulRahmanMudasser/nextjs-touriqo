import React from 'react';

interface TourBadgeProps {
  count: number;
}

export const TourBadge = ({ count }: TourBadgeProps) => {
  return (
    <div style={{
      position: 'absolute',
      top: '12px',
      left: '12px',
      backgroundColor: '#A3BFFA', // Updated to lighter purple-blue
      color: '#1E2A44', // Updated to dark blue for contrast
      fontSize: '0.75rem',
      fontWeight: 600,
      padding: '4px 12px',
      borderRadius: '12px',
      textTransform: 'uppercase',
    }}>
      {count} Tour{count !== 1 ? 's' : ''}
    </div>
  );
};