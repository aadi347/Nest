import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Sitemap from './pages/Sitemap';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import FlatRegistrationForm from './pages/FlatRegistrationForm';
import Dashboard from './dashboard/Dashboard';
import AboutUs from './pages/AboutUs';
import Account from './pages/Account';
// import addFlat from './dashboard/addFlat';

const App = () => {
  const location = useLocation();

  // Specify the paths where the Navbar should not be displayed
  const hideNavbarPaths = ['/dashboard'];
  const hideFooterPaths = ['/dashboard'];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/flatregistrationform" element={<FlatRegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      {/* Conditionally render Footer */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
