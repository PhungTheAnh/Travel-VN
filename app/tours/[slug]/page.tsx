import React from 'react';
import Image from "next/image";
import {FaCalendarAlt, FaRegStar, FaStar, FaMountain} from "react-icons/fa";
import { MdGroups } from 'react-icons/md';
const Page = () => {
    return (
        <div className="w-full h-full min-h-screen relative flex flex-col xl:flex-row items-center">
            <div className="w-full xl:w-1/2 xl:fixed h-full top-0 left-0 -z-[1]">
                <Image src={"/tours/nhatrang4.jpg"} alt={""} width={0} height={0} sizes={"100%"} unoptimized className="w-full h-full object-cover" />
            </div>
            <div className="w-full xl:w-1/2 xl:absolute right-0 top-0 h-full bg-[#fafafa]">
                <div className="w-[80%] mx-auto my-8 xl:my-0 h-full flex items-center justify-center flex-col">
                    <h1 className="text-[#5c5e62] text-3xl font-semibold mb-8">Tour Biển Nha Trang</h1>
                    <p className="text-[#1f2933] text-base ">Chỉ từ</p>
                    <div className="my-7 flex gap-1">
                        <p className="text-lg text-[#adadad] font-bold line-through">6,000,000 <span
                            className="underline">đ</span>
                        </p>
                        <p className="text-3xl leading-[1rem] text-primary font-black">5,575,000 <span
                            className="underline">đ</span>
                        </p>
                    </div>
                    <p className="text-[#5c5e62] text-sm text-center">Son agreed others exeter period myself few yet
                        nature. Mention mr manners opinion if garrets enabled. To an occasional dissimilar impossible
                        sentiments.</p>
                    <div className="grid grid-cols-2 gap-8 my-8">
                        <div className="py-[5px] border-b border-[#dedede] w-full grid grid-cols-2">
                            <div className="flex flex-col justify-between">
                                <p className="mb-2.5 text-base font-semibold text-[#474b4d]">Đánh giá</p>
                                <p className="text-[#474b4d] font-normal text-sm">1 Đánh giá</p>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <div className="flex gap-1">
                                    <FaStar color={"orange"}/>
                                    <FaStar color={"orange"}/>
                                    <FaStar color={"orange"}/>
                                    <FaStar color={"orange"}/>
                                    <FaRegStar color={"orange"}/>
                                </div>
                                <p className="text-[#474b4d] font-normal text-sm">4/5</p>
                            </div>
                        </div>
                        <div className="py-[5px] border-b border-[#dedede] w-full grid grid-cols-2">
                            <div className="flex flex-col justify-between">
                                <p className="mb-2.5 text-base font-semibold text-[#474b4d]">Ngày khởi hành</p>
                                <p className="text-[#474b4d] font-normal text-sm">Ngày</p>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <div className="flex gap-1">
                                    <FaCalendarAlt color={"#474b4d"}/>
                                </div>
                                <p className="text-[#474b4d] font-normal text-sm">1/7/2023</p>
                            </div>
                        </div>
                        <div className="py-[5px] border-b border-[#dedede] w-full grid grid-cols-2">
                            <div className="flex flex-col justify-between">
                                <p className="mb-2.5 text-base font-semibold text-[#474b4d]">Loại tour</p>
                                <p className="text-[#474b4d] font-normal text-sm">Loại</p>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <div className="flex gap-1">
                                    <FaMountain color={"#474b4d"}/>
                                </div>
                                <p className="text-[#474b4d] font-normal text-sm">Biển</p>
                            </div>
                        </div>
                        <div className="py-[5px] border-b border-[#dedede] w-full grid grid-cols-2">
                            <div className="flex flex-col justify-between">
                                <p className="mb-2.5 text-base font-semibold text-[#474b4d]">Đánh giá</p>
                                <p className="text-[#474b4d] font-normal text-sm">1 Đánh giá</p>
                            </div>
                            <div className="flex flex-col justify-between items-end">
                                <div className="flex gap-1">
                                    <MdGroups color={"#474b4d"}/>
                                </div>
                                <p className="text-[#474b4d] font-normal text-sm">4/5</p>
                            </div>
                        </div>
                    </div>
                    <button className="p-2.5 w-full md:w-[350px] shadow-[0_0_20px_#00000033] rounded-lg bg-[#4366c5] text-[28px] font-medium text-white">Đặt ngay</button>
                </div>
            </div>
        </div>
    );
};

export default Page;