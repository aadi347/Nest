import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { 
  Quote, 
  Star, 
  MapPin, 
  Home, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  Verified,
  ThumbsUp,
  Users,
  TrendingUp,
  Play
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "Software Engineer",
    company: "Tech Corp Mumbai",
    testimonial: "NEST made finding my 2BHK apartment incredibly easy! The detailed information about parking, amenities, and exact rent helped me make the right choice without visiting 10+ properties.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    propertyType: "2BHK Apartment",
    location: "Mumbai",
    verified: true,
    rentSaved: "₹15,000",
    timeframe: "Found in 3 days"
  },
  {
    id: 2,
    name: "Arjun Patel",
    position: "Marketing Manager", 
    company: "StartUp Bangalore",
    testimonial: "As a property owner, NEST's transparency and detailed listing features helped me rent out my 3BHK quickly. The one-time fee model is much better than monthly commissions!",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5,
    propertyType: "3BHK House",
    location: "Bangalore",
    verified: true,
    rentSaved: "₹25,000",
    timeframe: "Rented in 1 week"
  },
  {
    id: 3,
    name: "Sneha Gupta",
    position: "HR Professional",
    company: "Finance Ltd Delhi",
    testimonial: "The comprehensive property details on NEST saved me so much time! Knowing about electricity costs, water supply, and nearby amenities upfront made my decision effortless.",
    image: "https://randomuser.me/api/portraits/women/35.jpg", 
    rating: 5,
    propertyType: "1BHK Studio",
    location: "Delhi",
    verified: true,
    rentSaved: "₹8,000",
    timeframe: "Found in 2 days"
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    position: "Business Owner",
    company: "Retail Chain",
    testimonial: "NEST helped me find the perfect commercial space for my new store. The detailed information about foot traffic, parking, and nearby businesses was exactly what I needed.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    propertyType: "Commercial Space",
    location: "Pune",
    verified: true,
    rentSaved: "₹50,000",
    timeframe: "Found in 5 days"
  },
  {
    id: 5,
    name: "Kavita Singh",
    position: "Freelance Designer",
    company: "Creative Studio",
    testimonial: "Being new to the city, NEST's detailed neighbourhood information and Google Maps integration helped me find a safe, well-connected area. Transparent pricing with no hidden charges!",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5,
    propertyType: "Bachelor Pad",
    location: "Hyderabad", 
    verified: true,
    rentSaved: "₹12,000",
    timeframe: "Found in 4 days"
  },
  {
    id: 6,
    name: "Vikram Mehta",
    position: "Senior Developer",
    company: "IT Solutions",
    testimonial: "The 24/7 support and detailed property specifications on NEST made my relocation smooth. Finally, a platform that understands what renters actually need to know!",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    rating: 5,
    propertyType: "4BHK Villa",
    location: "Chennai",
    verified: true,
    rentSaved: "₹30,000", 
    timeframe: "Found in 6 days"
  }
];

const stats = [
  { number: "10K+", label: "Happy Tenants", icon: Users },
  { number: "98%", label: "Success Rate", icon: TrendingUp },
  { number: "4.9", label: "Average Rating", icon: Star },
  { number: "24/7", label: "Support Available", icon: ThumbsUp }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });

    // Auto-play carousel
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / visibleTestimonials));
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlay, visibleTestimonials]);

  // Responsive testimonials count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1);
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / visibleTestimonials));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / visibleTestimonials)) % Math.ceil(testimonials.length / visibleTestimonials));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#8E05C2]/20 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div 
            data-aos="fade-up" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8E05C2]/20 to-purple-500/20 border border-[#8E05C2]/30 rounded-full px-6 py-2 text-[#8E05C2] font-semibold text-sm mb-6"
          >
            <Quote className="w-4 h-4" />
            Customer Stories
          </div>
          
          <h2
            className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-[#8E05C2] via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Community Says
            </span>
          </h2>
          
          <p
            className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Real stories from property owners and renters who found their perfect match through NEST's comprehensive platform.
          </p>
        </div>

        {/* Stats Section */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="300"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <IconComponent className="w-8 h-8 text-[#8E05C2] mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative" data-aos="fade-up" data-aos-delay="400">
          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Success Stories</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300 backdrop-blur-md"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: Math.ceil(testimonials.length / visibleTestimonials) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-[#8E05C2] w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300 backdrop-blur-md"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / visibleTestimonials) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-8 ${
                    visibleTestimonials === 1 ? 'grid-cols-1' : 
                    visibleTestimonials === 2 ? 'grid-cols-2' : 
                    'grid-cols-3'
                  }`}>
                    {testimonials
                      .slice(slideIndex * visibleTestimonials, (slideIndex + 1) * visibleTestimonials)
                      .map((testimonial, index) => (
                      <div
                        key={testimonial.id}
                        className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                      >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8E05C2]/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                        
                        {/* Quote Icon */}
                        <div className="relative z-10">
                          <Quote className="w-8 h-8 text-[#8E05C2] mb-4 opacity-50" />
                          
                          {/* User Info */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className="relative">
                              <img
                                className="h-16 w-16 rounded-2xl object-cover border-2 border-[#8E05C2]/30"
                                src={testimonial.image}
                                alt={`${testimonial.name} profile`}
                              />
                              {testimonial.verified && (
                                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                                  <Verified className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>
                            
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                              <p className="text-sm text-gray-400 mb-1">{testimonial.position}</p>
                              <p className="text-xs text-[#8E05C2]">{testimonial.company}</p>
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center gap-1 mb-4">
                            {renderStars(testimonial.rating)}
                            <span className="text-sm text-gray-400 ml-2">({testimonial.rating}.0)</span>
                          </div>

                          {/* Testimonial Text */}
                          <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                            "{testimonial.testimonial}"
                          </p>

                          {/* Property Details */}
                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="flex items-center gap-2 text-gray-400">
                              <Home className="w-3 h-3 text-[#8E05C2]" />
                              <span>{testimonial.propertyType}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                              <MapPin className="w-3 h-3 text-[#8E05C2]" />
                              <span>{testimonial.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                              <Calendar className="w-3 h-3 text-[#8E05C2]" />
                              <span>{testimonial.timeframe}</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-400">
                              <TrendingUp className="w-3 h-3" />
                              <span>Saved {testimonial.rentSaved}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          data-aos="fade-up" 
          data-aos-delay="500"
          className="text-center mt-16 p-8 bg-gradient-to-r from-[#8E05C2]/20 to-purple-600/20 backdrop-blur-md border border-[#8E05C2]/30 rounded-3xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">Join Thousands of Happy Users</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Experience the NEST difference - comprehensive property information, transparent pricing, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-[#8E05C2] hover:bg-[#7201A8] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>Start Your Journey</span>
                <Play className="w-5 h-5" />
              </Link>
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-full border border-white/20 transition-all duration-300 backdrop-blur-md"
              >
                <span>Browse Properties</span>
              </Link>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#8E05C2]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
