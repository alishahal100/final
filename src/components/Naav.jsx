import React from 'react';

const Navbar = () => {
    return (
        <nav className=" w-screen font-extrabold  top-0 z-50 bg-black sticky h-28 overflow-hidden pb-10">
            <div className="  flex gap-0 justify-between sm:gap-36  sm:ml-12 text-[#e4d48c] items-center">
                <div className="flex-shrink-0 left-0">
                    <img src='/logo.svg' alt='logo' className='ml-10 w-20 h-20  sm:w-36 sm:h-36 ' />
                </div>
                <div className="hidden lg:block ml-auto mr-auto font-extrabold">
                    <ul className="flex space-x-4">
                        <li><a href="/" >Home</a></li>
                        <li><a href="/portfolio" >Portfolio</a></li>
                        <li><a href="" >Services</a></li>
                        {/* <li><a target='_blank' href="/servicebefore" >service before</a></li> */}
                    </ul>
                </div>
                <div className=' right-2'>
                    <a href="https://wa.me/917510622616">
                    <button className="hidden lg:block  border border-[#e4d48c] w-44 h-12 text-white-800 px-4 py-2 rounded">Contact Us</button>
                    </a>
                </div>
                <div>
                    <a href="/portfolio">

                    <button className=" lg:hidden  text-[#e4d48c] border border-[#e4d48c] px-4 py-2 mr-5 rounded">portfolio</button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

