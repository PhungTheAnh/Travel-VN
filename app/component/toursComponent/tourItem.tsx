import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {CiTimer} from "react-icons/ci";
import {AiFillStar, AiOutlineShoppingCart} from "react-icons/ai";
import {paths} from "@/app/component/router/path";

const TourItem = () => {
    return (
        <div className="bg-white transition-all duration-300 outline-0 p-[15px] rounded-xl relative">
            <div className="h-[300px] mb-[20px] rounded-xl shadow-lg">
                <Image src="/tours/codohue3 (1).jpg" alt={"Cố Đô Huế"} width={0}
                       height={0}
                       sizes="100vw"
                       className="w-full h-full object-cover rounded-xl "></Image>
            </div>
            <Link href={paths.tours.slug("codohue")}><p className="text-darkCharcoal text-[24px] font-bold truncate">Hà Nội - Cố Đô Huế - Đồi Vọng
                Cảnh - Chùa
                Thiên Mụ</p></Link>
            <div className="flex gap-[5px] items-center mb-[6px]">
                <CiTimer size={16} color={"#4366c5"}/>
                <p className='text-sm text-[#adadad]'>3 Ngày</p>
                <p className='text-sm text-[#adadad]'>2 Đêm</p>
            </div>
            <div className="flex gap-[10px] items-center mb-[10px]">
                <div className="flex gap-[2px] items-center">
                    <AiFillStar size={14} color={"#ffa11a"}/>
                    <AiFillStar size={14} color={"#ffa11a"}/>
                    <AiFillStar size={14} color={"#ffa11a"}/>
                    <AiFillStar size={14} color={"#ffa11a"}/>
                    <AiFillStar size={14} color={"#ffa11a"}/>
                </div>
                <p className='text-sm text-[#adadad]'>(105 Đánh giá)</p>
            </div>
            <p className='text-sm text-[#adadad] line-clamp-3 mb-[15px]'>Lorem ipsum dolor sit amet consectetur,
                adipisicing
                elit. Aspernatur, laborum nobis
                at facilis nihil totam necessitatibus eligendi id impedit architecto quod suscipit
                minus sit explicabo commodi a fugiat consectetur illo.</p>
            <div className="">
                <p className="text-sm text-[#adadad] font-bold line-through">3,000,000 <span
                    className="underline">đ</span>
                </p>
                <p className="text-lg leading-[1rem] text-primary font-black">3,000,000 <span
                    className="underline">đ</span>
                </p>
            </div>
            <a href={paths.tours.slug("codohue")}
                className="group btn_order min-w-[150px] xl:min-w-[175px] hover:delay-1000 flex gap-1.5 items-center justify-center py-1.5 xl:py-2.5 rounded-xl rounded-tl-[50px] rounded-bl-[5px] absolute right-0 bottom-0">
                <p
                    className="group-hover:text-[0px] group-hover:translate-x-[35px] text-white text-sm xl:text-base font-[300] transition-all duration-300">Đặt
                    Tour ngay</p>
                <AiOutlineShoppingCart className="group-hover:animate-wiggle" size={24} color={"white"}/>
            </a>
        </div>
    );
};

export default TourItem;