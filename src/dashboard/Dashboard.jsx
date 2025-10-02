import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeftBar from "./LeftBar";
import MainDash from "./MainDash";

const Dashboard = () => {
  const [selectedRoute, setSelectedRoute] = useState("Dashboard"); 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const sidebarVariants = {
    hidden: { x: -250, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }
    }
  };

  const mainContentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
        delay: 0.1
      }
    }
  };

  const routeVariants = {
    initial: { 
      opacity: 0, 
      x: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.25, 0, 1]
      }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.5) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative z-10 flex h-screen">
        {/* Sidebar Container */}
        <motion.div
          variants={sidebarVariants}
          className="flex-shrink-0"
        >
          <LeftBar 
            selectedRoute={selectedRoute} 
            setSelectedRoute={setSelectedRoute} 
          />
        </motion.div>

        {/* Main Content Area */}
        <motion.div 
          className="flex-1 flex flex-col min-w-0"
          variants={mainContentVariants}
        >
          {/* Top Header Bar */}
          <motion.header 
            className="bg-white/80 backdrop-blur-sm border-b border-gray-100 px-6 py-4 shadow-sm"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-2 h-8 bg-[#2ec4b6] rounded-full"
                  animate={{ scaleY: [0.8, 1, 0.8] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div>
                  <motion.h1 
                    className="text-xl font-semibold text-gray-900"
                    key={selectedRoute}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {selectedRoute}
                  </motion.h1>
                  <p className="text-sm text-gray-500">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>

              {/* Status Indicator */}
              <motion.div 
                className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-xs font-medium text-green-700">Active</span>
              </motion.div>
            </div>
          </motion.header>

          {/* Main Content with Route Animation */}
          <div className="flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRoute}
                className="absolute inset-0 p-6"
                variants={routeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {/* Content Container */}
                <motion.div 
                  className="h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-scroll"
                  whileHover={{ 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <MainDash selectedRoute={selectedRoute} />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button (Optional) */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#2ec4b6] text-white rounded-full shadow-lg flex items-center justify-center z-20"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 25px -5px rgba(46, 196, 182, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 0.8,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
      >
        <motion.svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </motion.svg>
      </motion.button>
    </motion.div>
  );
};

export default Dashboard;
