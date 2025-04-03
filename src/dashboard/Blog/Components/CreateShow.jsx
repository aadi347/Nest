import React from 'react'
import { FaEdit, FaTrash, FaPlus, FaSync, FaEye  } from "react-icons/fa";
import AddBlog from '../AddBlog.jsx';

const CreateShow = () => {

  const [isaddBlogFormShow, setIsaddBlogFormShow] = React.useState(false);
  const [isEditBlogFormShow, setIsEditBlogFormShow] = React.useState(false);
  const [isViewBlogFormShow, setIsViewBlogFormShow] = React.useState(false);
  const [isUpdateBlogFormShow, setIsUpdateBlogFormShow] = React.useState(false);


  const handleAddBlogButton = () => {
    setIsaddBlogFormShow(true);
  };  

    const blogs = [
        {
          id: 1,
          title: "Understanding React Hooks",
          image: "https://t4.ftcdn.net/jpg/02/85/83/41/360_F_285834130_nM5F6xl8lh8Mhb00ksNXBS6iBH9bMExz.jpg",
        },
        {
          id: 2,
          title: "Mastering Tailwind CSS",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsMUX7UZOZVqO1DBu_ECWtyvX9gjMsrMk9Cn9A2u-j4NbH0TigK98RAptDmUh1orFYkA&usqp=CAU",
        },
        {
          id: 3,
          title: "State Management in React",
          image: "https://media.istockphoto.com/id/899471458/photo/purchase-agreement-for-new-house.jpg?s=612x612&w=0&k=20&c=S97ewd-sqqOYk3kX5Wg-1FWJBndPW9AgI0VBHmDHMeA=",
        },
        {
          id: 4,
          title: "State Management in React",
          image: "https://media.istockphoto.com/id/899471458/photo/purchase-agreement-for-new-house.jpg?s=612x612&w=0&k=20&c=S97ewd-sqqOYk3kX5Wg-1FWJBndPW9AgI0VBHmDHMeA=",
        },
        {
          id: 5,
          title: "State Management in React",
          image: "https://media.istockphoto.com/id/899471458/photo/purchase-agreement-for-new-house.jpg?s=612x612&w=0&k=20&c=S97ewd-sqqOYk3kX5Wg-1FWJBndPW9AgI0VBHmDHMeA=",
        },
      ];
  return (
    <div>
        <div className="grid grid-cols-5 min-h-screen gap-6 p-6 ">
   
      <div className="col-span-3 bg-white border border-gray-200 rounded-lg"></div>


      <div className="col-span-2  p-6 rounded-lg flex flex-col bg-white border border-gray-200">
 
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">Recent Blogs</h2>
          <button onClick={handleAddBlogButton} className="flex items-center gap-2 bg-[#2ec4b6] text-white px-4 py-2 rounded-lg hover:bg-[#24847a] transition">
            <FaPlus /> Add Blog
          </button>
        </div>


        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex items-center  p-3 rounded-lg bg-slate-50 ">
        
              <img src={blog.image} alt={blog.title} className="w-16 h-16 rounded-md object-cover" />

            
              <div className="ml-3 flex-1">
                <h3 className="text-sm text-gray-600">{blog.title}</h3>

              
                <div className="flex mt-2">
                <button className="flex items-center gap-1 text-gray-300 px-3 text-xs py-1 rounded hover:bg-gray-100">
                  Edit <FaEdit className="size-3" />
                  </button>
                  <button className="flex items-center gap-1 text-gray-300 text-xs  px-3 py-1 rounded hover:bg-gray-100">
                    Update <FaSync className='size-3' />
                  </button>
                  <button className="flex items-center gap-1  text-gray-300 text-xs px-3 py-1 rounded hover:bg-gray-100">
                   Delete <FaTrash className='size-3' />
                  </button>
                  <button className=" flex items-center gap-1 text-gray-300 text-xs px-3 py-1 rounded hover:bg-gray-100">
                    View<FaEye className='size-3'  />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {isaddBlogFormShow && <AddBlog />}
    </div>
  )
}

export default CreateShow