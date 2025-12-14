import React, { useContext } from 'react'
import { Canvas } from "@react-three/fiber"
import CanvasContext from '../context/CanvasContext.jsx'
import MacBookModel14 from '../Models/Macbook-14.jsx'
import { OrbitControls } from '@react-three/drei'

const CanvasLaptop = () => {
  const { color, setColor, size, setSize } = useContext(CanvasContext)


  // const numericSize = parseInt(size)

  return (
    <div className='h-screen w-full max-w-[1920px] px-[5vw]'>
      <h1 className='text-5xl'>Take a closer look.</h1>

      <Canvas
  camera={{ position: [0, 2, 5], fov: 50 }}
  gl={{
    antialias: true,
    version: 1, // Force WebGL1
    failIfMajorPerformanceCaveat: false, // allow fallback
  }}
>
  <MacBookModel14 position={[0, 0, 0]} scale={parseInt(size)} color={color} />
  <OrbitControls enableZoom={false} />
</Canvas>


      <p className='text-center'>MacBook Pro 16” in Space Black</p>

      {/* Switch button one */}
      <div className='flex gap-4.5 justify-center my-6'>
        <div
          onClick={() => setColor(color === 'white' ? 'dark' : 'white')}
          className='cursor-pointer select-none w-20 h-10 gap-2 bg-neutral-700 rounded-full flex justify-center items-center transition-transform-all duration-500'
        >
          <div className={`w-6 h-6 rounded-full bg-neutral-900 ${color === "dark" ? "border-2 border-white" : "border-none"}`}></div>
          <div className={`w-6 h-6 rounded-full bg-neutral-400 ${color === "white" ? "border-3 border-white" : "border-none"}`}></div>
        </div>

        {/* Switch button two */}
        <div
          onClick={() => setSize(size === `14` ? `16` : `14`)}
          className='cursor-pointer select-none w-20 h-10 gap-2 text-[12px] bg-neutral-600 rounded-full flex justify-center items-center'
        >
          <div className={`w-6 h-6 rounded-full flex justify-center items-center ${size === `14` ? "bg-neutral-300 text-black" : "bg-none text-white"}`}>14"</div>
          <div className={`w-6 h-6 rounded-full flex justify-center items-center ${size === `16` ? "bg-neutral-300 text-black" : "bg-none text-white"}`}>16"</div>
        </div>
      </div>
    </div>
  )
}

export default CanvasLaptop
