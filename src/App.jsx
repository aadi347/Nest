import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Sitemap from './pages/Sitemap';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import FlatRegistrationForm from './pages/FlatRegistrationForm';
import Dashboard from './dashboard/Dashboard';
import PropertyManagment from './dashboard/PropertyManagment';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/flatregistrationform" element={<FlatRegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/PropertyManagment" element={<PropertyManagment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
