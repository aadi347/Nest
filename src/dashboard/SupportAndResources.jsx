import React from 'react';
import Cropper from './Cropper';

const SupportAndResources = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Support and Resources</h2>
      <p>Find support and resources to help you with the platform.</p>
      <Cropper 
      className="w-20 h-20 rounded-full object-cover border-2 border-gray-400 cursor-pointer transition-transform duration-300 hover:scale-105" />
    </div>
  );
};

export default SupportAndResources;
