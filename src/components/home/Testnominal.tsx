'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Adventure Enthusiast",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "The Everest Base Camp trek exceeded all my expectations. The guides were incredibly knowledgeable and the whole experience was well-organized from start to finish. I'll definitely be booking my next adventure with GoWild!"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Travel Blogger",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5,
    text: "As someone who travels for a living, I can confidently say that GoWild offers some of the best tour experiences I've ever had. Their attention to detail and commitment to authentic experiences sets them apart."
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Family Traveler",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4,
    text: "We booked the Bali tour for our family vacation and it was perfect for all ages. The kids loved the activities and we appreciated the balance of adventure and relaxation. Looking forward to our next trip!"
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold">Testimonials</span>
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">
            Read authentic reviews from travelers who have experienced our tours firsthand
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-600 italic mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready for your next adventure?</h3>
          <a href="#" className="btn btn-primary">Book a Tour Now</a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
