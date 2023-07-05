import React from 'react';
import Link from "next/link";

const LinkUser = (props: {
  href: string,
  text: string,
  btnClose: any
}) => {

  const{href, text, btnClose} = props
  return (
    <Link onClick={btnClose} className="cursor-pointer w-full" href={href}><p
      className="text-base text-[#fafafa] rounded-lg px-2.5 py-2 transition-all duration-300 hover:bg-[#7ca4de]">{text}</p></Link>
  );
};

export default LinkUser;