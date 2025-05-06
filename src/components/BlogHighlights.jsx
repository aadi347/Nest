import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogHighlights = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-white text-center mb-16">
            Our latest blog
          </h2>

          {loading ? (
            <p className="text-white text-center">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-white text-center">No blogs found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div key={blog._id} className="group w-full border border-gray-300 rounded-2xl overflow-hidden bg-white hover:bg-gray-50 transition-all">
                  <div className="flex items-center">
                    <img
                      src={blog.image || "https://via.placeholder.com/400x200"} // fallback image
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-indigo-600 font-medium mb-3 block">
                     Published On : <span className='text-xs'>{new Date(blog.createdAt).toLocaleDateString() || "Error Fetching Date"} </span> 
                    </span>
                    <h4 className="text-xl text-gray-900 font-medium leading-8 mb-4">
                      {blog.title}
                    </h4>
                    <p className="text-gray-500 leading-6 mb-6">
                      {blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content}
                    </p>
                    <a
                      href={`/blog/${blog._id}`}
                      className="cursor-pointer text-lg text-indigo-600 font-semibold"
                    >
                      Read more..
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogHighlights;
