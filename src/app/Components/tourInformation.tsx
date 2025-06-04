"use client";

import React from 'react';
import { Check, Globe, MapPin, Users, X } from "lucide-react";

export default function TourInformation() {
  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Included/Exclude</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Left Column - Included Items */}
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-[#1E2A44] mt-0.5 mr-3 flex-shrink-0" /> {/* Updated to dark blue */}
                <span className="text-gray-700">Pick and Drop Services</span>
              </div>

              <div className="flex items-start">
                <Check className="h-5 w-5 text-[#1E2A44] mt-0.5 mr-3 flex-shrink-0" /> {/* Updated to dark blue */}
                <span className="text-gray-700">1 Meal Per Day</span>
              </div>

              <div className="flex items-start">
                <Check className="h-5 w-5 text-[#1E2A44] mt-0.5 mr-3 flex-shrink-0" /> {/* Updated to dark blue */}
                <span className="text-gray-700">Cruise Dinner & Music Event</span>
              </div>

              <div className="flex items-start">
                <Check className="h-5 w-5 text-[#1E2A44] mt-0.5 mr-3 flex-shrink-0" /> {/* Updated to dark blue */}
                <span className="text-gray-700">Visit 7 Best Places in the City With Group</span>
              </div>
            </div>

            {/* Right Column - Excluded Items */}
            <div className="space-y-4">
              <div className="flex items-start">
                <X className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Additional Services</span>
              </div>

              <div className="flex items-start">
                <X className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Insurance</span>
              </div>

              <div className="flex items-start">
                <X className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Food & Drinks</span>
              </div>

              <div className="flex items-start">
                <X className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Tickets</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tour Amenities</h2>

          <div className="border-t border-gray-200 my-8"></div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">Tour Plan</h2>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Tour Information</h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#F7F9FF] flex items-center justify-center mr-4"> {/* Updated background */}
                  <Users className="h-5 w-5 text-[#A3BFFA]" /> {/* Updated icon color to lighter purple-blue */}
                </div>
                <div>
                  <p className="text-gray-600">Max Guests</p>
                  <p className="text-gray-800 font-medium">12</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#F7F9FF] flex items-center justify-center mr-4"> {/* Updated background */}
                  <Users className="h-5 w-5 text-[#A3BFFA]" /> {/* Updated icon color to lighter purple-blue */}
                </div>
                <div>
                  <p className="text-gray-600">Min Guests</p>
                  <p className="text-gray-800 font-medium">1</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#F7F9FF] flex items-center justify-center mr-4"> {/* Updated background */}
                  <Users className="h-5 w-5 text-[#A3BFFA]" /> {/* Updated icon color to lighter purple-blue */}
                </div>
                <div>
                  <p className="text-gray-600">Min Age</p>
                  <p className="text-gray-800 font-medium">10+</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#F7F9FF] flex items-center justify-center mr-4"> {/* Updated background */}
                  <MapPin className="h-5 w-5 text-[#A3BFFA]" /> {/* Updated icon color to lighter purple-blue */}
                </div>
                <div>
                  <p className="text-gray-600">Tour Location</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#F7F9FF] flex items-center justify-center mr-4"> {/* Updated background */}
                  <Globe className="h-5 w-5 text-[#A3BFFA]" /> {/* Updated icon color to lighter purple-blue */}
                </div>
                <div>
                  <p className="text-gray-600">Languages Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}