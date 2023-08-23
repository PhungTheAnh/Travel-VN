import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {MdOutlineLocationOn} from "react-icons/md";
import {BsArrowRightShort} from "react-icons/bs";
import {Tab} from "@headlessui/react";
import {Input} from "@nextui-org/react";
import {filters} from "@/app/component/data/data";

const AddressTabsSearch = () => {
  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Tab.Group>
      <Tab.List
        className="relative w-full min-h-[73px] flex flex-col lg:flex-row justify-between items-center gap-[15px] lg:gap-0 p-[15px] mb-[30px] bg-[#f2f6fc] shadow-[0_10px_20px_#00000011] rounded-xl">
        <div className="flex flex-wrap justify-center lg:flex-nowrap items-center gap-[10px] lg:gap-[30px]">
          {
            Object.keys(filters).map((filter: any) => (
              <Tab key={filter} className={({selected}) => classNames(
                'text-[#252525] text-base relative px-4 py-2 transition-all duration-100 hover:border-b-[3px] hover:border-[#a6c3ea] outline-0',
                selected
                  ? "border-b-[3px] border-[#4366c5] hover:border-[#4366c5]" : ""
              )}>
                {filter}
              </Tab>
            ))
          }
        </div>
        <div className="ipAddressTabSearch w-full lg:w-auto">
          <Input
            clearable
            size={"lg"}
            contentRightStyling={false}
            placeholder="Nhập từ khóa..."
            className="!bg-white"
          />
        </div>
      </Tab.List>
      <Tab.Panels>
        {
          Object.values(filters).map((place, index) => (
              <Tab.Panel
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-start gap-[50px] transition-all duration-300 w-full">
                {
                  place.map((filter: any) => (
                    <div key={index}
                         className="relative group w-full bg-white flex flex-col overflow-hidden items-center content-start rounded-lg p-[15px] gap-[15px] md:max-w-[420px] shadow-[0_10px_20px_#00000022] transition-all duration-300 hover:shadow-[0_10px_20px_#00000066] hover:translate-y-[-8px]">
                      <div className='h-[250px] w-full rounded-lg overflow-hidden'>
                        <Image src={filter.image} alt={filter.name} width={0} height={0} sizes={"100vh"} unoptimized
                               className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300"/>
                      </div>
                      <div className="flex flex-col gap-[10px] w-full">
                        <Link href={`address/${filter.slug}`}
                              className="text-2xl w-full text-darkCharcoal text-left font-bold line-clamp-1">{filter.name}</Link>
                        <div className="flex items-center gap-[6px] text-sm text-[#555]">
                          <MdOutlineLocationOn size={18} color="#555"/>
                          <p>{filter.address}</p>
                        </div>
                        <p className="text-[#555555] text-sm text-left line-clamp-3 mb-[20px] ">{filter.description}</p>
                        <Link href={`address/${filter.slug}`}
                              className="text-primary text-base text-right flex items-center gap-[5px] justify-end">Xem
                          chi tiết<BsArrowRightShort size={20} color={"#4366c5"}/></Link>
                      </div>
                    </div>
                  ))
                }
              </Tab.Panel>
            )
          )
        }
        {/*<Tab.Panel*/}
        {/*  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-start gap-[50px] transition-all duration-300 w-full"><Address/></Tab.Panel>*/}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default AddressTabsSearch;