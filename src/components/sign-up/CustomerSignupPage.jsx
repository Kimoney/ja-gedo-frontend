"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function CustomerSignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    type: "",
    organizationName: "",
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",

    // Step 2: Address
    country: "",
    city: "",
    address: "",
    postalCode: "",

    // Step 3: Password
    password: "",
    confirmPassword: "",

    // Step 4: Verification
    agreeToTerms: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit form data
    console.log("Form submitted:", formData)
    // Here you would typically make an API call to register the user
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="py-4 px-8 flex justify-between items-center border-b">
        <Link to="/" className="flex items-center">
          <img src="/images/jagedo-logo.png" alt="JaGedo" className="h-8" />
        </Link>
        <Link to="/login" className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800 font-medium">
          Login
        </Link>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-6 py-12">
        <div className="w-full max-w-3xl">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Customer</h1>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12">
            <StepIndicator
              number={1}
              title="Step 1"
              description="Personal Information"
              active={currentStep === 1}
              completed={currentStep > 1}
            />
            <div className="w-16 h-px bg-gray-300"></div>
            <StepIndicator
              number={2}
              title="Step 2"
              description="Address"
              active={currentStep === 2}
              completed={currentStep > 2}
            />
            <div className="w-16 h-px bg-gray-300"></div>
            <StepIndicator
              number={3}
              title="Step 3"
              description="Password"
              active={currentStep === 3}
              completed={currentStep > 3}
            />
            <div className="w-16 h-px bg-gray-300"></div>
            <StepIndicator
              number={4}
              title="Step 4"
              description="Verification"
              active={currentStep === 4}
              completed={currentStep > 4}
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-2">Personal Information</h2>
                <p className="text-gray-600 mb-6">Provide your personal details.</p>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                        Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      >
                        <option value="" disabled>
                          Select Type
                        </option>
                        <option value="individual">Individual</option>
                        <option value="business">Business</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
                        Organization Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="organizationName"
                        name="organizationName"
                        type="text"
                        value={formData.organizationName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Address */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-2">Address</h2>
                <p className="text-gray-600 mb-6">Provide your address details.</p>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    >
                      <option value="" disabled>
                        Select Country
                      </option>
                      <option value="kenya">Kenya</option>
                      <option value="uganda">Uganda</option>
                      <option value="tanzania">Tanzania</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Password */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-2">Password</h2>
                <p className="text-gray-600 mb-6">Create a secure password.</p>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Verification */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-xl font-bold mb-2">Verification</h2>
                <p className="text-gray-600 mb-6">Review your information and complete registration.</p>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-medium mb-2">Personal Information</h3>
                    <p>Type: {formData.type}</p>
                    <p>Organization: {formData.organizationName}</p>
                    <p>Email: {formData.email}</p>
                    <p>
                      Name: {formData.firstName} {formData.lastName}
                    </p>
                    <p>Phone: {formData.phoneNumber}</p>

                    <h3 className="font-medium mt-4 mb-2">Address</h3>
                    <p>Country: {formData.country}</p>
                    <p>City: {formData.city}</p>
                    <p>Address: {formData.address}</p>
                    <p>Postal Code: {formData.postalCode}</p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300"
                    >
                      Back
                    </button>
                    <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800">
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

function StepIndicator({ number, title, description, active, completed }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          active
            ? "bg-black text-white"
            : completed
              ? "bg-green-500 text-white"
              : "bg-white text-gray-400 border border-gray-300"
        }`}
      >
        {number}
      </div>
      <div className="text-center mt-2">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  )
}
