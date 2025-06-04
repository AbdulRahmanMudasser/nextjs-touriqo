"use client";

import React, { useState } from "react";

interface InputProps {
  type: "select" | "date" | "guests" | "text";
  placeholder: string;
  icon: string;
  hasDropdown?: boolean;
  options?: { value: string; label: string; disabled?: boolean }[];
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  icon,
  hasDropdown = false,
  options = [],
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [guests, setGuests] = useState({ children: 0, youth: 0, adult: 0 });

  const icons = {
    location: (
      <svg
        style={{ width: "20px", height: "20px", color: "#28a745" }}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    date: (
      <svg
        style={{ width: "20px", height: "20px", color: "#28a745" }}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm1 3h6v1H7V5zm-3 3h12v8H4V8z" />
      </svg>
    ),
    guests: (
      <svg
        style={{ width: "20px", height: "20px", color: "#28a745" }}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
      </svg>
    ),
  };

  const handleGuestChange = (category: keyof typeof guests, increment: boolean) => {
    setGuests((prev) => ({
      ...prev,
      [category]: Math.max(0, prev[category] + (increment ? 1 : -1)),
    }));
  };

  const totalGuests = guests.children + guests.youth + guests.adult;

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          paddingLeft: "12px",
        }}
      >
        {icons[icon as keyof typeof icons]}
      </div>

      {type === "select" && (
        <>
          <select
            style={{
              width: "100%",
              padding: "12px 40px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "1rem",
              color: "#4b5563",
              backgroundColor: "#fff",
              appearance: "none",
              fontFamily: "'Montserrat', sans-serif",
            }}
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={() => setIsDropdownOpen(false)}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          {hasDropdown && (
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                paddingRight: "12px",
              }}
            >
              <svg
                style={{ width: "16px", height: "16px", color: "#9ca3af" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          )}
        </>
      )}

      {type === "date" && (
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder={placeholder}
            style={{
              width: "100%",
              padding: "12px 40px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "1rem",
              color: "#4b5563",
              backgroundColor: "#fff",
              fontFamily: "'Montserrat', sans-serif",
            }}
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
            readOnly
          />
          {hasDropdown && (
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                paddingRight: "12px",
              }}
            >
              <svg
                style={{ width: "16px", height: "16px", color: "#9ca3af" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          )}
          {isDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "200px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "12px",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <button style={{ padding: "2px" }}></button>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.875rem",
                  }}
                >
                  April 2025
                </span>
                <button style={{ padding: "2px" }}></button>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "2px",
                  textAlign: "center",
                }}
              >
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                  <div
                    key={day}
                    style={{
                      fontSize: "0.75rem",
                      color: "#6b7280",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {day}
                  </div>
                ))}
                {Array(31)
                  .fill(null)
                  .map((_, i) => {
                    const date = i + 1;
                    return (
                      <button
                        key={date}
                        style={{
                          padding: "4px",
                          borderRadius: "50%",
                          backgroundColor: date === 24 ? "#f97316" : "transparent",
                          color: date === 24 ? "#fff" : "#4b5563",
                          cursor: "pointer",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.75rem",
                        }}
                      >
                        {date}
                      </button>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      )}

      {type === "guests" && (
        <div style={{ position: "relative" }}>
          <input
            type="text"
            value={`${totalGuests} Guests`}
            placeholder={placeholder}
            style={{
              width: "100%",
              padding: "12px 40px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "1rem",
              color: "#4b5563",
              backgroundColor: "#fff",
              fontFamily: "'Montserrat', sans-serif",
            }}
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
            readOnly
          />
          {hasDropdown && (
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                paddingRight: "12px",
              }}
            >
              <svg
                style={{ width: "16px", height: "16px", color: "#9ca3af" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          )}
          {isDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "200px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                zIndex: 10,
              }}
            >
              {(["children", "youth", "adult"] as const).map((category) => (
                <div
                  key={category}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      textTransform: "capitalize",
                      color: "#4b5563",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {category}
                  </span>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <button
                      onClick={() => handleGuestChange(category, false)}
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#f97316",
                        color: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      -
                    </button>
                    <span
                      style={{
                        color: "#4b5563",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {guests[category]}
                    </span>
                    <button
                      onClick={() => handleGuestChange(category, true)}
                      style={{
                        width: "24px",
                        height: "24px",
                        backgroundColor: "#f97316",
                        color: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};