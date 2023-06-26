import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {MdOutlineLocationOn} from "react-icons/md";
import {BsArrowRightShort} from "react-icons/bs";
import {FaUsers} from "react-icons/fa";
import {FiClock} from "react-icons/fi";
import {BiPurchaseTagAlt} from "react-icons/bi";
import {AiFillStar} from "react-icons/ai";

const ToursResult = () => {

  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  const tours = [
    {
      id: 1,
      name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
      address: "Hà Nội",
      tags: "Hà Nội, Hạ Long, Ninh Bình",
      startDay: "01/01/2023",
      endDay: '05/01/2023',
      cost: 2300000,
      star: 5,
      comments: 20,
      category: "hanoi",
      image: "/places/hohoankiem.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
    },
    {
      id: 2,
      name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
      address: "Hội An",
      tags: "Hà Nội, Hạ Long, Ninh Bình",
      startDay: "01/01/2023",
      endDay: '05/01/2023',
      cost: 2300000,
      star: 5,
      comments: 20,
      category: "hoian",
      image: "/places/hohoankiem.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"

    },
    {
      id: 3,
      name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
      address: "Hà Nội",
      tags: "Hà Nội, Hạ Long, Ninh Bình",
      startDay: "01/01/2023",
      endDay: '05/01/2023',
      cost: 2300000,
      star: 5,
      comments: 20,
      category: "hanoi",
      image: "/places/hohoankiem.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
    },
    {
      id: 4,
      name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
      address: "Hà Nội",
      tags: "Hà Nội, Hạ Long, Ninh Bình",
      startDay: "01/01/2023",
      endDay: '05/01/2023',
      cost: 2300000,
      star: 5,
      comments: 20,
      category: "hanoi",
      image: "/places/hohoankiem.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
    },
  ];

  return (
    <div
      className="w-full grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[15px] transition-all duration-300">
      {
        tours.map((tour: any) => {
          let htmlStars = []
          for(let i = 0; i < tour.star; i++) {
            htmlStars.push(<AiFillStar size={14} color={"#ffa11a"}/>)
          }
            return (
              <div key={tour.id}
                   className="relative group w-full lg:h-full bg-white flex flex-col overflow-hidden items-center content-start rounded-lg p-[15px] gap-[15px] md:max-w-[420px] shadow-[0_10px_20px_#00000022] transition-all duration-300 hover:shadow-[0_10px_20px_#00000066] hover:translate-y-[-8px]">
                <div className='relative h-[250px] w-full rounded-lg overflow-hidden shadow-md'>
                  <Image src={tour.image} alt={tour.name} width={0} height={0} sizes={"100vh"}
                         className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300"/>
                  <div
                    className="absolute bottom-0 right-0 p-2.5 rounded-tl-[12px] bg-white flex items-center gap-[10px]">
                    <FaUsers color={"#4366c5"} size={20}/>
                    <p className="text-primary text-base font-medium">10</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] w-full">
                  <Link href="#"
                        className="text-lg leading-[1.35rem] w-full text-[#252525] hover:text-primary text-left font-bold line-clamp-2">{tour.name}</Link>
                  <div className="flex flex-col gap-[5px] w-full mb-[15px]">
                    <div className="flex items-center gap-[6px] text-sm text-[#555]">
                      <FiClock size={16} color="#333333"/>
                      <p className="text-sm text-[#333333] font-normal">{tour.startDay} - </p>
                      <p className="text-sm text-[#333333] font-normal">{tour.endDay}</p>
                    </div>
                    <div className="flex items-center gap-[6px] text-sm text-[#555]">
                      <MdOutlineLocationOn size={18} color="#333333"/>
                      <p className="text-sm text-[#333333] font-normal">Địa điểm: {tour.address}</p>
                    </div>
                    <div className="flex items-center gap-[6px] text-sm text-[#555]">
                      <BiPurchaseTagAlt size={16} color="#333333"/>
                      <p className="text-sm text-[#333333] font-normal">{tour.tags}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <div className="text-sm text-primary">
                      <p>Giá</p>
                      <p className="text-lg font-bold">{VND.format(tour.cost)}</p>
                    </div>
                    <div>
                      <div className="flex gap-0.5 items-center">
                        {htmlStars}
                      </div>
                      <p className="text-[#333333] text-xs font-normal">({tour.comments} đánh giá)</p>
                    </div>
                  </div>
                  <Link href="#" className="text-white text-base flex items-center bg-[#4366c5]">Xem
                    chi tiết<BsArrowRightShort size={20}/></Link>
                </div>
              </div>
            )
          }
        )
      }
    </div>
  )
    ;
};

export default ToursResult;