import React from "react";

const flats = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg", // Replace with actual image URL
    name: "Luxury Apartment",
    timestamp: "2025-02-28 14:30",
    status: "Available",
    location: "New Delhi, India",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    name: "Cozy Studio",
    timestamp: "2025-02-27 11:15",
    status: "Not Available",
    location: "Mumbai, India",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    name: "Modern Duplex",
    timestamp: "2025-02-26 09:45",
    status: "Available",
    location: "Bangalore, India",
  },
];

const LastFlatAdd = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow p-4">
        <h1 className="text-xl font-bold border-b py-2">Last Flats Added</h1>

        {/* Table */}
        <div className="overflow-x-auto mt-4 rounded-md">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border">
                  #
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border">
                  Image
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border">
                  Added At
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border">
                  Location
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {flats.map((flat, index) => (
                <tr key={flat.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">
                    <img
                      src={flat.image}
                      alt={flat.name}
                      className="h-12 w-12 object-cover rounded-full shadow-md border"
                    />
                  </td>
                  <td className="px-4 py-2 border text-sm">{flat.name}</td>
                  <td className="px-4 py-2 border text-sm">{flat.timestamp}</td>
                  <td
                    className={`px-4 py-2 border text-sm font-semibold ${
                      flat.status === "Available"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {flat.status}
                  </td>
                  <td className="px-4 py-2 border text-sm">{flat.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* End Table */}
      </div>
    </div>
  );
};

export default LastFlatAdd;
