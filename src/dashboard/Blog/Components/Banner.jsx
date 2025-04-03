import React from 'react'

const Banner = () => {
  return (
  
          <div className="relative w-full h-[400px] md:h-[200px] lg:h-[250px] ">
            {/* Background Image */}
            <img
              src="https://t3.ftcdn.net/jpg/06/72/86/66/360_F_672866653_sLtssGgBo2G3H4O44EL1u9uE8atH3q6f.jpg"
              alt="Banner"
              className="w-full h-full object-cover rounded-3xl shadow-xl"
            />
      
            {/* Glassmorphism Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg">
                <h1 className="text-3xl md:text-5xl font-bold text-white">
                  Good Morning! Author 
                </h1>
              </div>
            </div>
          </div>
      
  )
}

export default Banner