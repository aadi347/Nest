import React, { useState } from "react";
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from "react-icons/fi";

export const RouteSelect = () => {
  const [selectedRoute, setSelectedRoute] = useState("Dashboard");

  return (
    <div className="space-y-1">
      <Route Icon={FiHome} title="Dashboard" selected={selectedRoute === "Dashboard"} onClick={() => setSelectedRoute("Dashboard")} />
      <Route Icon={FiUsers} title="Team" selected={selectedRoute === "Team"} onClick={() => setSelectedRoute("Team")} />
      <Route Icon={FiPaperclip} title="Invoices" selected={selectedRoute === "Invoices"} onClick={() => setSelectedRoute("Invoices")} />
      <Route Icon={FiLink} title="Integrations" selected={selectedRoute === "Integrations"} onClick={() => setSelectedRoute("Integrations")} />
      <Route Icon={FiDollarSign} title="Finance" selected={selectedRoute === "Finance"} onClick={() => setSelectedRoute("Finance")} />
    </div>
  );
};

const Route = ({ selected, Icon, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </button>
  );
};

export default RouteSelect;
