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
          <div className="bg-white transition-all duration-300 outline-0 p-[15px] rounded-xl relative">
            <div className="h-[300px] mb-[20px] rounded-xl shadow-lg">
              <Image src="/tours/codohue3 (1).jpg" alt={"Cố Đô Huế"} width={0}
                     height={0}
                     sizes="100vw"
                     className="w-full h-full object-cover rounded-xl "></Image>
            </div>
            <Link href="#"><p className="text-[#333] text-[24px] font-bold truncate">Hà Nội - Cố Đô Huế - Đồi Vọng Cảnh - Chùa
              Thiên Mụ</p></Link>
            <div className="flex gap-[5px] items-center mb-[6px]">
              <CiTimer size={16} color={"#4366c5"}/>
              <p className='text-sm text-[#adadad]'>3 Ngày</p>
              <p className='text-sm text-[#adadad]'>2 Đêm</p>
            </div>
            <div className="flex gap-[10px] items-center mb-[10px]">
              <div className="flex gap-[2px] items-center">
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
              </div>
              <p className='text-sm text-[#adadad]'>(105 Đánh giá)</p>
            </div>
            <p className='text-sm text-[#adadad] line-clamp-3 mb-[15px]'>Lorem ipsum dolor sit amet consectetur,
              adipisicing
              elit. Aspernatur, laborum nobis
              at facilis nihil totam necessitatibus eligendi id impedit architecto quod suscipit
              minus sit explicabo commodi a fugiat consectetur illo.</p>
            <div className="">
              <p className="text-sm text-[#adadad] font-bold line-through">3,000,000 <span className="underline">đ</span>
              </p>
              <p className="text-lg leading-[1rem] text-primary font-black">3,000,000 <span
                className="underline">đ</span>
              </p>
            </div>
            <div
              className="group btn_order min-w-[150px] xl:min-w-[175px] hover:delay-1000 flex gap-1.5 items-center justify-center py-1.5 xl:py-2.5 rounded-xl rounded-tl-[50px] rounded-bl-[5px] absolute right-0 bottom-0">
              <p
                className="group-hover:text-[0px] group-hover:translate-x-[35px] text-white text-sm xl:text-base font-[300] transition-all duration-300">Đặt
                Tour ngay</p>
              <AiOutlineShoppingCart className="group-hover:animate-wiggle" size={24} color={"white"}/>
            </div>
          </div>
          <div className="bg-white transition-all duration-300 outline-0 p-[15px] rounded-xl relative">
            <div className="h-[300px] mb-[20px] rounded-xl shadow-lg">
              <Image src="/tours/codohue3 (1).jpg" alt={"Cố Đô Huế"} width={0}
                     height={0}
                     sizes="100vw"
                     className="w-full h-full object-cover rounded-xl "></Image>
            </div>
            <Link href="#"><p className="text-[#333] text-[24px] font-bold truncate">Hà Nội - Cố Đô Huế - Đồi Vọng Cảnh - Chùa
              Thiên Mụ</p></Link>
            <div className="flex gap-[5px] items-center mb-[6px]">
              <CiTimer size={16} color={"#4366c5"}/>
              <p className='text-sm text-[#adadad]'>3 Ngày</p>
              <p className='text-sm text-[#adadad]'>2 Đêm</p>
            </div>
            <div className="flex gap-[10px] items-center mb-[10px]">
              <div className="flex gap-[2px] items-center">
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
              </div>
              <p className='text-sm text-[#adadad]'>(105 Đánh giá)</p>
            </div>
            <p className='text-sm text-[#adadad] line-clamp-3 mb-[15px]'>Lorem ipsum dolor sit amet consectetur,
              adipisicing
              elit. Aspernatur, laborum nobis
              at facilis nihil totam necessitatibus eligendi id impedit architecto quod suscipit
              minus sit explicabo commodi a fugiat consectetur illo.</p>
            <div className="">
              <p className="text-sm text-[#adadad] font-bold line-through">3,000,000 <span className="underline">đ</span>
              </p>
              <p className="text-lg leading-[1rem] text-primary font-black">3,000,000 <span
                className="underline">đ</span>
              </p>
            </div>
            <div
              className="group btn_order min-w-[150px] xl:min-w-[175px] hover:delay-1000 flex gap-1.5 items-center justify-center py-1.5 xl:py-2.5 rounded-xl rounded-tl-[50px] rounded-bl-[5px] absolute right-0 bottom-0">
              <p
                className="group-hover:text-[0px] group-hover:translate-x-[35px] text-white text-sm xl:text-base font-[300] transition-all duration-300">Đặt
                Tour ngay</p>
              <AiOutlineShoppingCart className="group-hover:animate-wiggle" size={24} color={"white"}/>
            </div>
          </div>
          <div className="bg-white transition-all duration-300 outline-0 p-[15px] rounded-xl relative">
            <div className="h-[300px] mb-[20px] rounded-xl shadow-lg">
              <Image src="/tours/codohue3 (1).jpg" alt={"Cố Đô Huế"} width={0}
                     height={0}
                     sizes="100vw"
                     className="w-full h-full object-cover rounded-xl "></Image>
            </div>
            <Link href="#"><p className="text-[#333] text-[24px] font-bold truncate">Hà Nội - Cố Đô Huế - Đồi Vọng Cảnh - Chùa
              Thiên Mụ</p></Link>
            <div className="flex gap-[5px] items-center mb-[6px]">
              <CiTimer size={16} color={"#4366c5"}/>
              <p className='text-sm text-[#adadad]'>3 Ngày</p>
              <p className='text-sm text-[#adadad]'>2 Đêm</p>
            </div>
            <div className="flex gap-[10px] items-center mb-[10px]">
              <div className="flex gap-[2px] items-center">
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
              </div>
              <p className='text-sm text-[#adadad]'>(105 Đánh giá)</p>
            </div>
            <p className='text-sm text-[#adadad] line-clamp-3 mb-[15px]'>Lorem ipsum dolor sit amet consectetur,
              adipisicing
              elit. Aspernatur, laborum nobis
              at facilis nihil totam necessitatibus eligendi id impedit architecto quod suscipit
              minus sit explicabo commodi a fugiat consectetur illo.</p>
            <div className="">
              <p className="text-sm text-[#adadad] font-bold line-through">3,000,000 <span className="underline">đ</span>
              </p>
              <p className="text-lg leading-[1rem] text-primary font-black">3,000,000 <span
                className="underline">đ</span>
              </p>
            </div>
            <div
              className="group btn_order min-w-[150px] xl:min-w-[175px] hover:delay-1000 flex gap-1.5 items-center justify-center py-1.5 xl:py-2.5 rounded-xl rounded-tl-[50px] rounded-bl-[5px] absolute right-0 bottom-0">
              <p
                className="group-hover:text-[0px] group-hover:translate-x-[35px] text-white text-sm xl:text-base font-[300] transition-all duration-300">Đặt
                Tour ngay</p>
              <AiOutlineShoppingCart className="group-hover:animate-wiggle" size={24} color={"white"}/>
            </div>
          </div>
          <div className="bg-white transition-all duration-300 outline-0 p-[15px] rounded-xl relative">
            <div className="h-[300px] mb-[20px] rounded-xl shadow-lg">
              <Image src="/tours/codohue3 (1).jpg" alt={"Cố Đô Huế"} width={0}
                     height={0}
                     sizes="100vw"
                     className="w-full h-full object-cover rounded-xl "></Image>
            </div>
            <Link href="#"><p className="text-[#333] text-[24px] font-bold truncate">Hà Nội - Cố Đô Huế - Đồi Vọng Cảnh - Chùa
              Thiên Mụ</p></Link>
            <div className="flex gap-[5px] items-center mb-[6px]">
              <CiTimer size={16} color={"#4366c5"}/>
              <p className='text-sm text-[#adadad]'>3 Ngày</p>
              <p className='text-sm text-[#adadad]'>2 Đêm</p>
            </div>
            <div className="flex gap-[10px] items-center mb-[10px]">
              <div className="flex gap-[2px] items-center">
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
              </div>
              <p className='text-sm text-[#adadad]'>(105 Đánh giá)</p>
            </div>
            <p className='text-sm text-[#adadad] line-clamp-3 mb-[15px]'>Lorem ipsum dolor sit amet consectetur,
              adipisicing
              elit. Aspernatur, laborum nobis
              at facilis nihil totam necessitatibus eligendi id impedit architecto quod suscipit
              minus sit explicabo commodi a fugiat consectetur illo.</p>
            <div className="">
              <p className="text-sm text-[#adadad] font-bold line-through">3,000,000 <span className="underline">đ</span>
              </p>
              <p className="text-lg leading-[1rem] text-primary font-black">3,000,000 <span
                className="underline">đ</span>
              </p>
            </div>
            <div
              className="group btn_order min-w-[150px] xl:min-w-[175px] hover:delay-1000 flex gap-1.5 items-center justify-center py-1.5 xl:py-2.5 rounded-xl rounded-tl-[50px] rounded-bl-[5px] absolute right-0 bottom-0">
              <p
                className="group-hover:text-[0px] group-hover:translate-x-[35px] text-white text-sm xl:text-base font-[300] transition-all duration-300">Đặt
                Tour ngay</p>
              <AiOutlineShoppingCart className="group-hover:animate-wiggle" size={24} color={"white"}/>
            </div>
          </div>
          <div className="bg-white transition-all duration-300 outline-0 p-[15px] rounded-xl relative">
            <div className="h-[300px] mb-[20px] rounded-xl shadow-lg">
              <Image src="/tours/codohue3 (1).jpg" alt={"Cố Đô Huế"} width={0}
                     height={0}
                     sizes="100vw"
                     className="w-full h-full object-cover rounded-xl "></Image>
            </div>
            <Link href="#"><p className="text-[#333] text-[24px] font-bold truncate">Hà Nội - Cố Đô Huế - Đồi Vọng Cảnh - Chùa
              Thiên Mụ</p></Link>
            <div className="flex gap-[5px] items-center mb-[6px]">
              <CiTimer size={16} color={"#4366c5"}/>
              <p className='text-sm text-[#adadad]'>3 Ngày</p>
              <p className='text-sm text-[#adadad]'>2 Đêm</p>
            </div>
            <div className="flex gap-[10px] items-center mb-[10px]">
              <div className="flex gap-[2px] items-center">
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
                <AiFillStar size={14} color={"#ffa11a"}/>
              </div>
              <p className='text-sm text-[#adadad]'>(105 Đánh giá)</p>
            </div>
            <p className='text-sm text-[#adadad] line-clamp-3 mb-[15px]'>Lorem ipsum dolor sit amet consectetur,
              adipisicing
              elit. Aspernatur, laborum nobis
              at facilis nihil totam necessitatibus eligendi id impedit architecto quod suscipit
              minus sit explicabo commodi a fugiat consectetur illo.</p>
            <div className="">
              <p className="text-sm text-[#adadad] font-bold line-through">3,000,000 <span className="underline">đ</span>
              </p>
              <p className="text-lg leading-[1rem] text-primary font-black">3,000,000 <span
                className="underline">đ</span>
              </p>
            </div>
            <div
              className="group btn_order min-w-[150px] xl:min-w-[175px] hover:delay-1000 flex gap-1.5 items-center justify-center py-1.5 xl:py-2.5 rounded-xl rounded-tl-[50px] rounded-bl-[5px] absolute right-0 bottom-0">
              <p
                className="group-hover:text-[0px] group-hover:translate-x-[35px] text-white text-sm xl:text-base font-[300] transition-all duration-300">Đặt
                Tour ngay</p>
              <AiOutlineShoppingCart className="group-hover:animate-wiggle" size={24} color={"white"}/>
            </div>
          </div>
        </Slider>
      </div>
    </div>

  );
};

export default Tours;