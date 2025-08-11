import React from 'react';
import { MaskedBG } from 'wavyjs';

const Hero = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative px-4 text-center">
      <h1 className="absolute font-bold text-black text-2xl sm:text-4xl md:text-5xl leading-tight top-40 z-10">
        Duolingo, Because <br />
        <span className="text-red-500">'small talk'</span> shouldn't be scary.
      </h1>

      <h3 className="absolute text-black text-base sm:text-sm mt-6 top-65">
        You have mastered every excuse except the language you wanted to learn.
      </h3>

      <button className="absolute z-10 top-80 h-12 px-6 bg-green-500 text-black font-semibold cursor-pointer rounded-xl shadow-md hover:shadow-lg transition hover:scale-105 duration-300">
        Start Your Journey
      </button>

      <p className="absolute z-10 text-sm cursor-pointer top-95 font-semibold hover:text-green-400 duration-300">
        Already have an account?
      </p>
      <div className='absolute z-5 h-85 w-85 flex items-center top-98 mt-2 text-sm font-semibold'>
        <img
        src="/duolingo-logo.png"
        alt="Duolingo Mascot"
        // className="absolute scale-125 sm:w-64 drop-shadow-xl bottom-15 z-5"
      />
      </div>
      
      {/* INDIA */}
<div className="h-20 w-50 z-40 flex hidden sm:block flex-col items-center justify-between absolute rotate-[5deg] gap-2 left-60 " style={{ bottom: "25rem" }}>
  <img src="/india.jpeg" className=" rounded-xl shadow-2xl shadow-orange-500 border-4 border-white" />
  <h3 id='flag' className="text-sm font-semibold sm:left-0">नमस्ते</h3>
</div>

{/* ITALY */}
<div className="h-20 w-50 z-40 flex hidden sm:block flex-col items-center justify-between absolute rotate-[20deg] gap-2 left-60 " style={{ bottom: "10rem" }}>
  <img src="/italy.jpeg" className=" rounded-xl shadow-2xl shadow-green-500 border-4 border-white" />
  <h3 id='flag' className="text-sm font-semibold sm:left-0">Banjour</h3>
</div>

{/* ENGLAND */}
<div className="h-20 w-50 z-40 flex hidden sm:block flex-col items-center justify-between absolute rotate-[-5deg] gap-2 right-60 " style={{ bottom: "25rem" }}>
  <img src="/England.jpeg" className=" rounded-xl shadow-2xl shadow-red-500 border-4 border-white" />
  <h3 id='flag' className="text-sm font-semibold sm:right-0">Hello</h3>
</div>

{/* SPAIN */}
<div className="h-20 w-50 z-40 flex hidden sm:block flex-col items-center justify-between absolute rotate-[-30deg] gap-2 right-60 " style={{ bottom: "10rem" }}>
  <img src="/spain.jpeg" className=" rounded-xl shadow-2xl shadow-yellow-500 border-4 border-white" />
  <h3 id='flag' className="text-sm font-semibold sm:right-0">Holla</h3>
</div>

    </div>
  );
};

export default Hero;
