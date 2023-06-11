'use client';

import Image from "next/image";
import {BsSearch} from "react-icons/bs";
import {FaRegUser} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";
import {GrFormClose} from "react-icons/gr";
import {log} from "util";


const Header = () => {

  let [header, setHeader] = useState<string>("")
  let [menu, setMenu] = useState<string>("")
  const menuRef = useRef(null);

  let MenuClick = () => {
    setMenu(" menu-active")
    document.body.style.overflowY = "hidden"
  }

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if(e.target === menuRef.current){
        setMenu("")
        document.body.style.overflowY = "scroll"
      }
    })
    const onScroll: EventListener = async () => {
      if (window.scrollY > 1) {
        setHeader(" header")
      } else {
        setHeader("")
      }
    }
    window.addEventListener("scroll", onScroll)
  })
  return (
    <div className={'w-full fixed top-0 left-0 z-[99] bg-transparent' + header}>
      {/*menu mobile*/}
      <div ref={menuRef} className={"invisible w-full h-full fixed top-0 left-[-400px] flex bg-transparent z-[100] transition-all duration-400" + menu}>
        <div className="w-[340px] h-[100vh] py-7 px-10 bg-[#4366c5] relative transition-all duration-400">
          <GrFormClose onClick={() => {setMenu("");document.body.style.overflowY = "scroll"}} color={"white"} size={30} className="close hover:scale-[1.2] transition-all duration-400 cursor-pointer absolute right-[20px] top-[22px]"/>
          <a href="/"><Image className={"logo-header cursor-pointer"} src="/header/logo.png" alt="TRAVEL VN" width={135} height={20}/></a>
          <div className="flex flex-col gap-[30px] mt-[60px]">
            <a href=""><p className="text-white text-xl font-medium">Trang chủ</p></a>
            <a href=""><p className="text-white text-xl font-medium">Về chúng tôi</p></a>
            <a href=""><p className="text-white text-xl font-medium">Địa điểm</p></a>
            <a href=""><p className="text-white text-xl font-medium">Tours</p></a>
            <a href=""><p className="text-white text-xl font-medium">Bài viết</p></a>
            <a href=""><p className="text-white text-xl font-medium">Liên hệ</p></a>
          </div>
        </div>
      </div>
      {/**/}
      <div className="w-full mx-auto py-[35px] rounded-[12px] header-scroll transition-all duration-500">
        <div className={"w-[90%] 2xl:w-[76%] mx-auto flex justify-between"}>
          <div className="flex gap-[10px] items-center">
            <div onClick={MenuClick}
                 className="btn_menu flex lg:hidden flex-col gap-[3px] items-center justify-center cursor-pointer relative hover:translate-y-[-10%] duration-500 transition-all">
              <div className="w-[25px] h-[4px] rounded-[10px] bg-[#fff]"></div>
              <div className="w-[25px] h-[4px] rounded-[10px] bg-[#fff]"></div>
              <div className="w-[25px] h-[4px] rounded-[10px] bg-[#fff]"></div>
            </div>
            <a href="/"><Image className={"logo-header cursor-pointer"} src="/header/logo.png" alt="TRAVEL VN"
                               width={135} height={20}/></a>
          </div>
          <div className={"hidden lg:flex gap-[30px] items-center content-center transition-all duration-300"}>
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
          <div className={"flex gap-2.5 md:gap-[30px] items-center justify-center"}>
            <BsSearch
              className={"cursor-pointer relative hover:translate-y-[-10%] header-search transition-all duration-500"}
              color={"white"} size={22}/>
            <FaRegUser
              className={"cursor-pointer relative hover:translate-y-[-10%] header-user transition-all duration-500"}
              color={"white"} size={22}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header