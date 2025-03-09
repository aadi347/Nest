import React, { useState } from "react";
import LeftBar from "./LeftBar";
import MainDash from "./MainDash";

const Dashboard = () => {
  const [selectedRoute, setSelectedRoute] = useState("Dashboard"); // Track selected page

  return (
    <div className="grid gap-4 p-4 bg-gradient-to-r from-violet-200 to-pink-200 grid-cols-[220px,_1fr] h-screen">
      {/* Sidebar */}
      <LeftBar selectedRoute={selectedRoute} setSelectedRoute={setSelectedRoute} />

      {/* Right Side Content */}
      <MainDash selectedRoute={selectedRoute} />
    </div>
  );
};

export default Dashboard;
