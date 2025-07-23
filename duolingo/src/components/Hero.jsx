import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#EFEFEF] min-h-screen w-full flex flex-col items-center justify-center relative px-4 text-center">
      <h1 className="font-bold text-black text-4xl sm:text-5xl md:text-6xl leading-tight">
        Duolingo, Because <br />
        <span className="text-red-500">'small talk'</span> shouldn't be scary.
      </h1>

      <h3 className="text-black text-base sm:text-lg mt-6">
        You have mastered every excuse except the language you wanted to learn.
      </h3>

      <button className="mt-8 h-12 px-6 bg-green-500 text-black font-semibold cursor-pointer rounded-xl shadow-md hover:shadow-lg transition hover:scale-105 duration-300">
        Start Your Journey
      </button>

      <p className="mt-4 text-sm cursor-pointer font-semibold hover:text-green-400 duration-300">
        Already have an account?
      </p>
      <img
        src="/Duolingo.png"
        alt="Duolingo Mascot"
        className="mt-10 w-52 sm:w-64 drop-shadow-xl"
      />
      {/* INDIA */}
<div className="h-20 w-50 z-40 flex hidden sm:block flex-col items-center justify-between absolute rotate-[5deg] gap-2 left-40 " style={{ bottom: "25rem" }}>
  <img src="/india.jpeg" className=" rounded-xl shadow-xl border-4 border-white" />
  <h3 id='flag' className="text-sm font-semibold sm:left-0">नमस्ते</h3>
</div>

{/* ITALY */}
<div className="h-20 w-50 z-40 flex hidden sm:block flex-col items-center justify-between absolute rotate-[20deg] gap-2 left-40 " style={{ bottom: "10rem" }}>
  <img src="/italy.jpeg" className=" rounded-xl shadow-xl border-4 border-white" />
  <h3 id='flag' className="text-sm font-semibold sm:left-0">Banjour</h3>
</div>

{/* ENGLAND */}
<div className="h-20 w-50 z-40 flex hidden sm:block flex-col items-center justify-between absolute rotate-[-5deg] gap-2 right-40 " style={{ bottom: "25rem" }}>
  <img src="/England.jpeg" className=" rounded-xl shadow-xl border-4 border-white" />
  <h3 id='flag' className="text-sm font-semibold sm:right-0">Hello</h3>
</div>

{/* SPAIN */}
<div className="h-20 w-50 z-40 flex hidden sm:block flex-col items-center justify-between absolute rotate-[-30deg] gap-2 right-40 " style={{ bottom: "10rem" }}>
  <img src="/spain.jpeg" className=" rounded-xl shadow-xl border-4 border-white" />
  <h3 id='flag' className="text-sm font-semibold sm:right-0">Holla</h3>
</div>

    </div>
  );
};

export default Hero;
