"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


export const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <div className="flex items-center justify-center w-25 h-25 md:w-25 md:h-25 ">

<Image
  src="/images/logo.png"
  alt="Trektoo Logo"
  width={100}
  height={100}
  className="object-contain"
/>
    </div>
  
  </Link>
);