"use client";
import React, { useState, useEffect, useRef } from "react";

interface TypeCardProps {
  title: string;
  type: string;
  description: string;
}

export const TypeCard: React.FC<TypeCardProps> = ({ title, type, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && cardRef.current) {
            cardRef.current.style.transform = "translateX(0)";
            cardRef.current.style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Consolidated icon definitions
  const icons = {
    "mountain-biking": (
      <svg
        style={{ width: "40px", height: "40px", color: isHovered ? "#fff" : "#1E2A44" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 3a2 2 0 00-2 2v2h-2V5a2 2 0 00-4 0v3L3 12v6h3a3 3 0 006 0h2a3 3 0 006 0h1v-6l-3-4h-2V5a2 2 0 00-2-2zm-6 13a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    ),
    adventure: (
      <svg
        style={{ width: "40px", height: "40px", color: isHovered ? "#fff" : "#1E2A44" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2l-8 8h4v6h4v-6h4l-8-8zm-2 14v4h4v-4h-4z"
        />
      </svg>
    ),
    beache: (
      <svg
        style={{ width: "40px", height: "40px", color: isHovered ? "#fff" : "#1E2A44" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v3m0 12v3m-9-9h3m12 0h3M5.64 5.64l2.12 2.12m10.61 10.61l2.12 2.12M5.64 18.36l2.12-2.12m10.61-10.61l2.12-2.12M12 9a3 3 0 110 6 3 3 0 010-6z"
        />
      </svg>
    ),
    discovery: (
      <svg
        style={{ width: "40px", height: "40px", color: isHovered ? "#fff" : "#1E2A44" }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 016 6c0 2-1 4-3 5l-3-3m0 0l-3 3c-2-1-3-3-3-5a6 6 0 016-6z"
        />
      </svg>
    ),
  };

  return (
    <div
      ref={cardRef}
      className="relative bg-white rounded-lg p-2 md:p-6 shadow-md text-center w-full sm:w-[250px] md:w-[268px] mx-auto transition-all duration-300 cursor-pointer"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        transform: "translateX(-100px)",
        opacity: 0,
        transition: "transform 0.8s ease-out, opacity 0.8s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style jsx>{`
        div::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          transition: background-color 0.3s ease-in-out;
          z-index: -1;
          border-radius: 8px;
        }
        div:hover::before {
          background-color: #D6DAFF;
        }
        @media (max-width: 640px) {
          div {
            margin: 0 1rem;
          }
        }
      `}</style>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: isHovered ? "#fff" : "#1E2A44",
          marginBottom: "8px",
          transition: "color 0.3s ease-in-out",
          ...{ fontFamily: "'Montserrat', sans-serif" },
        }}
      >
        {title}
      </h3>

      {/* Icon */}
      <div className="my-2 md:my-4">{icons[type as keyof typeof icons]}</div>

      {/* Divider */}
      <div
        style={{
          width: "20px",
          height: "2px",
          backgroundColor: isHovered ? "#fff" : "#1E2A44",
          margin: "12px 0",
          transition: "background-color 0.3s ease-in-out",
        }}
      />

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          color: isHovered ? "#fff" : "#1E2A44",
          lineHeight: "1.5",
          transition: "color 0.3s ease-in-out",
          ...{ fontFamily: "'Montserrat', sans-serif" },
        }}
      >
        {description}
      </p>
    </div>
  );
};