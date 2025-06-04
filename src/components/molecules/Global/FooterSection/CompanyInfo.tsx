"use client";

import React from 'react';
import { SocialIcon } from '../../../atoms/Global/FooterSection/SocialIcon';

export const CompanyInfo = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <svg
          style={{ width: '24px', height: '24px', color: '#D6DAFF', marginRight: '8px' }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
        </svg>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
          GoWilds
        </h3>
      </div>
      <p style={{ fontSize: '0.875rem', color: '#d1d5db', marginBottom: '12px' }}>
        To take trivial example which us ever undertakes laborious physical exercise except obsome.
      </p>
      <div style={{ display: 'flex' }}>
        <SocialIcon type="twitter" />
        <SocialIcon type="facebook" />
        <SocialIcon type="instagram" />
        <SocialIcon type="linkedin" />
      </div>
    </div>
  );
};