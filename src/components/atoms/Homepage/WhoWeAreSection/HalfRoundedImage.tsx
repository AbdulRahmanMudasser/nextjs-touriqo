"use client";

import React from 'react';
import Image from 'next/image';


export const HalfRoundedImage = () => (
  <Image
  src="/images/hero-bg-2.jpg"
  alt="Selfie outdoor camping"
  width={800}
  height={550}
  style={{
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    objectFit: 'cover',
  }}
/>
);
