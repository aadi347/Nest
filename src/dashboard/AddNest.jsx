import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';
import { FiUploadCloud, FiHome, FiMapPin, FiDollarSign, FiSquare, FiZap, FiCheck, FiArrowRight, FiArrowLeft, FiEye } from "react-icons/fi";

const AddNest = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [imagePreview, setImagePreview] = useState(null);
    const [image, setImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const [formData, setFormData] = useState({
      flatType: "",
      rent: "",
      location: "",
      parking: "",
      utilities: "",
      houseName: "",
      deposit: "",
      carpetArea: "",
      image: "",
    });

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setImage(file);
        }
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
    
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      if (image) data.append("image", image);
    
      try {
        const response = await axios.post(
          "http://localhost:3000/addNest/createProperty",
          data,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
    
        setSubmitSuccess(true);
        
        // Reset form after success animation
        setTimeout(() => {
          setFormData({
            flatType: "",
            rent: "",
            location: "",
            parking: "",
            utilities: "",
            houseName: "",
            deposit: "",
            carpetArea: "",
            image: "",
          });
          setImage(null);
          setImagePreview(null);
          setSubmitSuccess(false);
          setCurrentStep(1);
        }, 2000);
        
      } catch (error) {
        console.error("Error listing property:", error.response?.data || error.message);
      } finally {
        setIsSubmitting(false);
      }
    };

    // Step 1: Basic Property Information
    const step1Fields = [
      {
        name: 'houseName',
        label: 'Property Name',
        type: 'text',
        icon: FiHome,
        placeholder: 'Enter property name',
        required: true
      },
      {
        name: 'flatType',
        label: 'Flat Type',
        type: 'select',
        icon: FiHome,
        options: ['1BHK', '2BHK', '3BHK'],
        placeholder: 'Select flat type',
        required: true
      },
      {
        name: 'location',
        label: 'Location',
        type: 'select',
        icon: FiMapPin,
        options: ['Patna', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai'],
        placeholder: 'Select location',
        required: true
      },
      {
        name: 'carpetArea',
        label: 'Carpet Area (sq.ft.)',
        type: 'number',
        icon: FiSquare,
        placeholder: 'Enter carpet area',
        required: true
      }
    ];

    // Step 2: Financial & Amenities Details
    const step2Fields = [
      {
        name: 'rent',
        label: 'Monthly Rent (₹)',
        type: 'number',
        icon: FiDollarSign,
        placeholder: 'Enter monthly rent',
        required: true
      },
      {
        name: 'deposit',
        label: 'Security Deposit (₹)',
        type: 'number',
        icon: FiDollarSign,
        placeholder: 'Enter security deposit',
        required: true
      },
      {
        name: 'parking',
        label: 'Parking',
        type: 'select',
        icon: FiDollarSign,
        options: ['2-wheeler Shaded', '4-wheeler Shaded', '2-wheeler Non-shaded', '4-wheeler Non-shaded', 'No Parking'],
        placeholder: 'Select parking type',
        required: true
      },
      {
        name: 'utilities',
        label: 'Utilities',
        type: 'select',
        icon: FiZap,
        options: ['24/7 Available', 'Limited Hours', 'Not Included'],
        placeholder: 'Select utilities',
        required: true
      }
    ];

    const steps = [
      { number: 1, title: 'Property Details', description: 'Basic information about your property' },
      { number: 2, title: 'Pricing & Amenities', description: 'Financial details and amenities' },
      { number: 3, title: 'Images & Review', description: 'Upload images and finalize listing' }
    ];

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

    const stepVariants = {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.4 }
      },
      exit: { 
        opacity: 0, 
        x: -50,
        transition: { duration: 0.3 }
      }
    };

    const fieldVariants = {
      focused: {
        scale: 1.02,
        boxShadow: "0 0 0 3px rgba(46, 196, 182, 0.1)",
        borderColor: "#2ec4b6"
      },
      unfocused: {
        scale: 1,
        boxShadow: "0 0 0 0px rgba(46, 196, 182, 0)",
        borderColor: "#e5e7eb"
      }
    };

    const canProceedToStep2 = step1Fields.every(field => 
      field.required ? formData[field.name] : true
    );
    
    const canProceedToStep3 = step2Fields.every(field => 
      field.required ? formData[field.name] : true
    );

    const renderFormFields = (fields) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field, index) => {
          const Icon = field.icon;
          const isActive = focusedField === field.name;
          
          return (
            <motion.div
              key={field.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Icon className="inline w-4 h-4 mr-2 text-[#2ec4b6]" />
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              
              <motion.div
                className="relative"
                variants={fieldVariants}
                animate={isActive ? 'focused' : 'unfocused'}
                transition={{ duration: 0.2 }}
              >
                {field.type === 'select' ? (
                  <select
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#2ec4b6] transition-all duration-200 appearance-none"
                    required={field.required}
                  >
                    <option value="">{field.placeholder}</option>
                    {field.options.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={formData[field.name]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#2ec4b6] transition-all duration-200"
                    required={field.required}
                  />
                )}
                
                <AnimatePresence>
                  {formData[field.name] && (
                    <motion.div
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiCheck className="w-5 h-5 text-green-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    );

    return (
      <motion.div 
        className="max-w-4xl mx-auto p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">List Your Property</h1>
          <p className="text-gray-600">Complete the process in 3 simple steps</p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-semibold transition-all duration-300 ${
                      currentStep >= step.number
                        ? 'bg-[#2ec4b6] border-[#2ec4b6] text-white'
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {currentStep > step.number ? (
                      <FiCheck className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </motion.div>
                  <div className="mt-2 text-center">
                    <p className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-[#2ec4b6]' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 hidden md:block">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                    currentStep > step.number ? 'bg-[#2ec4b6]' : 'bg-gray-300'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Property Information */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Property Details</h2>
                  <p className="text-gray-600">Tell us about your property</p>
                </div>
                {renderFormFields(step1Fields)}
              </motion.div>
            )}

            {/* Step 2: Financial & Amenities Details */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Pricing & Amenities</h2>
                  <p className="text-gray-600">Set your pricing and available amenities</p>
                </div>
                {renderFormFields(step2Fields)}
              </motion.div>
            )}

            {/* Step 3: Images & Review */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Images & Review</h2>
                  <p className="text-gray-600">Upload property images and review your listing</p>
                </div>

                {/* Property Summary */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                    <FiEye className="w-5 h-5 mr-2 text-[#2ec4b6]" />
                    Property Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div><span className="font-medium">Property Name:</span> {formData.houseName}</div>
                    <div><span className="font-medium">Type:</span> {formData.flatType}</div>
                    <div><span className="font-medium">Location:</span> {formData.location}</div>
                    <div><span className="font-medium">Area:</span> {formData.carpetArea} sq.ft.</div>
                    <div><span className="font-medium">Monthly Rent:</span> ₹{formData.rent}</div>
                    <div><span className="font-medium">Security Deposit:</span> ₹{formData.deposit}</div>
                    <div><span className="font-medium">Parking:</span> {formData.parking}</div>
                    <div><span className="font-medium">Utilities:</span> {formData.utilities}</div>
                  </div>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    <FiUploadCloud className="inline w-4 h-4 mr-2 text-[#2ec4b6]" />
                    Property Images *
                  </label>
                  
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      htmlFor="image-upload"
                      className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${
                        imagePreview 
                          ? 'border-[#2ec4b6] bg-[#2ec4b6]/5' 
                          : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-[#2ec4b6]'
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {imagePreview ? (
                          <motion.div
                            key="preview"
                            className="relative w-full h-full rounded-xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img 
                              src={imagePreview} 
                              alt="Preview" 
                              className="w-full h-full object-cover" 
                            />
                            <motion.div 
                              className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"
                              whileHover={{ opacity: 1 }}
                            >
                              <span className="text-white font-medium">Click to change</span>
                            </motion.div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="upload"
                            className="flex flex-col items-center justify-center pt-5 pb-6 text-center"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div
                              animate={{ y: [-5, 5, -5] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <FiUploadCloud className="w-12 h-12 text-[#2ec4b6] mb-4" />
                            </motion.div>
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-400">PNG, JPG, JPEG (MAX. 5MB)</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <input 
                        id="image-upload"
                        type="file" 
                        className="hidden" 
                        onChange={handleImageChange}
                        accept="image/*"
                      />
                    </label>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-8 mt-8 border-t border-gray-100">
            {/* Back Button */}
            <motion.button
              type="button"
              onClick={() => setCurrentStep(currentStep - 1)}
              className={`flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-600 rounded-xl font-medium transition-all duration-200 ${
                currentStep === 1 ? 'invisible' : 'hover:bg-gray-50'
              }`}
              whileHover={currentStep > 1 ? { x: -2 } : {}}
              whileTap={currentStep > 1 ? { scale: 0.98 } : {}}
            >
              <FiArrowLeft className="w-4 h-4" />
              Back
            </motion.button>

            {/* Next/Submit Button */}
            {currentStep < 3 ? (
              <motion.button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={
                  (currentStep === 1 && !canProceedToStep2) ||
                  (currentStep === 2 && !canProceedToStep3)
                }
                className={`flex items-center gap-2 px-6 py-3 bg-[#2ec4b6] text-white rounded-xl font-medium transition-all duration-200 ${
                  ((currentStep === 1 && !canProceedToStep2) ||
                   (currentStep === 2 && !canProceedToStep3))
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-[#2ec4b6]/90 hover:shadow-lg'
                }`}
                whileHover={
                  ((currentStep === 1 && canProceedToStep2) ||
                   (currentStep === 2 && canProceedToStep3))
                    ? { x: 2, scale: 1.02 }
                    : {}
                }
                whileTap={
                  ((currentStep === 1 && canProceedToStep2) ||
                   (currentStep === 2 && canProceedToStep3))
                    ? { scale: 0.98 }
                    : {}
                }
              >
                Next
                <FiArrowRight className="w-4 h-4" />
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting || submitSuccess || !image}
                className={`flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#2ec4b6] to-teal-500 text-white rounded-xl font-semibold shadow-lg transition-all duration-200 ${
                  isSubmitting || submitSuccess || !image
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-xl hover:scale-105'
                }`}
                whileHover={!isSubmitting && !submitSuccess && image ? { y: -2 } : {}}
                whileTap={!isSubmitting && !submitSuccess && image ? { scale: 0.98 } : {}}
              >
                <AnimatePresence mode="wait">
                  {submitSuccess ? (
                    <motion.div
                      key="success"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <FiCheck className="w-5 h-5" />
                      Listed Successfully!
                    </motion.div>
                  ) : isSubmitting ? (
                    <motion.div
                      key="submitting"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Submitting...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <FiHome className="w-5 h-5" />
                      Submit Listing
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    );
};

export default AddNest;
