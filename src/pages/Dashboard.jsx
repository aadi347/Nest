import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Flat A', rent: '₹20,000', location: 'Mumbai', status: 'Available' },
    { id: 2, name: 'Flat B', rent: '₹25,000', location: 'Delhi', status: 'Rented' },
  ]);

  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
  });

  const addProperty = () => {
    // Logic to add a property (e.g., form submission)
    alert('Add Property functionality goes here!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col bg-blue-800 w-64 p-5 text-white">
        <h2 className="text-xl font-bold mb-4">NEST Dashboard</h2>
        <ul>
          <li><Link to="/dashboard" className="block py-2 px-4 hover:bg-blue-700">Dashboard</Link></li>
          <li><Link to="/properties" className="block py-2 px-4 hover:bg-blue-700">Properties</Link></li>
          <li><Link to="/settings" className="block py-2 px-4 hover:bg-blue-700">Account Settings</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Welcome, {userInfo.name}</h1>
          <div className="text-right">
            <p>{userInfo.email}</p>
            <button className="text-blue-600 hover:underline mt-2">Log Out</button>
          </div>
        </div>

        {/* Property Management Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Your Properties</h2>
          <button
            onClick={addProperty}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4"
          >
            Add New Property
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {properties.map(property => (
              <div key={property.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold">{property.name}</h3>
                <p className="text-gray-700">Rent: {property.rent}</p>
                <p className="text-gray-700">Location: {property.location}</p>
                <p className={`text-sm font-semibold ${property.status === 'Rented' ? 'text-red-500' : 'text-green-500'}`}>
                  Status: {property.status}
                </p>
                <button className="mt-2 text-blue-600 hover:underline">Edit</button>
                <button className="mt-2 text-red-600 hover:underline ml-2">Delete</button>
              </div>
            ))}
          </div>
        </div>

        {/* Reports Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Income Report</h2>
          <p className="text-gray-700">Your total income this month is: ₹50,000</p>
          <button className="text-blue-600 hover:underline mt-4">Download Report</button>
        </div>

        {/* Settings Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
