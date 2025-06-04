import React from 'react';

interface TourTitleProps {
  children: string;
  isHovered: boolean;
}

export const TourTitle: React.FC<TourTitleProps> = ({ children, isHovered }) => {
  const country = children.split('Travel to ')[1];

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        left: '0',
        right: '0',
        textAlign: 'center',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      {/* "Travel to" */}
      <div style={{ position: 'relative' }}>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 400,
            color: '#A3BFFA', // Updated to lighter purple-blue
            backgroundColor: 'transparent',
            margin: 0,
            position: 'relative',
            zIndex: 2,
          }}
        >
          Travel to
        </h3>
        <div
          style={{
            position: 'absolute',
            top: '70%',
            left: '0',
            width: isHovered ? '100%' : '0',
            height: '150%',
            backgroundColor: '#F7F9FF', // Updated to light purple-blue shade
            transform: 'translateY(-50%)',
            transition: 'width 0.5s ease-in-out',
            zIndex: 1,
          }}
        />
      </div>

      {/* Country name */}
      <div style={{ position: 'relative' }}>
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: isHovered ? '#1E2A44' : '#A3BFFA', // Updated to dark blue on hover, lighter purple-blue otherwise
            backgroundColor: 'transparent',
            margin: 0,
            position: 'relative',
            zIndex: 2,
            transition: 'color 0.3s ease-in-out',
          }}
        >
          {country}
        </h3>
        <div
          style={{
            position: 'absolute',
            top: '80%',
            right: '0',
            width: isHovered ? '100%' : '0',
            height: '150%',
            backgroundColor: '#F7F9FF', // Updated to light purple-blue shade
            transform: 'translateY(-50%)',
            transition: 'width 0.5s ease-in-out',
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
};