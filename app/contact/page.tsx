import React from 'react';
import BannerPage from "@/app/component/bannerPage/bannerPage";
import PostsList from "@/app/component/postsComponent/postsList";
import Link from "next/link";
import {FaPhoneVolume} from "react-icons/fa";

const Page = () => {
  const pageTitle = "Blog"
  return (
    <div>
      <BannerPage pageTitle={pageTitle} pageSlogan="Thông tin hữu ích cho du lịch"
                  banner={" bg-[url('/banner/nhatrang4.jpg')]"}/>
      <div className="py-[30px] w-full relative">
        <div className="flex w-[95%] 2xl:w-[76%] mx-auto">
          <div className="w-full relative">
            <div className="w-[95%] 2xl:w-[85%] mx-auto text-center">
              {/* title */}
              <div className="w-full mt-[30] mb-[15px] flex flex-col items-center gap-[15px]">
                <p
                  className="text-[#333333] text-[30px] md:text-[35px] xl:text-[40px] font-semibold tracking-[2px] uppercase">Liên
                  hệ với chúng tôi</p>
                <p className="text-[#666666] text-base xl:text-xl tracking-[0.8px] leading-[25px]">Liên hệ với chúng tôi
                  qua email, điện thoại hoặc địa chỉ của chúng tôi dưới đây.</p>
              </div>
              {/* contact */}
              <div className="w-full flex gap-[30px] flex-col lg:flex-row justify-center">
                  <Link href="tel:0386136374" className="">
                    <div
                      className="w-full bg-[#5d85d4] border-[5px] border-[#a6c3ea] py-[30px] px-5 flex gap-5 items-center justify-center">
                      <FaPhoneVolume size={30} color={"white"}/>
                      <span className="text-white text-2xl">0386136374</span>
                    </div>
                    <div>

                    </div>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;