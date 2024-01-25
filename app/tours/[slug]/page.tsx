import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <div className="w-full h-full relative flex items-center">
            <div className="w-1/2 fixed h-full">
                <Image src={"/tours/nhatrang4.jpg"} alt={""} width={0} height={0} sizes={"100%"} unoptimized className="w-full he-full object-contain" />
            </div>
            <div className="w-1/2 absolute h-full">

            </div>
        </div>
    );
};

export default Page;