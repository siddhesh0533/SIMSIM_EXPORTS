import React from 'react'
import { logo } from '../assets/assets'

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-9 bg-[#0c1f30] text-white backdrop-blur-sm shadow-md z-50">
      {/* Logo */}
      <div className="w-28">
        <img src={logo} alt="" />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li className="text-xl hover:text-gray-300 cursor-pointer">Home</li>
        <li className="text-xl hover:text-gray-300 cursor-pointer">About</li>
        <li className="text-xl hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>

      <div className='flex gap-5'>
        <div>cart</div>
        <div>login</div>
      </div>
    </nav>
  )
}

export default Navbar
