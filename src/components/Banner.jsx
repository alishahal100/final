import {useState} from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./aboutus/Model";

import './css/font.css'
const Banner = () => {

    const [scrollY, setScrollY] = useState(0);
    const modelPath = "/bird/scene.gltf";
    // Update the scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  

    const birdPosition = {
        left: "50%", // Center the bird horizontally
        transform: `translateX(-40%) translateY(${scrollY * -0.3}px)`, // Move the bird upward as you scroll
        position: "absolute",
      };
   
  return (
    <div className=" relative w-screen  lg:-mt-44 ">
      <div className="container mx-auto flex flex-col  items-center justify-between">
        <div className="flex items-center mb-6 lg:mb-0 z-10" >
          <div className="mr-4">
            <img
              src="/hero.png"
              className=" lg:w-[1100px] lg:h-[800px]"
              alt="Hero Image"
              loading="lazy"
            />
          </div>
          <div style={birdPosition} className="hidden lg:block">
          <Canvas camera={{ fov: 18 }}>
            <ambientLight intensity={0.15} />
            <Suspense fallback={null}>
              <Model path={modelPath} scale={[0.5, 0.5, 0.5]} />
            </Suspense>
            <Environment preset="sunset" />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        </div>
        <div className=" hidden group lg:block w-screen absolute mt-[650px] z-50 ">
          <div className=" p-6 rounded-lg w-full shadow-lg">
            <div className="flex   text-[#e4d48c] gap-24  justify-center items-center">
              <div classname="flex  flex-col  ">
                <h1 className="text-3xl  group-hover:font-bold">Branding</h1>
                <h2 className="text-lg">services</h2>
              </div>
              <div classname="flex  flex-col ">
                <h1 className="text-3xl group-hover:font-bold">Digital</h1>
                <h2 className="text-lg">services</h2>
              </div>
              <div classname="flex  flex-col ">
                <h1 className="text-3xl group-hover:font-bold">Media</h1>
                <h2 className="text-lg">services</h2>
              </div>
            
              <div classname="flex  flex-col ">
                <h1 className="text-3xl group-hover:font-bold">Web</h1>
                <h2 className="text-lg">Development</h2>
              </div>
              <div classname="flex  flex-col ">
                <h1 className="text-3xl group-hover:font-bold">Printing</h1>
                <h2 className="text-lg">services</h2>
              </div>
            
            </div>
          </div>
        </div>
        <div className="  lg:hidden w-screen absolute mt-[350px] ">
          <div className=" p-6 rounded-lg shadow-lg">
            <div className="flex flex-col gap-10 px-10 text-[#e4d48c] justify-between items-center">
                <div className="flex flex-row gap-10">

                
              <div classname="flex  flex-col ">
                <h1 className="text-2xl ">Branding</h1>
                <h2 className="text-xl">services</h2>
              </div>
              <div classname="flex  flex-col ">
                <h1 className="text-2xl ">Digital</h1>
                <h2 className="text-xl">services</h2>
              </div>
              <div classname="flex  flex-col ">
                <h1 className="text-2xl ">Media</h1>
                <h2 className="text-xl">services</h2>
              </div>
              </div>
              <div className="flex flex-row gap-10">
              <div classname="flex  flex-col ">
                <h1 className="text-2xl ">Web</h1>
                <h2 className="text-xl">Development</h2>
              </div>
              <div classname="flex  flex-col ">
                <h1 className="text-2xl ">Printing</h1>
                <h2 className="text-xl">services</h2>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
