'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";

const BannerPage = (props: any) => {
  const [pathName, setPathName] = useState("")
  useEffect(() => {
    setPathName(window.location.pathname)
  }, [])
  const {pageTitle, pageSlogan, banner} = props

  return (
    <div className={"w-full h-[45vh] relative bg-no-repeat bg-cover bg-center flex items-center justify-center" + banner || " bg-[url('/banner/dalat2.jpg')]" }>
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000066] z-[1]"></div>
      <div className="z-[2] w-[90%] 2xl:w-[76%] mx-auto">
        <p
          className="text-white text-[32px] md:text-[35px] lg:text-[40px] xl:text-[48px] font-semibold leading-[30px] lg:leading-[57px] mb-[15px] text-left">{pageTitle}</p>
        {
          !pageSlogan && ("")
        }
        {
          pageSlogan && (<p
            className="text-white text-[18px] md:text-[24px] font-normal md:font-medium leading-[40px] lg:leading-[30px] mb-[15px] md:mb-[20px] text-left">{pageSlogan}</p>)
        }

        <p className="uppercase text-sm lg:text-base text-white leading-[26px] text-left font-medium"><Link href="/">Trang
          chủ</Link> / <Link href={`${pathName}`}>{pageTitle}</Link></p>
      </div>
    </div>
  );
};

export default BannerPage;