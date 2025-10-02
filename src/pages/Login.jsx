import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import ErrorBox from "../components/ErrorBox";
import LoginLoader from "../components/LoginLoader";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [loader, setLoader] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = { email, password };
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/users/login", data, {
        withCredentials: true, 
      });

      if (res.status === 200) {
        setLoading(true);
        setTimeout(() => {
          setLoader(false);
          navigate("/dashboard"); 
        }, 4000);
        setLoader(true);
      } else {
        setLoading(false);
        alert("Invalid login credentials. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        alert(error.response.data.message || "Login failed. Please try again.");
        console.error(error.response.data);
      } else {
        setErrorPopup(true);
      }
      console.error(error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  const inputVariants = {
    focused: { scale: 1.02, boxShadow: "0 0 0 3px rgba(142, 5, 194, 0.1)" },
    unfocused: { scale: 1, boxShadow: "0 0 0 0px rgba(142, 5, 194, 0)" }
  };

  // Background pattern style
  const backgroundPattern = {
    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
    backgroundSize: '20px 20px'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={backgroundPattern}></div>

      <motion.div 
        className="w-full max-w-md relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Card */}
        <motion.div 
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-8"
            variants={formVariants}
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-[#8E05C2] to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center"
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Lock className="text-white w-8 h-8" />
            </motion.div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-300 text-sm">Sign in to your account</p>
          </motion.div>

          {/* Form */}
          <motion.form 
            onSubmit={handleLogin}
            variants={formVariants}
            className="space-y-6"
          >
            {/* Email Field */}
            <motion.div variants={formVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <motion.div 
                className="relative"
                variants={inputVariants}
                animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                transition={{ duration: 0.2 }}
              >
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#8E05C2] transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>
            </motion.div>

            {/* Password Field */}
            <motion.div variants={formVariants}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <motion.div 
                className="relative"
                variants={inputVariants}
                animate={focusedField === 'password' ? 'focused' : 'unfocused'}
                transition={{ duration: 0.2 }}
              >
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#8E05C2] transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
                <motion.button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Login Button */}
            <motion.button
              type="submit"
              className={`w-full py-3 bg-gradient-to-r from-[#8E05C2] to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg"
              }`}
              variants={buttonVariants}
              initial="idle"
              whileHover={!loading ? "hover" : "idle"}
              whileTap={!loading ? "tap" : "idle"}
              disabled={loading}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>

            {/* Forgot Password */}
            <motion.div 
              className="text-center"
              variants={formVariants}
            >
              <Link 
                to="/forgot-password" 
                className="text-sm text-gray-300 hover:text-[#8E05C2] transition-colors"
              >
                Forgot your password?
              </Link>
            </motion.div>
          </motion.form>

          {/* Divider */}
          <motion.div 
            className="flex items-center my-6"
            variants={formVariants}
          >
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="px-4 text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </motion.div>

          {/* Sign Up Link */}
          <motion.div 
            className="text-center"
            variants={formVariants}
          >
            <span className="text-gray-300 text-sm">
              Don't have an account?{" "}
            </span>
            <Link 
              to="/signup" 
              className="text-[#8E05C2] hover:text-purple-400 font-medium text-sm transition-colors"
            >
              Sign up
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p 
          className="text-center text-gray-400 text-xs mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Secure login powered by Nest
        </motion.p>
      </motion.div>

      {/* Error Popup */}
      <AnimatePresence>
        {errorPopup && (
          <ErrorBox onClose={() => setErrorPopup(false)} />
        )}
      </AnimatePresence>

      {/* Loader */}
      <AnimatePresence>
        {loader && <LoginLoader />}
      </AnimatePresence>
    </div>
  );
};

export default Login;
