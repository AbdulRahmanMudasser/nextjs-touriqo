import React from 'react';

interface DestinationDescriptionProps {
  children: React.ReactNode;
}

export const DestinationDescription: React.FC<DestinationDescriptionProps> = ({ children }) => {
  return (
    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
      {children}
    </p>
  );
};