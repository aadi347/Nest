import React from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiSettings, FiPlus, FiMessageSquare } from "react-icons/fi";
import { RiDashboardLine, RiEdit2Line } from "react-icons/ri";
import AccountToggle from "./AccountToggle";

const LeftBar = ({ selectedRoute, setSelectedRoute }) => {
  const menuItems = [
    { key: "Dashboard", label: "Dashboard", icon: RiDashboardLine },
    { key: "AddNest", label: "Add Nest", icon: FiPlus },
    { key: "ManageNest", label: "Manage Nest", icon: FiSettings },
    { key: "Profile", label: "Profile", icon: FiUser },
    { key: "Blog", label: "Blog", icon: RiEdit2Line },
    { key: "ContactMessage", label: "Messages", icon: FiMessageSquare }
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    idle: { scale: 1, x: 0 },
    hover: { scale: 1.02, x: 2 },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div 
      className="w-[200px] bg-white border-r border-gray-100 h-screen flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Account Toggle Section */}
      <div className="p-3 border-b border-gray-50">
        <AccountToggle />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-3">
        <motion.div className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = selectedRoute === item.key;
            
            return (
              <motion.div
                key={item.key}
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.button
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-[#2ec4b6] text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  onClick={() => setSelectedRoute(item.key)}
                  variants={buttonVariants}
                  initial="idle"
                >
                  {/* Icon with subtle animation */}
                  <motion.div
                    className={`flex-shrink-0 ${
                      isActive ? "text-white" : "text-gray-400 group-hover:text-[#2ec4b6]"
                    }`}
                    animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>

                  {/* Label */}
                  <span className="truncate">{item.label}</span>

                  {/* Active indicator */}
                  <motion.div
                    className={`ml-auto w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      isActive ? "bg-white" : "bg-transparent"
                    }`}
                    animate={isActive ? { scale: [0, 1], opacity: [0, 1] } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </nav>

      {/* Bottom section with subtle branding */}
      <motion.div 
        className="p-3 border-t border-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-center">
          <p className="text-xs text-gray-400">Nest Dashboard</p>
          <div className="w-8 h-0.5 bg-[#2ec4b6] mx-auto mt-1 rounded-full opacity-30" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LeftBar;
