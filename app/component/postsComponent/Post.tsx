import Image from "next/image";
import Link from "next/link";
import {AiOutlineRight} from "react-icons/ai";
import React from "react";
import PostBy from "@/app/component/postsComponent/PostBy";


const Post = (props: {
  key: number,
  img: string,
  title: string,
  slug: string
  createAt: string,
  description: string,
  author: string,
  comments: number
}) => {
  const {key, img, title, slug, createAt, description, author, comments} = props
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
        <PostBy author={author} comments={comments}/>
        <div className="flex items-center gap-[5px] cursor-pointer">
          <p className="uppercase text-sm text-primary group-hover:opacity-80">xem thêm</p>
          <AiOutlineRight size={16} color={"#4366c5"}/>
        </div>
      </div>
    </div>
  )
}

export default Post