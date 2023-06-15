'use client'

import React, {useEffect} from "react";
import BannerHome from "@/app/component/bannerHome/bannerHome";
import Places from "@/app/component/places/places";
import Tours from "@/app/component/tours/tours";
import Evaluate from "@/app/component/evaluate/evaluate";
import Posts from "@/app/component/posts/posts";
import Partner from "@/app/component/partner/partner";

export default function Home() {

  return (
    <div className="home_page">
      <BannerHome/>
      {/* */}
      <Places/>
      {/* */}
      <Tours/>
      {/* */}
      <Evaluate/>
      {/* */}
      <Posts/>
      {/*  */}
      <Partner/>
    </div>
  )
}


