import React, { useState } from 'react';
import { 
  MapPin, 
  Home, 
  IndianRupee, 
  Search, 
  ChevronDown, 
  Filter,
  X,
  Loader2
} from 'lucide-react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [location, setLocation] = useState('Mumbai');
  const [flatType, setFlatType] = useState('2BHK');
  const [rent, setRent] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  
  const handleSearch = async () => {
    setLoading(true);
    try {
      navigate(`/searchresults?location=${location}&flatType=${flatType}&rent=${rent}`);
      console.log(location, flatType, rent);
    } finally {
      setLoading(false);
    }
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const clearFilters = () => {
    setLocation('');
    setFlatType('');
    setRent('');
  };

  const hasActiveFilters = location || flatType || rent;

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      {/* Desktop Search Bar */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Main Search Container */}
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-2xl hover:shadow-3xl transition-all duration-300">
            
            {/* Location Filter */}
            <div className="relative flex-1">
              <div 
                className="flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-white/10 rounded-xl transition-all duration-200"
                onClick={() => handleDropdownToggle('location')}
              >
                <MapPin className="h-5 w-5 text-white flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/70 font-medium uppercase tracking-wider">Location</div>
                  <div className="text-sm text-white font-semibold truncate">
                    {location || 'Select City'}
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-white/70 transition-transform duration-200 ${
                  activeDropdown === 'location' ? 'rotate-180' : ''
                }`} />
              </div>

              {/* Location Dropdown */}
              {activeDropdown === 'location' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                  {['Patna', 'Delhi', 'Mumbai', 'Haryana'].map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setLocation(city);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-150 text-sm font-medium"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-12 w-px bg-white/20" />

            {/* Property Type Filter */}
            <div className="relative flex-1">
              <div 
                className="flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-white/10 rounded-xl transition-all duration-200"
                onClick={() => handleDropdownToggle('flatType')}
              >
                <Home className="h-5 w-5 text-white flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/70 font-medium uppercase tracking-wider">Property</div>
                  <div className="text-sm text-white font-semibold truncate">
                    {flatType || 'Any Type'}
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-white/70 transition-transform duration-200 ${
                  activeDropdown === 'flatType' ? 'rotate-180' : ''
                }`} />
              </div>

              {/* Property Type Dropdown */}
              {activeDropdown === 'flatType' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                  {['1BHK', '2BHK', '3BHK', '4BHK', 'Villa', 'Studio'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setFlatType(type);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-150 text-sm font-medium"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-12 w-px bg-white/20" />

            {/* Price Filter */}
            <div className="relative flex-1">
              <div 
                className="flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-white/10 rounded-xl transition-all duration-200"
                onClick={() => handleDropdownToggle('rent')}
              >
                <IndianRupee className="h-5 w-5 text-white flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/70 font-medium uppercase tracking-wider">Budget</div>
                  <div className="text-sm text-white font-semibold truncate">
                    {rent ? `₹${rent}` : 'Any Price'}
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-white/70 transition-transform duration-200 ${
                  activeDropdown === 'rent' ? 'rotate-180' : ''
                }`} />
              </div>

              {/* Price Dropdown */}
              {activeDropdown === 'rent' && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
                  {[
                    { value: '5000', label: 'Under ₹5,000' },
                    { value: '10000', label: '₹5,000 - ₹10,000' },
                    { value: '20000', label: '₹10,000 - ₹20,000' },
                    { value: '30000', label: '₹20,000 - ₹30,000' },
                    { value: '50000', label: '₹30,000+' }
                  ].map((price) => (
                    <button
                      key={price.value}
                      onClick={() => {
                        setRent(price.value);
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-150 text-sm font-medium"
                    >
                      {price.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="ml-3">
              <button
                onClick={handleSearch}
                disabled={loading}
                className="group relative flex items-center gap-2 bg-gradient-to-r from-[#8E05C2] to-purple-600 hover:from-[#7201A8] hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
                <span className="hidden xl:inline">
                  {loading ? "Searching..." : "Search"}
                </span>
              </button>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="ml-2 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                title="Clear all filters"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Active Filters Indicator */}
          {hasActiveFilters && (
            <div className="flex items-center justify-center mt-3 text-white/80 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8E05C2] rounded-full animate-pulse" />
                <span>Active filters applied</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="lg:hidden">
        <div className="space-y-3">
          {/* Mobile Search Button */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="w-full flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <Search className="h-5 w-5 text-white" />
              <div className="text-left">
                <div className="font-semibold">Find Properties</div>
                {hasActiveFilters && (
                  <div className="text-xs text-white/70">
                    {[location, flatType, rent].filter(Boolean).join(' • ')}
                  </div>
                )}
              </div>
            </div>
            <Filter className="h-5 w-5 text-white" />
          </button>

          {/* Mobile Filter Panel */}
          {isMobileFilterOpen && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 space-y-4">
              {/* Location */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#8E05C2]"
                >
                  <option value="" className="text-gray-800">Select City</option>
                  <option value="Patna" className="text-gray-800">Patna</option>
                  <option value="Delhi" className="text-gray-800">Delhi</option>
                  <option value="Mumbai" className="text-gray-800">Mumbai</option>
                  <option value="Haryana" className="text-gray-800">Haryana</option>
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Property Type</label>
                <select
                  value={flatType}
                  onChange={(e) => setFlatType(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#8E05C2]"
                >
                  <option value="" className="text-gray-800">Any Type</option>
                  <option value="1BHK" className="text-gray-800">1BHK</option>
                  <option value="2BHK" className="text-gray-800">2BHK</option>
                  <option value="3BHK" className="text-gray-800">3BHK</option>
                  <option value="4BHK" className="text-gray-800">4BHK</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">Budget</label>
                <select
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#8E05C2]"
                >
                  <option value="" className="text-gray-800">Any Price</option>
                  <option value="5000" className="text-gray-800">Under ₹5,000</option>
                  <option value="10000" className="text-gray-800">₹5,000 - ₹10,000</option>
                  <option value="20000" className="text-gray-800">₹10,000 - ₹20,000</option>
                  <option value="30000" className="text-gray-800">₹20,000 - ₹30,000</option>
                  <option value="50000" className="text-gray-800">₹30,000+</option>
                </select>
              </div>

              {/* Mobile Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={clearFilters}
                  className="flex-1 bg-white/10 border border-white/20 text-white py-3 rounded-lg font-medium hover:bg-white/20 transition-colors duration-200"
                >
                  Clear All
                </button>
                <button
                  onClick={() => {
                    handleSearch();
                    setIsMobileFilterOpen(false);
                  }}
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-[#8E05C2] to-purple-600 text-white py-3 rounded-lg font-medium hover:from-[#7201A8] hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Searching..." : "Search Now"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
