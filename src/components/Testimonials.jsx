import React from "react";
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: "John Doe", 
    position: "CEO, Example Corp",
    testimonial: "This service has transformed our business. Their attention to detail and commitment to excellence is unparalleled.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Director, ABC Inc.",
    testimonial: "Incredible experience! The team was professional, responsive, and very skilled.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Sam Wilson",
    position: "Product Manager, XYZ LLC",
    testimonial: "We've seen amazing results with this service. It’s definitely a worthwhile investment for any growing company.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16" 
    
    style={{
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-custom-green to-custom-purple bg-clip-text text-transparent sm:text-4xl">What Our Clients Say</h2>
        <p className="mt-4 text-center text-lg text-gray-600">Hear from our satisfied clients who trust us with their projects.</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center bg-white p-8 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              
            >
              <img
                className="h-16 w-16 rounded-full mb-4 border-4 border-indigo-600"
                src={testimonial.image}
                alt={`${testimonial.name} profile`}
              />
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{testimonial.position}</p>
              <p className="mt-4 text-center text-gray-600">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
