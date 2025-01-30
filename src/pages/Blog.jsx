import React from 'react'

const Blog = () => {
  return (
    <div>
        <div className="flex flex-col h-screen bg-slate-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto p-6">
  {/* Left Side - Larger Image */}
  <img 
    src="https://as1.ftcdn.net/v2/jpg/06/73/67/94/1000_F_673679447_jYtPr2VgV51rhCaCYZoOp30Y1KqtPymd.jpg" 
    alt="Article Image" 
    className="w-full h-80 object-cover rounded-lg md:col-span-1"
  />
  
  {/* Right Side - Content */}
  <div className="flex flex-col gap-3 md:col-span-1">
    <h2 className="text-3xl font-bold text-gray-900">The Future of Technology</h2>
    <p className="text-sm text-gray-600">Published on: Jan 30, 2025</p>
    <span className="bg-blue-600 text-white px-4 py-2 rounded-md w-fit text-sm font-semibold">
      Category: Innovation
    </span>
    <p className="text-gray-800 text-sm leading-relaxed">
      Technology is evolving at an unprecedented pace, shaping the way we live, work, and interact with the world.
      From artificial intelligence and automation to sustainable energy and space exploration, the future holds 
      incredible possibilities. As innovation accelerates, staying informed is essential to understanding its impact 
      on society and the global economy.
    </p>
    <button
    className='bg-blue-600 text-white px-4 py-2 rounded-full w-fit text-sm font-semibold'
    >
    Read More
    </button>
  </div>
    </div>
        </div>
    </div>
  )
}

export default Blog