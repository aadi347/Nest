import React from 'react';
import NestBoardImage from '/Users/adityakumar/Desktop/Nest/frontend/src/assets/NestBoardImage.png'; 

const DashboardShowcase = () => {
  return (
    <div className="py-16">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Container with grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Text section */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Explore Our Powerful Dashboard
            </h2>
            <p className="text-lg md:text-xl font-light mb-8">
              Our dashboard provides you with all the tools and insights you need to
              manage and monitor your business effectively. Experience a smooth and intuitive
              interface for a seamless experience.
            </p>
            <a
              href="/dashboard"
              className="px-8 py-3 text-lg bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Explore Dashboard
            </a>
          </div>
          
          {/* Image section */}
          <div className="relative">
            <div className="transform hover:scale-105 transition-transform duration-500 ease-in-out">
              <img 
                src={NestBoardImage} 
                alt="Dashboard Preview" 
                className="rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardShowcase;
