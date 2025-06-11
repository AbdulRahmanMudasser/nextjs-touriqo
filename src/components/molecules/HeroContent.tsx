"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, User } from "lucide-react";
import { DateInput } from "@/components/ui/DateInput";

export default function HeroContent() {
  const [isGuestsDropdownOpen, setIsGuestsDropdownOpen] = useState(false);
  const [guests, setGuests] = useState({ children: 0, adult: 0 });
  const [selectedDateFrom, setSelectedDateFrom] = useState<Date | null>(null);
  const [selectedDateTo, setSelectedDateTo] = useState<Date | null>(null);
  const [selectedCity, setSelectedCity] = useState("");

  const dateFromPickerRef = useRef<HTMLDivElement>(null);
  const dateToPickerRef = useRef<HTMLDivElement>(null);
  const guestsDropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const totalGuests = guests.children + guests.adult;

  const cityCoordinates = {
    asia: { latitude: 34.0479, longitude: 100.6197 },
    japan: { latitude: 35.6762, longitude: 139.6503 },
    singapore: { latitude: 1.3521, longitude: 103.8198 },
    thailand: { latitude: 13.7563, longitude: 100.5018 },
    europe: { latitude: 54.5260, longitude: 15.2551 },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const isOutside = (ref: React.RefObject<HTMLElement | null>) =>
        ref.current && !ref.current.contains(event.target as Node);
      if (isOutside(dateFromPickerRef)) setSelectedDateFrom((prev) => prev);
      if (isOutside(dateToPickerRef)) setSelectedDateTo((prev) => prev);
      if (isOutside(guestsDropdownRef)) setIsGuestsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedDateFrom && selectedDateTo && selectedDateTo < selectedDateFrom) {
      setSelectedDateTo(null);
    }
  }, [selectedDateFrom, selectedDateTo]);

  const handleGuestChange = (
    category: keyof typeof guests,
    increment: boolean,
  ) => {
    setGuests((prev) => ({
      ...prev,
      [category]: Math.max(0, prev[category] + (increment ? 1 : -1)),
    }));
  };

  const formatDateToApi = (date: Date | null) => {
    if (!date) return null;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleSearch = () => {
    if (!selectedCity || !selectedDateFrom || !selectedDateTo) {
      alert("Please select a city, check-in date, and check-out date.");
      return;
    }

    if (totalGuests === 0) {
      alert("Please select at least one guest.");
      return;
    }

    const queryParams = new URLSearchParams({
      city: selectedCity,
      checkin: formatDateToApi(selectedDateFrom)!,
      checkout: formatDateToApi(selectedDateTo)!,
      adults: String(guests.adult),
      children: String(guests.children),
    }).toString();

    router.push(`/tourslist?${queryParams}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-center mt-2 sm:mt-4 font-montserrat">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        Find Your Perfect Hotel
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-white mt-2">
        Explore the world with our curated hotel selections
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="mt-6 sm:mt-8 w-full">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 bg-[#F7F9FF] rounded-lg p-2 sm:p-3 shadow-md">
          <div className="flex-1 w-full">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full p-2 sm:p-3 rounded-lg border border-[#D1D5DB] bg-white text-sm sm:text-base text-[#1E2A44] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#D6DAFF] transition"
            >
              <option value="" disabled>
                Select City
              </option>
              {Object.keys(cityCoordinates).map((city) => (
                <option key={city} value={city}>
                  {city.charAt(0).toUpperCase() + city.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1 w-full" ref={dateFromPickerRef}>
            <DateInput
              selectedDate={selectedDateFrom}
              onChange={setSelectedDateFrom}
              placeholder="Check-in Date"
              minDate={new Date()}
            />
          </div>

          <div className="flex-1 w-full" ref={dateToPickerRef}>
            <DateInput
              selectedDate={selectedDateTo}
              onChange={setSelectedDateTo}
              placeholder="Check-out Date"
              minDate={selectedDateFrom || new Date()}
              disabled={!selectedDateFrom}
            />
          </div>

          <div className="flex-1 w-full relative" ref={guestsDropdownRef}>
            <button
              type="button"
              onClick={() => setIsGuestsDropdownOpen(!isGuestsDropdownOpen)}
              className="w-full p-2 sm:p-3 rounded-lg border border-[#D1D5DB] bg-white text-sm sm:text-base text-left text-[#1E2A44] flex items-center gap-2 transition hover:bg-gray-50"
            >
              <User className="h-4 w-4 sm:h-5 sm:w-5 text-[#9CA3AF]" />
              <span className={totalGuests > 0 ? "text-[#1E2A44]" : "text-[#9CA3AF]"}>
                {totalGuests > 0 ? `${totalGuests} Guest${totalGuests > 1 ? "s" : ""}` : "Guests"}
              </span>
            </button>
            {isGuestsDropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-white border border-[#D1D5DB] rounded-lg mt-1 z-10 p-2 shadow-lg">
                {(["adult", "children"] as const).map((category) => (
                  <div key={category} className="flex justify-between items-center p-2">
                    <span className="text-sm sm:text-base capitalize">{category}</span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleGuestChange(category, false)}
                        className="p-1 border border-[#D1D5DB] rounded text-sm hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="text-sm sm:text-base">{guests[category]}</span>
                      <button
                        type="button"
                        onClick={() => handleGuestChange(category, true)}
                        className="p-1 border border-[#D1D5DB] rounded text-sm hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1 w-full">
            <button
              type="button"
              onClick={handleSearch}
              className="w-full p-2 sm:p-3 bg-[#D6DAFF] text-[#1E2A44] rounded-lg font-semibold text-sm sm:text-base uppercase flex items-center justify-center gap-2 hover:bg-[#C4C8FF] transition"
            >
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
