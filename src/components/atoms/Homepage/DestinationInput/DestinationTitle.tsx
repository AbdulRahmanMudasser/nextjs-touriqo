import React from 'react';

interface DestinationTitleProps {
  children: React.ReactNode;
}

export const DestinationTitle: React.FC<DestinationTitleProps> = ({ children }) => {
  return (
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      {children}
    </h3>
  );
};