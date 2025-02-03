import { IoMdLogOut } from "react-icons/io";
import { MdClose } from "react-icons/md";

const LogoutDialog = ({ open, setOpen }) => {
  if (!open) return null; // Hide modal when open is false

  return (
    <div 
      className="fixed inset-0 bg-black backdrop-blur-md bg-opacity-50  flex justify-center items-center"
      onClick={() => setOpen(false)} // Close on outside click
    >
      <div 
        className="bg-white shadow-xl rounded-2xl p-6  max-w-sm w-full relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer text-xl"
          onClick={() => setOpen(false)}
        >
          <MdClose />
        </button>

        {/* Modal Content */}
        <h2 className="text-lg font-semibold">Confirm Logout</h2>
        <p className="text-gray-600 text-sm mt-2">Are you sure you want to log out?</p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6 bg-slate-50 p-4 rounded-lg border ">
          <button 
            onClick={() => setOpen(false)} 
            className="border text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center gap-2"
          >
            <IoMdLogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutDialog;
