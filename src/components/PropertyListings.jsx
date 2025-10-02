import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Home, 
  Car, 
  Droplets, 
  Eye, 
  Heart, 
  Share2, 
  ArrowRight, 
  Filter, 
  Grid3X3, 
  LayoutList,
  TrendingUp,
  Verified,
  Star,
  Calendar,
  Camera
} from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Luxury Apartment in Downtown',
    description: 'Experience luxury living in the heart of the city with modern amenities and stunning views.',
    imageUrl: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rent: '1200k',
    originalPrice: '1400k',
    location: 'Mumbai',
    area: '1500 sq ft',
    bedrooms: 3,
    bathrooms: 2,
    parking: true,
    verified: true,
    featured: true,
    rating: 4.8,
    totalImages: 12,
    postedDate: '2 days ago',
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Elevator']
  },
  {
    id: 2,
    title: 'Cozy Family House',
    description: 'A beautiful family home with a spacious garden and peaceful neighborhood.',
    imageUrl: 'https://images.pexels.com/photos/14512055/pexels-photo-14512055.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rent: '800k',
    originalPrice: '900k',
    location: 'Bangalore',
    area: '2000 sq ft',
    bedrooms: 4,
    bathrooms: 3,
    parking: true,
    verified: true,
    featured: false,
    rating: 4.6,
    totalImages: 8,
    postedDate: '1 week ago',
    amenities: ['Garden', 'Parking', 'Security']
  },
  {
    id: 3,
    title: 'Modern Office Space',
    description: 'Perfectly suited for startups and growing companies with flexible workspaces.',
    imageUrl: 'https://images.pexels.com/photos/10486182/pexels-photo-10486182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rent: '1500k',
    originalPrice: '1600k',
    location: 'Delhi',
    area: '3000 sq ft',
    bedrooms: null,
    bathrooms: 4,
    parking: true,
    verified: true,
    featured: true,
    rating: 4.9,
    totalImages: 15,
    postedDate: '3 days ago',
    amenities: ['Conference Room', 'High Speed Internet', 'Reception']
  },
];

const PropertyListings = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [likedProperties, setLikedProperties] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  const toggleLike = (propertyId) => {
    setLikedProperties(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(propertyId)) {
        newLiked.delete(propertyId);
      } else {
        newLiked.add(propertyId);
      }
      return newLiked;
    });
  };

  return (
    <section className="relative overflow-hidden py-10">
      {/* Background Decorations */}
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
         
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover Your{" "}
            <span className="bg-gradient-to-r from-[#8E05C2] via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Perfect Home
            </span>
          </h2>
          
          <p
            className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Handpicked premium properties that offer exceptional value, prime locations, 
            and modern amenities for your dream lifestyle.
          </p>

          {/* View Toggle & Actions */}
       
        </div>

        {/* Property Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {listings.map((listing, index) => (
            <div
              key={listing.id}
              className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onMouseEnter={() => setHoveredCard(listing.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Featured Badge */}
              {listing.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#8E05C2] to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Featured
                </div>
              )}

              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={listing.imageUrl}
                  alt={listing.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={() => toggleLike(listing.id)}
                    className={`p-2 rounded-full backdrop-blur-md transition-colors duration-200 ${
                      likedProperties.has(listing.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={likedProperties.has(listing.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-md transition-colors duration-200">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Image Count */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  <Camera className="w-3 h-3" />
                  <span>{listing.totalImages}</span>
                </div>

                {/* Verified Badge */}
                {listing.verified && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    <Verified className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Price & Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#8E05C2]">
                      ₹{listing.rent}
                    </span>
                    {listing.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{listing.originalPrice}
                      </span>
                    )}
                    <span className="text-xs text-gray-500">/month</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{listing.rating}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  {listing.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {listing.description}
                </p>

                {/* Property Details */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-4 h-4 text-[#8E05C2]" />
                    <span className="truncate">{listing.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Home className="w-4 h-4 text-[#8E05C2]" />
                    <span>{listing.area}</span>
                  </div>
                  {listing.bedrooms && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="w-4 h-4 flex items-center justify-center text-[#8E05C2] font-bold text-xs">
                        {listing.bedrooms}
                      </span>
                      <span>Bedrooms</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-700">
                    <Car className="w-4 h-4 text-[#8E05C2]" />
                    <span>{listing.parking ? 'Parking' : 'No Parking'}</span>
                  </div>
                </div>

                {/* Amenities Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {listing.amenities.slice(0, 3).map((amenity, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                  {listing.amenities.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      +{listing.amenities.length - 3} more
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{listing.postedDate}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#8E05C2] text-[#8E05C2] rounded-xl font-medium hover:bg-[#8E05C2] hover:text-white transition-all duration-300 text-sm">
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#8E05C2] text-white rounded-xl font-medium hover:bg-[#7201A8] transition-colors duration-300 text-sm">
                      <span>Contact</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default PropertyListings;
