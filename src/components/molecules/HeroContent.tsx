"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function HeroContent() {
  const [isDateFromDropdownOpen, setIsDateFromDropdownOpen] = useState(false);
  const [isDateToDropdownOpen, setIsDateToDropdownOpen] = useState(false);
  const [isGuestsDropdownOpen, setIsGuestsDropdownOpen] = useState(false);
  const [guests, setGuests] = useState({ children: 0, adult: 0 });
  const [selectedDateFrom, setSelectedDateFrom] = useState(null);
  const [selectedDateTo, setSelectedDateTo] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  const dateFromDropdownRef = useRef(null);
  const dateToDropdownRef = useRef(null);
  const guestsDropdownRef = useRef(null);

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
    const handleClickOutside = (event) => {
      const isOutside = (ref) => ref.current && !ref.current.contains(event.target);
      if (isOutside(dateFromDropdownRef)) setIsDateFromDropdownOpen(false);
      if (isOutside(dateToDropdownRef)) setIsDateToDropdownOpen(false);
      if (isOutside(guestsDropdownRef)) setIsGuestsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGuestChange = (category, increment) => {
    setGuests((prev) => ({
      ...prev,
      [category]: Math.max(0, prev[category] + (increment ? 1 : -1)),
    }));
  };

  const handleDateFromSelect = (date) => {
    setSelectedDateFrom(`June ${date}, 2025`);
    setIsDateFromDropdownOpen(false);
  };

  const handleDateToSelect = (date) => {
    setSelectedDateTo(`June ${date}, 2025`);
    setIsDateToDropdownOpen(false);
  };

  const formatDateToApi = (dateString) => {
    if (!dateString) return null;
    const [month, day, year] = dateString.split(" ");
    const months = { June: "06" };
    return `${year}-${months[month]}-${day.replace(",", "").padStart(2, "0")}`;
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
      checkin: formatDateToApi(selectedDateFrom),
      checkout: formatDateToApi(selectedDateTo),
      adults: String(guests.adult),
      children: String(guests.children),
    }).toString();

    console.log("Navigating with query:", `/tourslist?${queryParams}`);
    router.push(`/tourslist?${queryParams}`);
  };

  return (
    <div style={{ textAlign: "center", width: "100%", maxWidth: "1280px", padding: "0 16px", marginTop: "60px" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1E2A44", ...montserratFont }}>
        Find Your Perfect Tour
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#6B7280", marginTop: "8px", ...montserratFont }}>
        Explore the world with our curated tours and adventures.
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
          <div style={{ flex: "1 1 auto", width: "100%", position: "relative" }} ref={dateFromDropdownRef}>
            <button
              type="button"
              onClick={() => setIsDateFromDropdownOpen(!isDateFromDropdownOpen)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #D1D5DB",
                backgroundColor: "#FFFFFF",
                textAlign: "left",
                fontSize: "1rem",
                color: selectedDateFrom ? "#1E2A44" : "#9CA3AF",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                ...montserratFont,
              }}
            >
              {icons.calendar}
              {selectedDateFrom || "Check-in Date"}
            </button>
            {isDateFromDropdownOpen && (
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
                {[10, 11, 12, 13, 14].map((date) => (
                  <div
                    key={date}
                    onClick={() => handleDateFromSelect(date)}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      ...montserratFont,
                      ":hover": { backgroundColor: "#F3F4F6" },
                    }}
                  >
                    June {date}, 2025
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{ flex: "1 1 auto", width: "100%", position: "relative" }} ref={dateToDropdownRef}>
            <button
              type="button"
              onClick={() => setIsDateToDropdownOpen(!isDateToDropdownOpen)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #D1D5DB",
                backgroundColor: "#FFFFFF",
                textAlign: "left",
                fontSize: "1rem",
                color: selectedDateTo ? "#1E2A44" : "#9CA3AF",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                ...montserratFont,
              }}
            >
              {icons.calendar}
              {selectedDateTo || "Check-out Date"}
            </button>
            {isDateToDropdownOpen && (
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
                {[15, 16, 17, 18, 19].map((date) => (
                  <div
                    key={date}
                    onClick={() => handleDateToSelect(date)}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      ...montserratFont,
                      ":hover": { backgroundColor: "#F3F4F6" },
                    }}
                  >
                    June {date}, 2025
                  </div>
                ))}
              </div>
            )}
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
                        onClick={() => handleGuestChange(category, false)}
                        style={{ padding: "4px 8px", border: "1px solid #D1D5DB", borderRadius: "4px" }}
                      >
                        -
                      </button>
                      <span>{guests[category]}</span>
                      <button
                        onClick={() => handleGuestChange(category, true)}
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