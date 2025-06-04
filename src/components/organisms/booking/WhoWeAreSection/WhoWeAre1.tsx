"use client";

import React from 'react';
import { HalfRoundedImage } from '../../../atoms/Booking/WhoWeAreSection/HalfRoundedImage';
import { WhoWeAreBadge } from '../../../atoms/Booking/WhoWeAreSection/WhoWeAreBadge';
import { SectionHeading } from '../../../atoms/Booking/WhoWeAreSection/SectionHeading';
import { DescriptionText } from '../../../atoms/Booking/WhoWeAreSection/DescriptionText';
import { ProgressStats } from '../../../molecules/booking/WhoWeAreSection/ProgressStats';

export const WhoWeAreSection1 = () => (
  <div style={{
    margin: '48px 0',
    padding: '48px 0',
    backgroundColor: '#f8fafc',
  }}>
    <div style={{
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '48px',
    }}>
      {/* Left Image */}
      <div style={{ flex: 1 }}>
        <HalfRoundedImage />
      </div>

      {/* Right Content */}
      <div style={{ flex: 1 }}>
        <WhoWeAreBadge />
        <SectionHeading />
        <DescriptionText />
        <ProgressStats />
      </div>
    </div>
  </div>
);
