"use client";

import React from "react";

interface OfferTitleProps {
  title: string;
  subtitle: string;
}

export const OfferTitle: React.FC<OfferTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mt-4 text-center">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-white/70 mt-1">{subtitle}</p>
    </div>
  );
};
