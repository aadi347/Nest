import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    { label: "Home", href: "/", active: true },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/aboutus" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Simple Navbar */}
      <nav 
        className={`fixed bg-white left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md border-b border-gray-200' 
            : 'bg-white'
        }`}
        id="navbar-container"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/Nest.svg"
                  className="h-20 w-20"
                  alt="Nest Logo"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    item.active 
                      ? 'text-[#8E05C2]' 
                      : 'text-black hover:text-[#8E05C2]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              
              {/* Simple Login Button */}
              <Link
                to="/login"
                className="px-6 py-2 bg-[#8E05C2] text-white font-medium rounded-lg text-sm"
              >
                Sign In
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-black rounded-lg"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`} />
                  <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 top-3 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`absolute block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pb-6 bg-white border-t border-gray-200">
            <div className="space-y-1 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg ${
                    item.active 
                      ? 'text-[#8E05C2] bg-gray-100' 
                      : 'text-black'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-6 py-3 bg-[#8E05C2] text-white font-medium rounded-lg text-center text-sm"
              >
                Sign In
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
