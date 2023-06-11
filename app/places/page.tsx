'use client'

import React, {useEffect, useState} from 'react';
import {IoLocationOutline} from "react-icons/io5";
import {FaEye} from "react-icons/fa";
import {IoIosShareAlt} from "react-icons/io";
import {BsArrowRight} from "react-icons/bs";

const Places = (props : any) => {
  const {places} = props
  return (
    <div className={"places translate-y-[160px] opacity-0 transition-all duration-[800ms] w-full grid grid-cols-1 grid-rows-5 md:grid-rows-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-rows-2 gap-[15px] rounded-xl overflow-hidden" + places || ""}>
      {/**/}
      <div className="group md:col-span-2 xl:row-span-2 w-full bg-[url('/places/hohoankiem.jpg')] bg-cover rounded-xl relative">
        <div className="w-full absolute bottom-0 left-0">
          <div className="p-3 flex flex-col gap-[5px]">
            <p className="text-white text-sm md:text-base xl:text-[20px] font-semibold">Hồ Hoàn Kiếm</p>
            <div className="flex gap-[5px] items-center">
              <IoLocationOutline color={"white"} size={18}/>
              <p className="text-xs md:text-sm xl:text-base text-white">Hà Nội</p>
            </div>
          </div>
          {/**/}
          <div className="group-hover:opacity-100 group-hover:py-5 transition-all duration-300 py-0 opacity-0 bg-[#0000004d] px-3 flex justify-between rounded-bl-xl rounded-br-xl">
            <div className="flex gap-[20px]">
              <div className="flex gap-[5px] items-center">
                <FaEye className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">21</p>
              </div>
              <div className="flex gap-[5px] items-center">
                <IoIosShareAlt className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">10</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center cursor-pointer">
              <p className="text-white text-sm">Xem chi tiết</p>
              <BsArrowRight color={"white"}/>
            </div>
          </div>
        </div>
      </div>
      {/**/}
      <div className="group w-full h-[300px] md:h-[230px] xl:h-[230px] bg-[url('/places/ninhbinh.jpg')] bg-cover rounded-xl relative">
        <div className="w-full absolute bottom-0 left-0">
          <div className="p-3 flex flex-col gap-[5px]">
            <p className="text-white md:text-base xl:text-[20px] font-semibold">Hồ Hoàn Kiếm</p>
            <div className="flex gap-[5px] items-center">
              <IoLocationOutline color={"white"} size={18}/>
              <p className="md:text-sm xl:text-base text-white">Hà Nội</p>
            </div>
          </div>
          {/**/}
          <div className="group-hover:opacity-100 group-hover:py-5 transition-all duration-300 py-0 opacity-0 bg-[#0000004d] px-3 flex justify-between rounded-bl-xl rounded-br-xl">
            <div className="flex gap-[20px]">
              <div className="flex gap-[5px] items-center">
                <FaEye className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">21</p>
              </div>
              <div className="flex gap-[5px] items-center">
                <IoIosShareAlt className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">10</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center cursor-pointer">
              <p className="text-white text-sm">Xem chi tiết</p>
              <BsArrowRight color={"white"}/>
            </div>
          </div>
        </div>
      </div>
      <div className="group w-full h-[300px] md:h-[230px] xl:h-[230px] bg-[url('/places/ninhbinh.jpg')] bg-cover rounded-xl relative">
        <div className="w-full absolute bottom-0 left-0">
          <div className="p-3 flex flex-col gap-[5px]">
            <p className="text-white md:text-base xl:text-[20px] font-semibold">Hồ Hoàn Kiếm</p>
            <div className="flex gap-[5px] items-center">
              <IoLocationOutline color={"white"} size={18}/>
              <p className="md:text-sm xl:text-base text-white">Hà Nội</p>
            </div>
          </div>
          {/**/}
          <div className="group-hover:opacity-100 group-hover:py-5 transition-all duration-300 py-0 opacity-0 bg-[#0000004d] px-3 flex justify-between rounded-bl-xl rounded-br-xl">
            <div className="flex gap-[20px]">
              <div className="flex gap-[5px] items-center">
                <FaEye className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">21</p>
              </div>
              <div className="flex gap-[5px] items-center">
                <IoIosShareAlt className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">10</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center cursor-pointer">
              <p className="text-white text-sm">Xem chi tiết</p>
              <BsArrowRight color={"white"}/>
            </div>
          </div>
        </div>
      </div>
      <div className="group w-full h-[300px] md:h-[230px] xl:h-[230px] bg-[url('/places/ninhbinh.jpg')] bg-cover rounded-xl relative">
        <div className="w-full absolute bottom-0 left-0">
          <div className="p-3 flex flex-col gap-[5px]">
            <p className="text-white md:text-base xl:text-[20px] font-semibold">Hồ Hoàn Kiếm</p>
            <div className="flex gap-[5px] items-center">
              <IoLocationOutline color={"white"} size={18}/>
              <p className="md:text-sm xl:text-base text-white">Hà Nội</p>
            </div>
          </div>
          {/**/}
          <div className="group-hover:opacity-100 group-hover:py-5 transition-all duration-300 py-0 opacity-0 bg-[#0000004d] px-3 flex justify-between rounded-bl-xl rounded-br-xl">
            <div className="flex gap-[20px]">
              <div className="flex gap-[5px] items-center">
                <FaEye className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">21</p>
              </div>
              <div className="flex gap-[5px] items-center">
                <IoIosShareAlt className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">10</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center cursor-pointer">
              <p className="text-white text-sm">Xem chi tiết</p>
              <BsArrowRight color={"white"}/>
            </div>
          </div>
        </div>
      </div>
      <div className="group w-full h-[300px] md:h-[230px] xl:h-[230px] bg-[url('/places/ninhbinh.jpg')] bg-cover rounded-xl relative">
        <div className="w-full absolute bottom-0 left-0">
          <div className="p-3 flex flex-col gap-[5px]">
            <p className="text-white md:text-base xl:text-[20px] font-semibold">Hồ Hoàn Kiếm</p>
            <div className="flex gap-[5px] items-center">
              <IoLocationOutline color={"white"} size={18}/>
              <p className="md:text-sm xl:text-base text-white">Hà Nội</p>
            </div>
          </div>
          {/**/}
          <div className="group-hover:opacity-100 group-hover:py-5 transition-all duration-300 py-0 opacity-0 bg-[#0000004d] px-3 flex justify-between rounded-bl-xl rounded-br-xl">
            <div className="flex gap-[20px]">
              <div className="flex gap-[5px] items-center">
                <FaEye className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">21</p>
              </div>
              <div className="flex gap-[5px] items-center">
                <IoIosShareAlt className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">10</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center cursor-pointer">
              <p className="text-white text-sm">Xem chi tiết</p>
              <BsArrowRight color={"white"}/>
            </div>
          </div>
        </div>
      </div>
      <div className="group w-full h-[300px] md:h-[230px] xl:h-[230px] bg-[url('/places/ninhbinh.jpg')] bg-cover rounded-xl relative">
        <div className="w-full absolute bottom-0 left-0">
          <div className="p-3 flex flex-col gap-[5px]">
            <p className="text-white md:text-base xl:text-[20px] font-semibold">Hồ Hoàn Kiếm</p>
            <div className="flex gap-[5px] items-center">
              <IoLocationOutline color={"white"} size={18}/>
              <p className="md:text-sm xl:text-base text-white">Hà Nội</p>
            </div>
          </div>
          {/**/}
          <div className="group-hover:opacity-100 group-hover:py-5 transition-all duration-300 py-0 opacity-0 bg-[#0000004d] px-3 flex justify-between rounded-bl-xl rounded-br-xl">
            <div className="flex gap-[20px]">
              <div className="flex gap-[5px] items-center">
                <FaEye className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">21</p>
              </div>
              <div className="flex gap-[5px] items-center">
                <IoIosShareAlt className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">10</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center cursor-pointer">
              <p className="text-white text-sm">Xem chi tiết</p>
              <BsArrowRight color={"white"}/>
            </div>
          </div>
        </div>
      </div>
      <div className="group w-full h-[300px] md:h-[230px] xl:h-[230px] bg-[url('/places/ninhbinh.jpg')] bg-cover rounded-xl relative">
        <div className="w-full absolute bottom-0 left-0">
          <div className="p-3 flex flex-col gap-[5px]">
            <p className="text-white md:text-base xl:text-[20px] font-semibold">Hồ Hoàn Kiếm</p>
            <div className="flex gap-[5px] items-center">
              <IoLocationOutline color={"white"} size={18}/>
              <p className="md:text-sm xl:text-base text-white">Hà Nội</p>
            </div>
          </div>
          {/**/}
          <div className="group-hover:opacity-100 group-hover:py-5 transition-all duration-300 py-0 opacity-0 bg-[#0000004d] px-3 flex justify-between rounded-bl-xl rounded-br-xl">
            <div className="flex gap-[20px]">
              <div className="flex gap-[5px] items-center">
                <FaEye className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">21</p>
              </div>
              <div className="flex gap-[5px] items-center">
                <IoIosShareAlt className="cursor-pointer" color={"white"} size={18}/>
                <p className="text-white text-sm">10</p>
              </div>
            </div>
            <div className="flex gap-[10px] items-center cursor-pointer">
              <p className="text-white text-sm">Xem chi tiết</p>
              <BsArrowRight color={"white"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;