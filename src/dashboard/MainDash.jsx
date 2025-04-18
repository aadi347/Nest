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
import AddNest from "./AddNest";
import ContactMessage from "./ContactMessage";

const MainDash = ({ selectedRoute }) => {
  return (
    <div className="bg-white rounded-r-lg shadow h-screen overflow-y-auto p-6">
      <TopBar />

      {selectedRoute === "Dashboard" && <DashboardPage />}
      {selectedRoute === "Profile" && <Profile />}
      {selectedRoute === "Blog" && <ManageBlog />}   
      {selectedRoute === "AddNest" && <AddNest />}
      {/* {selectedRoute === "ManageNest" && <ManageNest />} */}
      {selectedRoute === "ContactMessage" && <ContactMessage />}
      {/* {selectedRoute === "LastFlatAdd" && <LastFlatAdd />} */}
      {/* {selectedRoute === "Grid" && <Grid />} */}
      {/* {selectedRoute === "AccountToggle" && <AccountTggle />} */}


    </div>
  );
};

export default MainDash;
