import React from "react";
import { Link } from 'react-router-dom';



const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[1212px] h-[611px] rounded-[50px] flex overflow-hidden">
        {/* Left side (Blue) */}
        <div className="w-1/2 bg-custom-purple flex justify-center items-center text-white p-8">
          <h1 className="text-4xl">Welcome!</h1>
        </div>

        {/* Right side (Red with Signup form) */}
        <div className="w-1/2 bg-white flex justify-center items-center">
          <div className="w-4/5 max-w-[350px] p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-custom-purple mb-6">Sign Up</h2>
            <form>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 mb-4 border rounded-md"
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Enter your email ID"
                className="w-full p-3 mb-4 border rounded-md"
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 mb-4 border rounded-md"
                required
              />
              <button
                type="submit"
                className="w-full p-3 bg-custom-green text-white rounded-md hover:bg-custom-green-hover focus:outline-none"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp