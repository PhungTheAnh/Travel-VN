import React from 'react';
import Image from "next/image";

const AboutCompany = () => {
  const AboutCompanySection = (src: string ,title: string, content: string) => (
    <div className="p-[15px] flex flex-col gap-[30px] items-center w-full">
      <div className="w-[150px] h-[150px]">
        <Image src={src} width={0} height={0} sizes={"100vh"} className="w-full h-full object-cover" alt={""}/>
      </div>
      <div className="flex flex-col gap-[15px] items-center justify-center">
        <p className="text-[#474d4b] text-[24px] font-semibold text-center leading-[27px]">{title}</p>
        <p className="text-[#1f2933] text-sm leading-[24px] text-center max-w-[400px] md:max-w-none">{content}</p>
      </div>
    </div>
  )
  return (
    <div className="w-full relative py-[30px]">
      <div className="w-[95%] 2xl:w-[85%] mx-auto text-center">
        <div className="w-full mt-[30] mb-[15px] flex flex-col items-center gap-[15px]">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-[#474d4b] text-[30px] md:text-[35px] xl:text-[40px] font-semibold tracking-[2px] uppercase">CÔNG TY DU LỊCH "VN TRAVEL"</p>
          <p className="text-[#1f2933] text-base xl:text-xl tracking-[0.8px] leading-[25px]">Đi trên một cuộc hành trình với chúng tôi - Chúng tôi biến những kỳ nghỉ trở nên kỳ diệu</p>
        </div>
        <div className="flex w-full md:flex-row flex-col transition-all duration-500">
          {AboutCompanySection("/partner/logo-partner.png","Du lịch và khám phá", "Gúp cho du khách nâng cao hiểu biết, nâng cao chất lượng các mối quan hệ xã hội, giúp mang lại cuộc sống hạnh phúc và thành công.")}
          {AboutCompanySection("/partner/logo-pinterest.png","Du lịch bền vững", "Hướng đến việc giảm thiểu tối đa các chi phí, nâng cao lợi ích du lịch cho khách thập phương và người dân bản địa. Đây cũng là hướng đi bền vững, lâu dài, không làm ảnh hưởng xấu đến nguồn sinh thái.")}
          {AboutCompanySection("/partner/logo-partner.png","Sứ mệnh và giá trị", "Đổi mới sáng tạo và phát triển sản phẩm dịch vụ du lịch có chất lượng tốt nhằm đáp ứng nhu cầu đa dạng và phong phú của khách hàng trong nước và quốc tế của VN Travel.")}
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;