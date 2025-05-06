import React, { useState } from 'react';
import { MdOutlinePendingActions } from "react-icons/md";

const ActionHistory = () => {
    const [isOpen, setIsOpen] = useState(false);
    const actions = [
        {
          action: "create",
          blogId: "123456",
          title: "How to learn React easily",
          performedBy: "Admin",
        },
        {
          action: "update",
          blogId: "789101",
          title: "Mastering TailwindCSS",
          performedBy: "Admin",
        }
      ];
      const toggleDropdown = () => setIsOpen(!isOpen);    
    return (
        <div>
            <div className="relative inline-block text-left">
      {/* Button to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 border border-[#2ec4b6] text-white px-4 py-2 rounded-full text-sm font-semibold"
      >
        <MdOutlinePendingActions className="text-[#2ec4b6]" />
        Action History
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {actions.length > 0 ? (
              actions.map((action, index) => (
                <div key={index} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p><strong>Action:</strong> {action.action}</p>
                  <p><strong>Title:</strong> {action.title}</p>
                  <p><strong>By:</strong> {action.performedBy}</p>
                </div>
              ))
            ) : (
              <p className="px-4 py-2 text-sm text-gray-400">No actions found.</p>
            )}
          </div>
        </div>
      )}
    </div>
        </div>
    )
}

export default ActionHistory
