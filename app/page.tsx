'use client'

import {FiChevronRight} from "react-icons/fi";
import Places from "@/app/places/page";
import React, {useEffect, useRef, useState} from "react";
import Tours from "@/app/tours/page";

export default function Home() {
  let [placesTitle, setPlaceTitle] = useState<string>("")
  let [places, setPlaces] = useState<string>("")
  let [toursTitle, setTourTitle] = useState<string>("")
  let [tours, setTours] = useState<string>("")
  useEffect(()=>{
    const onScroll: EventListener = async () => {
      const placeTitle = document.querySelector(".place-title")
      const tourTitle = document.querySelector(".tour-title")
      // @ts-ignore
      if (window.scrollY > placeTitle.clientHeight) {
        setPlaceTitle(" title-active")
      }
      else {
        setPlaceTitle("")
      }
      // @ts-ignore
      if (window.scrollY > (placeTitle.clientHeight + 200)) {
        setPlaces(" main-active")
      }
      else {
        setPlaces("")
      }
      // @ts-ignore
      if (window.scrollY > tourTitle.clientHeight + 800) {
        setTourTitle(" title-active")
      }
      else {
        setTourTitle("")
      }
    }
    window.addEventListener("scroll", onScroll)
  })
  return (
    <div className="">
      <div className="bg-[url('/bg.png')] w-full h-[100vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center relative translate-y-[-30%] pointer-events-none">
          <p className="text-white text-[2rem] md:text-[4rem] font-light tracking-[3px]">Travel</p>
          <p className="text-white text-[3rem] md:text-[8rem] font-normal tracking-[3px] md:tracking-[6px] leading-[50px] md:leading-[150px]">Viet Nam</p>
        </div>
      </div>
      <div className=" mt-[30px] md:mt-[50px] lg:mt-[80px] flex flex-col items-center justify-center w-[90%] mx-auto">
        <p className={"place-title translate-y-[-160px] opacity-0 transition-all duration-[800ms] text-[#231d0d] text-[32px] md:text-[45px] font-bold leading-[45px] text-center" + placesTitle}>Địa điểm phổ biến</p>
        <div className="flex gap-[10px] items-center justify-center mt-[15px] mb-[20px] md:mb-[30px] lg:mb-[50px] cursor-pointer">
          <p className="text-[#4366c5] text-base">Xem tất cả</p>
          <FiChevronRight color={"#4366c5"} size={18}/>
        </div>
        <Places places={places}/>
      </div>
      <div className="mt-[80px] flex flex-col items-center justify-center w-[90%] mx-auto">
        <p className={"tour-title translate-y-[-160px] opacity-0 transition-all duration-[800ms] text-[#231d0d] text-[32px] md:text-[45px] font-bold leading-[45px] text-center" + toursTitle }>Tour phổ biến</p>
        <div className="flex gap-[10px] items-center justify-center mt-[15px] mb-[20px] md:mb-[30px] lg:mb-[50px] cursor-pointer">
          <p className="text-[#4366c5] text-base">Xem tất cả</p>
          <FiChevronRight color={"#4366c5"} size={18}/>
        </div>
        <Tours tours={tours}/>
      </div>
    </div>
  )
}
