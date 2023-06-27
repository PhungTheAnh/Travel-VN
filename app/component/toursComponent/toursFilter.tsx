'use client'

import React, {useRef} from 'react';
import {Input} from "@nextui-org/react";
import {BiSearch} from "react-icons/bi";
import {Tab} from "@headlessui/react";
import {BsGrid3X3Gap} from "react-icons/bs";
import ToursResult from "@/app/component/toursComponent/toursResult";
import {FaFilter} from "react-icons/fa";
import {AiOutlineUnorderedList} from "react-icons/ai";


const ToursFilter = () => {
  const places = ["Tất cả", "Hà Nội", "Hạ Long Bay", "Sapa", "Ninh Bình"]
  const prices = ["Tất cả", "2-5m", "5-8m", "> 8m"]
  const menuFilter = useRef<HTMLInputElement | null>(null)
  const btnFilter = () => {
    menuFilter.current?.classList.toggle("btnFilter")
  }

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Tab.Group>
      <div
        className="w-full 2xl:w-[85%] mx-auto relative flex flex-col lg:flex-row items-start justify-center gap-[30px]">
        <div
          ref={menuFilter}
          className="toursFilter lg:h-full transition-all duration-150 lg:opacity-100 lg:visible lg:rotate-0 w-full lg:w-1/4 relative lg:sticky left-0 lg:top-[100px] flex flex-col items-center justify-center rounded-xl overflow-hidden bg-[#f2f6fc] shadow-[0_0px_20px_#00000022]">
          <p className="text-2xl text-[#333] py-[15px] font-semibold">Lọc thông tin</p>
          <div className="bg-[#a6c3ea] p-[30px] w-full">
            <Input
              size={"lg"}
              clearable
              contentRightStyling={false}
              placeholder="Nhập từ khóa..."
              contentLeft={
                <BiSearch size={20} color={"#333333"}/>
              }
            />
          </div>
          <Tab.List className="w-full">
            <div className="w-full p-5 xl:p-[30px] border-b border-[#cadaf3] flex flex-col justify-center gap-[15px]">
              <p className="text-base text-black font-bold relative text-left">Thẻ tìm kiếm</p>
              <div className="w-full grid grid-cols-2 gap-[15px]">
                {places.map((place) => (
                  <Tab key={place}
                       className={({selected}) => classNames(
                         'text-[#252525] py-2 px-2.5 xl:px-[18px] border-0 outline-0 rounded-lg border-b border-[#cadaf3] w-full text-sm font-bold transition-all duration-300 bg-white hover:bg-[#a6c3ea] hover:text-white',
                         selected
                           ? "!bg-[#4366c5] text-white" : ""
                       )}>
                    <button>
                      {place}
                    </button>
                  </Tab>
                ))}
              </div>
            </div>
            {/**/}
            <div className="w-full p-5 xl:p-[30px] flex flex-col justify-center gap-[15px]">
              <p className="text-base text-black font-bold relative text-left">Giá tiền</p>
              <div className="w-full grid grid-cols-2 gap-[15px]">
                {prices.map((price) => (
                  <Tab key={price}
                       className={({selected}) => classNames(
                         'text-[#252525] py-2 px-2.5 xl:px-[18px] border-0 outline-0 rounded-lg border-b border-[#cadaf3] w-full text-sm font-bold transition-all duration-300 bg-white hover:bg-[#a6c3ea] hover:text-white',
                         selected
                           ? "!bg-[#4366c5] text-white" : ""
                       )}>
                    <button>
                      {price}
                    </button>
                  </Tab>
                ))}
              </div>
            </div>
          </Tab.List>
        </div>
        <div className="relative w-full lg:w-3/4">
          <div>
            <Tab.Panels>
              {
                places.map((result) => {
                  return (
                    <Tab.Panel key={result}><ToursResult btnFilter={btnFilter}/></Tab.Panel>
                  )
                })
              }
              {
                prices.map((result) => {
                  return (
                    <Tab.Panel key={result}><ToursResult btnFilter={btnFilter}/></Tab.Panel>
                  )
                })
              }
            </Tab.Panels>
          </div>
        </div>
      </div>
    </Tab.Group>

  );
};

export default ToursFilter;