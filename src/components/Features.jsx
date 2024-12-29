import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import affordable from '../assets/loan.png'
import privacy from '../assets/privacy.png'
import multipleOption from '../assets/geometry.png'
import detail from '../assets/search-file.png'
import support from '../assets/customer-service.png'

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      delay: 200, // Delay before the animation starts
      once: true, // Animation happens only once
      offset: 100, // Animate only once
    });
  }, []);

  return (
    <div className='h-screen flex flex-col justify-center items-center relative top-10'> 
       <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-custom-green to-custom-purple bg-clip-text text-transparent sm:text-4xl">Features that impresses</h2>
      <div className="m-5 grid gap-4 :grid-cols-12 ">
        <div
          className="bg-white shadow-xl col-span-2 h-36 w-36 rounded-3xl border relative overflow-hidden group"
          data-aos="fade-up"
        >
          <div className="flex justify-center items-center h-full group-hover:translate-y-[-20px] transition-transform duration-300">
            <img src={affordable} alt="Affordable Housing" className="size-12" />
          </div>
          <h1 className="text-sm font-bold absolute bottom-4 left-7 right-0 transform translate-y-full opacity-0 p-2 transition-opacity duration-300 px-2 py-2 text-gray-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            Affordable Housing
          </h1>
        </div>

        <div
          className="bg-white shadow-xl col-span-2 h-36 w-36 rounded-3xl border relative overflow-hidden group"
          data-aos="fade-left"
        >
          <div className="flex justify-center items-center h-full group-hover:translate-y-[-20px] transition-transform duration-300">
            <img src={support} alt="Customer Support" className="size-12" />
          </div>
          <p className="text-sm font-bold absolute bottom-4 left-6 right-0 transform translate-y-full opacity-0 p-2 transition-opacity duration-300 text-gray-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            Customer Support
          </p>
        </div>

        <div
          className="bg-white shadow-xl col-span-2 h-36 w-36 row-start-2 border rounded-3xl self-start relative overflow-hidden group"
          data-aos="fade-right"
        >
          <div className="flex justify-center items-center h-full group-hover:translate-y-[-20px] transition-transform duration-300">
            <img src={privacy} alt="Privacy Protection" className="size-12" />
          </div>
          <p className="text-sm font-bold absolute bottom-4 left-7 right-0 transform translate-y-full opacity-0 p-2 transition-opacity duration-300 text-gray-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            Privacy Protection
          </p>
        </div>

        <div
          className="bg-white shadow-xl col-span-2 h-36 w-36 rounded-3xl border row-start-2 self-start relative overflow-hidden group"
          data-aos="fade-down"
        >
          <div className="flex justify-center items-center h-full group-hover:translate-y-[-20px] transition-transform duration-300">
            <img src={multipleOption} alt="Multiple Options" className="size-12" />
          </div>
          <p className="text-sm font-bold absolute bottom-4 left-10 right-0 transform translate-y-full opacity-0 p-2 transition-opacity duration-300 text-gray-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            Multiple Options
          </p>
        </div>

        <div
          className="bg-white shadow-xl col-span-4 row-start-3 rounded-3xl h-16 border w-full self-start relative overflow-hidden group"
          data-aos="flip-left"
        >
          <div className="flex justify-center items-center h-full group-hover:translate-x-[50px] transition-transform duration-300">
            <img src={detail} alt="Detailed Information" className="size-12" />
          </div>
          <p className="text-sm font-bold absolute bottom-4 left-7 right-0 transform translate-y-full opacity-0 p-2 transition-opacity text-gray-500 duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
            Detailed Information
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
