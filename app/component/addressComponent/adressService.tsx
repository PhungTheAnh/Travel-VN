'use client'

import React, {useEffect, useRef} from 'react';
import MountainSun from "@/app/component/svg/svg";
import {LuBike} from "react-icons/lu";
import {FaHiking, FaSnowboarding, FaTree, FaUmbrellaBeach} from "react-icons/fa";
import scrollEffect from "@/app/component/function/scrollEffect";

const AddressService = () => {
  const titleServiceRef = useRef<HTMLInputElement | null>(null)
  const mainServiceRef = useRef<HTMLInputElement | null>(null)

  useEffect(()=>{
    const onScroll = () => {
      scrollEffect(titleServiceRef, "title-active")
      scrollEffect(mainServiceRef, "main-active")
    }
    window.addEventListener("scroll", onScroll)
  }, [])
  const section = (title: string, content: string, svg: any) => (
    <div className="relative transition-all delay-1000 duration-300 group z-[1] flex flex-col gap-[15px] shadow-[0px_10px_20px_rgba(0,0,0,.3)] overflow-hidden p-[15px] rounded-xl ">
      <div className="absolute top-0 left-0 w-full h-full bg-[#4366c566] group-hover:bg-[#4366c5] backdrop-blur-[20px] z-[-1]"></div>
      <div className="flex items-center justify-between">
        <p className="text-white text-2xl font-semibold transition-all duration-300">{title}</p>
        <div className="w-[34px] h-[34px] group-hover:animate-wiggle">
          {svg}
        </div>
      </div>
      <p className="text-white text-sm text-left mb-[12px] leading-[25px] line-clamp-8">{content}</p>
    </div>
  )
  return (
    <div className="w-full relative py-[40px] md:py-[60px] xl:py-[80px]">
      <div ref={titleServiceRef} className="relative z-[2] w-full mt-[30px] mb-[15px] flex flex-col items-center gap-[15px] opacity-0 translate-y-[-160px] transition-all duration-1000">
        <p className="text-[30px] md:text-[35px] xl:text-[40px] text-white font-semibold tracking-[2px] uppercase w-[95%] md:w-full text-center">Dịch vụ của chúng tôi</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/banner/dalat2.jpg')] bg-center bg-no-repeat bg-cover bg-fixed"></div>
      <div ref={mainServiceRef} className="w-[95%] mx-auto my-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] z-[1] translate-y-[160px] transition-all duration-1000">
        {section("Ăn uống", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…exercitation ullamco laboris nisi…",  <MountainSun/>)}
        {section("Mua sắm", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…exercitation ullamco laboris nisi…",  <LuBike color={"white"} size={34}/>)}
        {section("Thể thao", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…exercitation ullamco laboris nisi…",  <FaTree color={"white"} size={34}/>)}
        {section("Vui chơi - giải trí", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…exercitation ullamco laboris nisi…",  <FaHiking color={"white"} size={34}/>)}
        {section("Chăm sóc sức khỏe", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…exercitation ullamco laboris nisi…",  <FaSnowboarding color={"white"} size={34}/>)}
        {section("Bãi biển", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…exercitation ullamco laboris nisi…",  <FaUmbrellaBeach color={"white"} size={34}/>)}
      </div>
    </div>
  );
};

export default AddressService;