import React from "react";
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import AccountToggle from "./AccountToggle";
import { FaBlogger } from "react-icons/fa";

const LeftBar = ({ selectedRoute, setSelectedRoute }) => {
  return (
    <div className="w-[220px] bg-white backdrop-blur-sm  text-white p-4 h-screen rounded-l-lg ">
      {/* <h1 className="text-xl font-bold mb-4">Dashboard</h1> */}
      <AccountToggle />
      <div className="space-y-2">
        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "Dashboard" ? "bg-gray-300" : ""
          }`}
          onClick={() => setSelectedRoute("Dashboard")}
        >
          <FiHome className="mr-2" /> Dashboard
        </button>
        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "AddNest" ? "bg-gray-300" : ""
          }`}
          onClick={() => setSelectedRoute("AddNest")}
        >
          <AiFillHome className="mr-2" /> Add Nest
        </button>
        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "ManageNest" ? "bg-gray-300" : ""
          }`}
          onClick={() => setSelectedRoute("ManageNest")}
        >
          <AiFillSetting className="mr-2" /> Manage Nest
        </button>
        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "Profile" ? "bg-gray-300" : ""
          }`}
          onClick={() => setSelectedRoute("Profile")}
        >
          <CgProfile className="mr-2" /> Profile
        </button>

        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "Blog" ? "bg-gray-300" : ""
          }`}
          onClick={() => setSelectedRoute("Blog")}
        >
          <FaBlogger className="mr-2" /> Blog
        </button>
      </div>
    </div>
  );
};

export default LeftBar;
