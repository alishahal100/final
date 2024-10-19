import Navbar from "./Naav"; 

import React from "react";
import "../components/css/font.css"
import Footer from "./Footer";
const Portfolio = () => {
  return (
    <>
      <head>
        <title>Portfolio Page</title>
        <meta
          name="shabzalio portfolio"
          content="Welcome to our portfolio page. Explore our services including branding, photography, videography, and web development."
        />
      </head>
    <div className="  w-screen text-[#e4d48c]">
      <div>
        <Navbar />

        <div className="flex flex-col mt-10  w-screen h-screen">
          <div className="mx-auto mt-56">
            <h1 className="text-8xl ">Portfolio</h1>
          </div>
          <div className=" flex flex-row mx-auto mt-28 gap-10 sm:gap-20 text-center">
            <div className="flex flex-col gap-5">
              <div className="  w-24 h-24 sm:w-52 sm:h-52">
                <video autoPlay loop muted controls={false} className="w-full">
                  <source src="/video/firstvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-sm hidden sm:block">We complete your brands <br /> from concept to design.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="  w-24 h-24 sm:w-52 sm:h-52 overflow-hidden">
                <video autoPlay loop muted controls={false} className="w-full ">
                  <source src="/video/secondvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-sm hidden sm:block">Digital marketing <br /> Let's make your brand stronger with.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="  w-24 h-24 sm:w-52 sm:h-52">
                <video autoPlay loop muted controls={false} className="w-full">
                  <source src="/video/thirdvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-sm hidden sm:block ">elevate your business <br /> Through effective branding strategies</p>
            </div>

            
          </div>

          <div className="flexflex-col gap-10 mt-10 pb-10 mx-auto">
            <div className="flex flex-col sm:flex-row gap-5">
                <div className=" w-[80vw] h-[30vh] sm:w-[40vw] text-4xl sm:text-6xl text-[#E4D48C] text-center flex items-center justify-center rounded hover:text-[#1BAD4B] sm:h-[40vh] bg-red-50">
                    branding
                </div>
                <div className=" w-[80vw] h-[30vh] sm:w-[40vw] hover:text-[#1BAD4B] text-4xl sm:text-6xl text-[#E4D48C] text-center flex items-center justify-center rounded   sm:h-[40vh] bg-red-50">
                    photography
                </div>
            </div>
            <div className="flex flex-col mt-5 sm:flex-row gap-5">
                <div className=" w-[80vw] h-[30vh] sm:w-[40vw] hover:text-[#1BAD4B] text-4xl sm:text-6xl text-[#E4D48C] text-center flex items-center justify-center rounded   sm:h-[40vh] bg-red-50">videography</div>
                <div className=" w-[80vw] h-[30vh] sm:w-[40vw] hover:text-[#1BAD4B] text-4xl sm:text-6xl text-[#E4D48C] text-center flex items-center justify-center rounded   sm:h-[40vh] bg-red-50">web development</div>
            </div>
          </div>
        <Footer/>

        </div>
      </div>
    </div>
    </>
  );
};

export default Portfolio;
