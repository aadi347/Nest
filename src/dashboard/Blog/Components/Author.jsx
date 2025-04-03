import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const AuthorCard = () => {
  return (
    <div className='p-8'> <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center shadow-lg w-96 h-32">
    {/* Left - Profile Image */}
    <img 
      src="https://img.freepik.com/premium-photo/simple-man-icon-with-slight-smile-set-against-round-minimalistic-backdrop-perfect_1283595-13323.jpg" 
      alt="Profile" 
      className="w-20 h-20 rounded-full border-2 border-gray-300"
    />

    {/* Right - Info & Icons */}
    <div className="ml-4 flex flex-col justify-center">
      {/* Name & Role */}
      <h2 className="text-lg font-bold text-gray-800">Aditya Kumar</h2>
      <p className="text-gray-400 text-xs">Writer / Author</p>

      {/* Social Media Icons */}
      <div className="flex space-x-3 mt-2">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-800 text-lg hover:text-black transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 text-lg hover:text-blue-700 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 text-lg hover:text-blue-500 transition" />
        </a>
      </div>
    </div>
  </div></div>
  )
}

export default AuthorCard