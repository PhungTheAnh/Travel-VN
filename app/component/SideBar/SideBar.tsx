import React, {useRef} from 'react';
import {Input} from "@nextui-org/react";
import {BiSearchAlt} from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import {AiOutlineRight} from "react-icons/ai";
import {FaSnowboarding} from "react-icons/fa";

const SideBar = () => {
  const postRef = useRef<HTMLInputElement | null>(null)
  const tagRef = useRef<HTMLInputElement | null>(null)
  const imgRef = useRef<HTMLInputElement | null>(null)
  const postMoreRef = useRef<HTMLInputElement | null>(null)
  const tagMoreRef = useRef<HTMLInputElement | null>(null)
  const imgMoreRef = useRef<HTMLInputElement | null>(null)
  const postReadMore = () => {
    postRef.current?.classList.toggle("active")
    postMoreRef.current?.classList.toggle("active")
  }
  const tagReadMore = () => {
    tagRef.current?.classList.toggle("active")
    tagMoreRef.current?.classList.toggle("active")
  }
  const imgReadMore = () => {
    imgRef.current?.classList.toggle("active")
    imgMoreRef.current?.classList.toggle("active")
  }
  const posts = [
    {
      id: 1,
      title: "Biển Nha Trang đẹp nhất khi đi vào tháng 7 và 8",
      author: "Thế Anh",
      image: "/posts/nhatrang4.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    },
    {
      id: 2,
      title: "Ghẹ biển Quất Lâm rất ngon",
      author: "Thế Anh",
      image: "/posts/nhatrang3.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    },
    {
      id: 3,
      title: "Biển Sầm Sơn đẹp nhất khi đi vào tháng 7 và 8",
      author: "Thế Anh",
      image: "/posts/ninhbinh2.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    },
    {
      id: 4,
      title: "Ghẹ biển Quất Lâm rất ngon",
      author: "Thế Anh",
      image: "/posts/phocohoian4.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    },
    {
      id: 5,
      title: "Ghẹ biển Quất Lâm rất ngon",
      author: "Thế Anh",
      image: "/posts/phocohoian4.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    },
    {
      id: 6,
      title: "Ghẹ biển Quất Lâm rất ngon",
      author: "Thế Anh",
      image: "/posts/phocohoian4.jpg",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo",
      cmt: 20,
      createAt: "05/10/2022"
    }
  ]
  const tags = [
    {
      id: 1,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 2,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 3,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 4,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 5,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 6,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 7,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 8,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 9,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 10,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 11,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 12,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 13,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 14,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 15,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    },
    {
      id: 16,
      tag: "trượt tuyết",
      img: <FaSnowboarding size={26} color={'#16512b'} className='hover:text-primary'/>,
    }
  ]
  const imgs = [
    {
      id: 1,
      src: "/places/codohue2.jpg"
    },
    {
      id: 2,
      src: "/places/codohue3.jpg"
    },
    {
      id: 3,
      src: "/places/halong1.jpg"
    },
    {
      id: 4,
      src: "/places/halong2.jpg"
    },
    {
      id: 5,
      src: "/places/hoguom1.jpg"
    },
    {
      id: 6,
      src: "/places/phocohoian.jpg"
    }
  ]
  const morePost = posts.filter(post => {
    return post.id > 4
  })
  const ReadMore = (props: {
    title: string,
    click: any
    reff: any,
  }) => {
    const {title, click, reff} = props
    return (
      <div
        onClick={click}
        className="hover:opacity-[0.8] text-primary text-sm font-semibold p-5 tracking-[0.5px] w-full border-b border-[#dedede] cursor-pointer flex items-center justify-between">
        <p>{title}</p>
        <div className="btn cursor-pointer">
          <div ref={reff} className="transition-all duration-[400ms]">
            <AiOutlineRight size={16} color={"#4366c5"}/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="h-fit w-full lg:w-[30%] flex flex-col bg-white shadow-[0_10px_20px_#00000022] p-2.5 lg:p-[15px] rounded-xl">
      <div className="w-full hidden lg:block">
        <Input
          clearable
          contentRightStyling={false}
          placeholder="Tìm kiếm..."
          contentRight={
            <BiSearchAlt fontSize={14} size={20} color={'#474d4b'}/>
          }
        />
      </div>
      {/**/}
      <div className="postReadMore">
        <ReadMore title={"Bài viết khác"} click={postReadMore} reff={postRef}/>
        <div className="content">
          <div ref={postMoreRef}
               className="w-full h-0 opacity-0 invisible flex flex-col hover:shadow-[5px_5px_20px_rgba(0,0,0,0.2)] rounded-bl-lg rounded-br-lg transition-all duration-300 active">
            {
              morePost.map((post, index) => {
                return (
                  <p key={index} className="py-[15px] px-5 text-primary text-sm">{post.title}</p>
                )
              })
            }
          </div>
        </div>
      </div>
      {/**/}
      <div className="tagReadMore">
        <ReadMore title={"Blog Tags"} click={tagReadMore} reff={tagRef}/>
        <div className="content">
          <div ref={tagMoreRef}
               className="w-full h-0 opacity-0 invisible grid grid-cols-4 hover:shadow-[5px_5px_20px_rgba(0,0,0,0.2)] rounded-bl-lg rounded-br-lg transition-all duration-300 active">
            {
              tags.map((tag: any, index: number) => {
                return (
                  <div key={index} className="p-3 flex items-center justify-center">
                    {tag.img}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/**/}
      <div className="imgReadMore">
        <ReadMore title={"Ảnh"} click={imgReadMore} reff={imgRef}/>
        <div className="content">
          <div ref={imgMoreRef}
               className="w-full h-0 opacity-0 invisible grid grid-cols-3 gap-2.5 p-[15px] hover:shadow-[5px_5px_20px_rgba(0,0,0,0.2)] rounded-bl-lg rounded-br-lg transition-all duration-300 active">
            {
              imgs.map((img: any, index: number) => {
                return (
                  <div key={index}
                       className="flex items-center justify-center h-[100px] sm:h-[150px] lg:h-[70px] w-full rounded-[5px] overflow-hidden">
                    <Link href={img.src} className="w-full h-full">
                      <Image src={img.src} alt={"image"} width={0} height={0} sizes={"100vh"} unoptimized
                             className="w-full h-full object-cover"/>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;