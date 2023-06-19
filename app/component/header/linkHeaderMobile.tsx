import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const LinkHeaderMobile = (props: any) => {
  const {pageTitle, pagePathName, closeClick} = props

  return (
    <Link href={pagePathName} onClick={closeClick}><p className="text-white text-xl font-medium">{pageTitle}</p></Link>
  );
};

export default LinkHeaderMobile;