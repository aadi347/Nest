import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const listings = [
  {
    id: 1,
    title: 'Luxury Apartment in Downtown',
    description: 'Experience luxury living in the heart of the city with modern amenities and stunning views.',
    imageUrl: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rent: '1200k',
    location: 'Mumbai',
    area: '1500 sq ft',
  },
  {
    id: 2,
    title: 'Cozy Family House',
    description: 'A beautiful family home with a spacious garden and peaceful neighborhood.',
    imageUrl: 'https://images.pexels.com/photos/14512055/pexels-photo-14512055.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rent: '800k',
    location: 'Bangalore',
    area: '2000 sq ft',
  },
  {
    id: 3,
    title: 'Modern Office Space',
    description: 'Perfectly suited for startups and growing companies with flexible workspaces.',
    imageUrl: 'https://images.pexels.com/photos/10486182/pexels-photo-10486182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rent: '1500k',
    location: 'Delhi',
    area: '3000 sq ft',
  },
  // Add more listings as needed
];

const PropertyListings = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      delay: 200, // Delay between elements
      easing: 'ease-in-out', // Animation easing style
      offset: 120, // Offset from top to start animation
    });
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl"
          data-aos="fade-up"
        >
          Featured Listings
        </h2>
        <p
          className="mt-4 text-center text-lg text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover properties that fit your lifestyle and needs.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing, index) => (
            <div
              key={listing.id}
              className="flex flex-col p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              data-aos="fade-right"
              data-aos-delay={index * 150} // Delay increases with each card
            >
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="h-48 w-full object-cover rounded-t-lg mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-2xl font-semibold text-custom-green">${listing.rent}</span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full">For Rent</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{listing.title}</h3>
              <p className="mt-2 text-gray-600">{listing.description}</p>

              <div className="mt-4 flex items-center space-x-4 text-gray-600">
                {/* Location Icon */}
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-custom-green mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 5 11 7 13 2-2 7-7.75 7-13 0-3.86-3.14-7-7-7zm0 11.25c-1.38 0-2.5-1.12-2.5-2.5S10.62 8.25 12 8.25s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>{listing.location}</span>
                </div>

                {/* Sq Feet Icon */}
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-custom-green mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 4h-4V2h-2v2H5c-1.1 0-2 .9-2 2v12h2v-4h14v4h2V6c0-1.1-.9-2-2-2zm-2 6h-4v4h4v-4zM7 6h4v4H7V6z"/>
                  </svg>
                  <span>{listing.area}</span>
                </div>
              </div>

              <button className="mt-4 bg-custom-green text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-500 transition duration-200 ease-in-out">
                More Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
