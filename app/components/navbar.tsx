'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between lg:justify-around flex-wrap bg-white p-6">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 text-black mr-6 ">
                <img className="fill-current h-12 w-12 mr-2 rounded-md" src="./assets/logo.jpeg" />
            </div>

            {/* Hamburger Icon */}
            <div className="block lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-500 hover:border-gray-500">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            {/* Navigation Links */}
            <div className={`w-full ${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-3/4`}>
                <div className='flex flex-col lg:flex-row lg:justify-between w-full'>
                    {/* Navigation Links */}
                    <div className="text-sm lg:flex lg:justify-around lg:w-4/6">
                        <Link href="#" passHref>
                            <span className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 ">
                                Emotions
                            </span>
                        </Link>
                        <Link href="#" passHref>
                            <span className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700">
                                Manifesto
                            </span>
                        </Link>
                        <Link href="#" passHref>
                            <span className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700 ">
                                Self-awareness test
                            </span>
                        </Link>
                        <Link href="#" passHref>
                            <span className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-700">
                                Work With Us
                            </span>
                        </Link>
                    </div>

                    {/* Sign In Button */}
                    <div className="mt-4 lg:mt-0">
                        <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full">
                            Download App
                        </button>
                    </div>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
