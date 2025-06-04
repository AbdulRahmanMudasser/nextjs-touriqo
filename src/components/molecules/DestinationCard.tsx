import React from 'react';
import { DestinationImage } from '../atoms/Homepage/DestinationInput/DestinationImage';
import { DestinationTitle } from '../atoms/Homepage/DestinationInput/DestinationTitle';
import { DestinationDescription } from '../atoms/Homepage/DestinationInput/DestinationDescription';
import { DestinationButton } from '../atoms/Homepage/DestinationInput/DestinationButton';

interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, description, href }) => {
  return (
    <div className="destination-card bg-white rounded-lg shadow-md overflow-hidden">
      <DestinationImage src={image} alt={title} />
      <div className="p-6">
        <DestinationTitle>{title}</DestinationTitle>
        <DestinationDescription>{description}</DestinationDescription>
        <DestinationButton href={href}>Explore Now</DestinationButton>
      </div>
    </div>
  );
};