"use client";

import React, { useState } from 'react';
import { FilterCheckbox } from '../../../atoms/ToursListPage/ToursListSection/FilterCheckbox';

export const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    { label: 'Discovery Kayak Tour', value: 'kayak-tour', price: '$1200' },
    { label: 'Rainbow Valley', value: 'rainbow-valley', price: '$1300' },
    { label: 'United Kingdom', value: 'united-kingdom', price: '$2500' },
  ];

  const handleCategoryChange = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Price Range */}
      <h3
        className="text-lg font-semibold text-gray-900 mb-4"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Price Range
      </h3>
      <div className="mb-6">
        <input
          type="range"
          min="0"
          max="20000"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="20000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ${priceRange[0]}
          </span>
          <span style={{ fontFamily: "'Montserrat', sans-serif" }}>
            ${priceRange[1]}
          </span>
        </div>
      </div>

      {/* Categories */}
      <h3
        className="text-lg font-semibold text-gray-900 mb-4"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Last Minutes
      </h3>
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category.value} className="flex justify-between items-center">
            <FilterCheckbox
              label={category.label}
              value={category.value}
              checked={selectedCategories.includes(category.value)}
              onChange={handleCategoryChange}
            />
            <span
              className="text-sm text-gray-600"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {category.price}
            </span>
          </div>
        ))}
      </div>

      {/* Search Button */}
      <button
        className="w-full mt-6 px-4 py-2 bg-[#28a745] text-white text-sm uppercase font-medium rounded-lg hover:bg-[#22c55e] transition-colors"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Search
      </button>
    </div>
  );
};