import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const NavBar = () => {
  
  const navRef = useRef()

  useGSAP(()=> {
    gsap.from(navRef.current.children,{y:-30, opacity:0, delay:0.5 , stagger:0.3 ,duration:0.5, ease:"power3.out"})
    // gsap.to(navRef.current.children,
    //   {y:0, opacity:1,stagger:0.3 ,duration:0.5, ease:"power3.out", delay:0.5}
    // )
  })


  return (
    
    <div className='flex w-[90%] h-14 mt-3 m-auto justify-between p-6 items-center '>
      <div className='w-16'>
        <i className="fa-brands fa-apple md:text-3xl hover:-translate-y-2 cursor-pointer hover:text-white transition-all duration-600" style={{ color: "white" }}></i>
      </div>
      
        <ul ref={navRef} className=' text-white/65  gap-10 hidden md:flex'> 
          <li className='cursor-pointer  hover:text-white'>Mac</li>
          <li className='cursor-pointer  hover:text-white'>iPhone</li>
          <li className='cursor-pointer  hover:text-white'>Watch</li>
          <li className='cursor-pointer  hover:text-white'>Vision</li>
          <li className='cursor-pointer  hover:text-white'>AirPods</li>
        </ul>
        {/*  hover:-translate-y-2*/} 
        <div className='flex gap-6 items-center'>
          <i className="fa-solid fa-magnifying-glass md:text-2xl cursor-pointer hover:-translate-y-2 hover:text-white transition-all duration-600 hover:[text-shadow:0_0_5px_white]" style={{ color: "#ffffffbf" }}></i>
          <i className="fa-solid fa-bag-shopping md:text-2xl cursor-pointer hover:-translate-y-2 hover:text-white transition-all duration-600 hover:[text-shadow:0_0_5px_white]" style={{ color: "#ffffffbf" }}></i>
        </div>
      
    </div>

  )
}

export default NavBar
