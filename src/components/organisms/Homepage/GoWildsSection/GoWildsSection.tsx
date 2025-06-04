"use client";

import React from 'react';
import { TextContent } from '../../../molecules/Homepage/GowildsSection/TextContent';
import { ActivityItem } from '../../../molecules/Homepage/GowildsSection/ActivityItem';
import { ActivityImage } from '../../../atoms/Homepage/GowildsSection/ActivityImage';

export const GowildsSection = () => {
  const activities = [
    'Family Camping',
    'Wild Camping',
    'Fishing',
    'Mountain Biking',
    'Luxury Cabin',
    'Couple Camping',
  ];

  // Predefined slight rotations
  const rotations = ['-5deg', '5deg', '-3deg', '3deg', '-4deg', '4deg'];

  return (
    <div style={{
      margin: '80px 0',
      backgroundColor: '#F7F9FF', // Updated to light purple-blue shade
      padding: '80px 0',
    }}>
      <div style={{
        maxWidth: '1050px',
        margin: '0 auto',
        padding: '-100px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
      }}>
        {/* Left Side: Text Content and Activities */}
        <div style={{
          flex: 1,
        }}>
          <TextContent />
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '26px',
            marginTop: '32px',
          }}>
            {activities.map((activity, index) => (
              <div 
                key={index}
                style={{
                  transform: `rotate(${rotations[index % rotations.length]})`,
                  transition: 'transform 0.3s ease',
                }}
              >
                <ActivityItem activity={activity} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}>
          <ActivityImage />
        </div>
      </div>
    </div>
  );
};