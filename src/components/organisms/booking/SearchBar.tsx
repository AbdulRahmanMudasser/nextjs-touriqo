'use client';

import { Calendar, Users, SlidersHorizontal, Search } from 'lucide-react';

export default function SearchSection() {
  return (
    <div className="relative w-full flex justify-center -mt-36 z-10 px-4">
      <div className="bg-white shadow-xl rounded-xl p-3 w-full max-w-6xl flex flex-col md:flex-row items-center gap-3 md:gap-2">
        {/* Date From */}
        <div className="flex-1 w-full">
          <p className="text-sm text-gray-500 mb-1">Date From</p>
          <div className="relative">
            <Calendar className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#D6DAFF] h-5 w-5" />
            <input
              type="date"
              placeholder="Date from"
              className="w-full pl-10 pr-3 py-1 text-gray-800 font-semibold border-b border-gray-300 focus:outline-none focus:border-[#63AB45]"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex-1 w-full">
          <p className="text-sm text-gray-500 mb-1">Guests</p>
          <div className="relative">
            <Users className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#D6DAFF] h-5 w-5" />
            <input
              type="number"
              placeholder="0"
              className="w-full pl-10 pr-3 py-1 text-gray-800 font-semibold border-b border-gray-300 focus:outline-none focus:border-[#63AB45]"
            />
          </div>
        </div>

        {/* Filter Icon */}
        <button className="hidden md:flex items-center justify-center p-2 rounded-md border border-gray-200 hover:bg-gray-100 transition">
          <SlidersHorizontal className="h-5 w-5 text-[#D6DAFF]" />
        </button>

        {/* Search Button */}
        <button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#D6DAFF] hover:bg-[#B0B7F7] text-white font-semibold transition">
          <Search className="h-5 w-5 text-[#D6DAFF]" />
          Search
        </button>
      </div>
    </div>
  );
}