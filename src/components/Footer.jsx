import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-custom-purple text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section: Logo and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors duration-200">
              NEST
            </Link>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-custom-green hover:text-white transition-colors duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-custom-green hover:text-white transition-colors duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-custom-green hover:text-white transition-colors duration-200">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-custom-green hover:text-white transition-colors duration-200">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
        
        {/* Middle Section: Links and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-custom-green transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-custom-green transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-custom-green transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-custom-green transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-custom-green transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-custom-green transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-custom-green transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-custom-green transition-colors duration-200">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li>
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-custom-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  1234 Street Name, City, Country
                </p>
              </li>
              <li>
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-custom-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l4-4m-4 4l4 4M21 12c0 4.418-3.582 8-8 8a8 8 0 01-8-8 8 8 0 018-8c4.418 0 8 3.582 8 8z" />
                  </svg>
                  info@nest.com
                </p>
              </li>
              <li>
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-custom-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.4 2M7 5h10l4 16H5l2-8M7 5v2a2 2 0 002 2h4a2 2 0 002-2V5" />
                  </svg>
                  +1 (555) 123-4567
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} NEST. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
