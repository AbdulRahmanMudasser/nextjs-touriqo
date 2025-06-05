"use client";
import React, { useState } from "react";
import { TourListHeader } from "../../../molecules/ToursListPage/ToursListSection/TourListHeader";
import { Pagination } from "../../../molecules/ToursListPage/ToursListSection/Pagination";
import Link from "next/link";
import Image from "next/image";

export const TourListSection = ({ tours, loading }) => {
  const [sortBy, setSortBy] = useState("price");
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;
  const totalTours = tours.length;
  const totalPages = Math.ceil(totalTours / toursPerPage);

  const sortedTours = [...tours].sort((a, b) => {
    if (sortBy === "price") {
      return parseInt(a.price.replace("$", "")) - parseInt(b.price.replace("$", ""));
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

  if (loading) {
    return <div>Loading tours...</div>;
  }

  if (!tours.length) {
    return <div>No tours found.</div>;
  }

  return (
    <div>
      <TourListHeader tourCount={totalTours} sortBy={sortBy} onSortChange={setSortBy} />
      <div className="flex flex-col space-y-8">
        {paginatedTours.map((tour, index) => (
          <div
            key={index}
            className="flex items-center space-x-8 p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-50"
          >
            <div className="relative w-[320px] h-[200px]">
              <Image
                src={tour.image || "/placeholder.jpg"}
                alt={tour.title}
                width={320}
                height={200}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              {tour.discount && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {tour.discount}
                </div>
              )}
              <div className="absolute top-2 right-2 bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded flex items-center">
                <span className="mr-1 text-[#D6DAFF]">📷</span> {tour.photoCount || 0}
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between h-[200px]">
              <div>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-sm">
                    {"★".repeat(tour.rating || 0) + "☆".repeat(5 - (tour.rating || 0))}
                  </span>
                  <span className="text-gray-500 text-xs ml-1">({tour.rating || 0})</span>
                </div>
                <h3 className="text-2xl font-semibold text-black mt-2">{tour.title}</h3>
              </div>
              <div className="text-gray-600">
                <div className="flex items-center text-xl mt-2">
                  <span className="text-[#D6DAFF] mr-2">📍</span>
                  {tour.location}
                </div>
                <div className="flex items-center text-xl mt-2">
                  <span className="text-[#D6DAFF] mr-2">💵</span>
                  From{" "}
                  <span className="line-through text-gray-400 mx-2">{tour.originalPrice || ""}</span>
                  <span className="font-bold text-black">{tour.price}</span>
                </div>
              </div>
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
              <Link
                href={tour.href || "#"}
                className="text-[#D6DAFF] hover:text-[#B0B7FF] transition-colors duration-300 text-xl mt-4 inline-block hover:underline"
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