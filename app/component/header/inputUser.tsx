import React from 'react';

const InputUser = (props: any) => {
  const {name} = props
  return (
    <div className="flex flex-col gap-2.5 w-full">
      <p className="text-darkCharcoal text-sm md:text-base font-semibold leading-[25px]">{name}</p>
      <input type="text" className="w-full p-2.5 text-base border border-[#cadaf3] rounded-lg focus:border-[#5d85d4] outline-0 text-black"/>
    </div>
  );
};

export default InputUser;