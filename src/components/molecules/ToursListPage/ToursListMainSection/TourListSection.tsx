"use client";
import React, { useState, useEffect } from "react";
import { TourListHeader } from "../../../molecules/ToursListPage/ToursListSection/TourListHeader";
import { Pagination } from "../../../molecules/ToursListPage/ToursListSection/Pagination";
import Link from "next/link";
import Image from "next/image";

// Define TypeScript interface for tour data
interface Tour {
  id: string;
  name?: string;
  images?: string[];
  stars?: string;
  latitude?: number;
  longitude?: number;
  rooms?: { price?: string; rate?: string }[];
  duration?: string;
  groupSize?: string;
  discount?: string;
  description?: string;
}

// Helper function to extract lowest price from rooms
const getLowestPrice = (rooms?: { price?: string; rate?: string }[]) => {
  if (!rooms || !Array.isArray(rooms) || rooms.length === 0) return "$199.99";
  const prices = rooms
    .map((room) => parseFloat(room.price || room.rate || "0"))
    .filter((price) => price > 0);
  return prices.length > 0 ? `$${Math.min(...prices).toFixed(2)}` : "$199.99";
};

// Reverse geocode using Geoapify API
const reverseGeocode = async (latitude: number, longitude: number) => {
  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url, { cache: "force-cache" });
    if (!response.ok) {
      throw new Error(`Geoapify API error: ${response.status}`);
    }
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      const address = data.features[0].properties;
      return address.formatted || `${address.city || "Unknown"}, ${address.country || "Unknown"}`;
    }
    return "Unknown Location";
  } catch (error) {
    console.error("Reverse geocoding failed:", error);
    return "Unknown Location";
  }
};

// Helper function to validate image URL
const isValidImageUrl = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      redirect: "follow",
    });
    const contentType = response.headers.get("content-type");
    const isImage = contentType?.startsWith("image/");
    if (!response.ok || !isImage) {
      console.warn(`Invalid image URL: ${url}, status: ${response.status}, content-type: ${contentType}`);
      return false;
    }
    console.log(`Valid image URL: ${url}`);
    return true;
  } catch (error) {
    console.error(`Image validation failed for ${url}:`, error);
    return false;
  }
};

// Skeleton Loader Component
const TourCardSkeleton = () => (
  <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse border border-gray-100">
    <div className="w-full md:w-[320px] h-[200px] bg-gray-200"></div>
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
      <div className="space-y-3">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="flex gap-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded w-1/3"></div>
      </div>
    </div>
  </div>
);

interface TourListSectionProps {
  tours: Tour[];
  loading: boolean;
  city?: string;
}

