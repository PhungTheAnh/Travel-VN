'use client'

import React, {useEffect, useRef} from 'react';
import {AiFillStar} from "react-icons/ai";
import Slider from "react-slick";
import scrollEffect from "@/app/component/function/scrollEffect";

const Evaluate = () => {
  const evaluateTitleRef = useRef<HTMLInputElement | null>(null)
  const evaluateSlideRef = useRef<HTMLInputElement | null>(null)
  useEffect(()=>{

    let callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          evaluateTitleRef.current?.classList.add("evaluate-title-active")
        } else {
          evaluateTitleRef.current?.classList.remove("evaluate-title-active")
        }
      });
    };
    const observer = new IntersectionObserver(callback);
    // @ts-ignore
    observer.observe(evaluateTitleRef.current);
    // const onScroll = (e: any) => {
    //   // @ts-ignore
    //   if(window.scrollY >= (evaluateTitleRef.current?.getBoundingClientRect().top + 1000)) {
    //     evaluateTitleRef.current?.classList.add("evaluate-title-active")
    //   } else {
    //     evaluateTitleRef.current?.classList.remove("evaluate-title-active")
    //   }
    // }
    // window.addEventListener("scroll", onScroll)
    const onScroll: EventListener = () => {
      scrollEffect(evaluateSlideRef,"evaluate-slide-active")
    }
    window.addEventListener("scroll", onScroll)
  }, [])


  //
  const evaluate_slide = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="evaluate w-full h-[80vh] md:h-[85vh] bg-[url('/evaluate/halong6.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="w-full md:w-[50%] h-full md:float-right flex items-center justify-center">
        <div className='evaluate-main flex flex-col justify-center h-full w-[80%] md:w-[75%]'>
          <div ref={evaluateTitleRef} className="evaluate-title flex flex-col gap-3 opacity-0 translate-x-[-20%] transition-all duration-1000">
            <p className="text-base text-[#7ca4de] font-bold leading-6">Đánh giá</p>
            <p className="text-[35px] md:text-[42px] lg:text-[50px] text-white font-medium md:max-w-[450px] leading-[40px] md:leading-[55px]">Mọi người nói gì về chúng
              tôi</p>
            <div className="w-[50px] h-[2px] bg-[#7ca4de] my-[35px]"></div>
          </div>
          <div ref={evaluateSlideRef} className="opacity-0 translate-y-[80%] transition-all duration-1000">
            <Slider  {...evaluate_slide}>
              <div>
                <p className="text-sm md:text-base text-[#d3cfcd] leading-[30px] mb-[35px]">Tất cả những ai thích đi bộ xung quanh
                  những chuyến đi mới nên sử dụng trang web này để có thêm ý tưởng! bạn
                  bè của tôi và tôi rất thích các tour du lịch của các bạn, được đề nghị và muốn thử một cái gì đó mới vào
                  lần
                  tới. Cảm ơn!</p>
                <div className="flex flex-col gap-[10px] items-end">
                  <p className="text-2xl md:text-[28px] text-white font-medium">Nami N.</p>
                  <div className="flex gap-[2px]">
                    <AiFillStar color={"#ffa11a"}/>
                    <AiFillStar color={"#ffa11a"}/>
                    <AiFillStar color={"#ffa11a"}/>
                    <AiFillStar color={"#ffa11a"}/>
                    <AiFillStar color={"#ffa11a"}/>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-base text-[#d3cfcd] leading-[30px] mb-[35px]">Tất cả những ai thích đi bộ xung quanh
                  những chuyến đi mới nên sử dụng trang web này để có thêm ý tưởng! bạn
                  bè của tôi và tôi rất thích các tour du lịch của các bạn, được đề nghị và muốn thử một cái gì đó mới vào
                  lần
                  tới. Cảm ơn!</p>
                <div className="flex flex-col gap-[10px] items-end">
                  <p className="text-[28px] text-white font-medium">Nami N.</p>
                  <div className="flex gap-[2px]">
                    <AiFillStar color={"#ffa11a"}/>
                    <AiFillStar color={"#ffa11a"}/>
                    <AiFillStar color={"#ffa11a"}/>
                    <AiFillStar color={"#ffa11a"}/>
                    <AiFillStar color={"#ffa11a"}/>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluate;