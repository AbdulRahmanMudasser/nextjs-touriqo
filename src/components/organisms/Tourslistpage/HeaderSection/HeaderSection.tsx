import React from 'react';
import Image from 'next/image';
import { HeaderContent } from '../../../molecules/ToursListPage/HeaderSection/HeaderContent';

export const HeaderSection = () => {
  return (
<section className="relative w-full h-96 -mt-0">
<Image
        src="/images/hero-bg-2.jpg"
        alt="Tours background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <HeaderContent />
      </div>
    </section>
  );
};