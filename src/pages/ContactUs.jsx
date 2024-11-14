import React from 'react';
import { Link } from 'react-router-dom';
import ContactImage from "../assets/icons/undraw_contact_us_re_4qqt.svg"


const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#6B46C1]">
      <div className="bg-white rounded-lg shadow-lg p-8 md:flex w-3/4 max-w-4xl">
        {/* Left side - Placeholder for GIF */}
        <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={ContactImage} // Replace with the actual path to your GIF file
            alt="Animated Graphic"
            className="h-80 w-80"
          />
        </div>

        {/* Right side - Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-[#6B46C1] mb-2 text-center">CONTACT US</h2>
          <p className="text-center text-gray-600 mb-6">
            Or reach out manually to <a href="mailto:your-email@example.com" className="text-blue-500">your-email@example.com</a>
          </p>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                placeholder="Enter your email"
              />
              <small className="text-gray-500">We'll never share your email with anyone else.</small>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Your name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Your message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#6B46C1]"
                rows="4"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6B46C1] text-white py-2 rounded-lg font-medium hover:bg-[#5A3BB6] transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
