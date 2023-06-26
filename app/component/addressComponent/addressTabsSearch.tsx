import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {MdOutlineLocationOn} from "react-icons/md";
import {BsArrowRightShort} from "react-icons/bs";
import {log} from "util";

const AddressTabsSearch = () => {
  const tabs = [
    {
      id: 1,
      name: "Hồ Hoàn Kiếm - Hà Nội",
      address: "Hà Nội",
      category: "hanoi",
      image: "/places/hohoankiem.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
    },
    {
      id: 2,
      name: "Hồ Hoàn Kiếm - Hà Nội",
      address: "Hội An",
      category: "hoian",
      image: "/places/hohoankiem.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"

    },
    {
      id: 3,
      name: "Hồ Hoàn Kiếm - Hà Nội",
      address: "Hà Nội",
      category: "hanoi",
      image: "/places/hohoankiem.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
    },
    {
      id: 4,
      name: "Hồ Hoàn Kiếm - Hà Nội",
      address: "Hà Nội",
      category: "hanoi",
      image: "/places/hohoankiem.jpg",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium necessitatibus, possimus facere sit quasi, nisi saepe obcaecati sint modi explicabo ratione repellat at excepturi, consequatur doloribus voluptatibus ipsa velit molestias!"
    },
  ];
  let filter = tabs.filter((ele, ind) => ind === tabs.findIndex(elem => elem.address === ele.address))
  const Tabs = (props: any) => {
    return (
      props.tabs.map((tab: any) => (
        <div key={tab.id}
             className="relative group w-full bg-white flex flex-col overflow-hidden items-center content-start rounded-lg p-[15px] gap-[15px] md:max-w-[420px] shadow-[0_10px_20px_#00000022] transition-all duration-300 hover:shadow-[0_10px_20px_#00000066] hover:translate-y-[-8px]">
          <div className='h-[250px] w-full rounded-lg overflow-hidden'>
            <Image src={tab.image} alt={tab.name} width={0} height={0} sizes={"100vh"}
                   className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300"/>
          </div>
          <div className="flex flex-col gap-[10px] w-full">
            <Link href="#" className="text-2xl w-full text-[#333] text-left font-bold line-clamp-1">{tab.name}</Link>
            <div className="flex items-center gap-[6px] text-sm text-[#555]">
              <MdOutlineLocationOn size={18} color="#555"/>
              <p>{tab.address}</p>
            </div>
            <p className="text-[#555555] text-sm text-left line-clamp-3 mb-[20px] ">{tab.description}</p>
            <Link href="#" className="text-primary text-base text-right flex items-center gap-[5px] justify-end">Xem
              chi tiết<BsArrowRightShort size={20} color={"#4366c5"}/></Link>
          </div>
        </div>
      ))
    )
  }

  const filterItem = (props: any) => {
    console.log(props)
  }
  const Navigation = (props: any) => {
    return (
      <ul
        className="relative w-full min-h-[73px] flex items-center gap-[30px] p-[15px] mb-[30px] bg-[#f2f6fc] shadow-[0_10px_20px_#00000011] rounded-xl">
        {/*<li>*/}
        {/*  <button className="text-[#252525] text-base relative px-4 py-2 transition-all duration-300 hover:border-b-[3px] hover:border-[#a6c3ea]">*/}
        {/*    Tất cả*/}
        {/*  </button>*/}
        {/*</li>*/}
        {props.filter.map((item: any) => (
          <li key={item.id}>
            <button
              className={`text-[#252525] text-base relative px-4 py-2 transition-all duration-300 hover:border-b-[3px] hover:border-[#a6c3ea] ${(props.activeTabCategory === item.category) ? 'border-b border-[#4366c5]' : ''}`}
              onClick={() => filterItem(item.category)}>
              {item.address}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  // const Tabs = (props: any) => {
  //   const [activeTabCategory, setActiveTabCategory] = React.useState(props.tabs[0].id);
  //
  //   const activeTab = React.useMemo(() => (
  //     props.tabs.find((tab: any) => (
  //       tab.id === activeTabCategory
  //     ))
  //   ), [activeTabCategory, props.tabs]);
  //
  //   return (
  //
  //     <div className="">
  //       <Navigation tabs={props.tabs} onNavClick={setActiveTabCategory}
  //                   activeTabCategory={activeTabCategory}/>
  //       <Tab tab={activeTab}/>
  //     </div>
  //   );
  // }

  const App = (props: any) => {
    const [activeTabCategory, setActiveTabCategory] = React.useState(props.filter[0].id);
    const activeTab = React.useMemo(() => (
      props.filter.find((item: any) => (
        item.id === activeTabCategory
      ))
    ), [activeTabCategory, props.filter]);
    return (
      <div className=''>
        <Navigation filter={props.filter} onNavClick={setActiveTabCategory}/>
        <div
          className="grid grid-cols-3 items-center justify-start gap-[50px] transition-all duration-300 w-full">
          <Tabs tabs={tabs}/>
        </div>
      </div>
    );
  }

  return (
    <App tabs={tabs} filter={filter}/>
  );
};

export default AddressTabsSearch;