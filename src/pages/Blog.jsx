
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiUpload } from "react-icons/fi";
import { MdEdit, MdOutlineAddCircleOutline, MdDelete } from "react-icons/md";

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
        <div className="flex flex-col h-screen bg-slate-50">
            <div className='flex items-center justify-center px-4 py-2'>
       
            <div
            className="flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700"
            >
            <button
                onClick={() => setaddBlog(true)}
                className="px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
                <MdOutlineAddCircleOutline />
            </button>

            <button
                className="px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
                <MdDelete />
            </button>

            <button
                className="px-4 py-2 font-medium text-gray-600 transition-colors duration-200 sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
                <MdEdit />
            </button>
            </div>

            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto p-6">

        <img 
         src="https://as1.ftcdn.net/v2/jpg/06/73/67/94/1000_F_673679447_jYtPr2VgV51rhCaCYZoOp30Y1KqtPymd.jpg" 
        alt="Article Image" 
        className="w-full h-80 object-cover rounded-lg md:col-span-1"
        />
  
  
    <div className="flex flex-col gap-3 md:col-span-1">
    <h2 className="text-3xl font-bold text-gray-900">The Future of Technology</h2>
    <p className="text-sm text-gray-600">Published on: Jan 30, 2025</p>
    <span className="border text-blue-500 px-2 py-2 rounded-full w-fit text-xs font-semibold">
      Innovation
    </span>
    <p className="text-gray-800 text-sm leading-relaxed">
      Technology is evolving at an unprecedented pace, shaping the way we live, work, and interact with the world.
      From artificial intelligence and automation to sustainable energy and space exploration, the future holds 
      incredible possibilities. As innovation accelerates, staying informed is essential to understanding its impact 
      on society and the global economy.
    </p>

        <button
        className="overflow-hidden relative w-32 py-2 bg-black text-white border-none rounded-full text-sm font-bold cursor-pointer z-10 group"
        >
        Read More
        <span
        className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
        ></span>
        <span
        className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
        ></span>
        <span
        className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
        ></span>
        <span
        className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
        >Read More</span>
        
        </button>

    {addBlog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Add New Blog</h2>
            
     
            <form className="flex flex-col gap-4 ">

              <input
                type="text"
                name="title"
                placeholder="Blog Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

          
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

             
              <textarea
                name="content"
                placeholder="Write your blog content here..."
                value={formData.content}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>

             
              <label className="flex items-center justify-center gap-3 p-4 border-2 border-dashed border-gray-400 rounded-md cursor-pointer hover:border-blue-400">
                <FiUpload className="text-gray-500 text-2xl" />
                <span className="text-gray-600">{formData.image ? formData.image.name : "Upload Image"}</span>
                <input type="file" name="image" className="hidden" onChange={handleImageUpload} />
              </label>


              <div className='grid grid-cols-2 gap-4'>
              <button
              onClick={() => setaddBlog(false)}
              className="mt-4 w-full py-2 border text-black rounded-md hover:bg-red-200"
            >
              Close
            </button>
            <button
                onClick={handleSubmit}
                type="submit"
                className="mt-4 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                Submit
                
              </button>

            </div>
            </form>

      
            
          </div>
        </div>
      )}

  </div>
    </div>
        </div>
    </div>
  )
}

export default Blog