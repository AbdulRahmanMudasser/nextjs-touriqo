"use client";

import React, { useState, useEffect } from 'react';
import { GalleryCard } from '../../../molecules/Homepage/TravelGallery/GalleryCard';

export const TravelGallerySection = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);
    const [isTablet, setIsTablet] = useState(typeof window !== 'undefined' && window.innerWidth <= 1024 && window.innerWidth > 768);
  
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setIsMobile(width <= 768);
        setIsTablet(width <= 1024 && width > 768);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
     const galleryImages = [
    { image: '/images/hero-bg-1.jpg', title: 'Discovery Islands', subtitle: 'Adventure' },
    { image: '/images/hero-bg-1.jpg', title: 'Discovery Islands', subtitle: 'Adventure' },
    { image: '/images/hero-bg-1.jpg', title: 'Discovery Islands', subtitle: 'Adventure' },
    { image: '/images/hero-bg-1.jpg', title: 'Discovery Islands', subtitle: 'Adventure' },
    { image: '/images/hero-bg-1.jpg', title: 'Discovery Islands', subtitle: 'Adventure' },
  ];
  
    return (
      <section
        style={{
          padding: '24px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 16px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? 'repeat(2, 1fr)'
                : isTablet
                ? 'repeat(3, 1fr)'
                : 'repeat(5, 1fr)',
              gap: '16px',
            }}
          >
            {galleryImages.map((item, index) => (
              <GalleryCard
                key={index}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };