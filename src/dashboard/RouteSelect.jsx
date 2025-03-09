// RouteSelect

import React from "react";
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { AiFillHome, AiFillSetting } from "react-icons/ai";

const RouteSelect = ({ selectedRoute, setSelectedRoute }) => {
  return (
    <div className="w-[220px] bg-gray-900 text-white p-4 h-screen">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <div className="space-y-2">
        <button
          className={`w-full flex items-center p-3 rounded-md ${
            selectedRoute === "Dashboard" ? "bg-gray-700" : ""
          }`}
          onClick={() => setSelectedRoute("Dashboard")}
        >
          <FiHome className="mr-2" /> Dashboard
        </button>
        <button
          className={`w-full flex items-center p-3 rounded-md ${
            selectedRoute === "AddNest" ? "bg-gray-700" : ""
          }`}
          onClick={() => setSelectedRoute("AddNest")}
        >
          <AiFillHome className="mr-2" /> Add Nest
        </button>
        <button
          className={`w-full flex items-center p-3 rounded-md ${
            selectedRoute === "ManageNest" ? "bg-gray-700" : ""
          }`}
          onClick={() => setSelectedRoute("ManageNest")}
        >
          <AiFillSetting className="mr-2" /> Manage Nest
        </button>
        <button
          className={`w-full flex items-center p-3 rounded-md ${
            selectedRoute === "Profile" ? "bg-gray-700" : ""
          }`}
          onClick={() => setSelectedRoute("Profile")}
        >
          <CgProfile className="mr-2" /> Profile
        </button>
      </div>
    </div>
  );
};

export default RouteSelect;
