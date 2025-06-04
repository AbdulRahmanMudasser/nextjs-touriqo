import React from 'react';

interface TourListHeaderProps {
  tourCount: number;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export const TourListHeader: React.FC<TourListHeaderProps> = ({ tourCount, sortBy, onSortChange }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h3
        className="text-lg font-semibold text-gray-900"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {tourCount} Tours
      </h3>
      <div className="flex items-center gap-2">
        <span
          className="text-sm text-gray-600"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Sort by:
        </span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#28a745] text-right"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
};