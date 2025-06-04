"use client";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    google: typeof google;
  }
}


export default function Home() {
  const [modeOfTravel, setModeOfTravel] = useState("Walking");
  const mapRef = useRef<HTMLDivElement | null>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.6915, lng: -74.0158 },
        zoom: 12,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: 40.6915, lng: -74.0158 },
        map: map,
        title: "New Main Street, Brooklyn, NY",
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="flex items-center space-x-2">
            <span class="text-sm font-medium">New Main Street, Brooklyn, NY</span>
            <button onclick="this.parentElement.parentElement.style.display='none';" class="text-gray-500 hover:text-gray-700">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        `,
      });

      infoWindow.open(map, marker);
      googleMapRef.current = map;
    };

    const loadGoogleMaps = () => {
      if (window.google) {
        initMap();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    };

    if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      console.error('Google Maps API key is missing. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your environment variables.');
      return;
    }

    loadGoogleMaps();

    return () => {
      googleMapRef.current = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex ml-5 flex-col items-start p-4">
      <Head>
        <title>Location Map</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold mb-4">Location</h1>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <label
              htmlFor="modeOfTravel"
              className="text-sm font-medium text-gray-700"
            >
              Mode of Travel:
            </label>
            <select
              id="modeOfTravel"
              value={modeOfTravel}
              onChange={(e) => setModeOfTravel(e.target.value)}
              className="border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Walking">Walking</option>
              <option value="Driving">Driving</option>
              <option value="Public Transit">Public Transit</option>
              <option value="Cycling">Cycling</option>
            </select>
          </div>
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="relative w-full h-64 rounded-md overflow-hidden border-2 border-gray-300">
          <div ref={mapRef} className="w-full h-full" style={{ display: 'block' }}></div>
        </div>

        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
          <span>Map ©2025 Google</span>
          <div className="space-x-2">
            <a href="#" className="hover:underline">
              Keyboard shortcuts
            </a>
            <a href="#" className="hover:underline">
              Map data ©2025 Google
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Report a map error
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
