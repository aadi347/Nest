import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    const data = { name, email, password };

    setLoading(true); // Set loading state to true
    try {
      const res = await axios.post("http://localhost:3000/signup", data);
      setLoading(false); // Set loading state to false
      alert("Signup successful!");
      console.log(res.data);

      // Redirect to the login page
      navigate("/login");
    } catch (error) {
      setLoading(false); // Set loading state to false
      console.error(error.response?.data || error.message);
      alert("An error occurred while signing up. Please check the console.");
    }
  };

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
            <form onSubmit={handleSignup}>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 mb-4 border rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Enter your email ID"
                className="w-full p-3 mb-4 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 mb-4 border rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className={`w-full p-3 text-white rounded-md hover:bg-custom-green-hover focus:outline-none ${
                  loading ? "bg-gray-400 cursor-not-allowed" : "bg-custom-green"
                }`}
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
