"use client"

import React from 'react';
import BannerPageDetail from "@/app/component/bannerPage/bannerPageDetail";
import Image from "next/image";
import SideBar from "@/app/component/SideBar/SideBar";

const Page = () => {
  const pageTitle = "Bài viết"
  return (
    <div className="postDetail_page"><BannerPageDetail pageTitle={pageTitle} pageSlogan="Điểm đến tốt nhất ở Việt Nam"
                                                       banner={" bg-[url('/places/halong2.jpg')]"}/>
      <div className="py-[80px] w-full relative">
        <div className="w-[95%] 2xl:w-[85%] mx-auto flex flex flex-col lg:flex-row gap-[30px]">
          <div className='lg:w-[70%] w-full text-base text-black shadow-[0_10px_20px_#00000022] rounded-xl p-[15px]'>
            <p className='text-[28px] font-bold text-[#252525] mb-[30px]'>Nha Trang - Thiên đường nghỉ dưỡng</p>
            <Image src={"/banner/nhatrang4.jpg"} alt={""} width={0} height={0} className="w-full object-cover"
                   unoptimized/>
            <br/>
            <p>Với hệ thống đảo đá và hang động tuyệt vời, vùng biển này mang trong mình những bí mật kỳ bí và độc đáo
              mà chỉ có thể khám phá dưới lòng biển. Nơi đây, các tín đồ lặn biển có cơ hội khám phá thế giới dưới nước
              với hàng trăm loài cá, bọt biển và các sinh vật khác sinh sống trong môi trường đa dạng này. Đặc biệt là
              các rạn san hô tuyệt đẹp ở Vịnh Bái Tử Long. Tại đây có rất nhiều rạn san hô lớn, nhiều màu sắc và có
              nhiều động vật nhỏ sinh sống. Nước biển cũng xanh trong nên rất thích hợp để lặn ngắm san hô. Đã tới Hạ
              Long, bạn không nên bỏ lỡ trải nghiệm thú vị này.</p>
            <br/>
            <p>Với hệ thống đảo đá và hang động tuyệt vời, vùng biển này mang trong mình những bí mật kỳ bí và độc đáo
              mà chỉ có thể khám phá dưới lòng biển. Nơi đây, các tín đồ lặn biển có cơ hội khám phá thế giới dưới nước
              với hàng trăm loài cá, bọt biển và các sinh vật khác sinh sống trong môi trường đa dạng này. Đặc biệt là
              các rạn san hô tuyệt đẹp ở Vịnh Bái Tử Long. Tại đây có rất nhiều rạn san hô lớn, nhiều màu sắc và có
              nhiều động vật nhỏ sinh sống. Nước biển cũng xanh trong nên rất thích hợp để lặn ngắm san hô. Đã tới Hạ
              Long, bạn không nên bỏ lỡ trải nghiệm thú vị này.</p>
            <div className='w-full my-[30px] flex'>
              <p>Đăng bởi <span>AnhPT</span></p>
            </div>
          </div>
          <SideBar/>
        </div>
      </div>
    </div>
  );
};

export default Page;