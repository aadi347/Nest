import React, { useState } from "react";
import axios from 'axios';

const AddNest = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState(null);
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
  
  
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      if (image) data.append("image", image);
  
      try {
        const response = await axios.post("http://localhost:3000/addNest/createProperty", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
  
        alert("Property listed successfully!");
        console.log("Response:", response.data);
  
        // Reset form after successful submission
        setFormData({
          flatType: "",
          rent: "",
          location: "",
          parking: "",
          utilities: "",
          houseName: "",
          deposit: "",
          carpetArea: "",
        });
        setImage(null);
        setImagePreview(null);
      } catch (error) {
        console.error("Error listing property:", error.response?.data || error.message);
        alert("Error listing property. Please try again.");
      }
    };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-left border-b border-gray-200">List Your Property</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Flat Type */}
        <div>
          <label className="block text-gray-500 font-medium text-sm">Flat Type</label>
          <select className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#2ec4b6]">
            <option>1 BHK</option>
            <option>2 BHK</option>
          </select>
        </div>

        {/* Rent */}
        <div>
          <label className="block text-gray-500 font-medium text-sm">Rent (₹)</label>
          <input type="number" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#2ec4b6]" />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-500 font-medium text-sm">Location</label>
          <select className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#2ec4b6]">
            <option>Patna</option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>
        </div>

        {/* Parking */}
        <div>
          <label className="block text-gray-500 font-medium text-sm">Parking</label>
          <select className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#2ec4b6]">
            <option>2-wheeler Shaded</option>
            <option>4-wheeler Shaded</option>
            <option>2-wheeler Non-shaded</option>
            <option>4-wheeler Non-shaded</option>
          </select>
        </div>

        {/* Utilities */}
        <div>
          <label className="block text-gray-500 font-medium text-sm">Utilities</label>
          <select className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#2ec4b6]">
            <option>24/7</option>
          </select>
        </div>

        {/* House Name */}
        <div>
          <label className="block text-gray-500 font-medium text-sm">House Name</label>
          <input type="text" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#2ec4b6]" />
        </div>

        {/* Deposit */}
        <div>
          <label className="block text-gray-500 font-medium text-sm">Deposit (₹)</label>
          <input type="number" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#2ec4b6]" />
        </div>

        {/* Carpet Area */}
        <div>
          <label className="block text-gray-500 font-medium text-sm">Carpet Area (sq.ft.)</label>
          <input type="number" className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#2ec4b6]" />
        </div>
      </form>

      {/* Image Upload Section */}
      <div className="mt-6">
        <label className="block text-gray-500 font-medium mb-2 text-sm">Upload Property Image</label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
            )}
            <input onChange={handleImageChange} id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>

        {/* Submit Button */}
      <div className="mt-6 flex justify-center">
<button
    onClick={handleSubmit}
  type="submit"
  className="relative bottom-0 flex justify-center items-center gap-2 border border-[#2ec4b6] rounded-xl text-[#FFF] font-black bg-[#2ec4b6] uppercase px-8 py-4 z-10 overflow-hidden ease-in-out duration-700 group hover:text-[#2ec4b6] hover:bg-[#FFF] active:scale-95 active:duration-0 focus:bg-[#FFF] focus:text-[#000] isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFF] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700"
>
  <span
    className="truncate eaes-in-out duration-300 group-active:-translate-x-96 group-focus:translate-x-96"
    >Submit</span
  >
  <div
    className="absolute flex flex-row justify-center items-center gap-2 -translate-x-96 eaes-in-out duration-300 group-active:translate-x-0 group-focus:translate-x-0"
  >
    <div
      className="animate-spin size-4 border-2 border-[#000] border-t-transparent rounded-full"
    ></div>
    Submitting...
  </div>
  <svg
    className="fill-[#FFF] group-hover:fill-[#2ec4b6] group-hover:-translate-x-0 group-active:translate-x-96 group-active:duration-0 group-focus:translate-x-96 group-focus:fill-[#000] ease-in-out duration-700"
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z"
    ></path>
  </svg>
</button>
</div>

    </div>
  );
};

export default AddNest;
