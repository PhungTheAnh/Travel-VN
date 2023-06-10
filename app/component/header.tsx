'use client';

import Image from "next/image";
import {BsSearch} from "react-icons/bs";
import {FaRegUser} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";


const Header = () => {
  let [header, setHeader] = useState<string>("")
  useEffect(() => {
    const onScroll: EventListener = async () => {
      if(window.scrollY > 1) {
        setHeader(" header")
      }
      else {
        setHeader("")
      }
    }
    window.addEventListener("scroll", onScroll)
  })
  return (
    <div className={'w-full fixed top-0 left-0 z-[9999] bg-transparent' + header}>
      <div className="w-full mx-auto  py-[35px] rounded-[12px] header-scroll transition-all duration-500">
        <div className={"md:w-[90%] 2xl:w-[76%] mx-auto flex justify-between"}>
          <Image className={"logo-header cursor-pointer"} src="/header/logo.png" alt="TRAVEL VN" width={135} height={20}/>
          <div className={"flex gap-[30px] items-center content-center transition-all duration-300"}>
            <a
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Trang
              chủ</a>
            <a
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Về
              chúng tôi</a>
            <a
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Địa
              điểm</a>
            <a
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Tours</a>
            <a
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Bài
              viết</a>
            <a
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Liên
              hệ</a>
          </div>
          <div className={"flex gap-[30px] items-center justify-center"}>
            <BsSearch className={"cursor-pointer relative hover:translate-y-[-10%] header-search transition-all duration-500"} color={"white"} size={25}/>
            <FaRegUser className={"cursor-pointer relative hover:translate-y-[-10%] header-user transition-all duration-500"} color={"white"} size={25}/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header