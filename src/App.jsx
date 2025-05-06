import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Sitemap from './pages/Sitemap';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import FlatRegistrationForm from './pages/FlatRegistrationForm';
import AboutUs from './pages/AboutUs';
import Account from './pages/Account';
import Blog  from './pages/Blog';
import Demo from './pages/Demo';
import Dashboard from './Dashboard/Dashboard';
import Services from './pages/Services';
import DepartmentTable from './pages/DepartmentTable';
import MainPropertyPages from './components/propertypages/MainPropertyPages';
import SearchResultsPage from './pages/SearchResultsPage';

const App = () => {
  const location = useLocation();


  const hideNavbarPaths = ['/dashboard', '/login', '/signup'];
  const hideFooterPaths = ['/dashboard', '/login', '/signup'];

  const isAuthenticated = localStorage.getItem("token");
  
  return (
    <>
 
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
   

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/flatregistrationform" element={<FlatRegistrationForm />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/departmenttable" element={<DepartmentTable />} />
        <Route path="/mainpropertypages" element={<MainPropertyPages />} />
        <Route path="/searchresults" element={<SearchResultsPage />} />
        {/* <Route path="/addFlat" element={<addFlat />} /> */}
        {/* Add more routes as needed */}
      </Routes>
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
