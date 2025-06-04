"use client";
import React from "react";
import { Globe2 } from "lucide-react";

export const Banner = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="relative w-3/4 bg-[#D6DAFF] rounded-xl overflow-hidden px-4 py-8 flex justify-between items-center text-[#1D197B] mt-4"
        style={{ color: "#1D197B" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/worldmap.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#D6DAFF]/70 z-0" />

        <div className="flex flex-col gap-4 z-10">
          {/* BannerLabel */}
          <div className="text-white-600 text-xs font-semibold px-3 py-1 rounded-3xl uppercase inline-block">
            Quisque vel ortor
          </div>

          <div className="flex items-center gap-3">
            <Globe2 className="w-10 h-10 text-[#1D197B]" />
            <h2 className="text-3xl font-bold leading-tight">
              Ready to adventure and enjoy natural
            </h2>
          </div>
        </div>

        <button
          className="z-10 bg-[#1D197B] text-[#D6DAFF] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition text-lg"
          style={{ color: "#D6DAFF" }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};