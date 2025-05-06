import React, { useState } from "react";
import { Link } from "react-router-dom";
import NestLogo from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/Nest.svg";
import { TbHomeFilled } from "react-icons/tb";
import { RiBloggerFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav

    >
      <div className="max-w-screen-xl py-2 mt-4 flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 ">
          <img
            src={NestLogo}
            className="h-14 w-14"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold text-[#8E05C2] whitespace-nowrap dark:text-white">
            
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="/login"
            className="flex items-center gap-2 text-white border-[#8E05C2] border-2 transition-all hover:scale-110 duration-300 bg-[#8E05C2] hover:[#8E05C2] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
            Login
          </a>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li className="flex items-center space-x-2">
              <TbHomeFilled className="text-xl text-[#8E05C2]" />
              <a
                href="/"
                className="text-[#8E05C2] font-semibold text-xs hover:text-[#8E05C2] dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li className="flex items-center space-x-2">
              <RiBloggerFill className="text-xl text-[#8E05C2] shadow-2xl" />
              <a
                href="/blog"
                className="text-[#8E05C2] font-semibold text-xs hover:text-[#8E05C2] dark:text-white"
                aria-current="page"
              >
                Blog
              </a>
            </li>

            <li className="flex items-center space-x-2">
              <TbInfoSquareRoundedFilled className="text-xl text-[#8E05C2]" />
              <a
                href="/aboutus"
                className="text-[#8E05C2] font-semibold text-xs hover:text-[#8E05C2] dark:text-white"
              >
                About
              </a>
            </li>

            <li className="flex items-center space-x-2">
              <RiSettings4Fill className="text-xl text-[#8E05C2]" />
              <a
                href="/services"
                className="text-[#8E05C2] font-semibold text-xs hover:text-[#8E05C2] dark:text-white"
              >
                Services
              </a>
            </li>

            <li className="flex items-center space-x-2">
              <MdPermContactCalendar className="text-xl text-[#8E05C2]" />
              <a
                href="#"
                className="text-[#8E05C2] font-semibold text-xs hover:text-[#8E05C2] dark:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
