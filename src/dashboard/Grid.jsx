import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  { value: 1000 },
  { value: 1100 },
  { value: 1050 },
  { value: 1200 }, // Current property count
];

  
  

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 rounded-2xl">
      {/* Total Property with Graph */}
      <div className="bg-white rounded-lg  p-4 border border-gray-200">
        <h1 className="text-sm font-bold">Total Property</h1>
        <p className="text-xs font-bold">1,200</p>
        <div className="h-16 mt-2">
        <ResponsiveContainer width="100%" height={60}>
  <AreaChart data={data}>
    <Area
      type="monotone"
      dataKey="value"
      stroke="#10B981"
      fill="rgba(16, 185, 129, 0.2)" // Soft green fill
      strokeWidth={2}
      dot={false}
    />
  </AreaChart>
</ResponsiveContainer>

        </div>
      </div>

      {/* New Property */}
      <div className="bg-white rounded-lg  p-4 border border-gray-200">
        <h1 className="text-sm font-bold">New Property</h1>
        <p className="text-xs font-bold border-b pb-3">1,200</p>
      </div>

      {/* Visitors Count */}
      <div className="bg-white rounded-lg  p-4 border border-gray-200">
        <h1 className="text-sm font-bold">Visitors Count</h1>
        <p className="text-xs font-bold">1,200</p>
        <div className="h-16 mt-2">
        <ResponsiveContainer width="100%" height={60}>
        <AreaChart data={data}>
            <Area
      type="monotone"
      dataKey="value"
      stroke="#10B981"
      fill="rgba(16, 185, 129, 0.2)" // Soft green fill
      strokeWidth={2}
      dot={false}
    />
  </AreaChart>
</ResponsiveContainer>

        </div>
      </div>
    </div>
  );
};

export default Grid;
