import { useState } from "react";
import { motion } from "framer-motion";
import { MdTitle, MdCategory, MdImage, MdTag, MdArticle } from "react-icons/md";
import axios from 'axios';

const AddBlog = (onClose) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("Technology");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);


  const handleTagKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim() !== "") {
      e.preventDefault();
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // const publishBlogButton = () => {
  //   setIsFormVisible(false);
  // };

  const handleCloseButton = () => {
    setIsOpen(false);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("seoTags", tags.join(",")); // Convert array to string
    formData.append("image", image); // Append the image file
  
    try {
      const response = await axios.post("http://localhost:3000/api/createBlog", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file upload
        },
      });
  
      console.log("Blog Submitted:", response.data);
  
      if (response.status === 201) {
        alert("Blog created successfully!");
        setTitle("");
        setContent("");
        setCategory("Technology");
        setTags([]);
        setImage(null);
      }
    } catch (error) {
      console.error("Error submitting blog:", error.response?.data || error.message);
    }
  };
  
  // Image upload handler
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL
    }
  };
  
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
    <motion.div
      className="max-w-xl w-full bg-white rounded-xl border border-gray-200 p-6 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <button onClick={handleCloseButton} className="absolute top-3 right-3 text-red-500 hover:text-gray-700">✖</button>
      <h2 className="text-xl font-bold text-gray-800 mb-4 py-2">Create a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <MdTitle className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="relative">
            <MdCategory className="absolute left-3 top-3 text-gray-500" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option>Select Category</option>
              <option>Technology</option>
              <option>Business</option>
              <option>Lifestyle</option>
              <option>Health</option>
            </select>
          </div>
        </div>
        <div className="relative">
          <MdArticle className="absolute left-3 top-3 text-gray-500" />
          <textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="4"
            className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="relative">
  <MdImage className="absolute left-3 top-3 text-gray-500" />
  <div className="flex items-center justify-center w-full">
    <label 
      htmlFor="dropzone-file"
      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
    >
      {imagePreview ? (
        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
      ) : (
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
      )}
      <input onChange={handleImageChange} id="dropzone-file" type="file" className="hidden" />
    </label>
  </div>
</div>

        <div className="relative">
          <MdTag className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Add SEO Tags (Press Enter or Comma)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-300 text-gray-800 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Publish Blog
        </button>
      </form>
    </motion.div>
  </div>
  );
};

export default AddBlog;
