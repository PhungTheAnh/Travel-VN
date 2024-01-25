'use client';

import Image from "next/image";
import {BsSearch} from "react-icons/bs";
import {FaRegUser} from "react-icons/fa";
import {useEffect, useRef, useState} from "react";
import {GrFormClose} from "react-icons/gr";
import Link from "next/link";
import LinkHeader from "@/app/component/header/linkHeader";
import LinkHeaderMobile from "@/app/component/header/linkHeaderMobile";
import LinkUser from "@/app/component/header/linkUser";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import tours from "@/app/component/homeComponent/tours";
import {paths} from "@/app/component/router/path";


const Header = () => {
  const headerRef = useRef<HTMLInputElement | null>(null);
  const menuRef = useRef<HTMLInputElement | null>(null);
  const userMenuRef = useRef<HTMLInputElement | null>(null);
  const searchMenuRef = useRef<HTMLInputElement | null>(null);
  const BtnClickSearchMenu = () => {
    searchMenuRef.current?.classList.toggle("searchMenu-active")
  }

  const BtnClickUserMenu = () => {
    userMenuRef.current?.classList.add("userMenu-active")
  }
  const BtnCloseUserMenu = () => {
    userMenuRef.current?.classList.remove("userMenu-active")
  }

  const MenuClick = () => {
    menuRef.current?.classList.toggle("menu-active")
    document.body.style.overflowY = "hidden"
  }
  const MenuClose = () => {
    menuRef.current?.classList.remove("menu-active")
    document.body.style.overflowY = "scroll"
  }

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target === menuRef.current) {
        MenuClose()
      }
      if (e.target === userMenuRef.current){
        BtnCloseUserMenu()
      }
    })
    const onScroll: EventListener = async () => {
      if (window.scrollY > 1) {
        headerRef.current?.classList.add("header")
      } else {
        headerRef.current?.classList.remove("header")
      }
    }
    window.addEventListener("scroll", onScroll)
  })
  const [age, setAge] = useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div ref={headerRef} className='w-full fixed top-0 left-0 z-[99] bg-transparent'>
      {/*search*/}
      <div ref={searchMenuRef}
           className="searchMenu flex items-center justify-center opacity-0 invisible z-[10] fixed top-[30%] lg:top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-[98%] md:w-[80%] lg:w-[84%] xl:w-[70%] transition-all duration-300">
        <div className="fixed w-full h-full top-0 left-0 bg-transparent"></div>
        <div
          className="flex lg:flex-row flex-col items-center justify-between gap-[20px] lg:gap-[30px] w-[80%] lg:w-full shadow-[0_0_20px_#00000099] bg-[#4366c5ab] p-[30px] lg:p-[20px] rounded-xl">
          <div className="flex flex-col justify-center items-start gap-[10px] w-full">
            <FormControl className="w-full rounded-[36px] bg-white border-0 outline-0" size="small">
              <InputLabel>Địa điểm</InputLabel>
              <Select
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={18}>Nam Định</MenuItem>
                <MenuItem value={29}>Hà Nội</MenuItem>
                <MenuItem value={30}>Thanh Hóa</MenuItem>
              </Select>
            </FormControl>

          </div>
          <div className="flex flex-col justify-center items-start gap-[10px] w-full">
            <p className="text-base xl:text-lg text-white">Ngày khởi hành</p>
            <input className="py-[10px] px-[30px] w-full outline-0 border-0 rounded-[36px] text-base text-[#adadad]"
                   placeholder={"Ngày khởi hành"} type="text"/>
          </div>
          <div className="flex flex-col justify-center items-start gap-[10px] w-full">
            <p className="text-base xl:text-lg text-white">Số người</p>
            <input className="py-[10px] px-[30px] w-full outline-0 border-0 rounded-[36px] text-base text-[#adadad]"
                   placeholder={"Số người"} type="number"/>
          </div>
          <div className="flex flex-col justify-center items-start gap-[10px] w-full">
            <p className="text-base xl:text-lg text-white opacity-0">Tìm kiếm</p>
            <p
              className="py-[10px] px-[30px] w-full outline-0 border border-white rounded-[36px] text-lg text-white bg-[#4366c5] z-[1] cursor-pointer">Tìm
              kiếm</p>
          </div>
        </div>
      </div>
      {/*menu mobile*/}
      <div ref={menuRef}
           className="invisible w-full h-full fixed top-0 left-[-400px] flex bg-transparent z-[100] transition-all duration-400">
        <div className="w-[340px] h-[100vh] py-7 px-10 bg-[#4366c5] relative transition-all duration-400">
          <GrFormClose onClick={MenuClose} color={"white"} size={30}
                       className="close hover:scale-[1.2] transition-all duration-400 cursor-pointer absolute right-[20px] top-[22px]"/>
          <Link href="/"><Image className={"logo-header cursor-pointer"} src="/header/logo.png" alt="TRAVEL VN"
                                width={135}
                                height={20}/></Link>
          <div className="flex flex-col gap-[30px] mt-[60px]">
            <LinkHeaderMobile closeClick={MenuClose} pagePathName={paths.home.index} pageTitle={paths.home.meta}/>
            <LinkHeaderMobile closeClick={MenuClose} pagePathName={paths.about.index} pageTitle={paths.about.meta}/>
            <LinkHeaderMobile closeClick={MenuClose} pagePathName={paths.address.index} pageTitle={paths.address.meta}/>
            <LinkHeaderMobile closeClick={MenuClose} pagePathName={paths.tours.index} pageTitle={paths.tours.meta}/>
            <LinkHeaderMobile closeClick={MenuClose} pagePathName={paths.posts.index} pageTitle={paths.posts.meta}/>
            <LinkHeaderMobile closeClick={MenuClose} pagePathName={paths.contact.index} pageTitle={paths.contact.meta}/>
          </div>
        </div>
      </div>
      {/**/}
      <div className="w-full mx-auto py-[35px] rounded-[12px] header-scroll transition-all duration-500">
        <div className={"w-[94%] 2xl:w-[76%] mx-auto flex justify-between"}>
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
            <LinkHeader pagePathName={"/"} pageTitle={"Trang chủ"}/>
            <LinkHeader pagePathName={"/aboutme"} pageTitle={"Về chúng tôi"}/>
            <LinkHeader pagePathName={"/address"} pageTitle={"Địa điểm"}/>
            <LinkHeader pagePathName={"/tours"} pageTitle={"Tours"}/>
            <LinkHeader pagePathName={"/posts"} pageTitle={"Bài viết"}/>
            <LinkHeader pagePathName={"/contact"} pageTitle={"Liên hệ"}/>
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
              <div ref={userMenuRef} className="userMenu fixed w-full h-full bottom-0 left-0 bg-transparent z-[10]">
                <div
                     className="userMenuForm z-10 w-[230px] p-[15px] rounded-xl absolute right-[38px] top-[75px] flex flex-col gap-2.5 transition-all duration-300">
                  <LinkUser href={"/user/profile"} text={"Thông tin cá nhân"} btnClose={BtnCloseUserMenu} />
                  <LinkUser href={"/user/login"} text={"Đăng nhập"} btnClose={BtnCloseUserMenu} />
                  <LinkUser href={"/user/register"} text={"Đăng ký"} btnClose={BtnCloseUserMenu} />
                  <LinkUser href={"/"} text={"Đăng xuất"} btnClose={BtnCloseUserMenu} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header