import React, { useState, useEffect } from "react";
import SearchBar from '../components/searchBar';
import Testimonials from '../components/Testimonials';
import PropertyListings from '../components/PropertyListings';
import Features from '../components/Features';
import ShowBlog from '../components/ShowBlog';
import Faqs from "../components/faqs";
import Support from "../components/Support";
import ImageOne from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/imag1.jpg";
import ImageTwo from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/imag2.jpg";
import ImageThree from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/image3.jpg";
import NewsletterSignup from "../components/NewsletterSignup";
import DashboardShowcase from "../components/DashboardShowcase";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const images = [ImageOne, ImageTwo, ImageThree];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white top-0">
      {/* Hero Section with Enhanced Overlay and Widgets */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image Carousel */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            transform: 'scale(1.05)', // Subtle parallax effect
          }}
        />

        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />

        {/* Hero Widgets Grid - Bento Style */}
        <div className="absolute top-6 right-6 z-20 hidden lg:grid grid-cols-2 gap-3">
          {/* Property Count Widget */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
            <div className="text-2xl font-bold">1,250+</div>
            <div className="text-sm opacity-80">Active Properties</div>
          </div>

          {/* Live Market Widget */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <div className="text-sm">Market Live</div>
            </div>
            <div className="text-lg font-semibold">₹2.4Cr Avg</div>
          </div>

          {/* Quick Stats Widget */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white col-span-2">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-lg font-bold">95%</div>
                <div className="text-xs opacity-70">Satisfaction</div>
              </div>
              <div>
                <div className="text-lg font-bold">24/7</div>
                <div className="text-xs opacity-70">Support</div>
              </div>
              <div>
                <div className="text-lg font-bold">500+</div>
                <div className="text-xs opacity-70">Agents</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Widgets - Floating */}
        <div className="absolute top-6 left-6 right-6 z-20 lg:hidden">
          <div className="flex justify-between items-start">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-white">
              <div className="text-lg font-bold">1,250+</div>
              <div className="text-xs">Properties</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-white">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                <div className="text-xs">Live Market</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center text-white max-w-4xl">
            {/* Modern Typography */}
            <h1 className="mb-6 text-5xl md:text-7xl font-black tracking-tight leading-tight">
              <span className="block text-white mb-2">Find Your</span>
              <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Perfect Home
              </span>
            </h1>

            <p className="text-lg md:text-xl font-light mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Discover premium properties in prime locations with our AI-powered search and expert guidance
            </p>

            {/* Enhanced Search Bar Container */}
            <div className="mb-8">
              <SearchBar />
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                <span>Verified Properties</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">🔒</span>
                </div>
                <span>Secure Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xs">👥</span>
                </div>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-110' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 right-6 z-20 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section - Bento Grid Layout */}
      

      {/* Features Section with Modern Spacing */}
      <section 
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        data-animate 
        id="features"
      >
        <Features />
      </section>

      {/* Property Listings with Enhanced Container */}
      <section 
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible.listings ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        data-animate 
        id="listings"
      >
        <div className="container mx-auto px-6">
          <PropertyListings />
        </div>
      </section>

      {/* Blog Section */}
      <section 
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible.blog ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        data-animate 
        id="blog"
      >
        <ShowBlog />
      </section>

      {/* Testimonials with Dark Theme */}
      <section 
        className={`py-20 bg-black text-white transition-all duration-1000 ${
          isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        data-animate 
        id="testimonials"
      >
        <Testimonials />
      </section>

      {/* FAQ Section */}
      <section 
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible.faqs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        data-animate 
        id="faqs"
      >
        <Faqs />
      </section>

      {/* Newsletter with Modern Design */}
      <section 
        className={`py-20 bg-gray-900 text-white transition-all duration-1000 ${
          isVisible.newsletter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        data-animate 
        id="newsletter"
      >
        <NewsletterSignup />
      </section>
    </div>
  );
};

export default Home;
