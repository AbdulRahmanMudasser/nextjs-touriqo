import React from 'react';
import Image from 'next/image';
import { Shield, Award, Compass, Sunset } from 'lucide-react';

const FeaturedSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-green-600" />,
      title: "100% Safe Travel",
      description: "We ensure your safety with comprehensive travel insurance and local support throughout your journey."
    },
    {
      icon: <Award className="h-10 w-10 text-green-600" />,
      title: "Expert Guides",
      description: "All our tours are led by experienced guides with deep knowledge of each destination."
    },
    {
      icon: <Compass className="h-10 w-10 text-green-600" />,
      title: "Customized Itineraries",
      description: "We tailor each trip to provide the perfect balance of adventure, culture, and relaxation."
    },
    {
      icon: <Sunset className="h-10 w-10 text-green-600" />,
      title: "Unforgettable Experiences",
      description: "Create lasting memories with unique activities and off-the-beaten-path adventures."
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
            <Image
  src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt="Adventure Travel"
  width={1260}
  height={750}
  className="w-full h-[500px] object-cover"
/>

            </div>
            
            {/* Stats card */}
            <div className="absolute bottom-8 right-0 bg-white p-6 rounded-lg shadow-xl md:translate-x-1/4">
              <div className="flex items-start gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600">15+</div>
                  <div className="text-gray-600 mt-1">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600">1K+</div>
                  <div className="text-gray-600 mt-1">Happy Travelers</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content side */}
          <div>
            <span className="text-green-600 font-semibold">Why choose us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
              We Offer The Best Travel Experience
            </h2>
            <p className="text-gray-600 mb-8">
              At GoWild, we believe that travel should be transformative. Our expertly crafted tours combine adventure, 
              cultural immersion, and comfort to create unforgettable journeys. With over 15 years of experience, 
              we&apos;re dedicated to creating the perfect travel experience for every explorer.
            </p>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-all">
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;