import React, {useRef} from 'react';
import Image from "next/image";
import Link from "next/link";
import {MdOutlineLocationOn} from "react-icons/md";
import {BsArrowRightShort, BsGrid3X3Gap} from "react-icons/bs";
import {FaFilter, FaUsers} from "react-icons/fa";
import {FiClock} from "react-icons/fi";
import {BiPurchaseTagAlt} from "react-icons/bi";
import {AiFillStar, AiOutlineUnorderedList} from "react-icons/ai";

const ToursResult = (props:{btnFilter: any}) => {
  const {btnFilter} = props
  const menuFilter = useRef<HTMLInputElement | null>(null)
  const btn1 = useRef<HTMLInputElement | null>(null)
  const btn2 = useRef<HTMLInputElement | null>(null)
  const toursResult1 = useRef<HTMLInputElement | null>(null)
  const toursResult2 = useRef<HTMLInputElement | null>(null)
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
      members:10,
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
      members:10,
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
      members:10,
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
      members:10,
      star: 5,
      comments: 20,
      category: "hanoi",
      image: "/places/hohoankiem.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
    },
  ];

  const btnResult1 = () => {
    btn1.current?.classList.add("hidden")
    btn2.current?.classList.remove("hidden")
    toursResult1.current?.classList.add("hidden")
    toursResult2.current?.classList.remove("hidden")
  }

  const btnResult2 = () => {
    btn1.current?.classList.remove("hidden")
    btn2.current?.classList.add("hidden")
    toursResult1.current?.classList.remove("hidden")
    toursResult2.current?.classList.add("hidden")
  }
  return (
    <div>
      <div className="flex justify-between items-center w-full border-b border-[#a6c3ea] pb-[15px] mb-[30px]">
        <div className="flex items-center gap-2">
          <div onClick={btnFilter} className="block lg:hidden cursor-pointer">
            <FaFilter size={30} color={"#4366c5"} />
          </div>
          <p className="text-[30px] font-bold text-left text-black">Tour du lịch</p>
        </div>
        <div ref={btn1} onClick={btnResult1} className="cursor-pointer">
          <BsGrid3X3Gap size={30} color={"#4366c5"}/>
        </div>
        <div ref={btn2} onClick={btnResult2} className="hidden cursor-pointer">
          <AiOutlineUnorderedList size={30} color={"#4366c5"}/>
        </div>
      </div>
      <div ref={toursResult1} className="toursResult1 w-full grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[15px] transition-all duration-300">
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
                    <Link href="#" className="text-white text-base flex justify-center items-center bg-[#4366c5] rounded-lg p-[15px]">Đặt ngay</Link>
                  </div>
                </div>
              )
            }
          )
        }
      </div>
      <div ref={toursResult2} className="toursResult2 w-full flex flex-col gap-[15px] transition-all duration-300">
        {
          tours.map((tour: any) => {
              let htmlStars = []
              for(let i = 0; i < tour.star; i++) {
                htmlStars.push(<AiFillStar size={14} color={"#ffa11a"}/>)
              }
              return (
                <div key={tour.id}
                     className="relative group w-full lg:h-full bg-white flex flex-col md:flex-row overflow-hidden items-center content-start rounded-lg p-[15px] gap-[15px] shadow-[0_10px_20px_#00000022] transition-all duration-300 hover:shadow-[0_10px_20px_#00000066] hover:translate-y-[-8px]">
                  <div className='relative h-[250px] w-full md:w-[30%] rounded-lg overflow-hidden shadow-md'>
                    <Image src={tour.image} alt={tour.name} width={0} height={0} sizes={"100vh"}
                           className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300"/>
                  </div>
                  <div className="flex flex-col gap-[10px] w-full md:w-[50%]">
                    <Link href="#"
                          className="text-lg leading-[1.35rem] w-full text-[#252525] hover:text-primary text-left font-bold line-clamp-2">{tour.name}</Link>
                    <div className="flex flex-col gap-[5px] w-full md:mb-[15px]">
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
                      <div className="flex items-center gap-[6px] text-sm text-[#555]">
                        <FaUsers size={16} color="#333333"/>
                        <p className="text-sm text-[#333333] font-normal">Số người: {tour.members}</p>
                      </div>
                      <div className="md:hidden flex flex-col items-start justify-center">
                        <div className="flex gap-0.5 items-center">
                          {htmlStars}
                        </div>
                        <p className="text-[#333333] text-xs font-normal">({tour.comments} đánh giá)</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-[20%]">
                    <div className="flex md:flex-col justify-between items-center gap-[15px] font-medium">
                      <div className="text-sm text-primary">
                        <p className="text-left md:text-center">Giá</p>
                        <p className="text-lg font-bold">{VND.format(tour.cost)}</p>
                      </div>
                      <div className="hidden md:flex flex-col items-center justify-center">
                        <div className="flex gap-0.5 items-center">
                          {htmlStars}
                        </div>
                        <p className="text-[#333333] text-xs font-normal">({tour.comments} đánh giá)</p>
                      </div>
                      <Link href="#" className="w-1/2 md:w-full text-white text-base flex justify-center items-center bg-[#4366c5] rounded-lg p-[15px]">Đặt ngay</Link>
                    </div>
                  </div>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
    ;
};

export default ToursResult;