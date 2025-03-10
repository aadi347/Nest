import { useState } from "react";
import { motion } from "framer-motion";
import { MdTitle, MdCategory, MdImage, MdTag, MdArticle } from "react-icons/md";
import AddButton from './Components/AddButton';
import axios from 'axios';

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("Technology");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  const handleAddBlogButton = () => {
    setIsFormVisible(true);
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("tags", JSON.stringify(tags));
    if (image) formData.append("image", image);
  
    try {
      const response = await axios.post("http://localhost:3000/api/createBlog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Raw Response:", response); // Log response to check its format
  
      // Axios automatically parses JSON, so you don't need `response.json()`
      console.log("Blog Submitted:", response.data);
  
      if (response.status === 201) {
        alert("Blog created successfully!");
        setTitle("");
        setContent("");
        setCategory("Technology");
        setTags([]);
        setImage(null);
        document.getElementById("fileInput").value = "";
      }
    } catch (error) {
      console.error("Error submitting blog:", error.response?.data || error.message);
    }
  };
  
  

  return (
    <div>
      <div>
        <AddButton onClick={handleAddBlogButton} />
      </div>
      {isFormVisible && (
        <div className="py-7">
          <motion.div
            className="max-w-xl ml-0 py-5 p-6 bg-white rounded-xl"
            initial={{ opacity: 0, y: -20, x: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={[
              { duration: 0.4, ease: "easeInOut" },
              { type: "spring", stiffness: 100, damping: 30 },
            ]}
          >
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
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full pl-10 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
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
      )}
    </div>
  );
};

export default AddBlog;
