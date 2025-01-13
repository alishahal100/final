import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/font.css";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

const Section = ({
  title,
  description,
  imgSrc,
  reverse,
  content1,
  content2,
  content3,
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    gsap.fromTo(
      element.querySelector(".text"),
      { x: reverse ? 200 : -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "bottom 130%", // triggers when this point reaches 80% from the top of the viewport
          end: "top 20%",
          scrub: 1,
        },
      }
    );
    gsap.fromTo(
      element.querySelector(".image"),
      { x: reverse ? -200 : 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          start: "bottom 130%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, [reverse]);

  return (
    <div
      ref={sectionRef}
      className={`flex px-20 ${
        reverse ? "flex-row-reverse" : "flex-row"
      } w-screen mt-20 justify-center gap-10 items-center my-32 text-[#e4d48c]`}
    >
      <div
        className={`flex text ${
          reverse ? "flex-row-reverse text-end px-10" : "flex-row"
        }`}
      >
        <div className={`${reverse ? " mt-7 ml-8" : ""}`}>
          <h1 className="text-9xl tracking-tightest tracking-tightest">
            {title}
          </h1>
          <p className="text-3xl  ml-1.5 font  tracking-normal">
            {description}
          </p>
        </div>
        <div className="ml-10">
          <p className="text-2xl font mt-10">{content1}</p>
          <p className="text-2xl font ">{content2}</p>
          <p className="text-2xl font ">{content3}</p>
        </div>
      </div>
      <img src={imgSrc} alt={title} className="image w-[30vw] h-[60vh]" />
    </div>
  );
};

const Services = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleShowReelClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoClose = () => {
    setIsVideoPlaying(false);
  };
  return (
    <div className="w-screen mt-10 overflow-hidden">
      <Helmet>
        <title>Shabzalio - Services</title>
        <meta
          name="description"
          content="Discover Shabzalio's comprehensive range of services including branding, digital services, media services, web development, and printing services."
        />
      </Helmet>

      <div className="hidden lg:flex w-full flex-col justify-center align-center">
        <div
          className="lg:w-[70vw] lg:h-[60vh] w-[80vw] h-[20vh] rounded-3xl border-[7px] mx-auto border-[#e4d48c] lg:border-none lg:bg-[url('/Layer.jpg')] bg-cover bg-center"
          onClick={handleShowReelClick}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <img
            src="/group.svg"
            className="w-[30vw] -mt-5 h-[20vh] lg:w-[80vw] lg:h-[50vh] mx-auto my-auto"
            alt="show reel"
          />
          {isVideoPlaying && (
            <div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 z-10"
              onClick={handleVideoClose}
            >
              <video
                src="/video/showreel.mp4"
                controls
                autoPlay
                className="w-full h-full rounded-3xl"
              />
            </div>
          )}
        </div>

        {/* Define Section */}
        <Section
          title="Define"
          description="Branding services"
          content1="what makes you unique"
          content2="and create a trusted brand"
          imgSrc="/define.svg"
          reverse={false}
        />

        {/* Energize Section */}
        <Section
          title="Energize"
          description="Digital services "
          content1="through our creative lenses"
          content2="the power of content and"
          content3="why your business needs it"
          imgSrc="/web.png"
          reverse={true}
        />

        {/* Capture Section */}
        <Section
          title="Capture"
          description="where stories become art"
          imgSrc="/capture.svg"
          content1="Turning stories into visual art"
          content2="through video and photography"
          reverse={false}
        />

        {/* Web Section */}
        <Section
          title="Build"
          description="web development"
          content1="with us and break new ground"
          content2="using Optimized web design and web"
          content3="development for conversion"
          imgSrc="/energize.svg"
          reverse={true}
        />

        <Section
          title="Capture"
          description="where stories become art"
          imgSrc="/capture.svg"
          content1="Turning stories into visual art"
          content2="through video and photography"
          reverse={false}
        />
      </div>
      <div>
        <div className="define lg:hidden gap-10 flex flex-col mt-28 text-[#e4d48c]">
          <div className="text-center">
            <h1 className="text-4xl lg:text-8xl">Define</h1>
            <h3 className="text-xl lg:text-5xl">branding services</h3>
          </div>
          <div className="text-center">
            <img
              src="/define.svg"
              alt="Illustration depicting branding services: What makes you unique and creates a trusted brand"
              className="w-[40vw] h-[30vh] mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="text-xl lg:text-3xl">
              what makes you unique <br /> and create a trusted brand
            </p>
          </div>
        </div>

        <div className="energize lg:hidden gap-10 flex flex-col mt-28 text-[#e4d48c]">
          <div className="text-center">
            <h1 className="text-4xl lg:text-8xl">Energize</h1>
            <h3 className="text-xl lg:text-5xl">Digital services</h3>
          </div>
          <div className="text-center">
            <img
              src="/web.png"
              alt="Illustration depicting digital services: Through our creative lenses, the power of content and why your business needs it"
              className="w-[45vw] h-[30vh] mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="text-xl lg:text-3xl">
              through our creative lenses <br />
              the power of content and <br /> why your business needs it
            </p>
          </div>
        </div>
        <div className="define lg:hidden gap-10 flex flex-col mt-28 text-[#e4d48c]">
          <div className="text-center">
            <h1 className="text-4xl lg:text-8xl">capture</h1>
            <h3 className="text-xl lg:text-5xl">where stories become art</h3>
          </div>
          <div className="text-center">
            <img
              src="/capture.svg"
              alt="Illustration depicting the process of capturing stories through video and photography, where stories become art"
              className="w-[40vw] h-[30vh] mx-auto"
            />
          </div>
          <div className="text-center">
            <p className="text-xl lg:text-3xl">
              Turning stories into visual art <br /> through video and
              photography
            </p>
          </div>
          <div className="web lg:hidden gap-10 flex flex-col mt-28 text-[#e4d48c]">
            <div className="text-center">
              <h1 className="text-4xl lg:text-8xl">Build</h1>
              <h3 className="text-xl lg:text-5xl -mr-3">web development</h3>
            </div>
            <div className="text-center">
              <img
                src="/energize.svg"
                alt="Illustration of a dynamic web development process by Shabzalio, showcasing innovative design strategies for achieving optimal user experience and conversion rates"
                className="w-[40vw] h-[30vh] mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-xl lg:text-3xl">
                with us and break new ground <br /> using Optimized web design
                and web <br /> development for conversion
              </p>
            </div>
          </div>
          <div className="define lg:hidden gap-10 flex flex-col mt-28 text-[#e4d48c]">
            <div className="text-center">
              <h1 className="text-4xl lg:text-8xl">capture</h1>
              <h3 className="text-xl lg:text-5xl">where stories become art</h3>
            </div>
            <div className="text-center">
              <img
                src="/capture.svg"
                alt="Craft Printing Services: High-Quality Prints Tailored for Your Business and Personal Needs - Precision and Care at Shabzalio"
                className="w-[40vw] h-[30vh] mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-xl lg:text-3xl">
                craft is your reliable printing <br /> service dedicated to
                bringing <br /> your ideas to life with precision <br /> and
                care. We specialize in high- <br />
                quality prints for both business <br /> and personal needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
