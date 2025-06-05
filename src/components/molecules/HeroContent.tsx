"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function HeroContent() {
  // State declarations
  const [isDateFromDropdownOpen, setIsDateFromDropdownOpen] = useState(false);
  const [isDateToDropdownOpen, setIsDateToDropdownOpen] = useState(false);
  const [isGuestsDropdownOpen, setIsGuestsDropdownOpen] = useState(false);
  const [guests, setGuests] = useState({ children: 0, youth: 0, adult: 0 });
  const [selectedDateFrom, setSelectedDateFrom] = useState(null);
  const [selectedDateTo, setSelectedDateTo] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  // Refs
  const dateFromDropdownRef = useRef(null);
  const dateToDropdownRef = useRef(null);
  const guestsDropdownRef = useRef(null);

  const router = useRouter();
  const totalGuests = guests.children + guests.youth + guests.adult;

  // City coordinates
  const cityCoordinates = {
    asia: { latitude: 34.0479, longitude: 100.6197 },
    japan: { latitude: 35.6762, longitude: 139.6503 },
    singapore: { latitude: 1.3521, longitude: 103.8198 },
    thailand: { latitude: 13.7563, longitude: 100.5018 },
    europe: { latitude: 54.5260, longitude: 15.2551 },
  };

  // Styles
  const montserratFont = { fontFamily: "'Montserrat', sans-serif" };
  const textColor = { color: "#D6DAFF" };

  const inputStyle = {
    width: "100%",
    padding: "12px 40px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    color: "#4b5563",
    backgroundColor: "#F7F9FF",
    ...montserratFont,
  };

  // SVG Icons
  const icons = {
    location: (
      <svg style={{ width: "20px", height: "20px", color: "#D6DAFF" }} fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    ),
    date: (
      <svg style={{ width: "20px", height: "20px", color: "#D6DAFF" }} fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm1 3h6v1H7V5zm-3 3h12v8H4V8z" />
      </svg>
    ),
    guests: (
      <svg style={{ width: "20px", height: "20px", color: "#D6DAFF" }} fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
      </svg>
    ),
    search: (
      <svg style={{ width: "20px", height: "20px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  };

  // Close dropdowns when clicking outside
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

  // Guest count handler
  const handleGuestChange = (category, increment) => {
    setGuests(prev => ({
      ...prev,
      [category]: Math.max(0, prev[category] + (increment ? 1 : -1))
    }));
  };

  // Date selection handlers
  const handleDateFromSelect = (date) => {
    setSelectedDateFrom(`June ${date}, 2025`);
    setIsDateFromDropdownOpen(false);
  };

  const handleDateToSelect = (date) => {
    setSelectedDateTo(`June ${date}, 2025`);
    setIsDateToDropdownOpen(false);
  };

  // Format date for API
  const formatDateToApi = (dateString) => {
    if (!dateString) return null;
    const [month, day, year] = dateString.split(" ");
    const months = { June: "06" };
    return `${year}-${months[month]}-${day.replace(",", "").padStart(2, "0")}`;
  };

  // Search handler
  const handleSearch = async () => {
    // Validation
    if (!selectedCity || !selectedDateFrom || !selectedDateTo) {
      alert("Please select a city, check-in date, and check-out date.");
      return;
    }

    if (totalGuests === 0) {
      alert("Please select at least one guest.");
      return;
    }

    const coordinates = cityCoordinates[selectedCity.toLowerCase()];
    if (!coordinates) {
      alert("Invalid city selection.");
      return;
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!baseUrl) {
      alert("API URL is not configured.");
      return;
    }

    const endpoint = '/v1/hotel/search';
    const params = new URLSearchParams();
    params.set('checkin', formatDateToApi(selectedDateFrom));
    params.set('checkout', formatDateToApi(selectedDateTo));
    params.set('residency', 'gb');
    params.set('language', 'en');
    params.set('currency', 'EUR');
    params.set('longitude', String(coordinates.longitude));
    params.set('latitude', String(coordinates.latitude));
    params.set('radius', '150');
    params.set('guests[0][adults]', String(guests.adult));
    const childrenAges = [...Array(guests.children).fill(10), ...Array(guests.youth).fill(15)];
    childrenAges.forEach((age, index) => {
      params.set(`guests[0][children][${index}]`, String(age));
    });

    const url = `${baseUrl}${endpoint}?${params.toString()}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        let errorDetails;
        try {
          errorDetails = await response.json();
        } catch (e) {
          errorDetails = { error: `HTTP error ${response.status}` };
        }
        const errorMessage = errorDetails.error || errorDetails.details || `API request failed with status ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      // console.log(data);

      if (!data.success) {
        throw new Error(data.message || "API returned unsuccessful response");
      }

      router.push("/tourslist");
    } catch (error) {
      console.error("Search error details:", {
        message: error.message,
        stack: error.stack
      });
      alert(`Search failed: ${error.message}`);
    }
  };

  // Render component
  return (
    <div style={{ textAlign: "center", width: "100%", maxWidth: "1280px", padding: "0 16px", marginTop: "60px" }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: "1.2", ...montserratFont, ...textColor }}>
        <span style={{ position: "relative", display: "inline-block" }}>
          <span style={{ position: "absolute", top: "-21px", left: "-40px", backgroundColor: "#D6DAFF", color: "#1E2A44", fontSize: "1rem", fontWeight: 600, padding: "4px 8px", borderRadius: "4px", transform: "rotate(-10deg)", ...montserratFont }}>
            Let's Explore
          </span>
          Where Would You Like To Go?
        </span>
      </h1>
      <p style={{ marginTop: "16px", fontSize: "0.875rem", maxWidth: "100%", padding: "0 16px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.5", ...montserratFont, ...textColor }}>
        Checkout Beautiful Places Around the World.
      </p>
      <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: "24px", width: "100%" }}>
        <div className="flex flex-col sm:flex-row gap-3 bg-[#F7F9FF] rounded-lg p-3 shadow-md">
          <div style={{ flex: "1 1 100%", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, display: "flex", alignItems: "center", paddingLeft: "12px" }}>
              {icons.location}
            </div>
            <select style={inputStyle} onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
              <option value="" disabled>Select a location</option>
              {["Asia", "Japan", "Singapore", "Thailand", "Europe"].map(loc => (
                <option key={loc} value={loc.toLowerCase()}>{loc}</option>
              ))}
            </select>
          </div>
          <div style={{ flex: "1 1 100%", position: "relative" }} ref={dateFromDropdownRef}>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, display: "flex", alignItems: "center", paddingLeft: "12px" }}>
              {icons.date}
            </div>
            <input type="text" value={selectedDateFrom || ""} placeholder="Date from" style={inputStyle} onClick={() => setIsDateFromDropdownOpen(true)} readOnly />
            {isDateFromDropdownOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, width: "200px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "12px", zIndex: 10 }}>
                <div style={{ textAlign: "center", marginBottom: "6px", fontSize: "0.875rem", ...montserratFont }}>June 2025</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", textAlign: "center" }}>
                  {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(day => (
                    <div key={day} style={{ fontSize: "0.75rem", color: "#6b7280", ...montserratFont }}>{day}</div>
                  ))}
                  {Array.from({ length: 30 }, (_, i) => i + 1).map(date => (
                    <button key={date} onClick={() => handleDateFromSelect(date)} style={{ padding: "4px", borderRadius: "50%", backgroundColor: selectedDateFrom === `June ${date}, 2025` ? "#f97316" : "transparent", color: selectedDateFrom === `June ${date}, 2025` ? "#fff" : "#4b5563", cursor: "pointer", fontSize: "0.75rem", ...montserratFont }}>
                      {date}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div style={{ flex: "1 1 100%", position: "relative" }} ref={dateToDropdownRef}>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, display: "flex", alignItems: "center", paddingLeft: "12px" }}>
              {icons.date}
            </div>
            <input type="text" value={selectedDateTo || ""} placeholder="Date to" style={inputStyle} onClick={() => setIsDateToDropdownOpen(true)} readOnly />
            {isDateToDropdownOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, width: "200px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "12px", zIndex: 10 }}>
                <div style={{ textAlign: "center", marginBottom: "6px", fontSize: "0.875rem", ...montserratFont }}>June 2025</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px", textAlign: "center" }}>
                  {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(day => (
                    <div key={day} style={{ fontSize: "0.75rem", color: "#6b7280", ...montserratFont }}>{day}</div>
                  ))}
                  {Array.from({ length: 30 }, (_, i) => i + 1).map(date => (
                    <button key={date} onClick={() => handleDateToSelect(date)} style={{ padding: "4px", borderRadius: "50%", backgroundColor: selectedDateTo === `June ${date}, 2025` ? "#f97316" : "transparent", color: selectedDateTo === `June ${date}, 2025` ? "#fff" : "#4b5563", cursor: "pointer", fontSize: "0.75rem", ...montserratFont }}>
                      {date}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div style={{ flex: "1 1 100%", position: "relative" }} ref={guestsDropdownRef}>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, display: "flex", alignItems: "center", paddingLeft: "12px" }}>
              {icons.guests}
            </div>
            <input type="text" value={`${totalGuests} Guests`} placeholder="0 Guests" style={inputStyle} onClick={() => setIsGuestsDropdownOpen(true)} readOnly />
            {isGuestsDropdownOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, width: "200px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", padding: "16px", zIndex: 10 }}>
                {Object.entries(guests).map(([category, count]) => (
                  <div key={category} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{ textTransform: "capitalize", color: "#4b5563", ...montserratFont }}>{category}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <button onClick={() => handleGuestChange(category, false)} style={{ width: "24px", height: "24px", backgroundColor: "#f97316", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>-</button>
                      <span style={{ color: "#4b5563", ...montserratFont }}>{count}</span>
                      <button onClick={() => handleGuestChange(category, true)} style={{ width: "24px", height: "24px", backgroundColor: "#f97316", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{ flex: "1 1 auto", width: "100%" }}>
            <button onClick={handleSearch} style={{ width: "100%", padding: "12px 24px", backgroundColor: "#D6DAFF", color: "#1E2A44", borderRadius: "8px", border: "none", textTransform: "uppercase", fontWeight: 600, fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap", ...montserratFont }}>
              {icons.search}
              Search
            </button>
          </div>
        </div>
      </form>
      <p style={{ marginTop: "24px", fontSize: "1.25rem", position: "relative", ...montserratFont, ...textColor }}>
        <span style={{ position: "absolute", left: "-30px", top: "-15px", display: "inline-block", width: "24px", height: "24px", backgroundSize: "contain" }} />
        Or browse the selected type
      </p>
    </div>
  );
}