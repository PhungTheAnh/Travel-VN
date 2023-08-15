'use client'

import React from 'react';
import BannerPage from "@/app/component/bannerPage/bannerPage";
import Link from "next/link";
import {FaPhoneVolume} from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import {Input, Textarea} from "@nextui-org/react";

const Page = () => {
  const pageTitle = "Blog"
  const contacts = [
    {
      phone: "0354 899 836",
      title: "Yêu cầu đặt Tour",
      description: "This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit"
    },
    {
      phone: "0387 094 970",
      title: "Đăng bài đăng",
      description: "This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit"
    },
    {
      phone: "0354 899 836",
      title: "Kiểm tra thanh toán",
      description: "This is Photoshop’s version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit"
    }
  ]
  return (
    <div className="contact_page">
      <BannerPage pageTitle={pageTitle} pageSlogan="Thông tin hữu ích cho du lịch"
                  banner={" bg-[url('/banner/nhatrang4.jpg')]"}/>
      <div className="py-[30px] w-full relative">
        <div className="w-[95%] 2xl:w-[85%] mx-auto text-center">
          {/* title */}
          <div className="w-full my-[30px] flex flex-col items-center gap-[15px]">
            <p
              className="text-darkCharcoal text-[30px] md:text-[35px] xl:text-[40px] font-semibold tracking-[2px] uppercase">Liên
              hệ với chúng tôi</p>
            <p className="text-[#666666] text-base xl:text-xl tracking-[0.8px] leading-[25px]">Liên hệ với chúng tôi
              qua email, điện thoại hoặc địa chỉ của chúng tôi dưới đây.</p>
          </div>
          {/* contact */}
          <div className="flex flex-col md:flex-row justify-between gap-[30px]">
            {
              contacts.map((item: any) => {
                return (
                  <Link key={uuidv4()} href="tel:0386136374" className="w-full">
                    <div className="w-full flex gap-[30px] flex-col justify-center">
                      <div
                        className="w-full bg-[#5d85d4] border-[5px] border-[#a6c3ea] py-5 lg:py-[30px] px-3 lg:px-5 flex gap-2 lg:gap-5 items-center justify-center rounded-lg overflow-hidden shadow-[0_10px_20px_#00000022]">
                        <FaPhoneVolume size={30} color={"white"}/>
                        <span className="text-white text-2xl md:text-xl lg:text-2xl">{item.phone}</span>
                      </div>
                      <div className="flex flex-col justify-start items-start gap-[15px]">
                        <p className="text-darkCharcoal text-2xl md:text-xl lg:text-2xl font-semibold">{item.title}</p>
                        <p className="text-graniteGray text-sm text-left">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          {/* form contact and map*/}
          <div className="mt-[60px] mb-[30px] flex flex-col md:flex-row gap-[30px] items-center">
            <form action=""
                  className='w-full md:w-1/2 text-left flex flex-col py-[40px] lg:py-[60px] px-[20px] lg:px-[30px] gap-[15px] bg-[#f2f6fc] border-[10px] border-[#a6c3ea] rounded-lg shadow-[0_10px_20px_#00000022]'>
              <div className='flex flex-col'>
                <p className='text-darkCharcoal text-2xl font-semibold'>Thông tin liên hệ</p>
                <p className='text-darkCharcoal text-sm'>Phần thông tin bắt buộc<span className='text-red-500'> *</span>
                </p>
              </div>
              <div className='flex flex-col lg:flex-row lg:items-center gap-2.5 md:gap-0 lg:gap-2.5'>
                <label htmlFor="name" className='text-base font-semibold text-darkCharcoal w-[30%] md:w-full lg:w-[40%] xl:w-[30%]'>Tên đầy đủ<span
                  className='text-red-500'> *</span></label>
                <Input type="text" id="name" color={"primary"} underlined placeholder="Nhập họ và tên của bạn"/>
              </div>
              <div className='flex flex-col lg:flex-row lg:items-center gap-2.5 md:gap-0 lg:gap-2.5'>
                <label htmlFor="email" className='text-base font-semibold text-darkCharcoal w-[30%] md:w-full lg:w-[40%] xl:w-[30%]'>Email<span
                  className='text-red-500'> *</span></label>
                <Input type="email" id="email" color={"primary"} underlined placeholder="Nhập Email của bạn"/>
              </div>
              <div className='flex flex-col lg:flex-row lg:items-center gap-2.5 md:gap-0 lg:gap-2.5'>
                <label htmlFor="number" className='text-base font-semibold text-darkCharcoal w-[30%] md:w-full lg:w-[40%] xl:w-[30%]'>Số điện
                  thoại<span className='text-red-500'> *</span></label>
                <Input type="text" id="number" color={"primary"} underlined placeholder="Nhập số điện thoại của bạn"/>
              </div>
              <div className='flex flex-col lg:flex-row gap-2.5 md:gap-0 lg:gap-2.5'>
                <label htmlFor="note" className='text-base font-semibold text-darkCharcoal w-[30%] md:w-full lg:w-[40%] xl:w-[30%]'>Lời nhắn<span
                  className='text-red-500'> *</span></label>
                <Textarea id="note" color={"primary"} size={"lg"} underlined placeholder="Để lại lời nhắn"/>
              </div>
              <div className='flex flex-col lg:flex-row i gap-2.5 md:gap-0 lg:gap-2.5 mt-[15px]'>
                <label className='w-[30%] md:w-full lg:w-[40%] xl:w-[30%] opacity-0'></label>
                <button type={"submit"}
                        className="hover:bg-[#5d85d4] transition-all duration-150 bg-primary text-lg tracking-[1px] w-full lg:w-[70%] uppercase rounded-xl font-semibold text-white p-2.5">
                  Gửi yêu cầu
                </button>
              </div>
            </form>
            <div className='w-full md:w-1/2'>
              <iframe
                className="w-full shadow-[0_10px_20px_#00000022] rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9897259752834!2d105.78958257598428!3d21.03309708762815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abca7b434b5b%3A0xc9becd3c44a3bc20!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gQU5FRUQ!5e0!3m2!1svi!2s!4v1692074566514!5m2!1svi!2s"
                height="520" style={{"border": "0"}} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;