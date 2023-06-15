import React from 'react';
import Image from "next/image";
import {BsTelephone} from "react-icons/bs";
import {HiOutlineEnvelope} from "react-icons/hi2";
import {IoLocationOutline} from "react-icons/io5";
import {ImFacebook} from "react-icons/im";
import {SiYoutube} from "react-icons/si";
import {FaTiktok} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#4366c5] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-between gap-[20px] items-start my-[40px] lg:my-[60px] w-[94%] lg:w-[90%] xl:w-[85%]">
        <Link href="/">
          <Image src={"/footer/logo-VNTRAVEL.png"} alt={"Travel VN"} width={230} height={35}/>
        </Link>
        <div className="flex flex-col justify-center gap-[15px]">
          <Link href="/">
            <p className="text-xl lg:text-2xl font-semibold text-white">Trang chủ</p>
          </Link>
          <Link href="/aboutme"><p className="text-sm lg:text-base font-normal text-white">Về chúng tôi</p></Link>
          <Link href="/address"><p className="text-sm lg:text-base font-normal text-white">Địa điểm</p></Link>
          <Link href="/tours"><p className="text-sm lg:text-base font-normal text-white">Tours</p></Link>
          <Link href="/posts"><p className="text-sm lg:text-base font-normal text-white">Bài viết</p></Link>
          <Link href="/posts"><p className="text-sm lg:text-base font-normal text-white">Bài viết</p></Link>
        </div>
        <div className="flex flex-col justify-center gap-[15px]">
          <Link href="#">
            <p className="text-xl lg:text-2xl font-semibold text-white">Hỗ trợ</p>
          </Link>
          <Link href="/aboutme"><p className="text-sm lg:text-base font-normal text-white">Liên hệ chúng tôi</p></Link>
          <Link href="/address"><p className="text-sm lg:text-base font-normal text-white">Đối tác của chúng tôi</p></Link>
          <Link href="/tours"><p className="text-sm lg:text-base font-normal text-white">Chính sách và bảo mật</p></Link>
          <Link href="/library"><p className="text-sm lg:text-base font-normal text-white">Chính sách hoàn tiền</p></Link>
        </div>
        {/**/}
        <div className="flex flex-col justify-center gap-[15px] max-w-[280px]">
          <Link href="#">
            <p className="text-xl lg:text-2xl font-semibold text-white">Liên hệ</p>
          </Link>
          <Link href="/aboutme" className="flex gap-[10px] items-center">
            <BsTelephone size={18} color={"white"}/>
            <p className="text-sm lg:text-base font-normal text-white xl:max-w-none max-w-[280px]">038-613-6374</p>
          </Link>
          <Link href="/address" className="flex gap-[10px] items-center">
            <HiOutlineEnvelope size={18} color={"white"}/>
            <p className="text-sm lg:text-base font-normal text-white xl:max-w-none max-w-[280px]">phungtheanh2001@gmail.com</p>
          </Link>
          <Link href="/tours" className="flex gap-[10px] items-center">
            <IoLocationOutline size={20} color={"white"} className="min-w-[20px]"/>
            <p className="text-sm lg:text-base font-normal text-white xl:max-w-none max-w-[280px]">67, Phố Khúc Thừa Dụ ,Q.Bắc Từ Liêm, Hà Nội</p>
          </Link>
          <div className="flex gap-[15px] items-center">
            <Link href="https://www.facebook.com/theanh.phung.988/"><ImFacebook size={22} color={"white"}/></Link>
            <Link href="https://www.instagram.com/ptanh0510/"><FiInstagram size={22} color={"white"}/></Link>
            <Link href="https://www.tiktok.com/@phung_the"><FaTiktok size={22} color={"white"}/></Link>
            <Link href="https://www.youtube.com/channel/UCJDyC903-WTLCvD7tvOf-1w"><SiYoutube size={24} color={"white"}/></Link>
          </div>
        </div>
      </div>
      <div className="bg-[#344a93] w-full py-[15px] text-center">
        <p className="text-sm font-normal text-white">© Copyright 2023 - VN Travel - An Travel - by Phung The Anh</p>
      </div>
    </div>
  );
};

export default Footer;