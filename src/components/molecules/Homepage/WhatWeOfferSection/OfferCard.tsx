"use client";

import React from 'react';

interface OfferCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export const OfferCard: React.FC<OfferCardProps> = ({ icon, title, subtitle, backgroundImage }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center p-10 rounded-3xl bg-gray-800 transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl min-h-[280px]">
      {/* Background Image on hover */}
      <div
        className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay to darken image slightly on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-50 transition-all duration-500 rounded-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        <div className="mb-4 text-5xl text-[#f97316] group-hover:text-green-500 transition-colors duration-500">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-white transition-colors duration-500">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-base text-white group-hover:text-white transition-colors duration-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
