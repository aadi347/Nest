import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Sitemap</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Explore the structure of our NEST rental website to find exactly what you’re looking for.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Home Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Home</h2>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/" className="hover:text-indigo-600">Home Page</Link></li>
              <li><Link to="/about" className="hover:text-indigo-600">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-600">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-indigo-600">FAQs</Link></li>
            </ul>
          </div>

          {/* Property Listings Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Property Listings</h2>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/listings" className="hover:text-indigo-600">All Listings</Link></li>
              <li><Link to="/listings/rentals" className="hover:text-indigo-600">Rental Properties</Link></li>
              <li><Link to="/listings/sales" className="hover:text-indigo-600">Properties for Sale</Link></li>
              <li><Link to="/listings/featured" className="hover:text-indigo-600">Featured Listings</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Services</h2>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/services/maintenance" className="hover:text-indigo-600">Property Maintenance</Link></li>
              <li><Link to="/services/consulting" className="hover:text-indigo-600">Consulting Services</Link></li>
              <li><Link to="/services/property-management" className="hover:text-indigo-600">Property Management</Link></li>
            </ul>
          </div>

          {/* User Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">User Account</h2>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/login" className="hover:text-indigo-600">Login</Link></li>
              <li><Link to="/register" className="hover:text-indigo-600">Register</Link></li>
              <li><Link to="/account" className="hover:text-indigo-600">My Account</Link></li>
              <li><Link to="/account/bookings" className="hover:text-indigo-600">My Bookings</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Legal</h2>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/privacy" className="hover:text-indigo-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-600">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Blog Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Blog</h2>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/blog" className="hover:text-indigo-600">All Posts</Link></li>
              <li><Link to="/blog/category/rental-tips" className="hover:text-indigo-600">Rental Tips</Link></li>
              <li><Link to="/blog/category/market-updates" className="hover:text-indigo-600">Market Updates</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
