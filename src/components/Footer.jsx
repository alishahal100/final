
import { Helmet } from "react-helmet-async";
import { BsInstagram, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-screen  overflow-hidden bg-[#1BAD4B] h-[35vh]   lg:h-[75vh]  mt-10 font-sans font-bold   text-[#1D1D1D] bottom-0">
        <Helmet>
        <title>Shabzalio - Digital Marketing, Photography, Videography, Web Development, Printing Services</title>
        <meta name="description" content="Shabzalio offers digital marketing, photography, videography, web development, and printing services. Let's talk about your project today." />
      </Helmet>
        <div className="flex flex-col mt-22  ">
            <div className="flex flex-row  mx-auto pl-6 md:pl-20 xxl:pl-36">
                <div className="flex flex-col   mt-24 lg:mt-56">
                    <h1 className=" text-3xl md:text-5xl lg:text-6xl xl:text-8xl">Let's Talk</h1>
                    <div className="flex flex-col lg:flex-row gap-2 mt-3 lg:gap-8">
                    <div className="flex gap-1 ml-1 lg:gap-2 lg:ml-3 flex-row cursor-pointer"> 
                    <img className="  w-3 lg:w-5" src="/email.svg" alt="shabzalio email icon" />
                    <a href="mailto:media@shabzalio.com">
                    <h6 className="text-xs md:text-lg lg:text-lg">media@shabzalio.com</h6>
                    </a>
                    </div>
                    <div className="flex gap-2 flex-row cursor-pointer"> 
                    <img class="w-3 ml-1 lg:w-5 fill-current text-black" src="/whatsapp.svg" alt="shabzalio whatsapp logo" />

                    <a href="https://wa.me/917510622616">
                    <p className="text-xs  md:text-lg  lg:text-lg"> 91 7510 622 616</p>
                    </a>
                    </div>
                    </div>

                </div>
                <div className=" line hidden lg:block  box-border mt-72 ml-10 w-[100px] sm:w-[251px] h-px border-t-[1px] border-solid border-black " />
                <div className="flex flex-col gap-3  mt-[100px] lg:mt-64 ml-5">
                    <div className=" flex flex-row ">
                        <a href="https://www.instagram.com/shabzalio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">

                        <BsInstagram className="lg:w-16 lg:h-8 w-10 h-4 md:w-12 md:h-6 text-black" />
                        </a>
                        <a href="https://www.linkedin.com/company/shabzalio-com/about/">

                        <BsLinkedin  className="lg:w-16 lg:h-8 w-10 h-4 md:w-12 md:h-6 text-black"/>
                        </a>
                    </div>
                    <div className=" flex flex-row ">
                        <a href="https://www.linkedin.com/company/shabzalio-com/about/">

                        <BsFacebook  className="lg:w-16 lg:h-8 w-10 h-4 md:w-12 md:h-6 text-black"/>
                        </a>
                        <img  className="lg:w-16 lg:h-8  w-10 h-4 md:w-12 md:h-6 text-black" src="/x.png" alt="" />
                    </div>
                </div>
                <div className=" mt-[5rem] md:mt-[3rem] lg:mt-24 w-45vw ">
                    <img src='/dp.png' alt="shabzalio-logo" className=" w-[25vw]  lg:w-[25vw]" />
                </div>
            </div>
            <div className="flex flex-row ml-5 md:mx-auto mt-10 gap-5  pb-16 lg:mt-5">

                <div className=" ">
                    <img src="/shabzalio.svg" alt="shabzalio-image" />
                </div>
                <div className="relative mt-3 ml-2   box-border w-[80px] md:w-[180px] xl:w-[906.76px]  lg:w-[506.76px] h-px border-t-[1px] border-solid border-black" />
            <div className="ml-3 relative">Shabzalio © {new Date().getFullYear()}</div>
            </div>
        </div>
      
    </div>
    
  );
};

export default Footer;
