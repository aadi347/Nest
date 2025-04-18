import React from "react";

const Modal = ({ heading, paragraph, isOpen, onClose }) => {
  return (
    <div
      className={`hs-overlay ${
        isOpen ? "flex" : "hidden"
      } size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-auto`}
      role="dialog"
      aria-labelledby="hs-vertically-centered-modal-label"
      tabIndex="-1"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
        <div className="w-full flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
          {/* Header */}
          <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200 dark:border-neutral-700">
            <h3 id="hs-vertically-centered-modal-label" className="font-bold text-gray-800 dark:text-white">
              {heading}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
              aria-label="Close"
            >
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 overflow-y-auto">
            <p className="text-gray-800 dark:text-neutral-400">
              {paragraph}
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-gray-200 dark:border-neutral-700">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700"
            >
              Close
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
