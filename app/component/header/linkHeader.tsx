import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const LinkHeader = (props: any) => {
  const {pageTitle, pagePathName} = props
  const pathName = usePathname();

  return (
    <Link href= {pagePathName}
          className={pathName == `${pagePathName}` ? "menu_link-active menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer" : "menu_link text-[16px] text-white tracking-[0.5px] leading-[24px] font-medium transition-all cursor-pointer"}>{pageTitle}</Link>
  );
};

export default LinkHeader;