"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faClock,
  faUsers,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface TourSection {
  image: string;
  title: string;
  location: string;
  price: number;
  duration: string;
  people: number;
  rating: number;
  featured: boolean;
}

const tours: TourSection[] = [
  {
    image: "/images/hero-bg-1.jpg",
    title: "Discovery Island Kayak Tour",
    location: "Main Street, Brooklyn, NY",
    price: 129,
    duration: "3 days",
    people: 10,
    rating: 5,
    featured: true,
  },
  {
    image: "/images/hero-bg-2.jpg",
    title: "Beautiful Floating Villa",
    location: "Main Street, Brooklyn, NY",
    price: 1290,
    duration: "5 days",
    people: 12,
    rating: 5,
    featured: false,
  },
  {
    image: "/images/hero-bg-3.jpg",
    title: "Yucatán Peninsula",
    location: "Main Street, Brooklyn, NY",
    price: 619,
    duration: "3 days",
    people: 8,
    rating: 4,
    featured: true,
  },
  {
    image: "/images/hero-bg-1.jpg",
    title: "Boathouse Neighborhood",
    location: "Main Street, Brooklyn, NY",
    price: 199,
    duration: "2 days",
    people: 9,
    rating: 5,
    featured: false,
  },
];

const TourCard = ({ tour }: { tour: TourSection }) => (
  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
    <button className="absolute top-3 right-3 z-10 text-[#D6DAFF] bg-black/50 p-2 rounded-full hover:bg-black">
      <FontAwesomeIcon icon={faHeart} />
    </button>

    {tour.featured && (
      <span className="absolute top-3 left-3 z-10 bg-[#D6DAFF] text-white text-xs px-2 py-1 rounded font-semibold">
        FEATURED
      </span>
    )}

    <div className="relative w-full h-56">
      <Image
        src={tour.image}
        alt={tour.title}
        layout="fill"
        objectFit="cover"
        className="w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="p-4 space-y-2">
      <div className="flex gap-1 text-yellow-400">
        {[...Array(tour.rating)].map((_, i) => (
          <FontAwesomeIcon icon={faStar} key={i} />
        ))}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{tour.title}</h3>
      <div className="flex items-center text-sm text-gray-500 gap-2">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#D6DAFF]" />
        <span>{tour.location}</span>
      </div>
      <div className="text-sm text-gray-700">
        From <span className="text-black font-semibold">${tour.price}</span>
      </div>
      <div className="flex items-center justify-between text-gray-500 text-sm pt-2">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faClock} className="text-[#D6DAFF]" />
          <span>{tour.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faUsers} className="text-[#D6DAFF]" />
          <span>{tour.people}</span>
        </div>
        <button className="text-gray-700 font-medium hover:text-[#D6DAFF] transition text-sm">
          Explore →
        </button>
      </div>
    </div>
  </div>
);

const TourSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width <= 1024 && width > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Popular Tours</h2>
        <button className="bg-[#D6DAFF] text-[#1f2937] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#B0B7F7]">
          See All
        </button>
      </div>
      <div
        className={`grid gap-4 ${
          isMobile ? "grid-cols-1" : isTablet ? "grid-cols-2" : "grid-cols-4"
        }`}
      >
        {tours.map((tour, index) => (
          <TourCard key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default TourSection;