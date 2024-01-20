import React, { useState, useRef, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import DropDownItem from "./DropDownItem";
import Flex from "./Flex";
import Img from "./Img";
import CartImg from "../../assets/CartImg.png";
import { ImCross } from "react-icons/im";
import Button from "./Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    <Link to={"/cart"} className=" z-20 relative" ref={cart}>
      <FaShoppingCart className="text-xl cursor-pointer " />
      <span className="ml-2 px-[7px] py-[2px] -mt-1 bg-black text-white rounded-full text-xs block">
        {totalCartData}
      </span>
    </Link>
  );
};

export default CartDropDown;
