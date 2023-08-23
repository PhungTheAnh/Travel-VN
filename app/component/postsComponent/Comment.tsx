import React from 'react';
import Image from "next/image";

const Comment = (props: {
  author: string,
  image: string,
  date: string,
  content: string,
  key: string,
}) => {
  const {author, image, date, content, key} = props
  return (
    <div key={key} className='group transition-all duration-150 flex p-5 border-y border-[#dedede] gap-[20px] text-[#1f2933] text-sm font-normal'>
      <Image src={image} alt={""} width={0} height={0} unoptimized
             className='object-cover min-w-[50px] w-[50px] h-[50px] rounded-full overflow-hidden'/>
      <div className='flex flex-col gap-2.5'>
        <p className='group-hover:text-[#5d85d4] text-base'>{author}</p>
        <p>Ngày bình luận <span className='text-[#9d9d9d] italic group-hover:text-[#5d85d4]'>{date}</span></p>
        <p>{content}</p>
        <p className='text-[#9d9d9d] italic group-hover:text-[#5d85d4]'>Xem thêm</p>
      </div>
    </div>
  );
};

export default Comment;