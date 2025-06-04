"use client";

import React, { useState } from "react";
import { TourListHeader } from "../../../molecules/ToursListPage/ToursListSection/TourListHeader";
import { Pagination } from "../../../molecules/ToursListPage/ToursListSection/Pagination";
import Link from "next/link";
import Image from "next/image";

export const TourListSection = () => {
  const [sortBy, setSortBy] = useState("price");
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;
  const totalTours = 18;
  const totalPages = Math.ceil(totalTours / toursPerPage);

  const tours = [
    {
      image: "/images/hero-bg-3.jpg",
      title: "Cottages In The Middle Of Beach",
      location: "Main Street, Brooklyn, NY",
      rating: 5,
      price: "$219",
      originalPrice: "$299",
      discount: "24% OFF",
      duration: "3 Days - 2 Nights",
      groupSize: "1-15",
      photoCount: 6,
      href: "/dynamic",
    },
    {
      image: "/images/hiking.jpg",
      title: "Man Standing on a Rock",
      location: "Main Street, Brooklyn, NY",
      rating: 4,
      price: "$219",
      originalPrice: "$299",
      discount: "24% OFF",
      duration: "3 Days - 2 Nights",
      groupSize: "1-15",
      photoCount: 6,
      href: "/dynamic",
    },
    {
      image: "/images/hero-bg-3.jpg",
      title: "Beautiful Floating Villa",
      location: "Main Street, Brooklyn, NY",
      rating: 5,
      price: "$219",
      originalPrice: "$299",
      discount: "24% OFF",
      duration: "3 Days - 2 Nights",
      groupSize: "1-15",
      photoCount: 6,
      href: "/dynamic",
    },
    {
      image: "/images/hiking.jpg",
      title: "North Island Adventure",
      location: "Main Street, Brooklyn, NY",
      rating: 4,
      price: "$219",
      originalPrice: "$299",
      discount: "24% OFF",
      duration: "3 Days - 2 Nights",
      groupSize: "1-15",
      photoCount: 6,
      href: "/dynamic",
    },
    {
      image: "/images/destination-newyork.jpg",
      title: "Discovery Kayak Tour",
      location: "Main Street, Brooklyn, NY",
      rating: 5,
      price: "$219",
      originalPrice: "$299",
      discount: "24% OFF",
      duration: "3 Days - 2 Nights",
      groupSize: "1-15",
      photoCount: 6,
      href: "/dynamic",
    },
    {
      image: "/images/hiking.jpg",
      title: "Walking the Amalfi Coast",
      location: "Main Street, Brooklyn, NY",
      rating: 4,
      price: "$219",
      originalPrice: "$299",
      discount: "24% OFF",
      duration: "3 Days - 2 Nights",
      groupSize: "1-15",
      photoCount: 6,
      href: "/dynamic",
    },
  ];

  const sortedTours = [...tours].sort((a, b) => {
    if (sortBy === "price") {
      return parseInt(a.price.replace("From ", "").replace("$", "")) - parseInt(b.price.replace("From ", "").replace("$", ""));
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const startIndex = (currentPage - 1) * toursPerPage;
  const paginatedTours = sortedTours.slice(startIndex, startIndex + toursPerPage);

  return (
    <div>
      <TourListHeader tourCount={totalTours} sortBy={sortBy} onSortChange={setSortBy} />

      <div className="flex flex-col space-y-8">
        {paginatedTours.map((tour, index) => (
          <div
            key={index}
            className="flex items-center space-x-8 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-50"
          >
            {/* Image Section */}
            <div className="relative w-[320px] h-[200px]">
              <Image
                src={tour.image}
                alt={tour.title}
                width={320}
                height={200}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              {/* Discount Badge */}
              {tour.discount && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {tour.discount}
                </div>
              )}
              {/* Photo Count Indicator */}
              <div className="absolute top-2 right-2 bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded flex items-center">
                <span className="mr-1 text-[#D6DAFF]">📷</span> {tour.photoCount}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-between h-[200px]">
              {/* Rating and Title */}
              <div>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-sm">{'★'.repeat(tour.rating) + '☆'.repeat(5 - tour.rating)}</span>
                  <span className="text-gray-500 text-xs ml-1">({tour.rating})</span>
                </div>
                <h3 className="text-2xl font-semibold text-black mt-2">{tour.title}</h3>
              </div>

              {/* Location and Price */}
              <div className="text-gray-600">
                <div className="flex items-center text-xl mt-2">
                  <span className="text-[#D6DAFF] mr-2">📍</span>
                  {tour.location}
                </div>
                <div className="flex items-center text-xl mt-2">
                  <span className="text-[#D6DAFF] mr-2">💵</span>
                  From <span className="line-through text-gray-400 mx-2">{tour.originalPrice}</span>
                  <span className="font-bold text-black">{tour.price}</span>
                </div>
              </div>

              {/* Duration and Group Size */}
              <div className="flex items-center text-xl text-gray-600 mt-2">
                <div className="flex items-center mr-4">
                  <span className="text-[#D6DAFF] mr-2">⏰</span>
                  {tour.duration}
                </div>
                <div className="flex items-center">
                  <span className="text-[#D6DAFF] mr-2">👥</span>
                  {tour.groupSize}
                </div>
              </div>

              {/* View Details Link */}
              <Link
                href={tour.href}
                className="text-[#D6DAFF] hover:text-[#B0B7F7] transition-colors duration-300 text-xl mt-4 inline-block hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};