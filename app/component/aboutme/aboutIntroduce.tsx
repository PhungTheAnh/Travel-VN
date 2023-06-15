'use client'

import React, {useEffect, useRef} from 'react';
import scrollEffect from "@/app/component/function/scrollEffect";
import Image from "next/image";

const AboutIntroduce = () => {
  const titleCompanyRef = useRef<HTMLInputElement | null>(null)
  const contentCompany1Ref = useRef<HTMLInputElement | null>(null)
  const contentCompany2Ref = useRef<HTMLInputElement | null>(null)
  const imgCompany1Ref = useRef<HTMLInputElement | null>(null)
  const imgCompany2Ref = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const onScroll: EventListener = () => {
      scrollEffect(titleCompanyRef, "title-active")
      scrollEffect(contentCompany1Ref, "content-active")
      scrollEffect(contentCompany2Ref, "content-active")
      scrollEffect(imgCompany1Ref, "img-active")
      scrollEffect(imgCompany2Ref, "img-active")
    }
    window.addEventListener("scroll", onScroll)
  }, [])
  return (
    <div className="w-full relative py-[30px] bg-[#fafafa]">
      <div className="w-[95%] mx-auto text-center">
        <div ref={titleCompanyRef}
             className="w-full mt-[30px] mb-[40px] flex flex-col items-center gap-[15px] transition-all duration-1000 translate-y-[-160px] opacity-0">
          <p
            className="text-[#474d4b] text-[30px] md:text-[35px] xl:text-[40px] font-semibold tracking-[2px] uppercase">GIỚI
            THIỆU VỀ {`"VN TRAVEL"`}</p>
          <p className="text-[#1f2933] text-base xl:text-xl tracking-[0.8px] leading-[25px]">Nạp năng lượng cho tâm hồn
            bạn bằng những chuyến du lịch</p>
        </div>
        <div className="p-[15px] md:p-[30px] shadow-[0_10px_20px_#00000022] rounded-xl flex flex-col items-center justify-center gap-[20px] md:gap-[5px]">
          <div className="flex md:flex-row flex-col items-center justify-center">
            <div ref={contentCompany1Ref} className="flex gap-[15px] flex-col w-full md:w-1/2 p-[15px] md:p-[30px] xl:p-[60px] translate-x-[-100px] opacity-0 transition-all duration-1000">
              <p className="text-[#4366c5] text-[24px] font-semibold leading-[35px]">VN Travel</p>
              <p className="text-[#1f2933] text-sm text-left leading-[25px]">Tại VN Travel chúng tôi đam mê giúp mọi người
                khám phá những điều tuyệt vời ở Việt Nam. Nhiệm vụ của chúng tôi là làm cho chuyến du lịch trở nên dễ tiếp
                cận và thú vị cho mọi người.</p>
              <p className="text-[#1f2933] text-sm text-left leading-[25px]">Tại VN Travel, chúng tôi tin rằng du lịch
                phải bền vững và có trách nhiệm. Chúng tôi cam kết giảm thiểu tác động của chúng tôi đối với môi trường và
                hỗ trợ cộng đồng địa phương ở bất cứ nơi nào chúng tôi đến.Chúng tôi cũng tin tưởng vào việc cung cấp cho
                khách hàng của mình dịch vụ đặc biệt trên mọi bước đường.</p>
            </div>
            <div ref={imgCompany1Ref} className="w-full md:w-1/2 h-[300px] md:h-[400px] xl:h-[500px] rounded-xl overflow-hidden opacity-0 scale-[0.6] transition-all duration-1000">
              <Image src={"/aboutme/hoguom.jpg"} alt={""} width={0} height={0} sizes={"100vh"}
                     className="w-full h-full object-cover"/>
            </div>
          </div>
          {/**/}
          <div className="flex md:flex-row flex-col-reverse items-center justify-center">
            <div ref={imgCompany2Ref} className="w-full md:w-1/2 h-[300px] md:h-[400px] xl:h-[500px] rounded-xl overflow-hidden opacity-0 scale-[0.6] transition-all duration-1000">
              <Image src={"/aboutme/hoguom.jpg"} alt={""} width={0} height={0} sizes={"100vh"}
                     className="w-full h-full object-cover"/>
            </div>
            <div ref={contentCompany2Ref} className="flex gap-[15px] flex-col w-full md:w-1/2 p-[15px] md:p-[30px] xl:p-[60px] translate-x-[-100px] opacity-0 transition-all duration-1000">
              <p className="text-[#4366c5] text-[24px] font-semibold leading-[35px]">VN Travel</p>
              <p className="text-[#1f2933] text-sm text-left leading-[25px]">Tại VN Travel chúng tôi đam mê giúp mọi người
                khám phá những điều tuyệt vời ở Việt Nam. Nhiệm vụ của chúng tôi là làm cho chuyến du lịch trở nên dễ tiếp
                cận và thú vị cho mọi người.</p>
              <p className="text-[#1f2933] text-sm text-left leading-[25px]">Tại VN Travel, chúng tôi tin rằng du lịch
                phải bền vững và có trách nhiệm. Chúng tôi cam kết giảm thiểu tác động của chúng tôi đối với môi trường và
                hỗ trợ cộng đồng địa phương ở bất cứ nơi nào chúng tôi đến.Chúng tôi cũng tin tưởng vào việc cung cấp cho
                khách hàng của mình dịch vụ đặc biệt trên mọi bước đường.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntroduce;