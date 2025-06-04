"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const LastMinuteDeals = () => {
  return (
    <div className="w-full md:w-80 p-2 flex flex-col space-y-4">
      {/* Box 1: Amalfi Coast Tour */}
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Last Minute Deal</h3>
        <div className="flex space-x-3">
          <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
            <Image
              src="/images/hero-bg-1.jpg"
              alt="Travel"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-1">
              {[1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-[#f39c12] text-[#f39c12]"
                />
              ))}
              <Star
                className="h-3 w-3 fill-[#f39c12] text-[#f39c12] fill-opacity-50"
              />
            </div>
            <h4 className="font-medium text-gray-800 text-xs">Walking the Amalfi Coast</h4>
            <p className="text-xs text-gray-600">
              From <span className="text-[#D6DAFF] font-medium">$129.00</span>
            </p>
          </div>
        </div>
      </div>

      {/* Box 2: Discovery Island Tour */}
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Last Minute Deal</h3>
        <div className="flex space-x-3">
          <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Travel"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-[#f39c12] text-[#f39c12]"
                />
              ))}
            </div>
            <h4 className="font-medium text-gray-800 text-xs">Discovery Island Kayak Tour</h4>
            <p className="text-xs text-gray-600">
              From <span className="text-[#D6DAFF] font-medium">$129.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastMinuteDeals;