import React, { useState } from "react";
import axios from "axios";

const AddProperty = () => {
  const [loading, setLoading] = useState(false);
  const [flatType, setFlatType] = useState("");
  const [rent, setRent] = useState("");
  const [location, setLocation] = useState("");
  const [parking, setParking] = useState("");
  const [utilities, setUtilities] = useState("");
  const [houseName, setHouseName] = useState("");
  const [deposit, setDeposit] = useState("");
  const [carpetArea, setCarpetArea] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      flatType,
      rent,
      location,
      parking,
      utilities,
      houseName,
      deposit,
      carpetArea,
      image,
    };

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/flatregistration",
        data
      );
      setLoading(false);
      alert("Property registration completed successfully!");
      console.log(res.data);
    } catch (error) {
      setLoading(false);
      console.error(error.response?.data || error.message);
      alert("An error occurred while registering your property.");
    }
  };

  return (
    <div className="flex-1 bg-white rounded-3xl p-6">
      <h1 className="text-2xl font-semibold text-left mb-6 border-b py-4 bg-slate-50 rounded-md">Add Property</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <label className="block text-sm/6 font-medium text-gray-900">House Name
            <input placeholder="Enter Your House Name" 
            type="text" 
            value={houseName} 
            onChange={(e) => setHouseName(e.target.value)} 
            className="p-2 border rounded w-full" 
            required />
        </label>

        <label className="block text-sm/6 font-medium text-gray-900">Flat Type
          <select value={flatType} onChange={(e) => setFlatType(e.target.value)} className="p-2 border rounded w-full" required>
            <option value="">Select Flat Type</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
          </select>
        </label>

        <label className="block text-sm/6 font-medium text-gray-900">Rent
          <input placeholder="Enter Your Rent Here" 
               type="number" 
               value={rent} 
               onChange={(e) => 
               setRent(e.target.value)} 
               className="p-2 border rounded w-full" 
               required />
        </label>

        <label className="block text-sm/6 font-medium text-gray-900">Location
              <input
              placeholder="Enter Your Rent Here" 
              type="text" 
              value={location} onChange={(e) => setLocation(e.target.value)} 
              className="p-2 border rounded w-full" 
              required />
        </label>

        <label className="block text-sm/6 font-medium text-gray-900">Parking
          <select value={parking} onChange={(e) => setParking(e.target.value)} className="p-2 border rounded w-full" required>
            <option value="">Select Parking Type</option>
            <option value="2-wheeler Shaded">2-wheeler Shaded</option>
            <option value="2-wheeler Not Shaded">2-wheeler Not Shaded</option>
            <option value="4-wheeler Shaded">4-wheeler Shaded</option>
            <option value="4-wheeler Not Shaded">4-wheeler Not Shaded</option>
            <option value="Both Shaded for 2 & 4 Wheeler">Both Shaded for 2 & 4 Wheeler</option>
            <option value="Not Available">Not Available</option>
          </select>
        </label>

        <label className="block text-sm/6 font-medium text-gray-900">Utilities
              <input placeholder="Enter Your Rent Here" 
              type="text" value={utilities} onChange={(e) => setUtilities(e.target.value)} 
              className="p-2 border rounded w-full" 
              required />
        </label>

        <label className="block text-sm/6 font-medium text-gray-900">Deposit
              <input placeholder="Enter Your Rent Here" 
              type="number" value={deposit} onChange={(e) => setDeposit(e.target.value)} 
              className="p-2 border rounded w-full" 
              required />
        </label>

        <label className="block text-sm/6 font-medium text-gray-900">Carpet Area
              <input placeholder="Enter Your Rent Here" 
              type="text" value={carpetArea} onChange={(e) => setCarpetArea(e.target.value)} 
              className="p-2 border rounded w-full" 
              required />
        </label>

        <label className="block text-sm/6 font-medium text-gray-900">Image Upload <span className="text-gray-500 text-xs">(Upload a photo of your property)</span><br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} className="hidden" />
          <div className="border p-2 rounded cursor-pointer text-center bg-gray-100 hover:bg-gray-200">Choose File</div>
        </label>

        <div className="col-span-2 md:col-span-2 flex justify-between">
          <button type="button" className=" border text-black p-2 rounded-md hover:text-white hover:bg-gray-600">Cancel</button>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            {loading ? "Submitting..." : "Submit Property"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddProperty;
