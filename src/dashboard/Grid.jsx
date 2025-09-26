import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Building2, PlusSquare, Users } from "lucide-react";

const data = [
  { value: 1000 },
  { value: 1100 },
  { value: 1050 },
  { value: 1200 },
];

const StatCard = ({ title, subtitle, value, icon: Icon, chart }) => (
  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-sm font-semibold text-gray-500">{title}</h2>
        <p className="text-xl font-bold text-gray-800">{value}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
      <div className="bg-green-100 p-2 rounded-full">
        <Icon className="w-5 h-5 text-[#2ec4b6]" />
      </div>
    </div>
    {chart && (
      <div className="h-16 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2ec4b6"
              fill="rgba(16, 185, 129, 0.1)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )}
  </div>
);

const Grid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <StatCard
        title="Total Properties"
        subtitle="Tracked over the last month"
        value="1,200"
        icon={Building2}
        chart
      />
      <StatCard
        title="New Listings"
        subtitle="Added this week"
        value="240"
        icon={PlusSquare}
        chart={false}
      />
      <StatCard
        title="Visitor Count"
        subtitle="Unique site visitors"
        value="3,550"
        icon={Users}
        chart
      />
    </div>
  );
};

export default Grid;
