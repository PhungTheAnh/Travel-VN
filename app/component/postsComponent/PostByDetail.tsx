import React from 'react';
import {IoShareSocialSharp} from "react-icons/io5";
import {GrFacebookOption} from "react-icons/gr";
import {BsMessenger} from "react-icons/bs";

const PostByDetail = (props:{
  author:string,
  comments: number,
}) => {
  const {author, comments} = props
  return (
    <div className="flex items-center gap-2 sm:gap-2.5 divide-x divide-[#dedede]">
      <p className="text-[13px] sm:text-sm text-[#1f2933]">Đăng bởi <span
        className="text-[#9d9d9d] hover:text-[#1f2933] cursor-pointer">{author}</span></p>
      <p className="text-[13px] sm:text-sm text-[#9d9d9d] hover:text-[#1f2933] pl-2 sm:pl-2.5 cursor-pointer">{comments} Bình luận</p>
      <div className="group pl-2 sm:pl-2.5 cursor-pointer relative btn_share">
        <IoShareSocialSharp size={20} color={"#9d9d9d"}/>
        <div className="share absolute left-[10px] top-[30px] w-[130px] transition-all duration-300 ">
          <div className="flex items-center gap-[8px] p-2.5 bg-[#474d4b] hover:bg-[#6a6a6a] cursor-pointer">
            <GrFacebookOption size={20} color={"#dedede"}/>
            <p className="text-[13px] sm:text-sm text-white font-normal">Facebook</p>
          </div>
          <div className="flex items-center gap-[8px] p-2.5 bg-[#474d4b] hover:bg-[#6a6a6a] cursor-pointer">
            <BsMessenger size={18} color={"#dedede"}/>
            <p className="text-[13px] sm:text-sm text-white font-normal">Messenger</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostByDetail;