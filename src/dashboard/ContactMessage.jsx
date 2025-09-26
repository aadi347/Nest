import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCog, FaCalendarAlt } from 'react-icons/fa';
import { MessageCircleReply, Trash2 } from 'lucide-react';

const ContactMessage = () => {
 
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.get('http://localhost:3000/contactUs/getAllContacts');
        setMessageData(response.data.contacts); 
      } catch (error) {
        console.error('Error fetching cases:', error);
      }
    };
  
    fetchCases();
  }, []);
  return (
    <div className="overflow-x-auto p-4">
      <div className="flex justify-between items-center mb-4">
  <h2 className="text-xl font-semibold text-gray-600">Contact Us Details</h2>

  <div className="flex items-center space-x-4">

    <div className="flex items-center space-x-2 border border-gray-100 border-double rounded-full px-2 py-1">
      <span className="flex items-center space-x-1 text-xs text-yellow-700">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <span>Pending</span>
      </span>
      <span className="flex items-center space-x-1 text-xs text-green-700">
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <span>Closed</span>
      </span>
      <span className="flex items-center space-x-1 text-xs text-blue-700">
        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
        <span>In Progress</span>
      </span>
    </div>


        <div className="flex space-x-3 px-2">
          <FaCog className="text-xl cursor-pointer text-gray-400" />
          <FaCalendarAlt className="text-xl cursor-pointer text-gray-400" />
        </div>
      </div>
    </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 overflow-hidden">
      <table className="min-w-full table-auto border  rounded-2xl">
        <thead>
          <tr className="bg-gray-200 text-xs text-gray-600 rounded-3xl">
            <th className="px-4 py-2 text-left">Select</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">E-mail</th>
            <th className="px-4 py-2 text-left">Phone number</th>
            <th className="px-4 py-2 text-left">Message</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {messageData.map((messageDetail) => (
            <tr key={messageDetail._id} className="border-t text-xs border-gray-200">
              <td className="px-4 py-2">
              <input
  type="checkbox"
  className=" rounded-full border-gray-400 text-blue-600 focus:ring-0"
/>

              </td>
              <td className="px-4 py-2 text-gray-600 whitespace-nowrap">{messageDetail.name}</td>
              <td className="px-4 py-2 text-gray-600">{messageDetail.email}</td>
              <td className="px-4 py-2 text-gray-600">{messageDetail.phone}</td>
              <td className="px-4 py-2 text-gray-600 whitespace-nowrap">{messageDetail.message}</td>
              <td className="px-4 py-2 text-gray-600">
                <button className=" text-indigo-600 text-xs px-2 py-1 rounded"><MessageCircleReply /></button>
                <button className=" text-red-600 px-2 text-xs py-1 rounded ml-2"><Trash2 /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ContactMessage;
