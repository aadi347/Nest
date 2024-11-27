// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NestLogo from "../assets/icons/NestLogo.png"
import SearchLogo from "../assets/icons/search.svg";
import AboutUs from '../pages/AboutUs';

const Navbar = () => {
  

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-custom-green to-custom-purple">
      <div className="text-white">
        <img src={NestLogo} alt="NestLogo" className='w-12 h-12 ml-16' />
      </div>
      <div
        className="md:flex md:items-center md:space-x-6 ml-auto">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/AboutUs" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link to="/Login" className="text-white hover:text-gray-300">
          Login
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>

        {/* Search Box */}
        <form
        
          className="flex items-center bg-slate-100 rounded-xl pl-2 pr-4"
        >
          <input
            type="text"
            
            placeholder="Search..."
            className="bg-transparent text-white outline-none placeholder-custom-purple w-32 md:w-48"
          />
          <button
            type="submit"
            className="ml-2 text-custom-purple"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          </button>
        </form>
      </div>
    </nav>
  );
};


export default Navbar;
