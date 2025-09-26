import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Home, BedDouble } from "lucide-react";

const statusData = [
  { name: "Available", value: 12 },
  { name: "Occupied", value: 8 },
];

const flatTypeData = [
  { name: "1BHK", value: 5 },
  { name: "2BHK", value: 8 },
  { name: "3BHK", value: 4 },
  { name: "Studio", value: 3 },
];

const STATUS_COLORS = ["#34D399", "#F87171"];
const FLAT_TYPE_COLORS = ["#60A5FA", "#FBBF24", "#A78BFA", "#F472B6"];

const PropertyStatusChart = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-2xl">
      {/* Status Pie Chart */}
      <div className="bg-gray-50 p-4 rounded-xl  shadow hover:shadow-lg transition-shadow duration-300" >
        <div className="flex items-center gap-2 mb-4">
          <Home className="text-[#2ec4b6]" />
          <h2 className="text-lg font-semibold text-gray-700">Property Status</h2>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={STATUS_COLORS[index % STATUS_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} iconType="circle"/>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Flat Type Pie Chart */}
      <div className="bg-gray-50 shadow hover:shadow-lg transition-shadow duration-300 p-4 rounded-xl ">
        <div className="flex items-center gap-2 mb-4">
          <BedDouble className="text-[#2ec4b6]" />
          <h2 className="text-lg font-semibold text-gray-700">Flats by Type</h2>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={flatTypeData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              fill="#82ca9d"
              dataKey="value"
              label
            >
              {flatTypeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={FLAT_TYPE_COLORS[index % FLAT_TYPE_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PropertyStatusChart;
