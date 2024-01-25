"use client"

import React, {useRef} from 'react';
import BannerPageDetail from "@/app/component/bannerPage/bannerPageDetail";
import Image from "next/image";
import SideBar from "@/app/component/SideBar/SideBar";

const Page = () => {
  const pageTitle = "Địa điểm"
  return (
    <div className="addressDetail_page">
      <BannerPageDetail pageTitle={pageTitle} pageSlogan="Điểm đến tốt nhất ở Việt Nam"
                        banner={" bg-[url('/banner/halong1.jpg')]"}/>
      <div className="py-[80px] w-full relative">
        <div className="w-[95%] 2xl:w-[85%] mx-auto flex flex-col lg:flex-row gap-[30px]">
          <div className='lg:w-[70%] w-full text-base text-black'>
            <p className='text-[28px] font-bold text-[#252525] mb-[30px]'>Mùa hè lý tưởng ở Hạ Long - Top 5 hoạt động
              trải nghiệm
              được yêu thích nhất</p>
            <p>
              Du lịch Vịnh Hạ Long từ lâu đã trở thành điểm đến lý tưởng trong mỗi dịp hè của du khách bốn phương, đặc
              biệt là giới trẻ. Hãy tận hưởng chuyến du lịch hè trẻ trung, năng động với các hoạt động thú vị ở đây như
              chèo thuyền Kayak, các trò chơi dưới nước và dịch vụ nghỉ dưỡng tại bãi biển mới Manira Bay… để có những
              trải nghiệm và kỷ niệm tuyệt vời nhất bạn nhé!
              <br/>
              <br/>
              Hạ Long luôn được lòng tất cả du khách viếng thăm trong những ngày hè nóng bức, bởi sở hữu một trong những
              vùng vịnh biển đẹp bậc nhất thế giới. Với khí hậu mát mẻ lại sở hữu nhiều bãi biển thiên đường và dịch vụ
              nghỉ dưỡng cao cấp, bạn sẽ có một kỳ nghỉ đúng chất nhất tại Vịnh Hạ Long với các trải nghiệm sau đây:
            </p>
            <br/>
            <p className='text-darkCharcoal text-xl font-semibold'>Lặn biển khám phá lòng đại dương</p>
            <br/>
            <Image src={"/places/halong2.jpg"} alt={""} width={0} height={0} className="w-full object-cover"
                   unoptimized/>
            <br/>
            <p>Với hệ thống đảo đá và hang động tuyệt vời, vùng biển này mang trong mình những bí mật kỳ bí và độc đáo
              mà chỉ có thể khám phá dưới lòng biển. Nơi đây, các tín đồ lặn biển có cơ hội khám phá thế giới dưới nước
              với hàng trăm loài cá, bọt biển và các sinh vật khác sinh sống trong môi trường đa dạng này. Đặc biệt là
              các rạn san hô tuyệt đẹp ở Vịnh Bái Tử Long. Tại đây có rất nhiều rạn san hô lớn, nhiều màu sắc và có
              nhiều động vật nhỏ sinh sống. Nước biển cũng xanh trong nên rất thích hợp để lặn ngắm san hô. Đã tới Hạ
              Long, bạn không nên bỏ lỡ trải nghiệm thú vị này.</p>
            <br/>
            <p className='text-darkCharcoal text-xl font-semibold'>Trải nghiệm dù lượn trên biển Hạ Long</p>
            <br/>
            <Image src={"/places/halong4.jpg"} alt={""} width={0} height={0} className="w-full object-cover"
                   unoptimized/>
            <br/>
            <p>Trải nghiệm cảm giác bay lượn trên không cũng là một trong những hoạt động du lịch ưa chuộng trong những
              ngày hè tại Hạ Long. Bạn sẽ tận hưởng cảm giác băng mình trong không trung, thu vào tầm mắt toàn bộ bãi
              biển với cát trắng, biển xanh mênh mông. Hay đơn giản nằm phơi mình giữa không gian biển đảo ngắm trời
              xanh mây trắng, nghe sóng vỗ rì rào… thật thú vị biết bao.</p>
          </div>
          <SideBar/>
        </div>
      </div>
    </div>
  );
};

export default Page;