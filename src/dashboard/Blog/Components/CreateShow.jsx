import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSync, FaEye } from "react-icons/fa";
import AddBlog from '../AddBlog.jsx';
import BlogStatic from './BlogStatic.jsx';

const CreateShow = () => {
  const [isaddBlogFormShow, setIsaddBlogFormShow] = useState(false);
  const [isEditBlogFormShow, setIsEditBlogFormShow] = useState(false);
  const [isViewBlogFormShow, setIsViewBlogFormShow] = useState(false);
  const [isUpdateBlogFormShow, setIsUpdateBlogFormShow] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      return; // If user cancels
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/deleteBlogs/${id}`, {
        method: 'DELETE',
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Blog deleted successfully!");
        // Optionally: refresh the blogs after deleting
         // assuming you have a fetchBlogs() function
      } else {
        alert(result.message || "Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  

  const handleAddBlogButton = () => {
    setIsaddBlogFormShow(true);
  };

  useEffect(() => {
    // Fetch blogs from API
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getAllBlogs');
        const data = await response.json();
        setBlogs(data);  // Assuming API sends an array of blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-5 min-h-screen gap-6 p-6">
        <div className="col-span-3 bg-white border border-gray-200 rounded-lg">
          <BlogStatic />
        </div>

        <div className="col-span-2 p-6 rounded-lg flex flex-col bg-white border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-700">Recent Blogs</h2>
            <button
              onClick={handleAddBlogButton}
              className="flex items-center gap-2 bg-[#2ec4b6] text-white px-4 py-2 rounded-lg hover:bg-[#24847a] transition"
            >
              <FaPlus /> Add Blog
            </button>
          </div>

          <div className="space-y-4">
            {loading ? (
              <p>Loading blogs...</p>
            ) : blogs.length === 0 ? (
              <p>No blogs found.</p>
            ) : (
              blogs.map((blog) => (
                <div key={blog.id} className="flex items-center p-3 rounded-lg bg-slate-50">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-16 h-16 rounded-md object-cover"
                  />

                  <div className="ml-3 flex-1">
                    <h3 className="text-sm text-gray-600">{blog.title}</h3>
                    <p className="text-xs text-gray-500">{blog.category}</p>

                    <div className="flex mt-2 gap-3 flex-wrap">
                      <button className="flex items-center gap-1 border text-gray-300 text-xs px-3 py-1 rounded hover:text-white hover:bg-[#2ec4b6]">
                       <FaSync className="size-3 text-[#2ec4b6] hover:text-white" />
                      </button>
                      <button onClick={() => handleDeleteBlog(blog._id)} className="flex items-center gap-1 border text-gray-300 text-xs px-3 py-1 rounded hover:bg-[#2ec4b6]">
                        <FaTrash className="size-3 text-[#2ec4b6] hover:text-white" />
                      </button>
                      <button className="flex items-center gap-1 border text-gray-300 text-xs px-3 py-1 rounded hover:bg-[#2ec4b6]">
                        <FaEye className="size-3 text-[#2ec4b6] hover:text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {isaddBlogFormShow && <AddBlog />}
    </div>
  );
};

export default CreateShow;
