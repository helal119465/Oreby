import React, { useEffect, useState } from "react";
import Breadcrum from "../component/Breadcrum";
import Flex from "../component/layout/Flex";
import Container from "../component/layout/Container";
import { ImCross } from "react-icons/im";
import Img from "../component/layout/Img";
import { FiPlus, FiMinus } from "react-icons/fi";
import Button from "../component/layout/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  quantityMinus,
  quantityUpdate,
  removeToCart,
} from "../app/Slices/addToCart";
const Cart = () => {
  let dispatch = useDispatch();

  const cartData = useSelector((state) => state.addtocart.cartData);

  let [total, setTotal] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    cartData.map((product) => {
      totalPrice += Math.ceil(
        (product.price - (product.price * product.discountPercentage) / 100) *
          product.quantity
      );
    });
    setTotal(totalPrice);
  }, [cartData]);
  return (
    <section className=" my-10 font-dm">
      <Container>
        <Breadcrum
          title={"Cart"}
          linkVal={"shop"}
          link={"/shop"}
          currentPage={window.location.pathname.split("/")[1]}
          currentPageLink={"/cart"}
        />
        <Flex className={"mt-12 flex-col gap-y-3 text-[#262626]  font-bold"}>
          <Flex
            className={"bg-[#F5F5F3] py-7 hidden sm:grid grid-cols-6 text-base"}
          >
            <div className="col-span-2 ml-8">Product</div>
            <div className="lg:ml-6 ml-4">Price</div>
            <div className="lg:ml-6 ml-4">Discount</div>
            <div className="ml-6">Quantity</div>
            <div className="text-center">Total</div>
          </Flex>
          {cartData.map((product, index) => (
            <Flex className={"flex-col gap-y-2"}>
              <Flex
                className={
                  "sm:w-full sm:justify-around py-3 border border-slate-300 items-center flex-wrap"
                }
              >
                <div className="sm:w-[33%] w-full mb-5 sm:mb-0">
                  <Flex
                    className={"sm:gap-x-4 gap-x-10 items-center ml-2 sm:ml-0"}
                  >
                    <ImCross
                      className="cursor-pointer"
                      onClick={() => dispatch(removeToCart(index))}
                    />
                    <Img
                      src={product.thumbnail}
                      imgClassName={"w-[80px] h-[80px]"}
                    />
                    <h1>{product.title}</h1>
                  </Flex>
                </div>
                <div className="sm:w-[15%] ml-3 sm:ml-0">${product.price}</div>
                <div className="sm:w-[14%] ml-4 sm:ml-0">
                  {product.discountPercentage}%
                </div>
                <div className="sm:w-[15%] ml-4 sm:ml-0">
                  <Flex className={"items-center gap-x-3"}>
                    <button
                      onClick={() => dispatch(quantityMinus(index))}
                      disabled={product.quantity == 1 && true}
                    >
                      <FiMinus />
                    </button>
                    <input
                      type="number"
                      value={product.quantity}
                      className="w-14 h-9 border border-gray-300 text-center"
                    />
                    <button onClick={() => dispatch(quantityUpdate(index))}>
                      <FiPlus />
                    </button>
                  </Flex>
                </div>
                <div className="sm:w-[14%] text-center ml-5 sm:ml-0">
                  $
                  {Math.ceil(
                    (product.price -
                      (product.price * product.discountPercentage) / 100) *
                      product.quantity
                  )}
                </div>
              </Flex>
              <Flex
                className={
                  "w-full flex-col sm:flex-row px-4 py-3 border border-slate-300 items-center font-normal text-sm"
                }
              >
                <select className="w-[255px] outline-none border border-[#EAEAEA] text-[#262626] text-base py-2 px-4">
                  <option className="py-1" selected>
                    Size
                  </option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <h1 className="sm:pl-10 pl-0 font-medium mt-4 sm:mt-0">
                  Apply coupon:
                  <input
                    type="text"
                    className="w-52 ml-2 outline-none px-2 py-[3px] border border-sky-200"
                    placeholder="apply cupon number"
                  />
                </h1>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <div>
          <h1 className="text-right text-xl font-bold mt-10">Cart Totals</h1>
        </div>
        <Flex
          className={
            " sm:w-[610px] w-[340px] ml-auto items-center text-[#767676] text-base font-bold flex-wrap mt-6"
          }
        >
          <h1 className="w-1/2 border py-3 pl-4">Subtotal</h1>
          <h1 className="w-1/2 border border-l-0 py-3 pl-4 text-[#262626]">
            {total}$
          </h1>
          <h1 className="w-1/2 border py-3 pl-4">Total</h1>
          <h1 className="w-1/2 border border-l-0 py-3 pl-4 text-[#262626]">
            {total}$
          </h1>
        </Flex>
        <div className=" text-right mt-8">
          <Button
            title={"Proceed to Checkout"}
            link={"/checkOut"}
            className={
              "bg-[#262626] text-white inline-block py-4 px-6 text-base font-bold rounded-md hover:bg-slate-950 transition-all"
            }
          />
        </div>
      </Container>
    </section>
  );
};

export default Cart;
