import React from "react";
import Img from "./Img";
import Flex from "./Flex";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Products = ({
  className,
  labelShow,
  label,
  ProductImg,
  ProductTitle,
  Price,
  color,
  link,
  imgLink,
}) => {
  let setLabelShow = labelShow;
  return (
    <Link className={` font-dm ${className} border-[1px]`}>
      <div className="relative group overflow-hidden ">
        {setLabelShow && (
          <div className="absolute top-2 left-3 bg-[#262626] text-[#FFFFFF] text-sm font-bold py-2 px-4 capitalize ">
            {label}
          </div>
        )}
        <Link to={imgLink}>
          <Img
            src={ProductImg}
            imgClassName={
              "xl:w-[382px] xl:h-[220px] md:w-[350px] md:h-[180px] w-full h-80"
            }
          />
        </Link>
        <div className=" bg-white w-full -bottom-80 absolute text-base capitalize text-right py-4 pr-[30px] text-[#767676] transition-all group-hover:bottom-0 duration-700 border-b-[1px] border-x-gray-400">
          <h6 className="hover:text-[#262626] hover:font-bold transition-all duration-200 cursor-pointer">
            Add to Wish List
            <FaHeart className="inline-block hover:text-[#262626] ml-3" />
          </h6>
          <h6 className="hover:text-[#262626] hover:font-bold transition-all duration-200 cursor-pointer py-2">
            View Detail
            <BiSolidDetail className="inline-block text-xl hover:text-[#262626] ml-3" />
          </h6>
          <h6 className="hover:text-[#262626] hover:font-bold transition-all duration-200 cursor-pointer">
            Add to Cart
            <FaShoppingCart className="inline-block hover:text-[#262626] ml-3" />
          </h6>
        </div>
      </div>
      <Flex className={"flex-col mt-6 mb-1 mx-1 "}>
        <Flex className={"justify-between mb-3 items-center "}>
          <h1 className="capitalize text-[#262626] text-base  font-bold">
            {ProductTitle}
          </h1>
          <h2 className="text-[#767676] text-base">${Price}</h2>
        </Flex>
        <h2 className="text-[#767676] text-base">{color}</h2>
      </Flex>
    </Link>
  );
};

export default Products;
