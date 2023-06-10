import {FiChevronRight} from "react-icons/fi";
import Places from "@/app/places/page";

export default function Home() {
  return (
    <div className={""}>
      <div className={"bg-[url('/bg.png')] w-full h-[100vh] flex items-center justify-center"}>
        <div className={"flex flex-col items-center justify-center relative translate-y-[-30%]"}>
          <p className={"text-white text-[4rem] font-light tracking-[3px]"}>Travel</p>
          <p className={"text-white text-[8rem] font-normal tracking-[6px] leading-[150px]"}>Viet Nam</p>
        </div>
      </div>
      <div className={"mt-[80px] flex flex-col items-center justify-center w-[90%] mx-auto"}>
        <p className={"text-[#231d0d] text-[45px] font-bold leading-[45px] text-center"}>Địa điểm phổ biến</p>
        <div className={"flex gap-[10px] items-center justify-center mt-[15px] mb-[30px] cursor-pointer"}>
          <p className={"text-[#4366c5] text-base"}>Xem tất cả</p>
          <FiChevronRight color={"#4366c5"} size={18}/>
        </div>
        <Places/>
      </div>
    </div>
  )
}
