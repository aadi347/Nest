import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
      const res = await axios.post("http://localhost:3000/users/signup", userData, {
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
    <div className="mx-auto flex h-screen max-w-lg flex-col md:max-w-none md:flex-row md:pr-10">
  <div className="max-w-md rounded-3xl bg-gradient-to-t from-[#b646e3] via-[#b646e3] to-[#8E05C2] px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
    <p className="mb-20 font-bold tracking-wider">NEST</p>
    <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
      Start your <br />
      journey with us
    </p>
    <p className="mb-28 leading-relaxed text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi voluptas a officia. Omnis.</p>
    <div className="bg-[#8E05C2]/80 rounded-2xl px-4 py-8 shadow-lg">
      <p className="mb-3 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea voluptates sapiente!</p>
      <div className="">
        <div className="flex items-center">
          <img className="h-10 w-10 rounded-full object-cover" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" alt="Simon Lewis" />
          <p className="ml-4 w-56">
            <strong className="block font-medium">Simon Lewis</strong>
            <span className="text-xs text-gray-200"> Published 12 Bestsellers </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="px-4 py-20">
    <h2 className="mb-2 text-3xl font-bold">Sign Up</h2>
    <a href="#" className="mb-10 block font-bold text-gray-600">Have an account</a>
    <p className="mb-1 font-medium text-gray-500">Are You?</p>
    <div className="mb-6 flex flex-col gap-y-2 gap-x-4 lg:flex-row">
      <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
        <input className="peer hidden" type="radio" name="radio" id="radio1" checked />
        <label className="peer-checked:border-[#8E05C2] peer-checked:bg-[#edc5fc]] absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="radio1"> </label>
        <div className="peer-checked:border-transparent peer-checked:bg-[#8E05C2] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-[#8E05C2] ring-offset-2"></div>
        <span className="pointer-events-none z-10">Tenet</span>
      </div>
      <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
        <input className="peer hidden" type="radio" name="radio" id="radio3" checked />
        <label className="peer-checked:border-[#8E05C2] peer-checked:bg-[#edc5fc] absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="radio3"> </label>
        <div className="peer-checked:border-transparent peer-checked:bg-[#8E05C2] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-[#8E05C2] ring-offset-2"></div>
        <span className="pointer-events-none z-10">Owner</span>
      </div>

      <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
        <input className="peer hidden" type="radio" name="radio" id="radio3" checked />
        <label className="peer-checked:border-[#8E05C2] peer-checked:bg-[#edc5fc] absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="radio3"> </label>
        <div className="peer-checked:border-transparent peer-checked:bg-[#8E05C2] peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-[#8E05C2] ring-offset-2"></div>
        <span className="pointer-events-none z-10">Admin</span>
      </div>
    </div>
    <p className="mb-1 font-medium text-gray-500">Name</p>
    <div className="mb-4 flex flex-col">
      <div className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        
      <input name="name" value={name} onChange={(e) => setName(e.target.value)} type="email" id="signup-email" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your email" />
      </div>
    </div>
    <p className="mb-1 font-medium text-gray-500">Email</p>
    <div className="mb-4 flex flex-col">
      <div className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="signup-email" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your email" />
      </div>
    </div>
    <p className="mb-1 font-medium text-gray-500">Password</p>
    <div className="mb-4 flex flex-col">
      <div className="focus-within:border-blue-600 relative flex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
        <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="signup-password" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Choose a password (minimum 8 characters)" />
      </div>
    </div>
    <button onClick={handleSignup} className="hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-[#8E05C2] to-[#b82fef] px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">Sign Up</button>
  </div>
</div>

  );
};

export default SignUp;
