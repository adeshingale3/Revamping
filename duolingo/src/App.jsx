import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { AnimatedBG, FadingBG, GithubBG, MaskedBG } from 'wavyjs'
const App = () => {
  return (
    <>
    <MaskedBG />
    <div className='absolute h-screen w-screen relative z-999 flex justify-center scrollbar-hidden'>
      
      <Navbar/>
      <Hero />

    </div>
    </>
   
  )
}

export default App