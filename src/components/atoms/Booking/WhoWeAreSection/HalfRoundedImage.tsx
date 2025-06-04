"use client";

import React from "react";
import Image from "next/image";

export const HalfRoundedImage = () => (
  <div style={{ width: "100%", maxWidth: "900px", height: "600px", position: "relative" }}>
    <Image
      src="/images/hero-bg-2.jpg"
      alt="Selfie outdoor camping"
      fill
      style={{
        borderRadius: "0",
        objectFit: "cover",
      }}
      priority // Optional: Helps with Largest Contentful Paint (LCP)
    />
  </div>
);
