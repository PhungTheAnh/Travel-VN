import React from 'react';
import {IoLocationOutline} from "react-icons/io5";

const Places = () => {
  return (
    <div className={"grid grid-cols-5 grid-rows-2 gap-[15px]"}>
      <div className={"col-span-2 row-span-2 w-full bg-[url('/places/hohoankiem.jpg')] bg-cover rounded-xl shadow-lg relative"}>
        <div className={"flex flex-col gap-[5px] absolute bottom-3 left-5"}>
          <p className={"text-white md:text-base xl:text-[20px] font-semibold"}>Hồ Hoàn Kiếm</p>
          <div className={"flex gap-[5px] items-center"}>
            <IoLocationOutline color={"white"} size={18}/>
            <p className={"md:text-sm xl:text-base text-white"}>Hà Nội</p>
          </div>
          <div>

          </div>
        </div>
      </div>
      <div className={"w-[230px] md:h-[160px] xl:h-[230px] bg-[url('/places/ninhbinh.jpg')] bg-cover rounded-xl shadow-lg"}>

      </div>
    </div>
  );
};

export default Places;