import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FaParking } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { FaHandHoldingWater } from "react-icons/fa";





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
    <section className="py-16  rouned-3xl">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h2
        className="text-3xl font-extrabold text-left text-white sm:text-4xl"
        data-aos="fade-up"
      >
        Featured Listings
      </h2>
      <p
        className="mt-4 text-left text-lg text-gray-500"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Discover properties that fit your lifestyle and needs.
      </p>
  
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((listing, index) => (
          <div
            key={listing.id}
            className="relative flex flex-col bg-slate-50 border shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400 before:via-purple-500 before:to-pink-500 before:opacity-0 before:transition-opacity before:duration-300"
            data-aos="fade-right"
            data-aos-delay={index * 150} // Delay increases with each card
          >
            {/* Image Section */}
            <div className="relative w-full h-48  rounded-t-lg overflow-hidden">
              <img
                src={listing.imageUrl}
                alt={listing.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
  
            {/* Content Section */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-2 border-b pb-2">
                <span className="text-2xl font-semibold text-[#8E05C2]">
                  ${listing.rent}
                </span>
                <span className="px-3 py-1 bg-slate-50 text-[#8E05C2] text-xs rounded-full">
                  For Rent
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {listing.title}
              </h3>
              <p className="mt-2 text-gray-600 text-xs">{listing.description}</p>
  
              <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 items-center text-gray-600">
  {/* Location */}
  <div className="flex items-center">
  <IoLocation className='h-5 w-5 text-[#8E05C2] mr-1' />
    <span className='text-xs'>{listing.location}</span>
  </div>

  {/* Area */}
  <div className="flex items-center">
  <PiMapPinSimpleAreaBold className='h-5 w-5 text-[#8E05C2] mr-1' />
    <span className='text-xs'>{listing.area}</span>
  </div>

  {/* Parking 1 */}
  <div className="flex items-center">
    <FaParking className='h-5 w-5 text-[#8E05C2] mr-1' />
    <span className='text-xs'>24/7 Parking</span>
  </div>

  {/* Parking 2 */}
  <div className="flex items-center">
    <FaHandHoldingWater className='h-5 w-5 text-[#8E05C2] mr-1' />
    <span className='text-xs'>Shaded Space</span>
  </div>
</div>

              
              {/* More Detail Button */}
              <button className="mt-4 w-full border border-[#8E05C2] text-[#8E05C2] hover:bg-green-700 px-4 py-2 rounded-xl font-medium transition duration-200 ease-in-out">
                More Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default PropertyListings;
