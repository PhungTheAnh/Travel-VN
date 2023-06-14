'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";
const BannerUser = (props: any) => {
  const [pathName, setPathName] = useState("")
  useEffect(()=>{
    setPathName(window.location.pathname)
  }, [])
  const {pageTitle} =  props
  return (
    <div className="w-full h-[45vh] relative bg-[url('/banner/dalat2.jpg')] bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000066] z-[1]"></div>
      <div className="z-[2] w-[90%] 2xl:w-[76%] mx-auto">
        <p
          className="text-white text-[32px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-semibold leading-[30px] lg:leading-[57px] mb-[15px] text-left">{pageTitle}</p>
        <p className="uppercase text-sm lg:text-base text-white leading-[26px] text-left font-medium"><Link href="/">Trang
          chủ</Link> / <Link href={`${pathName}`}>{pageTitle}</Link></p>
      </div>
    </div>
  );
};

export default BannerUser;