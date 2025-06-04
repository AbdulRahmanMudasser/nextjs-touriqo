"use client";

import React from "react";
import Image from "next/image";

export const ActivityImage = () => (
  <div style={{ width: "100%", maxWidth: "900px", height: "550px", position: "relative" }}>
    <Image
      src="/images/hero-bg-1.jpg"
      alt="Couple camping in tent"
      fill
      style={{
        objectFit: "cover",
        borderRadius: "150px 150px 0 0",
      }}
      sizes="(max-width: 900px) 100vw, 900px"
      priority
    />
  </div>
);
