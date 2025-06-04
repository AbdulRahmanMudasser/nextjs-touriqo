"use client";

import React from 'react';

interface PlayButtonProps {
  onClick: () => void;
  isPlaying: boolean;
}

export const PlayButton = ({ onClick, isPlaying }: PlayButtonProps) => {
  if (isPlaying) return null; // Hide the play button when video is playing

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#D6DAFF', // Updated to light blue from the logo
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <svg
        style={{ width: '24px', height: '24px', color: '#1D197B' }} // Updated to dark blue from the logo
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  );
};