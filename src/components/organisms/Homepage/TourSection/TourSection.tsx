"use client";

import React, { useState, useEffect } from 'react';
import { TourCard } from '../../../molecules/Homepage/TourSection/TourCard';

export const TourSection = () => {
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

  const tours = [
    {
      image: '/images/hero-bg-1.jpg',
      title: 'Discovery Island Kayak Tour',
      location: 'Main Street, Brooklyn, NY',
      price: 'From $129.00',
      duration: '3 days',
      reviews: '10',
      rating: 5,
    },
    {
      image: '/images/hero-bg-2.jpg',
      title: 'Beautiful Floating Villa',
      location: 'Main Street, Brooklyn, NY',
      price: 'From $1290.00',
      duration: '5 days',
      reviews: '12',
      rating: 5,
    },
    {
      image: '/images/hero-bg-3.jpg',
      title: 'Yucatán Peninsula ',
      location: 'Main Street, Brooklyn, NY',
      price: 'From $619.00',
      duration: '3 days',
      reviews: '12',
      rating: 4,
    },
    {
      image: '/images/hero-bg-1.jpg',
      title: 'Boathouse Neighborhood',
      location: 'Main Street, Brooklyn, NY',
      price: 'From $199.00',
      duration: '2 days',
      reviews: '12',
      rating: 5,
    },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '32px',
        }}
      >
        <h2
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#1f2937',
            marginBottom: '16px',
          }}
        >
          Amazing tour places around the world
        </h2>
        <button
          style={{
            backgroundColor: '#D6DAFF',
        color: '#1D197B',
            fontSize: '1rem',
            fontWeight: 600,
            padding: '12px 24px',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Featured tours
        </button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '16px',
        }}
      >
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            image={tour.image}
            title={tour.title}
            location={tour.location}
            price={tour.price}
            duration={tour.duration}
            reviews={tour.reviews}
            rating={tour.rating}
          />
        ))}
      </div>
    </div>
  );
};