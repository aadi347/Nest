import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaHome, FaDollarSign } from 'react-icons/fa';
import { MapPinIcon, HomeIcon, CurrencyDollarIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import CustomDropdown from './CustomDropdown';


const SearchBar = () => {

  const [location, setLocation] = useState('Mumbai');
  const [flatType, setFlatType] = useState('Flats');
  const [rent, setRent] = useState('Price');
  const [loading, setloading] = useState(false);
  const [flatsData, setFlatsData] = useState([]);
  
  const hanldeSearch = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
        const result = await axios.post('http://localhost:3000/search', {
        location,
        flatType,
        rent,
      });
      setFlatsData(result.data);
      setloading(false);
      console.log(result.data);
    } catch (error) {
      console.log(error);
      setloading(false);
      console.error(error.response?.data || error.message);
      alert("An error occurred while sending the data to the server. Please check the console.");
    }}

    return (
     
      <div className="flex justify-center items-center ">
    <div className="flex items-center bg-white  border-gray-200 rounded-full p-3 w-full max-w-4xl bg-opacity-30 backdrop-blur-lg">
      
      {/* Location Dropdown */}
      <div className="relative flex-1 flex items-center space-x-2 px-3">
        
        <CustomDropdown />
   
      </div>

      {/* Separator */}
      <div className="h-6 border-l border-gray-300"></div>

      {/* Flat Type Dropdown */}
      <div className="relative flex-1 flex items-center space-x-2 px-3">
        <HomeIcon className="h-6 w-6 text-[#8E05C2]" />
        <select
          value={flatType}
          onChange={(e) => setFlatType(e.target.value)}
          className="w-full appearance-none bg-transparent focus:outline-none cursor-pointer font-semibold"
        >
          <option value="1BHK">1BHK</option>
          <option value="2BHK">2BHK</option>
          <option value="3BHK">3BHK</option>
          <option value="Custom">Custom</option>
        </select>
        <ChevronDownIcon className="h-5 w-5 text-gray-500" />
      </div>

      {/* Separator */}
      <div className="h-6 border-l border-white"></div>

      {/* Price Dropdown */}
      <div className="relative flex-1 flex items-center space-x-2 px-3">
        <CurrencyDollarIcon className="h-6 w-6 text-[#8E05C2]" />
        <select
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          className="w-full appearance-none bg-transparent focus:outline-none cursor-pointer font-semibold"
        >
          <option value="Price">Price</option>
          <option value="10k-20k">10k-20k</option>
          <option value="20k-30k">20k-30k</option>
          <option value="Above 30k">Above 30k</option>
        </select>
        <ChevronDownIcon className="h-5 w-5 text-white" />
      </div>

      {/* Search Button */}
      <button onClick={hanldeSearch} className="bg-[#8E05C2] hover:[#8E05C2] text-white font-semibold px-6 py-2 rounded-full ml-3">
        Search
      </button>
    </div>



    <div className="flex flex-col items-center py-5">
    {/* Search Bar Component */}
    {/* ... */}

    {/* Display Search Results */}
    {/* <div className="mt-10 w-full max-w-4xl">
      {loading ? (
        <p>Loading...</p>
      ) : flatsData.length > 0 ? (
        <ul>
          {flatsData.map((property, index) => (
            <li key={index} className="border p-4 mb-2 rounded-lg shadow-md">
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Flat Type:</strong> {property.flatType}</p>
              <p><strong>Price:</strong> ₹{property.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div> */}
  </div>

  </div>
    )
  };
  
  export default SearchBar;