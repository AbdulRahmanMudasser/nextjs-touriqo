import Navbar from '@/components/molecules/Navbar';
import { HeroSection } from '../components/organisms/Homepage/HeroSection/HeroSection';
import { BrowseTypes } from '../components/organisms/Homepage/BrowseTypeSection/BrowseTypes';
import { AdventuTours } from '../components/organisms/Homepage/AdventuToursSection/AdventuTours';
import { GowildsSection } from '../components/organisms/Homepage/GoWildsSection/GoWildsSection';
import { WhoWeAreSection } from '../components/organisms/Homepage/WhoWeAreSection/WhoWeAre';
import { WhatWeOfferSection } from '../components/organisms/Homepage/WhatWeOfferSection/WhatWeOffer';
import { TravelGallerySection } from '../components/organisms/Homepage/TravelGallerySection/TravelGallerySection';
import { FooterSection } from '../components/organisms/GlobalSections/FooterSection/FooterSection';
import { QASection } from '../components/organisms/Homepage/QASection/QASection';
import { TourSection } from '../components/organisms/Homepage/TourSection/TourSection';
import { AdventureSection } from '../components/organisms/Homepage/AdventureSection/AdventureSection';
import Topbar from '@/components/molecules/Topbar';
import '../components/atoms/Homepage/Homepage.css';
export default function Home() {
    return (
        <>
            <Topbar />
            <Navbar />
            <HeroSection />
            <BrowseTypes />
            <AdventuTours />
            <GowildsSection />
            <WhoWeAreSection />
            <WhatWeOfferSection />
            <div style={{ padding: '48px 0', backgroundColor: '#f8fafc' }}>
                <QASection />
            </div>
            <div style={{ padding: '48px 0', backgroundColor: '#fff' }}>
                <TourSection /></div>
            <div style={{ padding: '48px 0', backgroundColor: '#fff' }}>
                <AdventureSection />
            </div>
            <TravelGallerySection />
            <FooterSection />
        </>
    );
}
