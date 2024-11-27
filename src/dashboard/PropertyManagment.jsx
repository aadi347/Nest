import React, { useState } from "react";
import axios from "axios";
import ShowProperty from "./ShowProperty.jsx";
import { Link } from 'react-router-dom';

const PropertyManagement = () => {
  const [loading, setLoading] = useState(false);
  const [flatType, setFlatType] = useState("");
  const [rent, setRent] = useState("");
  const [location, setLocation] = useState("");
  const [parking, setParking] = useState("");
  const [utilities, setUtilities] = useState("");
  const [houseName, setHouseName] = useState("");
  const [deposit, setDeposit] = useState("");
  const [carpetArea, setCarpetArea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      flatType,
      rent,
      location,
      parking,
      utilities,
      houseName,
      deposit,
      carpetArea,
    };

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3000/flatregistration", // Note: Fixed typo here
        data
      );
      setLoading(false);
      alert("Property registration completed successfully!");
      console.log(res.data);
    } catch (error) {
      setLoading(false);
      console.error(error.response?.data || error.message);
      alert("An error occurred while registering your property.");
    }
  };

  return (
    <div className="w-4/5 p-8 text-white rounded-lg mx-auto">
      <ShowProperty />
      
    </div>
  );
};

export default PropertyManagement;
