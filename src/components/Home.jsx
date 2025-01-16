import Navbar from "./Naav";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";
import React from 'react';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-18 lg:pt-0 relative">
      <Helmet>
        <title>Shabzalio - Digital Marketing, Photography, Videography, Web Development, Printing Services</title>
        <meta name="description" content="Shabzalio offers digital marketing, photography, videography, web development, and printing services. Let's talk about your project today." />
      </Helmet>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Footer />

      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/1234567890" // Replace with your WhatsApp number (format: wa.me/{number without +})
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-10 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </main>
  );
}

export default Home;
