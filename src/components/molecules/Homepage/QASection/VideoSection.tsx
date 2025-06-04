"use client";

import React, { useRef, useState } from 'react';
import { PlayButton } from '../../../atoms/Homepage/QASection/PlayButton';

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: '75%' /* Increased aspect ratio */ }}>
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '120%', /* Increased width */
          height: '120%', /* Increased height */
          objectFit: 'cover',
        }}
        src="/videos/QAVideo.mp4"
        loop
        muted
      />
      <PlayButton onClick={handlePlayPause} isPlaying={isPlaying} />
    </div>
  );
};