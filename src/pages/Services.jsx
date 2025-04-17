import React from "react";
import { FaHome, FaKey, FaSearch, FaLock, FaUserShield } from "react-icons/fa";
import CustomerSupport from "../assets/ServicesComponents/24/7CustomerSupport.svg";
import SafeSecure from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/ServicesComponents/Safe&SecurePlatform.svg";
import RealTimeUpdates from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/ServicesComponents/RealTimeUpdates.svg";
import TransparentPricing from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/ServicesComponents/Transparent Pricing.svg";
import NearbyAmenities from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/ServicesComponents/NearbyAmenities.svg";
import DataPrivacy from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/ServicesComponents/DataPrivacyEnsured.svg";

const Services = () => {
  return (
    <div className="p-6 md:p-12 bg-black text-gray-800">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-[#2ec4b6]">Our Services</h1>
        <p className="text-lg text-gray-600">
          Simplifying property rental for tenants & owners with powerful tools and a seamless experience.
        </p>
      </section>

      {/* Services for Renters and Owners */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Renters */}
        <div className="p-6 rounded-2xl shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 text-[#2ec4b6]">For Renters</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3"><FaSearch className="text-[#2ec4b6]" /> Search with filters by location, price, and type</li>
            <li className="flex items-center gap-3"><FaHome className="text-[#2ec4b6]"  /> Explore verified property listings</li>
            <li className="flex items-center gap-3"><FaKey className="text-[#2ec4b6]" /> View detailed amenities & book directly</li>
          </ul>
        </div>

        {/* Property Owners */}
        <div className="p-6 rounded-2xl shadow-lg border">
          <h2 className="text-2xl font-semibold mb-4 text-[#2ec4b6]">For Property Owners</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3"><FaKey className="text-[#2ec4b6]" /> List your properties easily</li>
            <li className="flex items-center gap-3"><FaUserShield className="text-[#2ec4b6]" /> Manage listings from your dashboard</li>
            <li className="flex items-center gap-3"><FaLock className="text-[#2ec4b6]" /> Secure and verified tenant inquiries</li>
          </ul>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="mb-12">
      <div className="flex items-center justify-center mb-6">
    <div className="border-l-4 border-[#2ec4b6] h-6 mr-4"></div>
    <h3 className="text-2xl font-semibold text-center text-[#2ec4b6]">Key Features</h3>
    <div className="border-r-4 border-[#2ec4b6] h-6 ml-4"></div>
  </div>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="p-4 border rounded-xl shadow hover:shadow-[0_4px_10px_#2ec4b6] transition">
     <img src={CustomerSupport} alt="24/7 Customer Support" className="w-20 h-20 mx-auto mb-4" />
      <p className="text-center text-gray-700">24/7 Customer Support</p>
    </div>
    <div className="p-4 border rounded-xl shadow hover:shadow-[0_4px_10px_#2ec4b6] transition">
        <img src={SafeSecure} alt="Safe & Secure Platform" className="w-30 h-20 mx-auto mb-4" />
      <p className="text-center text-gray-700">Safe & Secure Platform</p>
    </div>
    <div className="p-4 border rounded-xl shadow hover:shadow-[0_4px_10px_#2ec4b6] transition">
        <img src={RealTimeUpdates} alt="Real-Time Updates" className="w-20 h-20 mx-auto mb-4" />
      <p className="text-center text-gray-700">Real-Time Updates</p>
    </div>
    <div className="p-4 border rounded-xl shadow hover:shadow-[0_4px_10px_#2ec4b6] transition">
        <img src={TransparentPricing} alt="Transparent Pricing" className="w-20 h-20 mx-auto mb-4" />
      <p className="text-center text-gray-700">Transparent Pricing</p>
    </div>
    <div className="p-4 border rounded-xl shadow hover:shadow-[0_4px_10px_#2ec4b6]  transition">
        <img src={NearbyAmenities} alt="Nearby Amenities" className="w-20 h-20 mx-auto mb-4" />
      <p className="text-center text-gray-700">Nearby Amenities</p>
    </div>
    <div className="p-4 border rounded-xl shadow  hover:shadow-[0_4px_10px_#2ec4b6] transition">
        <img src={DataPrivacy} alt="Data Privacy Ensured" className="w-20 h-20 mx-auto mb-4" />
      <p className="text-center text-gray-700">Data Privacy Ensured</p>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4 text-[#2ec4b6]">Ready to Get Started?</h3>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-[#2ec4b6] text-white rounded-full hover:[#2ec4b6] transition">Explore Rentals</button>
          <button className="px-6 py-3 border border-[#2ec4b6] text-[#2ec4b6] rounded-full  transition">List Your Property</button>
        </div>
      </section>
    </div>
  );
};

export default Services;
