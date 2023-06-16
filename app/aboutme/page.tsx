import React from 'react';
import BannerPage from "@/app/component/bannerPage/bannerPage";
import AboutCompany from "@/app/component/aboutme/aboutCompany";
import AboutIntroduce from "@/app/component/aboutme/aboutIntroduce";
import AboutService from "@/app/component/aboutme/aboutService";
import AboutTeam from "@/app/component/aboutme/aboutTeam";
import AboutContact from "@/app/component/aboutme/aboutContact";
import AboutSlogan from "@/app/component/aboutme/aboutSlogan";

const Page = () => {
  const pageTitle = "Về chúng tôi"
  return (
    <div className="w-f h-full about_page">
      <BannerPage pageTitle={pageTitle} pageSlogan="Điều tốt nhất cho khách hàng của chúng tôi"
                  banner={" bg-[url('/banner/dalat.jpg')]"}/>
      <div className="w-full py-[50px] xl:py-[80px] bg-white">
        <AboutCompany/>
        <AboutIntroduce/>
        <AboutService/>
        <AboutTeam/>
        <AboutSlogan/>
        <AboutContact/>
      </div>
    </div>
  );
};

export default Page;