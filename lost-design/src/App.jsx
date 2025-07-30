import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-screen bg-gray-400 flex items-center justify-center'>
      <div className='relative z-999 h-[65%] w-[25%] bg-blue-600 rounded-xl overflow-hidden shadow-xl shadow-black/30'>
        <video
          className="w-full h-full object-cover absolute z-9"
          autoPlay
          muted
          loop
        >
          <source src="/bg-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='absolute z-10 h-full w-full bg-gradient-to-b from-black/10 from-10% via-black/10 via-60% to-white/80 to-80%'></div>
        <div className='absolute z-10 bottom-0 py-6 px-4'>
          <h1 className='text-[16px] font-bold'>OVERSIZED T's</h1>
          <h4 className='text-[12px] w-[80%]'>Grab the best T's with great discount. Offers available on most of the products. Sold 1M+ products already! Grab today only. <b>YOUNG LA</b></h4>
          <p className="relative w-[14%] text-[14px] mt-2 font-semibold cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">
            Explore
          </p>
        </div>
      </div>
    </div>
  )
}

export default App