"use client";

import React, { useRef, useState } from 'react';
import { TourCard } from '../../../molecules/Homepage/AdventuToursSection/TourCard';

export const AdventuTours = () => {
  const [tours, setTours] = useState([
    { imageUrl: '/images/hero-bg-1.jpg', tourCount: 3, destination: 'Travel to United Kingdom' },
    { imageUrl: '/images/hero-bg-1.jpg', tourCount: 3, destination: 'Travel to France' },
    { imageUrl: '/images/hero-bg-1.jpg', tourCount: 2, destination: 'Travel to Singapore' },
    { imageUrl: '/images/hero-bg-1.jpg', tourCount: 1, destination: 'Travel to Thailand' },
  ]);

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    setTours((prevTours) => {
      const newTours = [...prevTours];
      const firstTour = newTours.shift();
      if (firstTour) {
        newTours.push(firstTour);
      }
      return newTours;
    });
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    setTours((prevTours) => {
      const newTours = [...prevTours];
      const lastTour = newTours.pop();
      if (lastTour) {
        newTours.unshift(lastTour);
      }
      return newTours;
    });
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div style={{
      margin: '64px auto',
      textAlign: 'center',
      backgroundColor: '#F7F9FF', // Updated section background
      padding: '64px 16px',
      width: '100%',
      maxWidth: '1440px',
      boxSizing: 'border-box',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 16px',
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#1E2A44', // Updated heading text color
          marginBottom: '24px',
        }}>
          Explore Real Adventure
        </h2>
        <div style={{ position: 'relative', maxWidth: '100%', overflow: 'hidden' }}>
          <button
            onClick={scrollLeft}
            style={{
              position: 'absolute',
              left: isMobile ? '8px' : '0',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#F7F9FF', // Updated button background
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              visibility: 'visible',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <svg style={{ width: '20px', height: '20px', color: '#1E2A44' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref={sliderRef}
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              overflowX: isMobile ? 'visible' : 'hidden',
              scrollBehavior: 'smooth',
              gap: isMobile ? '24px' : '16px',
              padding: '16px 0',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              width: '100%',
              boxSizing: 'border-box',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {tours.map((tour, index) => (
              <div key={index} style={{
                flex: isMobile ? '1 1 100%' : '0 0 auto',
                maxWidth: isMobile ? '320px' : '300px',
                minWidth: isMobile ? '280px' : '280px',
                margin: isMobile ? '0 auto' : '0',
              }}>
                <TourCard
                  imageUrl={tour.imageUrl}
                  tourCount={tour.tourCount}
                  destination={tour.destination}
                />
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            style={{
              position: 'absolute',
              right: '32px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: '#F7F9FF', // Updated button background
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              visibility: 'visible',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <svg style={{ width: '20px', height: '20px', color: '#1E2A44' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};