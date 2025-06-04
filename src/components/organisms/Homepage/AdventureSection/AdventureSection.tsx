
"use client";

import React, { useState, useEffect } from "react";
import { Banner } from "../../../molecules/Homepage/AdventureSection/Banner";
import Image from "next/image"; // Importing Image from Next.js

export const AdventureSection = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        maxWidth: "1400px",
        margin: "0 auto",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      {/* Centered Banner positioned above both sections */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          position: "absolute",
          top: -20,
          left: "0",
          right: "0",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: isMobile ? "95%" : "80%",
            margin: "0 auto",
          }}
        >
          <Banner />
        </div>
      </div>

      {/* Content container (image + sidebar) */}
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "flex-start",
          paddingTop: isMobile ? "100px" : "80px",
        }}
      >
        {/* Left Section - Image */}
        <div
          style={{
            flex: isMobile ? "1 1 100%" : "1 1 60%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: isMobile ? "300px" : "480px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/hiking.jpg"
              alt="Person hiking in mountains"
              width={500}
              height={300}
              style={{
                objectFit: "cover",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        {/* Right Section - Sidebar */}
        <div
          style={{
            flex: isMobile ? "1 1 100%" : "1 1 40%",
            paddingLeft: isMobile ? "0" : "20px",
            paddingTop: "120px",
          }}
        >
          {/* WhyChooseUsLabel inline */}
          <div
            style={{
              backgroundColor: '#D6DAFF',
              width: "200px",
              marginTop: "10px",
              marginLeft: "10px",
              color: '#1D197B',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '4px 12px',
              borderRadius: '12px',
              display: 'inline-block',
              marginBottom: '8px',
            }}
          >
            Why choose us
          </div>

          {/* AdventureSidebar inline */}
          <div
            style={{
              padding: '10px',
              width: '100%',
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#1f2937',
                marginBottom: '12px',
                lineHeight: '1.2',
              }}
            >
              Great opportunity for adventure & travels
            </h2>
            {/* FeatureCard inline for safety */}
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#A3BFFA',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '8px',
                  color: '#1E2A44',
                  fontSize: '12px',
                }}
              >
                S
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '4px',
                    lineHeight: '1.2',
                  }}
                >
                  Safety first always
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#4b5563',
                    lineHeight: '1.2',
                  }}
                >
                  Aenean placerat ut lacus nec pulvinar. Donec eu ante at, commodo diam.
                </p>
              </div>
            </div>

            {/* FeatureCard inline for price */}
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#A3BFFA',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '8px',
                  color: '#1E2A44',
                  fontSize: '12px',
                }}
              >
                P
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '4px',
                    lineHeight: '1.2',
                  }}
                >
                  Low price & friendly
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#4b5563',
                    lineHeight: '1.2',
                  }}
                >
                  Aenean placerat ut lacus nec pulvinar. Donec eu ante at, commodo diam.
                </p>
              </div>
            </div>

            {/* FeatureCard inline for guide */}
            <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#A3BFFA',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '8px',
                  color: '#1E2A44',
                  fontSize: '12px',
                }}
              >
                G
              </div>
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '4px',
                    lineHeight: '1.2',
                  }}
                >
                  Trusted travel guide
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#4b5563',
                    lineHeight: '1.2',
                  }}
                >
                  Aenean placerat ut lacus nec pulvinar. Donec eu ante at, commodo diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureSection;