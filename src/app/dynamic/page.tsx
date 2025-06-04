'use client';
import React from 'react';
import Navbar from '@/components/molecules/Navbar';
import Img from '../Components/img';
import Header from '../Components/header';
import TourInformation from '../Components/tourInformation';
import TourBooking from '../Components/tourBooking';
import TourPlan from '../Components/tourplan';
import Map from '../Components/map';
import Calender from '../Components/calender';
import ReviewScores from '../Components/reviewscore';
import TourComments from '../Components/tourComment';

export default function TourDetailPage() {
  
  return (
    <div className="font-sans">
      <h1 className="text-3xl font-bold text-center py-6 text-white bg-black">
        
      </h1>
      <Navbar />
      <Img />
      <Header />
      {/* <TourInformation /> */}
      <TourBooking />
      <TourInformation />
      <TourPlan />
      <Map />
      <Calender />
      <ReviewScores />
      <TourComments />
    </div>
  );
}
