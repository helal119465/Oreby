import React, { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import DropDownItem from "./DropDownItem";
import List from "./List";
import ListItem from "./ListItem";

const UserDropDown = () => {
  let [show, setShow] = useState(false);
  let userLoging = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (userLoging.current.contains(e.target)) {
        setShow(!show);
      } else {
        setShow(false);
      }
    });
  });
  return (
    <div className="flex sm:gap-2 relative sm:ml-0 ml-2 z-20" ref={userLoging}>
      <FaUser className="text-xl cursor-pointer" />
      <GoTriangleDown className="text-xl cursor-pointer" />
      {show && (
        <DropDownItem className={"font-dm absolute w-[200px] top-10 right-0"}>
          <List>
            <ListItem
              item={"My Account"}
              className={
                "bg-[#262626] text-gray-400 hover:text-[#ffffff] text-sm text-center font-bold py-4 transition-all"
              }
              link={"/signUp"}
            />
            <ListItem
              item={"Login"}
              className={
                "bg-[#FFFFFF] text-[#797979] hover:text-[#262626] text-sm font-bold text-center py-4 border border-[#dbdbdb] transition-all"
              }
              link={"/login"}
            />
          </List>
        </DropDownItem>
      )}
    </div>
  );
};

export default UserDropDown;
