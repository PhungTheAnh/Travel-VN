'use client'

import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import {AiFillStar, AiOutlineShoppingCart} from "react-icons/ai";
import {CiTimer} from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scrollEffect from "@/app/component/function/scrollEffect";
import {FiChevronRight} from "react-icons/fi";
import Link from "next/link";
import SlickArrowLeft from "@/app/component/slickArrow/slickArrowLeft";
import SlickArrowRight from "@/app/component/slickArrow/slickArrowRight";
import TourItem from "@/app/component/toursComponent/tourItem";

const Tours = () => {
  const tourTitleRef = useRef<HTMLInputElement | null>(null);
  const tourMainRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const onScroll: EventListener = () => {
      scrollEffect(tourTitleRef, "title-active")
      scrollEffect(tourMainRef, "main-active")

    }
    window.addEventListener("scroll", onScroll)
  }, [])

  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: true,
    // @ts-ignore
    prevArrow: <SlickArrowLeft/>,
    // @ts-ignore
    nextArrow: <SlickArrowRight/>,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  };
  return (
    <div className="mt-[80px] flex flex-col items-center justify-center w-[96%] lg:w-[90%] xl:w-[80%] mx-auto mb-[120px]">
      <div ref={tourTitleRef}
           className={"tour-title translate-y-[-160px] opacity-0 transition-all duration-[800ms]"}>
        <p className={"text-[#231d0d] text-[32px] md:text-[45px] font-bold leading-[45px] text-center"}>Tour phổ
          biến</p>
        <div
          className="flex gap-[10px] items-center justify-center mt-[15px] mb-[20px] md:mb-[30px] lg:mb-[50px] cursor-pointer">
          <p className="text-primary text-base">Xem tất cả</p>
          <FiChevronRight color={"#4366c5"} size={18}/>
        </div>
      </div>
      {/**/}
      <div ref={tourMainRef}
           className={"tours translate-y-[160px] opacity-0 transition-all duration-[800ms] w-full rounded-xl"}>
        <Slider className="flex justify-between items-center" {...settings}>
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
          <TourItem />
        </Slider>
      </div>
    </div>

  );
};

export default Tours;