'use client'

import React, {useEffect} from "react";
import BannerHome from "@/app/component/homeComponent/bannerHome";
import Places from "@/app/component/homeComponent/places";
import Tours from "@/app/component/homeComponent/tours";
import Evaluate from "@/app/component/homeComponent/evaluate";
import Posts from "@/app/component/homeComponent/posts";
import Partner from "@/app/component/homeComponent/partner";

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


