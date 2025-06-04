// src/components/organisms/booking/TourCard.tsx
import React from 'react';
import { Tour } from '../../types';
import Badge from '../../atoms/Booking/Badge';
import Rating from '../../atoms/Booking/Rating';  // Correct import for Rating
import Button from '../../atoms/Booking/Buttton'; // Corrected Button import
import TourInfo from '../../molecules/booking/TourInfo';
import PriceTag from '../../molecules/booking/Price.tag'; // Correct PriceTag import
import Image from 'next/image';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="tour-card group">
      <div className="relative overflow-hidden h-56">
        <Image
          src={tour.image}
          alt={tour.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <PriceTag price={tour.price} unit={tour.priceUnit} />
        </div>

        {tour.featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="accent">Featured</Badge>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-green-600 transition-colors">
            <a href="#">{tour.title}</a>
          </h3>
          <Rating value={tour.rating} reviewCount={tour.reviewCount} />
        </div>

        <TourInfo
          location={tour.location}
          duration={tour.duration}
          maxPeople={tour.maxPeople}
        />

        <p className="text-gray-600 my-4">
          {tour.description.length > 120
            ? `${tour.description.substring(0, 120)}...`
            : tour.description}
        </p>

        <div className="mt-5">
          <Button variant="primary" className="w-full">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
