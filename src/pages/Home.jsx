import React from 'react';
import { Link } from 'react-router-dom';
import MountainImage from "../assets/icons/hand-drawn-flat-design-mountain-landscape_23-2149158786.jpg";
import { FaMapMarkerAlt, FaHome, FaDollarSign } from 'react-icons/fa';
import SearchBar from '../components/searchBar';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import PropertyListings from '../components/PropertyListings';
import AboutUs from '../components/AboutUs';
import ContactNewsletter from '../components/ContactNewsletter';
import Dashboard from '../dashboard/Dashboard';

const Home = () => {

  return (
    <div className="">
     

     <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#ABDCFF] via-[#0396FF] to-[#0396FF] md:text-5xl lg:text-6xl dark:text-white animate-reveal">Welcome to NEST : Redefining Online Rentals</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Your one-stop platform for finding the perfect rental property. Discover affordable housing, prime locations, and quality infrastructure—all in one place.






</p>
    </div>
</section>
        <div>
          <SearchBar />
          </div>
          <div className='relative -top-20'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0396FF" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>
          <div>
          <Features />
        </div>
        <div>
          <Testimonials />
        </div>
        <div>
        <PropertyListings/>
        </div>
        
       

        
        
       
    </div>
  );
};

export default Home;
