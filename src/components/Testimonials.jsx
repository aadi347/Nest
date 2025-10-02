import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "Software Engineer",
    testimonial: "NEST made finding my apartment incredibly easy! The detailed information helped me make the right choice without visiting multiple properties.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Arjun Patel",
    position: "Marketing Manager", 
    testimonial: "As a property owner, NEST's transparency helped me rent out my property quickly. The platform is much better than traditional methods!",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Sneha Gupta",
    position: "HR Professional",
    testimonial: "The comprehensive property details on NEST saved me so much time! Knowing everything upfront made my decision effortless.",
    image: "https://randomuser.me/api/portraits/women/35.jpg", 
    rating: 5
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    position: "Business Owner",
    testimonial: "NEST helped me find the perfect commercial space for my store. The detailed information was exactly what I needed.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "Kavita Singh",
    position: "Freelance Designer",
    testimonial: "Being new to the city, NEST's detailed information helped me find a safe, well-connected area. Transparent pricing with no hidden charges!",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5
  },
  {
    id: 6,
    name: "Vikram Mehta",
    position: "Senior Developer",
    testimonial: "The platform made my relocation smooth. Finally, a service that understands what renters actually need to know!",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      once: true,
      offset: 50
    });
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            Customer Reviews
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who found their perfect properties through our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-purple-200 mb-4" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.testimonial}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                />
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
