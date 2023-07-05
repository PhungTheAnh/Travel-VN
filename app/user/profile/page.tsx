'use client'

import React, {useEffect, useRef, useState} from 'react';
import {LuSwitchCamera} from "react-icons/lu";
import {FaRegUser} from 'react-icons/fa';
import {MdLockOutline, MdOutlineLogout} from 'react-icons/md';
import Image from "next/image";
import BannerPage from "@/app/component/bannerPage/bannerPage";
import Link from "next/link";

const Profile = () => {
  const [avatar, setAvatar] = useState();
  const [tab, setTab] = useState(1);
  const btnProfile = useRef<HTMLInputElement | null>(null)
  const btnChangePassword = useRef<HTMLInputElement | null>(null)
  const tabClickProfile = (e: any) => {
    btnProfile.current?.classList.add("profile-tab-active")
    btnChangePassword.current?.classList.remove("profile-tab-active")
    setTab(1)
  }
  const tabClickChangePassword = (e: any) => {
    btnChangePassword.current?.classList.add("profile-tab-active")
    btnProfile.current?.classList.remove("profile-tab-active")
    setTab(2)
  }

  useEffect(() => {
    return () => avatar && URL.revokeObjectURL(avatar);
  }, [avatar]);

  const handlePreviewAvatar = (e: any) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file.preview);
  };
  // @ts-ignore
  return (
    <div className="w-full h-full">
      <BannerPage pageTitle={"Thông tin cá nhân"} banner={" bg-[url('/banner/dalat2.jpg')]"}/>
      <div className="w-full py-[50px] xl:py-[80px] bg-white">
        <div className="w-[95%] xl:max-w-[1350px] mx-auto flex md:flex-row flex-col justify-between gap-[30px] md:gap-[20px] lg:gap-[30px]">
          <div
            className="w-full md:w-[40%] lg:w-[30%] xl:w-1/3 h-full p-[15px] border border-[#7ca4de] flex flex-col items-center justify-center gap-[15px] rounded-xl">
            <div className="flex items-center justify-center mb-[15px] w-full">
              <div
                className="w-[150px] h-[150px] border-[5px] border-[#5d85d4] cursor-pointer relative rounded-full group">
                <div
                  className="z-[2] w-full h-full flex items-center justify-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:bg-[#ffffff80] hover:backdrop-blur-[1px]">
                  <LuSwitchCamera size={0} color={"#4366c5"}
                                  className="group-hover:w-[30px] group-hover:h-[30px] w-0 h-0  transition-all duration-500"/>
                </div>
                <input type="file" onChange={handlePreviewAvatar} accept="image/*"
                       className="z-[10] absolute w-full h-full top-0 left-0 rounded-full cursor-pointer opacity-0"/>
                {avatar && (
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={0}
                    height={0}
                    sizes={"100vh"}
                    className="z-[1] w-[142px] h-[142px] rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] group-hover:backdrop-blur-[2px]"
                  />
                )}
              </div>
            </div>
            {/**/}
            <div className="flex flex-col gap-[15px] items-center justify-center mb-[15px]">
              <p className='text-2xl text-primary font-semibold'>Phùng Thế Anh</p>
              <p className='text-base text-primary font-medium'>phungtheanh2001@gmail.com</p>
              <p className='text-base text-primary font-medium'>0386136374</p>
            </div>
            {/*  */}
            <div className="flex flex-col items-center justify-center gap-[15px] w-full">
              <div ref={btnProfile} onClick={tabClickProfile}
                   className="flex gap-[15px] items-center px-2.5 py-[15px] w-full rounded-lg hover:bg-[#cadaf3] cursor-pointer profile-tab-active">
                <FaRegUser size={20} color={"black"} className=""/>
                <p className="text-base text-[#252525] font-medium">Thông tin tài khoản</p>
              </div>
              <div ref={btnChangePassword} onClick={tabClickChangePassword}
                   className="flex gap-[15px] items-center px-2.5 py-[15px] w-full rounded-lg hover:bg-[#cadaf3] cursor-pointer ">
                <MdLockOutline size={27} color={"black"} className=""></MdLockOutline>
                <p className="text-base text-[#252525] font-medium">Đổi mật khẩu</p>
              </div>
              <div
                className="flex gap-[15px] items-center px-2.5 py-[15px] w-full rounded-lg hover:bg-[#cadaf3] cursor-pointer ">
                <MdOutlineLogout size={27} color={"black"} className=""></MdOutlineLogout>
                <Link href="#"><p className="text-base text-[#252525] font-medium">Đăng xuất</p></Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] lg:w-[70%] h-fit p-[30px] md:p-[20px] lg:p-[30px] rounded-xl bg-[#f2f6fc] flex items-center justify-center">
            {
              tab == 1 && (
                <div className="flex flex-col gap-[15px] items-center justify-center w-full">
                  <p className="text-[28px] text-[#384a95] font-semibold">Thông tin tài khoản</p>
                  <div className="flex flex-col gap-2.5 w-full">
                    <div className="w-full flex justify-between items-center gap-[5px]">
                      <p className="text-[#252525] text-lg font-semibold w-[40%] md:w-[45%] lg:w-[40%]">Họ và tên</p>
                      <input type="text"
                             className="w-full border border-[#7ca4de] text-base text-[#333333] p-2.5 outline-0 rounded-lg"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 w-full">
                    <div className="w-full flex justify-between items-center gap-[5px]">
                      <p className="text-[#252525] text-lg font-semibold w-[40%] md:w-[45%] lg:w-[40%]">Email</p>
                      <input type="email"
                             className="w-full border border-[#7ca4de] text-base text-[#333333] p-2.5 outline-0 rounded-lg"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 w-full">
                    <div className="w-full flex justify-between items-center gap-[5px]">
                      <p className="text-[#252525] text-lg font-semibold w-[40%] md:w-[45%] lg:w-[40%]">Số điện thoại</p>
                      <input type="text"
                             className="w-full border border-[#7ca4de] text-base text-[#333333] p-2.5 outline-0 rounded-lg"/>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-end">
                    <p
                      className="py-3 px-[25px] rounded-lg border-0 outline-0 text-lg font-medium text-white bg-[#4366c5] mt-[15px] cursor-pointer">Cập
                      nhật</p>
                  </div>
                </div>
              )
            }
            {
              tab === 2 && (
                <div className="flex flex-col gap-[15px] items-center justify-center w-full">
                  <p className="text-[28px] text-[#384a95] font-semibold">Đổi mật khẩu</p>
                  <div className="flex flex-col gap-2.5 w-full">
                    <div className="w-full flex justify-between items-center gap-[5px]">
                      <p className="text-[#252525] text-lg font-semibold w-[40%] md:w-[45%] lg:w-[40%]">Mật khẩu cũ</p>
                      <input type="text"
                             className="w-full border border-[#7ca4de] text-base text-[#333333] p-2.5 outline-0 rounded-lg"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 w-full">
                    <div className="w-full flex justify-between items-center gap-[5px]">
                      <p className="text-[#252525] text-lg font-semibold w-[40%] md:w-[45%] lg:w-[40%]">Mật khẩu mới</p>
                      <input type="email"
                             className="w-full border border-[#7ca4de] text-base text-[#333333] p-2.5 outline-0 rounded-lg"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 w-full">
                    <div className="w-full flex justify-between items-center gap-[5px]">
                      <p className="text-[#252525] text-lg font-semibold w-[40%] md:w-[45%] lg:w-[40%]">Nhập lại mật khẩu mới</p>
                      <input type="text"
                             className="w-full border border-[#7ca4de] text-base text-[#333333] p-2.5 outline-0 rounded-lg"/>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-end">
                    <p
                      className="py-3 px-[25px] rounded-lg border-0 outline-0 text-lg font-medium text-white bg-[#4366c5] mt-[15px] cursor-pointer">Cập
                      nhật</p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;