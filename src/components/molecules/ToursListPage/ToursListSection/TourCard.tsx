import React from 'react';
import { TourCardImage } from '../../../atoms/ToursListPage/ToursListSection/TourCardImage';
import { TourCardTitle } from '../../../atoms/ToursListPage/ToursListSection/TourCardTitle';
import { TourCardLocation } from '../../../atoms/ToursListPage/ToursListSection/TourCardLocation';
import { TourCardRating } from '../../../atoms/ToursListPage/ToursListSection/TourCardRating';
import { TourCardPrice } from '../../../atoms/ToursListPage/ToursListSection/TourCardPrice';
import { TourCardButton } from '../../../atoms/ToursListPage/ToursListSection/TourCardButton';

interface TourCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  price: string;
  href: string;
}

export const TourCard: React.FC<TourCardProps> = ({ image, title, location, rating, price, href }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <TourCardImage src={image} alt={title} />
      <TourCardTitle>{title}</TourCardTitle>
      <TourCardLocation location={location} />
      <TourCardRating rating={rating} />
      <TourCardPrice price={price} />
      <TourCardButton href={href} />
    </div>
  );
};