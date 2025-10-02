import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { 
  FiHome, 
  FiMapPin, 
  FiDollarSign, 
  FiFilter, 
  FiSearch, 
  FiGrid, 
  FiList,
  FiHeart,
  FiShare,
  FiEye,
  FiRefreshCw,
  FiX,
  FiChevronDown,
  FiStar
} from 'react-icons/fi';

const dummyFlats = [
  {
    id: 1,
    title: "2BHK Apartment in Kankarbagh",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    location: "Patna, Bihar",
    price: 9000,
    type: "2BHK",
    amenities: ["Parking", "Terrace", "24x7 Water"],
    rating: 4.5,
    verified: true
  },
  {
    id: 2,
    title: "1BHK Flat in Boring Road",
    image: "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    location: "Patna, Bihar",
    price: 7000,
    type: "1BHK",
    amenities: ["Water Supply"],
    rating: 4.2,
    verified: false
  },
  {
    id: 3,
    title: "Luxury Studio Apartment",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    location: "Patna, Bihar",
    price: 8500,
    type: "Studio",
    amenities: ["Gym", "Pool", "Security"],
    rating: 4.8,
    verified: true
  },
  {
    id: 4,
    title: "Modern 3BHK House",
    image: "https://plus.unsplash.com/premium_photo-1682377521715-95d16dc51943?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Patna, Bihar",
    price: 15000,
    type: "3BHK",
    amenities: ["Parking", "Garden", "24x7 Security"],
    rating: 4.6,
    verified: true
  },
  {
    id: 5,
    title: "Cozy 2BHK Flat",
    image: "https://plus.unsplash.com/premium_photo-1682377521385-bb04165dc742?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Patna, Bihar",
    price: 10000,
    type: "2BHK",
    amenities: ["Parking", "Lift"],
    rating: 4.3,
    verified: false
  }
];

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const location = searchParams.get("location");
  const flatType = searchParams.get("flatType");
  const rent = searchParams.get("rent");
  
  const [flats, setFlats] = useState(dummyFlats);
  const [filteredFlats, setFilteredFlats] = useState(dummyFlats);
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    price: '',
    sortBy: 'price-asc'
  });
  
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await axios.get('http://localhost:3000/search', {
        params: { location, flatType, rent }
      });
      setFlats(result.data.properties);
      setFilteredFlats(result.data.properties);
    } catch (error) {
      console.error(error);
      // Keep dummy data on error
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = flats.filter((flat) => {
      return (
        (filters.type ? flat.type === filters.type : true) &&
        (filters.location ? flat.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
        (filters.price ? flat.price <= Number(filters.price) : true)
      );
    });

    // Apply sorting
    if (filters.sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredFlats(filtered);
  };

  const resetFilters = () => {
    setFilters({ type: '', location: '', price: '', sortBy: 'price-asc' });
    setFilteredFlats(flats);
  };

  const toggleFavorite = (flatId) => {
    setFavorites(prev => 
      prev.includes(flatId) 
        ? prev.filter(id => id !== flatId)
        : [...prev, flatId]
    );
  };

  useEffect(() => {
    applyFilters();
  }, [filters, flats]);

  const PropertyCard = ({ flat, index }) => (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={flat.image} 
          alt={flat.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {flat.verified && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              ✓ Verified
            </span>
          )}
          <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {flat.type}
          </span>
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            onClick={() => toggleFavorite(flat.id)}
            className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
              favorites.includes(flat.id) 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiHeart className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-blue-500 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiShare className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900">
            ₹{flat.price.toLocaleString()}/month
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {flat.title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-yellow-500">
            <FiStar className="w-4 h-4 fill-current" />
            <span className="font-medium">{flat.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <FiMapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{flat.location}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {flat.amenities.slice(0, 3).map((amenity, i) => (
            <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              {amenity}
            </span>
          ))}
          {flat.amenities.length > 3 && (
            <span className="text-gray-400 text-xs">+{flat.amenities.length - 3} more</span>
          )}
        </div>

        <div className="flex gap-2">
          <motion.button 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 whitespace-nowrap text-sm py-2 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiEye className="w-4 h-4" />
            View Details
          </motion.button>
          <motion.button 
            className="px-4 py-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Search Results</h1>
              <p className="text-gray-600 mt-1">Found {filteredFlats.length} properties</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* View Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <FiGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
              >
                <FiFilter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <motion.aside 
            className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:col-span-1`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <FiFilter className="w-5 h-5" />
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-400 hover:text-gray-600"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Property Type</label>
                  <select
                    name="type"
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">All Types</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                    <option value="Studio">Studio</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Location</label>
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="location"
                      value={filters.location}
                      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter city or area"
                    />
                  </div>
                </div>

                {/* Max Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Max Budget</label>
                  <div className="relative">
                    <FiDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="number"
                      name="price"
                      value={filters.price}
                      onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="e.g. 15000"
                    />
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Sort By</label>
                  <select
                    name="sortBy"
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <motion.button
                    onClick={applyFilters}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply
                  </motion.button>
                  <motion.button
                    onClick={resetFilters}
                    className="px-4 py-3 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiRefreshCw className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Results */}
          <div className="lg:col-span-3">
            <AnimatePresence>
              {loading ? (
                <motion.div 
                  className="flex items-center justify-center h-64"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="flex items-center gap-3 text-gray-600">
                    <FiRefreshCw className="w-6 h-6 animate-spin" />
                    <span>Loading properties...</span>
                  </div>
                </motion.div>
              ) : filteredFlats.length === 0 ? (
                <motion.div 
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiHome className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search criteria to find more results.</p>
                  <motion.button
                    onClick={resetFilters}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Clear All Filters
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  className={`grid gap-6 ${
                    viewMode === 'grid' 
                      ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                      : 'grid-cols-1'
                  }`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredFlats.map((flat, index) => (
                    <PropertyCard key={flat.id} flat={flat} index={index} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
