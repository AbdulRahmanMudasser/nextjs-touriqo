"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/molecules/Navbar";
import Img from "../Components/img";
import Header from "../Components/header";
import TourInformation from "../Components/tourInformation";
import TourBooking from "../Components/tourBooking";
import TourPlan from "../Components/tourplan";
import Map from "../Components/map";
import Calender from "../Components/calender";
import ReviewScores from "../Components/reviewscore";
import TourComments from "../Components/tourComment";

// Define TypeScript interface for tour data
interface TourData {
  id: string;
  title: string;
  description: string;
  location: string;
  price: string;
  duration: string;
  rating: number;
  photoCount: number;
  discount: string;
  image: string; // Add image field
}

export default function TourDetailPage() {
  const searchParams = useSearchParams();

  // Extract query parameters with fallback values
  const tourData: TourData = {
    id: searchParams.get("id") || "unknown",
    title: searchParams.get("title") || "Unnamed Hotel",
    description: searchParams.get("description") || "None",
    location: searchParams.get("location") || "Unknown Location",
    price: searchParams.get("price") || "$199.99",
    duration: searchParams.get("duration") || "3 Days",
    rating: parseFloat(searchParams.get("rating") || "3") || 3,
    photoCount: parseInt(searchParams.get("photoCount") || "5") || 5,
    discount: searchParams.get("discount") || "",
    image: searchParams.get("image") || "/default-hotel.jpg", // Fallback image
  };

  return (
    <div className="font-sans">
      <h1 className="text-3xl font-bold text-center py-6 text-white bg-black"></h1>
      <Navbar />
      <Img /> {/* Assuming this displays a placeholder or gallery; keep it for now */}
      <Header
        id={tourData.id}
        title={tourData.title}
        location={tourData.location}
        price={tourData.price}
        duration={tourData.duration}
        rating={tourData.rating}
        photoCount={tourData.photoCount}
        discount={tourData.discount}
        image={tourData.image} // Pass image to Header
      />
      <TourBooking id={tourData.id} description={tourData.description} />
      <TourInformation />
      <TourPlan />
      <Map />
      <Calender />
      <ReviewScores />
      <TourComments />
    </div>
  );
}