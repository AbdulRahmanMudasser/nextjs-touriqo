"use client";

import React from 'react';
import { FaHotel, FaMapMarkedAlt, FaHiking, FaUmbrellaBeach } from 'react-icons/fa';

export const WhatWeOfferSection = () => {
  const offers = [
    {
      icon: <FaHotel color="#D6DAFF"/>,
      title: 'Luxury Stays',
      subtitle: 'Experience world-class accommodations',
      backgroundImage: '/images/hero-bg-1.jpg',
    },
    {
      icon: <FaMapMarkedAlt color="#D6DAFF"/>,
      title: 'City Tours',
      subtitle: 'Discover vibrant city life',
      backgroundImage: '/images/hero-bg-1.jpg',
    },
    {
      icon: <FaHiking color="#D6DAFF"/>,
      title: 'Adventure Trips',
      subtitle: 'Thrilling outdoor adventures await',
      backgroundImage: '/images/hero-bg-1.jpg',
    },
    {
      icon: <FaUmbrellaBeach color="#D6DAFF"/>,
      title: 'Beach Resorts',
      subtitle: 'Relax by the sunny shores',
      backgroundImage: '/images/hero-bg-1.jpg',
    },
  ];

  return (
    <section className="py-24 bg-gray-800 bg-[url('/images/net.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay bg-fixed">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Badge */}
        <div className="mb-4">
          <p
            style={{
              fontSize: "1rem",
              color: "#D6DAFF",
              marginBottom: "1rem",
              fontWeight: 600,
              backgroundColor: "#1B1778",
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: "10px",
            }}
          >
            What We Are Offering
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-3xl text-white mb-12">
          Feel real adventure and very close to nature
        </p>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-10 rounded-3xl bg-gray-800 transition-all duration-500 overflow-hidden shadow-md hover:shadow-xl min-h-[280px]"
            >
              {/* Background Image on hover */}
              <div
                className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ backgroundImage: `url(${offer.backgroundImage})` }}
              ></div>

              {/* Overlay to darken image slightly on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-50 transition-all duration-500 rounded-3xl"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="mb-4 text-5xl text-[#f97316] group-hover:text-green-500 transition-colors duration-500">
                  {offer.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-white transition-colors duration-500">
                  {offer.title}
                </h3>

                {/* Subtitle */}
                <p className="text-base text-white group-hover:text-white transition-colors duration-500">
                  {offer.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};