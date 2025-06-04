"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TourCardProps {
  imageUrl: string;
  tourCount: number;
  destination: string;
}

export const TourCard = ({ imageUrl, tourCount, destination }: TourCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Extract country from destination (from TourTitle logic)
  const country = destination.split("Travel to ")[1];

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#F7F9FF",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        width: "100%",
        maxWidth: "280px",
        minWidth: "280px",
        overflow: "hidden",
        margin: "0 auto",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container" style={{ overflow: "hidden", position: "relative" }}>
        <Image
          src={imageUrl}
          alt={destination}
          width={280}
          height={330}
          style={{
            width: "100%",
            height: "330px",
            objectFit: "cover",
            transform: isHovered ? "scale(1.15)" : "scale(1)",
            transition: "transform 0.8s ease-in-out",
          }}
        />

        {/* TourBadge logic inline */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            backgroundColor: "#A3BFFA",
            color: "#1E2A44",
            fontSize: "0.75rem",
            fontWeight: 600,
            padding: "4px 12px",
            borderRadius: "12px",
            textTransform: "uppercase",
          }}
        >
          {tourCount} Tour{tourCount !== 1 ? "s" : ""}
        </div>

        {/* TourTitle logic inline */}
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "0",
            right: "0",
            textAlign: "center",
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {/* "Travel to" */}
          <div style={{ position: "relative" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 400,
                color: "#A3BFFA",
                backgroundColor: "transparent",
                margin: 0,
                position: "relative",
                zIndex: 2,
              }}
            >
              Travel to
            </h3>
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "0",
                width: isHovered ? "100%" : "0",
                height: "150%",
                backgroundColor: "#F7F9FF",
                transform: "translateY(-50%)",
                transition: "width 0.5s ease-in-out",
                zIndex: 1,
              }}
            />
          </div>

          {/* Country name */}
          <div style={{ position: "relative" }}>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: isHovered ? "#1E2A44" : "#A3BFFA",
                backgroundColor: "transparent",
                margin: 0,
                position: "relative",
                zIndex: 2,
                transition: "color 0.3s ease-in-out",
              }}
            >
              {country}
            </h3>
            <div
              style={{
                position: "absolute",
                top: "80%",
                right: "0",
                width: isHovered ? "100%" : "0",
                height: "150%",
                backgroundColor: "#F7F9FF",
                transform: "translateY(-50%)",
                transition: "width 0.5s ease-in-out",
                zIndex: 1,
              }}
            />
          </div>
        </div>

        <style jsx>{`
          .image-container::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 200px;
            background: linear-gradient(to top, rgba(30, 42, 68, 0.5), transparent);
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .image-container :global(img) {
              height: 250px !important;
            }
          }
          @media (max-width: 480px) {
            div {
              min-width: 100% !important;
              max-width: 100% !important;
            }
            .image-container :global(img) {
              height: 200px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};