"use client";
import { Calendar, ShoppingCart } from "lucide-react";
import Image from "next/image";
import BookingForm from "./BookingForm";

interface TourBookingProps {
  id: string;
  description: string;
}

export default function TourBooking({
  id,
  description = "None",
}: TourBookingProps) {
  // Capitalize first letter of a string
  const capitalizeFirstLetter = (str: string) => {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Parse description to extract "Places Nearby" and "Accessibility" sections
  const parseDescription = (desc: string) => {
    // Case-insensitive markers
    const placesNearbyRegex = /places\s+nearby:/i;
    const accessibilityRegex = /accessibility:/i;

    let mainDescription = desc;
    let placesNearby = "";
    let accessibility = "";

    // Find "Places Nearby" section
    const placesNearbyMatch = desc.match(placesNearbyRegex);
    if (placesNearbyMatch) {
      const startIndex = placesNearbyMatch.index!;
      const endIndex = desc.match(accessibilityRegex)?.index || desc.length;
      placesNearby = capitalizeFirstLetter(
        desc.substring(startIndex + placesNearbyMatch[0].length, endIndex).trim()
      );
      mainDescription = desc
        .substring(0, startIndex)
        .concat(desc.substring(endIndex))
        .trim();
    }

    // Find "Accessibility" section
    const accessibilityMatch = mainDescription.match(accessibilityRegex);
    if (accessibilityMatch) {
      const startIndex = accessibilityMatch.index!;
      accessibility = capitalizeFirstLetter(
        mainDescription.substring(startIndex + accessibilityMatch[0].length).trim()
      );
      mainDescription = mainDescription.substring(0, startIndex).trim();
    }

    return {
      mainDescription: mainDescription || "None",
      placesNearby,
      accessibility,
    };
  };

  const { mainDescription, placesNearby, accessibility } = parseDescription(description);

  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-8 font-sans bg-gray-50 rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
        {/* Left Content Section */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Explore Tours</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            {mainDescription}
          </p>

          {placesNearby && (
            <>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Places Nearby</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                {placesNearby}
              </p>
            </>
          )}

          {accessibility && (
            <>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Accessibility</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                {accessibility}
              </p>
            </>
          )}

          <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Facilities</h3>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-2">Challenge</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium
            totam rem aperiam,
            eaque ipsa quae ab illo inventore quasi architecto beatae vitae dicta.
          </p>
        </div>

        {/* Center Image */}
        <div className="w-full md:w-1/3 relative h-72 sm:h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/tour.jpeg"
            alt="Beautiful tour destination with scenic landscapes"
            fill
            className="object-cover"
            fillpriority
            className="object-fit rounded"
            priority
          />
        </div>

        {/* Booking Form */}
        <BookingForm id={id} />
      </div>
    </div>
  );
}