import React from 'react'
import { FiCalendar } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";


const TopBar = () => {
    return (
        <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
        <div className="flex items-center justify-between p-0.5">
          <div>
            <span className="text-sm font-bold block">Good morning, Admin!</span>
            <span className="text-xs block text-stone-500">
              Tuesday, Aug 8th 2023
            </span>
          </div>
  
          <button className="flex text-sm text-white font-semibold items-center gap-2 bg-[#2ec4b6] transition-colors hover:bg-[#9fede5] hover:text-[#2b877e] px-3 py-1.5 rounded-full">
          <TbLogout />
            <span className='text-xs'>Log Out</span>
          </button>
        </div>
      </div>
    )
}

export default TopBar