export const TourListSection = ({ tours, loading }: TourListSectionProps) => {
  const [sortBy, setSortBy] = useState<"name" | "price" | "rating">("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [tourLocations, setTourLocations] = useState<{ [key: string]: string }>({});
  const [imageUrls, setImageUrls] = useState<{ [key: string]: string }>({});
  const toursPerPage = 6;
  const totalTours = tours.length;
  const totalPages = Math.ceil(totalTours / toursPerPage);

  // Log tours data for debugging
  useEffect(() => {
    console.log("Received tours data:", tours);
    tours.forEach((tour) => {
      console.log(`Tour name: ${tour.name}, Images: ${JSON.stringify(tour.images)}`);
    });
  }, [tours]);

  // Fetch locations for tours
  useEffect(() => {
    const fetchLocations = async () => {
      const locations: { [key: string]: string } = {};
      for (const tour of tours) {
        if (tour.latitude && tour.longitude) {
          locations[tour.id] = await reverseGeocode(tour.latitude, tour.longitude);
        } else {
          locations[tour.id] = "Unknown Location";
        }
      }
      setTourLocations(locations);
    };
    if (tours.length) {
      fetchLocations();
    }
  }, [tours]);

  // Validate and set image URLs
  useEffect(() => {
    const validateImages = async () => {
      const validatedImages: { [key: string]: string } = {};
      for (const tour of tours) {
        let imageUrl = "/default-hotel.jpg";
        console.log(`Processing tour: ${tour.name}, ID: ${tour.id}`);

        if (tour.images && tour.images.length > 0) {
          const rawUrl = tour.images[0];
          const formattedUrl = rawUrl.includes("{size}") ? rawUrl.replace("{size}", "1024x768") : rawUrl;
          console.log(`Trying tour image for ${tour.name}: ${formattedUrl}`);
          if (await isValidImageUrl(formattedUrl)) {
            imageUrl = formattedUrl;
            console.log(`Using tour image for ${tour.name}: ${imageUrl}`);
          } else {
            console.warn(`Invalid tour image URL for ${tour.id}: ${formattedUrl}`);
          }
        } else {
          console.log(`No tour images available for ${tour.name}, using fallback: ${imageUrl}`);
        }
        validatedImages[tour.id] = imageUrl;
      }
      setImageUrls(validatedImages);
      console.log("Validated image URLs:", validatedImages);
    };
    if (tours.length) {
      validateImages();
    }
  }, [tours]);

  // Map API data to expected tour format with dummy data
  const mappedTours = tours.map((tour) => ({
    id: tour.id || "unknown",
    title: tour.name || "Unnamed Hotel",
    image: imageUrls[tour.id] || "/default-hotel.jpg",
    rating: parseInt(tour.stars || "3") || 3,
    location: tourLocations[tour.id] || "Unknown Location",
    price: getLowestPrice(tour.rooms),
    duration: tour.duration || "3 Days",
    groupSize: tour.groupSize || "Up to 10",
    discount: tour.discount || "",
    photoCount: tour.images ? tour.images.length : 5,
    description: tour.description || "None",
  }));

  const sortedTours = [...mappedTours].sort((a, b) => {
    if (sortBy === "price") {
      const priceA = parseFloat(a.price.replace("$", "")) || 0;
      const priceB = parseFloat(b.price.replace("$", "")) || 0;
      return priceA - priceB;
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
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, index) => (
          <TourCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!tours.length) {
    return <div className="text-center text-gray-600 text-lg font-medium">No hotels found.</div>;
  }

  return (
    <div className="space-y-8">
      <TourListHeader tourCount={totalTours} sortBy={sortBy} onSortChange={setSortBy} />
      <div className="grid grid-cols-1 gap-8">
        {paginatedTours.map((tour, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            role="article"
            aria-label={`Hotel: ${tour.title}`}
          >
            <div className="relative w-full md:w-[320px] h-[280px]">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="/default-hotel.jpg"
                onError={(e) => {
                  console.warn(`Failed to load image for ${tour.title}: ${tour.image}`);
                  e.currentTarget.src = "/default-hotel.jpg";
                }}
              />
              {tour.discount && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {tour.discount}
                </div>
              )}
              <div className="absolute top-4 right-4 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full flex items-center">
                <span className="mr-1.5">📷</span> {tour.photoCount}
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-base">
                    {"★".repeat(tour.rating) + "☆".repeat(5 - tour.rating)}
                  </span>
                  <span className="text-gray-500 text-xs font-medium">({tour.rating})</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 truncate">{tour.title}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="mr-2">📍</span>
                  {tour.location}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">{tour.price}</span>
                  <span className="text-sm text-gray-500">/ night</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-6">
                  <div className="flex items-center">
                    <span className="mr-2">⏰</span>
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">👥</span>
                    {tour.groupSize}
                  </div>
                </div>
                <Link
                  href={{
                    pathname: "/hotel",
                    query: {
                      id: tour.id,
                      title: tour.title,
                      location: tour.location,
                      price: tour.price,
                      duration: tour.duration,
                      rating: tour.rating,
                      photoCount: tour.photoCount,
                      discount: tour.discount,
                      description: tour.description,
                      image: tour.image, // Add image URL to query
                    },
                  }}
                  className="inline-block bg-gradient-to-r from-[#B0B7FF] to-[#D6DAFF] text-white font py-2 px-5 rounded-xl hover:from-[#A0A7FF] hover:to-[#C6CAFF] transition-all duration-300 text-center"
                  aria-label={`View details for ${tour.title}`}
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};