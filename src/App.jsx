import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import CanvasLaptop from './Components/CanvasLaptop'
import CanvasProvider from "./context/CanvasProvider";

const App = () => {
  return (

    <CanvasProvider>
      <NavBar />
      <Hero />
      <CanvasLaptop />
    </CanvasProvider>

  )
}

export default App
