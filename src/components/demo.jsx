import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const ballRef = useRef(null);
  const containerRef = useRef(null);
  const container2Ref = useRef(null);

  useEffect(() => {
    // Ensure GSAP's ScrollTrigger works properly with React
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom center",
      scrub: true,
    });

    // Animation logic
    gsap.to(ballRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      x: () =>
        container2Ref.current.getBoundingClientRect().left -
        containerRef.current.getBoundingClientRect().left,
      y: () =>
        container2Ref.current.getBoundingClientRect().top -
        containerRef.current.getBoundingClientRect().top,
      duration: 1,
    });
  }, []);

  return (
    <>
      <div ref={containerRef} className="container ">
        <div className="box w-[100px] bg-black">
          <div ref={ballRef} className="ball"></div>
        </div>
      </div>

      <div ref={container2Ref} className="container bottom-right">
        <div className="box w-[100px] bg-black"></div>
      </div>
    </>
  );
};

export default ScrollAnimation;
