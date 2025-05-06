import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import affordable from '../assets/loan.png'
import privacy from '../assets/privacy.png'
import multipleOption from '../assets/geometry.png'
import detail from '../assets/search-file.png'
import support from '../assets/customer-service.png'
import { IoIosWallet, IoMdOptions } from "react-icons/io";
import { RiCustomerServiceFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import MapDoodle from "../assets/map_doodle.webp"

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
    <div  className='py-7'>
    <section 
        className=" py-5 rounded-3xl">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
              <div className="relative w-full text-center lg:text-left lg:w-2/4">
                  <h2 data-aos="fade-down" className="text-4xl font-bold lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0 leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#dfaef3] via-[#b646e3] to-[#8E05C2]">Enjoy the finest features with our products</h2>
              </div>
              <div className="relative w-full text-center  lg:text-left lg:w-2/4">
                  <p data-aos="fade-right" className="text-lg font-normal text-gray-500 mb-5">We provide all the advantages that can simplify all your financial transactions without any further requirements</p> 
                  <a data-aos="fade-right" href="#" className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700 "> 
                      </a> 
              </div>
          </div>
          <div  className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
              <div data-aos="fade-up-right" className="group relative w-full bg-slate-50 shadow-lg rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:to-blue-500">
                  <div className="bg-[#efd9f7] rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                     
                     <IoIosWallet className='text-[#8E05C2] size-8 hover:rotate-12' />
                          
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Easy Payment</h4>
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                      We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances 
                  </p>
              </div>
              <div data-aos="fade-up-right" className="group relative w-full bg-slate-50 shadow-lg rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
                  <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                      {/* <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg> */}
                          <IoMdOptions className='text-[#8E05C2] size-8 hover:rotate-12' />
                          
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500">Safe Transaction</h4>
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
                      We have the most up-to-date security to support the security of all our customers in carrying out all transactions.  
                  </p>
              </div>
              <div data-aos="fade-up-right" className="group relative w-full bg-slate-50 shadow-lg rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
                  <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <RiCustomerServiceFill className='text-[#8E05C2] size-8 hover:rotate-12' />
                          
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Fast Customer Service </h4>
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                      Provide Customer Service For Those Of You Who Have Problems 24 Hours A Week  
                  </p>
              </div>
              <div data-aos="fade-up-right" className="group relative w-full bg-slate-50 shadow-lg rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
                  <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <AiFillHome className='text-[#8E05C2] size-8 hover:rotate-12' />
                          
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Quick Transaction</h4>
                  <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                      We provide faster transaction speeds than competitors, so money arrives and is received faster. 
                  </p>
              </div>
          </div>
    </div>
  </section>
  </div>
                                        
                                        
  );
}

export default Features;
