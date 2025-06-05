import React from 'react';
import Topbar from '@/components/molecules/Topbar';
import Navbar from '@/components/molecules/Navbar';
import { HeaderSection } from '../../components/organisms/Tourslistpage/HeaderSection/HeaderSection';
import { ToursListMain } from '../../components/organisms/Tourslistpage/ToursListMainSection/ToursListMain';
import { FooterSection } from '../../components/organisms/GlobalSections/FooterSection/FooterSection';
import { Banner } from '@/components/molecules/Homepage/AdventureSection/Banner';

export default function ToursList() {
  return (
    <>
      <Topbar />
      <Navbar />
      <HeaderSection />
      <ToursListMain />
      <Banner />
      <FooterSection />
    </>
  );
}