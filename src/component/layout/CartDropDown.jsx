import React, { useState, useRef, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import DropDownItem from "./DropDownItem";
import Flex from "./Flex";
import Img from "./Img";
import CartImg from "../../assets/CartImg.png";
import { ImCross } from "react-icons/im";
import Button from "./Button";
import { useSelector } from "react-redux";

const CartDropDown = () => {
  const totalCartData = useSelector((state) => {
    return state.addtocart.cartData.length;
  });
  let [show, setShow] = useState(false);
  let cart = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (cart.current.contains(e.target)) {
        setShow(!show);
      } else {
        setShow(false);
      }
    });
  });
  return (
    <div className=" z-20 relative" ref={cart}>
      <FaShoppingCart className="text-xl cursor-pointer " />
      <span className="ml-2 px-[7px] py-[2px] -mt-1 bg-black text-white rounded-full text-xs block">
        {totalCartData}
      </span>
      {show && (
        <DropDownItem
          className={
            "bg-[#F5F5F3] absolute w-[360px] top-10 right-0 border border-[#F0F0F0] font-dm"
          }
        >
          <div className="p-5  ">
            <Flex className={" items-center justify-end"}>
              <Img src={CartImg} className={"w-20"} />
              <div className="text-sm font-bold w-32 ml-5">
                <h3 className="mb-3">Black Smart Watch</h3>
                <h4>$44.00</h4>
              </div>
              <ImCross
                className="cursor-pointer ml-16"
                onClick={() => setShow(false)}
              />
            </Flex>
          </div>
          <div className="bg-[#FFFFFF] p-5">
            <h5 className="text-[#767676] text-base">
              Subtotal:{" "}
              <span className="text-[#262626] text-base font-bold">$44.00</span>
            </h5>
            <Flex className={"mt-4"}>
              <Button
                title={"View Cart"}
                linkClassName={
                  " text-[#262626] text-sm font-bold py-4 px-10 border border-[#2B2B2B] hover:bg-indigo-950 hover:text-white transition-all duration-500 "
                }
                link={"/cart"}
              />
              <Button
                title={"Checkout"}
                linkClassName={
                  "text-[#FFFFFF] bg-[#262626] text-sm font-bold py-4 px-10 ml-5 hover:text-slate-500 hover:bg-lime-300 transition-all duration-500"
                }
                link={"/checkOut"}
              />
            </Flex>
          </div>
        </DropDownItem>
      )}
    </div>
  );
};

export default CartDropDown;
