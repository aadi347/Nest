import React, { useState } from 'react';
import { HomeIcon, CurrencyDollarIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { FaCity } from "react-icons/fa6";
import axios from 'axios';

const SearchBar = () => {
  const [location, setLocation] = useState('Mumbai');
  const [flatType, setFlatType] = useState('2BHK');
  const [rent, setRent] = useState('');
  const [loading, setLoading] = useState(false);
  const [flatsData, setFlatsData] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.get('http://localhost:3000/search', {
        params: {
          location,
          flatType,
          rent,
        },
      });
      setFlatsData(result.data.properties);
      setLoading(false);
      console.log(result.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("An error occurred. Please check the console.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 w-full">
      
      <div className="flex items-center bg-white border-gray-200 rounded-full p-3 w-full max-w-4xl shadow">
   
        <div className="relative flex-1 flex items-center space-x-2 text-black px-3">
          <FaCity className="h-6 w-6 text-[#8E05C2]" />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full text-xs appearance-none bg-transparent focus:outline-none cursor-pointer font-semibold"
          >
            <option value="">Select City</option>
            <option value="Patna">Patna</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Haryana">Haryana</option>
          </select>
        </div>

        <div className="h-6 border-l border-black"></div>

 
        <div className="relative flex-1 flex items-center space-x-2 px-3">
          <HomeIcon className="h-6 w-6 text-[#8E05C2]" />
          <select
            value={flatType}
            onChange={(e) => setFlatType(e.target.value)}
            className="w-full text-xs appearance-none bg-transparent focus:outline-none cursor-pointer font-semibold"
          >
            <option value="">Flats</option>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
            <option value="Custom">Custom</option>
          </select>
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </div>

        <div className="h-6 border-l border-black"></div>


        <div className="relative flex-1 flex items-center space-x-2 px-3">
          <CurrencyDollarIcon className="h-6 w-6 text-[#8E05C2]" />
          <select
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            className="w-full text-xs appearance-none bg-transparent focus:outline-none cursor-pointer font-semibold"
          >
            <option value="">Price</option>
            <option value="10000">10000</option>
            <option value="20000">5000</option>
            <option value="30000">20000</option>
            <option value="40000">15000</option>
          </select>
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </div>

        <button
          onClick={handleSearch}
          className="bg-[#8E05C2] hover:bg-[#7201A8] text-white font-semibold px-6 py-2 rounded-full ml-3"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>


      <div className="w-full max-w-4xl mt-6 space-y-4  bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-lg">
        {flatsData.length > 0 ? (
          flatsData.map((flat) => (
            <div key={flat._id} className="border rounded-xl p-4 shadow hover:shadow-md transition">
              <h2 className="text-xl font-bold text-[#8E05C2]">{flat.houseName}</h2>
              <p><strong>Location:</strong> {flat.location}</p>
              <p><strong>Type:</strong> {flat.flatType}</p>
              <p><strong>Rent:</strong> ₹{flat.rent}</p>
              <p><strong>Parking:</strong> {flat.parking}</p>
              <p><strong>Carpet Area:</strong> {flat.carpetArea} sq.ft</p>
            </div>
          ))
        ) : (
          !loading && <p className="text-gray-500 text-center">No results to display.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
