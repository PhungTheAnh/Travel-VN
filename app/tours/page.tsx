import React from 'react';
import BannerPage from "@/app/component/bannerPage/bannerPage";
import ToursFilter from "@/app/component/toursComponent/toursFilter";

const Page = () => {
  const pageTitle = "Chuyến đi"
  return (
    <div className="w-f h-full tours_page">
      <BannerPage pageTitle={pageTitle} pageSlogan="Điểm đến tốt nhất ở Việt Nam"
                  banner={" bg-[url('/banner/nhatrang4.jpg')]"}/>
      <div className="py-[60px] lg:py-[80px] px-[15px] w-full relative bg-[#fafafa]">
        <ToursFilter/>
      </div>
    </div>
  );
};

export default Page;