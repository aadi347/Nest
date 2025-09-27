import React from 'react';

const TopGrids = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto px-4">
        
        {/* Total Posts */}
        <div className="bg-gradient-to-br from-[#83f0e6] to-#2ec4b6 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 group">
          <img src="/bookSvg.svg" className="size-28 mx-auto mb-4 transition-transform duration-300 group-hover:scale-105" alt="Posts Icon" />
          <h3 className="text-xl font-semibold text-gray-800 text-center">Total Posts</h3>
          <p className="text-center text-gray-600 mt-1">All published listings</p>
          <p className="text-center text-blue-700 font-bold text-lg mt-2">152</p>
        </div>

        {/* Total Users */}
        <div className="bg-gradient-to-br from-[#83f0e6] to-#2ec4b6 p-6 rounded-2xl  shadow-md hover:shadow-xl transition duration-300 group">
          <img src="/userchart.svg" className="size-28 mx-auto mb-4 transition-transform duration-300 group-hover:scale-105" alt="Users Icon" />
          <h3 className="text-xl font-semibold text-gray-800 text-center">Total Users</h3>
          <p className="text-center text-gray-600 mt-1">Registered and browsing users</p>
          <p className="text-center text-purple-700 font-bold text-lg mt-2">3,245 Active</p>
        </div>

        {/* Total Comments */}
        <div className="bg-gradient-to-br from-[#83f0e6] to-#2ec4b6 p-6 rounded-2xl  shadow-md hover:shadow-xl transition duration-300 group">
          <img src="/comments.svg" className="size-28 mx-auto mb-4 transition-transform duration-300 group-hover:scale-105" alt="Comments Icon" />
          <h3 className="text-xl font-semibold text-gray-800 text-center">Total Comments</h3>
          <p className="text-center text-gray-600 mt-1">User feedback & inquiries</p>
          <p className="text-center text-yellow-700 font-bold text-lg mt-2">8,721</p>
        </div>

      </div>
    </div>
  );
};

export default TopGrids;
