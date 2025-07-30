import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-black'>
      <div className='relative z-999 bg-green-500 h-[50%] w-[20%] rounded-xl overflow-hidden'>
        {/* rotating div */}
        <div className='absolute z-8 bg-red-200 h-full w-full flex flex-col justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
          <div className='bg-blue-500 h-[30%] mt-6 rounded-b-4xl w-full'></div>
          <div className='bg-blue-500 h-[30%] mb-14 rounded-t-4xl w-full'></div>
        </div>   
        <div className='absolute z-9 h-full w-full bg-gradient-to-b from-black/10 from-10% via-black/10 via-30% to-white to-90%'>
          {/* Bottom Text */}
          <div className='absolute z-10 h-[20%] w-full bottom-2 px-4 '>
            <h1 className='text-[14px] font-semibold'>Fewer Failed Payments</h1>
            <h3 className='text-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis repellat dicta, soluta quam voluptate magni molestiae earum doloremque ratione nulla sunt cupiditate laudantium </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App