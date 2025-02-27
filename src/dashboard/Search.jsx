import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Search = () => {
    return (
        <div className="border-b mb-4 pb-4 border-stone-300 flex flex-row items-center justify-center space-x-1">
        <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaInstagram size={20} className="text-black" />
        </a>
        <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaLinkedin size={20} className="text-black" />
        </a>
        <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaFacebook size={20} className="text-black" />
        </a>
        <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaWhatsapp size={20} className="text-black" />
        </a>
      </div>
      
    )
}

export default Search
