import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center" 
    style={{ 
        backgroundImage: 'url(https://img.freepik.com/free-vector/background-video-conference-urban-city_23-2148641634.jpg?t=st=1731431739~exp=1731435339~hmac=f4ebfc77af8ab7877010783ed2977f0d6804b4106bc4c999797ec336b22f1201&w=1480)' }}>
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional overlay for better contrast */}
      
      <div className="relative flex max-w-4xl w-full mx-4 md:mx-0 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
        {/* Illustration Section */}
        <div className="hidden md:flex md:w-1/2 lg:w-2/5 p-6 items-center justify-center">
          <img src="/path/to/your/illustration.png" alt="Illustration" className="w-full h-auto object-cover" />
        </div>

        {/* Login Form Section */}
        <div className="w-full md:w-1/2 lg:w-3/5 p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-white mb-6">Welcome to NEST</h2>
          <p className="text-white mb-6">Please sign in to continue</p>
          <form>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="text-white text-sm text-center mt-6">
            Don't have an account? <a href="/register" className="text-teal-400 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login;