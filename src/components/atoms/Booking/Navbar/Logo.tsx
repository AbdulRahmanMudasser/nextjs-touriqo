"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <div className="flex items-center justify-center w-18 h-18 md:w-18 md:h-18 relative">
      <Image
        src="/images/logo.png" // Update with your actual image path
        alt="Trektoo Logo"
        fill // Makes the image fill the parent div (requires the div to be `relative`)
        className="object-contain"
        priority // Optional: loads faster on first paint
      />
    </div>
  </Link>
);
