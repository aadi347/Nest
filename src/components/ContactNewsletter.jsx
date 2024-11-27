import React from 'react';
import { Link } from 'react-router-dom';

const ContactNewsletter = () => {
  return (
    <section className="bg-custom-purple py-16 px-4 sm:px-6 lg:px-8 text-white"> 
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center sm:text-4xl mb-6">Stay Connected</h2>
        <p className="text-center text-lg mb-12 text-gray-300">
          Want to stay updated? Subscribe to our newsletter or get in touch for inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 px-4 py-2 w-full bg-gray-700 text-white rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 px-4 py-2 w-full bg-gray-700 text-white rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 px-4 py-2 w-full bg-gray-700 text-white rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-custom-green text-white rounded-lg font-semibold hover:bg-custom-green-hover transition duration-200 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates, offers, and news delivered straight to your inbox.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="newsletter-email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="newsletter-email"
                  className="mt-1 px-4 py-2 w-full bg-gray-700 text-white rounded-md focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-custom-green text-white rounded-lg font-semibold hover:bg-custom-green-hover transition duration-200 ease-in-out"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactNewsletter;
