'use client'

import React, {useEffect} from "react";
import BannerHome from "@/app/component/bannerHome/bannerHome";
import Places from "@/app/component/places/places";
import Tours from "@/app/component/tours/tours";
import Evaluate from "@/app/component/evaluate/evaluate";
import Posts from "@/app/component/posts/posts";
import Partner from "@/app/component/partner/partner";

export default function Home() {

  useEffect(() => {
    // let callback1 = (entries: any, observer: any) => {
    //   entries.forEach((entry: any) => {
    //     if (entry.isIntersecting) {
    //       setPlaceTitle(" title-active")
    //     } else {
    //       setPlaceTitle("")
    //     }
    //   });
    // };
    // const observer1 = new IntersectionObserver(callback1);
    // // @ts-ignore
    // observer1.observe(placeTitleRef.current);
    // let callback2 = (entries: any, observer: any) => {
    //   entries.forEach((entry: any) => {
    //     if (entry.isIntersecting) {
    //       setTourTitle(" title-active")
    //     } else {
    //       setTourTitle("")
    //     }
    //   });
    // };
    // const observer2 = new IntersectionObserver(callback2);
    // // @ts-ignore
    // observer2.observe(tourTitleRef.current);
    const onScroll: EventListener = () => {
    }
    window.addEventListener("scroll", onScroll)
  })

  return (
    <div className="">
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


