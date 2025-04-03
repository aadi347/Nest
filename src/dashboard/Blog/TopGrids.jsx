import React from 'react'
import { FaRegNewspaper, FaUsers, FaComments } from "react-icons/fa"
import BookSvg from "../../assets/bookSvg.svg"
import UserChart from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/userchart.svg";
import Commentsss from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/comments.svg"

const TopGrids = () => {
  return (
    <div>
        <div className=" flex items-center justify-center  p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        
        
        {/* Total Posts */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center">
          <img src={BookSvg} className='size-36' alt="" />
          <h3 className="text-xl font-semibold text-gray-800">Total Posts</h3>
          <p className="text-gray-600"><span className="font-bold">152</span></p>
        </div>

        {/* Total Users */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center">
          <img src={UserChart} className='size-36' alt="" />
          <h3 className="text-xl font-semibold text-gray-800">Total Users</h3>
          <p className="text-gray-600">Active users: <span className="font-bold">3,245</span></p>
        </div>

        {/* Total Comments */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col items-center">
          <img src={Commentsss} className='size-36' alt="" />
          <h3 className="text-xl font-semibold text-gray-800">Total Comments</h3>
          <p className="text-gray-600">Total comments: <span className="font-bold">8,721</span></p>
        </div>

      </div>
    </div>
    </div>
  )
}

export default TopGrids