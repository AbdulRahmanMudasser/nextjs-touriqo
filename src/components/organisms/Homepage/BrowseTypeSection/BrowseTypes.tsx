"use client";

import React, { useRef } from 'react';
import { TypeCard } from '../../../molecules/Homepage/BrowseTypesSection/TypeCard';

export const BrowseTypes = () => {
  const types = [
    { title: 'Adventure', type: 'adventure', description: 'Lorem ipsum is simply sit of free text dolor.' },
    { title: 'Discovery', type: 'discovery', description: 'Lorem ipsum is simply sit of free text dolor.' },
    { title: 'Mountain Biking', type: 'mountain-biking', description: 'Lorem ipsum is simply sit of free text dolor.' },
    { title: 'Adventure', type: 'adventure', description: 'Lorem ipsum is simply sit of free text dolor.' },
    { title: 'Beache', type: 'beache', description: 'Lorem ipsum is simply sit of free text dolor.' },
  ];

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      // Card width (200px) + gap (8px) = 208px
      sliderRef.current.scrollBy({ left: -208, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      // Card width (200px) + gap (8px) = 208px
      sliderRef.current.scrollBy({ left: 208, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative -mt-20 text-center">
      <div className="relative max-w-6xl mx-auto px-6">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#F7F9FF] rounded-full w-6 h-6 flex items-center justify-center cursor-pointer z-10"
        >
          <svg className="w-3 h-3 text-[#1E2A44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth gap-2 p-1 hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {types.map((type, index) => (
            <div key={index} className="flex-shrink-0 snap-center">
              <TypeCard
                title={type.title}
                type={type.type}
                description={type.description}
              />
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#F7F9FF] rounded-full w-6 h-6 flex items-center justify-center cursor-pointer z-10"
        >
          <svg className="w-3 h-3 text-[#1E2A44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};