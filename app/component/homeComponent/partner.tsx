'use client'

import React, {useEffect, useRef} from 'react';
import {FiChevronRight} from "react-icons/fi";
import scrollEffect from "@/app/component/function/scrollEffect";
import Slider from "react-slick";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import Image from "next/image";

const Partner = () => {
  const partnerTitleRef = useRef<HTMLInputElement | null>(null);
  const partnerMainRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const onScroll: EventListener = () => {
      scrollEffect(partnerTitleRef, "title-active")
      scrollEffect(partnerMainRef, "main-active")
    }
    window.addEventListener("scroll", onScroll)
  }, [])

  const partnerSlick = {
    slidesToShow: 5,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div
      className=" mt-[30px] md:mt-[50px] lg:mt-[80px] flex flex-col items-center justify-center w-[96%] lg:w-[90%] xl:w-[80%] mx-auto">
      <div ref={partnerTitleRef}
           className={"place-title translate-y-[-160px] opacity-0 transition-all duration-[800ms]"}>
        <p className={"text-[#231d0d] text-[32px] md:text-[45px] font-bold leading-[45px] text-center"}>Địa điểm phổ
          biến</p>
        <div
          className="flex gap-[10px] items-center justify-center mt-[15px] mb-[20px] md:mb-[30px] lg:mb-[50px] cursor-pointer">
          <p className="text-primary text-base">Xem tất cả</p>
          <FiChevronRight color={"#4366c5"} size={18}/>
        </div>
      </div>
      <div ref={partnerMainRef} className="partners w-full h-full mb-[150px] transition-all duration-700 opacity-0 translate-y-[160px]">
        <Slider {...partnerSlick}>
          <div className="w-full h-full !flex items-center justify-center pb-[30px] border-b border-[#94999f]">
            <Image src={"/partner/logo-pinterest.png"} alt={"Partner"} width={0} height={0} sizes={"100vh"} unoptimized className="w-[130px] h-[130px] rounded-full object-cover"/>
          </div>
          <div className="w-full h-full !flex items-center justify-center pb-[30px] border-b border-[#94999f]">
            <Image src={"/partner/logo-pinterest.png"} alt={"Partner"} width={0} height={0} sizes={"100vh"} unoptimized className="w-[130px] h-[130px] rounded-full object-cover"/>
          </div>
          <div className="w-full h-full !flex items-center justify-center pb-[30px] border-b border-[#94999f]">
            <Image src={"/partner/logo-pinterest.png"} alt={"Partner"} width={0} height={0} sizes={"100vh"} unoptimized className="w-[130px] h-[130px] rounded-full object-cover"/>
          </div>
          <div className="w-full h-full !flex items-center justify-center pb-[30px] border-b border-[#94999f]">
            <Image src={"/partner/logo-pinterest.png"} alt={"Partner"} width={0} height={0} sizes={"100vh"} unoptimized className="w-[130px] h-[130px] rounded-full object-cover"/>
          </div>
          <div className="w-full h-full !flex items-center justify-center pb-[30px] border-b border-[#94999f]">
            <Image src={"/partner/logo-pinterest.png"} alt={"Partner"} width={0} height={0} sizes={"100vh"} unoptimized className="w-[130px] h-[130px] rounded-full object-cover"/>
          </div>
          <div className="w-full h-full !flex items-center justify-center pb-[30px] border-b border-[#94999f]">
            <Image src={"/partner/logo-pinterest.png"} alt={"Partner"} width={0} height={0} sizes={"100vh"} unoptimized className="w-[130px] h-[130px] rounded-full object-cover"/>
          </div>
          <div className="w-full h-full !flex items-center justify-center pb-[30px] border-b border-[#94999f]">
            <Image src={"/partner/logo-pinterest.png"} alt={"Partner"} width={0} height={0} sizes={"100vh"} unoptimized className="w-[130px] h-[130px] rounded-full object-cover"/>
          </div>
          <div className="w-full h-full !flex items-center justify-center pb-[30px] border-b border-[#94999f]">
            <Image src={"/partner/logo-pinterest.png"} alt={"Partner"} width={0} height={0} sizes={"100vh"} unoptimized className="w-[130px] h-[130px] rounded-full object-cover"/>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Partner;