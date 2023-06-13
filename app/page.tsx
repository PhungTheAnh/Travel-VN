'use client'

import {FiChevronRight} from "react-icons/fi";
import Places from "@/app/component/places/page";
import React, {useEffect, useRef, useState} from "react";
import Tours from "@/app/component/tours/page";
import Evaluate from "@/app/component/evaluate/page";
import scrollEffect from "@/app/component/function/scrollEffect";
import Posts from "@/app/component/posts/page";
import Banner from "@/app/component/banner/page";
import Partner from "@/app/component/partner/page";

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
      <Banner/>
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


