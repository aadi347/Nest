import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <section className="flex justify-center items-center py-16 bg-gray-50 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row">

        {/* Privacy Policy Card */}
        <div className="flex-grow bg-white p-8 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
          <h1 className="text-3xl font-semibold text-custom-purple mb-6">Privacy Policy</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            We value your privacy and are committed to protecting your personal information. This privacy policy explains what information we collect from you, how we use it, and your rights regarding your data. 
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you use our website, we may collect personal data such as your name, email address, and other contact information. We use this data to improve our services and provide a better user experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may also collect usage data such as IP addresses, browser type, and pages visited to analyze our website’s performance. Your information will not be shared with third parties without your consent, except as required by law.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            By using our website, you agree to our privacy policy. We may update this policy periodically, so please review it from time to time. If you have any questions, feel free to contact us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
