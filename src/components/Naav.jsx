import { Menu } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="w-screen font-extrabold top-0 z-50 lg:pl-10 bg-black lg:px-10 sticky h-28 overflow-hidden pb-10">
            <div className="flex gap-0 justify-between sm:gap-36 sm:ml-12 text-[#e4d48c] items-center">
                {/* Logo */}
                <div className="flex-shrink-0 left-0">
                    <a href="/">
                        <img src="/logo.svg" alt="logo" className="ml-10 w-20 h-20 sm:w-36 sm:h-36" />
                    </a>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:block -ml-8 font-extrabold">
                    <ul className="flex space-x-4">
                        <li><a href="/">Home</a></li>
                        <li><a href="https://shabzalio.myportfolio.com" target='_blank'>Portfolio</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Desktop WhatsApp Chat */}
                <div className="right-2 relative hidden lg:block">
                    <a
                        href="https://wa.me/917510622616"
                        target='_blank'
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#1caa52]"
                    >
                        <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                        <span className="text-black font-extrabold">WhatsApp Chat</span>
                    </a>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="lg:hidden flex items-center mr-5">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-[#e4d48c] px-4 py-2 border border-[#e4d48c] rounded"
                    >
                        <Menu/>
                    </button>
                </div>
            </div>

            {/* Mobile Sliding Menu */}
            <div
                className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-black text-[#e4d48c] transform ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-40`}
            >
                <button
                    onClick={toggleMobileMenu}
                    className="text-white text-lg absolute top-4 right-4"
                >
                    ✕
                </button>
                <ul className="mt-16 space-y-6 pl-6 text-lg">
                    <li>
                        <a href="/" onClick={toggleMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="https://shabzalio.myportfolio.com" target='_blank' onClick={toggleMobileMenu}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="/contact" onClick={toggleMobileMenu}>
                            Contact Us
                        </a>
                    </li>
                    {/* <li>
                        <a
                            href="https://wa.me/917510622616"
                            target='_blank'
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#1caa52] mt-4"
                        >
                            <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                            <span className="text-black font-extrabold">WhatsApp Chat</span>
                        </a>
                    </li> */}
                </ul>
            </div>

            {/* Overlay when menu is open */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black opacity-50 z-30"
                    onClick={toggleMobileMenu}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
