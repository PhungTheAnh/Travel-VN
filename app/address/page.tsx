import React from 'react';
import BannerPage from "@/app/component/bannerPage/bannerPage";
import AddressService from "@/app/component/addressComponent/adressService";
import AddressSearch from "@/app/component/addressComponent/addressSearch";

const Page = () => {
  const pageTitle = "Địa điểm"
  return (
    <div className="w-f h-full address_page">
      <BannerPage pageTitle={pageTitle} pageSlogan="Điểm đến tốt nhất ở Việt Nam"
                  banner={" bg-[url('/banner/halong1.jpg')]"}/>
      <AddressSearch />
      <AddressService />
    </div>
  );
};

export default Page;