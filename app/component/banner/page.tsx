import React from 'react';

const Banner = () => {
  return (
    <div className="bg-[url('/banner/bg.png')] bg-no-repeat bg-cover w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center relative translate-y-[-30%] pointer-events-none">
        <p className="text-white text-[2rem] md:text-[4rem] font-light tracking-[3px]">Travel</p>
        <p
          className="text-white text-[3rem] md:text-[8rem] font-normal tracking-[3px] md:tracking-[6px] leading-[50px] md:leading-[150px]">Viet
          Nam</p>
      </div>
    </div>
  );
};

export default Banner;