import React from 'react';
import BannerPage from "@/app/component/bannerPage/bannerPage";
import ToursFilter from "@/app/component/toursComponent/toursFilter";
import PostsList from "@/app/component/postsComponent/postsList";

const Page = () => {
  const pageTitle = "Blog"
  return (
    <div className="w-f h-full posts_page">
      <BannerPage pageTitle={pageTitle} pageSlogan="Thông tin hữu ích cho du lịch"
                  banner={" bg-[url('/banner/cauvang2.png')]"}/>
      <div className="py-[60px] lg:py-[80px] w-full relative bg-[#fafafa]">
        <div className="flex w-[95%] 2xl:w-[76%] mx-auto">
          <PostsList/>
        </div>
      </div>
    </div>
  );
};

export default Page;