import React from "react";
import TopBar from "./TopBar";
import AccountTggle from "./AccountToggle"
// import Grid from "./components/Grid";
// import LastFlatAdd from "./components/LastFlatAdd";
import DashboardPage from "./DashboardPage";
// import AddNest from "./pages/AddNest";
// import ManageNest from "./pages/ManageNest";
import Profile from "./Profile";
import ManageBlog from "./Blog/ManageBlog";

const MainDash = ({ selectedRoute }) => {
  return (
    <div className="bg-white bg-opacity-60 rounded-r-lg shadow h-screen overflow-y-auto p-6">
      <TopBar />
      {/* <AccountTggle /> */}
      
      {/* Dynamic Content */}
      {selectedRoute === "Dashboard" && <DashboardPage />}
      {/* {selectedRoute === "AddNest" && <AddNest />}
      {selectedRoute === "ManageNest" && <ManageNest />} */}
      {selectedRoute === "Profile" && <Profile />}
      {selectedRoute === "Blog" && <ManageBlog />}   

      {/* <LastFlatAdd /> */}
    </div>
  );
};

export default MainDash;
