"use client"

import React, {useRef} from 'react';
import Image from "next/image";
import Link from "next/link";
import {IoShareSocialSharp} from "react-icons/io5";
import {AiOutlineRight} from "react-icons/ai";
import {Input} from "@nextui-org/react";
import {BiSearchAlt} from "react-icons/bi";
import SideBar from "@/app/component/SideBar/SideBar";
import PostBy from "@/app/component/postsComponent/PostBy";
import {posts} from "@/app/component/data/data";
import Post from "@/app/component/postsComponent/Post";

const PostsList = () => {


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