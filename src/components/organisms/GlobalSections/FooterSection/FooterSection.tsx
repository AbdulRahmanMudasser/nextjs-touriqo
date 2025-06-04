"use client";

import React, { useState, useEffect } from 'react';
import { SupportBanner } from '../../../atoms/Global/FooterSection/SupportBanner';
import { CompanyInfo } from '../../../molecules/Global/FooterSection/CompanyInfo';
import { PagesLinks } from '../../../molecules/Global/FooterSection/PagesLinks';
import { NewsletterForm } from '../../../molecules/Global/FooterSection/NewsletterForm';
import { ContactInfo } from '../../../molecules/Global/FooterSection/ContactInfo';

export const FooterSection = () => {
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

  return (
    <footer
      style={{
        backgroundColor: '#1E2A44',
        color: '#fff',
        padding: '48px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
        <SupportBanner />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '24px',
            marginBottom: '24px',
          }}
        >
          <CompanyInfo />
          <PagesLinks />
          <NewsletterForm />
          <ContactInfo />
        </div>
        <div
          style={{
            borderTop: '1px solid #4b5563',
            paddingTop: '16px',
            textAlign: 'center',
            fontSize: '0.75rem',
            color: '#d1d5db',
          }}
        >
          © 2023 Copyright by GoWilds. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};