
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiUpload } from "react-icons/fi";
import { MdEdit, MdOutlineAddCircleOutline, MdDelete } from "react-icons/md";
import BlogHighlights from '../components/BlogHighlights';

const Blog = () => {

  
    
    const [addBlog, setaddBlog] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        content: "",
        image: null,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", formData.title);
        data.append("category", formData.category);
        data.append("content", formData.content);
     
        try {
          const response = await axios.post("http:/localhost:3000/blog", data);
          console.log(response.data);
          alert("Blog added successfully!");
          setFormData({ title: "", category: "", content: "", image: null });
        } catch (error) {
          console.error(error.response?.data || error.message);
          alert("An error occurred while adding the blog. Please check the console.");
        }
      }

      const handleImageUpload = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
      }; 

  return (
    <div>
        <div className="flex flex-col h-screen bg-black">
            <div className='flex items-center justify-center px-4 py-2'>
       
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto p-6 mt-12">

        <img 
         src="https://as1.ftcdn.net/v2/jpg/06/73/67/94/1000_F_673679447_jYtPr2VgV51rhCaCYZoOp30Y1KqtPymd.jpg" 
        alt="Article Image" 
        className="w-full h-80 object-cover transform duration-300 ease-in-out hover:scale-95 rounded-lg md:col-span-1"
        />
  
  
    <div className="flex flex-col gap-3 md:col-span-1">
    <h2 className="text-3xl font-bold text-gray-300">The Future of Technology</h2>
    <p className="text-sm text-gray-400">Published on: Jan 30, 2025</p>
    <span className="border border-[#8E05C2] text-[#8E05C2] px-2 py-2 rounded-full w-fit text-xs font-semibold">
      Innovation
    </span>
    <p className="text-gray-400 text-sm leading-relaxed">
      Technology is evolving at an unprecedented pace, shaping the way we live, work, and interact with the world.
      From artificial intelligence and automation to sustainable energy and space exploration, the future holds 
      incredible possibilities. As innovation accelerates, staying informed is essential to understanding its impact 
      on society and the global economy.
    </p>

        <button
        className="overflow-hidden relative w-32 py-2 bg-[#8E05C2] text-white border-none rounded-full text-sm font-bold cursor-pointer z-10 group"
        >
        Read More
        <span
        className="absolute w-36 h-32 -top-8 -left-2 bg-[#e6bbf7] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
        ></span>
        <span
        className="absolute w-36 h-32 -top-8 -left-2 bg-[#d982fc] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
        ></span>
        <span
        className="absolute w-36 h-32 -top-8 -left-2 bg-[#c24ff0] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
        ></span>
        <span
        className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
        >Read More</span>
        
        </button>
        </div>
  
    </div>
   
        </div>
        <BlogHighlights />
        
    </div>
  )
}

export default Blog