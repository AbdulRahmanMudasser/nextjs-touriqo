import React from 'react';
import SearchBar from '../organisms/booking/SearchBar';

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1280')`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto">
         
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-5 leading-tight">
              Explore The Worlds
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-gray-200 mb-8 sm:mb-9 lg:mb-10 font-light tracking-wide">
              People Don&apos;t Take, Trips Take People
            </p>          </div>
        </div>
      </section>

      {/* Search Box Section */}
      <div className="mt-8 sm:mt-12 md:mt-16 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-0">
        <SearchBar />
      </div>
    </>
  );
};

export default Hero;
