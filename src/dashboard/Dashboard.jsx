import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyManagement from './PropertyManagement.jsx';
import ProfileSettings from "./ProfileSettings.jsx";
import SupportAndResources from "./SupportAndResources.jsx";
import AddProperty from './addFlat.jsx';
import { FaHouse } from "react-icons/fa6";
import { IoMdLogOut,IoMdContact } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import LogoutDialog from '/Users/adityakumar/Desktop/Folder/Nest/frontend/src/components/LogoutDialog.jsx';


const Dashboard = () => {
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('PropertyManagement');
  const [open, setOpen] = useState(false);

  // Function to render the active section
  const renderSection = () => {
    switch (activeSection) {
      case 'PropertyManagement':
        return <PropertyManagement />;
      case 'ProfileSettings':
        return <ProfileSettings />;
      case 'SupportAndResources':
        return <SupportAndResources />;
      case 'AddProperty':
        return <AddProperty />;
      default:
        return <PropertyManagement />;
    }
  };
   
  

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      {/* Horizontal Bar */}
      <div className="flex items-center justify-between bg-white border m-6 p-6 rounded-lg py-2 mt-5">
        <div className="flex items-center space-x-4 ">
          {/* User Photo */}
          <img
            src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA" // Replace with the actual user photo URL
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          {/* User Name */}
          <span className="font-semibold text-gray-800">Aditya Kumar</span>
        </div>
        <div className="flex items-center space-x-6">
          {/* Notification Button */}
          <button className="text-gray-600 hover:text-gray-800">
            <i className="fas fa-bell text-lg"></i>
          </button>
          {/* Home Button */}
          <Link to="/" className="text-black hover:bg-gray-300 hover:text-white py-2 px-4 border rounded-full flex items-center gap-2">
  <GoHomeFill />
  Home
</Link>

{/* Contact Us Button */}
<Link to="/contact" className="text-black hover:bg-gray-300 hover:text-white py-2 px-4 border rounded-full flex items-center gap-2">
<IoMdContact />
  Contact Us
  
</Link>

<button onClick={() => setOpen(true)}  className="text-black hover:bg-gray-300 hover:text-white py-2 px-4 border rounded-full flex items-center gap-2">
  <IoMdLogOut />
  LogOut
  <LogoutDialog open={open} setOpen={setOpen} />
</button>

        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/4 bg-white rounded-lg border m-6 p-6">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <button 
                
                className={`w-full text-left p-2 rounded-3xl ${activeSection === 'PropertyManagement' ? 'bg-gradient-to-r from-custom-green to-custom-purple text-white' : ''}`}
                onClick={() => setActiveSection('PropertyManagement')}
              >
                Property Management
              </button>
              
            </li>
            <li>
              <button 
                className={`w-full text-left p-2 rounded-3xl ${activeSection === 'ProfileSettings' ? 'bg-gradient-to-r from-custom-green to-custom-purple text-white' : ''}`}
                onClick={() => setActiveSection('ProfileSettings')}
              >
                Profile Settings
              </button>
            </li>
            <li>
              <button 
                className={`w-full text-left p-2 rounded-3xl ${activeSection === 'SupportAndResources' ? 'bg-gradient-to-r from-custom-green to-custom-purple text-white' : ''}`}
                onClick={() => setActiveSection('SupportAndResources')}
              >
                Support and Resources
              </button>
            </li>
            <li>
              <button 
                className={`w-full text-left p-2 rounded-3xl ${activeSection === 'AddProperty' ? 'bg-gradient-to-r from-custom-green to-custom-purple text-white' : ''}`}
                onClick={() => setActiveSection('AddProperty')}
              >
                AddProperty
              </button>
            </li>
          </ul>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 bg-white rounded-lg border m-6 p-8">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
