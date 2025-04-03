
import React, { useState } from "react";
import { motion } from "framer-motion";

const flats = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", // Replace with actual image URL
    name: "Luxury Apartment",
    timestamp: "2025-02-28 14:30",
    status: "Available",
    location: "New Delhi, India",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    name: "Cozy Studio",
    timestamp: "2025-02-27 11:15",
    status: "Not Available",
    location: "Mumbai, India",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    name: "Modern Duplex",
    timestamp: "2025-02-26 09:45",
    status: "Available",
    location: "Bangalore, India",
  },
];

const LastFlatAdd = () => {
  const [showImage, setShowImage] = useState(false);
  const [showImageSrc, setShowImageSrc] = useState("");

  const handleImageClick = (src) => {
    setShowImageSrc(src);
    setShowImage(true);
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <h1 className="text-xl font-bold border-b py-2 text-gray-700">Last Flats Added</h1>

        {/* Table */}
        <div className="overflow-x-auto mt-4 rounded-md">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 ">
                  #
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 ">
                  Image
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 ">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 ">
                  Added At
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 ">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
                  Location
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="">
              {flats.map((flat, index) => (
                <tr key={flat.id} className="border-b hover:bg-gray-50 ">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      src={flat.image}
                      alt={flat.name}
                      onClick={() => handleImageClick(flat.image)}
                      className="h-12 w-12 object-cover rounded-full shadow-md border transform transition duration-300 hover:scale-110 cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-2 text-sm">{flat.name}</td>
                  <td className="px-4 py-2  text-sm">{flat.timestamp}</td>
                  <td
                    className={`px-4 py-2 text-sm font-semibold ${
                      flat.status === "Available"
                        ? "text-emerald-500"
                        : "text-red-600"
                    }`}
                  >
                    {flat.status}
                  </td>
                  <td className="px-4 py-2 text-sm">{flat.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* End Table */}
      </div>

      {/* Image Modal */}
      {showImage && (
        <div
            
          className="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-50 backdrop-blur-lg"
          onClick={() => setShowImage(false)}
        >
         
          <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex  items-center justify-center"
          >
          <img
            src={showImageSrc}
            alt="Flat"
            className="h-3/4 w-3/4 rounded-lg "
          />
          </motion.div>
          
          <button
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg transform transition duration-300 hover:scale-110 hoover:rotate-180"
            onClick={() => setShowImage(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black shrink-0 size-4 group-hover:rotate-9 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default LastFlatAdd;
