"use client"

import React, {useRef} from 'react';
import Image from "next/image";
import Link from "next/link";
import {IoShareSocialSharp} from "react-icons/io5";
import {AiOutlineRight} from "react-icons/ai";
import {GrFacebookOption} from "react-icons/gr";
import {BsMessenger} from "react-icons/bs";
import {Input} from "@nextui-org/react";
import {BiSearchAlt} from "react-icons/bi";
import {FaSnowboarding} from "react-icons/fa";
import SideBar from "@/app/component/SideBar/SideBar";

const PostsList = () => {
  const posts = [
    {
      id: 1,
      title: "Biển Nha Trang đẹp nhất khi đi vào tháng 7 và 8",
      slug:"bien-nha-trang-dep-nhat-khi-di-vao-thang-7-va-8",
      author: "Thế Anh",
      image: "/posts/nhatrang4.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    },
    {
      id: 2,
      title: "Ghẹ biển Quất Lâm rất ngon",
      slug:"ghe-bien-quat-lam-rat-ngon",
      author: "Thế Anh",
      image: "/posts/nhatrang3.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    },
    {
      id: 3,
      title: "Biển Sầm Sơn đẹp nhất khi đi vào tháng 7 và 8",
      slug:"bien-sam-son-dep-nhat-khi-di-vao-thang-7-va-8",
      author: "Thế Anh",
      image: "/posts/ninhbinh2.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    },
    {
      id: 4,
      title: "Ghẹ biển Quất Lâm rất ngon",
      slug:"ghe-bien-quat-lam-rat-ngon",
      author: "Thế Anh",
      image: "/posts/phocohoian4.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    },
    {
      id: 5,
      title: "Ghẹ biển Quất Lâm rất ngon",
      slug:"ghe-bien-quat-lam-rat-ngon",
      author: "Thế Anh",
      image: "/posts/phocohoian4.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    },
    {
      id: 6,
      title: "Ghẹ biển Quất Lâm rất ngon",
      slug:"ghe-bien-quat-lam-rat-ngon",
      author: "Thế Anh",
      image: "/posts/phocohoian4.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    }
  ]

  const Post = (props: {
    key: number,
    img: string,
    title: string,
    slug:string
    createAt: string,
    description: string,
    author: string,
    comments: number
  }) => {
    const {key, img, title,slug, createAt, description, author, comments} = props
    return (
      <div key={key}
           className="group hover:shadow-[10px_10px_20px_rgba(0,0,0,0.2)] flex flex-col md:flex-row items-start justify-center w-full p-2.5 gap-5 rounded-lg bg-white shadow-[10px_10px_20px_rgba(0,0,0,0.05)] transition-all duration-300">
        <div className="w-full md:w-[40%] h-[300px] md:h-[230px] relative overflow-hidden">
          <Image src={img} alt={""} width={0} height={0} sizes={"100vh"} unoptimized
                 className="w-full h-full object-cover rounded-lg"/>
        </div>
        <div className="w-full md:w-[60%] flex flex-col gap-5">
          <div
            className="flex flex-col sm:flex-row items-start justify-between gap-2.5 sm:divide-x sm:divide-[#dedede]">
            <Link href={`/posts/${slug}`}><p
              className="text-primary text-xl lg:text-2xl font-semibold group-hover:text-[#5d85d4] transition-all duration-300">{title}</p>
            </Link>
            <p className="text-[#3f59b6] text-base sm:text-lg text-right sm:pl-2.5">{createAt}</p>
          </div>
          <p className="text-[#1f2933] text-sm line-clamp-3">{description}</p>
          <div className="flex items-center gap-2 sm:gap-2.5 divide-x divide-[#dedede]">
            <p className="text-[13px] sm:text-sm text-[#1f2933]">Post by <span
              className="text-primary cursor-pointer">{author}</span></p>
            <p className="text-[13px] sm:text-sm text-primary pl-2 sm:pl-2.5 cursor-pointer">{comments} Bình luận</p>
            <div className="group pl-2 sm:pl-2.5 cursor-pointer relative btn_share">
              <IoShareSocialSharp size={20} color={"#9d9d9d"}/>
              <div className="share absolute left-[10px] top-[30px] w-[130px] transition-all duration-300 ">
                <div className="flex items-center gap-[8px] p-2.5 bg-[#3f59b6] hover:bg-primary cursor-pointer">
                  <GrFacebookOption size={20} color={"white"}/>
                  <p className="text-[13px] sm:text-sm text-white font-normal">Facebook</p>
                </div>
                <div className="flex items-center gap-[8px] p-2.5 bg-[#3f59b6] hover:bg-primary cursor-pointer">
                  <BsMessenger size={18} color={"white"}/>
                  <p className="text-[13px] sm:text-sm text-white font-normal">Messenger</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[5px] cursor-pointer">
            <p className="uppercase text-sm text-primary">xem thêm</p>
            <AiOutlineRight size={16} color={"#4366c5"}/>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-[30px]">
      <div className="lg:w-[70%] w-full flex flex-col items-center justify-center gap-[30px]">
        <div className="w-full block lg:hidden">
          <Input
            size={"lg"}
            clearable
            contentRightStyling={false}
            placeholder="Tìm kiếm..."
            contentRight={
              <BiSearchAlt fontSize={14} size={20} color={'#474d4b'}/>
            }
          />
        </div>
        {
          posts.map((post, index) => {
            return (
              <Post key={index} img={post.image} title={post.title} slug={post.slug} createAt={post.createAt} description={post.des}
                    author={post.author} comments={post.cmt}/>
            )
          })
        }
      </div>
      <SideBar/>
    </div>
  );
};

export default PostsList;