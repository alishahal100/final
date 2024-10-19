
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./css/font.css";
import { Helmet } from "react-helmet-async";

const ServicesBefore = () => {
  const { ref: defineref, inView: defineinView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: energizeref, inView: energizeinView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: captureeref, inView: captureeinView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: webref, inView: webinView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: craftref, inView: craftinView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="w-screen mt-10 overflow-hidden">
      <Helmet>
        <title>Shabzalio - Services</title>
        <meta
          name="description"
          content="Discover Shabzalio's comprehensive range of services including branding, digital services, media services, web development, and printing services. Explore how Shabzalio can help energize your digital presence and capture your unique brand identity."
        />
      </Helmet>
      <div className="flex w-full flex-col justify-center align-center">
        <div className="lg:w-[70vw]  lg:h-[60vh] w-[80vw] h-[20vh] rounded-3xl border-[7px] mx-auto border-[#e4d48c] lg:border-none lg:bg-[url('/Layer.jpg')] bg-cover bg-center">
          <img
            src="/group.svg"
            className="w-[30vw] -mt-5 h-[20vh] lg:w-[80vw] lg:h-[50vh] mx-auto my-auto"
            alt="show reel"
          />
        </div>
        <div className="define">
          <div
            ref={defineref}
            className="define hidden lg:flex flex-row w-screen ml-12 justify-center gap-10 mt-32 items-center text-[#e4d48c]"
          >
            <motion.div
              className="flex flex-col bg"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={
                defineinView
                  ? { x: 0, opacity: 1 }
                  : { x: "-100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-9xl tracking-tightest tracking-tightest">Define</h1>
              <h3 className="text-4xl  ml-1.5 font  tracking-normal">branding services</h3>
            </motion.div>
            <motion.div
              className="     "
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                defineinView ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <p className="text-3xl font">what makes you unique</p>
              <p className="text-3xl font">and create a trusted brand</p>
            </motion.div>
            <motion.div
              className=" "
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                defineinView ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <img
                src="/define.svg"
                alt="Illustration depicting branding services: What makes you unique and creates a trusted brand"
                className="w-[40vw] h-[60vh]"
              />
            </motion.div>
          </div>
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
        </div>

        <div className=" energize">
          <div
            ref={energizeref}
            className="define  hidden lg:flex flex-row w-screen -ml-2  justify-center gap-16 mt-32 items-center text-[#e4d48c]"
          >
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={
                energizeinView
                  ? { x: 0, opacity: 1 }
                  : { x: "-100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <img
                src="/web.png"
                className="w-[32vw] h-[65vh]"
                alt="Illustration depicting digital services: Through our creative lenses, the power of content and why your business needs it"
              />
            </motion.div>
            <motion.div
              className=" flex flex-col text-end"
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                energizeinView
                  ? { x: 0, opacity: 1 }
                  : { x: "100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl font">through our creative lenses</p>
              <p className="text-xl  font">the power of content and</p>
              <p className="text-xl  font">why your business needs it</p>
            </motion.div>
            <motion.div
              className=" mt-10 text-end "
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                energizeinView
                  ? { x: 0, opacity: 1 }
                  : { x: "100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-9xl tracking-tightest">Energize</h1>
              <h3 className="text-4xl mt-6 font">digital services</h3>
            </motion.div>
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
        </div>

        <div className="capture">
          <div
            ref={captureeref}
            className="define   hidden lg:flex flex-row w-screen ml-16 justify-center gap-5 mt-32 items-center text-[#e4d48c]"
          >
            <motion.div
              className="flex flex-col mt-5 "
              initial={{ x: "-100vw", opacity: 0 }}
              animate={
                captureeinView
                  ? { x: 0, opacity: 1 }
                  : { x: "-100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-9xl tracking-tightest">Capture</h1>
              <h3 className="text-4xl tracking-normal font ml-1.5 ">Where Stories Become Art</h3>
            </motion.div>
            <motion.div
              className=" "
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                captureeinView
                  ? { x: 0, opacity: 1 }
                  : { x: "100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl font">
                Turning stories into visual art <br /> through video and
                photography
              </p>
            </motion.div>
            <motion.div
              className=" "
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                captureeinView
                  ? { x: 0, opacity: 1 }
                  : { x: "100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <img
                src="/capture.svg"
                className="w-[38vw] h-[55vh]"
                alt="Illustration depicting the process of capturing stories through video and photography, where stories become art"
              />
            </motion.div>
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
          </div>
        </div>

        <div className=" web">
          <div
            ref={webref}
            className="define  hidden lg:flex flex-row w-screen text-end  justify-center gap-32 mt-32 items-center text-[#e4d48c]"
          >
            <motion.div
              initial={{ x: "-100vw", opacity: 0 }}
              animate={
                webinView ? { x: 0, opacity: 1 } : { x: "-100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <img
                src="/energize.svg"
                className="w-[30vw] h-[75vh]"
                alt="Illustration of a dynamic web development process by Shabzalio, showcasing innovative design strategies for achieving optimal user experience and conversion rates"
                layout="responsive"
              />
            </motion.div>
            <motion.div
            className=" -mr-52"
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                webinView ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl font">with us and break new ground</p>
              <p className="text-xl font">using Optimized web design and web</p>
              <p className="text-xl font">development for conversion</p>
            </motion.div>
            <motion.div
              className=" mt-8"
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                webinView ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-9xl tracking-tightest ">Build</h1>
              <h3 className="text-4xl font tracking-wider">web development</h3>
            </motion.div>
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
        </div>

        <div className="craft">
          <div
            ref={craftref}
            className="define   hidden lg:flex flex-row w-screen  px-24 justify-center gap-10 mt-32 items-center text-[#e4d48c]"
          >
            <motion.div
              className="flex flex-col  mt-5 text-start"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={
                craftinView ? { x: 0, opacity: 1 } : { x: "-100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            >
              <h1 className=" text-9xl tracking-tightest">Craft</h1>
              <h3 className="text-4xl ml-2 font">
                bringing your <br /> ideas into life
              </h3>
            </motion.div>
            <motion.div
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                craftinView ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
              className=" "
            >
              <p className="text-xl font">
                craft is your reliable printing service <br /> dedicated to
                bringing your ideas to life <br /> with precision and care. We
                specialize in <br /> high-quality prints for both business and{" "}
                <br /> personal needs
              </p>
            </motion.div>
            <motion.div
              initial={{ x: "100vw", opacity: 0 }}
              animate={
                craftinView ? { x: 0, opacity: 1 } : { x: "100vw", opacity: 0 }
              }
              transition={{ duration: 0.5 }}
              className=" "
            >
              <img
                src="/craft.svg"
                className="w-[30vw] h-[60vh]"
                alt="Craft Printing Services: High-Quality Prints Tailored for Your Business and Personal Needs - Precision and Care at Shabzalio"
              />
            </motion.div>
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

export default ServicesBefore;
