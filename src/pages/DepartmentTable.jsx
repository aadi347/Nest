import React from 'react';

const data = [
  ["Section 1", 8, 3, 8, 4],
  ["Section 2", 4, 6, 12, 9],
  ["Section 3", 2, 4, 8, 8],
  ["Section 4", 3, 3, 6, 6],
  ["Section 5", 5, 6, 13, 9],
  ["Section 6", 3, 7, 9, 12],
  ["Section 7", 6, 5, 10, 5],
  ["Section 8", 7, 3, 6, 9],
  ["Section 10", 4, 8, 12, 12],
];

const DepartmentTable = () => {
  return (
    <div className="py-10">
    <div className="p-6 max-w-4xl mx-auto bg-white border rounded-lg py-5">
      <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-4">
        <h2 className="text-2xl font-semibold text-gray-600">Department of Lawyer</h2>
        <button className="border border-purple-600 text-purple-700 px-4 py-1 rounded hover:bg-purple-100 transition">
          DASHBOARD
        </button>
      </div>
      <table className="w-full text-left border-separate border-spacing-y-0">
        <thead>
          <tr className="text-gray-600 border-b border-gray-300">
            <th className="py-2">Section</th>
            <th>CWJC</th>
            <th>MJC</th>
            <th>SLP</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(([section, cwjc, mjc, slp, last], index) => (
            <tr
              key={index}
              className="border-b border-gray-200"
            >
              <td className="py-3 text-sm font-semibold text-gray-500">{section}</td>
              <td>
                <span className="bg-orange-400 text-white px-3 py-1 rounded">{cwjc}</span>
              </td>
              <td>
                <span className="bg-blue-400 text-white px-3 py-1 rounded">{mjc}</span>
              </td>
              <td>
                <span className="bg-green-500 text-white px-3 py-1 rounded">{slp}</span>
              </td>
              <td className="text-gray-700">{last}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DepartmentTable;
