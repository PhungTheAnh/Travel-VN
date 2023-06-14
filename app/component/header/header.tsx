'use client';

import Image from "next/image";
import {BsSearch} from "react-icons/bs";
import {FaRegUser} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";
import {GrFormClose} from "react-icons/gr";
import {log} from "util";
import Link from "next/link";


const Header = () => {

  let [header, setHeader] = useState<string>("")
  let [menu, setMenu] = useState<string>("")
  const menuRef = useRef(null);
  const userMenuRef = useRef<HTMLInputElement | null >(null);
  const searchMenuRef = useRef<HTMLInputElement | null >(null);
  const BtnClickSearchMenu = () => {
    searchMenuRef.current?.classList.toggle("searchMenu-active")
  }

  const BtnClickUserMenu = () => {
    userMenuRef.current?.classList.toggle("userMenu-active")
  }

  let MenuClick = () => {
    setMenu(" menu-active")
    document.body.style.overflowY = "hidden"
  }

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target === menuRef.current) {
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
      {/*search*/}
      <div ref={searchMenuRef} className="searchMenu flex items-center justify-center opacity-0 invisible fixed z-[1] left-[50%] w-[98%] md:w-[80%] lg:w-[84%] xl:w-[70%] translate-y-[-50%] translate-x-[-50%] bottom-[50px] transition-all duration-300">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-[20px] lg:gap-[30px] w-[80%] lg:w-full shadow-[0_0_20px_#00000099] bg-[#4366c5ab] p-[30px] lg:p-[20px] rounded-xl">
          <div className="flex flex-col justify-center items-start gap-[10px] w-full">
            <p className="text-base xl:text-lg text-white">Địa điểm</p>
            <select className="py-[10px] px-[30px] w-full outline-0 border-0 rounded-[36px] text-base text-[#adadad]" name="address" id="">
              <option value="">Địa điểm</option>
              <option value="">Nam Định</option>
              <option value="">Hà Nội</option>
            </select>
          </div>
          <div className="flex flex-col justify-center items-start gap-[10px] w-full">
            <p className="text-base xl:text-lg text-white">Ngày khởi hành</p>
            <input className="py-[10px] px-[30px] w-full outline-0 border-0 rounded-[36px] text-base text-[#adadad]" placeholder={"Ngày khởi hành"} type="text"/>
          </div>
          <div className="flex flex-col justify-center items-start gap-[10px] w-full">
            <p className="text-base xl:text-lg text-white">Số người</p>
            <input className="py-[10px] px-[30px] w-full outline-0 border-0 rounded-[36px] text-base text-[#adadad]" placeholder={"Số người"} type="number"/>
          </div>
          <div className="flex flex-col justify-center items-start gap-[10px] w-full">
            <p className="text-base xl:text-lg text-white opacity-0">Tìm kiếm</p>
            <p className="py-[10px] px-[30px] w-full outline-0 border border-white rounded-[36px] text-lg text-white bg-[#4366c5] z-[1] cursor-pointer">Tìm kiếm</p>
          </div>
        </div>
      </div>
      {/*menu mobile*/}
      <div ref={menuRef}
           className={"invisible w-full h-full fixed top-0 left-[-400px] flex bg-transparent z-[100] transition-all duration-400" + menu}>
        <div className="w-[340px] h-[100vh] py-7 px-10 bg-[#4366c5] relative transition-all duration-400">
          <GrFormClose onClick={() => {
            setMenu("");
            document.body.style.overflowY = "scroll"
          }} color={"white"} size={30}
                       className="close hover:scale-[1.2] transition-all duration-400 cursor-pointer absolute right-[20px] top-[22px]"/>
          <Link href="/"><Image className={"logo-header cursor-pointer"} src="/header/logo.png" alt="TRAVEL VN" width={135}
                             height={20}/></Link>
          <div className="flex flex-col gap-[30px] mt-[60px]">
            <Link href="/"><p className="text-white text-xl font-medium">Trang chủ</p></Link>
            <Link href="aboutme"><p className="text-white text-xl font-medium">Về chúng tôi</p></Link>
            <Link href="/address"><p className="text-white text-xl font-medium">Địa điểm</p></Link>
            <Link href="/tours"><p className="text-white text-xl font-medium">Tours</p></Link>
            <Link href="/posts"><p className="text-white text-xl font-medium">Bài viết</p></Link>
            <Link href="/contact"><p className="text-white text-xl font-medium">Liên hệ</p></Link>
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
            <Link href="/"><Image className={"logo-header cursor-pointer"} src="/header/logo.png" alt="TRAVEL VN"
                               width={135} height={20}/></Link>
          </div>
          <div className={"hidden lg:flex gap-[30px] items-center content-center transition-all duration-300"}>
            <Link href="./"
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Trang
              chủ</Link>
            <Link href="./aboutme"
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Về
              chúng tôi</Link>
            <Link href="./address"
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Địa
              điểm</Link>
            <Link href="./tours"
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Tours</Link>
            <Link href="./posts"
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Bài
              viết</Link>
            <Link href="./contact"
              className={"menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>Liên
              hệ</Link>
          </div>
          <div className={"flex gap-2.5 md:gap-[30px] items-center justify-center"}>
            <BsSearch
              onClick={BtnClickSearchMenu}
              className={"cursor-pointer relative hover:translate-y-[-10%] btnSearchMenu transition-all duration-500"}
              color={"white"} size={22}/>
            <div className="relative">
              <FaRegUser
                onClick={BtnClickUserMenu}
                className={"cursor-pointer relative hover:translate-y-[-10%] btnUserMenu transition-all duration-500"}
                color={"white"} size={22}/>
              <div ref={userMenuRef} className="userMenu z-10 w-[230px] p-[15px] rounded-xl absolute right-0 top-[33px] flex flex-col gap-2.5 transition-all duration-300">
                <Link className="cursor-pointer w-full" href="/user/profile"><p className="text-base text-[#fafafa] rounded-lg px-2.5 py-2 transition-all duration-300 hover:bg-[#7ca4de]">Thông tin cá nhân</p></Link>
                <Link className="cursor-pointer w-full" href="/user/login"><p className="text-base text-[#fafafa] rounded-lg px-2.5 py-2 transition-all duration-300 hover:bg-[#7ca4de]">Đăng nhập</p></Link>
                <Link className="cursor-pointer w-full" href="/user/register"><p className="text-base text-[#fafafa] rounded-lg px-2.5 py-2 transition-all duration-300 hover:bg-[#7ca4de]">Đăng ký</p></Link>
                <p className="text-base text-[#fafafa] rounded-lg px-2.5 py-2 transition-all duration-300 hover:bg-[#7ca4de] cursor-pointer">Đăng xuất</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header