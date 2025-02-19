import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");  // New state for DOB
  const [profileImage, setProfileImage] = useState(null);  // State for profile image

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Check if all required fields are filled
    if (!name || !email || !password) {
      alert("Name, email, and password are required");
      return;
    }
  
    const userData = { name, email, password };
  
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/signup", userData, {
        headers: { "Content-Type": "application/json" },
      });
      setLoading(false);
      alert("Signup successful!");
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.error(error.response?.data || error.message);
      alert("An error occurred while signing up. Please check the console.");
    }
  };

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[90%] max-w-4xl h-auto rounded-3xl flex overflow-hidden border bg-white">
        {/* Left Section */}
        <div className="w-1/2 bg-gradient-to-r from-custom-green to-custom-purple flex justify-center items-center text-white p-8">
          <h1 className="text-5xl font-bold">Welcome to NEST!</h1>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex justify-center items-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold text-custom-purple mb-8 text-center">Sign Up</h2>
            <p className="font-semibold text-gray-300 mb-8 text-center border-b">Create an account to start using NEST Property Listing Service</p>
            <form onSubmit={handleSignup} className="space-y-5">
              {/* Name */}
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Date of Birth */}
              {/* <input
                type="date"
                className="w-full p-4 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              /> */}

              {/* Profile Image */}
              {/* <input
                placeholder="Place your Profile Image "
                type="file"
                accept="image/*"
                className="w-full p-2"
                onChange={handleImageChange}
              /> */}

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full p-4 text-white rounded-full font-semibold  ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-custom-purple hover:bg-indigo-700 ursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#8a2be2] before:to-[#443dff] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
                } transition duration-300`}
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
              <p  className="text-1xl font-semibold text-custom-purple mb-8 text-center border-b">or</p>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
