"use client";

import React from 'react';
import { DestinationCard } from '../molecules/DestinationCard';

export const FeaturedDestinations: React.FC = () => {
  const destinations = [
    {
      id: 1,
      image: '/images/destination-paris.jpg',
      title: 'Paris, France',
      description: 'Discover the city of love with its iconic landmarks and charming streets.',
      href: '/destinations/paris',
    },
    {
      id: 2,
      image: '/images/destination-bali.jpg',
      title: 'Bali, Indonesia',
      description: 'Explore tropical beaches, vibrant culture, and serene temples.',
      href: '/destinations/bali',
    },
    {
      id: 3,
      image: '/images/destination-newyork.jpg',
      title: 'New York, USA',
      description: 'Experience the bustling energy of the Big Apple.',
      href: '/destinations/new-york',
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center uppercase tracking-wide mb-12">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              title={destination.title}
              description={destination.description}
              href={destination.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};