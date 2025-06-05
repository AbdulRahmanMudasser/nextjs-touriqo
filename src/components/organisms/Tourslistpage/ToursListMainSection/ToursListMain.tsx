import React from "react";
import { FilterSidebar } from "../../../molecules/ToursListPage/ToursListMainSection/FilterSidebar";
import { TourListSection } from "../../../molecules/ToursListPage/ToursListMainSection/TourListSection";
import Min from "../../../atoms/rabbit/list";
import TravelCard from "../../../atoms/rabbit/travelCard";

export const ToursListMain = ({ tours, loading, city }) => {
  return (
    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <FilterSidebar />
          <Min />
          <TravelCard />
        </div>
        <div className="lg:w-2/3">
          <TourListSection tours={tours} loading={loading} city={city} />
        </div>
      </div>
    </div>
  );
};