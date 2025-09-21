import React, { useState } from 'react'
import { logo } from '../assets/assets'
import { HiMenu, HiX } from 'react-icons/hi';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-5 md:px-9 bg-[#0c1f30] text-white backdrop-blur-sm shadow-md z-50">
      {/* Logo */}
      <div className="sm:w-28">
        <img src={logo} alt="" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden z-50 relative" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </div>

       {/* Navigation Links */}
      <ul className={`flex flex-col md:flex-row gap-6 md:static absolute top-16 left-0 w-full md:w-auto bg-[#0c1f30] md:bg-transparent transition-all duration-300 overflow-hidden md:max-h-full ${isOpen ? 'max-h-80 p-4' : 'max-h-0 md:max-h-full'}`}>
        <li className="text-xl hover:text-gray-300 cursor-pointer">Home</li>
        <li className="text-xl hover:text-gray-300 cursor-pointer">About</li>
        <li className="text-xl hover:text-gray-300 cursor-pointer">Contact</li>
        {/* On mobile, optionally show cart & login here */}
        <div className="flex flex-col md:hidden gap-4 mt-4">
          <div className='text-xl'>cart</div>
          <div className='text-xl'>login</div>
        </div>
      </ul>

      {/* Cart & Login */}
      <div className="hidden md:flex gap-5">
        <div className='text-lg'><FaShoppingCart size={24} className="cursor-pointer hover:text-gray-300" /></div>
        <div className='text-lg'>login</div>
      </div>
    </nav>
  )
}

export default Navbar
