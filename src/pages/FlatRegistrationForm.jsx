import React, { useState } from "react";
import axios from "axios";

const FlatRegistrationForm = () => {
  const [formData, setFormData] = useState({
    flatType: "",
    rent: "",
    location: "",
    parking: "",
    utilities: "",
    houseName: "",
    deposit: "",
    carpetArea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {flatType, rent, location, parking, utilities, houseName, deposit, carpetArea};
    try {
        const res = await axios.post('http://localhost:3000/flatregistartion', data);
        alert("Property regsitration completed sucessfully");
        console.log(res.data);
    } catch (error) {
        console.error(error.response?.data || error.message);
        alert("An error occurred while registration your property");
    }
   
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg w-[1212px] h-[611px] p-10"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-custom-purple">
          Flat Registration Form
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {/* Flat Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Flat Type <span className="text-red-500">*</span>
            </label>
            <select
              name="flatType"
              value={formData.flatType}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border rounded-md focus:ring-custom-purple focus:border-indigo-500"
              required
            >
              <option value="" disabled>
                Select Flat Type
              </option>
              <option value="1 BHK">1 BHK</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
            </select>
          </div>

          {/* Flat Rent */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Flat Rent (₹) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="rent"
              value={formData.rent}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Rent"
              required
            />
          </div>

          {/* Flat Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Flat Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Location"
              required
            />
          </div>

          {/* Parking */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Parking <span className="text-red-500">*</span>
            </label>
            <select
              name="parking"
              value={formData.parking}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>
                Select Parking Type
              </option>
              <option value="2-wheeler Shaded">2-wheeler Shaded</option>
              <option value="2-wheeler Not Shaded">2-wheeler Not Shaded</option>
              <option value="4-wheeler Shaded">4-wheeler Shaded</option>
              <option value="4-wheeler Not Shaded">4-wheeler Not Shaded</option>
            </select>
          </div>

          {/* Utilities */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Electricity & Water Supply <span className="text-red-500">*</span>
            </label>
            <select
              name="utilities"
              value={formData.utilities}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="24/7">24/7</option>
              <option value="Limited Hours">Limited Hours</option>
            </select>
          </div>

          {/* House Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              House Name
            </label>
            <input
              type="text"
              name="houseName"
              value={formData.houseName}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter House Name"
            />
          </div>

          {/* Deposit */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Deposit (₹)
            </label>
            <input
              type="number"
              name="deposit"
              value={formData.deposit}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Deposit Amount"
            />
          </div>

          {/* Carpet Area */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Carpet Area (sq ft)
            </label>
            <input
              type="number"
              name="carpetArea"
              value={formData.carpetArea}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Carpet Area"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-500 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlatRegistrationForm;
