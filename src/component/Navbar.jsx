import Container from "./layout/Container";
import React, { useEffect, useState } from "react";
import Flex from "./layout/Flex";
import Img from "./layout/Img";
import Logo from "../assets/Logo.png";
import List from "./layout/List";
import ListItem from "./layout/ListItem";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  let [manuShow, setManuShow] = useState(true);
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 641) {
        setManuShow(false);
      } else {
        setManuShow(true);
      }
    };
    window.addEventListener("resize", resize);
    resize();
  }, []);
  console.log(window.innerWidth);
  return (
    <nav className="font-dm border-y-2 border-[#F5F5F3] px-2 py-4">
      <Container className={"sm:flex justify-between "}>
        <Flex className={"items-center self-auto relative"}>
          <Img src={Logo} className={" w-full"} />
          <FaBars
            className="sm:hidden cursor-pointer absolute right-0"
            onClick={() => setManuShow(!manuShow)}
          />
        </Flex>

        <Flex className={"items-center"}>
          {manuShow && (
            <List
              className={
                " sm:w-[90%] w-full flex justify-center gap-x-10 mt-4 sm:mt-0 sm:text-[#767676] text-cyan-300 text-lg flex-col sm:flex-row bg-slate-800 sm:bg-transparent text-center font-semibold"
              }
            >
              <ListItem
                item={"Home"}
                link={"/"}
                linkClassName={
                  "sm:hover:text-[#262626] hover:text-cyan-600 transition-all sm:py-0 py-4 block sm:border-none border-b border-[#767676]"
                }
              />
              <ListItem
                item={"Shop"}
                link={"/shop"}
                linkClassName={
                  "sm:hover:text-[#262626] hover:text-cyan-600 transition-all sm:py-0 py-4 block sm:border-none border-b border-[#767676]"
                }
              />
              <ListItem
                item={"About"}
                link={"/about"}
                linkClassName={
                  "sm:hover:text-[#262626] hover:text-cyan-600 transition-all sm:py-0 py-4 block sm:border-none border-b border-[#767676]"
                }
              />
              <ListItem
                item={"Contacts"}
                link={"/contacts"}
                linkClassName={
                  "sm:hover:text-[#262626] hover:text-cyan-600 transition-all sm:py-0 py-4 block sm:border-none border-b border-[#767676]"
                }
              />
              <ListItem
                item={"Journal"}
                link={"/journal"}
                linkClassName={
                  "sm:hover:text-[#262626] hover:text-cyan-600 transition-all sm:py-0 py-4 block sm:border-none border-b border-[#767676]"
                }
              />
            </List>
          )}
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
