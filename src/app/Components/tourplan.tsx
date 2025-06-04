"use client";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function TourPlan() {
  const [openDay, setOpenDay] = useState<number | null>(null);

  const toggleDay = (dayNumber: number) => {
    if (openDay === dayNumber) {
      setOpenDay(null);
    } else {
      setOpenDay(dayNumber);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section - Tour Plan */}
        <div className="flex-1">
          <div className="space-y-4">
            {/* Day 1 */}
            <div className="rounded-md overflow-hidden">
              <button
                onClick={() => toggleDay(1)}
                className="w-full bg-[#A3BFFA] hover:bg-[#1E2A44] text-white font-medium py-4 px-6 flex justify-between items-center" // Updated button colors
              >
                <span>Day 1st</span>
                <ChevronDown className="h-5 w-5" />
              </button>
              {openDay === 1 && (
                <div className="p-4 border border-gray-200">
                  <p>Morning: Breakfast at hotel</p>
                  <p>Afternoon: City tour and sightseeing</p>
                  <p>Evening: Welcome dinner at local restaurant</p>
                </div>
              )}
            </div>

            {/* Day 2 */}
            <div className="rounded-md overflow-hidden">
              <button
                onClick={() => toggleDay(2)}
                className="w-full bg-[#A3BFFA] hover:bg-[#1E2A44] text-white font-medium py-4 px-6 flex justify-between items-center" // Updated button colors
              >
                <span>Day 2nd</span>
                <ChevronDown className="h-5 w-5" />
              </button>
              {openDay === 2 && (
                <div className="p-4 border border-gray-200">
                  <p>Morning: Visit to historical sites</p>
                  <p>Afternoon: Shopping at local market</p>
                  <p>Evening: Cultural show and dinner</p>
                </div>
              )}
            </div>

            {/* Day 3 */}
            <div className="rounded-md overflow-hidden">
              <button
                onClick={() => toggleDay(3)}
                className="w-full bg-[#A3BFFA] hover:bg-[#1E2A44] text-white font-medium py-4 px-6 flex justify-between items-center" // Updated button colors
              >
                <span>Day 3rd</span>
                <ChevronDown className="h-5 w-5" />
              </button>
              {openDay === 3 && (
                <div className="p-4 border border-gray-200">
                  <p>Morning: Adventure activities</p>
                  <p>Afternoon: Free time for relaxation</p>
                  <p>Evening: Farewell dinner</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Last Minute Deals */}
        <div className="md:w-1/3">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Last Minute Deals</h3>

            <div className="space-y-6">
              {/* Amalfi Coast Tour */}
              <div className="flex flex-col space-y-3">
                <div className="flex space-x-4">
                  <div className="w-20 h-20 relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Amalfi Coast"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      {[1, 2, 3, 4].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-[#f39c12] text-[#f39c12]" />
                      ))}
                      <Star className="h-4 w-4 fill-[#f39c12] text-[#f39c12] fill-opacity-50" />
                    </div>
                    <h4 className="font-medium text-gray-800">Walking the Amalfi Coast</h4>
                    <p className="text-sm text-gray-600">
                      From <span className="text-[#A3BFFA] font-medium">$129.00</span> {/* Updated "From" text color */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 my-2"></div>

              {/* Discovery Island Tour */}
              <div className="flex flex-col space-y-3">
                <div className="flex space-x-4">
                  <div className="w-20 h-20 relative rounded-md overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Kayak Tour"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-[#f39c12] text-[#f39c12]" />
                      ))}
                    </div>
                    <h4 className="font-medium text-gray-800">Discovery Island Kayak Tour</h4>
                    <p className="text-sm text-gray-600">
                      From <span className="text-[#A3BFFA] font-medium">$129.00</span> {/* Updated "From" text color */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}