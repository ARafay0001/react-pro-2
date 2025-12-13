import React from 'react'
import Title from "../images-videos/public/title.png"
import LaptopHero  from "../images-videos/public/videos/hero.mp4"
const Hero = () => {
  return (
  <main className='w-full h-[calc(100vh-68px)] flex justify-center items-center'>
    <div className='text-center w-full'>
      <h2 className='text-2xl md:text-4xl'>MacBook Pro</h2>
      <div className='max-w-[900px] w-[40vw]  relative z-1 m-auto'>
        <img className='' src={Title} alt="" />
      </div>
      <div className='m-auto w-[80vw] -my-3.5'>
        <video className='m-auto' src={LaptopHero} autoPlay muted></video>
      </div>
      <button className='bg-blue-600 px-4 py-2 md:px-8 md:py-3 text-[10px] md:text-[16px] text-center  rounded-full'>Buy</button>
      <h2 className='mt-3 md:text-2xl text-white/60'>From $1599 or $133.25/mo. for 12 mo.</h2>
    </div>
  </main>  
  )
} 

export default Hero
