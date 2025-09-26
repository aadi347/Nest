import React, { useState } from 'react';
import { MdOutlinePendingActions } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      action: "create",
      blogId: "123456",
      title: "How to learn React easily",
      performedBy: "Admin",
    },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200 relative">
      <div className="flex items-center justify-between p-0.5">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div>
            <span className="text-sm font-bold block">Good morning, Admin!</span>
            <span className="text-xs block text-stone-500">
              Thrusday, May 8th 2025
            </span>
          </div>

          {/* Pending Action Button next to Date */}
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="relative flex text-sm text-white font-semibold items-center gap-2 border border-[#2ec4b6] transition-colors px-1.5 py-1.5 rounded-full"
            >
              <MdOutlinePendingActions className="text-[#2ec4b6]" />
              {/* You can add a notification badge like this */}
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Action History Dropdown on hover */}
            {isOpen && (
              <div className="absolute right-[-1] mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50">
                <div className="p-4">
                  <h3 className="text-gray-700 font-semibold mb-2">Action History</h3>
                  <ul className="space-y-2">
                    {actions.length > 0 ? (
                      actions.map((action, index) => (
                        <li key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                          <p><strong>Action:</strong> {action.action}</p>
                          <p><strong>Title:</strong> {action.title}</p>
                          <p><strong>By:</strong> {action.performedBy}</p>
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-gray-400">No actions found.</li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section (Logout) */}
        <button className="flex text-sm text-white font-semibold items-center gap-2 bg-[#2ec4b6] transition-colors hover:bg-[#9fede5] hover:text-[#2b877e] px-3 py-1.5 rounded-full">
          <TbLogout />
          <span className="text-xs">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
