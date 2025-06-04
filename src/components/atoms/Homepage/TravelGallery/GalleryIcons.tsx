"use client";

import React from 'react';
import { FaHeart, FaShareAlt, FaPlus } from 'react-icons/fa';

export const GalleryIcons = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px',
        opacity: 0,
        transition: 'opacity 0.3s ease',
      }}
      className="group-hover:opacity-100"
    >
      <FaHeart style={{ color: '#fff', fontSize: '20px', cursor: 'pointer' }} />
      <FaShareAlt style={{ color: '#fff', fontSize: '20px', cursor: 'pointer' }} />
      <FaPlus style={{ color: '#fff', fontSize: '20px', cursor: 'pointer' }} />
    </div>
  );
};