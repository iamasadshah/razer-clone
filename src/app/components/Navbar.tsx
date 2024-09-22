"use client";
import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-gray-400 w-full h-16 border-b-[1px] border-green-400 sticky top-0">
      {/* Navbar container */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between lg:justify-around">
        {/* Hamburger menu for md and below */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-400 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Logo */}
        <div className="text-2xl font-bold lg:px-8">
          {/* Extra space for logo on large screens */}
          <a href="#">
            <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          </a>
        </div>

        {/* Search and Cart icons right-aligned for md and mobile */}
        <div className="flex lg:hidden space-x-4">
          <FaSearch className="text-gray-400 text-xl md:text-2xl" />
          <BsCart2 className="text-gray-400 text-xl md:text-2xl" />
        </div>

        {/* Full navbar for lg and above */}
        <ul className="hidden lg:flex items-center space-x-6 w-full lg:justify-around">
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">PC</a>
          </li>
          <li>
            <a href="#">Console</a>
          </li>
          <li>
            <a href="#">Mobile</a>
          </li>
          <li>
            <a href="#">Lifestyle</a>
          </li>
          <li>
            <a href="#">Gold</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <FaSearch className="text-gray-400" />
          </li>
          <li>
            <BsCart2 className="text-gray-400 text-xl" />
          </li>
        </ul>
      </div>

      {/* Mobile and md Menu */}
      {isOpen && (
        <div className="fixed top-16 border-r-2 border-green-500 left-0 h-full w-[50%] bg-black text-gray-400 z-50 md:w-[50%]">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a href="#" className="block text-center">
                Store
              </a>
            </li>
            <li>
              <a href="#" className="block text-center">
                PC
              </a>
            </li>
            <li>
              <a href="#" className="block text-center">
                Console
              </a>
            </li>
            <li>
              <a href="#" className="block text-center">
                Mobile
              </a>
            </li>
            <li>
              <a href="#" className="block text-center">
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#" className="block text-center">
                Gold
              </a>
            </li>
            <li>
              <a href="#" className="block text-center">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="block text-center">
                Support
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
