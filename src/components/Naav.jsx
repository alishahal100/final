import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-screen font-extrabold top-0 z-50 pl-10 bg-black sticky h-28 overflow-hidden pb-10">
            <div className="flex gap-0 justify-between sm:gap-36 sm:ml-12 text-[#e4d48c] items-center">
                <div className="flex-shrink-0 left-0">
                    <a href="/">

                    <img src="/logo.svg" alt="logo" className="ml-10 w-20 h-20 sm:w-36 sm:h-36" />
                    </a>
                </div>
                <div className="hidden lg:block ml-auto mr-auto font-extrabold">
                    <ul className="flex space-x-4">
                        <li><a href="/" >Home</a></li>
                        <li><a href="https://shabzalio.myportfolio.com" target='_blank' >Portfolio</a></li>
                        <li><a href="/contact" >Contact Us</a></li>
                    </ul>
                </div>
                <div className="right-2 relative hidden lg:block">
                    <a href="https://wa.me/917510622616" target='_blank' className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#1caa52]">
                        <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                        <span className="text-black font-extrabold">WhatsApp Chat</span>
                    </a>
                </div>
                <div>
                    <a href="/portfolio">
                        <button className="lg:hidden text-[#e4d48c] border border-[#e4d48c] px-4 py-2 mr-5 rounded">Portfolio</button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
