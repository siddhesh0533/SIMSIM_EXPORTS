import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-9 bg-black text-white'>
      <div>
        logo
      </div>
      <div>
        <li className='flex gap-4'>
            <ul>home</ul>
            <ul>about</ul>
            <ul>contact</ul>
        </li>
      </div>
    </div>
  )
}

export default Navbar
