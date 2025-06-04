"use client";

import React, { useState } from 'react';

export const QASidebar = () => {
  // Local ExpandableItem component to manage state
  type ExpandableItemProps = {
    question: string;
    answer: string;
    isExpandedByDefault?: boolean;
  };

  const ExpandableItem: React.FC<ExpandableItemProps> = ({ question, answer, isExpandedByDefault = false }) => {
    const [isExpanded, setIsExpanded] = useState(isExpandedByDefault);

    return (
      <div
        style={{
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '12px',
          backgroundColor: '#fff',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#1f2937',
              margin: 0,
            }}
          >
            {question}
          </h4>
          <svg
            style={{
              width: '16px',
              height: '16px',
              color: isExpanded ? '#22c55e' : '#4b5563',
              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isExpanded && (
          <p
            style={{
              fontSize: '0.875rem',
              color: '#4b5563',
              marginTop: '8px',
              lineHeight: '1.5',
            }}
          >
            {answer}
          </p>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        padding: '24px',
        borderRadius: '8px',
        width: '100%',
      }}
    >
      {/* AvailabilityLabel */}
      <div
        style={{
          backgroundColor: '#D6DAFF',
          color: '#1D197B',
          fontSize: '0.75rem',
          fontWeight: 600,
          padding: '4px 12px',
          borderRadius: '12px',
          display: 'inline-block',
          marginBottom: '16px',
        }}
      >
        Availability
      </div>

      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#1D197B',
          marginBottom: '16px',
        }}
      >
        Enjoy real adventure
      </h2>

      {/* ExpandableItem 1 */}
      <ExpandableItem
        question="How Much Price About Tour & Travels"
        answer="Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam ac elit at eros pulvinar vulput velut nisi sit placerat neque amet sapien semper tempus."
        isExpandedByDefault={true}
      />

      {/* ExpandableItem 2 */}
      <ExpandableItem
        question="We’re giving all the best services to you"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

      {/* ExpandableItem 3 */}
      <ExpandableItem
        question="Best Experience Travel Agency"
        answer="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};