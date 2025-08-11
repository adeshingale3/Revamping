import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { FadingBG, GithubBG, MaskedBG } from 'wavyjs'

const App = () => {
  return (
    <div className='h-screen w-screen relative z-999 flex justify-center'>
      <GithubBG />
      <Navbar/>
      <Hero />

    </div>
   
  )
}

export default App