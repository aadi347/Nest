import React from 'react';

const TopImageGrids = () => {
  return (
    <div className='top-8'>
      <div className="grid grid-cols-4 gap-4 px-10 py-10">
        <div className="col-span-2 row-span-3">
          <img 
            src="https://media.istockphoto.com/id/1415886887/photo/freshly-painted-craftsman-bungalow-house.jpg?s=612x612&w=0&k=20&c=lcwiyJqjUoIM0FfRb3TwV2BzUY8RS7oT9zFmZGv4nLI=" 
            alt="Image 1" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="row-span-3 col-start-3">
          <img 
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
            alt="Image 2" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="row-span-3 col-start-4">
          <img 
            src="https://img.freepik.com/free-photo/shot-white-bench-park_181624-48161.jpg?semt=ais_hybrid&w=740" 
            alt="Image 3" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default TopImageGrids;
