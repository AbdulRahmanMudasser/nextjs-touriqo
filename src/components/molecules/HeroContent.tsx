"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  const montserratFont = { fontFamily: "Montserrat, sans-serif" };
  const icons = {
    search: <span>🔍</span>,
    calendar: <span>📅</span>,
    person: <span>👤</span>,
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = (ref: React.RefObject<HTMLElement>) =>
        ref.current && !ref.current.contains(event.target as Node);
      if (isOutside(dateFromPickerRef)) setSelectedDateFrom((prev) => prev);
      if (isOutside(dateToPickerRef)) setSelectedDateTo((prev) => prev);
      if (isOutside(guestsDropdownRef)) setIsGuestsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clear "Date To" if "Date From" changes to a later date
  useEffect(() => {
    if (selectedDateFrom && selectedDateTo && selectedDateTo < selectedDateFrom) {
      setSelectedDateTo(null);
    }
  }, [selectedDateFrom, selectedDateTo]);

  const handleGuestChange = (category: "children" | "adult", increment: boolean) => {
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

    console.log("Navigating with query:", `/tourslist?${queryParams}`);
    router.push(`/tourslist?${queryParams}`);
  };

  return (
    <div style={{ textAlign: "center", width: "100%", maxWidth: "1280px", padding: "0 16px", marginTop: "60px" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1E2A44", ...montserratFont }}>
        Find Your Perfect Hotel
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#6B7280", marginTop: "8px", ...montserratFont }}>
        Explore the world with our curated hotel selections.
      </p>
      <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: "24px", width: "100%" }}>
        <div className="flex flex-col sm:flex-row gap-3 bg-[#F7F9FF] rounded-lg p-3 shadow-md">
          <div style={{ flex: "1 1 auto", width: "100%", position: "relative" }}>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #D1D5DB",
                backgroundColor: "#FFFFFF",
                fontSize: "1rem",
                color: selectedCity ? "#1E2A44" : "#9CA3AF",
                ...montserratFont,
              }}
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
          <div style={{ flex: "1 1 auto", width: "100%", position: "relative" }} ref={dateFromPickerRef}>
            <div style={{ position: "relative" }}>
              <DatePicker
                selected={selectedDateFrom}
                onChange={(date: Date | null) => setSelectedDateFrom(date)}
                placeholderText="Check-in Date"
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                className="w-full p-3 rounded-lg border border-[#D1D5DB] bg-white text-base text-[#1E2A44] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#D6DAFF] transition"
                style={montserratFont}
                wrapperClassName="w-full"
                popperClassName="z-10"
              />
              <span style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)" }}>
                {icons.calendar}
              </span>
            </div>
          </div>
          <div style={{ flex: "1 1 auto", width: "100%", position: "relative" }} ref={dateToPickerRef}>
            <div style={{ position: "relative" }}>
              <DatePicker
                selected={selectedDateTo}
                onChange={(date: Date | null) => setSelectedDateTo(date)}
                placeholderText="Check-out Date"
                dateFormat="MMMM d, yyyy"
                minDate={selectedDateFrom || new Date()}
                className="w-full p-3 rounded-lg border border-[#D1D5DB] bg-white text-base text-[#1E2A44] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#D6DAFF] transition"
                style={montserratFont}
                wrapperClassName="w-full"
                popperClassName="z-10"
                disabled={!selectedDateFrom}
              />
              <span style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)" }}>
                {icons.calendar}
              </span>
            </div>
          </div>
          <div style={{ flex: "1 1 auto", width: "100%", position: "relative" }} ref={guestsDropdownRef}>
            <button
              type="button"
              onClick={() => setIsGuestsDropdownOpen(!isGuestsDropdownOpen)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #D1D5DB",
                backgroundColor: "#FFFFFF",
                textAlign: "left",
                fontSize: "1rem",
                color: totalGuests > 0 ? "#1E2A44" : "#9CA3AF",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                ...montserratFont,
              }}
            >
              {icons.person}
              {totalGuests > 0 ? `${totalGuests} Guest${totalGuests > 1 ? "s" : ""}` : "Guests"}
            </button>
            {isGuestsDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                  marginTop: "4px",
                  zIndex: 10,
                  padding: "8px",
                }}
              >
                {["adult", "children"].map((category) => (
                  <div key={category} style={{ display: "flex", justifyContent: "space-between", padding: "8px" }}>
                    <span style={{ ...montserratFont }}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <button
                        onClick={() => handleGuestChange(category as "adult" | "children", false)}
                        style={{ padding: "4px 8px", border: "1px solid #D1D5DB", borderRadius: "4px" }}
                      >
                        -
                      </button>
                      <span>{guests[category]}</span>
                      <button
                        onClick={() => handleGuestChange(category as "adult" | "children", true)}
                        style={{ padding: "4px 8px", border: "1px solid #D1D5DB", borderRadius: "4px" }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{ flex: "1 1 auto", width: "100%" }}>
            <button
              onClick={handleSearch}
              style={{
                width: "100%",
                padding: "12px 24px",
                backgroundColor: "#D6DAFF",
                color: "#1E2A44",
                borderRadius: "8px",
                border: "none",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                whiteSpace: "nowrap",
                ...montserratFont,
              }}
            >
              {icons.search}
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}