import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShowBlog = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          delay: 100,
          easing: 'ease-in-out',
          offset: 100,
        });
      }, []);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
        <div data-aos="zoom-out" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-[#8E05C2] to-[#b646e3] rounded-full"></div>
          <span className="text-sm font-medium text-[#8E05C2]">Latest Insights</span>
        </div>
        
        <h2 data-aos="zoom-out" className="text-3xl font-bold md:text-5xl md:leading-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#2D1B69] via-[#8E05C2] to-[#b646e3] mb-4">
          Expert Insights & Industry Knowledge
        </h2>
        
        <p data-aos="zoom-out" className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Discover valuable insights, expert tips, and the latest trends from real estate professionals to help you make informed decisions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <a data-aos="zoom-out-right" className="group flex flex-col focus:outline-none hover:scale-[1.02] transition-transform duration-300" href="#">
          <div data-aos="zoom-out-right" className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://realestateshop.com.au/wp-content/uploads/2024/06/Untitled-design-1.jpg" alt="Blog Image" />
            <span className="absolute top-0 end-0 rounded-se-xl backdrop-blur-sm rounded-es-xl text-xs font-semibold bg-gradient-to-r from-amber-400 to-orange-500 text-white py-1.5 px-3 shadow-lg">
              ⭐ Featured
            </span>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8E05C2] transition-colors duration-300 leading-tight">
              Finding Your Perfect Rental Property
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Discover proven strategies and insider tips for navigating the rental market. Learn how to find the perfect property that matches your lifestyle and budget.
            </p>
            <div className="mt-5 inline-flex items-center gap-x-2 text-sm font-semibold text-[#8E05C2] group-hover:text-[#b646e3] transition-colors duration-300 group-hover:gap-x-3">
              Read Full Article
              <svg className="shrink-0 size-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </div>
        </a>

        <a data-aos="zoom-out-left" className="group flex flex-col focus:outline-none hover:scale-[1.02] transition-transform duration-300" href="#">
          <div data-aos="zoom-out-left" className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <img className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Blog Image" />
            <span className="absolute top-4 left-4 backdrop-blur-sm text-xs font-medium bg-white/90 text-gray-700 py-1.5 px-3 rounded-full shadow-md">
              Security Guide
            </span>
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8E05C2] transition-colors duration-300 leading-tight">
              Essential Security Tips for Smart Tenants
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Protect yourself from rental scams and fraudulent listings. Learn the warning signs and security measures every tenant should know.
            </p>
            <div className="mt-5 inline-flex items-center gap-x-2 text-sm font-semibold text-[#8E05C2] group-hover:text-[#b646e3] transition-colors duration-300 group-hover:gap-x-3">
              Read Full Article
              <svg className="shrink-0 size-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </div>
        </a>

        <a data-aos="flip-up" className="group relative flex flex-col w-full min-h-60 bg-[url('https://preview.redd.it/sometimes-these-ai-generated-images-are-quite-nice-v0-8wii2qlwixmc1.jpg?width=640&crop=smart&auto=webp&s=42bff5804489c8da3360bfee0a0d1b8f297913ac')] bg-center bg-cover rounded-xl hover:shadow-xl focus:outline-none focus:shadow-xl transition-all duration-300 hover:scale-[1.02] shadow-lg" href="#">
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 rounded-xl"></div>
          
          <div className="flex-auto p-4 md:p-6 relative z-10" data-aos="flip-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#8E05C2] rounded-full"></div>
              <span className="text-xs font-medium text-white">Featured Story</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight">
              <span className="text-[#8E05C2] font-black">Nest Platform:</span> How Technology is Revolutionizing the Rental Experience
            </h3>
          </div>
          
          <div className="pt-0 p-4 md:p-6 relative z-10">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#8E05C2] transition-colors duration-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              Explore Platform
              <svg className="shrink-0 size-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </div>
          </div>
        </a>

      </div>
    </div>
  )
}

export default ShowBlog
