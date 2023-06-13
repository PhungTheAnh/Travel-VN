'use client'

import React, {useEffect, useRef} from 'react';
import {FiChevronRight} from "react-icons/fi";
import scrollEffect from "@/app/component/function/scrollEffect";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import Slider from "react-slick";
import Image from "next/image";

const Posts = () => {
  const postTitleRef = useRef<HTMLInputElement | null>(null);
  const postMaineRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const onScroll: EventListener = () => {
      scrollEffect(postTitleRef, "title-active")
      scrollEffect(postMaineRef, "main-active")
    }
    window.addEventListener("scroll", onScroll)
  }, [])
  const postSlick = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: true,
    prevArrow: (<FaChevronLeft color={"#4366c5"} size={40}/>),
    nextArrow: (<FaChevronRight color={"#4366c5"} size={40}/>),
    responsive: [
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
    <div
      className="mt-[80px] flex flex-col items-center justify-center w-[96%] lg:w-[90%] xl:w-[80%] mx-auto mb-[120px]">
      <div ref={postTitleRef}
           className={"posts-title translate-y-[-160px] opacity-0 transition-all duration-[800ms]"}>
        <p className={"text-[#231d0d] text-[32px] md:text-[45px] font-bold leading-[45px] text-center"}>Bài viết gần
          đây</p>
        <div
          className="flex gap-[10px] items-center justify-center mt-[15px] mb-[20px] md:mb-[30px] lg:mb-[50px] cursor-pointer">
          <p className="text-[#4366c5] text-base">Xem tất cả</p>
          <FiChevronRight color={"#4366c5"} size={18}/>
        </div>
      </div>
    {/*  */}
      <div ref={postMaineRef} className="posts w-full h-full opacity-0 translate-y-[160px] transition-all duration-500">
        <Slider {...postSlick}>
          <div className="group hover:translate-y-[-30px] h-[460px] md:h-[500px] w-[439px] rounded-xl relative transition-all duration-700">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden z-[1] rounded-xl transition-all duration-500">
              <Image className="group-hover:scale-[1.1] w-full h-full object-cover rounded-xl transition-all duration-300" src={"/posts/ninhbinh2.jpg"} alt={"Ninh Bình"} width={0} height={0} sizes={"100vh"}/>
            </div>
            <div className="transition-all duration-300 absolute bottom-0 left-0 z-[2] w-full p-[20px] xl:p-[30px] rounded-xl bg-[#0000004d] group-hover:bg-[#00000099] cursor-grab">
              <a href=""><p className="cursor-pointer text-lg lg:text-xl xl:text-[24px] text-white hover:text-[#5d85d4] font-semibold mb-[15px] transition-all duration-300">Change your place and get the fresh air</p></a>
              <div className="flex justify-between items-center">
                <p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base">By <span>Admin</span></p>
                <p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base">24/05/2023</p>
                <a className="cursor-pointer" href=""><p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base flex items-center justify-center gap-[3px]">Xem bài viết <FiChevronRight className="text-white hover:text-[#5d85d4]" size={18}/></p></a>
              </div>
            </div>
          </div>
          <div className="group hover:translate-y-[-30px] h-[460px] md:h-[500px] w-[439px] rounded-xl relative transition-all duration-700">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden z-[1] rounded-xl transition-all duration-500">
              <Image className="group-hover:scale-[1.1] w-full h-full object-cover rounded-xl transition-all duration-300" src={"/posts/nhatrang3.jpg"} alt={"Ninh Bình"} width={0} height={0} sizes={"100vh"}/>
            </div>
            <div className="transition-all duration-300 absolute bottom-0 left-0 z-[2] w-full p-[20px] xl:p-[30px] rounded-xl bg-[#0000004d] group-hover:bg-[#00000099] cursor-grab">
              <a href=""><p className="cursor-pointer text-lg lg:text-xl xl:text-[24px] text-white hover:text-[#5d85d4] font-semibold mb-[15px] transition-all duration-300">Change your place and get the fresh air</p></a>
              <div className="flex justify-between items-center">
                <p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base">By <span>Admin</span></p>
                <p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base">24/05/2023</p>
                <a className="cursor-pointer" href=""><p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base flex items-center justify-center gap-[3px]">Xem bài viết <FiChevronRight className="text-white hover:text-[#5d85d4]" size={18}/></p></a>
              </div>
            </div>
          </div>
          <div className="group hover:translate-y-[-30px] h-[460px] md:h-[500px] w-[439px] rounded-xl relative transition-all duration-700">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden z-[1] rounded-xl transition-all duration-500">
              <Image className="group-hover:scale-[1.1] w-full h-full object-cover rounded-xl transition-all duration-300" src={"/posts/phocohoian4.jpg"} alt={"Ninh Bình"} width={0} height={0} sizes={"100vh"}/>
            </div>
            <div className="transition-all duration-300 absolute bottom-0 left-0 z-[2] w-full p-[20px] xl:p-[30px] rounded-xl bg-[#0000004d] group-hover:bg-[#00000099] cursor-grab">
              <a href=""><p className="cursor-pointer text-lg lg:text-xl xl:text-[24px] text-white hover:text-[#5d85d4] font-semibold mb-[15px] transition-all duration-300">Change your place and get the fresh air</p></a>
              <div className="flex justify-between items-center">
                <p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base">By <span>Admin</span></p>
                <p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base">24/05/2023</p>
                <a className="cursor-pointer" href=""><p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base flex items-center justify-center gap-[3px]">Xem bài viết <FiChevronRight className="text-white hover:text-[#5d85d4]" size={18}/></p></a>
              </div>
            </div>
          </div>
          <div className="group hover:translate-y-[-30px] h-[460px] md:h-[500px] w-[439px] rounded-xl relative transition-all duration-700">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden z-[1] rounded-xl transition-all duration-500">
              <Image className="group-hover:scale-[1.1] w-full h-full object-cover rounded-xl transition-all duration-300" src={"/posts/ninhbinh2.jpg"} alt={"Ninh Bình"} width={0} height={0} sizes={"100vh"}/>
            </div>
            <div className="transition-all duration-300 absolute bottom-0 left-0 z-[2] w-full p-[20px] xl:p-[30px] rounded-xl bg-[#0000004d] group-hover:bg-[#00000099] cursor-grab">
              <a href=""><p className="cursor-pointer text-lg lg:text-xl xl:text-[24px] text-white hover:text-[#5d85d4] font-semibold mb-[15px] transition-all duration-300">Change your place and get the fresh air</p></a>
              <div className="flex justify-between items-center">
                <p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base">By <span>Admin</span></p>
                <p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base">24/05/2023</p>
                <a className="cursor-pointer" href=""><p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base flex items-center justify-center gap-[3px]">Xem bài viết <FiChevronRight className="text-white hover:text-[#5d85d4]" size={18}/></p></a>
              </div>
            </div>
          </div>
          <div className="group hover:translate-y-[-30px] h-[460px] md:h-[500px] w-[439px] rounded-xl relative transition-all duration-700">
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden z-[1] rounded-xl transition-all duration-500">
              <Image className="group-hover:scale-[1.1] w-full h-full object-cover rounded-xl transition-all duration-300" src={"/posts/phocohoian4.jpg"} alt={"Ninh Bình"} width={0} height={0} sizes={"100vh"}/>
            </div>
            <div className="transition-all duration-300 absolute bottom-0 left-0 z-[2] w-full p-[20px] xl:p-[30px] rounded-xl bg-[#0000004d] group-hover:bg-[#00000099] cursor-grab">
              <a href=""><p className="cursor-pointer text-lg lg:text-xl xl:text-[24px] text-white hover:text-[#5d85d4] font-semibold mb-[15px] transition-all duration-300">Change your place and get the fresh air</p></a>
              <div className="flex justify-between items-center">
                <p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base">By <span>Admin</span></p>
                <p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base">24/05/2023</p>
                <a className="cursor-pointer" href=""><p className="truncate text-white hover:text-[#5d85d4] text-base lg:text-[13px] xl:text-base flex items-center justify-center gap-[3px]">Xem bài viết <FiChevronRight className="text-white hover:text-[#5d85d4]" size={18}/></p></a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Posts;