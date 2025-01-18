import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./css/font.css";
import { Helmet } from "react-helmet-async";
import {motion} from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const scrollAnimationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


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
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is in view
      }
    );

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);
  return (
    <div className="w-screen mt-10 overflow-hidden">
      <Helmet>
        <title>Shabzalio - Services</title>
        <meta
          name="description"
          content="Discover Shabzalio's comprehensive range of services including branding, digital services, media services, web development, and printing services."
        />
      </Helmet>

      <div className="relative lg:w-[90vw] lg:h-[60vh] w-[100vw] h-[20vh] mx-auto">
          <video
            ref={videoRef}
            src="/video/showreel.mp4"
            className="w-full h-full rounded-3xl"
            muted
            playsInline
          />
        </div>
      <div className="hidden lg:flex w-full flex-col justify-center align-center">

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
      <div className="space-y-28 lg:hidden mt-10 text-[#e4d48c]">
      {[
        {
          title: "Define",
          subtitle: "branding services",
          imgSrc: "/define.svg",
          imgAlt:
            "Illustration depicting branding services: What makes you unique and creates a trusted brand",
          description: "what makes you unique and create a trusted brand",
        },
        {
          title: "Energize",
          subtitle: "Digital services",
          imgSrc: "/web.png",
          imgAlt:
            "Illustration depicting digital services: Through our creative lenses, the power of content and why your business needs it",
          description:
            "through our creative lenses, the power of content and why your business needs it",
        },
        {
          title: "Capture",
          subtitle: "where stories become art",
          imgSrc: "/capture.svg",
          imgAlt:
            "Illustration depicting the process of capturing stories through video and photography, where stories become art",
          description:
            "Turning stories into visual art through video and photography",
        },
        {
          title: "Build",
          subtitle: "web development",
          imgSrc: "/energize.svg",
          imgAlt:
            "Illustration of a dynamic web development process by Shabzalio, showcasing innovative design strategies for achieving optimal user experience and conversion rates",
          description:
            "with us and break new ground using Optimized web design and web development for conversion",
        },
        {
          title: "Craft",
          subtitle: "your printing partner",
          imgSrc: "/capture.svg",
          imgAlt:
            "Craft Printing Services: High-Quality Prints Tailored for Your Business and Personal Needs - Precision and Care at Shabzalio",
          description:
            "craft is your reliable printing service dedicated to bringing your ideas to life with precision and care. We specialize in high-quality prints for both business and personal needs",
        },
      ].map(({ title, subtitle, imgSrc, imgAlt, description }, index) => (
        <motion.div
          key={title}
          className="flex flex-col items-center mt-5 px-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={scrollAnimationVariants}
        >
          <h1 className="text-4xl">{title}</h1>
          <h3 className="text-xl mt-2">{subtitle}</h3>
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-[40vw] h-[25vh] mx-auto my-5"
          />
          <p className="text-xl">{description}</p>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default Services;
