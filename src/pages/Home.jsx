import React, { useState, useEffect } from "react";
import SearchBar from '../components/searchBar';
import Testimonials from '../components/Testimonials';
import PropertyListings from '../components/PropertyListings';
import Features from '../components/Features';
import ShowBlog from '../components/ShowBlog';
// import Faqs from "../components/Faqs";
// import FlatFinderHero from "../components/FlatFinderHero";
import Faqs from "../components/faqs";
import Support from "../components/Support";


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://www.thehousedesigners.com/images/plans/URD/bulk/4286/the-prestige-front-thd.jpg",
    "https://www.thehousedesigners.com/images/plans/01/UDC/bulk/7888/front_m.webp",
    "https://cdn.houseplansservices.com/product/cdethe3dctml7tbq7qaikts6t4/w1024.jpg?v=2",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className=" px-6 py-2 shadow-xl bg-[#040D12]">


<div className="relative w-full h-screen flex items-center justify-center px-8 py-12 shadow-xl rounded-3xl">
      {/* Background Image Carousel */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-3xl transition-opacity duration-1000 py-10 px-12 shadow-2xl"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          padding: 10,
        }}
      ></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>

      {/* Text Content */}
      
      <div className="relative text-center text-white max-w-3xl p-6">
        {/* <WeatherApp /> */}
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#efc6ff] via-[#b646e3] to-[#8E05C2] md:text-5xl lg:text-6xl dark:text-white animate-reveal">Welcome to NEST : Redefining Online Rentals</h1>
        <p className="text-xs font-semibold py-5">
          Discover the best properties in prime locations. Start your journey to
          finding the perfect home today.
        </p>
        
        <SearchBar />
      </div>
   
    </div>
          <div>
       
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
          <div>
          <Faqs />
          </div>
          <div>
          <Support />
          </div>
    </div>
  );
};

export default Home;
