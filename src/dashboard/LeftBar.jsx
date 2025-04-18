import React from "react";
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import AccountToggle from "./AccountToggle";
import { FaBlogger } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";


const LeftBar = ({ selectedRoute, setSelectedRoute }) => {
  return (
    <div className="w-[220px] bg-white border border-gray-200 text-white p-4 h-screen rounded-l-lg ">
      {/* <h1 className="text-xl font-bold mb-4">Dashboard</h1> */}
      <AccountToggle />
      <div className="space-y-2">
        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "Dashboard" ? "bg-[#2ec4b6] shadow-[0_4px_10px_#2ec4b6] text-white" : ""
          }`}
          onClick={() => setSelectedRoute("Dashboard")}
        >
          <RiDashboardFill className="mr-2" /> Dashboard
        </button>
        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "AddNest" ? "bg-[#2ec4b6] shadow-[0_4px_10px_#2ec4b6] text-white" : ""
          }`}
          onClick={() => setSelectedRoute("AddNest")}
        >
          <AiFillHome className="mr-2" /> Add Nest
        </button>
        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "ManageNest" ? "bg-[#2ec4b6] shadow-[0_4px_10px_#2ec4b6] text-white" : ""
          }`}
          onClick={() => setSelectedRoute("ManageNest")}
        >
          <AiFillSetting className="mr-2" /> Manage Nest
        </button>
        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "Profile" ? "bg-[#2ec4b6] shadow-[0_4px_10px_#2ec4b6] text-white" : ""
          }`}
          onClick={() => setSelectedRoute("Profile")}
        >
          <CgProfile className="mr-2" /> Profile
        </button>

        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "Blog" ? "bg-[#2ec4b6] shadow-[0_4px_10px_#2ec4b6] text-white" : ""
          }`}
          onClick={() => setSelectedRoute("Blog")}
        >
          <FaBlogger className="mr-2" /> Blog
        </button>

        <button
          className={`w-full flex items-center p-3 text-black  rounded-md ${
            selectedRoute === "ContactMessage" ? "bg-[#2ec4b6] shadow-[0_4px_10px_#2ec4b6] text-white" : ""
          }`}
          onClick={() => setSelectedRoute("ContactMessage")}
        >
          <BiSolidMessageSquareDetail className="mr-2" /> Contact Message
        </button>


      </div>
    </div>
  );
};

export default LeftBar;
