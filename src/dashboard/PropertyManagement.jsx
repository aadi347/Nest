import React, { useState, useEffect } from 'react';

import { FaMapMarkerAlt, FaRupeeSign, FaParking, FaHome, FaBolt, FaEdit, FaTrash} from 'react-icons/fa'; // Importing icons
import { MdOutlineBedroomParent } from 'react-icons/md';


const PropertyManagement = () => {
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3000/flatregistration') // Replace with your backend URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setFlats(data); // Set the fetched data to state
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching flats:', err);
        setError('Failed to load flats');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex-col gap-4 flex items-center justify-center">
          <div
            className="w-20 h-20 border-4 border-transparent text-custom-green animate-spin flex items-center justify-center border-t-custom-green rounded-full"
          >
            <div
              className="w-16 h-16 border-4 border-transparent text-custom-purple animate-spin flex items-center justify-center border-t-custom-purple rounded-full"
            ></div>
          </div>
          <p className="text-gray-700 mt-4 text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }



  return (
   
  

 
<div className="flex-1 bg-white rounded-3xl p-6 h-screen overflow-y-auto">
      <h1 className="text-2xl font-semibold text-left mb-6">Add Property</h1>
      
      <div className="grid grid-cols-1 gap-4">
        {flats.map((flat) => (
          <div key={flat._id} className="flex bg-white rounded-xl shadow-md overflow-hidden border p-4 w-full max-w-3xl">
            <img
              src={flat.imageURL || "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000"}
              alt={flat.houseName}
              className="w-40 h-40 object-cover rounded-lg"
            />

            <div className="flex flex-col justify-between p-4 flex-grow">
              <h2 className="text-xl font-semibold text-gray-800">{flat.houseName}</h2>

              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-semibold">Rent:</span> {flat.rent} per month</p>
                <p><span className="font-semibold">Deposit:</span> {flat.deposit}</p>
                <p><span className="font-semibold">Current Status:</span> {flat.status}</p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-purple-500" />
                  {flat.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between p-4 border-l">
              <p className="text-lg font-semibold">{flat.flatType}</p>
              <p className="text-sm"><span className="font-semibold">Parking:</span> {flat.parking}</p>
              <p className="text-sm font-semibold">{flat.wheeler}</p>

              <div className="flex space-x-2 mt-4">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-md">Edit</button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagement;
