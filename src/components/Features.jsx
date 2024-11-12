
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrimeLocation from "../assets/icons/location.png"
import QualityInfrastructure from "../assets/icons/quality.png"
import AffordableHousing from "../assets/icons/affordable.png"

const features = [
  {
    title: "Affordable Housing",
    description: "Quality housing solutions at affordable prices, tailored to meet your needs.",
    iconColor: "",
    iconSvg: (
        <img src={AffordableHousing} className='w-8 h-8'></img>
    ),
  },
  {
    title: "Prime Locations",
    description: "Find properties in the best locations to ensure a convenient lifestyle.",
    iconColor: "",
    iconSvg: (
        <img src={PrimeLocation} className='w-8 h-8'></img>
    ),
  },
  {
    title: "Quality Infrastructure",
    description: "Built with top-notch materials to ensure durability and safety.",
    iconColor: "",
    iconSvg: (
        <img src={QualityInfrastructure} className='w-8 h-8'></img>
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
