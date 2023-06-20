'use client'

import React, {useEffect, useRef} from 'react';
import scrollEffect from "@/app/component/function/scrollEffect";
import AddressTabsSearch from "@/app/component/addressComponent/addressTabsSearch";

const AddressSearch = () => {
  useEffect(() => {
    const onScroll: EventListener = () => {

    }
    window.addEventListener("scroll", onScroll)
  }, [])
  return (
    <div className="w-full relative py-[30px] bg-[#fafafa]">
      <div className="w-[95%] 2xl:w-[85%] mx-auto text-center">
        <div className="w-full mt-[30px] mb-[40px] flex flex-col items-center gap-[15px] transition-all duration-1000">
          <p className="text-[#231d0d] text-[30px] md:text-[35px] xl:text-[40px] text-center font-bold uppercase leading-[45px]">Tìm điểm đến của bạn</p>
        </div>
        <AddressTabsSearch/>
      </div>
    </div>
  );
};

export default AddressSearch;