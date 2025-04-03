import { useState } from "react";
import { motion } from "framer-motion";
import { MapPinIcon, HomeIcon, CurrencyDollarIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import DelhiIcon from "../assets/icons/delhi.png"
import MumbaiIcons from "../assets/icons/mumbai.png"
import BangaloreIcon from "../assets/icons/bangalore.png"
import PuneIcon from "../assets/icons/pune.png"



const locations = [
  { name: "Mumbai", icon: MumbaiIcons },
  { name: "Delhi", icon: DelhiIcon },
  { name: "Bangalore", icon: BangaloreIcon },
  { name: "Pune", icon: PuneIcon },
];

const CustomDropdown = () => {
  const [location, setLocation] = useState(locations[0]); // Default location
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (city) => {
    setLocation(city);
    setIsOpen(false); // Close dropdown after selecting
  };

  return (
    <div className="relative flex-1 flex items-center space-x-2 px-3">
      {/* Selected Location Icon */}
      <img src={location.icon} alt={location.name} className="h-6 w-6" />

      {/* Custom Select Box */}
      <div
        className="w-full bg-transparent cursor-pointer font-semibold px-4 py-2 rounded-lg relative flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {location.name}
        <ChevronDownIcon className="h-5 w-5 text-white" />
      </div>

      {/* Dropdown Menu with Animation */}
      {isOpen && (
        <motion.ul
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      
          className="absolute top-full left-0 mt-2 w-full bg-white shadow-md py-4 px-4 rounded-lg z-50"
        >
          {locations.map((city, index) => (
            <li
              key={index}
              onClick={() => handleSelect(city)}
              className={`px-4 py-2 flex items-center space-x-2 cursor-pointer text-black rounded-lg hover:bg-gray-100 ${
                location.name === city.name ? "bg-gray-200 font-bold" : ""
              }`}
            >
              <img src={city.icon} alt={city.name} className="h-5 w-5" />
              <span>{city.name}</span>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default CustomDropdown;
