'use client'

import React, {useEffect, useRef} from 'react';
import Image from "next/image";

const BannerHome = () => {
  const bannerRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    const effect = Array.from(document.getElementsByClassName('effect') as HTMLCollectionOf<HTMLElement>)
    let xValue = 0
    let yValue = 0
    const MouseMove = (e: any) => {
      xValue = e.clientX - window.innerWidth / 2
      yValue = e.clientY - window.innerHeight / 2
      effect.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transition = `none`
        // @ts-ignore
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`
      })
    }
    const MouseLeave = (e: any) => {
      effect.forEach(el => {
        el.style.transform = `translate(-50%, -50%)`
        el.style.transition = `all 0.3s ease-in-out`
      })
    }
    bannerRef.current?.addEventListener("mousemove", MouseMove)
    bannerRef.current?.addEventListener("mouseleave", MouseLeave)
  }, [])
  return (
    <div ref={bannerRef} className="relative bg-[url('/banner/bg.png')] bg-no-repeat bg-cover w-full h-[100vh] flex items-center justify-center overflow-hidden">
      <div data-speedx="0.3" data-speedy="0.1" className="banner effect z-[1] absolute top-[50%] left-[50%] w-[1100px] sm:w-[1200px] md:w-[1400px] lg:w-[1700px] xl:w-[2000px] 2xl:w-[2400px] h-full ">
        <Image className="w-full h-full" src={"/banner/bg.png"} alt={""} width={0} height={0} sizes="100vh"
               unoptimized/>
      </div>
      <div data-speedx="0.1" data-speedy="0.1" className="title effect z-[7] absolute top-[40%] left-1/2 w-full flex flex-col items-center justify-center">
        <p className="text-white text-[3rem] xl:text-[4rem] font-light tracking-[3px]">Travel</p>
        <p
          className="text-white text-[3rem] sm:text-[6rem] xl:text-[8rem] font-normal tracking-[3px] md:tracking-[6px] leading-[50px] sm:leading-[100px] md:leading-[150px]">Viet
          Nam</p>
      </div>
      <div data-speedx="0.1" data-speedy="0.1" className="person effect z-[9] absolute  w-full h-full ">
        <Image className="w-full h-full object-cover lg:object-fill" src={"/moutain/person.png"} alt={""} width={0} height={0}
               sizes="100vh" unoptimized/>
      </div>
      <div data-speedx="0.1" data-speedy="0.1" className="moutain1 effect z-[8] absolute w-[1100px] sm:w-[1200px] md:w-[1400px] lg:w-[1700px] xl:w-[2000px] 2xl:w-[2400px] h-full">
        <Image className="w-full h-full" src={"/moutain/moutain1.png"} alt={""} width={0} height={0}
               sizes="100vh" unoptimized/>
      </div>
      <div data-speedx="0.1" data-speedy="0.1" className="moutain2 effect z-[8] absolute w-[1100px] sm:w-[1200px] md:w-[1400px] lg:w-[1700px] xl:w-[2000px] 2xl:w-[2400px] h-full">
        <Image className="w-full h-full" src={"/moutain/moutain2.png"} alt={""} width={0} height={0}
               sizes="100vh" unoptimized/>
      </div>
    </div>
  );
};

export default BannerHome;