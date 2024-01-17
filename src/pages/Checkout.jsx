import React, { useEffect, useState } from "react";
import Container from "../component/layout/Container";
import Breadcrum from "../component/Breadcrum";
import Flex from "../component/layout/Flex";
import Input from "../component/layout/Input";
import Title from "../component/layout/Title";
import { useSelector } from "react-redux";

const Checkout = () => {
  let [couponShow, setCouponShow] = useState(false);
  const handleCoupon = () => {
    setCouponShow(!couponShow);
  };
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

  let [inputValues, setInputValues] = useState({
    fName: "",
    lName: "",
    country: "",
    address: "",
    townCity: "",
    postCode: "",
    phone: "",
    email: "",
  });
  let [errors, setErrors] = useState({});

  const handleInputs = (e) => {
    let { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    setErrors({ ...inputValues, [name]: "" });
  };
  const handleCheckOut = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!inputValues.fName.trim()) {
      validationErrors.fName = "First name is Required!!";
    }
    if (!inputValues.lName.trim()) {
      validationErrors.lName = "Last name is Required!!";
    }
    if (!inputValues.country.trim()) {
      validationErrors.country = "Country name is Required!!";
    }
    if (!inputValues.address.trim()) {
      validationErrors.address = "Address is Required!!";
    }
    if (!inputValues.townCity.trim()) {
      validationErrors.townCity = "Town/City name is Please!!";
    }
    if (!inputValues.postCode.trim()) {
      validationErrors.postCode = "Enter the Post Code!!";
    }
    if (!inputValues.phone.trim()) {
      validationErrors.phone = "Enter the Phone number!!";
    }
    if (!inputValues.email.trim()) {
      validationErrors.email = "Please enter valid Email!!";
    }

    setErrors(validationErrors);
  };
  return (
    <section className="font-dm">
      <Container>
        <Breadcrum
          title={"Checkout"}
          link={"/cart"}
          linkVal={"cart"}
          currentPage={window.location.pathname.split("/")[1]}
          currentPageLink={"/checkOut"}
        />
        <Flex className={"my-16 flex-col"}>
          <h5 className="text-[#767676] text-base">
            Have a coupon?
            <span
              className="text-[#262626] cursor-pointer underline font-semibold italic"
              onClick={handleCoupon}
            >
              {" "}
              Click here to enter your code
            </span>
          </h5>
          {couponShow && (
            <div className="w-[350px] py-10 bg-emerald-500 rounded-sm">
              <input
                type="text"
                className="bg-gray-200  ml-4 py-1 rounded-sm outline-none"
              />
              <button className="text-sm text-white ml-4 bg-slate-800 p-2 rounded-md hover:bg-indigo-800 transition-colors">
                Apply Coupon
              </button>
            </div>
          )}
        </Flex>
        <Title title={"Billing Details"} />
        <form onSubmit={handleCheckOut}>
          <Flex className={" sm:justify-between flex-col sm:flex-row"}>
            <div className="sm:w-[48%] w-full">
              <Input
                label={"First Name *"}
                type={"text"}
                placeholder={"first Name"}
                value={inputValues.fName}
                onChange={handleInputs}
                name={"fName"}
              />
              <p className="text-red-800">{errors.fName}</p>
            </div>
            <div className="sm:w-[48%] w-full">
              <Input
                label={"Last Name *"}
                type={"text"}
                placeholder={"last Name"}
                value={inputValues.lName}
                onChange={handleInputs}
                name={"lName"}
              />
              <p className="text-red-800">{errors.lName}</p>
            </div>
          </Flex>
          <Input
            label={"Companye Name (optional)"}
            type={"text"}
            placeholder={"Company Name"}
          />
          <div>
            <Input
              label={"Country *"}
              type={"text"}
              placeholder={"Country"}
              value={inputValues.country}
              onChange={handleInputs}
              name={"country"}
            />
            <p className="text-red-800">{errors.country}</p>
          </div>
          <div>
            <Input
              label={"Street Address *"}
              type={"text"}
              placeholder={"House number and street name"}
              value={inputValues.address}
              onChange={handleInputs}
              name={"address"}
            />
            <p className="text-red-800">{errors.address}</p>
          </div>
          <div>
            <Input
              label={"Town/City *"}
              type={"text"}
              placeholder={"Town/City"}
              value={inputValues.townCity}
              onChange={handleInputs}
              name={"townCity"}
            />
            <p className="text-red-800">{errors.townCity}</p>
          </div>
          <div>
            <Input
              label={"Post Code *"}
              type={"number"}
              placeholder={"Post Code"}
              value={inputValues.postCode}
              onChange={handleInputs}
              name={"postCode"}
            />
            <p className="text-red-800">{errors.postCode}</p>
          </div>
          <div>
            <Input
              label={"Phone *"}
              type={"tel"}
              placeholder={"Phone"}
              value={inputValues.phone}
              onChange={handleInputs}
              name={"phone"}
            />
            <p className="text-red-800">{errors.phone}</p>
          </div>
          <div>
            <Input
              label={"Email Address *"}
              type={"email"}
              placeholder={"Email"}
              value={inputValues.email}
              onChange={handleInputs}
              name={"email"}
            />
            <p className="text-red-800">{errors.email}</p>
          </div>
          <Flex className={"flex-col"}>
            <Title title={"Additional Information"} />
            <div>
              <h1 className="text-[#262626] text-base font-semibold underline italic">
                Other Notes (optional)
              </h1>
              <textarea
                name=""
                id=""
                className=" w-[345px] h-36  sm:w-[640px] sm:52 md:h-72 bg-slate-100 outline-indigo-400"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </Flex>
          <Title title={"Your Order"} />
          <Flex
            className={
              "sm:w-[644px] w-[350px] items-center text-[#262626] text-base font-bold flex-wrap"
            }
          >
            <h1 className="w-1/2 border py-3 pl-4">Product</h1>
            <h1 className="w-1/2 border border-l-0 py-3 pl-4">Total</h1>
            <h1 className="w-1/2 border py-3 pl-4">SubTotal</h1>
            <h1 className="w-1/2 border border-l-0 py-3 pl-4 font-normal">
              ${total}
            </h1>
            <h1 className="w-1/2 border py-3 pl-4">Total</h1>
            <h1 className="w-1/2 border border-l-0 py-3 pl-4 font-normal">
              ${total}
            </h1>
          </Flex>
          <div className="mt-16">
            <button
              className={
                "bg-[#262626] text-white inline-block py-4 px-6 text-base font-bold rounded-md hover:bg-slate-950 transition-all"
              }
              type="submit"
            >
              Proceed to Bank
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Checkout;
