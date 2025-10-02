import React from 'react';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiUsers, FiMessageCircle, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const TopGrids = () => {
  const statsData = [
    {
      title: 'Total Posts',
      description: 'All published listings',
      value: '152',
      change: '+12.5%',
      changeType: 'positive',
      icon: '/bookSvg.svg',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-600'
    },
    {
      title: 'Total Users',
      description: 'Registered and browsing users',
      value: '3,245',
      change: '+8.2%',
      changeType: 'positive',
      icon: '/userchart.svg',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      textColor: 'text-purple-600'
    },
    {
      title: 'Total Comments',
      description: 'User feedback & inquiries',
      value: '8,721',
      change: '+15.3%',
      changeType: 'positive',
      icon: '/comments.svg',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      textColor: 'text-amber-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
            custom={index}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <div className={`w-full h-full ${stat.bgColor} rounded-full transform translate-x-8 -translate-y-8`} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon Section */}
              <motion.div 
                className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-xl mb-4`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={stat.icon} 
                  className="w-8 h-8" 
                  alt={`${stat.title} Icon`} 
                />
              </motion.div>

              {/* Title and Description */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {stat.description}
                </p>
              </div>

              {/* Stats Section */}
              <div className="flex items-end justify-between">
                <div>
                  <motion.p 
                    className={`text-3xl font-bold ${stat.textColor} mb-1`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.p>
                  
                  {/* Change Indicator */}
                  <motion.div 
                    className={`flex items-center gap-1 text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.7, duration: 0.3 }}
                  >
                    {stat.changeType === 'positive' ? (
                      <FiArrowUp className="w-4 h-4" />
                    ) : (
                      <FiArrowDown className="w-4 h-4" />
                    )}
                    <span>{stat.change}</span>
                  </motion.div>
                </div>

                {/* Trend Icon */}
                <motion.div
                  className={`p-2 ${stat.bgColor} rounded-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  whileHover={{ scale: 1.1 }}
                >
                  <FiTrendingUp className={`w-5 h-5 ${stat.iconColor}`} />
                </motion.div>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Bottom Summary */}
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit'
          })}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TopGrids;
