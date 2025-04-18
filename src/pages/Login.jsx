import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Illustartion from "/Users/adityakumar/Desktop/Nest/frontend/src/assets/authentication-65.svg"
import ErrorBox from "../components/ErrorBox";
import LoginLoader from "../components/LoginLoader";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPopup, setErrorPopup] = useState(false);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/users/login", data, {
        withCredentials: true, // Important for cookies
      });

      if (res.status === 200) {
        setLoading(true);

        setTimeout(() => {
          setLoader(false);
          // alert("Login successful");
          navigate("/dashboard"); 
        }, 4000);
        setLoader(true);
        // Redirect to dashboard
      } else {
        setLoading(false);
        alert("Invalid login credentials. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        alert(error.response.data.message || "Login failed. Please try again.");
    
      } else {
        // alert("An error occurred while logging in. Please try again.");
        setErrorPopup(true);
      }
      console.error(error);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(	https://cdn.svgator.com/images/2022/06/animated-svg-background-example.svg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative flex max-w-4xl w-full mx-4 md:mx-0 bg-white/40 backdrop-blur-3xl rounded-lg shadow-lg overflow-hidden">
        <div className="hidden md:flex md:w-1/2 lg:w-2/5 p-6 items-center justify-center  rounded-lg bg-[#8E05C2]/40 backdrop-blur-3xl">
          <img
            src={Illustartion}
            alt="Illustration"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 bg-[#8E05C2]/40 backdrop-blur-3xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-white mb-6">Login To Continue</h2>
          <p className="text-white mb-6">Please log in to continue</p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:[#8E05C2]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm mb-2" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 mt-4 bg-[#8E05C2] text-white rounded-lg font-semibold ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#8E05C2]"
              } transition duration-300`}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
          <p className="text-white text-sm text-center mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#8E05C2] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      {/* Conditionally show popup */}
      {errorPopup && (
        <ErrorBox
         
          onClose={() => setErrorPopup(false)}
        />
      )}

      {loader && (
        <div className="">
          <LoginLoader />
        </div>
      )}
      
    </div>
  );
};

export default Login;
