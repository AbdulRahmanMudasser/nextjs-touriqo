"use client";

import React, { useState } from 'react';

interface ExpandableItemProps {
  question: string;
  answer: string;
  isExpandedByDefault?: boolean;
}

export const ExpandableItem = ({ question, answer, isExpandedByDefault = false }: ExpandableItemProps) => {
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