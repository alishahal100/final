import React from "react";
import Footer from "./Footer";
import Navbar from "./Naav";

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-black text-white">
        {/* Hero Section */}
        <div
          className="relative h-80 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white">
              Contact Us
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 py-10 sm:px-10 sm:py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Meet Us Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#e4d48c] ml-4 mb-6">
                Meet Us
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-xl text-[#25D366] mr-4">
                    <i className="fas fa-phone"></i>
                  </span>
                  <p className="text-gray-300">+917510622616</p>
                </li>
                <li className="flex items-center">
                  <span className="text-xl text-blue-500 mr-4">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <p className="text-gray-300">info@shabzalio.com</p>
                </li>
                <li className="flex items-center">
                  <span className="text-xl text-red-500 mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <div className=" flex flex-col">

                  <p className="text-gray-300">
                    Mankave Pantheerankave Road,
                   
                  </p>
                  <p className="text-gray-300">
                    
                    Kozhikode, Pantheeramkavu, Kerala 
                  </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#e4d48c] mb-6">
                Contact
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-black text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4d48c]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-black text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#e4d48c]"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-10">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4286153780286!2d75.8492130748894!3d11.229847388947842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65bf5a2edf617%3A0xccfa18e25576c413!2sshabzalio%20art%20%26%20media%20hub!5e0!3m2!1sen!2sin!4v1736785458480!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border border-gray-600"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
