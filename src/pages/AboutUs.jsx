import React from 'react';
import { Link } from 'react-router-dom';
import Illustration from "../assets/icons/illustartion.jpg";
import Reception from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/receptionist.svg"

const AboutUs = () => {
  return (
    <div className='bg-gray-50 h-screen flex items-center justify-center'>
    <div
      className="bg-black shadow-2xl max-w-7xl mx-auto px-6 lg:px-8  transition duration-300 ease-in-out transform hover:scale-100"
      style={{ width: '1212px', height: '611px', borderRadius: '50px' }}
    >
      {/* Content Wrapper */}
      <div className="flex items-center justify-start pl-8 h-full">
        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-[#8E05C2] bg-clip-text text-transparent">About Us</h1>
          <p className="text-lg text-gray-600 rounded-lg w-[400px] h-[200px]">
            We are Nest, your premier destination for online property and flat rentals. Whether you're looking for a cozy apartment in the heart of the city or a spacious house in the suburbs, we have a diverse selection of properties to meet your needs. Our user-friendly platform makes it easy to search, compare, and secure the perfect rental with just a few clicks.
            </p>

          <button className="px-6 py-3 bg-[#8E05C2] text-white rounded-full hover:bg-[#8d05c27d] transition duration-300 ease-in-out relative top-5">
            Explore Properties
          </button>
        </div>
      </div>
      
      {/* Image */}
      <img src={Reception} alt="Illustration" className="w-[500px] h-[500px] absolute top-20 left-1/2 " />
    </div>
    </div>
  );
};

export default AboutUs;
