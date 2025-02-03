import React, { useState } from "react";
import Cropper from "./Cropper";

const ProfileSettings = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 border-b py-4">Profile Settings</h1>
      
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={profileImage || "https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI"}
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
        <label className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">
          Change Image
          <input type="file" className="hidden" onChange={handleImageChange} />
        </label>
      </div>

      <form className="grid grid-cols-1 gap-4">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="p-2 border rounded w-full" />
        </label>

        <label className="block">
          <span className="text-gray-700">Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded w-full" disabled />
        </label>

        <label className="block">
          <span className="text-gray-700">New Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border rounded w-full" />
        </label>

        <div className="flex space-x-4">
          <button type="button" className="border  text-black hover:text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
