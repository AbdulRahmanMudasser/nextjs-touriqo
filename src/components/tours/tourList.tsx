import React, { useState, useEffect } from 'react';
import TourCard from './tourcard';
import { tours, tourCategories } from '../data/Tour';
import { Tour } from '../types';

const ToursList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredTours(tours);
    } else {
      setFilteredTours(tours.filter(tour => tour.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold uppercase tracking-wide">
            Explore our tours
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
            Discover Amazing Places
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select from our wide range of carefully crafted tour packages designed to create unforgettable travel experiences.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tourCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full border transition ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white border-green-600'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-green-600 text-green-600 rounded-md hover:bg-green-600 hover:text-white transition">
            View All Tours
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToursList;
