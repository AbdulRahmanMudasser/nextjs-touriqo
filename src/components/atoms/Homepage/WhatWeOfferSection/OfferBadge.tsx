"use client";

import React from "react";

interface OfferBadgeProps {
  label: string;
}

export const OfferBadge: React.FC<OfferBadgeProps> = ({ label }) => {
  return (
    <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full uppercase">
      {label}
    </div>
  );
};
