import React, { useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import SideBarContent from "./SideBarContent";

const InnerSideBar = ({ DropDown, title, data }) => {
  let [show, setShow] = useState(true);
  return (
    <div className="font-dm ml-2 xl:w-[340px] hidden md:inline-block ">
      {DropDown ? (
        <div
          className="flex lg:gap-10 items-center cursor-pointer mb-5"
          onClick={() => setShow(!show)}
        >
          <h1 className="text-[#262626] lg:text-xl text-base font-bold">
            {title}
          </h1>
          {show ? <VscTriangleDown /> : <VscTriangleUp />}
        </div>
      ) : (
        <h1 className="text-[#262626] lg:text-xl text-base font-bold">
          {title}
        </h1>
      )}
      {show && (
        <>
          {data.map((item) => (
            <>
              <SideBarContent title={item} />
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default InnerSideBar;
