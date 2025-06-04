import React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="tour-card group bg-white shadow rounded-lg overflow-hidden">
      {/* Image Container */}
      <div className="relative h-56 w-full">
        <Image
          src={tour.image}
          alt={tour.title}
          layout="fill"
          objectFit="cover"
          className="transform group-hover:scale-110 transition-transform duration-500"
          priority
        />
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full shadow-md text-sm">
          <span className="text-green-600 font-semibold">${tour.price}</span>
          <span className="text-gray-500 text-xs"> / {tour.priceUnit}</span>
        </div>

        {/* Featured tag */}
        {tour.featured && (
          <div className="absolute top-4 left-4 bg-accent-600 text-white py-1 px-3 rounded-full text-xs font-medium shadow-md">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and rating */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors">
            <a href="#">{tour.title}</a>
          </h3>
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-gray-800 font-medium">{tour.rating}</span>
            <span className="text-gray-500 ml-1">({tour.reviewCount})</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center mb-4 text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-green-600 mr-2" />
          <span>{tour.location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm">
          {tour.description.length > 120
            ? `${tour.description.substring(0, 120)}...`
            : tour.description}
        </p>

        {/* Bottom info */}
        <div className="border-t border-gray-100 pt-4 mt-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{tour.maxPeople} people max</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5">
          <a
            href="#"
            className="btn btn-primary w-full text-center block text-white bg-green-600 hover:bg-green-700 transition rounded py-2"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
