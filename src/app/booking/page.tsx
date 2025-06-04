import React from 'react';
// import Navbar from '@/components/molecules/booking/Navbar'
import Navbar from '@/components/molecules/Navbar';
import {FooterSection} from '@/components/organisms/GlobalSections/FooterSection/FooterSection';
import Hero from '../../components/home/Hero';


import TourSection from '../../components/templates/TourSection'
import { WhoWeAreSection1 } from '../../components/organisms/booking/WhoWeAreSection/WhoWeAre1';
function App() {
  
  return (
    <div className="min-h-screen">
    <Navbar />
      <main>
        <Hero />
    
     <TourSection/>
      <WhoWeAreSection1 />
      <FooterSection/>
      </main>
      
    </div>
  );
}
export default App;