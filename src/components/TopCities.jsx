import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { Sparkles } from 'lucide-react';

const TopCities = () => {
  const cities = [
    {
      id: 1,
      name: "Delhi / NCR",
      properties: "176,000+",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Bangalore",
      properties: "42,000+",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Pune",
      properties: "38,000+",
      image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Chennai",
      properties: "36,000+",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Mumbai",
      properties: "38,000+",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Hyderabad",
      properties: "23,000+",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 7,
      name: "Kolkata",
      properties: "29,000+",
      image: "https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      name: "Ahmedabad",
      properties: "23,000+",
      image: "https://images.unsplash.com/photo-1621950408463-123d3e4d8a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Using your preferred style */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8E05C2]/10 to-purple-500/10 border border-[#8E05C2]/20 rounded-full px-6 py-2 text-[#8E05C2] font-semibold text-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FiMapPin className="w-4 h-4" />
            TOP CITIES
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore Properties in{" "}
            <span className="bg-gradient-to-r from-[#8E05C2] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Popular Cities
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover thousands of verified rental properties across India's major metropolitan areas.
          </motion.p>
        </div>

        {/* Cities Grid - Smaller cards with city name on image */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                
                {/* City Image - Smaller height */}
                <div className="relative h-24 md:h-28 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
                  
                  {/* City Name on Image */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h3 className="text-white font-bold text-sm md:text-base leading-tight px-2">
                      {city.name}
                    </h3>
                    <p className="text-white/80 text-xs mt-1 flex items-center gap-1">
                      <FiMapPin className="w-3 h-3" />
                      {city.properties}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5">
                      <FiArrowRight className="w-3 h-3 text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8E05C2] to-purple-600 hover:from-[#8E05C2]/90 hover:to-purple-600/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Cities
            <FiArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default TopCities;
