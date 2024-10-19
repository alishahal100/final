import "./css/font.css";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <div className="w-screen bg-white-800  mt-[160px] lg:mt-[10px] text-center">
      <Helmet>
        <title>
          About Shabzalio - Digital Marketing, Photography, Videography, Web
          Development, Printing Services
        </title>
        <meta
          name="description"
          content="Show the world what your business is made of. Shabzalio customizes a company’s online experience through digital masterpieces, powerful online platforms, and storytelling through marketing campaigns across major media channels."
        />
      </Helmet>
      <div className=" hidden  lg:flex lg:flex-col lg:gap-3 items-center justify-center text-[#e4d48c]">
        <p className=" text-2xl lg:text-4xl font-black ">
          Show the world what your business is made of
        </p>
        <p className=" text-xl">
          We customize a company’s online experience through digital
          masterpieces, powerful online <br /> platforms, and storytelling
          through marketing campaigns across major media channels.
        </p>
      </div>
      <div className=" lg:hidden flex flex-col gap-10 mt-[150px] items-center justify-center text-[#e4d48c]">
        <p className=" text-2xl  font-bold">
          Show the world what your <br /> business is made of
        </p>
        <p className=" ">
          We customize a company’s online experience <br /> through digital
          masterpieces, powerful online <br /> platforms, and storytelling
          through marketing <br /> campaigns across major media channels.
        </p>
      </div>
    </div>
  );
};

export default About;
