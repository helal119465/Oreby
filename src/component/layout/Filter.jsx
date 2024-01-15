import React from "react";
import Flex from "./Flex";

const Filter = ({ title, selectClass, children }) => {
  return (
    <Flex className={"font-dm items-center"}>
      <h6 className="text-[#767676] sm:text-base text-sm mr-3">{title}</h6>
      <select
        name=""
        id=""
        className={`text-[#262626] sm:text-base text-sm border-gray-200 border py-2 sm:px-4 px-2 outline-none z-10 ${selectClass}`}
      >
        {children}
      </select>
    </Flex>
  );
};

export default Filter;
