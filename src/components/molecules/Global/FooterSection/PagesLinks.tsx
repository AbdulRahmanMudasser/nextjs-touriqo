"use client";

import React from 'react';

export const PagesLinks = () => {
  const links = [
    'About us',
    'Community Blog',
    'Work with Us',
    'Privacy Policy',
    'Contact us',
  ];

  return (
    <div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
        Pages
      </h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links.map((link, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            <a
              href="#"
              style={{ fontSize: '0.875rem', color: '#d1d5db', textDecoration: 'none' }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};