import React, { useState, useEffect } from 'react';

const dummyFlats = [
  {
    id: 1,
    title: "2BHK Apartment in Kankarbagh",
    image: "data:image/jpeg;base64,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",
    location: "Patna, Bihar",
    price: 9000,
    type: "2BHK",
    amenities: ["Parking", "Terrace", "24x7 Water"],
  },
  {
    id: 2,
    title: "1BHK Flat in Boring Road",
    image: "data:image/jpeg;base64,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",
    location: "Patna, Bihar",
    price: 7000,
    type: "1BHK",
    amenities: ["Water Supply"],
  },
  // Add more dummy flats here
];

const SearchResultsPage = () => {
  const [flats, setFlats] = useState(dummyFlats);
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    price: '',
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilters({ type: '', location: '', price: '' });
    setFlats(dummyFlats);
  };

  const applyFilters = () => {
    let filtered = dummyFlats.filter((flat) => {
      return (
        (filters.type ? flat.type === filters.type : true) &&
        (filters.location ? flat.location.includes(filters.location) : true) &&
        (filters.price ? flat.price <= Number(filters.price) : true)
      );
    });
    setFlats(filtered);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 p-6 bg-slate-50 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        <div className="mb-4">
          <label className="block font-medium">Flat Type</label>
          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full mt-1 p-2 border rounded"
          >
            <option value="">All</option>
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
            <option value="4BHK">4BHK</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="Enter city or area"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium">Max Price</label>
          <input
            type="number"
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
            className="w-full mt-1 p-2 border rounded"
            placeholder="e.g. 10000"
          />
        </div>

        <div className="flex gap-2 mt-6">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={applyFilters}
          >
            Apply
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </aside>

      {/* Search Results */}
      <main className="flex-1 p-6 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Search Results</h2>

        {flats.length === 0 ? (
          <p>No flats match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flats.map((flat) => (
              <div key={flat.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={flat.image} alt={flat.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{flat.title}</h3>
                  <p className="text-gray-600">{flat.location}</p>
                  <p className="text-blue-600 font-semibold">₹{flat.price}/month</p>
                  <p className="text-sm text-gray-500 mt-2">Type: {flat.type}</p>
                  <p className="text-sm text-gray-500">Amenities: {flat.amenities.join(', ')}</p>
                  <button className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchResultsPage;
