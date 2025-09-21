import React from 'react'
import { logo2 } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-[#0c1f30] text-white'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 pl-10 mt-10 text-sm'>
        <div>
            <img className='mb-5 w-32 invert' src={logo2} alt="" />
            <p className='w-full md:w-2/3 text-white'>Lorem ipsum dolor sit amet consectetur quos distinctio dicta dolor Facere aspernatur delectus fugiat eos!</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col gap-2 text-white'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-white'>
                <li>+91 1234567890</li>
                <li>demo@123.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @siddhesh | All right Reserved </p>
      </div>
    </div>
  )
}

export default Footer
