"use client";

import React from 'react';
import Image from 'next/image';

interface TourCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  duration: string;
  reviews: string;
  rating: number;
}

export const TourCard = ({ image, title, location, price, duration, reviews, rating }: TourCardProps) => {
  return (
    <div
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '300px',
        margin: '0 auto',
      }}
    >
      {/* Image Section */}
      <div style={{ position: 'relative', height: '200px' }}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={75}
        />
        {/* FeaturedLabel */}
        <div
          style={{
            backgroundColor: '#D6DAFF',
            color: '#1D197B',
            position: 'absolute',
            top: '12px',
            left: '12px',
            fontSize: '0.75rem',
            fontWeight: 600,
            padding: '4px 12px',
            borderRadius: '12px',
          }}
        >
          FEATURED
        </div>
        {/* HeartIcon */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <svg
            style={{ width: '16px', height: '16px', color: '#4b5563' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        {/* CameraIcon */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.75rem',
            color: '#4b5563',
          }}
        >
          <svg
            style={{ width: '16px', height: '16px', marginRight: '4px' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          10
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '16px' }}>
        {/* StarRating */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              style={{ width: '16px', height: '16px', color: index < rating ? '#f59e0b' : '#d1d5db', marginRight: '2px' }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        <h3
          style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#1D197B',
            marginBottom: '8px',
          }}
        >
          {title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <svg
            style={{ width: '16px', height: '16px', color: '#1D197B', marginRight: '4px' }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
          </svg>
          <span style={{ fontSize: '0.875rem', color: '#1D197B' }}>{location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <svg
            style={{ width: '16px', height: '16px', color: '#1D197B', marginRight: '4px' }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
          <span style={{ fontSize: '0.875rem', color: '#1D197B' }}>{duration}</span>
          <svg
            style={{ width: '16px', height: '16px', color: '#1D197B', marginLeft: '8px', marginRight: '4px' }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span style={{ fontSize: '0.875rem', color: '#1D197B' }}>{reviews}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.875rem', color: '#1D197B' }}>{price}</span>
          <button
            style={{
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: 600,
              cursor: 'pointer',
              color: '#1D197B',
            }}
          >
            EXPLORE →
          </button>
        </div>
      </div>
    </div>
  );
};