import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("../../public/data/Contact.json") // Adjust path if needed
      .then((response) => response.json())
      .then((data) => setContactData(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div
          className="bg-white p-8 lg:w-1/2"
          data-aos="fade-right"
        >
          <div className="flex items-center mb-4">
            <h2 className="text-2xl text-gray-600">Contact</h2>
            <div className="ml-4 h-0.5 mt-3 w-[80px] bg-orange-600"></div>
          </div>
          <h2 className="text-4xl font-semibold mb-4">Contact Us</h2>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-orange-300 text-white text-xl hover:bg-orange-600 mr-4 rounded-full p-4 flex items-center justify-center">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-600">{contactData.address}</p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-orange-300 text-white text-xl hover:bg-orange-600 mr-4 rounded-full p-4 flex items-center justify-center">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h3 className="text-lg font-medium">Call Us</h3>
                <p className="text-gray-600">{contactData.phone}</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-orange-300 text-white text-xl hover:bg-orange-600 mr-4 rounded-full p-4 flex items-center justify-center">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h3 className="text-lg font-medium">Email Us</h3>
                <p className="text-gray-600">{contactData.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="bg-white p-8 lg:w-1/2"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-semibold mb-6"></h2>
          <form className="space-y-6">
            {/* Name and Email in a Single Row */}
<div className="flex flex-col md:flex-row gap-4">
  {/* Name */}
  <div className="flex-1" data-aos="fade-up" data-aos-delay="100">
    <label className="block text-gray-700 font-medium mb-2"></label>
    <input
      type="text"
      placeholder="Enter your name"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-orange-600 focus:border-transparent"
    />
  </div>
  {/* Email */}
  <div className="flex-1" data-aos="fade-up" data-aos-delay="200">
    <label className="block text-gray-700 font-medium mb-2"></label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-orange-600 focus:border-transparent"
    />
  </div>
</div>

            {/* Subject */}
            <div data-aos="fade-up" data-aos-delay="300">
              <label className="block text-gray-700 font-medium mb-2"></label>
              <input
                type="text"
                placeholder="Enter the subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2  focus:ring-orange-600 focus:border-transparent"
              />
            </div>
            {/* Message */}
            <div data-aos="fade-up" data-aos-delay="400">
              <label className="block text-gray-700 font-medium mb-2"></label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-orange-600 focus:border-transparent"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="flex justify-center" data-aos="fade-up" data-aos-delay="500">
              <button
                type="submit"
                className="bg-orange-600 text-white font-medium px-8 py-2 rounded-full hover:bg-orange-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
