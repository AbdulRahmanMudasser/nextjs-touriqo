"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { RefreshCw, Loader2 } from "lucide-react";
import Topbar from "@/components/molecules/Topbar";
import Navbar from "@/components/molecules/Navbar";
import { HeaderSection } from "../../components/organisms/Tourslistpage/HeaderSection/HeaderSection";
import { ToursListMain } from "../../components/organisms/Tourslistpage/ToursListMainSection/ToursListMain";
import { FooterSection } from "../../components/organisms/GlobalSections/FooterSection/FooterSection";
import { Banner } from "@/components/molecules/Homepage/AdventureSection/Banner";

// Define the Tour interface based on expected API response
interface Tour {
  id: string;
  name: string;
  price: number;
  // Add other properties based on your API response
  [key: string]: any; // Allow additional properties for flexibility
}

// Helper function for retryable fetch
const fetchWithRetry = async (url: string, options: RequestInit, retries = 3, delay = 300) => {
  try {
    const response = await fetch(url, options);
    if (response.ok) return response;
    if (response.status >= 500) {
      throw new Error(`Server error: ${response.status}`);
    }
    return response;
  } catch (error) {
    if (retries <= 0) throw error;
    console.log(`Retrying... (${retries} attempts left)`);
    await new Promise((resolve) => setTimeout(resolve, delay));
    const nextDelay = delay * 2 + Math.random() * 100;
    return fetchWithRetry(url, options, retries - 1, nextDelay);
  }
};

export default function ToursList() {
  const searchParams = useSearchParams();
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const cityCoordinates = {
    asia: { latitude: 34.0479, longitude: 100.6197 },
    japan: { latitude: 35.6762, longitude: 139.6503 },
    singapore: { latitude: 1.3521, longitude: 103.8198 },
    thailand: { latitude: 13.7563, longitude: 100.5018 },
    europe: { latitude: 54.5260, longitude: 15.2551 },
  };

  const fetchTours = useCallback(async () => {
    setLoading(true);
    setError(null);

    const city = searchParams.get("city");
    const checkin = searchParams.get("checkin");
    const checkout = searchParams.get("checkout");
    const adults = searchParams.get("adults");
    const children = searchParams.get("children");

    if (!city || !checkin || !checkout) {
      console.error("Missing required parameters:", { city, checkin, checkout });
      setError("Please provide city, check-in, and check-out dates.");
      setLoading(false);
      return;
    }

    const coordinates = (cityCoordinates as Record<string, { latitude: number; longitude: number }>)[
      city.toLowerCase()
    ];
    if (!coordinates) {
      console.error("Invalid city selection:", city);
      setError("Invalid city selection.");
      setLoading(false);
      return;
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!baseUrl) {
      console.error("API URL is not configured.");
      setError("API URL is not configured.");
      setLoading(false);
      return;
    }

    const endpoint = "/v1/hotel/search";
    const params = new URLSearchParams();
    params.set("checkin", checkin);
    params.set("checkout", checkout);
    params.set("residency", "gb");
    params.set("language", "en");
    params.set("currency", "EUR");
    params.set("longitude", String(coordinates.longitude));
    params.set("latitude", String(coordinates.latitude));
    params.set("radius", "150");
    params.set("guests[0][adults]", String(adults || "0"));

    const childrenCount = parseInt(children || "0");
    const childrenAges = [...Array(childrenCount).fill(10)];
    childrenAges.forEach((age, index) => {
      params.set(`guests[0][children][${index}]`, String(age));
    });

    params.set("_t", Date.now().toString());
    const url = `${baseUrl}${endpoint}?${params.toString()}`;
    console.log("Fetching URL:", url);

    try {
      const response = await fetchWithRetry(
        url,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Connection: "close",
          },
          cache: "no-store",
        },
        3
      );

      if (!response.ok) {
        let errorDetails;
        try {
          errorDetails = await response.json();
        } catch {
          errorDetails = { error: `HTTP error ${response.status}` };
        }
        const errorMessage =
          errorDetails.error || errorDetails.details || `API request failed with status ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log("API response:", data);

      if (!data.success) {
        throw new Error(data.message || "API returned unsuccessful response");
      }

      setTours(data.data || []);
    } catch (error: unknown) {
      console.error("Fetch error details:", {
        message: (error as Error)?.message,
        stack: (error as Error)?.stack,
      });
      setError((error as Error)?.message || "Request failed after multiple attempts");
      setTours([]);
    } finally {
      setLoading(false);
    }
  }, [searchParams]); // Dependencies for fetchTours

  useEffect(() => {
    fetchTours();
  }, [fetchTours]); // Depends on fetchTours memoized by useCallback

  const handleReload = () => {
    console.log("Retrying tour fetch...");
    fetchTours();
  };

  const city = searchParams.get("city") || "";

  return (
    <>
      <Topbar />
      <Navbar />
      <HeaderSection />
      {loading ? (
        <div className="max-w-2xl mx-auto p-6 text-center bg-white rounded-xl shadow-lg border border-gray-100 my-8">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 text-[#A3BFFA] animate-spin" aria-label="Loading tours" />
            <h3 className="text-xl font-semibold text-gray-800">Loading Tours</h3>
            <p className="text-gray-600 text-sm">Please wait while we fetch the best tours for you...</p>
          </div>
        </div>
      ) : error ? (
        <div className="max-w-2xl mx-auto p-6 text-center bg-white rounded-xl shadow-lg border border-[#D6DAFF] my-8 transition-all duration-300 ease-in-out">
          <div className="flex flex-col items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-red-500 animate-pulse"
              aria-label="Error icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.731 0 2.813-1.874 1.948-3.374L13.948 3.374c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>

            <h3 className="text-xl font-bold text-[#1E2A44]">Oops! Something Went Wrong</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              We encountered an issue while trying to fetch the tours.
              <br />
              Please check your internet connection or try again.
            </p>
            {error && (
              <p className="text-sm text-gray-500 italic mt-2">
                Details: {error}
              </p>
            )}
            <button
              onClick={handleReload}
              className="bg-[#D6DAFF] hover:bg-[#C4C8FF] text-[#1E2A44] font-semibold py-2 px-6 rounded-lg flex items-center justify-center mx-auto gap-2 text-sm transition-all duration-200 ease-in-out disabled:bg-gray-300 disabled:cursor-not-allowed leading-tight group"
              aria-label="Retry fetching tours"
            >
              <RefreshCw className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              <span>TRY AGAIN</span>
            </button>
          </div>
        </div>
      ) : (
        <ToursListMain tours={tours} loading={loading} city={city} />
      )}
      <Banner />
      <FooterSection />
    </>
  );
}