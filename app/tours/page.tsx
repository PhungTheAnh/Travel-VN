'use client'

import React, {useEffect, useState} from 'react';
import {IoLocationOutline} from "react-icons/io5";
import {FaEye} from "react-icons/fa";
import {IoIosShareAlt} from "react-icons/io";
import {BsArrowRight} from "react-icons/bs";
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";
import {CiTimer} from "react-icons/ci";

const Tours = (props: any) => {
  const {tours} = props
  return (
    <div
      className={"tours slick translate-y-[160px] opacity-1 transition-all duration-[800ms] w-full rounded-xl" + tours || ""}>
      <div className="bg-white shadow-lg p-[15px] rounded-xl w-[400px]">
        <Image src="/tours/codohue3 (1).jpg" alt={"Cố Đô Huế"} width={0}
               height={0}
               sizes="100vw"
               className="w-full object-cover rounded-xl h-[300px] mb-[20px]"></Image>
        <a href=""><p className="text-[#333] text-[24px] font-bold truncate">Hà Nội - Cố Đô Huế - Đồi Vọng Cảnh - Chùa Thiên Mụ</p></a>
        <div className="flex gap-[5px] items-center mb-[6px]">
          <CiTimer size={16} color={"#4366c5"} />
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
        <p className='text-sm text-[#adadad] line-clamp-3 mb-[15px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, laborum nobis
          at facilis nihil totam necessitatibus eligendi id impedit architecto quod suscipit
          minus sit explicabo commodi a fugiat consectetur illo.</p>
        <div className="">
          <p className="text-sm text-[#adadad] font-bold line-through">3,000,000 <span className="underline">đ</span> </p>
          <p className="text-lg leading-[1rem] text-[#4366c5] font-black">3,000,000 <span className="underline">đ</span> </p>
        </div>
        <div className="btn_order absolute right-0 bottom-0">

        </div>
      </div>
    </div>
  );
};

export default Tours;