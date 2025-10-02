import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit, FaTrash, FaPlus, FaSync, FaEye, FaSearch, FaFilter } from "react-icons/fa";
import { FiMoreVertical, FiCalendar, FiUser, FiTag } from "react-icons/fi";
import AddBlog from '../AddBlog.jsx';
import BlogStatic from './BlogStatic.jsx';
import { Link } from 'react-router-dom';

const CreateShow = () => {
  const [isaddBlogFormShow, setIsaddBlogFormShow] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  const handleDeleteBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/deleteBlogs/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (response.ok) {
        setBlogs(blogs.filter(blog => blog._id !== id));
        setShowDeleteConfirm(null);
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
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getAllBlogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(blogs.map(blog => blog.category))];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.3 }
    }
  };

  const LoadingSkeleton = () => (
    <div className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="flex items-center p-4 rounded-xl bg-gray-50 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
          <div className="ml-4 flex-1">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
            <div className="w-8 h-8 bg-gray-200 rounded"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const EmptyState = () => (
    <motion.div
      className="text-center py-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        <FaEdit className="w-8 h-8 text-gray-400" />
      </motion.div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">No blogs found</h3>
      <p className="text-gray-500 mb-4">
        {searchTerm || selectedCategory !== 'all'
          ? 'Try adjusting your search or filters'
          : 'Start creating your first blog post'}
      </p>
      {!searchTerm && selectedCategory === 'all' && (
        <motion.button
          onClick={handleAddBlogButton}
          className="inline-flex items-center gap-2 bg-[#2ec4b6] text-white px-4 py-2 rounded-lg hover:bg-[#24847a] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPlus /> Create Your First Blog
        </motion.button>
      )}
    </motion.div>
  );

  const DeleteConfirmModal = ({ blog, onConfirm, onCancel }) => (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onCancel}
    >
      <motion.div
        className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center">
          <motion.div
            className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <FaTrash className="w-6 h-6 text-red-500" />
          </motion.div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Blog Post</h3>
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete "{blog?.title}"? This action cannot be undone.
          </p>
          <div className="flex gap-3 justify-center">
            <motion.button
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
            <motion.button
              onClick={() => onConfirm(blog._id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Delete
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 xl:grid-cols-5 min-h-screen gap-6 p-6">
        {/* Left Side - Blog Statistics */}
        <motion.div
          className="xl:col-span-3 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
          variants={cardVariants}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <BlogStatic />
        </motion.div>

        {/* Right Side - Recent Blogs */}
        <motion.div
          className="xl:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
          variants={cardVariants}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Recent Blogs</h2>
              <p className="text-sm text-gray-500 mt-1">Manage your blog content</p>
            </div>
            <motion.button
              onClick={handleAddBlogButton}
              className="flex items-center gap-2 bg-[#2ec4b6] text-white px-4 py-2 rounded-xl hover:bg-[#24847a] transition-colors shadow-sm"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPlus className="w-4 h-4" /> Add Blog
            </motion.button>
          </div>

          {/* Search and Filters */}
          <div className="space-y-3 mb-6">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2ec4b6]/20 focus:border-[#2ec4b6] transition-all"
              />
            </motion.div>

            <motion.select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2ec4b6]/20 focus:border-[#2ec4b6] transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </motion.select>
          </div>

          {/* Blog List */}
          <div className="space-y-3 max-h-[600px] overflow-y-auto">
            {loading ? (
              <LoadingSkeleton />
            ) : filteredBlogs.length === 0 ? (
              <EmptyState />
            ) : (
              <AnimatePresence>
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog._id}
                    className="group relative bg-gray-50/50 hover:bg-white border border-transparent hover:border-gray-200 rounded-xl p-4 transition-all duration-300 hover:shadow-md"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ y: -2 }}
                    layout
                  >
                    <div className="flex items-start gap-4">
                      {/* Blog Image */}
                      <motion.div
                        className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {blog.image ? (
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#2ec4b6]/20 to-[#2ec4b6]/40 flex items-center justify-center">
                            <FaEdit className="w-6 h-6 text-[#2ec4b6]" />
                          </div>
                        )}
                      </motion.div>

                      {/* Blog Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 truncate pr-2">
                          {blog.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                          <FiTag className="w-3 h-3" />
                          <span className="truncate">{blog.category}</span>
                        </div>
                        {blog.createdAt && (
                          <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                            <FiCalendar className="w-3 h-3" />
                            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <motion.button
                          className="p-2 text-gray-400 hover:text-[#2ec4b6] hover:bg-[#2ec4b6]/10 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Refresh"
                        >
                          <FaSync className="w-3 h-3" />
                        </motion.button>

                        <motion.button
                          onClick={() => setShowDeleteConfirm(blog)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Delete"
                        >
                          <FaTrash className="w-3 h-3" />
                        </motion.button>

                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Link
                            to="/blog"
                            className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors inline-block"
                            title="View"
                          >
                            <FaEye className="w-3 h-3" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>

          {/* Footer Info */}
          {!loading && filteredBlogs.length > 0 && (
            <motion.div
              className="mt-4 pt-4 border-t border-gray-100 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xs text-gray-500">
                Showing {filteredBlogs.length} of {blogs.length} blogs
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Add Blog Form */}
      <AnimatePresence>
        {isaddBlogFormShow && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsaddBlogFormShow(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AddBlog onClose={() => setIsaddBlogFormShow(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <DeleteConfirmModal
            blog={showDeleteConfirm}
            onConfirm={handleDeleteBlog}
            onCancel={() => setShowDeleteConfirm(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CreateShow;
