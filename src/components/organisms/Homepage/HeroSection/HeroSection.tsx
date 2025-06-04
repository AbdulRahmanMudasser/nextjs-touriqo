"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HeroContent from '../../../molecules/HeroContent';
// import { HeroContent } from '../../../molecules/HeroContent';

export const HeroSection = () => {
  const images = [
    '/images/hero-bg-1.jpg',
    '/images/hero-bg-2.jpg',
    '/images/hero-bg-3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        marginTop: '-80px',
      }}
    >
      <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 1;
          }
        }
        @media (max-width: 768px) {
          section {
            height: calc(100vh - 80px) !important;
            margin-top: -80px !important;
          }
          .hero-image {
            height: 100% !important;
            width: 100% !important;
            object-fit: cover !important;
            object-position: center !important;
          }
        }
        @media (max-width: 480px) {
          section {
            height: calc(100vh - 60px) !important;
            margin-top: -60px !important;
          }
          .hero-image {
            height: 100% !important;
            width: 100% !important;
            object-fit: cover !important;
            object-position: center !important;
            transform-origin: center !important;
          }
          @keyframes zoomIn {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.8);
              opacity: 1;
            }
          }
        }
      `}</style>
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Hero background ${index + 1}`}
          fill
          className="hero-image"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0,
            animation: index === currentImageIndex ? 'zoomIn 25s ease-in-out' : 'none',
          }}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 100vw"
          priority={index === 0}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          padding: '16px',
        }}
      >
        <HeroContent />
      </div>
    </section>
  );
};