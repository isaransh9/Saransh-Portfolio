import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    let errorMessages = { email: "", phoneNumber: "" };

    // Validate Email (check if '@' is present)
    if (!formData.email.includes("@")) {
      errorMessages.email = "Please enter a valid email address.";
      isValid = false;
    }

    // Validate Phone Number (should be exactly 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.phoneNumber)) {
      errorMessages.phoneNumber = "Phone number should be exactly 10 digits";
      isValid = false;
    }

    setErrors(errorMessages);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // First, validate the form
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    // If the form is valid, show an alert
    alert("Your message has been sent!");

    // Clear the form after submission
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-gray-900 text-white min-h-[40vh] py-6">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-6">Contact Me</h1>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Section with Input Fields */}
              <div className="flex flex-col gap-4 w-full lg:w-1/2">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.phoneNumber}
                  </span>
                )}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Right Section with Message */}
              <div className="w-full lg:w-1/2">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  cols="30"
                  rows="9"
                  placeholder="Your message"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <input
                type="submit"
                value="Send Message"
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-400 transition duration-300"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
