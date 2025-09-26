import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbHomeFilled } from "react-icons/tb";
import { RiBloggerFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Scroll detection for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('#navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { icon: TbHomeFilled, label: "Home", href: "/", active: true },
    { icon: RiBloggerFill, label: "Blog", href: "/blog" },
    { icon: TbInfoSquareRoundedFilled, label: "About", href: "/aboutus" },
    { icon: MdMiscellaneousServices, label: "Services", href: "/services" },
    { icon: MdPermContactCalendar, label: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Glassmorphism Navbar */}
      <nav 
        className={`fixed bg-black left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-black backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}
        id="navbar-container"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/Nest.svg"
                  className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                  alt="Nest Logo"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#8E05C2] to-purple-600 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                NEST
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.href}
                    className={`group relative px-4 py-2 rounded-full transition-all duration-300 ${
                      item.active 
                        ? 'text-[#8E05C2] bg-white/10' 
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className={`text-lg transition-colors duration-300 ${
                        item.active ? 'text-[#8E05C2]' : 'text-white/80 group-hover:text-[#8E05C2]'
                      }`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8E05C2]/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </Link>
                );
              })}
            </div>

            {/* CTA and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              
              {/* Enhanced Login Button */}
              <Link
                to="/login"
                className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8E05C2] to-purple-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8E05C2]/25 border border-[#8E05C2]/20"
              >
                <HiOutlineUser className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm">Sign In</span>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="md:hidden relative p-3 text-white hover:text-[#8E05C2] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#8E05C2]/50 rounded-lg"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 h-6 relative">
                  {/* Hamburger to X animation */}
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`} />
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pb-6 bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="space-y-1 pt-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      item.active 
                        ? 'text-[#8E05C2] bg-white/10 shadow-lg' 
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon className={`text-xl transition-colors duration-300 ${
                      item.active ? 'text-[#8E05C2]' : 'text-white/80 group-hover:text-[#8E05C2]'
                    }`} />
                    <span className="font-medium">{item.label}</span>
                    
                    {/* Mobile hover effect */}
                    <div className="flex-1" />
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      item.active ? 'bg-[#8E05C2]' : 'bg-transparent group-hover:bg-[#8E05C2]/50'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-[#8E05C2] to-purple-600 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#8E05C2]/25"
              >
                <HiOutlineUser className="w-5 h-5" />
                <span>Sign In to Your Account</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;
