'use client'

import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import scrollEffect from "@/app/component/function/scrollEffect";

const AboutTeam = () => {
  const titleServiceRef = useRef<HTMLInputElement | null>(null)
  const mainServiceRef = useRef<HTMLInputElement | null>(null)

  useEffect(()=>{
    const onScroll = () => {
      scrollEffect(titleServiceRef, "title-active")
      scrollEffect(mainServiceRef, "main-active")
    }
    window.addEventListener("scroll", onScroll)
  }, [])
  return (
    <div className="w-full h-[80vh] md:h-[70vh] relative py-[40px] md:py-[60px] xl:py-[80px] bg-white">
      <div className="w-[95%] 2xl:w-[85%] mx-auto h-full flex flex-col md:flex-row gap-[30px] md:gap-0 items-center justify-center">
        <div ref={titleServiceRef} className="text-left md:w-1/2 mt-[30] md:mr-[50px] flex flex-col gap-[15px] opacity-0 translate-x-[-160px] transition-all duration-1000">
          <p className=" text-[#252525] text-center md:text-left text-[35px] md:text-[40px] xl:text-[45px] font-semibold tracking-[2px]">Team của
            chúng tôi</p>
          <p className=" text-[#333333] text-left text-base leading-[25px] mb-[15px]">
            Chúng tôi là một nhóm nhỏ nhưng hùng mạnh gồm những người đam mê du lịch. Trong số chúng tôi có những người
            lập kế hoạch du lịch, nhà tiếp thị, nhà văn, nhà thiết kế, người mơ mộng và khách du lịch, giống như bạn!
          </p>
          <div className="w-fit relative py-[15px] px-[45px] bg-[#4366c5] text-[17px] font-medium text-white border border-[#4366c5] rounded-xl cursor-pointer drop-shadow-[2px_2px_3px_rgba(0,0,0,.2)]">
            Gặp chúng tôi
          </div>
        </div>
        <div ref={mainServiceRef} className="w-full md:w-1/2 h-full overflow-hidden opacity-0 translate-x-[160px] transition-all duration-1000 rounded-xl">
          <Image src={"/aboutme/team.png"} alt={""} width={0} height={0} sizes="100vh" className="w-full min-h-[400px] h-full object-cover object-center rounded-xl"/>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;