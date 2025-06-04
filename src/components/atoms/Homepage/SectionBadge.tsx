"use client";

import React from "react";

interface SectionBadgeProps {
  label: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({ label }) => (
  <p
    style={{
      fontSize: "1rem", // Increased from 0.875rem
      color:"#D6DAFF",
      marginBottom: "1rem",
      fontWeight: 600, // Slightly bolder
      backgroundColor: "#1B1778",
      display: "inline-block",
      padding: "6px 16px", // Bigger padding
      borderRadius: "10px", // Slightly larger radius
    }}
  >
    {label}
  </p>
);
