import React from 'react';
import { Link } from 'react-router-dom';
import MountainImage from "../assets/icons/hand-drawn-flat-design-mountain-landscape_23-2149158786.jpg";
import { FaMapMarkerAlt, FaHome, FaDollarSign } from 'react-icons/fa';
import SearchBar from '../components/searchBar';
import Testimonials from '../components/Testimonials';
import PropertyListings from '../components/PropertyListings';
import Features from '../components/Features';
import ContactNewsletter from '../components/ContactNewsletter';
import ShowBlog from '../components/ShowBlog';
// import NestBoardFeature from '../components/NestBoardFeature';

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
          <div>
        {/* <NestBoardFeature /> */}
        </div> 
          <div>
          <Features />
        </div>
         <div>
        <PropertyListings/>
        </div> 
        <div>
          <Testimonials />
        </div>
        <div>
          <ShowBlog />
          </div>

          
    </div>
  );
};

export default Home;
