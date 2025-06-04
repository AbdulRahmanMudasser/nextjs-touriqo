import React from 'react';
import Img from '../Components/img';
import Header from '../Components/header';
import TourInformation from '../Components/tourInformation';
import TourBooking from '../Components/tourBooking';
import TourPlan from '../Components/tourplan';
import Map from '../Components/map';
import Calender from '../Components/calender';
import ReviewScores from '../Components/reviewscore';
import TourComments from '../Components/tourComment';

export default function Page() {
  return (
    <div className="font-sans">
      
      <Img />
      <Header />
  
      <TourInformation />
      <TourBooking />
      <TourPlan />
      <Map />
    <Calender />
      <ReviewScores />
      <TourComments />
    </div>
  );
}