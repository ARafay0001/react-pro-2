import React from 'react'

const NavBar = () => {
  return (
    <div className='flex w-[90%] m-auto justify-between p-6 items-center '>
     <i className="fa-brands fa-apple md:text-3xl hover:-translate-y-2 cursor-pointer hover:text-white transition-all duration-600" style={{ color: "white" }}></i>
     
      <ul className='text-white/65  gap-10 hidden md:flex'> 
        <li className='cursor-pointer hover:-translate-y-2 hover:text-white transition-all duration-600 hover:[text-shadow:0_0_5px_white]'>Mac</li>
        <li className='cursor-pointer hover:-translate-y-2 hover:text-white transition-all duration-600 hover:[text-shadow:0_0_5px_white]'>iPhone</li>
        <li className='cursor-pointer hover:-translate-y-2 hover:text-white transition-all duration-600 hover:[text-shadow:0_0_5px_white]'>Watch</li>
        <li className='cursor-pointer hover:-translate-y-2 hover:text-white transition-all duration-600 hover:[text-shadow:0_0_5px_white]'>Vision</li>
        <li className='cursor-pointer hover:-translate-y-2 hover:text-white transition-all duration-600 hover:[text-shadow:0_0_5px_white]'>AirPods</li>
      </ul>

      <div className='flex gap-6 items-center'>
        <i class="fa-solid fa-magnifying-glass md:text-2xl cursor-pointer hover:-translate-y-2 hover:text-white transition-all duration-600 hover:[text-shadow:0_0_5px_white]" style={{ color: "#ffffffbf" }}></i>
        <i class="fa-solid fa-bag-shopping md:text-2xl cursor-pointer hover:-translate-y-2 hover:text-white transition-all duration-600 hover:[text-shadow:0_0_5px_white]" style={{ color: "#ffffffbf" }}></i>
      </div>
     
    </div>
  )
}

export default NavBar
