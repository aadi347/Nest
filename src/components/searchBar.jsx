import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaHome, FaDollarSign } from 'react-icons/fa';

const SearchBar = () => {
    return (
      <div className="flex items-center justify-between relative bottom-72 max-w-3xl mx-auto p-4 bg-white rounded-full shadow-custom-heavy border-gray-300">
        {/* Location Dropdown */}
        <div className="flex items-center space-x-2 px-4">
          <FaMapMarkerAlt className="text-purple-600" />
          <span className="font-semibold text-gray-700">Mumbai</span>
          <span className="text-gray-500">▼</span>
        </div>
  
        {/* Divider */}
        <div className="h-6 w-px bg-gray-300"></div>
  
        {/* Property Type Dropdown */}
        <div className="flex items-center space-x-2 px-4">
          <FaHome className="text-purple-600" />
          <span className="font-semibold text-gray-700">Flats</span>
          <span className="text-gray-500">▼</span>
        </div>
  
        {/* Divider */}
        <div className="h-6 w-px bg-gray-300"></div>
  
        {/* Price Dropdown */}
        <div className="flex items-center space-x-2 px-4">
          <FaDollarSign className="text-purple-600" />
          <span className="font-semibold text-gray-700">Price</span>
          <span className="text-gray-500">▼</span>
        </div>
  
        {/* Divider */}
        <div className="h-6 w-px bg-gray-300"></div>
  
        {/* Search Button */}
        <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-custom-green-hover focus:outline-none">
          Search
        </button>
      </div>
    );
  };
  
  export default SearchBar;