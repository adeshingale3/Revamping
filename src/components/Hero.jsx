import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#57CC02] min-h-screen w-full flex flex-col items-center justify-center relative px-4 text-center">
      <h1 className="font-semibold text-black text-4xl sm:text-5xl md:text-6xl leading-tight">
        Duolingo, Because <br />
        <span className="text-red-500">'small talk'</span> shouldn't be scary.
      </h1>

      <h3 className="text-white text-base sm:text-lg mt-6">
        You have mastered every excuse except the language you wanted to learn.
      </h3>

      <button className="mt-8 h-12 px-6 bg-white text-black font-semibold cursor-pointer rounded-xl shadow-md hover:shadow-lg transition">
        Start Your Journey
      </button>

      <p className="mt-4 text-sm cursor-pointer">
        Already have an account?
      </p>

      <img
        src="/Duolingo.png"
        alt="Duolingo Mascot"
        className="mt-10 w-52 sm:w-64 drop-shadow-xl"
      />

        <div className='h-20 w-50 bottom-100 left-40 z-4 flex flex-col items-center justify-between absolute rotate-[5deg] gap-2 '>
            <img src='/india.jpeg' className='rounded-xl shadow-xl border-4 border-white'/>
            <h3 id='flag' className='font-sm text-semibold'>नमस्ते</h3>
        </div>
        <div className='h-20 w-50 bottom-30 left-40 z-4 flex flex-col items-center justify-between absolute rotate-[20deg] gap-2 '>
            <img src='/italy.jpeg' className='rounded-xl shadow-xl border-4 border-white'/>
            <h3 id='flag' className='font-sm text-semibold'>Banjour</h3>
        </div>

        <div className='h-20 w-50 bottom-100 right-40 z-4 flex flex-col items-center justify-between absolute rotate-[-5deg] gap-2 '>
            <img src='/England.jpeg' className='rounded-xl shadow-xl border-4 border-white'/>
            <h3 id='flag' className='font-sm text-semibold'>Hello</h3>
        </div>

        <div className='h-20 w-50 bottom-30 right-40 z-4 flex flex-col items-center justify-between absolute rotate-[-30deg] gap-2 '>
            <img src='/spain.jpeg' className='rounded-xl shadow-xl border-4 border-white'/>
            <h3 id='flag' className='font-sm text-semibold'>Holla</h3>
        </div>
    </div>
  );
};

export default Hero;
