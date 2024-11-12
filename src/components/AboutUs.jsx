import React from 'react';
import { Link } from 'react-router-dom';
import Illustration from "../assets/icons/illustartion.jpg"


const AboutUs = () => {
  return (
    <div className='bg-white max-w-7xl mx-auto px-6 lg:px-8 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105'
    style={{width:1212, height:611, borderRadius:50}}
    >
    <img src={{Illustration}} alt="Illustration"  className='h-52 w-52'/>
    </div>
  );
};

export default AboutUs;
