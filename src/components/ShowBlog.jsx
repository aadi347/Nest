import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Undraw from "../assets/undraw_best-place_dhzp.svg"

const ShowBlog = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          delay: 100, // Delay between elements
          easing: 'ease-in-out', // Animation easing style
          offset: 100, // Offset from top to start animation
        });
      }, []);
  return (

<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 data-aos="zoom-out" className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Insights</h2>
    <p data-aos="zoom-out" className="mt-1 text-gray-600 dark:text-neutral-400">Stay in the know with insights from industry experts.</p>
  </div>
  


  <div  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    <a data-aos="zoom-out-right" className="group flex flex-col focus:outline-none" href="#">
      <div data-aos="zoom-out-right" className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://realestateshop.com.au/wp-content/uploads/2024/06/Untitled-design-1.jpg" alt="Blog Image" />
        <span className="absolute top-0 end-0 rounded-se-xl opacity-70 backdrop-blur-3xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
          Featured
        </span>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
        Finding Your Perfect Rental
        </h3>
        <p className="mt-3 text-gray-800 dark:text-neutral-200">
        Looking for a rental property can be overwhelming, especially with so many options available online.
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
          Read more
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
 

    
    <a data-aos="zoom-out-left" className="group flex flex-col focus:outline-none" href="#">
      <div data-aos="zoom-out-left" className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
        Essential Tips for Tenants
        </h3>
        <p className="mt-3 text-gray-800 dark:text-neutral-200">
          With the rise of online rental listings, fraudulent schemes have also increased.
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
          Read more
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
 


    <a data-aos="flip-up" className="group relative flex flex-col w-full min-h-60 bg-[url('https://preview.redd.it/sometimes-these-ai-generated-images-are-quite-nice-v0-8wii2qlwixmc1.jpg?width=640&crop=smart&auto=webp&s=42bff5804489c8da3360bfee0a0d1b8f297913ac')] bg-center bg-cover rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition" href="#">
      <div className="flex-auto p-4 md:p-6" data-aos="flip-up">
        <h3 className="text-xl text-white/90 group-hover:text-white"><span className="font-bold">Nest</span> Why Online Rental Platforms Are Changing the Real Estate Game.</h3>
      </div>
      <div className="pt-0 p-4 md:p-6">
        <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/70 group-focus:text-white/70">
          Visit the site
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </div>
    </a>

  </div>
  
</div>

  )
}

export default ShowBlog