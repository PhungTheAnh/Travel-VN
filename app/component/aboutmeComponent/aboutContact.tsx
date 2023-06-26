'use client'

import React from 'react';
import {Input, Textarea} from '@nextui-org/react';
import {FiPhone} from "react-icons/fi";
import Link from "next/link";

const AboutContact = () => {
  return (
    <div className="w-full relative py-[40px] md:py-[60px] xl:py-[80px]">
      <div className="w-[95%] 2xl:w-[85%] mx-auto">
        <div className="w-full relative z-[2] mt-[30] mb-[40px] flex flex-col items-center gap-[15px]">
          {/*eslint-disable-next-line react/no-unescaped-entities*/}
          <p
            className="text-[#252525] text-[30px] md:text-[35px] xl:text-[40px] font-semibold tracking-[2px] uppercase">Liên
            hệ với chúng tôi</p>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row gap-[30px] md:gap-0">
          <div className="w-full md:w-1/2 pr-0 md:pr-[20px] lg:pr-[40px] xl:pr-[50px]">
            <p className="text-base font-normal leading-[25px] mb-[15px] text-[#252525]">“Bạn đã sẵn sàng bắt đầu lên kế hoạch cho chuyến phiêu lưu tiếp theo chưa? Khám phá trang web của chúng
              tôi để tìm điểm đến hoàn hảo cho bạn hoặc liên hệ với nhóm của chúng tôi để nhận các đề xuất du lịch được
              cá nhân hóa.”</p>
            <div className="flex items-start md:items-center flex-col md:flex-row gap-[10px]">
              <div className="flex items-center gap-[10px]">
                <FiPhone size={24} color={"#4366c5"} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"/>
                <p className="text-sm md:text-base text-[#252525]">Hãy gọi cho chúng tôi:</p>
              </div>
              <Link href={"tel:0386136374"} className="text-lg md:text-lg xl:text-2xl text-primary font-semibold">0386136374</Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-[30px] mb-[50px] formContactAbout">
              <Input labelPlaceholder="Họ và tên" width={"100%"} className="border border-[#4366c5]"/>
              <Input labelPlaceholder="Email" width={"100%"} className="border border-[#4366c5]"/>
            </div>
            <Textarea labelPlaceholder="Nội dung" rows={10} cols={30} width={"100%"} status="default" className="border border-[#4366c5]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;