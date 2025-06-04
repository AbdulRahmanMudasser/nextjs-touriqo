import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';

interface TourInfoProps {
  location: string;
  duration: string;
  maxPeople: number;
}

const TourInfo: React.FC<TourInfoProps> = ({ location, duration, maxPeople }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center">
        <MapPin className="h-4 w-4 text-green-600 mr-2" />
        <span className="text-gray-600">{location}</span>
      </div>
      <div className="flex items-center justify-between text-gray-600">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{duration}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          <span className="text-sm">{maxPeople} people max</span>
        </div>
      </div>
    </div>
  );
};

export default TourInfo;