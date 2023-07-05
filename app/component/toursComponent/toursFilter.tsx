'use client'

import React, {useRef} from 'react';
import dynamic from 'next/dynamic'
const Input = dynamic(import('@nextui-org/react').then(mod => mod.Input), { ssr: false });

import {BiPurchaseTagAlt, BiSearch} from "react-icons/bi";
import {Tab} from "@headlessui/react";
import {FaFilter, FaUsers} from "react-icons/fa";
import {BsGrid3X3Gap} from "react-icons/bs";
import {AiFillStar, AiOutlineUnorderedList} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import {FiClock} from "react-icons/fi";
import {MdOutlineLocationOn} from "react-icons/md";


const ToursFilter = () => {
  const btn1 = useRef<HTMLInputElement | null>(null)
  const btn2 = useRef<HTMLInputElement | null>(null)
  const toursResult1 = useRef<HTMLInputElement | null>(null)
  const toursResult2 = useRef<HTMLInputElement | null>(null)
  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  const btnResult1 = () => {
    btn1.current?.classList.add("hidden")
    btn2.current?.classList.remove("hidden")
    toursResult1.current?.classList.add("toursResult1")
    toursResult2.current?.classList.add("toursResult2")
  }

  const btnResult2 = () => {
    btn1.current?.classList.remove("hidden")
    btn2.current?.classList.add("hidden")
    toursResult1.current?.classList.remove("toursResult1")
    toursResult2.current?.classList.remove("toursResult2")
  }
  const places = {
    'Tất cả': [
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hà Nội",
        tags: "Hà Nội, Hạ Long, Ninh Bình",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "hanoi",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 2,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hà Nội",
        tags: "Hà Nội, Hạ Long, Ninh Bình",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "hanoi",
        image: "/places/hoguom.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hải Phòng",
        tags: "Vịnh Hạ Long, Hạ Long Bay, Hải Phòng",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "haiphong",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Sapa",
        tags: "Sapa",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 5300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/sapa2.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 2,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Sapa",
        tags: "Mường Thanh, Ruộng bậc thang, Sapa",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An, Ninh BÌnh",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 5300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 2,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh2.jpeg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 3,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An, Ninh BÌnh",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 9300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh3.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
    ],
    "Hà Nội": [
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hà Nội",
        tags: "Hà Nội, Hạ Long, Ninh Bình",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "hanoi",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 2,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hà Nội",
        tags: "Hà Nội, Hạ Long, Ninh Bình",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "hanoi",
        image: "/places/hoguom.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
    ],
    "Hạ Long Bay": [
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hải Phòng",
        tags: "Vịnh Hạ Long, Hạ Long Bay, Hải Phòng",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "haiphong",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
    ],
    "Sapa": [
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Sapa",
        tags: "Sapa",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 5300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/sapa2.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 2,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Sapa",
        tags: "Mường Thanh, Ruộng bậc thang, Sapa",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
    ],
    "Ninh Bình": [
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An, Ninh BÌnh",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 5300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 2,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh2.jpeg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 3,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An, Ninh BÌnh",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 9300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh3.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
    ],
  }
  const prices = {
    'Tất cả': [
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hà Nội",
        tags: "Hà Nội, Hạ Long, Ninh Bình",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "hanoi",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 2,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hà Nội",
        tags: "Hà Nội, Hạ Long, Ninh Bình",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "hanoi",
        image: "/places/hoguom.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 3,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hải Phòng",
        tags: "Vịnh Hạ Long, Hạ Long Bay, Hải Phòng",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "haiphong",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 4,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Sapa",
        tags: "Sapa",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 5300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/sapa2.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 5,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Sapa",
        tags: "Mường Thanh, Ruộng bậc thang, Sapa",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 6,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An, Ninh BÌnh",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 5300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 7,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh2.jpeg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 8,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An, Ninh BÌnh",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 9300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh3.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
    ],
    "2-5m": [
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hà Nội",
        tags: "Hà Nội, Hạ Long, Ninh Bình",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "hanoi",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 2,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hà Nội",
        tags: "Hà Nội, Hạ Long, Ninh Bình",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "hanoi",
        image: "/places/hoguom.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 3,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Hải Phòng",
        tags: "Vịnh Hạ Long, Hạ Long Bay, Hải Phòng",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "haiphong",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 4,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Sapa",
        tags: "Mường Thanh, Ruộng bậc thang, Sapa",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/hohoankiem.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 5,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 2300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh2.jpeg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
    ],
    "5-8m": [
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Sapa",
        tags: "Sapa",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 5300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/sapa2.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
      {
        id: 2,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An, Ninh BÌnh",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 5300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      }
    ],
    "> 8m": [
      {
        id: 1,
        name: "Hành trình tìm về nguồn cội: Hà Nội - Hạ Long - Ninh Bình - Bái Đính - Tràng An - Chùa Địa Tạng Phi Lai Tự - Quần thể Tam Chúc",
        address: "Ninh Bình",
        tags: "Tam Cốc, Tràng An, Ninh BÌnh",
        startDay: "01/01/2023",
        endDay: '05/01/2023',
        cost: 9300000,
        members: 10,
        star: 5,
        comments: 20,
        category: "sapa",
        image: "/places/ninhbinh3.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
      },
    ],
  }
  const menuFilter = useRef<HTMLInputElement | null>(null)
  const btnFilter = () => {
    menuFilter.current?.classList.toggle("btnFilter")
  }
  const TourResult1 = (props: {
    tour: any,
    idx: number
  }) => {
    const {tour, idx} = props
    let htmlStars = []
    for (let i = 0; i < tour.star; i++) {
      htmlStars.push(<AiFillStar key={i} size={14} color={"#ffa11a"}/>)
    }
    return (
      <div key={idx}
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
              <p
                className="text-lg leading-[1.5rem] md:leading-[1.75rem] font-bold">{VND.format(tour.cost)}</p>
            </div>
            <div>
              <div className="flex gap-0.5 items-center">
                {htmlStars}
              </div>
              <p className="text-[#333333] text-xs font-normal">({tour.comments} đánh giá)</p>
            </div>
          </div>
          <Link href="#"
                className="btnOrder1 text-white text-base w-full mx-auto transition-all duration-300 flex justify-center items-center bg-[#4366c5] rounded-lg p-[15px]">Đặt
            ngay</Link>
        </div>
      </div>
    )
  }
  const TourResult2 = (props: {
    tour: any,
    idx: number
  }) => {
    const {tour, idx} = props
    let htmlStars = []
    for (let i = 0; i < tour.star; i++) {
      htmlStars.push(<AiFillStar key={i} size={14} color={"#ffa11a"}/>)
    }
    return (
      <div key={idx}
           className="relative group w-full lg:h-full bg-white flex flex-col md:flex-row overflow-hidden items-center content-start rounded-lg p-[15px] gap-[15px] shadow-[0_10px_20px_#00000022] transition-all duration-300 hover:shadow-[0_10px_20px_#00000066] hover:translate-y-[-8px]">
        <div
          className='relative h-[250px] w-full md:w-[30%] rounded-lg overflow-hidden shadow-md'>
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
            <Link href="#"
                  className="btnOrder2 w-0 text-white text-sm flex justify-center items-center bg-[#4366c5] rounded-lg p-[15px] transition-all duration-300">Đặt
              ngay</Link>
          </div>
        </div>
      </div>
    )
  }

  const classNames = (...classes: any) => {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Tab.Group>
      <div
        className="w-full 2xl:w-[85%] mx-auto relative flex flex-col lg:flex-row items-start justify-center gap-[30px]">
        <div
          ref={menuFilter}
          className="toursFilter lg:h-full transition-all duration-150 lg:opacity-100 lg:visible lg:rotate-0 w-full lg:w-1/4 relative lg:sticky left-0 lg:top-[100px] flex flex-col items-center justify-center rounded-xl overflow-hidden bg-[#f2f6fc] shadow-[0_0px_20px_#00000022]">
          <p className="text-2xl text-[#333] py-[15px] font-semibold">Lọc thông tin</p>
          <div className="bg-[#a6c3ea] p-[30px] w-full">
            <Input
              size={"lg"}
              clearable
              contentRightStyling={false}
              placeholder="Nhập từ khóa..."
              contentLeft={
                <BiSearch size={20} color={"#333333"}/>
              }
            />
          </div>
          <Tab.List className="w-full">
            <div className="w-full p-5 xl:p-[30px] border-b border-[#cadaf3] flex flex-col justify-center gap-[15px]">
              <p className="text-base text-black font-bold relative text-left">Thẻ tìm kiếm</p>
              <div className="w-full grid grid-cols-2 gap-[15px]">
                {Object.keys(places).map((place, index) => {
                  return (
                    <Tab key={index}
                         className={({selected}) => classNames(
                           'text-[#252525] py-2 px-2.5 xl:px-[18px] border-0 outline-0 rounded-lg border-b border-[#cadaf3] w-full text-sm font-bold transition-all duration-300 bg-white hover:bg-[#a6c3ea] hover:text-white',
                           selected
                             ? "!bg-[#4366c5] text-white" : ""
                         )}>
                        {place}
                    </Tab>
                  )
                })}
              </div>
            </div>
            {/**/}
            <div className="w-full p-5 xl:p-[30px] flex flex-col justify-center gap-[15px]">
              <p className="text-base text-black font-bold relative text-left">Giá tiền</p>
              <div className="w-full grid grid-cols-2 gap-[15px]">
                {Object.keys(prices).map((price, index) => (
                  <Tab key={index}
                       className={({selected}) => classNames(
                         'text-[#252525] py-2 px-2.5 xl:px-[18px] border-0 outline-0 rounded-lg border-b border-[#cadaf3] w-full text-sm font-bold transition-all duration-300 bg-white hover:bg-[#a6c3ea] hover:text-white',
                         selected
                           ? "!bg-[#4366c5] text-white" : ""
                       )}>
                      {price}
                  </Tab>
                ))}
              </div>
            </div>
          </Tab.List>
        </div>
        <div className="relative w-full lg:w-3/4">
          <div>
            <Tab.Panels>
              {
                Object.values(places).map((result, index) => {
                  return (
                    <Tab.Panel key={index}>
                      <div
                        className="flex justify-between items-center w-full border-b border-[#a6c3ea] pb-[15px] mb-[30px]">
                        <div className="flex items-center gap-2">
                          <div onClick={btnFilter} className="block lg:hidden cursor-pointer">
                            <FaFilter size={30} color={"#4366c5"}/>
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
                      <div ref={toursResult1}
                           className="w-full grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[15px]">
                        {
                          result.map((tour: any, idx) => {
                            return (
                              <TourResult1 key={idx} tour={tour} idx={idx}/>
                            )
                          })
                        }
                      </div>
                      <div ref={toursResult2}
                           className="w-full flex max-w-[350px] mx-auto invisible h-0 opacity-0 flex-col gap-[15px]">
                        {
                          result.map((tour: any, idx) => {
                              let htmlStars = []
                              for (let i = 0; i < tour.star; i++) {
                                htmlStars.push(<AiFillStar key={i} size={14} color={"#ffa11a"}/>)
                              }
                              return (
                                <div key={idx}
                                     className="relative group w-full lg:h-full bg-white flex flex-col md:flex-row overflow-hidden items-center content-start rounded-lg p-[15px] gap-[15px] shadow-[0_10px_20px_#00000022] transition-all duration-300 hover:shadow-[0_10px_20px_#00000066] hover:translate-y-[-8px]">
                                  <div
                                    className='relative h-[250px] w-full md:w-[30%] rounded-lg overflow-hidden shadow-md'>
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
                                      <Link href="#"
                                            className="btnOrder2 w-0 text-white text-sm flex justify-center items-center bg-[#4366c5] rounded-lg p-[15px] transition-all duration-300">Đặt
                                        ngay</Link>
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          )
                        }
                      </div>
                    </Tab.Panel>
                  )
                })
              }
              {
                Object.values(prices).map((price, index) => {
                  return (
                    <Tab.Panel key={index}>
                      <div
                        className="flex justify-between items-center w-full border-b border-[#a6c3ea] pb-[15px] mb-[30px]">
                        <div className="flex items-center gap-2">
                          <div onClick={btnFilter} className="block lg:hidden cursor-pointer">
                            <FaFilter size={30} color={"#4366c5"}/>
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
                      <div ref={toursResult1}
                           className="w-full grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-[15px]">
                        {
                          price.map((tour: any, idx) => (
                            <TourResult1 key={idx} tour={tour} idx={idx}/>
                          ))
                        }
                      </div>
                      <div ref={toursResult2}
                           className="w-full flex max-w-[350px] mx-auto invisible h-0 opacity-0 flex-col gap-[15px]">
                        {
                          price.map((tour: any, idx) => (
                              <TourResult2 key={idx} tour={tour} idx={idx}/>
                            )
                          )
                        }
                      </div>
                    </Tab.Panel>
                  )
                })
              }
            </Tab.Panels>
          </div>
        </div>
      </div>
    </Tab.Group>

  );
};

export default ToursFilter;