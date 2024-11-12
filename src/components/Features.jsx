
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import animationData from "../lotties/kiss-of-the-heart.json"

const features = [
  {
    title: "Affordable Housing",
    description: "Quality housing solutions at affordable prices, tailored to meet your needs.",
    iconColor: "bg-indigo-100",
    iconSvg: (
        <video className="h-8 w-8" autoPlay loop muted>
        <source src="../assets/icons/affordable.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    title: "Prime Locations",
    description: "Find properties in the best locations to ensure a convenient lifestyle.",
    iconColor: "bg-green-100",
    iconSvg: (
      <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M16 3.13a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Infrastructure",
    description: "Built with top-notch materials to ensure durability and safety.",
    iconColor: "bg-yellow-100",
    iconSvg: (
      <svg className="h-8 w-8 text-yellow-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-.5 0-1 .5-1 1.25v5.5c0 .75.5 1.25 1 1.25s1-.5 1-1.25v-5.5c0-.75-.5-1.25-1-1.25zM11 4a1 1 0 112 0v1a1 1 0 01-2 0V4z" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 sm:text-4xl">Our Key Features</h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          Discover the unique benefits that set us apart from the rest.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className={`flex items-center justify-center h-16 w-16 ${feature.iconColor} rounded-full mb-4`}>
                {feature.iconSvg}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-center text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
